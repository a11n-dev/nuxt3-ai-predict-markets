import { Parser } from "~/server/models/parser.model";

export default defineEventHandler(async (event) => {
  try {
    const { parserId } = await readBody(event);

    if (!parserId) return "Need parser id to delete";

    const response = await Parser.findByIdAndDelete(parserId);

    return response;
  } catch (error) {
    console.error(error);

    return error;
  }
});
