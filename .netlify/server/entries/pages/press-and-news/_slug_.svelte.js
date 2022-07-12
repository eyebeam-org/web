var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => U5Bslugu5D
});
module.exports = __toCommonJS(stdin_exports);
var import_index_277e1cdb = require("../../../chunks/index-277e1cdb.js");
var import_main_content_a169f1d7 = require("../../../chunks/main-content-a169f1d7.js");
var import_metadata_2f61a1e2 = require("../../../chunks/metadata-2f61a1e2.js");
var import_stores_effda588 = require("../../../chunks/stores-effda588.js");
var import_sanity_59332496 = require("../../../chunks/sanity-59332496.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_get_video_id = require("get-video-id");
var import_has = require("lodash/has.js");
var import_get = require("lodash/get.js");
var import_global_61b718ff = require("../../../chunks/global-61b718ff.js");
var import_slugify = require("slugify");
var import_date_fns = require("date-fns");
var import_blocks_57d28cdb = require("../../../chunks/blocks-57d28cdb.js");
var import_person_link_7a5675bf = require("../../../chunks/person-link-7a5675bf.js");
var import_core = require("@popperjs/core");
var import_see_also_9d92a075 = require("../../../chunks/see-also-9d92a075.js");
var import_bottom_bar_2d2f7e63 = require("../../../chunks/bottom-bar-2d2f7e63.js");
var import_truncate = require("lodash/truncate.js");
var import_stores_b7bb0fad = require("../../../chunks/stores-b7bb0fad.js");
const U5Bslugu5D = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { page } = $$props;
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  {
    import_stores_effda588.a.set(page.title);
  }
  {
    import_stores_effda588.s.set([]);
  }
  return `
${(0, import_index_277e1cdb.v)(import_metadata_2f61a1e2.M, "Metadata").$$render($$result, { page }, {}, {})}


${(0, import_index_277e1cdb.v)(import_main_content_a169f1d7.M, "MainContent").$$render($$result, { page }, {}, {})}`;
});
