import { r as require$$0 } from './nitro/node-server.mjs';

const { Schema, model } = require$$0;
const v2ValidationSchema = new Schema(
  {
    user: { type: String, required: true },
    articleId: { type: Schema.Types.ObjectId, ref: "ParsedArticle", required: true },
    validationResult: { type: String, required: true }
  },
  { collection: "validation-v2" }
);
const v2Validation = model("v2Validation", v2ValidationSchema);
var validation_v2_model = { v2ValidationSchema, v2Validation };

export { validation_v2_model as v };
//# sourceMappingURL=validation.v2.model.mjs.map
