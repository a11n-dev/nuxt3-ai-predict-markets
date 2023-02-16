import { defineEventHandler, readBody } from 'h3';
import { a as parsed_article_model, p as parser_model } from './nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import './nitro/config.mjs';
import 'scule';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'defu';
import 'radix3';
import 'mongoose';
import 'puppeteer';
import '@postlight/mercury-parser';
import 'jsdom';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'socket.io';
import '@tensorflow/tfjs-node';
import 'natural';

const remove_delete = defineEventHandler(async (event) => {
  try {
    const { parserId } = await readBody(event);
    if (!parserId)
      return "Need parser id to delete";
    await parsed_article_model.ParsedArticle.deleteMany({ parserId });
    const response = await parser_model.Parser.findByIdAndDelete(parserId);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
});

export { remove_delete as default };
//# sourceMappingURL=remove.delete.mjs.map
