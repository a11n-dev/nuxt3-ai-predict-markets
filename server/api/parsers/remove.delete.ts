import { Parser } from "~/server/models/parser.model";
import { ParsedArticle } from "~/server/models/parsed.article.model";

export default defineEventHandler(async (event) => {
  try {
    const { parserId } = await readBody(event);

    if (!parserId) return "Need parser id to delete";

    // Delete all related parsed news articles
    await ParsedArticle.deleteMany({ parserId });

    const response = await Parser.findByIdAndDelete(parserId);

    return response;
  } catch (error) {
    console.error(error);

    return error;
  }
});
