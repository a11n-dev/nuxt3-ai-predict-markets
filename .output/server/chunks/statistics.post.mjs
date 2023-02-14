import { defineEventHandler, readBody } from 'h3';
import { a as parsed_article_model, b as article_model } from './nitro/node-server.mjs';
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

const statistics_post = defineEventHandler(async (event) => {
  const { userID } = await readBody(event);
  const validated = await validation_v2_model.v2Validation.find({ user: userID });
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
  const parsed_24h = await parsed_article_model.ParsedArticle.count({
    createdAt: {
      $gte: new Date(Date.now() - 24 * 60 * 60 * 1e3),
      $lt: new Date(Date.now())
    }
  });
  const parsed_7d = await parsed_article_model.ParsedArticle.count({
    createdAt: {
      $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1e3),
      $lt: new Date(Date.now())
    }
  });
  const parsed = await parsed_article_model.ParsedArticle.count();
  return {
    validation: {
      validated: { total: validated == null ? void 0 : validated.length, accepted, rejected, skiped },
      articlesCount: await parsed_article_model.ParsedArticle.count()
    },
    training: {
      total: await article_model.Article.count({ user: userID })
    },
    parsers: {
      parsed_24h,
      parsed_7d,
      parsed
    }
  };
});

export { statistics_post as default };
//# sourceMappingURL=statistics.post.mjs.map
