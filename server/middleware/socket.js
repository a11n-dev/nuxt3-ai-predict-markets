import { Server } from "socket.io";
import * as fs from "fs";

// AI
// import * as tf from "@tensorflow/tfjs-node";
import natural from "natural";

let uniqueWords = new Set();
let uniqueWordsArr = [];

let modelTraining = true;

import { Article } from "../models/article.model";
import { Validation } from "~/server/models/validation.model";
import { ValidationArticle } from "~/server/models/validation.article.mode";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  if (globalThis.io) return;
  globalThis.io = new Server(event.node.req.socket.server);

  // trainValidationModel(); // Train validation model call

  io.on("connection", (socket) => {
    console.log("Connected", socket.id);

    socket.on("disconnecting", () => {
      console.log("Disconnected", socket.id);
    });

    socket.on("add-article", async (data, cb) => {
      try {
        const response = await Article.create({
          text: data.text,
          user: data.user,
          marketCategory: data.marketCategory,
          articleCategory: data.articleCategory,
          articleDate: Date.now(),
          articleResult: data.articleResult,
          articleLink: data.articleLink,
        });

        cb(response);
      } catch (error) {
        cb(error);
      }
    });

    socket.on("train", async (cb) => {
      try {
        const articles = await Article.find({});
        const model = await trainModel(articles);

        modelTraining = false;

        cb({ status: 200, message: "Model successfully trained", model });
      } catch (err) {
        console.error(err);
        cb({ status: 500, message: err.message });
      }
    });

    socket.on("predict-validation", async (article, cb) => {
      try {
        const prediction = await validationPredict(article);

        // Send the class name as the response
        cb({ status: 200, prediction: prediction });
      } catch (err) {
        cb({ status: 500, message: err.message });
      }
    });

    socket.on("predict", async (article, cb) => {
      try {
        const prediction = await predict(article);

        // Send the class name as the response
        cb({ status: 200, prediction: prediction });
      } catch (err) {
        cb({ status: 500, message: err.message });
      }
    });

    setInterval(() => {
      socket.emit("model-training-status", modelTraining);
    }, 1000);
  });
});

async function getConsensus() {
  const validationResults = await Validation.find({ validated: { $exists: true, $not: { $size: 0 } } })
    ?.populate("validated.article", "id text link")
    .select("user validated.article validated.validationResult -_id");

  const consensusArr = [];

  // slice array for specific length
  validationResults.forEach((user) => {
    if (user.validated) {
      user.validated = user.validated.slice(1800, 2500);
    }
  });

  // combine validation results
  for (let index = 0; index < 2500 - 1800; index++) {
    const obj = {
      articleId: validationResults[0].validated[index].article.id,
      title: validationResults[0].validated[index].article.text.split(/\s+/).slice(0, 20).join(" "),
      text: validationResults[0].validated[index].article.text,
      link: validationResults[0].validated[index].article.link,
      user1: "",
      user2: "",
      user3: "",
      accepted: 0,
      rejected: 0,
      skiped: 0,
    };

    validationResults.forEach((result) => {
      switch (result.user) {
        case "1":
          obj.user1 = result.validated[index].validationResult;
          break;
        case "2":
          obj.user2 = result.validated[index].validationResult;
          break;
        case "3":
          obj.user3 = result.validated[index].validationResult;
          break;
        default:
          break;
      }

      switch (result.validated[index].validationResult) {
        case "accept":
          obj.accepted++;
          break;
        case "reject":
          obj.rejected++;
          break;
        case "skip":
          obj.skiped++;
          break;
        default:
          break;
      }
    });

    consensusArr.push(obj);
  }

  const consensusResult = [];

  consensusArr.forEach(async (el) => {
    let result = "";

    if (el.accepted >= 2) {
      result = "accepted";
    } else if (el.rejected >= 2) {
      result = "rejected";
    }
    if (result) {
      const { accepted, rejected, skiped, ...newObj } = el;

      consensusResult.push({
        ...newObj,
        consensusResult: result,
      });
    }
  });

  for (const [index, el] of consensusResult.entries()) {
    consensusResult[index].aiPrediction = await validationPredict(el.text);
  }

  fs.writeFileSync(
    "./utils/consensus-accepted.json",
    JSON.stringify(
      consensusResult.filter((el) => el.consensusResult == "accepted"),
      null,
      2
    )
  );
  fs.writeFileSync(
    "./utils/consensus-rejected.json",
    JSON.stringify(
      consensusResult.filter((el) => el.consensusResult == "rejected"),
      null,
      2
    )
  );

  console.log("end");
}

