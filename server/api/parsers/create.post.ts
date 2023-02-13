import { Parser } from "~/server/models/parser.model";

export default defineEventHandler(async (event) => {
  try {
    const { parserName, resourceLink, postSelector, linkSelector } = await readBody(event);

    if (await Parser.exists({ link: resourceLink })) return "Parser already exists";

    const response = await Parser.create({
      name: parserName,
      link: resourceLink,
      postSelector,
      linkSelector,
    });

    return {status: 200, response};
  } catch (error) {
    console.error(error);

    return {status: 500, error};
  }
});
