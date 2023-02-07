import { defineEventHandler, readBody } from 'h3';
import { a as article_model } from './nitro/node-server.mjs';
import { v as validation_article_mode } from './validation.article.mode.mjs';
import { v as validation_model } from './validation.model.mjs';
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

const statistics_post = defineEventHandler(async (event) => {
  var _a, _b;
  const { userID } = await readBody(event);
  const validated = (_b = await ((_a = validation_model.Validation.findOne({ user: userID })) == null ? void 0 : _a.select("validated -_id"))) == null ? void 0 : _b.validated;
  let accepted = 0;
  let rejected = 0;
  let skiped = 0;
  validated == null ? void 0 : validated.forEach((el) => {
    if (el.validationResult == "accept") {
      accepted++;
    } else if (el.validationResult == "reject") {
      rejected++;
    } else {
      skiped++;
    }
  });
  return {
    validation: {
      validated: { total: validated == null ? void 0 : validated.length, accepted, rejected, skiped },
      articlesCount: await validation_article_mode.ValidationArticle.count()
    },
    training: {
      total: await article_model.Article.count({ user: userID })
    }
  };
});

export { statistics_post as default };
//# sourceMappingURL=statistics.post.mjs.map
