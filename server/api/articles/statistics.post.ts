import { Article } from "~~/server/models/article.model";
import { ParsedArticle } from "~/server/models/parsed.article.model";
import { v2Validation } from "~/server/models/validation.v2.model";

export default defineEventHandler(async (event) => {
  const { userID } = await readBody(event);

  const validated = await v2Validation.find({ user: userID })

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
      articlesCount: await ParsedArticle.count(),
    },
    training: {
      total: await Article.count({ user: userID }),
    },
  };
});
