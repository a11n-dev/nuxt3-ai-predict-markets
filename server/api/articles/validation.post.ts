import { ValidationArticle } from "~/server/models/validation.article.mode";
import { Validation } from "~/server/models/validation.model";

export default defineEventHandler(async (event) => {
  const { userID } = await readBody(event);

  const validated = (await Validation.findOne({ user: userID })?.populate("validated.article", "id date").select("validated.article -_id"))?.validated.map((el) => el.article.id) || null;

  if (!validated) {
    await Validation.create({
      user: userID,
      validated: [],
    });
  }

  const article = await ValidationArticle.findOne({ _id: { $nin: validated || [] } })?.select("text link date");

  return article;
});
