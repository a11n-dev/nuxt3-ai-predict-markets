import { r as require$$0 } from './nitro/node-server.mjs';

const { Schema, model } = require$$0;
const ValidationSchema = new Schema(
  {
    user: { type: String, required: true, unique: true },
    validated: [
      {
        article: { type: Schema.Types.ObjectId, ref: "ValidationArticle", required: true },
        validationResult: { type: String, required: true }
      }
    ]
  },
  { collection: "validation" }
);
const Validation = model("Validation", ValidationSchema);
var validation_model = { ValidationSchema, Validation };

export { validation_model as v };
//# sourceMappingURL=validation.model.mjs.map
