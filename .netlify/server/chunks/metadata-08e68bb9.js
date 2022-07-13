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
var import_index_277e1cdb = require("./index-277e1cdb.js");
var import_has = __toESM(require("lodash/has.js"));
var import_get = __toESM(require("lodash/get.js"));
var import_truncate = __toESM(require("lodash/truncate.js"));
var import_sanity_bfd50d1d = require("./sanity-bfd50d1d.js");
var import_stores_f9761b8b = require("./stores-f9761b8b.js");
var import_stores_b7bb0fad = require("./stores-b7bb0fad.js");
var import_global_eadaa9b6 = require("./global-eadaa9b6.js");
const Metadata = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let $pageStore, $$unsubscribe_pageStore;
  $$unsubscribe_pageStore = (0, import_index_277e1cdb.b)(import_stores_b7bb0fad.p, (value) => $pageStore = value);
  let { page: page$1 = {} } = $$props;
  let { isSingle = false } = $$props;
  const title = page$1.title ? page$1.title : "eyebeam.org";
  let description = "";
  if ((0, import_has.default)(page$1, "content.content")) {
    description = (0, import_truncate.default)((0, import_sanity_bfd50d1d.t)(page$1.content.content), { length: 160 });
  } else if ((0, import_has.default)(page$1, "introduction.content")) {
    description = (0, import_truncate.default)((0, import_sanity_bfd50d1d.t)(page$1.introduction.content), { length: 160 });
  } else {
    description = import_global_eadaa9b6.f;
  }
  const url = import_global_eadaa9b6.B + $pageStore.url.pathname;
  const image = (0, import_has.default)(page$1, "mainImage.asset") ? (0, import_sanity_bfd50d1d.u)(page$1.mainImage) : import_global_eadaa9b6.D;
  if (isSingle) {
    import_stores_f9761b8b.c.set({
      slug: (0, import_get.default)(page$1, "slug.current", ""),
      title: page$1.title
    });
  }
  (0, import_index_277e1cdb.o)(() => {
    if (isSingle) {
      import_stores_f9761b8b.c.set(null);
    }
  });
  if ($$props.page === void 0 && $$bindings.page && page$1 !== void 0)
    $$bindings.page(page$1);
  if ($$props.isSingle === void 0 && $$bindings.isSingle && isSingle !== void 0)
    $$bindings.isSingle(isSingle);
  $$unsubscribe_pageStore();
  return `${$$result.head += `${$$result.title = `<title>${(0, import_index_277e1cdb.e)(title)}</title>`, ""}<meta name="${"twitter:card"}" content="${"summary_large_image"}" data-svelte="svelte-1ckj8qh"><meta name="${"twitter:url"}"${(0, import_index_277e1cdb.a)("content", url, 0)} data-svelte="svelte-1ckj8qh"><meta property="${"og:url"}"${(0, import_index_277e1cdb.a)("content", url, 0)} data-svelte="svelte-1ckj8qh"><meta property="${"og:type"}" content="${"article"}" data-svelte="svelte-1ckj8qh"><meta property="${"twitter:title"}"${(0, import_index_277e1cdb.a)("content", title, 0)} data-svelte="svelte-1ckj8qh"><meta property="${"twitter:description"}"${(0, import_index_277e1cdb.a)("content", description, 0)} data-svelte="svelte-1ckj8qh"><meta property="${"og:title"}"${(0, import_index_277e1cdb.a)("content", title, 0)} data-svelte="svelte-1ckj8qh"><meta property="${"description"}"${(0, import_index_277e1cdb.a)("content", description, 0)} data-svelte="svelte-1ckj8qh"><meta property="${"og:description"}"${(0, import_index_277e1cdb.a)("content", description, 0)} data-svelte="svelte-1ckj8qh"><meta property="${"image"}"${(0, import_index_277e1cdb.a)("content", image, 0)} data-svelte="svelte-1ckj8qh"><meta property="${"og:image"}"${(0, import_index_277e1cdb.a)("content", image, 0)} data-svelte="svelte-1ckj8qh"><meta property="${"twitter:image"}"${(0, import_index_277e1cdb.a)("content", image, 0)} data-svelte="svelte-1ckj8qh"><meta property="${"og:site_name"}" content="${"Eyebeam"}" data-svelte="svelte-1ckj8qh">`, ""}`;
});
