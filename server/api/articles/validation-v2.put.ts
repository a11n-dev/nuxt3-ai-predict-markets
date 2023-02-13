import { v2Validation } from "~/server/models/validation.v2.model";

export default defineEventHandler(async (event) => {
  const { userID, articleId, validationResult } = await readBody(event);

  const response = await v2Validation.create({
    user: userID,
    articleId,
    validationResult
  })

  return response;
});
