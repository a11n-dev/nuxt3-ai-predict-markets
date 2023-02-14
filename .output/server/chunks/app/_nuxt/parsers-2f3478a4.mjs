import { p as publicAssetsURL } from '../../paths.mjs';
import { ref, watch, mergeProps, unref, useSSRContext } from 'vue';
import { u as useLazyFetch } from './fetch-3686909c.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import 'ufo';
import '../../nitro/config.mjs';
import 'destr';
import 'scule';
import 'ohash';
import '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'defu';

const _imports_0 = "" + publicAssetsURL("icons/add.svg");
const _imports_1 = "" + publicAssetsURL("icons/play-dark.svg");
const _imports_2 = "" + publicAssetsURL("icons/stop-dark.svg");
const _imports_3 = "" + publicAssetsURL("icons/play.svg");
const _imports_4 = "" + publicAssetsURL("icons/stop.svg");
const _imports_5 = "" + publicAssetsURL("icons/trash.svg");
const _sfc_main = {
  __name: "parsers",
  __ssrInlineRender: true,
  setup(__props) {
    const parsers = ref(null);
    getParsers();
    async function getParsers() {
      const { data: parserList } = await useLazyFetch("/api/parsers", "$GDoN74a0Jz");
      watch(parserList, (newParserList) => {
        parsers.value = newParserList;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1" }, _attrs))}><div class="absolute right-6 top-6 flex flex-col gap-2 z-10"><button class="w-12 h-12 bg-white rounded-xl flex items-center justify-center"><img class="w-8"${ssrRenderAttr("src", _imports_0)}></button>`);
      if (unref(parsers)) {
        _push(`<div class="flex flex-col gap-2"><button class="w-12 h-12 bg-white rounded-xl flex items-center justify-center"><img${ssrRenderAttr("src", _imports_1)} alt=""></button><button class="w-12 h-12 bg-white rounded-xl flex items-center justify-center"><img${ssrRenderAttr("src", _imports_2)} alt=""></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(parsers)) {
        _push(`<div class="pt-10 w-full mx-auto max-w-5xl"><!--[-->`);
        ssrRenderList(unref(parsers), (parser) => {
          _push(`<div class="relative bg-[#444653] rounded-2xl mb-4"><div class="flex justify-between px-6 pt-6 pb-4"><div><h3 class="text-xl font-semibold mb-2">${ssrInterpolate(parser.name)}</h3><a class="text-md text-blue-400 hover:opacity-80"${ssrRenderAttr("href", parser.link)} target="_blank">${ssrInterpolate(parser.link)}</a></div><div class="flex gap-2">`);
          if (!parser.status) {
            _push(`<button><img${ssrRenderAttr("src", _imports_3)} alt=""></button>`);
          } else {
            _push(`<button><img${ssrRenderAttr("src", _imports_4)} alt=""></button>`);
          }
          _push(`<button><img${ssrRenderAttr("src", _imports_5)} alt=""></button></div></div><div class="flex justify-end pt-2 pb-2 px-6 bg-dark rounded-b-2xl"><ul class="metadata text-sm flex items-center gap-4"><li> 24h: <b>${ssrInterpolate(parser.statistics.parsed_24h)}</b></li><li> 7d: <b>${ssrInterpolate(parser.statistics.parsed_7d)}</b></li><li> Total: <b>${ssrInterpolate(parser.statistics.parsed)}</b></li><li> Last check: <b>${ssrInterpolate(new Date(parser.lastCheck).toLocaleDateString())} ${ssrInterpolate(new Date(parser.lastCheck).toLocaleTimeString())}</b></li><li class="flex items-center"><span class="${ssrRenderClass([{ "bg-green-600": parser.status, "bg-red-600": !parser.status }, "block w-3 h-3 rounded-full"])}"></span></li></ul></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/parsers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=parsers-2f3478a4.mjs.map
