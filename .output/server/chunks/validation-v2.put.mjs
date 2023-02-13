import { defineEventHandler, readBody } from 'h3';
import { v as validation_v2_model } from './validation.v2.model.mjs';
import './nitro/node-server.mjs';
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

const validationV2_put = defineEventHandler(async (event) => {
  const { userID, articleId, validationResult } = await readBody(event);
  const response = await validation_v2_model.v2Validation.create({
    user: userID,
    articleId,
    validationResult
  });
  return response;
});

export { validationV2_put as default };
//# sourceMappingURL=validation-v2.put.mjs.map
