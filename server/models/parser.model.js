const { Schema, model } = require("mongoose");

const ParserSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    link: { type: String, required: true, unique: true },
    postSelector: { type: String, required: true },
    linkSelector: { type: String, required: true },
    lastCheck: { type: Date, default: Date.now() },
    status: { type: Boolean, default: false },
  },
  { collection: "parsers" }
);

const Parser = model("Parser", ParserSchema);

module.exports = { ParserSchema, Parser };
