import { Parser } from "~/server/models/parser.model";

export default defineEventHandler(async (event) => {
  try {
    const { parserId, parserStatus, setAll } = await readBody(event);

    if (setAll === true) {
      const res = await Parser.updateMany(
        {},
        {
          status: parserStatus,
        }
      );

      return res;
    } else {
      const res = await Parser.findByIdAndUpdate(parserId, {
        status: parserStatus,
      });

      return res;
    }
  } catch (error) {
    console.error(error);

    return error;
  }
});
