import { ParsedArticle } from "~/server/models/parsed.article.model";
import { v2Validation } from "~/server/models/validation.v2.model";

export default defineEventHandler(async (event) => {
  try {
    const { userID, tableView } = await readBody(event);

    const validated = (await v2Validation.find({ user: userID }).select("articleId -_id"))?.map((el) => el.articleId) || null;

    if (tableView) {
      if (userID === "999") {
        return await ParsedArticle.find({ $and: [{ _id: { $nin: validated || [] } }, { parserId: "63ecb31a953adad3945c219a" }] })
          ?.populate("parserId", "name -_id")
          .select("title content excerpt date link")
          .limit(100);
      }

      return await ParsedArticle.find({ $and: [{ _id: { $nin: validated || [] } }, { parserId: { $ne: "63ecb31a953adad3945c219a" } }] })
        ?.populate("parserId", "name -_id")
        .select("title content excerpt date link");
    } else {
      if (userID === "999") {
        return await ParsedArticle.findOne({ $and: [{ _id: { $nin: validated || [] } }, { parserId: "63ecb31a953adad3945c219a" }] })
          ?.populate("parserId", "name -_id")
          .select("title content excerpt date link")
          .limit(100);
      }

      return await ParsedArticle.findOne({ $and: [{ _id: { $nin: validated || [] } }, { parserId: { $ne: "63ecb31a953adad3945c219a" } }] })
        ?.populate("parserId", "name -_id")
        .select("title content excerpt date link");
    }
  } catch (error) {
    console.error(error);

    return error;
  }
});
