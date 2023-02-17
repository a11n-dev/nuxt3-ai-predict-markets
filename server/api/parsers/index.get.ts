import { Parser } from "~/server/models/parser.model";
import { ParsedArticle } from "~/server/models/parsed.article.model";

export default defineEventHandler(async () => {
  const parsers = await Parser.find({}).lean().exec();

  const parsed24hPromise = ParsedArticle.aggregate([{ $match: { parserId: { $in: parsers.map((parser) => parser._id) }, createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000), $lt: new Date(Date.now()) } } }, { $group: { _id: "$parserId", count: { $sum: 1 } } }]).exec();

  const parsed7dPromise = ParsedArticle.aggregate([{ $match: { parserId: { $in: parsers.map((parser) => parser._id) }, createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), $lt: new Date(Date.now()) } } }, { $group: { _id: "$parserId", count: { $sum: 1 } } }]).exec();

  const parsedPromise = ParsedArticle.aggregate([{ $match: { parserId: { $in: parsers.map((parser) => parser._id) } } }, { $group: { _id: "$parserId", count: { $sum: 1 } } }]).exec();

  const [parsed24h, parsed7d, parsed] = await Promise.all([parsed24hPromise, parsed7dPromise, parsedPromise]);

  for (const parser of parsers) {
    const parser24hCount = parsed24h.find(({ _id }) => _id.equals(parser._id))?.count ?? 0;
    const parser7dCount = parsed7d.find(({ _id }) => _id.equals(parser._id))?.count ?? 0;
    const parserCount = parsed.find(({ _id }) => _id.equals(parser._id))?.count ?? 0;

    Object.assign(parser, { statistics: { parsed_24h: parser24hCount, parsed_7d: parser7dCount, parsed: parserCount } });
  }

  return parsers;
});
