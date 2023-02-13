import { Parser } from "~/server/models/parser.model";

export default defineEventHandler(async () => {
  return await Parser.find({});
});
