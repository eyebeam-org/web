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
var import_bottom_bar_2d2f7e63 = require("../../chunks/bottom-bar-2d2f7e63.js");
var import_sanity_59332496 = require("../../chunks/sanity-59332496.js");
var import_slugify = require("slugify");
var import_date_fns = require("date-fns");
var import_stores_b7bb0fad = require("../../chunks/stores-b7bb0fad.js");
var import_global_61b718ff = require("../../chunks/global-61b718ff.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_get_video_id = require("get-video-id");
var import_has = require("lodash/has.js");
var __error_svelte_svelte_type_style_lang = "";
const css = {
  code: ".main-content.svelte-b7u5nb.svelte-b7u5nb{width:calc((100% / 3) * 2);margin-bottom:120px}@media(max-width: 800px){.main-content.svelte-b7u5nb.svelte-b7u5nb{width:100%;margin-bottom:0}}.article.svelte-b7u5nb.svelte-b7u5nb{border:1px solid var(--foreground-color);min-height:100vh;display:inline-block;width:100%;padding-bottom:20px}@media(max-width: 800px){.article.svelte-b7u5nb.svelte-b7u5nb{border:unset}}.article.svelte-b7u5nb h1.svelte-b7u5nb{margin-left:20px;margin-right:40px;margin-right:20px;margin-top:20px;line-height:1.1em}@media(max-width: 800px){.article.svelte-b7u5nb h1.svelte-b7u5nb{margin-left:0;margin-right:0}}.article.svelte-b7u5nb .description.svelte-b7u5nb{font-size:27px;margin-left:20px;margin-right:40px;margin-bottom:20px}@media(max-width: 800px){.article.svelte-b7u5nb .description.svelte-b7u5nb{margin-left:0;margin-right:0}}.article.svelte-b7u5nb .help.svelte-b7u5nb{font-size:16px;margin-left:20px;margin-right:40px;margin-bottom:20px}@media(max-width: 800px){.article.svelte-b7u5nb .help.svelte-b7u5nb{margin-left:0;margin-right:0}}.article.svelte-b7u5nb .help .search-link.svelte-b7u5nb{cursor:pointer;text-decoration:underline}",
  map: null
};
const _error = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let $pageStore, $$unsubscribe_pageStore;
  $$unsubscribe_pageStore = (0, import_index_277e1cdb.b)(import_stores_b7bb0fad.p, (value) => $pageStore = value);
  $$result.css.add(css);
  $$unsubscribe_pageStore();
  return `<div class="${"main-content svelte-b7u5nb"}"><div class="${"article svelte-b7u5nb"}"><h1 class="${"svelte-b7u5nb"}">${(0, import_index_277e1cdb.e)((0, import_get.default)($pageStore, "error.name", ""))}</h1>
		<div class="${"description svelte-b7u5nb"}">${(0, import_index_277e1cdb.e)((0, import_get.default)($pageStore, "error.message", ""))}</div>
		<div class="${"help svelte-b7u5nb"}">Try returning to the <a href="${"/"}" sveltekit:prefetch>homepage</a> or
			<span class="${"search-link svelte-b7u5nb"}">searching</span></div></div>
	${(0, import_index_277e1cdb.v)(import_bottom_bar_2d2f7e63.B, "BottomBar").$$render($$result, {}, {}, {})}</div>

${``}`;
});
