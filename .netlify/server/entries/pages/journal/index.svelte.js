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
  default: () => Journal
});
module.exports = __toCommonJS(stdin_exports);
var import_index_277e1cdb = require("../../../chunks/index-277e1cdb.js");
var import_get = __toESM(require("lodash/get.js"));
var import_global_eadaa9b6 = require("../../../chunks/global-eadaa9b6.js");
var import_big_beam_c5c43470 = require("../../../chunks/big-beam-c5c43470.js");
var import_logo_255ac452 = require("../../../chunks/logo-255ac452.js");
var import_person_link_list_71a9e6f6 = require("../../../chunks/person-link-list-71a9e6f6.js");
var import_slugify = require("slugify");
var import_date_fns = require("date-fns");
var import_blocks_c7be9ebc = require("../../../chunks/blocks-c7be9ebc.js");
var import_core = require("@popperjs/core");
var import_sanity_bfd50d1d = require("../../../chunks/sanity-bfd50d1d.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_get_video_id = require("get-video-id");
var import_has = require("lodash/has.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".journal.svelte-1uz8uqo.svelte-1uz8uqo{width:880px;margin-left:auto;margin-right:auto;background:var(--background-color);border:1px solid var(--foreground-color)}@media(max-width: 800px), screen and (orientation: portrait){.journal.svelte-1uz8uqo.svelte-1uz8uqo{width:calc(100vw - 30px);margin-top:40px}}.journal.svelte-1uz8uqo .header.svelte-1uz8uqo{border-bottom:1px solid var(--foreground-color);height:340px;display:flex;align-items:center;justify-content:center}.journal.svelte-1uz8uqo .header .inner.svelte-1uz8uqo{width:340px;text-align:center}@media(max-width: 800px), screen and (orientation: portrait){.journal.svelte-1uz8uqo .header .inner.svelte-1uz8uqo{width:80%}}.journal.svelte-1uz8uqo .header .inner .tagline.svelte-1uz8uqo{margin-top:15px}.journal.svelte-1uz8uqo .listing .item.svelte-1uz8uqo{display:block;height:340px;width:100%;position:relative}.journal.svelte-1uz8uqo .listing .item.svelte-1uz8uqo:hover{background:#e0ded7;color:var(--hover-text-color)}.journal.svelte-1uz8uqo .listing .item .title.svelte-1uz8uqo{position:absolute;top:20px;left:20px}.journal.svelte-1uz8uqo .listing .item .authors.svelte-1uz8uqo{position:absolute;top:20px;right:20px}@media(max-width: 800px), screen and (orientation: portrait){.journal.svelte-1uz8uqo .listing .item .authors.svelte-1uz8uqo{top:120px;right:unset;left:20px}}.journal.svelte-1uz8uqo .listing .item .date.svelte-1uz8uqo{position:absolute;bottom:20px;left:20px}",
  map: null
};
const Journal = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { journal } = $$props;
  if ($$props.journal === void 0 && $$bindings.journal && journal !== void 0)
    $$bindings.journal(journal);
  $$result.css.add(css);
  return `<div class="${"journal svelte-1uz8uqo"}"><header class="${"header svelte-1uz8uqo"}"><div class="${"inner svelte-1uz8uqo"}">${(0, import_index_277e1cdb.v)(import_big_beam_c5c43470.B, "BigBeam").$$render($$result, {}, {}, {})}
			${(0, import_index_277e1cdb.v)(import_logo_255ac452.L, "Logo").$$render($$result, {}, {}, {})}
			<div class="${"tagline svelte-1uz8uqo"}">Eyebeam&#39;s Journal<br>Since 2022</div></div></header>

	<div class="${"listing"}">${(0, import_index_277e1cdb.d)(journal, (post) => {
    return `<a class="${"item svelte-1uz8uqo"}"${(0, import_index_277e1cdb.a)("href", "/journal/" + (0, import_get.default)(post, "slug.current", ""), 0)} sveltekit:prefetch><div class="${"title svelte-1uz8uqo"}">${(0, import_index_277e1cdb.e)(post.title)}</div>
				<div class="${"authors svelte-1uz8uqo"}"><i>by</i>
					${(0, import_index_277e1cdb.v)(import_person_link_list_71a9e6f6.P, "PersonLinkList").$$render($$result, { people: post.people }, {}, {})}</div>
				<div class="${"date svelte-1uz8uqo"}">${(0, import_index_277e1cdb.e)((0, import_global_eadaa9b6.l)(post._updatedAt))}</div>
			</a>`;
  })}</div>
</div>`;
});
