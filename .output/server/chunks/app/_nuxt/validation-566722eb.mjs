import { ref, watch, unref, mergeProps, useSSRContext } from 'vue';
import { u as useLazyFetch } from './fetch-3686909c.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import 'ohash';
import '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'defu';
import '../../nitro/config.mjs';
import 'destr';
import 'scule';

const _sfc_main = {
  __name: "validation",
  __ssrInlineRender: true,
  setup(__props) {
    const article = ref(null);
    ref(0);
    ref(0);
    getValidationItem();
    async function getValidationItem() {
      const { data: articleData } = await useLazyFetch("/api/articles/validation", {
        method: "post",
        body: { userID: localStorage == null ? void 0 : localStorage.getItem("aiUserUID") }
      }, "$MuntDq3tqK");
      watch(articleData, (newArticle) => {
        article.value = newArticle;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(article)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "page relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1" }, _attrs))}><div class="pt-10 h-3/5 w-full mx-auto max-w-5xl"><h3 class="text-2xl font-semibold mb-6">Validate News Article</h3><div class="h-full p-6 bg-[#444653] rounded-3xl overflow-y-auto mb-4"><h3 class="text-lg mb-4">${unref(article).text.split(/\s+/).slice(0, 15).join(" ")}</h3><p class="text-md text-gray-100">${unref(article).text}</p></div><div class="p-6 bg-[#444653] rounded-3xl overflow-y-auto"><a class="text-md text-blue-400 hover:opacity-80"${ssrRenderAttr("href", unref(article).link)} target="_blank">${ssrInterpolate(unref(article).link)}</a></div></div><div class="absolute bottom-0 left-0 w-full"><div class="stretch mx-2 grid grid-cols-3 gap-6 last:mb-6 mx-auto max-w-3xl bg-dark rounded-3xl p-6"><button class="p-4 bg-green-600 rounded-xl font-semibold"> Accept </button><button class="p-4 bg-red-600 rounded-xl font-semibold"> Reject </button><button class="p-4 bg-sky-600 rounded-xl font-semibold"> Skip </button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/validation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=validation-566722eb.mjs.map
