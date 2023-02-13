import { p as publicAssetsURL } from '../../paths.mjs';
import { _ as _export_sfc, a as useNuxtApp } from '../server.mjs';
import { ref, watch, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { u as useLazyFetch } from './fetch-3686909c.mjs';
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
import 'ohash';

const _imports_0 = "" + publicAssetsURL("icons/accept.svg");
const _imports_1 = "" + publicAssetsURL("icons/reject.svg");
const _imports_2 = "" + publicAssetsURL("icons/forward.svg");
const _sfc_main$1 = {
  __name: "TableView",
  __ssrInlineRender: true,
  props: {
    articleList: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative pt-10 pb-20 w-full h-full mx-auto max-w-5xl overflow-y-auto" }, _attrs))}><!--[-->`);
      ssrRenderList(props.articleList, (article) => {
        _push(`<div class="p-6 bg-[#444653] rounded-3xl mb-4"><div class="flex justify-between items-center"><div><a class="text-xl mb-2 text-blue-400 hover:opacity-80"${ssrRenderAttr("href", article.link)} target="_blank">${ssrInterpolate(article.title)}</a><p class="mb-4 text-md">${ssrInterpolate(article.excerpt)}</p><small class="block"><b>Date:</b> ${ssrInterpolate(new Date(article.date).toLocaleDateString())} ${ssrInterpolate(new Date(article.date).toTimeString())}</small><small class="block"><b>Parser:</b> ${ssrInterpolate(article.parserId.name)}</small></div>`);
        if (!article.validated) {
          _push(`<div class="flex gap-2 min-w-[200px] ml-4"><button class="p-4 bg-green-600 rounded-xl font-semibold"><img${ssrRenderAttr("src", _imports_0)} alt=""></button><button class="p-4 bg-red-600 rounded-xl font-semibold"><img${ssrRenderAttr("src", _imports_1)} alt=""></button><button class="p-4 bg-sky-600 rounded-xl font-semibold"><img${ssrRenderAttr("src", _imports_2)} alt=""></button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TableView.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "validation",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp();
    const currentView = ref("Single View");
    const views = ref([
      {
        name: "Single View"
      },
      {
        name: "Table View"
      }
    ]);
    const article = ref(null);
    const articleList = ref(null);
    ref(0);
    ref(0);
    ref("");
    getValidationItem();
    async function getValidationItem() {
      const { data: articleData } = await useLazyFetch("/api/articles/validation-v2", {
        method: "post",
        body: { userID: localStorage == null ? void 0 : localStorage.getItem("aiUserUID"), tableView: currentView.value === "Table View" }
      }, "$MuntDq3tqK");
      watch(articleData, (newArticle) => {
        if (currentView.value === "Single View") {
          article.value = newArticle;
        } else {
          articleList.value = newArticle;
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TableView = _sfc_main$1;
      if (unref(article) || unref(articleList)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "page relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1" }, _attrs))} data-v-abbb426f><div class="pt-10 w-full h-full mx-auto max-w-5xl" data-v-abbb426f><div class="flex justify-between items-center mb-6" data-v-abbb426f><h3 class="text-2xl font-semibold" data-v-abbb426f>Validate News Articles</h3><div class="view" data-v-abbb426f><ul data-v-abbb426f><!--[-->`);
        ssrRenderList(unref(views), (view) => {
          _push(`<li class="${ssrRenderClass({ active: unref(currentView) == view.name })}" data-v-abbb426f>${ssrInterpolate(view.name)}</li>`);
        });
        _push(`<!--]--></ul></div></div>`);
        if (unref(currentView) === "Single View") {
          _push(`<div class="h-1/5" data-v-abbb426f><div class="p-6 bg-[#444653] rounded-3xl overflow-y-auto mb-4" data-v-abbb426f><h3 class="text-xl mb-2" data-v-abbb426f>${ssrInterpolate(unref(article).title)}</h3><p class="mb-4 text-md" data-v-abbb426f>${ssrInterpolate(unref(article).excerpt)}</p><small class="block" data-v-abbb426f><b data-v-abbb426f>Date:</b> ${ssrInterpolate(new Date(unref(article).date).toLocaleDateString())} ${ssrInterpolate(new Date(unref(article).date).toTimeString())}</small><small class="block" data-v-abbb426f><b data-v-abbb426f>Parser:</b> ${ssrInterpolate(unref(article).parserId.name)}</small></div><div class="relative h-full p-6 bg-[#444653] rounded-3xl overflow-y-auto mb-4" data-v-abbb426f><p class="text-md text-gray-100" data-v-abbb426f>${unref(article).content}</p></div><div class="p-6 bg-[#444653] rounded-3xl overflow-y-auto mb-4" data-v-abbb426f><a class="text-md text-blue-400 hover:opacity-80"${ssrRenderAttr("href", unref(article).link)} target="_blank" data-v-abbb426f>${ssrInterpolate(unref(article).link)}</a></div></div>`);
        } else {
          _push(ssrRenderComponent(_component_TableView, { articleList: unref(articleList) }, null, _parent));
        }
        _push(`</div>`);
        if (unref(currentView) === "Single View") {
          _push(`<div class="absolute bottom-0 left-0 w-full" data-v-abbb426f><div class="stretch mx-2 grid grid-cols-3 gap-6 last:mb-6 mx-auto max-w-3xl bg-dark rounded-3xl p-6" data-v-abbb426f><button class="p-4 bg-green-600 rounded-xl font-semibold" data-v-abbb426f> Accept </button><button class="p-4 bg-red-600 rounded-xl font-semibold" data-v-abbb426f> Reject </button><button class="p-4 bg-sky-600 rounded-xl font-semibold" data-v-abbb426f> Skip </button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
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
const validation = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-abbb426f"]]);

export { validation as default };
//# sourceMappingURL=validation-f360a411.mjs.map
