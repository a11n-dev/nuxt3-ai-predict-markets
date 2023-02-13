import { defineEventHandler } from 'h3';
import { p as parser_model } from './nitro/node-server.mjs';
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
import 'request';
import 'cheerio';
import '@postlight/mercury-parser';
import '@mozilla/readability';
import 'jsdom';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'socket.io';
import '@tensorflow/tfjs-node';
import 'natural';

const index_get = defineEventHandler(async () => {
  return await parser_model.Parser.find({});
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
