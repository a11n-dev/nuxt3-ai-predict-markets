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

const status_put = defineEventHandler(async (event) => {
  try {
    const { parserId, parserStatus, setAll } = await readBody(event);
    if (setAll === true) {
      const res = await parser_model.Parser.updateMany(
        {},
        {
          status: parserStatus
        }
      );
      return res;
    } else {
      const res = await parser_model.Parser.findByIdAndUpdate(parserId, {
        status: parserStatus
      });
      return res;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
});

export { status_put as default };
//# sourceMappingURL=status.put.mjs.map
