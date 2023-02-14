import { Parser } from "~/server/models/parser.model";
import { ParsedArticle } from "~/server/models/parsed.article.model";

export default defineEventHandler(async () => {
  const parsers = await Parser.find({}).lean();

  for (const parser of parsers) {
    const parsed_24h = await ParsedArticle.count({
      parserId: parser._id,
      createdAt: {
        $gte: new Date(Date.now() - 24 * 60 * 60 * 1000),
        $lt: new Date(Date.now()),
      },
    });
    const parsed_7d = await ParsedArticle.count({
      parserId: parser._id,
      createdAt: {
        $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        $lt: new Date(Date.now()),
      },
    });

    const parsed = await ParsedArticle.count({
      parserId: parser._id,
    });

    Object.assign(parser, { statistics: { parsed_24h, parsed_7d, parsed } });
  }

  return parsers;
});
