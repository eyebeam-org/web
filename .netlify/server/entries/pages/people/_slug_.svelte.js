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
var import_index_68ac15fd = require("../../../chunks/index-68ac15fd.js");
var import_has = __toESM(require("lodash/has.js"));
var import_metadata_a1463793 = require("../../../chunks/metadata-a1463793.js");
var import_main_content_ef07923f = require("../../../chunks/main-content-ef07923f.js");
var import_stores_25b712dd = require("../../../chunks/stores-25b712dd.js");
var import_get = require("lodash/get.js");
var import_truncate = require("lodash/truncate.js");
var import_sanity_bf41d9e1 = require("../../../chunks/sanity-bf41d9e1.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_get_video_id = require("get-video-id");
var import_stores_2672c807 = require("../../../chunks/stores-2672c807.js");
var import_global_61b718ff = require("../../../chunks/global-61b718ff.js");
var import_slugify = require("slugify");
var import_date_fns = require("date-fns");
var import_blocks_7e60b135 = require("../../../chunks/blocks-7e60b135.js");
var import_person_link_82d12ee3 = require("../../../chunks/person-link-82d12ee3.js");
var import_core = require("@popperjs/core");
var import_see_also_81d75722 = require("../../../chunks/see-also-81d75722.js");
var import_bottom_bar_9ab2e699 = require("../../../chunks/bottom-bar-9ab2e699.js");
const U5Bslugu5D = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  let { page } = $$props;
  let toc = [];
  if (page.website) {
    toc.push({ title: "Website", link: "#website" });
  }
  if ((0, import_has.default)(page, "bio.content")) {
    toc.push({ title: "Bio", link: "#bio" });
  }
  if (page.connectedPosts.length > 0) {
    toc.push({ title: "At Eyebeam", link: "#at-eyebeam" });
  }
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  {
    import_stores_25b712dd.s.set(page.title);
  }
  {
    import_stores_25b712dd.b.set(toc);
  }
  return `
${(0, import_index_68ac15fd.v)(import_metadata_a1463793.M, "Metadata").$$render($$result, { page }, {}, {})}


${(0, import_index_68ac15fd.v)(import_main_content_ef07923f.M, "MainContent").$$render($$result, { page }, {}, {})}`;
});
