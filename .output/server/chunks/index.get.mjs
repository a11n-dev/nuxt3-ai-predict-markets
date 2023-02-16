import { defineEventHandler } from 'h3';
import { p as parser_model, a as parsed_article_model } from './nitro/node-server.mjs';
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

const index_get = defineEventHandler(async () => {
  const parsers = await parser_model.Parser.find({}).lean();
  for (const parser of parsers) {
    const parsed_24h = await parsed_article_model.ParsedArticle.count({
      parserId: parser._id,
      createdAt: {
        $gte: new Date(Date.now() - 24 * 60 * 60 * 1e3),
        $lt: new Date(Date.now())
      }
    });
    const parsed_7d = await parsed_article_model.ParsedArticle.count({
      parserId: parser._id,
      createdAt: {
        $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1e3),
        $lt: new Date(Date.now())
      }
    });
    const parsed = await parsed_article_model.ParsedArticle.count({
      parserId: parser._id
    });
    Object.assign(parser, { statistics: { parsed_24h, parsed_7d, parsed } });
  }
  return parsers;
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
