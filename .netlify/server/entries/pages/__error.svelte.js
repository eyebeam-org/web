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
  default: () => _error
});
module.exports = __toCommonJS(stdin_exports);
var import_index_277e1cdb = require("../../chunks/index-277e1cdb.js");
var import_get = __toESM(require("lodash/get.js"));
var import_bottom_bar_168e682a = require("../../chunks/bottom-bar-168e682a.js");
var import_sanity_1a8ac269 = require("../../chunks/sanity-1a8ac269.js");
var import_slugify = require("slugify");
var import_date_fns = require("date-fns");
var import_stores_b7bb0fad = require("../../chunks/stores-b7bb0fad.js");
var import_global_eadaa9b6 = require("../../chunks/global-eadaa9b6.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_get_video_id = require("get-video-id");
var import_has = require("lodash/has.js");
var __error_svelte_svelte_type_style_lang = "";
const css = {
  code: ".main-content.svelte-okuyys.svelte-okuyys{width:calc((100% / 3) * 2);margin-bottom:120px}@media(max-width: 800px), screen and (orientation: portrait){.main-content.svelte-okuyys.svelte-okuyys{width:100%;margin-bottom:0}}.article.svelte-okuyys.svelte-okuyys{border:1px solid var(--foreground-color);min-height:100vh;display:inline-block;width:100%;padding-bottom:20px}@media(max-width: 800px), screen and (orientation: portrait){.article.svelte-okuyys.svelte-okuyys{border:unset}}.article.svelte-okuyys h1.svelte-okuyys{margin-left:20px;margin-right:40px;margin-right:20px;margin-top:20px;line-height:1.1em}@media(max-width: 800px), screen and (orientation: portrait){.article.svelte-okuyys h1.svelte-okuyys{margin-left:0;margin-right:0}}.article.svelte-okuyys .description.svelte-okuyys{font-size:27px;margin-left:20px;margin-right:40px;margin-bottom:20px}@media(max-width: 800px), screen and (orientation: portrait){.article.svelte-okuyys .description.svelte-okuyys{margin-left:0;margin-right:0}}.article.svelte-okuyys .help.svelte-okuyys{font-size:16px;margin-left:20px;margin-right:40px;margin-bottom:20px}@media(max-width: 800px), screen and (orientation: portrait){.article.svelte-okuyys .help.svelte-okuyys{margin-left:0;margin-right:0}}.article.svelte-okuyys .help .search-link.svelte-okuyys{cursor:pointer;text-decoration:underline}",
  map: null
};
const _error = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let $pageStore, $$unsubscribe_pageStore;
  $$unsubscribe_pageStore = (0, import_index_277e1cdb.b)(import_stores_b7bb0fad.p, (value) => $pageStore = value);
  $$result.css.add(css);
  $$unsubscribe_pageStore();
  return `<div class="${"main-content svelte-okuyys"}"><div class="${"article svelte-okuyys"}"><h1 class="${"svelte-okuyys"}">${(0, import_index_277e1cdb.e)((0, import_get.default)($pageStore, "error.name", ""))}</h1>
		<div class="${"description svelte-okuyys"}">${(0, import_index_277e1cdb.e)((0, import_get.default)($pageStore, "error.message", ""))}</div>
		<div class="${"help svelte-okuyys"}">Try returning to the <a href="${"/"}" sveltekit:prefetch>homepage</a> or
			<span class="${"search-link svelte-okuyys"}">searching</span></div></div>
	${(0, import_index_277e1cdb.v)(import_bottom_bar_168e682a.B, "BottomBar").$$render($$result, {}, {}, {})}</div>

${``}`;
});
