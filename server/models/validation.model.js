const { Schema, model } = require("mongoose");

const ValidationSchema = new Schema(
  {
    user: { type: String, required: true, unique: true },
    validated: [
      {
        article: { type: Schema.Types.ObjectId, ref: "ValidationArticle", required: true },
        validationResult: { type: String, required: true },
      },
    ],
  },
  { collection: "validation" }
);

const Validation = model("Validation", ValidationSchema);

module.exports = { ValidationSchema, Validation };
