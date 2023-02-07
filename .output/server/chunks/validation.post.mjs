import { defineEventHandler, readBody } from 'h3';
import { v as validation_article_mode } from './validation.article.mode.mjs';
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
import 'node:fs';
import 'node:url';
import 'pathe';
import 'socket.io';
import '@tensorflow/tfjs-node';
import 'natural';

const validation_post = defineEventHandler(async (event) => {
  var _a, _b, _c;
  const { userID } = await readBody(event);
  const validated = ((_b = await ((_a = validation_model.Validation.findOne({ user: userID })) == null ? void 0 : _a.populate("validated.article", "id date").select("validated.article -_id"))) == null ? void 0 : _b.validated.map((el) => el.article.id)) || null;
  if (!validated) {
    await validation_model.Validation.create({
      user: userID,
      validated: []
    });
  }
  const article = await ((_c = validation_article_mode.ValidationArticle.findOne({ _id: { $nin: validated || [] } })) == null ? void 0 : _c.select("text link date"));
  return article;
});

export { validation_post as default };
//# sourceMappingURL=validation.post.mjs.map
