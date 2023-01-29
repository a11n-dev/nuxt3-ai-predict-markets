import { _ as _export_sfc, a as useNuxtApp } from '../server.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'mongoose';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'socket.io';
import '@tensorflow/tfjs-node';
import 'natural';

const _imports_0 = "" + globalThis.__publicAssetsURL("icons/teacher.svg");
const _imports_1 = "" + globalThis.__publicAssetsURL("icons/data.svg");
const _sfc_main = {
  __name: "news",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp();
    ref(true);
    ref(null);
    const article = ref(null);
    const chat = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1" }, _attrs))} data-v-0aba21fe><div class="actions" data-v-0aba21fe><button data-v-0aba21fe><img${ssrRenderAttr("src", _imports_0)} data-v-0aba21fe></button><button class="${ssrRenderClass({ loaded: _ctx.modelLoaded })}" data-v-0aba21fe><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0aba21fe><path d="M20 14.75C18.48 14.75 17.25 13.52 17.25 12C17.25 10.48 18.48 9.25 20 9.25C21.52 9.25 22.75 10.48 22.75 12C22.75 13.52 21.52 14.75 20 14.75ZM20 10.75C19.31 10.75 18.75 11.31 18.75 12C18.75 12.69 19.31 13.25 20 13.25C20.69 13.25 21.25 12.69 21.25 12C21.25 11.31 20.69 10.75 20 10.75Z" fill="#202123" data-v-0aba21fe></path><path d="M20 6.75C18.48 6.75 17.25 5.52 17.25 4C17.25 2.48 18.48 1.25 20 1.25C21.52 1.25 22.75 2.48 22.75 4C22.75 5.52 21.52 6.75 20 6.75ZM20 2.75C19.31 2.75 18.75 3.31 18.75 4C18.75 4.69 19.31 5.25 20 5.25C20.69 5.25 21.25 4.69 21.25 4C21.25 3.31 20.69 2.75 20 2.75Z" fill="#202123" data-v-0aba21fe></path><path d="M20 22.75C18.48 22.75 17.25 21.52 17.25 20C17.25 18.48 18.48 17.25 20 17.25C21.52 17.25 22.75 18.48 22.75 20C22.75 21.52 21.52 22.75 20 22.75ZM20 18.75C19.31 18.75 18.75 19.31 18.75 20C18.75 20.69 19.31 21.25 20 21.25C20.69 21.25 21.25 20.69 21.25 20C21.25 19.31 20.69 18.75 20 18.75Z" fill="#202123" data-v-0aba21fe></path><path d="M4 14.75C2.48 14.75 1.25 13.52 1.25 12C1.25 10.48 2.48 9.25 4 9.25C5.52 9.25 6.75 10.48 6.75 12C6.75 13.52 5.52 14.75 4 14.75ZM4 10.75C3.31 10.75 2.75 11.31 2.75 12C2.75 12.69 3.31 13.25 4 13.25C4.69 13.25 5.25 12.69 5.25 12C5.25 11.31 4.69 10.75 4 10.75Z" fill="#202123" data-v-0aba21fe></path><path d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z" fill="#202123" data-v-0aba21fe></path><path d="M18 20.75H14C11.58 20.75 10.25 19.42 10.25 17V7C10.25 4.58 11.58 3.25 14 3.25H18C18.41 3.25 18.75 3.59 18.75 4C18.75 4.41 18.41 4.75 18 4.75H14C12.42 4.75 11.75 5.42 11.75 7V17C11.75 18.58 12.42 19.25 14 19.25H18C18.41 19.25 18.75 19.59 18.75 20C18.75 20.41 18.41 20.75 18 20.75Z" fill="#202123" data-v-0aba21fe></path></svg></button></div><div class="flex-1 overflow-hidden" data-v-0aba21fe><div class="h-full relative" data-v-0aba21fe><div class="scrollable h-full w-full overflow-y-auto" data-v-0aba21fe><div class="flex flex-col items-center text-sm h-full" data-v-0aba21fe><!--[-->`);
      ssrRenderList(unref(chat), (message, index) => {
        _push(`<!--[-->`);
        if ((index + 1) % 2 != 0) {
          _push(`<div class="w-full border-b border-black/10 border-gray-900/50 text-gray-100" data-v-0aba21fe><div class="gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0" data-v-0aba21fe><div class="w-[30px] flex flex-col relative items-end" data-v-0aba21fe><div class="bg-[#5436DA] rounded-sm text-white flex justify-center items-center relative tracking-widest h-8 w-8 text-xs" data-v-0aba21fe><svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" data-v-0aba21fe><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-v-0aba21fe></path><circle cx="12" cy="7" r="4" data-v-0aba21fe></circle></svg></div></div><div class="relative flex w-[calc(100%-50px)] md:flex-col lg:w-[calc(100%-115px)]" data-v-0aba21fe><div class="flex flex-grow flex-col gap-3" data-v-0aba21fe><div class="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap" data-v-0aba21fe>${ssrInterpolate(message)}</div></div></div></div></div>`);
        } else {
          _push(`<div class="w-full border-b border-gray-900/50 text-gray-100 bg-[#444653]" data-v-0aba21fe><div class="text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0" data-v-0aba21fe><div class="w-[30px] flex flex-col relative items-end" data-v-0aba21fe><div class="relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center" style="${ssrRenderStyle({ "background-color": "rgb(16, 163, 127)" })}" data-v-0aba21fe><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-0aba21fe></div></div><div class="relative flex w-[calc(100%-50px)] md:flex-col lg:w-[calc(100%-115px)]" data-v-0aba21fe><div class="flex flex-grow flex-col gap-3" data-v-0aba21fe><div class="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap" data-v-0aba21fe><div class="markdown prose w-full break-words dark:prose-invert light" data-v-0aba21fe><p data-v-0aba21fe>AI prediction is: ${ssrInterpolate(message)}</p></div></div></div><div class="text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-4 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2 visible" data-v-0aba21fe><button class="p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400" data-v-0aba21fe><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" data-v-0aba21fe><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" data-v-0aba21fe></path></svg></button><button class="p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400" data-v-0aba21fe><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" data-v-0aba21fe><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" data-v-0aba21fe></path></svg></button></div></div></div></div>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--><div class="w-full h-48 flex-shrink-0" data-v-0aba21fe></div></div></div></div></div><div class="absolute bottom-0 left-0 w-full" data-v-0aba21fe><form class="stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6" data-v-0aba21fe><div class="relative flex h-full flex-1" data-v-0aba21fe><div class="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white text-black rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)]" data-v-0aba21fe><textarea rows="1" class="m-0 w-full resize-none border-0 bg-transparent p-0 pl-2 pr-7 focus:ring-0 focus-visible:ring-0 max-h-[200px] overflow-y-hidden" data-v-0aba21fe>${ssrInterpolate(unref(article))}</textarea><button class="absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 disabled:hover:bg-transparent" data-v-0aba21fe><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="h-4 w-4 rotate-90" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" data-v-0aba21fe><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" data-v-0aba21fe></path></svg></button></div></div></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const news = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0aba21fe"]]);

export { news as default };
//# sourceMappingURL=news.35e17020.mjs.map