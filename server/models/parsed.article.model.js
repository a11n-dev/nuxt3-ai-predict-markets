const { Schema, model } = require("mongoose");

const ParsedArticleSchema = new Schema(
  {
    parserId: { type: Schema.Types.ObjectId, ref: "Parser", required: true },
    title: { type: String, lowercase: true, required: false },
    content: { type: String, lowercase: true, required: true },
    excerpt: { type: String, lowercase: true, required: false },
    date: { type: Date, default: Date.now(), required: true },
    link: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now() },
  },
  { collection: "parsed-articles" }
);

const ParsedArticle = model("ParsedArticle", ParsedArticleSchema);

module.exports = { ParsedArticleSchema, ParsedArticle };
