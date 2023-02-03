import { r as require$$0 } from './nitro/node-server.mjs';

const { Schema, model } = require$$0;
const ValidationArticleSchema = new Schema(
  {
    text: { type: String, required: true },
    date: { type: String, required: true },
    link: { type: String, required: true }
  },
  { collection: "validation-articles" }
);
const ValidationArticle = model("ValidationArticle", ValidationArticleSchema);
var validation_article_mode = { ValidationArticleSchema, ValidationArticle };

export { validation_article_mode as v };
//# sourceMappingURL=validation.article.mode.mjs.map
