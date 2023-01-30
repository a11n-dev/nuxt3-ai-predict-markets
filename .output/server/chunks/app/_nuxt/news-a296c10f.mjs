import { p as publicAssetsURL } from '../../paths.mjs';
import { _ as _export_sfc, a as useNuxtApp } from '../server.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import 'ufo';
import '../../nitro/config.mjs';
import 'destr';
import 'scule';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'defu';

const _imports_0 = "" + publicAssetsURL("icons/teacher.svg");
const _imports_1 = "" + publicAssetsURL("icons/data.svg");
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1" }, _attrs))} data-v-bc048dce><div class="actions" data-v-bc048dce><button data-v-bc048dce><img${ssrRenderAttr("src", _imports_0)} data-v-bc048dce></button></div><div class="flex-1 overflow-hidden" data-v-bc048dce><div class="h-full relative" data-v-bc048dce><div class="scrollable h-full w-full overflow-y-auto" data-v-bc048dce><div class="flex flex-col items-center text-sm h-full" data-v-bc048dce><!--[-->`);
      ssrRenderList(unref(chat), (message, index) => {
        _push(`<!--[-->`);
        if ((index + 1) % 2 != 0) {
          _push(`<div class="w-full border-b border-black/10 border-gray-900/50 text-gray-100" data-v-bc048dce><div class="gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0" data-v-bc048dce><div class="w-[30px] flex flex-col relative items-end" data-v-bc048dce><div class="bg-[#5436DA] rounded-sm text-white flex justify-center items-center relative tracking-widest h-8 w-8 text-xs" data-v-bc048dce><svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" data-v-bc048dce><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-v-bc048dce></path><circle cx="12" cy="7" r="4" data-v-bc048dce></circle></svg></div></div><div class="relative flex w-[calc(100%-50px)] md:flex-col lg:w-[calc(100%-115px)]" data-v-bc048dce><div class="flex flex-grow flex-col gap-3" data-v-bc048dce><div class="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap" data-v-bc048dce>${ssrInterpolate(message)}</div></div></div></div></div>`);
        } else {
          _push(`<div class="w-full border-b border-gray-900/50 text-gray-100 bg-[#444653]" data-v-bc048dce><div class="text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0" data-v-bc048dce><div class="w-[30px] flex flex-col relative items-end" data-v-bc048dce><div class="relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center" style="${ssrRenderStyle({ "background-color": "rgb(16, 163, 127)" })}" data-v-bc048dce><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-bc048dce></div></div><div class="relative flex w-[calc(100%-50px)] md:flex-col lg:w-[calc(100%-115px)]" data-v-bc048dce><div class="flex flex-grow flex-col gap-3" data-v-bc048dce><div class="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap" data-v-bc048dce><div class="markdown prose w-full break-words dark:prose-invert light" data-v-bc048dce><p data-v-bc048dce>AI prediction is: ${ssrInterpolate(message)}</p></div></div></div><div class="text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-4 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2 visible" data-v-bc048dce><button class="p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400" data-v-bc048dce><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" data-v-bc048dce><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" data-v-bc048dce></path></svg></button><button class="p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400" data-v-bc048dce><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" data-v-bc048dce><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" data-v-bc048dce></path></svg></button></div></div></div></div>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--><div class="w-full h-48 flex-shrink-0" data-v-bc048dce></div></div></div></div></div><div class="absolute bottom-0 left-0 w-full" data-v-bc048dce><form class="stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6" data-v-bc048dce><div class="relative flex h-full flex-1" data-v-bc048dce><div class="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white text-black rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)]" data-v-bc048dce><textarea rows="1" class="m-0 w-full resize-none border-0 bg-transparent p-0 pl-2 pr-7 focus:ring-0 focus-visible:ring-0 max-h-[200px] overflow-y-hidden" data-v-bc048dce>${ssrInterpolate(unref(article))}</textarea><button class="absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 disabled:hover:bg-transparent" data-v-bc048dce><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="h-4 w-4 rotate-90" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" data-v-bc048dce><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" data-v-bc048dce></path></svg></button></div></div></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const news = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bc048dce"]]);

export { news as default };
//# sourceMappingURL=news-a296c10f.mjs.map