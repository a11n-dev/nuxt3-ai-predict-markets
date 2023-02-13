const { Schema, model } = require("mongoose");

const v2ValidationSchema = new Schema(
  {
    user: { type: String, required: true },
    articleId: { type: Schema.Types.ObjectId, ref: "ParsedArticle", required: true },
    validationResult: { type: String, required: true },
  },
  { collection: "validation-v2" }
);

const v2Validation = model("v2Validation", v2ValidationSchema);

module.exports = { v2ValidationSchema, v2Validation };
