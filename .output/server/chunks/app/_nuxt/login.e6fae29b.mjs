import { _ as _export_sfc, u as useRouter } from '../server.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = "" + globalThis.__publicAssetsURL("icons/refresh-2.svg");
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const uid = ref(null);
    if (uid.value)
      router.push({ path: "/" });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page page-login h-full" }, _attrs))} data-v-f334b351><div class="w-[300px]" data-v-f334b351><div class="relative flex mb-2" data-v-f334b351><input class="w-full p-3 text-dark" type="text" placeholder="Enter your uid"${ssrRenderAttr("value", unref(uid))} data-v-f334b351><button class="absolute m-auto top-1/2 right-3 -translate-y-1/2" data-v-f334b351><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-f334b351></button></div><button class="btn btn-fill w-full" data-v-f334b351>Log in</button></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f334b351"]]);

export { login as default };
//# sourceMappingURL=login.e6fae29b.mjs.map
