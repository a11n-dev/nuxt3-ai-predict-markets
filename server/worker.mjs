import * as fs from "fs";
import { parentPort } from "worker_threads";

// AI
import natural from "natural";

import { Article } from "./models/article.model.js";

parentPort.on("message", () => {
  console.log("Worker start work");

  Article.find({ marketCategory: "stock" }, { limit: 10 }, (err, articles) => {
    if (err) throw err;

    parentPort.postMessage(articles);
  });
});

const preprocessText = (text) => {
  // Remove punctuation
  text = text.replace(/[^a-zA-Z0-9\s]/g, "");

  // Remove URLs
  text = text.replace(/(https?:\/\/[^\s]+)/g, "");

  // Remove hashtags
  text = text.replace(/#(\w+)/g, "");

  // Remove emojis
  text = text.replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, "");

  // Remove extra whitespace
  text = text.trim().replace(/\s+/g, " ");

  // Lemmatize the text and remove stop words
  // text = natural.PorterStemmer.tokenizeAndStem(text);

  return text;
};

// // Prepare data for training
// const data = articles.map((article) => {
//   const output = { up: 0, no: 0, down: 0 };
//   output[article.articleResult] = 1;

//   return {
//     input: preprocessText(article.text),
//     output,
//   };
// });

// console.log("Model training started");
// net.train(data, { log: true, logPeriod: 10, errorThresh: 0.1 });

// // Save model to a local JSON file
// fs.writeFileSync("./utils/model.json", JSON.stringify(net.toJSON(), null, 2));
