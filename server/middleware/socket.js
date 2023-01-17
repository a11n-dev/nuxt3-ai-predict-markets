import { Server } from "socket.io";
import mongoose from "mongoose";

import { Article } from "../models/article.model";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  if (globalThis.io) return;
  globalThis.io = new Server(event.node.req.socket.server);

  try {
    await mongoose.connect(config.mgdbUri);
  } catch (error) {
    console.error(error);
  }

  io.on("connection", (socket) => {
    console.log("Connected", socket);

    socket.on("disconnecting", () => {
      console.log("Disconnected", socket);
    });

    socket.on("addArticle", async (data, cb) => {
      const response = await Article.create({
        text: data.text,
        user: data.user,
        marketCategory: data.marketCategory,
        articleCategory: data.articleCategory,
        articleDate: Date.now(),
        articleResult: data.result,
      });

      cb(response);
    });
  });
});