// Train model for news articles validatoin
async function trainValidationModel() {
  const consensus = JSON.parse(fs.readFileSync("./utils/consensus.json"));
  const articles = await ValidationArticle.find({ _id: { $in: consensus.map((el) => el.articleId) } }).select("text");

  const data = [];

  consensus.forEach((el) => {
    if (el.result != "no consensus") {
      const article = articles.find((aEl) => aEl.id == el.articleId);

      data.push({
        text: article.text,
        articleResult: el.consensusResult,
      });
    }
  });

  const tokenizer = new natural.WordTokenizer();
  // Preprocess the text
  const preprocessedArticles = data.map((article) => {
    const text = article.text.toLowerCase();
    const tokens = tokenizer.tokenize(text);
    return {
      tokens,
      articleResult: article.articleResult,
    };
  });

  // Prepare the data to teach the model
  const inputs = preprocessedArticles.map((article) => article.tokens);
  inputs.forEach((input) => {
    input.forEach((word) => uniqueWords.add(word));
  });
  uniqueWordsArr = [...uniqueWords];
  const inputsNumerical = inputs.map((input) => {
    let inputData = new Array(uniqueWordsArr.length).fill(0);
    input.forEach((word) => {
      const index = uniqueWordsArr.indexOf(word);
      inputData[index] = 1;
    });
    return inputData;
  });

  const outputs = preprocessedArticles.map((article) => {
    if (article.articleResult === "accepted") {
      return [1, 0];
    } else if (article.articleResult === "rejected") {
      return [0, 1];
    }
  });

  console.log(`Number of articles: ${inputs.length}`);

  const inputsTensor = tf.tensor2d(inputsNumerical);
  const outputsTensor = tf.tensor2d(outputs);

  // Check the shapes of the inputs and outputs tensors
  console.log(`inputsTensor shape: ${inputsTensor.shape}`);
  console.log(`outputsTensor shape: ${outputsTensor.shape}`);

  // Check the data types of the inputs and outputs tensors
  console.log(`inputsTensor dtype: ${inputsTensor.dtype}`);
  console.log(`outputsTensor dtype: ${outputsTensor.dtype}`);

  // Teach the model
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 32, inputShape: [inputsTensor.shape[1]] }));
  model.add(tf.layers.dense({ units: 2, activation: "softmax" }));
  model.compile({ loss: "categoricalCrossentropy", optimizer: "adam" });

  // check the architecture of the model
  console.log(model.summary());

  // Train the model
  const history = await model.fit(inputsTensor, outputsTensor, { epochs: 20 });

  // Save the model to a local JSON file
  await model.save(`file://utils/models/validation`);

  modelTraining = false;

  getConsensus(); // Check consensus results call
}

async function validationPredict(articleText) {
  const tokenizer = new natural.WordTokenizer();
  // load the model
  const model = await tf.loadLayersModel("file://utils/models/validation/model.json");

  // Tokenize the input text
  const inputTokens = tokenizer.tokenize(articleText);

  // Create a numerical representation of the input
  let inputData = new Array(uniqueWordsArr.length).fill(0);
  inputTokens.forEach((word) => {
    const index = uniqueWordsArr.indexOf(word);
    if (index !== -1) inputData[index] = 1;
  });
  // Convert the input data to a tensor
  const inputTensor = tf.tensor2d([inputData]);

  // Use the model to make a prediction
  const prediction = model.predict(inputTensor);
  const predictionData = await prediction.data();
  // Find the index of the highest value in the prediction data
  let max = 0;
  let maxIndex = 0;
  for (let i = 0; i < predictionData.length; i++) {
    if (predictionData[i] > max) {
      max = predictionData[i];
      maxIndex = i;
    }
  }

  // Map the prediction index to a string value
  if (maxIndex === 0) {
    return "accepted";
  } else {
    return "rejected";
  }
}

