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
  default: () => Press_and_news
});
module.exports = __toCommonJS(stdin_exports);
var import_index_277e1cdb = require("../../../chunks/index-277e1cdb.js");
var import_has = __toESM(require("lodash/has.js"));
var import_bottom_bar_168e682a = require("../../../chunks/bottom-bar-168e682a.js");
var import_press_and_news_item_cbbd7c00 = require("../../../chunks/press-and-news-item-cbbd7c00.js");
var import_blocks_7ef65749 = require("../../../chunks/blocks-7ef65749.js");
var import_see_also_47f32c41 = require("../../../chunks/see-also-47f32c41.js");
var import_metadata_08e68bb9 = require("../../../chunks/metadata-08e68bb9.js");
var import_stores_f9761b8b = require("../../../chunks/stores-f9761b8b.js");
var import_global_eadaa9b6 = require("../../../chunks/global-eadaa9b6.js");
var import_slugify = require("slugify");
var import_date_fns = require("date-fns");
var import_get = require("lodash/get.js");
var import_core = require("@popperjs/core");
var import_sanity_bfd50d1d = require("../../../chunks/sanity-bfd50d1d.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_get_video_id = require("get-video-id");
var import_truncate = require("lodash/truncate.js");
var import_stores_b7bb0fad = require("../../../chunks/stores-b7bb0fad.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".main-content.svelte-1n16gad.svelte-1n16gad{float:left;width:calc((100% / 3) * 2)}@media(max-width: 800px), screen and (orientation: portrait){.main-content.svelte-1n16gad.svelte-1n16gad{width:100%}}.main-content.svelte-1n16gad .inner.svelte-1n16gad{width:100%;border:1px solid var(--foreground-color);min-height:100vh;display:inline-block}.main-content.svelte-1n16gad .inner h1.svelte-1n16gad{padding:20px}.press-and-news-listing.svelte-1n16gad.svelte-1n16gad{width:100%;display:flex;margin-top:20px;flex-wrap:wrap}.bottom-divider.svelte-1n16gad.svelte-1n16gad{width:100%;border-bottom:1px solid var(--foreground-color);margin-top:40px}.section.svelte-1n16gad.svelte-1n16gad{margin-top:40px}.section.svelte-1n16gad h2.svelte-1n16gad{padding-left:20px;padding-right:20px}.text-content.svelte-1n16gad.svelte-1n16gad{padding:20px}",
  map: null
};
const Press_and_news = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { page } = $$props;
  let { press } = $$props;
  let { news } = $$props;
  const toc = [
    { title: "News", link: "#news" },
    {
      title: "Press Releases",
      link: "#press-releases"
    },
    {
      title: "Press Contact",
      link: "#press-contact"
    }
  ];
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.press === void 0 && $$bindings.press && press !== void 0)
    $$bindings.press(press);
  if ($$props.news === void 0 && $$bindings.news && news !== void 0)
    $$bindings.news(news);
  $$result.css.add(css);
  {
    import_stores_f9761b8b.a.set("Press & News");
  }
  {
    import_stores_f9761b8b.s.set(toc);
  }
  return `
${(0, import_index_277e1cdb.v)(import_metadata_08e68bb9.M, "Metadata").$$render($$result, { page: { title: "Press & News" } }, {}, {})}


<div class="${"main-content svelte-1n16gad"}"><div class="${"inner svelte-1n16gad"}"><h1 class="${"svelte-1n16gad"}">Press &amp; News</h1>

		${(0, import_has.default)(page, "content.content") ? `<div>${(0, import_index_277e1cdb.v)(import_blocks_7ef65749.B, "Blocks").$$render($$result, { blocks: page.content.content }, {}, {})}</div>` : ``}

		<div class="${"section svelte-1n16gad"}" id="${"news"}"><h2 class="${"svelte-1n16gad"}">News</h2>
			<div class="${"press-and-news-listing svelte-1n16gad"}">${(0, import_index_277e1cdb.d)(news, (post) => {
    return `${(0, import_index_277e1cdb.v)(import_press_and_news_item_cbbd7c00.P, "PressAndNewsItem").$$render($$result, { post }, {}, {})}`;
  })}</div>
			
			<div class="${"bottom-divider svelte-1n16gad"}"></div></div>

		<div class="${"section svelte-1n16gad"}" id="${"press-releases"}"><h2 class="${"svelte-1n16gad"}">Press releases</h2>
			<div class="${"press-and-news-listing svelte-1n16gad"}">${(0, import_index_277e1cdb.d)(press, (post) => {
    return `${(0, import_index_277e1cdb.v)(import_press_and_news_item_cbbd7c00.P, "PressAndNewsItem").$$render($$result, { post }, {}, {})}`;
  })}</div>
			
			<div class="${"bottom-divider svelte-1n16gad"}"></div></div>

		<div class="${"section svelte-1n16gad"}" id="${"press-contact"}"><h2 class="${"svelte-1n16gad"}">Press contact</h2>
			${(0, import_has.default)(page, "pressContact.content") ? `<div class="${"text-content svelte-1n16gad"}">${(0, import_index_277e1cdb.v)(import_blocks_7ef65749.B, "Blocks").$$render($$result, { blocks: page.pressContact.content }, {}, {})}</div>` : ``}</div>

		
		${page.internalLinks && page.internalLinks.length > 0 || page.externalLinks && page.externalLinks.length > 0 ? `${(0, import_index_277e1cdb.v)(import_see_also_47f32c41.S, "SeeAlso").$$render($$result, {
    externalLinks: page.externalLinks,
    internalLinks: page.internalLinks
  }, {}, {})}` : ``}</div>

	
	${(0, import_index_277e1cdb.v)(import_bottom_bar_168e682a.B, "BottomBar").$$render($$result, {}, {}, {})}
</div>`;
});
