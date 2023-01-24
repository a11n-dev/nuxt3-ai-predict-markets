import { Server } from "socket.io";
import mongoose from "mongoose";

// AI
import natural from "natural";
import * as tf from "@tensorflow/tfjs-node";

const tokenizer = new natural.WordTokenizer();
let uniqueWords = new Set();
let uniqueWordsArr = [];

import { Article } from "../models/article.model";

const model = tf.sequential();

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  if (globalThis.io) return;
  globalThis.io = new Server(event.node.req.socket.server);

  // Connect to mongodb
  try {
    await mongoose.connect(config.mgdbUri);
  } catch (error) {
    console.error(error);
  }

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

        cb({ status: 200, message: "Model successfully trained", model });
      } catch (err) {
        console.error(err);
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
  });
});

async function trainModel(data) {
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
