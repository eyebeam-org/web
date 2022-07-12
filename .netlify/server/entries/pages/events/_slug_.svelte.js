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
  default: () => U5Bslugu5D
});
module.exports = __toCommonJS(stdin_exports);
var import_index_277e1cdb = require("../../../chunks/index-277e1cdb.js");
var import_get = __toESM(require("lodash/get.js"));
var import_global_eadaa9b6 = require("../../../chunks/global-eadaa9b6.js");
var import_main_content_49f4db59 = require("../../../chunks/main-content-49f4db59.js");
var import_metadata_c74c46dc = require("../../../chunks/metadata-c74c46dc.js");
var import_stores_f9761b8b = require("../../../chunks/stores-f9761b8b.js");
var import_slugify = require("slugify");
var import_date_fns = require("date-fns");
var import_sanity_1a8ac269 = require("../../../chunks/sanity-1a8ac269.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_get_video_id = require("get-video-id");
var import_has = require("lodash/has.js");
var import_blocks_4014f298 = require("../../../chunks/blocks-4014f298.js");
var import_core = require("@popperjs/core");
var import_see_also_b2303e09 = require("../../../chunks/see-also-b2303e09.js");
var import_bottom_bar_168e682a = require("../../../chunks/bottom-bar-168e682a.js");
var import_truncate = require("lodash/truncate.js");
var import_stores_b7bb0fad = require("../../../chunks/stores-b7bb0fad.js");
const U5Bslugu5D = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  const prerender = false;
  let { page } = $$props;
  let toc = (0, import_global_eadaa9b6.p)((0, import_get.default)(page, "content.content"));
  if ((0, import_get.default)(page, "people", []).length > 0) {
    toc.push({ title: "People", link: "#people" });
  }
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  {
    import_stores_f9761b8b.a.set(page.title);
  }
  {
    import_stores_f9761b8b.s.set(toc);
  }
  return `
${(0, import_index_277e1cdb.v)(import_metadata_c74c46dc.M, "Metadata").$$render($$result, { page }, {}, {})}


${(0, import_index_277e1cdb.v)(import_main_content_49f4db59.M, "MainContent").$$render($$result, { page }, {}, {})}`;
});
