import { ParsedArticle } from "~/server/models/parsed.article.model";
import { v2Validation } from "~/server/models/validation.v2.model";

export default defineEventHandler(async (event) => {
  try {
    const { userID, tableView } = await readBody(event);

    const validated = (await v2Validation.find({ user: userID }).select("articleId -_id"))?.map((el) => el.articleId) || null;

    if (tableView) {
      return await ParsedArticle.find({ _id: { $nin: validated || [] } })?.populate('parserId', 'name -_id').select("title content excerpt date link");
    } else{
      return await ParsedArticle.findOne({ _id: { $nin: validated || [] } })?.populate('parserId', 'name -_id').select("title content excerpt date link");
    }
  } catch (error) {
    console.error(error);

    return error;
  }
});
