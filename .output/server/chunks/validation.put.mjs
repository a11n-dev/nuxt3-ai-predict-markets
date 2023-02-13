import { defineEventHandler, readBody } from 'h3';
import { v as validation_model } from './validation.model.mjs';
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

const validation_put = defineEventHandler(async (event) => {
  var _a;
  const { userID, articleID, validationResult } = await readBody(event);
  const response = await validation_model.Validation.updateOne(
    { _id: (_a = await validation_model.Validation.findOne({ user: userID })) == null ? void 0 : _a.id },
    {
      $push: { validated: { article: articleID, validationResult } }
    }
  );
  return response;
});

export { validation_put as default };
//# sourceMappingURL=validation.put.mjs.map
