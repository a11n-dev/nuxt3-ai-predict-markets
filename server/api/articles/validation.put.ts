import { Validation } from "~/server/models/validation.model";

export default defineEventHandler(async (event) => {
  const { userID, articleID, validationResult } = await readBody(event);

  const response = await Validation.updateOne(
    { _id: (await Validation.findOne({ user: userID }))?.id },
    {
      $push: { validated: { article: articleID, validationResult } },
    }
  );

  return response;
});
