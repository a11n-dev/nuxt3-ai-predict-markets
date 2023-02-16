import { defineEventHandler, readBody } from 'h3';
import { a as parsed_article_model } from './nitro/node-server.mjs';
import { v as validation_v2_model } from './validation.v2.model.mjs';
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

const validationV2_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e;
  try {
    const { userID, tableView } = await readBody(event);
    const validated = ((_a = await validation_v2_model.v2Validation.find({ user: userID }).select("articleId -_id")) == null ? void 0 : _a.map((el) => el.articleId)) || null;
    if (tableView) {
      if (userID === "999") {
        return await ((_b = parsed_article_model.ParsedArticle.find({ $and: [{ _id: { $nin: validated || [] } }, { parserId: "63ecb31a953adad3945c219a" }] })) == null ? void 0 : _b.populate("parserId", "name -_id").select("title content excerpt date link").limit(100));
      }
      return await ((_c = parsed_article_model.ParsedArticle.find({ $and: [{ _id: { $nin: validated || [] } }, { parserId: { $ne: "63ecb31a953adad3945c219a" } }] })) == null ? void 0 : _c.populate("parserId", "name -_id").select("title content excerpt date link"));
    } else {
      if (userID === "999") {
        return await ((_d = parsed_article_model.ParsedArticle.findOne({ $and: [{ _id: { $nin: validated || [] } }, { parserId: "63ecb31a953adad3945c219a" }] })) == null ? void 0 : _d.populate("parserId", "name -_id").select("title content excerpt date link").limit(100));
      }
      return await ((_e = parsed_article_model.ParsedArticle.findOne({ $and: [{ _id: { $nin: validated || [] } }, { parserId: { $ne: "63ecb31a953adad3945c219a" } }] })) == null ? void 0 : _e.populate("parserId", "name -_id").select("title content excerpt date link"));
    }
  } catch (error) {
    console.error(error);
    return error;
  }
});

export { validationV2_post as default };
//# sourceMappingURL=validation-v2.post.mjs.map
