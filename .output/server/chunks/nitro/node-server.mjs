globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$2 } from 'node:http';
import { Server as Server$1 } from 'node:https';
import destr from 'destr';
import { eventHandler, setHeaders, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, getRequestHeader, getRequestHeaders, setResponseHeader, createError, createApp, createRouter as createRouter$1, lazyEventHandler, toNodeListener } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { u as useRuntimeConfig } from './config.mjs';
import { hash } from 'ohash';
import { withoutBase, parseURL, withQuery, joinURL, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import defu from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import * as mongoose from 'mongoose';
import mongoose__default from 'mongoose';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import { Server } from 'socket.io';
import * as tf from '@tensorflow/tfjs-node';
import natural from 'natural';

const _assets = {
  ["server:css:main.css"]: {
    import: () => import('../raw/main.mjs').then(r => r.default || r),
    meta: {"type":"text/css; charset=utf-8","etag":"\"40-4cl6UrRtK6dc1xjrjtFi200agaE\"","mtime":"2023-01-20T10:05:41.172Z"}
  },
  ["server:css:normilize.css"]: {
    import: () => import('../raw/normilize.mjs').then(r => r.default || r),
    meta: {"type":"text/css; charset=utf-8","etag":"\"17fe-5r3my2LwInaobSCcbLwVfgvY2qA\"","mtime":"2022-10-18T18:02:56.234Z"}
  },
  ["server:font:Gilroy-Black.eot"]: {
    import: () => import('../raw/Gilroy-Black.mjs').then(r => r.default || r),
    meta: {"type":"application/vnd.ms-fontobject","etag":"\"144b4-qmMTjGb0JVT/ZeawvRN3AIEnIYQ\"","mtime":"2019-01-18T00:12:04.000Z"}
  },
  ["server:font:Gilroy-Black.ttf"]: {
    import: () => import('../raw/Gilroy-Black2.mjs').then(r => r.default || r),
    meta: {"type":"font/ttf","etag":"\"14408-D/qkFj6dwJdBKKK9u8tPS6IQGE0\"","mtime":"2019-01-18T00:12:04.000Z"}
  },
  ["server:font:Gilroy-Black.woff"]: {
    import: () => import('../raw/Gilroy-Black3.mjs').then(r => r.default || r),
    meta: {"type":"font/woff","etag":"\"94a0-GyQ4ett4ZELAK6TLbiUPFyiKmCo\"","mtime":"2019-01-18T00:12:04.000Z"}
  },
  ["server:font:Gilroy-Black.woff2"]: {
    import: () => import('../raw/Gilroy-Black4.mjs').then(r => r.default || r),
    meta: {"type":"font/woff2","etag":"\"69b8-79mcsASfEv8Q0bwb4VaZ5O+FhJo\"","mtime":"2019-01-18T00:12:04.000Z"}
  },
  ["server:font:Gilroy-BlackItalic.eot"]: {
    import: () => import('../raw/Gilroy-BlackItalic.mjs').then(r => r.default || r),
    meta: {"type":"application/vnd.ms-fontobject","etag":"\"15352-Q6fePi8jDRws14B8osA2y1r5y1M\"","mtime":"2019-01-18T00:12:06.000Z"}
  },
  ["server:font:Gilroy-BlackItalic.ttf"]: {
    import: () => import('../raw/Gilroy-BlackItalic2.mjs').then(r => r.default || r),
    meta: {"type":"font/ttf","etag":"\"1528c-igjCSmJ2wQkJRDUoE9JXyDs8qgA\"","mtime":"2019-01-18T00:12:06.000Z"}
  },
  ["server:font:Gilroy-BlackItalic.woff"]: {
    import: () => import('../raw/Gilroy-BlackItalic3.mjs').then(r => r.default || r),
    meta: {"type":"font/woff","etag":"\"a02c-kGOR42Op3O8VZ2UaSfjDr2UqIFE\"","mtime":"2019-01-18T00:12:06.000Z"}
  },
  ["server:font:Gilroy-BlackItalic.woff2"]: {
    import: () => import('../raw/Gilroy-BlackItalic4.mjs').then(r => r.default || r),
    meta: {"type":"font/woff2","etag":"\"710c-bf/lHZ5qpjrEAepGJu4TH20vOJY\"","mtime":"2019-01-18T00:12:06.000Z"}
  },
  ["server:font:Gilroy-Bold.eot"]: {
    import: () => import('../raw/Gilroy-Bold.mjs').then(r => r.default || r),
    meta: {"type":"application/vnd.ms-fontobject","etag":"\"146a8-O9fbEyUUeCAJsekgGj0c9GLCI7M\"","mtime":"2019-01-18T00:12:04.000Z"}
  },
  ["server:font:Gilroy-Bold.ttf"]: {
    import: () => import('../raw/Gilroy-Bold2.mjs').then(r => r.default || r),
    meta: {"type":"font/ttf","etag":"\"14600-+Rt/Q7dy8giu0rn67KxL43VDf0I\"","mtime":"2019-01-18T00:12:04.000Z"}
  },
  ["server:font:Gilroy-Bold.woff"]: {
    import: () => import('../raw/Gilroy-Bold3.mjs').then(r => r.default || r),
    meta: {"type":"font/woff","etag":"\"9558-fSH57ZuaYJBjFOk4HVonUqOLVlY\"","mtime":"2019-01-18T00:12:04.000Z"}
  },
  ["server:font:Gilroy-Bold.woff2"]: {
    import: () => import('../raw/Gilroy-Bold4.mjs').then(r => r.default || r),
    meta: {"type":"font/woff2","etag":"\"6ab0-kL/itWhQoKBvAVtk1gkT7kZwhZQ\"","mtime":"2019-01-18T00:12:04.000Z"}
  },
  ["server:font:Gilroy-BoldItalic.eot"]: {
    import: () => import('../raw/Gilroy-BoldItalic.mjs').then(r => r.default || r),
    meta: {"type":"application/vnd.ms-fontobject","etag":"\"155b2-x3XeTa+wEofEXbYFoI++3b6Ub9I\"","mtime":"2019-01-18T00:12:08.000Z"}
  },
  ["server:font:Gilroy-BoldItalic.ttf"]: {
    import: () => import('../raw/Gilroy-BoldItalic2.mjs').then(r => r.default || r),
    meta: {"type":"font/ttf","etag":"\"154f0-51qkGAXJu0qitlGpkS88zKJUx7c\"","mtime":"2019-01-18T00:12:08.000Z"}
  },
  ["server:font:Gilroy-BoldItalic.woff"]: {
    import: () => import('../raw/Gilroy-BoldItalic3.mjs').then(r => r.default || r),
    meta: {"type":"font/woff","etag":"\"a0d4-KX8naaQLm3K2lYiwUYvA9Cxw32Q\"","mtime":"2019-01-18T00:12:08.000Z"}
  },
  ["server:font:Gilroy-BoldItalic.woff2"]: {
    import: () => import('../raw/Gilroy-BoldItalic4.mjs').then(r => r.default || r),
    meta: {"type":"font/woff2","etag":"\"71c0-gR+UmVHEIzfJtvmCAYTroLQFx/E\"","mtime":"2019-01-18T00:12:10.000Z"}
  },
  ["server:font:Gilroy-Extrabold.eot"]: {
    import: () => import('../raw/Gilroy-Extrabold.mjs').then(r => r.default || r),
    meta: {"type":"application/vnd.ms-fontobject","etag":"\"14210-eVv7DNUJikZ+oj6NcvguUmx3FEs\"","mtime":"2019-01-18T00:12:08.000Z"}
  },
  ["server:font:Gilroy-Extrabold.ttf"]: {
    import: () => import('../raw/Gilroy-Extrabold2.mjs').then(r => r.default || r),
    meta: {"type":"font/ttf","etag":"\"14154-vDjs2jtkP/bmc9Sa9MU46yCn9uQ\"","mtime":"2019-01-18T00:12:08.000Z"}
  },
  ["server:font:Gilroy-Extrabold.woff"]: {
    import: () => import('../raw/Gilroy-Extrabold3.mjs').then(r => r.default || r),
    meta: {"type":"font/woff","etag":"\"8fb0-ZiiULFTaVOdRaEJWnYFL7wB1EqU\"","mtime":"2019-01-18T00:12:08.000Z"}
  },
  ["server:font:Gilroy-Extrabold.woff2"]: {
    import: () => import('../raw/Gilroy-Extrabold4.mjs').then(r => r.default || r),
    meta: {"type":"font/woff2","etag":"\"65f4-R/CJAOlDmY4bcnJKTOKfgRbOXTM\"","mtime":"2019-01-18T00:12:08.000Z"}
  },
  ["server:font:Gilroy-ExtraboldItalic.eot"]: {
    import: () => import('../raw/Gilroy-ExtraboldItalic.mjs').then(r => r.default || r),
    meta: {"type":"application/vnd.ms-fontobject","etag":"\"150e2-6BaVey1K58GfDcF3zkeAsxc76/U\"","mtime":"2019-01-18T00:12:02.000Z"}
  },
  ["server:font:Gilroy-ExtraboldItalic.ttf"]: {
    import: () => import('../raw/Gilroy-ExtraboldItalic2.mjs').then(r => r.default || r),
    meta: {"type":"font/ttf","etag":"\"1500c-tudBl/z7EKsBxJOy8tIdpGLFdXc\"","mtime":"2019-01-18T00:12:02.000Z"}
  },
  ["server:font:Gilroy-ExtraboldItalic.woff"]: {
    import: () => import('../raw/Gilroy-ExtraboldItalic3.mjs').then(r => r.default || r),
    meta: {"type":"font/woff","etag":"\"9bd8-ncii2CBI3DDRXmoWjVhQQ4X5B68\"","mtime":"2019-01-18T00:12:02.000Z"}
  },
  ["server:font:Gilroy-ExtraboldItalic.woff2"]: {
    import: () => import('../raw/Gilroy-ExtraboldItalic4.mjs').then(r => r.default || r),
    meta: {"type":"font/woff2","etag":"\"6d7c-4U5axJ0Q5C0K2n8kg+GIXJLguqQ\"","mtime":"2019-01-18T00:12:02.000Z"}
  },
  ["server:font:Gilroy-Heavy.eot"]: {
    import: () => import('../raw/Gilroy-Heavy.mjs').then(r => r.default || r),
    meta: {"type":"application/vnd.ms-fontobject","etag":"\"14418-rAHpBP/FuYAaOYo36w5H3XuS/HM\"","mtime":"2019-01-18T00:12:10.000Z"}
  },
  ["server:font:Gilroy-Heavy.ttf"]: {
    import: () => import('../raw/Gilroy-Heavy2.mjs').then(r => r.default || r),
    meta: {"type":"font/ttf","etag":"\"1428c-Xw6O0M9J2xNqaWfJV5YLYiMlQC8\"","mtime":"2019-01-18T00:12:10.000Z"}
  },
  ["server:font:Gilroy-Heavy.woff"]: {
    import: () => import('../raw/Gilroy-Heavy3.mjs').then(r => r.default || r),
    meta: {"type":"font/woff","etag":"\"9188-x5l7kZg630wjp9Jz59kWr5gx8Zo\"","mtime":"2019-01-18T00:12:10.000Z"}
  },
  ["server:font:Gilroy-Heavy.woff2"]: {
    import: () => import('../raw/Gilroy-Heavy4.mjs').then(r => r.default || r),
    meta: {"type":"font/woff2","etag":"\"6784-TFXZj6YLlyou8gsx2aR3CfiOdno\"","mtime":"2019-01-18T00:12:10.000Z"}
  },
  ["server:font:Gilroy-HeavyItalic.eot"]: {
    import: () => import('../raw/Gilroy-HeavyItalic.mjs').then(r => r.default || r),
    meta: {"type":"application/vnd.ms-fontobject","etag":"\"154ac-a9Y6xSBgr3OsW0nTsR6nQTHE0+0\"","mtime":"2019-01-18T00:12:08.000Z"}
  },
  ["server:font:Gilroy-HeavyItalic.ttf"]: {
    import: () => import('../raw/Gilroy-HeavyItalic2.mjs').then(r => r.default || r),
    meta: {"type":"font/ttf","etag":"\"152f8-j0ELYMvNsPJXoRbkQoyfikdm0T4\"","mtime":"2019-01-18T00:12:08.000Z"}
  },
  ["server:font:Gilroy-HeavyItalic.woff"]: {
    import: () => import('../raw/Gilroy-HeavyItalic3.mjs').then(r => r.default || r),
    meta: {"type":"font/woff","etag":"\"9e84-AaGKCj3bTbb/JP44SLlJZpU8bIU\"","mtime":"2019-01-18T00:12:08.000Z"}
  },
  ["server:font:Gilroy-HeavyItalic.woff2"]: {
    import: () => import('../raw/Gilroy-HeavyItalic4.mjs').then(r => r.default || r),
    meta: {"type":"font/woff2","etag":"\"6f48-4Bz5R2KcnOsqI0va7pL7+iPPz8U\"","mtime":"2019-01-18T00:12:08.000Z"}
  },
  ["server:font:Gilroy-Light.eot"]: {
    import: () => import('../raw/Gilroy-Light.mjs').then(r => r.default || r),
    meta: {"type":"application/vnd.ms-fontobject","etag":"\"14ba4-JZrtbXI+6sw63/VxAfAuMfSb2hQ\"","mtime":"2019-01-18T00:12:04.000Z"}
  },
  ["server:font:Gilroy-Light.ttf"]: {
    import: () => import('../raw/Gilroy-Light2.mjs').then(r => r.default || r),
    meta: {"type":"font/ttf","etag":"\"14af8-DjJvGX2IJWJF7OiZq5WFXMGvixg\"","mtime":"2019-01-18T00:12:04.000Z"}
  },
  ["server:font:Gilroy-Light.woff"]: {
    import: () => import('../raw/Gilroy-Light3.mjs').then(r => r.default || r),
    meta: {"type":"font/woff","etag":"\"9400-+nn/0I+letMr6Na7DjQrCKKTUHw\"","mtime":"2019-01-18T00:12:04.000Z"}
  },
  ["server:font:Gilroy-Light.woff2"]: {
    import: () => import('../raw/Gilroy-Light4.mjs').then(r => r.default || r),
    meta: {"type":"font/woff2","etag":"\"6870-oS0I0TZzatMrrjvI4KA/7ocJvR8\"","mtime":"2019-01-18T00:12:04.000Z"}
  },
  ["server:font:Gilroy-LightItalic.eot"]: {
    import: () => import('../raw/Gilroy-LightItalic.mjs').then(r => r.default || r),
    meta: {"type":"application/vnd.ms-fontobject","etag":"\"15b86-RAIS5KPqZUUom1yjKfOtNY5AneY\"","mtime":"2019-01-18T00:12:10.000Z"}
  },
  ["server:font:Gilroy-LightItalic.ttf"]: {
    import: () => import('../raw/Gilroy-LightItalic2.mjs').then(r => r.default || r),
    meta: {"type":"font/ttf","etag":"\"15ac0-CXwtut12LylSfM+kNOd5W5oVM14\"","mtime":"2019-01-18T00:12:10.000Z"}
  },
  ["server:font:Gilroy-LightItalic.woff"]: {
    import: () => import('../raw/Gilroy-LightItalic3.mjs').then(r => r.default || r),
    meta: {"type":"font/woff","etag":"\"9f0c-jR5TTxLVp9kLplmaUO3UM8wSGeA\"","mtime":"2019-01-18T00:12:10.000Z"}
  },
  ["server:font:Gilroy-LightItalic.woff2"]: {
    import: () => import('../raw/Gilroy-LightItalic4.mjs').then(r => r.default || r),
    meta: {"type":"font/woff2","etag":"\"7020-/kMRc2c0QfpKbuV8Ei0XZMjVtVA\"","mtime":"2019-01-18T00:12:10.000Z"}
  },
  ["server:font:Gilroy-Medium.eot"]: {
    import: () => import('../raw/Gilroy-Medium.mjs').then(r => r.default || r),
    meta: {"type":"application/vnd.ms-fontobject","etag":"\"14b04-un2bSiCIHmQnsQv+usRKzSwQ9do\"","mtime":"2019-01-18T00:12:06.000Z"}
  },
  ["server:font:Gilroy-Medium.ttf"]: {
    import: () => import('../raw/Gilroy-Medium2.mjs').then(r => r.default || r),
    meta: {"type":"font/ttf","etag":"\"14a54-4UMGqRSR+QnG4lvYbL0+uDuTJSY\"","mtime":"2019-01-18T00:12:06.000Z"}
  },
  ["server:font:Gilroy-Medium.woff"]: {
    import: () => import('../raw/Gilroy-Medium3.mjs').then(r => r.default || r),
    meta: {"type":"font/woff","etag":"\"9730-K7dLmKuUwArVqP1cEx4+UeZfgrk\"","mtime":"2019-01-18T00:12:06.000Z"}
  },
  ["server:font:Gilroy-Medium.woff2"]: {
    import: () => import('../raw/Gilroy-Medium4.mjs').then(r => r.default || r),
    meta: {"type":"font/woff2","etag":"\"6b98-3McafuJLlPNuErFV7iFKZZmgZ70\"","mtime":"2019-01-18T00:12:06.000Z"}
  },
  ["server:font:Gilroy-MediumItalic.eot"]: {
    import: () => import('../raw/Gilroy-MediumItalic.mjs').then(r => r.default || r),
    meta: {"type":"application/vnd.ms-fontobject","etag":"\"15c76-hW9VgsNtPyQNqj+XJSMAQnuACtM\"","mtime":"2019-01-18T00:12:06.000Z"}
  },
  ["server:font:Gilroy-MediumItalic.ttf"]: {
    import: () => import('../raw/Gilroy-MediumItalic2.mjs').then(r => r.default || r),
    meta: {"type":"font/ttf","etag":"\"15abc-cWWGnKx9yY6SutO4KRpXNnTx8bE\"","mtime":"2019-01-18T00:12:06.000Z"}
  },
  ["server:font:Gilroy-MediumItalic.woff"]: {
    import: () => import('../raw/Gilroy-MediumItalic3.mjs').then(r => r.default || r),
    meta: {"type":"font/woff","etag":"\"a2bc-0pI6cz0cMtYqZl2mkcQWCWvHKxc\"","mtime":"2019-01-18T00:12:06.000Z"}
  },
  ["server:font:Gilroy-MediumItalic.woff2"]: {
    import: () => import('../raw/Gilroy-MediumItalic4.mjs').then(r => r.default || r),
    meta: {"type":"font/woff2","etag":"\"7344-VK4+y5ty3xT1lbg8GMwEnYYpqFU\"","mtime":"2019-01-18T00:12:06.000Z"}
  },
  ["server:font:Gilroy-Regular.eot"]: {
    import: () => import('../raw/Gilroy-Regular.mjs').then(r => r.default || r),
    meta: {"type":"application/vnd.ms-fontobject","etag":"\"14a00-9sZLSz3kh7Xs7hTQ8BbC48FUq2w\"","mtime":"2019-01-18T00:12:02.000Z"}
  },
  ["server:font:Gilroy-Regular.ttf"]: {
    import: () => import('../raw/Gilroy-Regular2.mjs').then(r => r.default || r),
    meta: {"type":"font/ttf","etag":"\"1494c-Q7MbMMNhAuWqiGg0+uqeJcNfveY\"","mtime":"2019-01-18T00:12:02.000Z"}
  },
  ["server:font:Gilroy-Regular.woff"]: {
    import: () => import('../raw/Gilroy-Regular3.mjs').then(r => r.default || r),
    meta: {"type":"font/woff","etag":"\"9060-zzBIHs4IpN9vMO6QHuVgaunEh+U\"","mtime":"2019-01-18T00:12:02.000Z"}
  },
  ["server:font:Gilroy-Regular.woff2"]: {
    import: () => import('../raw/Gilroy-Regular4.mjs').then(r => r.default || r),
    meta: {"type":"font/woff2","etag":"\"6620-YvgRexQI9BpbiVYmIjO7fUYoOpg\"","mtime":"2019-01-18T00:12:02.000Z"}
  },
  ["server:font:Gilroy-RegularItalic.eot"]: {
    import: () => import('../raw/Gilroy-RegularItalic.mjs').then(r => r.default || r),
    meta: {"type":"application/vnd.ms-fontobject","etag":"\"15a72-upp6Gldftuv2GkL8POldzhTXiWk\"","mtime":"2019-01-18T00:12:06.000Z"}
  },
  ["server:font:Gilroy-RegularItalic.ttf"]: {
    import: () => import('../raw/Gilroy-RegularItalic2.mjs').then(r => r.default || r),
    meta: {"type":"font/ttf","etag":"\"159a4-jphfXW2D53WbVwX0Y8DyxCTXlD4\"","mtime":"2019-01-18T00:12:06.000Z"}
  },
  ["server:font:Gilroy-RegularItalic.woff"]: {
    import: () => import('../raw/Gilroy-RegularItalic3.mjs').then(r => r.default || r),
    meta: {"type":"font/woff","etag":"\"9d20-NULP/lst7buaO40nra2OhXXstOA\"","mtime":"2019-01-18T00:12:06.000Z"}
  },
  ["server:font:Gilroy-RegularItalic.woff2"]: {
    import: () => import('../raw/Gilroy-RegularItalic4.mjs').then(r => r.default || r),
    meta: {"type":"font/woff2","etag":"\"6e18-NO6Zd1gvUsAbQo2RzADs0UbvMTU\"","mtime":"2019-01-18T00:12:08.000Z"}
  },
  ["server:font:Gilroy-Semibold.eot"]: {
    import: () => import('../raw/Gilroy-Semibold.mjs').then(r => r.default || r),
    meta: {"type":"application/vnd.ms-fontobject","etag":"\"148a4-HvTP0myt8zR/pvB7Ki+LWPOsHwA\"","mtime":"2019-01-18T00:12:04.000Z"}
  },
  ["server:font:Gilroy-Semibold.ttf"]: {
    import: () => import('../raw/Gilroy-Semibold2.mjs').then(r => r.default || r),
    meta: {"type":"font/ttf","etag":"\"147ec-cMJRwatEQoHX5L6rf94slrlBKFw\"","mtime":"2019-01-18T00:12:04.000Z"}
  },
  ["server:font:Gilroy-Semibold.woff"]: {
    import: () => import('../raw/Gilroy-Semibold3.mjs').then(r => r.default || r),
    meta: {"type":"font/woff","etag":"\"94e0-+sXNUrtA2oaMiAWSPCQR4Wowl2w\"","mtime":"2019-01-18T00:12:04.000Z"}
  },
  ["server:font:Gilroy-Semibold.woff2"]: {
    import: () => import('../raw/Gilroy-Semibold4.mjs').then(r => r.default || r),
    meta: {"type":"font/woff2","etag":"\"6970-6kmupAz/iJ9UG4kB9PH4p/nH6O0\"","mtime":"2019-01-18T00:12:04.000Z"}
  },
  ["server:font:Gilroy-SemiboldItalic.eot"]: {
    import: () => import('../raw/Gilroy-SemiboldItalic.mjs').then(r => r.default || r),
    meta: {"type":"application/vnd.ms-fontobject","etag":"\"150d2-xfbNiwSdjALnSslTDKt1PbLp7t4\"","mtime":"2019-01-18T00:12:08.000Z"}
  },
  ["server:font:Gilroy-SemiboldItalic.ttf"]: {
    import: () => import('../raw/Gilroy-SemiboldItalic2.mjs').then(r => r.default || r),
    meta: {"type":"font/ttf","etag":"\"15000-6mEJFK3YtdHQRgN59am6E6usvKg\"","mtime":"2019-01-18T00:12:08.000Z"}
  },
  ["server:font:Gilroy-SemiboldItalic.woff"]: {
    import: () => import('../raw/Gilroy-SemiboldItalic3.mjs').then(r => r.default || r),
    meta: {"type":"font/woff","etag":"\"9bd4-ibVYydaM6aLHCtEnnv3R0pBL/As\"","mtime":"2019-01-18T00:12:08.000Z"}
  },
  ["server:font:Gilroy-SemiboldItalic.woff2"]: {
    import: () => import('../raw/Gilroy-SemiboldItalic4.mjs').then(r => r.default || r),
    meta: {"type":"font/woff2","etag":"\"6d60-/2YN6NZy3XuTJ+oZi7K/1dFYhes\"","mtime":"2019-01-18T00:12:08.000Z"}
  },
  ["server:font:Gilroy-Thin.eot"]: {
    import: () => import('../raw/Gilroy-Thin.mjs').then(r => r.default || r),
    meta: {"type":"application/vnd.ms-fontobject","etag":"\"14b44-GafzEtMBVEPYBmlNwDfJfNLRrkE\"","mtime":"2019-01-18T00:12:10.000Z"}
  },
  ["server:font:Gilroy-Thin.ttf"]: {
    import: () => import('../raw/Gilroy-Thin2.mjs').then(r => r.default || r),
    meta: {"type":"font/ttf","etag":"\"14a9c-x/WtdYp3aNLpz5K9uiHhpxIV6yo\"","mtime":"2019-01-18T00:12:10.000Z"}
  },
  ["server:font:Gilroy-Thin.woff"]: {
    import: () => import('../raw/Gilroy-Thin3.mjs').then(r => r.default || r),
    meta: {"type":"font/woff","etag":"\"9324-1Wkx0WILeBmV/mV74bift17OnUE\"","mtime":"2019-01-18T00:12:10.000Z"}
  },
  ["server:font:Gilroy-Thin.woff2"]: {
    import: () => import('../raw/Gilroy-Thin4.mjs').then(r => r.default || r),
    meta: {"type":"font/woff2","etag":"\"6790-dlF361R7mS61uqay4kAhqIOQa4Y\"","mtime":"2019-01-18T00:12:12.000Z"}
  },
  ["server:font:Gilroy-ThinItalic.eot"]: {
    import: () => import('../raw/Gilroy-ThinItalic.mjs').then(r => r.default || r),
    meta: {"type":"application/vnd.ms-fontobject","etag":"\"15cae-fGPu4Rjr3ykWx8s46o0Ie1moYXc\"","mtime":"2019-01-18T00:12:12.000Z"}
  },
  ["server:font:Gilroy-ThinItalic.ttf"]: {
    import: () => import('../raw/Gilroy-ThinItalic2.mjs').then(r => r.default || r),
    meta: {"type":"font/ttf","etag":"\"15bec-VUGwuBGlS+1JZKggGiES0YSvqAU\"","mtime":"2019-01-18T00:12:12.000Z"}
  },
  ["server:font:Gilroy-ThinItalic.woff"]: {
    import: () => import('../raw/Gilroy-ThinItalic3.mjs').then(r => r.default || r),
    meta: {"type":"font/woff","etag":"\"9d2c-q4tPSCYXXisAXRIX1txu2/TkpZ4\"","mtime":"2019-01-18T00:12:12.000Z"}
  },
  ["server:font:Gilroy-ThinItalic.woff2"]: {
    import: () => import('../raw/Gilroy-ThinItalic4.mjs').then(r => r.default || r),
    meta: {"type":"font/woff2","etag":"\"6dac-peCi2dxx6zpOU9hdeZgUpQEG9yc\"","mtime":"2019-01-18T00:12:12.000Z"}
  },
  ["server:font:Gilroy-UltraLight.eot"]: {
    import: () => import('../raw/Gilroy-UltraLight.mjs').then(r => r.default || r),
    meta: {"type":"application/vnd.ms-fontobject","etag":"\"14f84-yqU1GUsH4GPGhwwyZkuEegOLguw\"","mtime":"2019-01-18T00:12:06.000Z"}
  },
  ["server:font:Gilroy-UltraLight.ttf"]: {
    import: () => import('../raw/Gilroy-UltraLight2.mjs').then(r => r.default || r),
    meta: {"type":"font/ttf","etag":"\"14ec4-0q0Glbh9SuLb3MgEtDpCFfNQVdU\"","mtime":"2019-01-18T00:12:06.000Z"}
  },
  ["server:font:Gilroy-UltraLight.woff"]: {
    import: () => import('../raw/Gilroy-UltraLight3.mjs').then(r => r.default || r),
    meta: {"type":"font/woff","etag":"\"9588-6Chkg6qjS8Cd7/XBrMuBmXSiSNA\"","mtime":"2019-01-18T00:12:06.000Z"}
  },
  ["server:font:Gilroy-UltraLight.woff2"]: {
    import: () => import('../raw/Gilroy-UltraLight4.mjs').then(r => r.default || r),
    meta: {"type":"font/woff2","etag":"\"69d0-4hHoEGejqkqLy1fDDXPCZcVBvhM\"","mtime":"2019-01-18T00:12:06.000Z"}
  },
  ["server:font:Gilroy-UltraLightItalic.eot"]: {
    import: () => import('../raw/Gilroy-UltraLightItalic.mjs').then(r => r.default || r),
    meta: {"type":"application/vnd.ms-fontobject","etag":"\"15e7e-huBaHpGutF5NdxC0rJJNGHuJiQ8\"","mtime":"2019-01-18T00:12:10.000Z"}
  },
  ["server:font:Gilroy-UltraLightItalic.ttf"]: {
    import: () => import('../raw/Gilroy-UltraLightItalic2.mjs').then(r => r.default || r),
    meta: {"type":"font/ttf","etag":"\"15da4-XgYNR0+C/CGkl0JadNeUFyEzAh0\"","mtime":"2019-01-18T00:12:10.000Z"}
  },
  ["server:font:Gilroy-UltraLightItalic.woff"]: {
    import: () => import('../raw/Gilroy-UltraLightItalic3.mjs').then(r => r.default || r),
    meta: {"type":"font/woff","etag":"\"9fd0-v0z0ag1JyaATptVaijRMFSGQlns\"","mtime":"2019-01-18T00:12:10.000Z"}
  },
  ["server:font:Gilroy-UltraLightItalic.woff2"]: {
    import: () => import('../raw/Gilroy-UltraLightItalic4.mjs').then(r => r.default || r),
    meta: {"type":"font/woff2","etag":"\"7010-UN9RzUvXcIi3gO39QnmmLUL4xmw\"","mtime":"2019-01-18T00:12:10.000Z"}
  },
  ["server:font:demo.html"]: {
    import: () => import('../raw/demo.mjs').then(r => r.default || r),
    meta: {"type":"text/html; charset=utf-8","etag":"\"cd46-RYQ9bszZieATpjQ5yDfPEaMyZDE\"","mtime":"2019-01-18T00:12:12.000Z"}
  },
  ["server:font:font.css"]: {
    import: () => import('../raw/font.mjs').then(r => r.default || r),
    meta: {"type":"text/css; charset=utf-8","etag":"\"2184-0TUYPk6thi1U4HR6xVHPF1obCgA\"","mtime":"2019-01-18T00:12:12.000Z"}
  }
};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

function defineNitroPlugin(def) {
  return def;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || new Date().toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

mongoose__default.set("strictQuery", false);
const _7qx0Ob2fpL = defineNitroPlugin(async () => {
  const config = useRuntimeConfig();
  try {
    await mongoose__default.connect(config.mgdbUri);
    console.log("DB connection established.");
  } catch (err) {
    console.error("DB connection failed.", err);
  }
});

const plugins = [
  _7qx0Ob2fpL
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.node.req.url?.endsWith(".json") || event.node.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1804-IiQnxMropDUdutHF/1eUEjlYujU\"",
    "mtime": "2023-02-02T17:49:52.716Z",
    "size": 6148,
    "path": "../public/.DS_Store"
  },
  "/icons/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1804-3y++sUAKzaCQmjLBz2v0kvESHgc\"",
    "mtime": "2023-02-02T17:49:52.716Z",
    "size": 6148,
    "path": "../public/icons/.DS_Store"
  },
  "/icons/arrow-down.svg": {
    "type": "image/svg+xml",
    "etag": "\"233-5Pta7JXgQzZflTp214g+RjcPhzg\"",
    "mtime": "2023-02-02T17:49:52.716Z",
    "size": 563,
    "path": "../public/icons/arrow-down.svg"
  },
  "/icons/arrow-swap-horizontal.svg": {
    "type": "image/svg+xml",
    "etag": "\"3e8-SIKSF5ZfvyG38D9IaCm8THW2HkI\"",
    "mtime": "2023-02-02T17:49:52.715Z",
    "size": 1000,
    "path": "../public/icons/arrow-swap-horizontal.svg"
  },
  "/icons/arrow-up.svg": {
    "type": "image/svg+xml",
    "etag": "\"22e-iQw9NcuE9r3LUM/9gwv2R4T+aWU\"",
    "mtime": "2023-02-02T17:49:52.715Z",
    "size": 558,
    "path": "../public/icons/arrow-up.svg"
  },
  "/icons/chart.svg": {
    "type": "image/svg+xml",
    "etag": "\"3b7-aIVB02F5FdusnnTeIVn0wfUl1aw\"",
    "mtime": "2023-02-02T17:49:52.715Z",
    "size": 951,
    "path": "../public/icons/chart.svg"
  },
  "/icons/code.svg": {
    "type": "image/svg+xml",
    "etag": "\"449-ON0wxJs634h9oCTanMtaciAwUOA\"",
    "mtime": "2023-02-02T17:49:52.714Z",
    "size": 1097,
    "path": "../public/icons/code.svg"
  },
  "/icons/data.svg": {
    "type": "image/svg+xml",
    "etag": "\"6e9-FK5vFk3a5AmW6y8FrRcDaSX0Iys\"",
    "mtime": "2023-02-02T17:49:52.714Z",
    "size": 1769,
    "path": "../public/icons/data.svg"
  },
  "/icons/document-text.svg": {
    "type": "image/svg+xml",
    "etag": "\"46c-8RSrI9O3qRf8PNe2nip8ZWxVxS4\"",
    "mtime": "2023-02-02T17:49:52.714Z",
    "size": 1132,
    "path": "../public/icons/document-text.svg"
  },
  "/icons/document.svg": {
    "type": "image/svg+xml",
    "etag": "\"31e-7myEfHSw65+gArKy7zfaLHVF090\"",
    "mtime": "2023-02-02T17:49:52.714Z",
    "size": 798,
    "path": "../public/icons/document.svg"
  },
  "/icons/hierarchy-square.svg": {
    "type": "image/svg+xml",
    "etag": "\"95b-kmIONkIYeSU7mxmED4DW7LsWyBY\"",
    "mtime": "2023-02-02T17:49:52.713Z",
    "size": 2395,
    "path": "../public/icons/hierarchy-square.svg"
  },
  "/icons/login.svg": {
    "type": "image/svg+xml",
    "etag": "\"48f-f1hLwEYbZbFZAatEQzBQ2424kWg\"",
    "mtime": "2023-02-02T17:49:52.713Z",
    "size": 1167,
    "path": "../public/icons/login.svg"
  },
  "/icons/programming-arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"6e5-+1Sxu/KNKywaJZuxrldLF2aJSjk\"",
    "mtime": "2023-02-02T17:49:52.713Z",
    "size": 1765,
    "path": "../public/icons/programming-arrow.svg"
  },
  "/icons/refresh-2.svg": {
    "type": "image/svg+xml",
    "etag": "\"16f-8JNv3FBEfewjySfOK+sFX77TECo\"",
    "mtime": "2023-02-02T17:49:52.712Z",
    "size": 367,
    "path": "../public/icons/refresh-2.svg"
  },
  "/icons/sidebar-right.svg": {
    "type": "image/svg+xml",
    "etag": "\"3e8-UMWAhoPAh6+efop2OKX31tP814U\"",
    "mtime": "2023-02-02T17:49:52.712Z",
    "size": 1000,
    "path": "../public/icons/sidebar-right.svg"
  },
  "/icons/teacher.svg": {
    "type": "image/svg+xml",
    "etag": "\"637-1GsBfM0+exDOZE9IHOL6MqHSY+g\"",
    "mtime": "2023-02-02T17:49:52.712Z",
    "size": 1591,
    "path": "../public/icons/teacher.svg"
  },
  "/icons/tick-square.svg": {
    "type": "image/svg+xml",
    "etag": "\"300-nFxPFmgMhW34QkvFIljeHgYsAzg\"",
    "mtime": "2023-02-02T17:49:52.711Z",
    "size": 768,
    "path": "../public/icons/tick-square.svg"
  },
  "/_nuxt/Gilroy-Black.6a3b4aaf.woff": {
    "type": "font/woff",
    "etag": "\"94a0-GyQ4ett4ZELAK6TLbiUPFyiKmCo\"",
    "mtime": "2023-02-02T17:49:52.710Z",
    "size": 38048,
    "path": "../public/_nuxt/Gilroy-Black.6a3b4aaf.woff"
  },
  "/_nuxt/Gilroy-Black.84ee4b00.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"144b4-qmMTjGb0JVT/ZeawvRN3AIEnIYQ\"",
    "mtime": "2023-02-02T17:49:52.710Z",
    "size": 83124,
    "path": "../public/_nuxt/Gilroy-Black.84ee4b00.eot"
  },
  "/_nuxt/Gilroy-Black.dc9aa35f.ttf": {
    "type": "font/ttf",
    "etag": "\"14408-D/qkFj6dwJdBKKK9u8tPS6IQGE0\"",
    "mtime": "2023-02-02T17:49:52.710Z",
    "size": 82952,
    "path": "../public/_nuxt/Gilroy-Black.dc9aa35f.ttf"
  },
  "/_nuxt/Gilroy-Black.e2869f4f.woff2": {
    "type": "font/woff2",
    "etag": "\"69b8-79mcsASfEv8Q0bwb4VaZ5O+FhJo\"",
    "mtime": "2023-02-02T17:49:52.710Z",
    "size": 27064,
    "path": "../public/_nuxt/Gilroy-Black.e2869f4f.woff2"
  },
  "/_nuxt/Gilroy-BlackItalic.097444cd.woff2": {
    "type": "font/woff2",
    "etag": "\"710c-bf/lHZ5qpjrEAepGJu4TH20vOJY\"",
    "mtime": "2023-02-02T17:49:52.710Z",
    "size": 28940,
    "path": "../public/_nuxt/Gilroy-BlackItalic.097444cd.woff2"
  },
  "/_nuxt/Gilroy-BlackItalic.c5677bb4.woff": {
    "type": "font/woff",
    "etag": "\"a02c-kGOR42Op3O8VZ2UaSfjDr2UqIFE\"",
    "mtime": "2023-02-02T17:49:52.709Z",
    "size": 41004,
    "path": "../public/_nuxt/Gilroy-BlackItalic.c5677bb4.woff"
  },
  "/_nuxt/Gilroy-BlackItalic.ec197cee.ttf": {
    "type": "font/ttf",
    "etag": "\"1528c-igjCSmJ2wQkJRDUoE9JXyDs8qgA\"",
    "mtime": "2023-02-02T17:49:52.709Z",
    "size": 86668,
    "path": "../public/_nuxt/Gilroy-BlackItalic.ec197cee.ttf"
  },
  "/_nuxt/Gilroy-BlackItalic.f884ded0.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"15352-Q6fePi8jDRws14B8osA2y1r5y1M\"",
    "mtime": "2023-02-02T17:49:52.709Z",
    "size": 86866,
    "path": "../public/_nuxt/Gilroy-BlackItalic.f884ded0.eot"
  },
  "/_nuxt/Gilroy-Bold.0f6a9b59.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"146a8-O9fbEyUUeCAJsekgGj0c9GLCI7M\"",
    "mtime": "2023-02-02T17:49:52.708Z",
    "size": 83624,
    "path": "../public/_nuxt/Gilroy-Bold.0f6a9b59.eot"
  },
  "/_nuxt/Gilroy-Bold.1b401dca.ttf": {
    "type": "font/ttf",
    "etag": "\"14600-+Rt/Q7dy8giu0rn67KxL43VDf0I\"",
    "mtime": "2023-02-02T17:49:52.708Z",
    "size": 83456,
    "path": "../public/_nuxt/Gilroy-Bold.1b401dca.ttf"
  },
  "/_nuxt/Gilroy-Bold.8da03ac3.woff2": {
    "type": "font/woff2",
    "etag": "\"6ab0-kL/itWhQoKBvAVtk1gkT7kZwhZQ\"",
    "mtime": "2023-02-02T17:49:52.708Z",
    "size": 27312,
    "path": "../public/_nuxt/Gilroy-Bold.8da03ac3.woff2"
  },
  "/_nuxt/Gilroy-Bold.d27594f8.woff": {
    "type": "font/woff",
    "etag": "\"9558-fSH57ZuaYJBjFOk4HVonUqOLVlY\"",
    "mtime": "2023-02-02T17:49:52.708Z",
    "size": 38232,
    "path": "../public/_nuxt/Gilroy-Bold.d27594f8.woff"
  },
  "/_nuxt/Gilroy-BoldItalic.6bf6c69f.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"155b2-x3XeTa+wEofEXbYFoI++3b6Ub9I\"",
    "mtime": "2023-02-02T17:49:52.707Z",
    "size": 87474,
    "path": "../public/_nuxt/Gilroy-BoldItalic.6bf6c69f.eot"
  },
  "/_nuxt/Gilroy-BoldItalic.70a46041.ttf": {
    "type": "font/ttf",
    "etag": "\"154f0-51qkGAXJu0qitlGpkS88zKJUx7c\"",
    "mtime": "2023-02-02T17:49:52.707Z",
    "size": 87280,
    "path": "../public/_nuxt/Gilroy-BoldItalic.70a46041.ttf"
  },
  "/_nuxt/Gilroy-BoldItalic.8a173f7d.woff2": {
    "type": "font/woff2",
    "etag": "\"71c0-gR+UmVHEIzfJtvmCAYTroLQFx/E\"",
    "mtime": "2023-02-02T17:49:52.707Z",
    "size": 29120,
    "path": "../public/_nuxt/Gilroy-BoldItalic.8a173f7d.woff2"
  },
  "/_nuxt/Gilroy-BoldItalic.f4999fdf.woff": {
    "type": "font/woff",
    "etag": "\"a0d4-KX8naaQLm3K2lYiwUYvA9Cxw32Q\"",
    "mtime": "2023-02-02T17:49:52.707Z",
    "size": 41172,
    "path": "../public/_nuxt/Gilroy-BoldItalic.f4999fdf.woff"
  },
  "/_nuxt/Gilroy-Extrabold.36378327.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"14210-eVv7DNUJikZ+oj6NcvguUmx3FEs\"",
    "mtime": "2023-02-02T17:49:52.707Z",
    "size": 82448,
    "path": "../public/_nuxt/Gilroy-Extrabold.36378327.eot"
  },
  "/_nuxt/Gilroy-Extrabold.3fc637c6.woff2": {
    "type": "font/woff2",
    "etag": "\"65f4-R/CJAOlDmY4bcnJKTOKfgRbOXTM\"",
    "mtime": "2023-02-02T17:49:52.706Z",
    "size": 26100,
    "path": "../public/_nuxt/Gilroy-Extrabold.3fc637c6.woff2"
  },
  "/_nuxt/Gilroy-Extrabold.5315109f.ttf": {
    "type": "font/ttf",
    "etag": "\"14154-vDjs2jtkP/bmc9Sa9MU46yCn9uQ\"",
    "mtime": "2023-02-02T17:49:52.706Z",
    "size": 82260,
    "path": "../public/_nuxt/Gilroy-Extrabold.5315109f.ttf"
  },
  "/_nuxt/Gilroy-Extrabold.bf9d1c93.woff": {
    "type": "font/woff",
    "etag": "\"8fb0-ZiiULFTaVOdRaEJWnYFL7wB1EqU\"",
    "mtime": "2023-02-02T17:49:52.706Z",
    "size": 36784,
    "path": "../public/_nuxt/Gilroy-Extrabold.bf9d1c93.woff"
  },
  "/_nuxt/Gilroy-ExtraboldItalic.003c5fe6.woff2": {
    "type": "font/woff2",
    "etag": "\"6d7c-4U5axJ0Q5C0K2n8kg+GIXJLguqQ\"",
    "mtime": "2023-02-02T17:49:52.706Z",
    "size": 28028,
    "path": "../public/_nuxt/Gilroy-ExtraboldItalic.003c5fe6.woff2"
  },
  "/_nuxt/Gilroy-ExtraboldItalic.12b27a0e.woff": {
    "type": "font/woff",
    "etag": "\"9bd8-ncii2CBI3DDRXmoWjVhQQ4X5B68\"",
    "mtime": "2023-02-02T17:49:52.706Z",
    "size": 39896,
    "path": "../public/_nuxt/Gilroy-ExtraboldItalic.12b27a0e.woff"
  },
  "/_nuxt/Gilroy-ExtraboldItalic.8ce262d4.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"150e2-6BaVey1K58GfDcF3zkeAsxc76/U\"",
    "mtime": "2023-02-02T17:49:52.706Z",
    "size": 86242,
    "path": "../public/_nuxt/Gilroy-ExtraboldItalic.8ce262d4.eot"
  },
  "/_nuxt/Gilroy-ExtraboldItalic.e1041773.ttf": {
    "type": "font/ttf",
    "etag": "\"1500c-tudBl/z7EKsBxJOy8tIdpGLFdXc\"",
    "mtime": "2023-02-02T17:49:52.705Z",
    "size": 86028,
    "path": "../public/_nuxt/Gilroy-ExtraboldItalic.e1041773.ttf"
  },
  "/_nuxt/Gilroy-Heavy.0dec76ab.woff": {
    "type": "font/woff",
    "etag": "\"9188-x5l7kZg630wjp9Jz59kWr5gx8Zo\"",
    "mtime": "2023-02-02T17:49:52.705Z",
    "size": 37256,
    "path": "../public/_nuxt/Gilroy-Heavy.0dec76ab.woff"
  },
  "/_nuxt/Gilroy-Heavy.1bf7de7e.woff2": {
    "type": "font/woff2",
    "etag": "\"6784-TFXZj6YLlyou8gsx2aR3CfiOdno\"",
    "mtime": "2023-02-02T17:49:52.705Z",
    "size": 26500,
    "path": "../public/_nuxt/Gilroy-Heavy.1bf7de7e.woff2"
  },
  "/_nuxt/Gilroy-Heavy.80f6e351.ttf": {
    "type": "font/ttf",
    "etag": "\"1428c-Xw6O0M9J2xNqaWfJV5YLYiMlQC8\"",
    "mtime": "2023-02-02T17:49:52.705Z",
    "size": 82572,
    "path": "../public/_nuxt/Gilroy-Heavy.80f6e351.ttf"
  },
  "/_nuxt/Gilroy-Heavy.a29cf822.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"14418-rAHpBP/FuYAaOYo36w5H3XuS/HM\"",
    "mtime": "2023-02-02T17:49:52.705Z",
    "size": 82968,
    "path": "../public/_nuxt/Gilroy-Heavy.a29cf822.eot"
  },
  "/_nuxt/Gilroy-HeavyItalic.02ea2f5f.woff": {
    "type": "font/woff",
    "etag": "\"9e84-AaGKCj3bTbb/JP44SLlJZpU8bIU\"",
    "mtime": "2023-02-02T17:49:52.704Z",
    "size": 40580,
    "path": "../public/_nuxt/Gilroy-HeavyItalic.02ea2f5f.woff"
  },
  "/_nuxt/Gilroy-HeavyItalic.0596b991.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"154ac-a9Y6xSBgr3OsW0nTsR6nQTHE0+0\"",
    "mtime": "2023-02-02T17:49:52.704Z",
    "size": 87212,
    "path": "../public/_nuxt/Gilroy-HeavyItalic.0596b991.eot"
  },
  "/_nuxt/Gilroy-HeavyItalic.4b29b3c8.ttf": {
    "type": "font/ttf",
    "etag": "\"152f8-j0ELYMvNsPJXoRbkQoyfikdm0T4\"",
    "mtime": "2023-02-02T17:49:52.704Z",
    "size": 86776,
    "path": "../public/_nuxt/Gilroy-HeavyItalic.4b29b3c8.ttf"
  },
  "/_nuxt/Gilroy-HeavyItalic.804ea2f5.woff2": {
    "type": "font/woff2",
    "etag": "\"6f48-4Bz5R2KcnOsqI0va7pL7+iPPz8U\"",
    "mtime": "2023-02-02T17:49:52.704Z",
    "size": 28488,
    "path": "../public/_nuxt/Gilroy-HeavyItalic.804ea2f5.woff2"
  },
  "/_nuxt/Gilroy-Light.11044a79.ttf": {
    "type": "font/ttf",
    "etag": "\"14af8-DjJvGX2IJWJF7OiZq5WFXMGvixg\"",
    "mtime": "2023-02-02T17:49:52.704Z",
    "size": 84728,
    "path": "../public/_nuxt/Gilroy-Light.11044a79.ttf"
  },
  "/_nuxt/Gilroy-Light.2521625c.woff": {
    "type": "font/woff",
    "etag": "\"9400-+nn/0I+letMr6Na7DjQrCKKTUHw\"",
    "mtime": "2023-02-02T17:49:52.703Z",
    "size": 37888,
    "path": "../public/_nuxt/Gilroy-Light.2521625c.woff"
  },
  "/_nuxt/Gilroy-Light.ad7b32d1.woff2": {
    "type": "font/woff2",
    "etag": "\"6870-oS0I0TZzatMrrjvI4KA/7ocJvR8\"",
    "mtime": "2023-02-02T17:49:52.703Z",
    "size": 26736,
    "path": "../public/_nuxt/Gilroy-Light.ad7b32d1.woff2"
  },
  "/_nuxt/Gilroy-Light.d314acae.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"14ba4-JZrtbXI+6sw63/VxAfAuMfSb2hQ\"",
    "mtime": "2023-02-02T17:49:52.703Z",
    "size": 84900,
    "path": "../public/_nuxt/Gilroy-Light.d314acae.eot"
  },
  "/_nuxt/Gilroy-LightItalic.474c175d.woff": {
    "type": "font/woff",
    "etag": "\"9f0c-jR5TTxLVp9kLplmaUO3UM8wSGeA\"",
    "mtime": "2023-02-02T17:49:52.703Z",
    "size": 40716,
    "path": "../public/_nuxt/Gilroy-LightItalic.474c175d.woff"
  },
  "/_nuxt/Gilroy-LightItalic.77bb919e.woff2": {
    "type": "font/woff2",
    "etag": "\"7020-/kMRc2c0QfpKbuV8Ei0XZMjVtVA\"",
    "mtime": "2023-02-02T17:49:52.703Z",
    "size": 28704,
    "path": "../public/_nuxt/Gilroy-LightItalic.77bb919e.woff2"
  },
  "/_nuxt/Gilroy-LightItalic.ad064f39.ttf": {
    "type": "font/ttf",
    "etag": "\"15ac0-CXwtut12LylSfM+kNOd5W5oVM14\"",
    "mtime": "2023-02-02T17:49:52.702Z",
    "size": 88768,
    "path": "../public/_nuxt/Gilroy-LightItalic.ad064f39.ttf"
  },
  "/_nuxt/Gilroy-LightItalic.d34422f6.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"15b86-RAIS5KPqZUUom1yjKfOtNY5AneY\"",
    "mtime": "2023-02-02T17:49:52.702Z",
    "size": 88966,
    "path": "../public/_nuxt/Gilroy-LightItalic.d34422f6.eot"
  },
  "/_nuxt/Gilroy-Medium.119e6666.woff": {
    "type": "font/woff",
    "etag": "\"9730-K7dLmKuUwArVqP1cEx4+UeZfgrk\"",
    "mtime": "2023-02-02T17:49:52.702Z",
    "size": 38704,
    "path": "../public/_nuxt/Gilroy-Medium.119e6666.woff"
  },
  "/_nuxt/Gilroy-Medium.216a2049.ttf": {
    "type": "font/ttf",
    "etag": "\"14a54-4UMGqRSR+QnG4lvYbL0+uDuTJSY\"",
    "mtime": "2023-02-02T17:49:52.702Z",
    "size": 84564,
    "path": "../public/_nuxt/Gilroy-Medium.216a2049.ttf"
  },
  "/_nuxt/Gilroy-Medium.4d976d50.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"14b04-un2bSiCIHmQnsQv+usRKzSwQ9do\"",
    "mtime": "2023-02-02T17:49:52.701Z",
    "size": 84740,
    "path": "../public/_nuxt/Gilroy-Medium.4d976d50.eot"
  },
  "/_nuxt/Gilroy-Medium.ee68ee26.woff2": {
    "type": "font/woff2",
    "etag": "\"6b98-3McafuJLlPNuErFV7iFKZZmgZ70\"",
    "mtime": "2023-02-02T17:49:52.701Z",
    "size": 27544,
    "path": "../public/_nuxt/Gilroy-Medium.ee68ee26.woff2"
  },
  "/_nuxt/Gilroy-MediumItalic.0ec86bf6.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"15c76-hW9VgsNtPyQNqj+XJSMAQnuACtM\"",
    "mtime": "2023-02-02T17:49:52.701Z",
    "size": 89206,
    "path": "../public/_nuxt/Gilroy-MediumItalic.0ec86bf6.eot"
  },
  "/_nuxt/Gilroy-MediumItalic.71b560bd.woff": {
    "type": "font/woff",
    "etag": "\"a2bc-0pI6cz0cMtYqZl2mkcQWCWvHKxc\"",
    "mtime": "2023-02-02T17:49:52.701Z",
    "size": 41660,
    "path": "../public/_nuxt/Gilroy-MediumItalic.71b560bd.woff"
  },
  "/_nuxt/Gilroy-MediumItalic.88a78c95.woff2": {
    "type": "font/woff2",
    "etag": "\"7344-VK4+y5ty3xT1lbg8GMwEnYYpqFU\"",
    "mtime": "2023-02-02T17:49:52.701Z",
    "size": 29508,
    "path": "../public/_nuxt/Gilroy-MediumItalic.88a78c95.woff2"
  },
  "/_nuxt/Gilroy-MediumItalic.aca0fb40.ttf": {
    "type": "font/ttf",
    "etag": "\"15abc-cWWGnKx9yY6SutO4KRpXNnTx8bE\"",
    "mtime": "2023-02-02T17:49:52.701Z",
    "size": 88764,
    "path": "../public/_nuxt/Gilroy-MediumItalic.aca0fb40.ttf"
  },
  "/_nuxt/Gilroy-Regular.0f661f54.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"14a00-9sZLSz3kh7Xs7hTQ8BbC48FUq2w\"",
    "mtime": "2023-02-02T17:49:52.700Z",
    "size": 84480,
    "path": "../public/_nuxt/Gilroy-Regular.0f661f54.eot"
  },
  "/_nuxt/Gilroy-Regular.4312cfe3.ttf": {
    "type": "font/ttf",
    "etag": "\"1494c-Q7MbMMNhAuWqiGg0+uqeJcNfveY\"",
    "mtime": "2023-02-02T17:49:52.700Z",
    "size": 84300,
    "path": "../public/_nuxt/Gilroy-Regular.4312cfe3.ttf"
  },
  "/_nuxt/Gilroy-Regular.65aaefc7.woff": {
    "type": "font/woff",
    "etag": "\"9060-zzBIHs4IpN9vMO6QHuVgaunEh+U\"",
    "mtime": "2023-02-02T17:49:52.700Z",
    "size": 36960,
    "path": "../public/_nuxt/Gilroy-Regular.65aaefc7.woff"
  },
  "/_nuxt/Gilroy-Regular.8e78c2c8.woff2": {
    "type": "font/woff2",
    "etag": "\"6620-YvgRexQI9BpbiVYmIjO7fUYoOpg\"",
    "mtime": "2023-02-02T17:49:52.700Z",
    "size": 26144,
    "path": "../public/_nuxt/Gilroy-Regular.8e78c2c8.woff2"
  },
  "/_nuxt/Gilroy-RegularItalic.3892a5cd.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"15a72-upp6Gldftuv2GkL8POldzhTXiWk\"",
    "mtime": "2023-02-02T17:49:52.700Z",
    "size": 88690,
    "path": "../public/_nuxt/Gilroy-RegularItalic.3892a5cd.eot"
  },
  "/_nuxt/Gilroy-RegularItalic.670c9653.woff": {
    "type": "font/woff",
    "etag": "\"9d20-NULP/lst7buaO40nra2OhXXstOA\"",
    "mtime": "2023-02-02T17:49:52.699Z",
    "size": 40224,
    "path": "../public/_nuxt/Gilroy-RegularItalic.670c9653.woff"
  },
  "/_nuxt/Gilroy-RegularItalic.f08f30f0.ttf": {
    "type": "font/ttf",
    "etag": "\"159a4-jphfXW2D53WbVwX0Y8DyxCTXlD4\"",
    "mtime": "2023-02-02T17:49:52.699Z",
    "size": 88484,
    "path": "../public/_nuxt/Gilroy-RegularItalic.f08f30f0.ttf"
  },
  "/_nuxt/Gilroy-RegularItalic.fee7a08e.woff2": {
    "type": "font/woff2",
    "etag": "\"6e18-NO6Zd1gvUsAbQo2RzADs0UbvMTU\"",
    "mtime": "2023-02-02T17:49:52.699Z",
    "size": 28184,
    "path": "../public/_nuxt/Gilroy-RegularItalic.fee7a08e.woff2"
  },
  "/_nuxt/Gilroy-Semibold.070077f0.ttf": {
    "type": "font/ttf",
    "etag": "\"147ec-cMJRwatEQoHX5L6rf94slrlBKFw\"",
    "mtime": "2023-02-02T17:49:52.699Z",
    "size": 83948,
    "path": "../public/_nuxt/Gilroy-Semibold.070077f0.ttf"
  },
  "/_nuxt/Gilroy-Semibold.56d6a07e.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"148a4-HvTP0myt8zR/pvB7Ki+LWPOsHwA\"",
    "mtime": "2023-02-02T17:49:52.698Z",
    "size": 84132,
    "path": "../public/_nuxt/Gilroy-Semibold.56d6a07e.eot"
  },
  "/_nuxt/Gilroy-Semibold.75bd5a29.woff": {
    "type": "font/woff",
    "etag": "\"94e0-+sXNUrtA2oaMiAWSPCQR4Wowl2w\"",
    "mtime": "2023-02-02T17:49:52.698Z",
    "size": 38112,
    "path": "../public/_nuxt/Gilroy-Semibold.75bd5a29.woff"
  },
  "/_nuxt/Gilroy-Semibold.a009b007.woff2": {
    "type": "font/woff2",
    "etag": "\"6970-6kmupAz/iJ9UG4kB9PH4p/nH6O0\"",
    "mtime": "2023-02-02T17:49:52.698Z",
    "size": 26992,
    "path": "../public/_nuxt/Gilroy-Semibold.a009b007.woff2"
  },
  "/_nuxt/Gilroy-SemiboldItalic.944f5b14.woff2": {
    "type": "font/woff2",
    "etag": "\"6d60-/2YN6NZy3XuTJ+oZi7K/1dFYhes\"",
    "mtime": "2023-02-02T17:49:52.698Z",
    "size": 28000,
    "path": "../public/_nuxt/Gilroy-SemiboldItalic.944f5b14.woff2"
  },
  "/_nuxt/Gilroy-SemiboldItalic.a2c5ff40.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"150d2-xfbNiwSdjALnSslTDKt1PbLp7t4\"",
    "mtime": "2023-02-02T17:49:52.697Z",
    "size": 86226,
    "path": "../public/_nuxt/Gilroy-SemiboldItalic.a2c5ff40.eot"
  },
  "/_nuxt/Gilroy-SemiboldItalic.ba129f3f.woff": {
    "type": "font/woff",
    "etag": "\"9bd4-ibVYydaM6aLHCtEnnv3R0pBL/As\"",
    "mtime": "2023-02-02T17:49:52.697Z",
    "size": 39892,
    "path": "../public/_nuxt/Gilroy-SemiboldItalic.ba129f3f.woff"
  },
  "/_nuxt/Gilroy-SemiboldItalic.ea1bc21f.ttf": {
    "type": "font/ttf",
    "etag": "\"15000-6mEJFK3YtdHQRgN59am6E6usvKg\"",
    "mtime": "2023-02-02T17:49:52.697Z",
    "size": 86016,
    "path": "../public/_nuxt/Gilroy-SemiboldItalic.ea1bc21f.ttf"
  },
  "/_nuxt/Gilroy-Thin.04163bf9.ttf": {
    "type": "font/ttf",
    "etag": "\"14a9c-x/WtdYp3aNLpz5K9uiHhpxIV6yo\"",
    "mtime": "2023-02-02T17:49:52.696Z",
    "size": 84636,
    "path": "../public/_nuxt/Gilroy-Thin.04163bf9.ttf"
  },
  "/_nuxt/Gilroy-Thin.6d99991a.woff": {
    "type": "font/woff",
    "etag": "\"9324-1Wkx0WILeBmV/mV74bift17OnUE\"",
    "mtime": "2023-02-02T17:49:52.696Z",
    "size": 37668,
    "path": "../public/_nuxt/Gilroy-Thin.6d99991a.woff"
  },
  "/_nuxt/Gilroy-Thin.84dbd069.woff2": {
    "type": "font/woff2",
    "etag": "\"6790-dlF361R7mS61uqay4kAhqIOQa4Y\"",
    "mtime": "2023-02-02T17:49:52.696Z",
    "size": 26512,
    "path": "../public/_nuxt/Gilroy-Thin.84dbd069.woff2"
  },
  "/_nuxt/Gilroy-Thin.fdc98222.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"14b44-GafzEtMBVEPYBmlNwDfJfNLRrkE\"",
    "mtime": "2023-02-02T17:49:52.696Z",
    "size": 84804,
    "path": "../public/_nuxt/Gilroy-Thin.fdc98222.eot"
  },
  "/_nuxt/Gilroy-ThinItalic.5fca3566.woff": {
    "type": "font/woff",
    "etag": "\"9d2c-q4tPSCYXXisAXRIX1txu2/TkpZ4\"",
    "mtime": "2023-02-02T17:49:52.695Z",
    "size": 40236,
    "path": "../public/_nuxt/Gilroy-ThinItalic.5fca3566.woff"
  },
  "/_nuxt/Gilroy-ThinItalic.b89b2fcd.woff2": {
    "type": "font/woff2",
    "etag": "\"6dac-peCi2dxx6zpOU9hdeZgUpQEG9yc\"",
    "mtime": "2023-02-02T17:49:52.695Z",
    "size": 28076,
    "path": "../public/_nuxt/Gilroy-ThinItalic.b89b2fcd.woff2"
  },
  "/_nuxt/Gilroy-ThinItalic.c9f2275e.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"15cae-fGPu4Rjr3ykWx8s46o0Ie1moYXc\"",
    "mtime": "2023-02-02T17:49:52.695Z",
    "size": 89262,
    "path": "../public/_nuxt/Gilroy-ThinItalic.c9f2275e.eot"
  },
  "/_nuxt/Gilroy-ThinItalic.e158cbe5.ttf": {
    "type": "font/ttf",
    "etag": "\"15bec-VUGwuBGlS+1JZKggGiES0YSvqAU\"",
    "mtime": "2023-02-02T17:49:52.695Z",
    "size": 89068,
    "path": "../public/_nuxt/Gilroy-ThinItalic.e158cbe5.ttf"
  },
  "/_nuxt/Gilroy-UltraLight.0c8dd458.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"14f84-yqU1GUsH4GPGhwwyZkuEegOLguw\"",
    "mtime": "2023-02-02T17:49:52.694Z",
    "size": 85892,
    "path": "../public/_nuxt/Gilroy-UltraLight.0c8dd458.eot"
  },
  "/_nuxt/Gilroy-UltraLight.4832a904.woff": {
    "type": "font/woff",
    "etag": "\"9588-6Chkg6qjS8Cd7/XBrMuBmXSiSNA\"",
    "mtime": "2023-02-02T17:49:52.694Z",
    "size": 38280,
    "path": "../public/_nuxt/Gilroy-UltraLight.4832a904.woff"
  },
  "/_nuxt/Gilroy-UltraLight.8d32cca1.ttf": {
    "type": "font/ttf",
    "etag": "\"14ec4-0q0Glbh9SuLb3MgEtDpCFfNQVdU\"",
    "mtime": "2023-02-02T17:49:52.694Z",
    "size": 85700,
    "path": "../public/_nuxt/Gilroy-UltraLight.8d32cca1.ttf"
  },
  "/_nuxt/Gilroy-UltraLight.aa3d4c53.woff2": {
    "type": "font/woff2",
    "etag": "\"69d0-4hHoEGejqkqLy1fDDXPCZcVBvhM\"",
    "mtime": "2023-02-02T17:49:52.694Z",
    "size": 27088,
    "path": "../public/_nuxt/Gilroy-UltraLight.aa3d4c53.woff2"
  },
  "/_nuxt/Gilroy-UltraLightItalic.76cf89b6.ttf": {
    "type": "font/ttf",
    "etag": "\"15da4-XgYNR0+C/CGkl0JadNeUFyEzAh0\"",
    "mtime": "2023-02-02T17:49:52.693Z",
    "size": 89508,
    "path": "../public/_nuxt/Gilroy-UltraLightItalic.76cf89b6.ttf"
  },
  "/_nuxt/Gilroy-UltraLightItalic.ad813858.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"15e7e-huBaHpGutF5NdxC0rJJNGHuJiQ8\"",
    "mtime": "2023-02-02T17:49:52.693Z",
    "size": 89726,
    "path": "../public/_nuxt/Gilroy-UltraLightItalic.ad813858.eot"
  },
  "/_nuxt/Gilroy-UltraLightItalic.be2db95e.woff2": {
    "type": "font/woff2",
    "etag": "\"7010-UN9RzUvXcIi3gO39QnmmLUL4xmw\"",
    "mtime": "2023-02-02T17:49:52.693Z",
    "size": 28688,
    "path": "../public/_nuxt/Gilroy-UltraLightItalic.be2db95e.woff2"
  },
  "/_nuxt/Gilroy-UltraLightItalic.eee42865.woff": {
    "type": "font/woff",
    "etag": "\"9fd0-v0z0ag1JyaATptVaijRMFSGQlns\"",
    "mtime": "2023-02-02T17:49:52.692Z",
    "size": 40912,
    "path": "../public/_nuxt/Gilroy-UltraLightItalic.eee42865.woff"
  },
  "/_nuxt/composables.aa488df2.js": {
    "type": "application/javascript",
    "etag": "\"61-l7D2DSXh+00THAQRqDWelgOg/Q0\"",
    "mtime": "2023-02-02T17:49:52.692Z",
    "size": 97,
    "path": "../public/_nuxt/composables.aa488df2.js"
  },
  "/_nuxt/entry.293185c6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"863a-a2MnQlmF1buhd7T1zLwVVvu/1mI\"",
    "mtime": "2023-02-02T17:49:52.692Z",
    "size": 34362,
    "path": "../public/_nuxt/entry.293185c6.css"
  },
  "/_nuxt/entry.5c5767c1.js": {
    "type": "application/javascript",
    "etag": "\"305f2-A9xpczMXmedCFbfA8fE5LX+E5Bg\"",
    "mtime": "2023-02-02T17:49:52.691Z",
    "size": 198130,
    "path": "../public/_nuxt/entry.5c5767c1.js"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-02-02T17:49:52.691Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.e6d6da51.js": {
    "type": "application/javascript",
    "etag": "\"8cf-4DRG2GFz5tcngyqbh8Xp6KWnAZQ\"",
    "mtime": "2023-02-02T17:49:52.691Z",
    "size": 2255,
    "path": "../public/_nuxt/error-404.e6d6da51.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-02-02T17:49:52.691Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-500.fc7513eb.js": {
    "type": "application/javascript",
    "etag": "\"778-tw3qF2hTEuwjVegcvEGKhdDjPfA\"",
    "mtime": "2023-02-02T17:49:52.690Z",
    "size": 1912,
    "path": "../public/_nuxt/error-500.fc7513eb.js"
  },
  "/_nuxt/error-component.bd451554.js": {
    "type": "application/javascript",
    "etag": "\"49e-BjtjAhnbXFgxr6eRXbFIo0JKpJY\"",
    "mtime": "2023-02-02T17:49:52.690Z",
    "size": 1182,
    "path": "../public/_nuxt/error-component.bd451554.js"
  },
  "/_nuxt/index.ebb8eb8b.js": {
    "type": "application/javascript",
    "etag": "\"b4-2yN8nvpD2XvFWwCWiAMmGC8isOE\"",
    "mtime": "2023-02-02T17:49:52.689Z",
    "size": 180,
    "path": "../public/_nuxt/index.ebb8eb8b.js"
  },
  "/_nuxt/login.6dcadcda.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a1-jwpit6oxr8KPjzz6nSmELJhcVHo\"",
    "mtime": "2023-02-02T17:49:52.689Z",
    "size": 161,
    "path": "../public/_nuxt/login.6dcadcda.css"
  },
  "/_nuxt/login.c4dae795.js": {
    "type": "application/javascript",
    "etag": "\"453-yRpVZ1FTwcKsYj90yyVSA0OxJh8\"",
    "mtime": "2023-02-02T17:49:52.688Z",
    "size": 1107,
    "path": "../public/_nuxt/login.c4dae795.js"
  },
  "/_nuxt/news.86eedb0a.js": {
    "type": "application/javascript",
    "etag": "\"2108-h5yLDcd97QReCp8kETQ9JTiimMQ\"",
    "mtime": "2023-02-02T17:49:52.688Z",
    "size": 8456,
    "path": "../public/_nuxt/news.86eedb0a.js"
  },
  "/_nuxt/news.fe3d28b5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"193-R7mtycjtQxFvqhg0aGS0dtOKpvA\"",
    "mtime": "2023-02-02T17:49:52.688Z",
    "size": 403,
    "path": "../public/_nuxt/news.fe3d28b5.css"
  },
  "/_nuxt/validation.0bdf4810.js": {
    "type": "application/javascript",
    "etag": "\"3360-IrX8nEiQXWoaAastOrT+/jjkmtI\"",
    "mtime": "2023-02-02T17:49:52.687Z",
    "size": 13152,
    "path": "../public/_nuxt/validation.0bdf4810.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

const require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(mongoose);

const { Schema, model } = require$$0;
const ArticleSchema = new Schema(
  {
    text: { type: String, required: true },
    user: { type: String, required: true },
    marketCategory: { type: String, required: true },
    articleCategory: { type: String, required: true },
    articleDate: { type: String, required: true },
    articleResult: { type: String, required: true },
    articleLink: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  },
  { collection: "articles" }
);
const Article = model("Article", ArticleSchema);
var article_model = { ArticleSchema, Article };

let uniqueWords = /* @__PURE__ */ new Set();
let uniqueWordsArr = [];
let modelTraining = true;
const _smGNpF = defineEventHandler(async (event) => {
  if (globalThis.io)
    return;
  globalThis.io = new Server(event.node.req.socket.server);
  io.on("connection", (socket) => {
    console.log("Connected", socket.id);
    socket.on("disconnecting", () => {
      console.log("Disconnected", socket.id);
    });
    socket.on("add-article", async (data, cb) => {
      try {
        const response = await article_model.Article.create({
          text: data.text,
          user: data.user,
          marketCategory: data.marketCategory,
          articleCategory: data.articleCategory,
          articleDate: Date.now(),
          articleResult: data.articleResult,
          articleLink: data.articleLink
        });
        cb(response);
      } catch (error) {
        cb(error);
      }
    });
    socket.on("train", async (cb) => {
      try {
        const articles = await article_model.Article.find({});
        const model = await trainModel(articles);
        modelTraining = false;
        cb({ status: 200, message: "Model successfully trained", model });
      } catch (err) {
        console.error(err);
        cb({ status: 500, message: err.message });
      }
    });
    socket.on("predict", async (article, cb) => {
      try {
        const prediction = await predict(article);
        cb({ status: 200, prediction });
      } catch (err) {
        cb({ status: 500, message: err.message });
      }
    });
    setInterval(() => {
      socket.emit("model-training-status", modelTraining);
    }, 1e3);
  });
});
async function trainModel(data) {
  const tokenizer = new natural.WordTokenizer();
  const preprocessedArticles = data.map((article) => {
    const text = article.text.toLowerCase();
    const tokens = tokenizer.tokenize(text);
    return {
      tokens,
      articleResult: article.articleResult
    };
  });
  const inputs = preprocessedArticles.map((article) => article.tokens);
  inputs.forEach((input) => {
    input.forEach((word) => uniqueWords.add(word));
  });
  uniqueWordsArr = [...uniqueWords];
  const inputsNumerical = inputs.map((input) => {
    let inputData = new Array(uniqueWordsArr.length).fill(0);
    input.forEach((word) => {
      const index = uniqueWordsArr.indexOf(word);
      inputData[index] = 1;
    });
    return inputData;
  });
  const outputs = preprocessedArticles.map((article) => {
    if (article.articleResult === "up") {
      return [1, 0, 0];
    } else if (article.articleResult === "down") {
      return [0, 1, 0];
    } else {
      return [0, 0, 1];
    }
  });
  console.log(`Number of articles: ${inputs.length}`);
  const inputsTensor = tf.tensor2d(inputsNumerical);
  const outputsTensor = tf.tensor2d(outputs);
  console.log(`inputsTensor shape: ${inputsTensor.shape}`);
  console.log(`outputsTensor shape: ${outputsTensor.shape}`);
  console.log(`inputsTensor dtype: ${inputsTensor.dtype}`);
  console.log(`outputsTensor dtype: ${outputsTensor.dtype}`);
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 32, inputShape: [inputsTensor.shape[1]] }));
  model.add(tf.layers.dense({ units: 3, activation: "softmax" }));
  model.compile({ loss: "categoricalCrossentropy", optimizer: "adam" });
  console.log(model.summary());
  const history = await model.fit(inputsTensor, outputsTensor, { epochs: 15 });
  model.save(`file://utils/`);
  return history;
}
const predict = async (articleText) => {
  const tokenizer = new natural.WordTokenizer();
  const model = await tf.loadLayersModel("file://utils/model.json");
  const inputTokens = tokenizer.tokenize(articleText);
  let inputData = new Array(uniqueWordsArr.length).fill(0);
  inputTokens.forEach((word) => {
    const index = uniqueWordsArr.indexOf(word);
    if (index !== -1)
      inputData[index] = 1;
  });
  const inputTensor = tf.tensor2d([inputData]);
  const prediction = model.predict(inputTensor);
  const predictionData = await prediction.data();
  let max = 0;
  let maxIndex = 0;
  for (let i = 0; i < predictionData.length; i++) {
    if (predictionData[i] > max) {
      max = predictionData[i];
      maxIndex = i;
    }
  }
  if (maxIndex === 0) {
    return "price might go up";
  } else if (maxIndex === 1) {
    return "price might go down";
  } else {
    return "no price impact";
  }
};

const _lazy_CCqYAf = () => import('../validation.put.mjs');
const _lazy_vUlwW4 = () => import('../validation.post.mjs');
const _lazy_wDJ3Wl = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '', handler: _smGNpF, lazy: false, middleware: true, method: undefined },
  { route: '/api/articles/validation', handler: _lazy_CCqYAf, lazy: true, middleware: false, method: "put" },
  { route: '/api/articles/validation', handler: _lazy_vUlwW4, lazy: true, middleware: false, method: "post" },
  { route: '/__nuxt_error', handler: _lazy_wDJ3Wl, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_wDJ3Wl, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server$1({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$2(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { getRouteRules as g, nodeServer as n, require$$0 as r, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
