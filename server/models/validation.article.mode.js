const { Schema, model } = require("mongoose");

const ValidationArticleSchema = new Schema(
  {
    text: { type: String, required: true },
    date: { type: String, required: true },
    link: { type: String, required: true },
  },
  { collection: "validation-articles" }
);

const ValidationArticle = model("ValidationArticle", ValidationArticleSchema);

module.exports = { ValidationArticleSchema, ValidationArticle };
