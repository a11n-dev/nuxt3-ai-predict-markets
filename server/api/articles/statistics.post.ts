import { Article } from "~~/server/models/article.model";
import { ValidationArticle } from "~/server/models/validation.article.mode";
import { Validation } from "~/server/models/validation.model";

export default defineEventHandler(async (event) => {
  const { userID } = await readBody(event);

  const validated = (await Validation.findOne({ user: userID })?.select("validated -_id"))?.validated;

  let accepted: number = 0;
  let rejected: number = 0;
  let skiped: number = 0;

  validated?.forEach((el) => {
    if (el.validationResult == "accept") {
      accepted++;
    } else if (el.validationResult == "reject") {
      rejected++;
    } else {
      skiped++;
    }
  });

  return {
    validation: {
      validated: { total: validated?.length, accepted, rejected, skiped },
      articlesCount: await ValidationArticle.count(),
    },
    training: {
      total: await Article.count({ user: userID }),
    },
  };
});