// Train model (merket unfluense)

async function trainModel(data) {
  const tokenizer = new natural.WordTokenizer();
  // Preprocess the text
  const preprocessedArticles = data.map((article) => {
    const text = article.text.toLowerCase();
    const tokens = tokenizer.tokenize(text);
    return {
      tokens,
      articleResult: article.articleResult,
    };
  });

  // Prepare the data to teach the model
  const inputs = preprocessedArticles.map((article) => article.tokens);
  inputs.forEach((input) => {
    input.forEach((word) => uniqueWords.add(word));
  });
  uniqueWordsArr = [...uniqueWords];
  const inputsNumerical = inputs.map((input) => {
    let inputData = new Array(uniqueWordsArr.length).fill(0);
    input.forEach((word) => {
      const index = uniqueWordsArr.indexOf(word);
      inputData[index] = 1;
    });
    return inputData;
  });

  const outputs = preprocessedArticles.map((article) => {
    if (article.articleResult === "up") {
      return [1, 0, 0];
    } else if (article.articleResult === "down") {
      return [0, 1, 0];
    } else {
      return [0, 0, 1];
    }
  });

  console.log(`Number of articles: ${inputs.length}`);

  const inputsTensor = tf.tensor2d(inputsNumerical);
  const outputsTensor = tf.tensor2d(outputs);

  // Check the shapes of the inputs and outputs tensors
  console.log(`inputsTensor shape: ${inputsTensor.shape}`);
  console.log(`outputsTensor shape: ${outputsTensor.shape}`);

  // Check the data types of the inputs and outputs tensors
  console.log(`inputsTensor dtype: ${inputsTensor.dtype}`);
  console.log(`outputsTensor dtype: ${outputsTensor.dtype}`);

  // Teach the model
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 32, inputShape: [inputsTensor.shape[1]] }));
  model.add(tf.layers.dense({ units: 3, activation: "softmax" }));
  model.compile({ loss: "categoricalCrossentropy", optimizer: "adam" });

  // check the architecture of the model
  console.log(model.summary());

  // Train the model
  const history = await model.fit(inputsTensor, outputsTensor, { epochs: 15 });

  // Save the model to a local JSON file
  model.save(`file://utils/`);

  return history;
}

// Define a predict function
const predict = async (articleText) => {
  const tokenizer = new natural.WordTokenizer();
  // load the model
  const model = await tf.loadLayersModel("file://utils/model.json");

  // Tokenize the input text
  const inputTokens = tokenizer.tokenize(articleText);

  // Create a numerical representation of the input
  let inputData = new Array(uniqueWordsArr.length).fill(0);
  inputTokens.forEach((word) => {
    const index = uniqueWordsArr.indexOf(word);
    if (index !== -1) inputData[index] = 1;
  });
  // Convert the input data to a tensor
  const inputTensor = tf.tensor2d([inputData]);

  // Use the model to make a prediction
  const prediction = model.predict(inputTensor);
  const predictionData = await prediction.data();
  // Find the index of the highest value in the prediction data
  let max = 0;
  let maxIndex = 0;
  for (let i = 0; i < predictionData.length; i++) {
    if (predictionData[i] > max) {
      max = predictionData[i];
      maxIndex = i;
    }
  }

  // Map the prediction index to a string value
  if (maxIndex === 0) {
    return "price might go up";
  } else if (maxIndex === 1) {
    return "price might go down";
  } else {
    return "no price impact";
  }
};
