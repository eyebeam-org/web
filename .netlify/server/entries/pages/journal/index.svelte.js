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
var import_index_68ac15fd = require("../../../chunks/index-68ac15fd.js");
var import_get = __toESM(require("lodash/get.js"));
var import_global_61b718ff = require("../../../chunks/global-61b718ff.js");
var import_big_beam_b40565b9 = require("../../../chunks/big-beam-b40565b9.js");
var import_logo_000a5202 = require("../../../chunks/logo-000a5202.js");
var import_person_link_list_0e613235 = require("../../../chunks/person-link-list-0e613235.js");
var import_slugify = require("slugify");
var import_date_fns = require("date-fns");
var import_person_link_ca6b4a11 = require("../../../chunks/person-link-ca6b4a11.js");
var import_core = require("@popperjs/core");
var import_sanity_59332496 = require("../../../chunks/sanity-59332496.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_get_video_id = require("get-video-id");
var import_has = require("lodash/has.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".journal.svelte-1qgpf1v.svelte-1qgpf1v{width:880px;margin-left:auto;margin-right:auto;background:var(--background-color);border:1px solid var(--foreground-color)}@media(max-width: 800px){.journal.svelte-1qgpf1v.svelte-1qgpf1v{width:calc(100vw - 30px);margin-top:40px}}.journal.svelte-1qgpf1v .header.svelte-1qgpf1v{border-bottom:1px solid var(--foreground-color);height:340px;display:flex;align-items:center;justify-content:center}.journal.svelte-1qgpf1v .header .inner.svelte-1qgpf1v{width:340px;text-align:center}@media(max-width: 800px){.journal.svelte-1qgpf1v .header .inner.svelte-1qgpf1v{width:80%}}.journal.svelte-1qgpf1v .header .inner .tagline.svelte-1qgpf1v{margin-top:15px}.journal.svelte-1qgpf1v .listing .item.svelte-1qgpf1v{display:block;height:340px;width:100%;position:relative}.journal.svelte-1qgpf1v .listing .item.svelte-1qgpf1v:hover{background:#e0ded7;color:var(--hover-text-color)}.journal.svelte-1qgpf1v .listing .item .title.svelte-1qgpf1v{position:absolute;top:20px;left:20px}.journal.svelte-1qgpf1v .listing .item .authors.svelte-1qgpf1v{position:absolute;top:20px;right:20px}@media(max-width: 800px){.journal.svelte-1qgpf1v .listing .item .authors.svelte-1qgpf1v{top:120px;right:unset;left:20px}}.journal.svelte-1qgpf1v .listing .item .date.svelte-1qgpf1v{position:absolute;bottom:20px;left:20px}",
  map: null
};
const Journal = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  let { journal } = $$props;
  if ($$props.journal === void 0 && $$bindings.journal && journal !== void 0)
    $$bindings.journal(journal);
  $$result.css.add(css);
  return `<div class="${"journal svelte-1qgpf1v"}"><header class="${"header svelte-1qgpf1v"}"><div class="${"inner svelte-1qgpf1v"}">${(0, import_index_68ac15fd.v)(import_big_beam_b40565b9.B, "BigBeam").$$render($$result, {}, {}, {})}
			${(0, import_index_68ac15fd.v)(import_logo_000a5202.L, "Logo").$$render($$result, {}, {}, {})}
			<div class="${"tagline svelte-1qgpf1v"}">Eyebeam&#39;s Journal<br>Since 2022</div></div></header>

	<div class="${"listing"}">${(0, import_index_68ac15fd.h)(journal, (post) => {
    return `<a class="${"item svelte-1qgpf1v"}"${(0, import_index_68ac15fd.a)("href", "/journal/" + (0, import_get.default)(post, "slug.current", ""), 0)} sveltekit:prefetch><div class="${"title svelte-1qgpf1v"}">${(0, import_index_68ac15fd.e)(post.title)}</div>
				<div class="${"authors svelte-1qgpf1v"}"><i>by</i>
					${(0, import_index_68ac15fd.v)(import_person_link_list_0e613235.P, "PersonLinkList").$$render($$result, { people: post.people }, {}, {})}</div>
				<div class="${"date svelte-1qgpf1v"}">${(0, import_index_68ac15fd.e)((0, import_global_61b718ff.l)(post._updatedAt))}</div>
			</a>`;
  })}</div>
</div>`;
});
