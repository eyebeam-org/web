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
var import_index_68ac15fd = require("../../../chunks/index-68ac15fd.js");
var import_has = __toESM(require("lodash/has.js"));
var import_bottom_bar_9ab2e699 = require("../../../chunks/bottom-bar-9ab2e699.js");
var import_press_and_news_item_7ee66134 = require("../../../chunks/press-and-news-item-7ee66134.js");
var import_blocks_c75ee098 = require("../../../chunks/blocks-c75ee098.js");
var import_see_also_998afbc8 = require("../../../chunks/see-also-998afbc8.js");
var import_metadata_ef16be06 = require("../../../chunks/metadata-ef16be06.js");
var import_stores_25b712dd = require("../../../chunks/stores-25b712dd.js");
var import_global_61b718ff = require("../../../chunks/global-61b718ff.js");
var import_slugify = require("slugify");
var import_date_fns = require("date-fns");
var import_get = require("lodash/get.js");
var import_person_link_ca6b4a11 = require("../../../chunks/person-link-ca6b4a11.js");
var import_core = require("@popperjs/core");
var import_sanity_59332496 = require("../../../chunks/sanity-59332496.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_get_video_id = require("get-video-id");
var import_truncate = require("lodash/truncate.js");
var import_stores_2672c807 = require("../../../chunks/stores-2672c807.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".main-content.svelte-13y0sjo.svelte-13y0sjo{float:left;width:calc((100% / 3) * 2)}@media(max-width: 800px){.main-content.svelte-13y0sjo.svelte-13y0sjo{width:100%}}.main-content.svelte-13y0sjo .inner.svelte-13y0sjo{width:100%;border:1px solid var(--foreground-color);min-height:100vh;display:inline-block}.main-content.svelte-13y0sjo .inner h1.svelte-13y0sjo{padding:20px}.press-and-news-listing.svelte-13y0sjo.svelte-13y0sjo{width:100%;display:flex;margin-top:20px;flex-wrap:wrap}.bottom-divider.svelte-13y0sjo.svelte-13y0sjo{width:100%;border-bottom:1px solid var(--foreground-color);margin-top:40px}.section.svelte-13y0sjo.svelte-13y0sjo{margin-top:40px}.section.svelte-13y0sjo h2.svelte-13y0sjo{padding-left:20px;padding-right:20px}.text-content.svelte-13y0sjo.svelte-13y0sjo{padding:20px}",
  map: null
};
const Press_and_news = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
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
    import_stores_25b712dd.s.set("Press & News");
  }
  {
    import_stores_25b712dd.b.set(toc);
  }
  return `
${(0, import_index_68ac15fd.v)(import_metadata_ef16be06.M, "Metadata").$$render($$result, { page: { title: "Press & News" } }, {}, {})}


<div class="${"main-content svelte-13y0sjo"}"><div class="${"inner svelte-13y0sjo"}"><h1 class="${"svelte-13y0sjo"}">Press &amp; News</h1>

		${(0, import_has.default)(page, "content.content") ? `<div>${(0, import_index_68ac15fd.v)(import_blocks_c75ee098.B, "Blocks").$$render($$result, { blocks: page.content.content }, {}, {})}</div>` : ``}

		<div class="${"section svelte-13y0sjo"}" id="${"news"}"><h2 class="${"svelte-13y0sjo"}">News</h2>
			<div class="${"press-and-news-listing svelte-13y0sjo"}">${(0, import_index_68ac15fd.h)(news, (post) => {
    return `${(0, import_index_68ac15fd.v)(import_press_and_news_item_7ee66134.P, "PressAndNewsItem").$$render($$result, { post }, {}, {})}`;
  })}</div>
			
			<div class="${"bottom-divider svelte-13y0sjo"}"></div></div>

		<div class="${"section svelte-13y0sjo"}" id="${"press-releases"}"><h2 class="${"svelte-13y0sjo"}">Press releases</h2>
			<div class="${"press-and-news-listing svelte-13y0sjo"}">${(0, import_index_68ac15fd.h)(press, (post) => {
    return `${(0, import_index_68ac15fd.v)(import_press_and_news_item_7ee66134.P, "PressAndNewsItem").$$render($$result, { post }, {}, {})}`;
  })}</div>
			
			<div class="${"bottom-divider svelte-13y0sjo"}"></div></div>

		<div class="${"section svelte-13y0sjo"}" id="${"press-contact"}"><h2 class="${"svelte-13y0sjo"}">Press contact</h2>
			${(0, import_has.default)(page, "pressContact.content") ? `<div class="${"text-content svelte-13y0sjo"}">${(0, import_index_68ac15fd.v)(import_blocks_c75ee098.B, "Blocks").$$render($$result, { blocks: page.pressContact.content }, {}, {})}</div>` : ``}</div>

		
		${page.internalLinks && page.internalLinks.length > 0 || page.externalLinks && page.externalLinks.length > 0 ? `${(0, import_index_68ac15fd.v)(import_see_also_998afbc8.S, "SeeAlso").$$render($$result, {
    externalLinks: page.externalLinks,
    internalLinks: page.internalLinks
  }, {}, {})}` : ``}</div>

	
	${(0, import_index_68ac15fd.v)(import_bottom_bar_9ab2e699.B, "BottomBar").$$render($$result, {}, {}, {})}
</div>`;
});
