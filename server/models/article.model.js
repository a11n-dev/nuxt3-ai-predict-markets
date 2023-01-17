const { Schema, model } = require("mongoose");

const ArticleSchema = new Schema(
  {
    text: { type: String, required: true },
    user: { type: String, required: true },
    marketCategory: { type: String, required: true },
    articleCategory: { type: String, required: true },
    articleDate: { type: String, required: true },
    articleResult: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { collection: "articles" }
);

const Article = model("Article", ArticleSchema);

module.exports = { ArticleSchema, Article };
