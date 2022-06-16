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
var import_blocks_11eda655 = require("../../../chunks/blocks-11eda655.js");
var import_metadata_a699f85e = require("../../../chunks/metadata-a699f85e.js");
var import_person_link_list_08cbb675 = require("../../../chunks/person-link-list-08cbb675.js");
var import_slugify = require("slugify");
var import_get = require("lodash/get.js");
var import_date_fns = require("date-fns");
var import_person_link_eed93e98 = require("../../../chunks/person-link-eed93e98.js");
var import_core = require("@popperjs/core");
var import_sanity_59332496 = require("../../../chunks/sanity-59332496.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_get_video_id = require("get-video-id");
var import_global_61b718ff = require("../../../chunks/global-61b718ff.js");
var import_truncate = require("lodash/truncate.js");
var import_stores_25b712dd = require("../../../chunks/stores-25b712dd.js");
var import_stores_2672c807 = require("../../../chunks/stores-2672c807.js");
var _slug__svelte_svelte_type_style_lang = "";
const css = {
  code: ".journal.svelte-281o9u.svelte-281o9u{width:880px;margin-left:auto;margin-right:auto;background:var(--background-color);border:1px solid var(--foreground-color)}@media(max-width: 800px){.journal.svelte-281o9u.svelte-281o9u{width:100%;margin-top:40px}}.journal.svelte-281o9u .header.svelte-281o9u{border-bottom:1px solid var(--foreground-color);height:340px;padding:40px}@media(max-width: 800px){.journal.svelte-281o9u .header.svelte-281o9u{padding:20px;height:auto}}.journal.svelte-281o9u .header h1.svelte-281o9u{font-size:32px}.journal.svelte-281o9u .header .subtitle.svelte-281o9u{margin-top:15px}.journal.svelte-281o9u .header .authors.svelte-281o9u{margin-top:15px}.journal.svelte-281o9u .content.svelte-281o9u{padding:40px;font-size:18px}@media(max-width: 800px){.journal.svelte-281o9u .content.svelte-281o9u{padding:20px;font-size:16px}}",
  map: null
};
const U5Bslugu5D = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  let { page } = $$props;
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  $$result.css.add(css);
  return `
${(0, import_index_68ac15fd.v)(import_metadata_a699f85e.M, "Metadata").$$render($$result, { page }, {}, {})}

<div class="${"journal svelte-281o9u"}"><header class="${"header svelte-281o9u"}">
		<h1 class="${"svelte-281o9u"}">${(0, import_index_68ac15fd.e)(page.title)}</h1>
		${page.subtitle ? `<div class="${"subtitle svelte-281o9u"}">${(0, import_index_68ac15fd.e)(page.subtitle)}</div>` : ``}
		<div class="${"authors svelte-281o9u"}">${(0, import_index_68ac15fd.v)(import_person_link_list_08cbb675.P, "PersonLinkList").$$render($$result, { people: page.people }, {}, {})}</div></header>

	<article class="${"content svelte-281o9u"}">${(0, import_has.default)(page, "content.content") ? `${(0, import_index_68ac15fd.v)(import_blocks_11eda655.B, "Blocks").$$render($$result, { blocks: page.content.content }, {}, {})}` : ``}</article>
</div>`;
});
