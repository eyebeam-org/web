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
  default: () => U5Bslugu5D,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_277e1cdb = require("../../../chunks/index-277e1cdb.js");
var import_get = __toESM(require("lodash/get.js"));
var import_global_eadaa9b6 = require("../../../chunks/global-eadaa9b6.js");
var import_main_content_e5bdacce = require("../../../chunks/main-content-e5bdacce.js");
var import_metadata_08e68bb9 = require("../../../chunks/metadata-08e68bb9.js");
var import_stores_f9761b8b = require("../../../chunks/stores-f9761b8b.js");
var import_slugify = require("slugify");
var import_date_fns = require("date-fns");
var import_sanity_bfd50d1d = require("../../../chunks/sanity-bfd50d1d.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_get_video_id = require("get-video-id");
var import_has = require("lodash/has.js");
var import_blocks_9c29c100 = require("../../../chunks/blocks-9c29c100.js");
var import_core = require("@popperjs/core");
var import_see_also_0890c1bb = require("../../../chunks/see-also-0890c1bb.js");
var import_bottom_bar_168e682a = require("../../../chunks/bottom-bar-168e682a.js");
var import_truncate = require("lodash/truncate.js");
var import_stores_b7bb0fad = require("../../../chunks/stores-b7bb0fad.js");
const prerender = false;
const U5Bslugu5D = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { page } = $$props;
  let toc = (0, import_global_eadaa9b6.p)((0, import_get.default)(page, "content.content"));
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  {
    import_stores_f9761b8b.a.set(page.title);
  }
  {
    import_stores_f9761b8b.s.set(toc);
  }
  return `
${(0, import_index_277e1cdb.v)(import_metadata_08e68bb9.M, "Metadata").$$render($$result, { page }, {}, {})}


${(0, import_index_277e1cdb.v)(import_main_content_e5bdacce.M, "MainContent").$$render($$result, { page }, {}, {})}`;
});
