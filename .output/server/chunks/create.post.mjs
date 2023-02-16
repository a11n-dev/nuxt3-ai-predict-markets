import { defineEventHandler, readBody } from 'h3';
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
import 'puppeteer';
import '@postlight/mercury-parser';
import 'jsdom';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'socket.io';
import '@tensorflow/tfjs-node';
import 'natural';

const create_post = defineEventHandler(async (event) => {
  try {
    const { parserName, resourceLink, postSelector, linkSelector } = await readBody(event);
    if (await parser_model.Parser.exists({ link: resourceLink }))
      return "Parser already exists";
    const response = await parser_model.Parser.create({
      name: parserName,
      link: resourceLink,
      postSelector,
      linkSelector
    });
    return { status: 200, response };
  } catch (error) {
    console.error(error);
    return { status: 500, error };
  }
});

export { create_post as default };
//# sourceMappingURL=create.post.mjs.map
