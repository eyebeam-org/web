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
var import_has = __toESM(require("lodash/has.js"));
var import_blocks_9c29c100 = require("../../../chunks/blocks-9c29c100.js");
var import_metadata_08e68bb9 = require("../../../chunks/metadata-08e68bb9.js");
var import_person_link_list_66a83380 = require("../../../chunks/person-link-list-66a83380.js");
var import_slugify = require("slugify");
var import_get = require("lodash/get.js");
var import_date_fns = require("date-fns");
var import_core = require("@popperjs/core");
var import_sanity_bfd50d1d = require("../../../chunks/sanity-bfd50d1d.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_get_video_id = require("get-video-id");
var import_global_eadaa9b6 = require("../../../chunks/global-eadaa9b6.js");
var import_truncate = require("lodash/truncate.js");
var import_stores_f9761b8b = require("../../../chunks/stores-f9761b8b.js");
var import_stores_b7bb0fad = require("../../../chunks/stores-b7bb0fad.js");
var _slug__svelte_svelte_type_style_lang = "";
const css = {
  code: ".journal.svelte-12xrj4v.svelte-12xrj4v{width:880px;margin-left:auto;margin-right:auto;background:var(--background-color);border:1px solid var(--foreground-color)}@media(max-width: 800px), screen and (orientation: portrait){.journal.svelte-12xrj4v.svelte-12xrj4v{width:100%;margin-top:40px}}.journal.svelte-12xrj4v .header.svelte-12xrj4v{border-bottom:1px solid var(--foreground-color);height:340px;padding:40px}@media(max-width: 800px), screen and (orientation: portrait){.journal.svelte-12xrj4v .header.svelte-12xrj4v{padding:20px;height:auto}}.journal.svelte-12xrj4v .header h1.svelte-12xrj4v{font-size:32px}.journal.svelte-12xrj4v .header .subtitle.svelte-12xrj4v{margin-top:15px}.journal.svelte-12xrj4v .header .authors.svelte-12xrj4v{margin-top:15px}.journal.svelte-12xrj4v .content.svelte-12xrj4v{padding:40px;font-size:18px}@media(max-width: 800px), screen and (orientation: portrait){.journal.svelte-12xrj4v .content.svelte-12xrj4v{padding:20px;font-size:16px}}",
  map: null
};
const U5Bslugu5D = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { page } = $$props;
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  $$result.css.add(css);
  return `
${(0, import_index_277e1cdb.v)(import_metadata_08e68bb9.M, "Metadata").$$render($$result, { page }, {}, {})}

<div class="${"journal svelte-12xrj4v"}"><header class="${"header svelte-12xrj4v"}">
		<h1 class="${"svelte-12xrj4v"}">${(0, import_index_277e1cdb.e)(page.title)}</h1>
		${page.subtitle ? `<div class="${"subtitle svelte-12xrj4v"}">${(0, import_index_277e1cdb.e)(page.subtitle)}</div>` : ``}
		<div class="${"authors svelte-12xrj4v"}">${(0, import_index_277e1cdb.v)(import_person_link_list_66a83380.P, "PersonLinkList").$$render($$result, { people: page.people }, {}, {})}</div></header>

	<article class="${"content svelte-12xrj4v"}">${(0, import_has.default)(page, "content.content") ? `${(0, import_index_277e1cdb.v)(import_blocks_9c29c100.B, "Blocks").$$render($$result, { blocks: page.content.content }, {}, {})}` : ``}</article>
</div>`;
});
