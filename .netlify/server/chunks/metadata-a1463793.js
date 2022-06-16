var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  M: () => Metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_68ac15fd = require("./index-68ac15fd.js");
var import_has = __toESM(require("lodash/has.js"));
var import_get = __toESM(require("lodash/get.js"));
var import_truncate = __toESM(require("lodash/truncate.js"));
var import_sanity_bf41d9e1 = require("./sanity-bf41d9e1.js");
var import_stores_25b712dd = require("./stores-25b712dd.js");
var import_stores_2672c807 = require("./stores-2672c807.js");
var import_global_61b718ff = require("./global-61b718ff.js");
const Metadata = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  let $pageStore, $$unsubscribe_pageStore;
  $$unsubscribe_pageStore = (0, import_index_68ac15fd.b)(import_stores_2672c807.p, (value) => $pageStore = value);
  let { page: page$1 = {} } = $$props;
  let { isSingle = false } = $$props;
  const title = page$1.title ? page$1.title : "eyebeam.org";
  let description = "";
  if ((0, import_has.default)(page$1, "content.content")) {
    description = (0, import_truncate.default)((0, import_sanity_bf41d9e1.t)(page$1.content.content), { length: 160 });
  } else if ((0, import_has.default)(page$1, "introduction.content")) {
    description = (0, import_truncate.default)((0, import_sanity_bf41d9e1.t)(page$1.introduction.content), { length: 160 });
  } else {
    description = import_global_61b718ff.f;
  }
  const url = import_global_61b718ff.B + $pageStore.url.pathname;
  const image = (0, import_has.default)(page$1, "mainImage.asset") ? (0, import_sanity_bf41d9e1.u)(page$1.mainImage) : import_global_61b718ff.D;
  if (isSingle) {
    import_stores_25b712dd.c.set({
      slug: (0, import_get.default)(page$1, "slug.current", ""),
      title: page$1.title
    });
  }
  (0, import_index_68ac15fd.o)(() => {
    if (isSingle) {
      import_stores_25b712dd.c.set(null);
    }
  });
  if ($$props.page === void 0 && $$bindings.page && page$1 !== void 0)
    $$bindings.page(page$1);
  if ($$props.isSingle === void 0 && $$bindings.isSingle && isSingle !== void 0)
    $$bindings.isSingle(isSingle);
  $$unsubscribe_pageStore();
  return `${$$result.head += `${$$result.title = `<title>${(0, import_index_68ac15fd.e)(title)}</title>`, ""}<meta name="${"twitter:card"}" content="${"summary_large_image"}" data-svelte="svelte-1ckj8qh"><meta name="${"twitter:url"}"${(0, import_index_68ac15fd.a)("content", url, 0)} data-svelte="svelte-1ckj8qh"><meta property="${"og:url"}"${(0, import_index_68ac15fd.a)("content", url, 0)} data-svelte="svelte-1ckj8qh"><meta property="${"og:type"}" content="${"article"}" data-svelte="svelte-1ckj8qh"><meta property="${"twitter:title"}"${(0, import_index_68ac15fd.a)("content", title, 0)} data-svelte="svelte-1ckj8qh"><meta property="${"twitter:description"}"${(0, import_index_68ac15fd.a)("content", description, 0)} data-svelte="svelte-1ckj8qh"><meta property="${"og:title"}"${(0, import_index_68ac15fd.a)("content", title, 0)} data-svelte="svelte-1ckj8qh"><meta property="${"description"}"${(0, import_index_68ac15fd.a)("content", description, 0)} data-svelte="svelte-1ckj8qh"><meta property="${"og:description"}"${(0, import_index_68ac15fd.a)("content", description, 0)} data-svelte="svelte-1ckj8qh"><meta property="${"image"}"${(0, import_index_68ac15fd.a)("content", image, 0)} data-svelte="svelte-1ckj8qh"><meta property="${"og:image"}"${(0, import_index_68ac15fd.a)("content", image, 0)} data-svelte="svelte-1ckj8qh"><meta property="${"twitter:image"}"${(0, import_index_68ac15fd.a)("content", image, 0)} data-svelte="svelte-1ckj8qh"><meta property="${"og:site_name"}" content="${"Eyebeam"}" data-svelte="svelte-1ckj8qh">`, ""}`;
});
