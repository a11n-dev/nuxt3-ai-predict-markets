import { ref, watch, unref, mergeProps, useSSRContext } from 'vue';
import { u as useLazyFetch } from './fetch-3686909c.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "statistics",
  __ssrInlineRender: true,
  setup(__props) {
    const statistics = ref(null);
    getValidationItem();
    async function getValidationItem() {
      const { data: statisticsData } = await useLazyFetch("/api/articles/statistics", {
        method: "post",
        body: { userID: localStorage == null ? void 0 : localStorage.getItem("aiUserUID") }
      }, "$I3E7InsDKh");
      watch(statisticsData, (newStatistics) => {
        statistics.value = newStatistics;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(statistics)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "page relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1" }, _attrs))}><div class="pt-10 h-3/5 w-full mx-auto max-w-5xl"><h3 class="text-2xl font-semibold mb-6">Profile Statistics</h3><div class="flex flex-col gap-6 p-6 bg-[#444653] rounded-3xl overflow-y-auto mb-4"><div class="grid grid-cols-2 gap-6"><div class="flex flex-col text-center"><b class="text-xl">${ssrInterpolate(unref(statistics).training.total)}</b><small>Articles added</small></div><div class="flex flex-col text-center"><b class="text-xl">${ssrInterpolate(`${unref(statistics).validation.validated.total} / ${unref(statistics).validation.articlesCount}`)}</b><small>Validated articles</small></div></div><div class="grid grid-cols-3 gap-6"><div class="flex flex-col text-center p-4 bg-green-600 rounded-xl font-semibold"><b class="text-xl">${ssrInterpolate(unref(statistics).validation.validated.accepted)}</b><small>Validation accepted</small></div><div class="flex flex-col text-center p-4 bg-red-600 rounded-xl font-semibold"><b class="text-xl">${ssrInterpolate(unref(statistics).validation.validated.rejected)}</b><small>Validation rejected</small></div><div class="flex flex-col text-center p-4 bg-sky-600 rounded-xl font-semibold"><b class="text-xl">${ssrInterpolate(unref(statistics).validation.validated.skiped)}</b><small>Validation skiped</small></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/statistics.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=statistics-aa75eaf2.mjs.map
