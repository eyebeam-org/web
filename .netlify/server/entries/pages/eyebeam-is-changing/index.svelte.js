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
  default: () => Eyebeam_is_changing
});
module.exports = __toCommonJS(stdin_exports);
var import_index_68ac15fd = require("../../../chunks/index-68ac15fd.js");
var import_main_content_dc163981 = require("../../../chunks/main-content-dc163981.js");
var import_metadata_a699f85e = require("../../../chunks/metadata-a699f85e.js");
var import_stores_25b712dd = require("../../../chunks/stores-25b712dd.js");
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
var import_blocks_11eda655 = require("../../../chunks/blocks-11eda655.js");
var import_person_link_eed93e98 = require("../../../chunks/person-link-eed93e98.js");
var import_core = require("@popperjs/core");
var import_see_also_43ac7363 = require("../../../chunks/see-also-43ac7363.js");
var import_bottom_bar_9ab2e699 = require("../../../chunks/bottom-bar-9ab2e699.js");
var import_truncate = require("lodash/truncate.js");
var import_stores_2672c807 = require("../../../chunks/stores-2672c807.js");
const Eyebeam_is_changing = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  let { page } = $$props;
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  {
    import_stores_25b712dd.s.set(page.title);
  }
  {
    import_stores_25b712dd.b.set([]);
  }
  return `
${(0, import_index_68ac15fd.v)(import_metadata_a699f85e.M, "Metadata").$$render($$result, { page }, {}, {})}


${(0, import_index_68ac15fd.v)(import_main_content_dc163981.M, "MainContent").$$render($$result, { page }, {}, {})}`;
});
