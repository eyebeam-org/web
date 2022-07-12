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
  default: () => About
});
module.exports = __toCommonJS(stdin_exports);
var import_index_277e1cdb = require("../../../chunks/index-277e1cdb.js");
var import_sanity_1a8ac269 = require("../../../chunks/sanity-1a8ac269.js");
var import_has = __toESM(require("lodash/has.js"));
var import_keyBy = __toESM(require("lodash/keyBy.js"));
var import_truncate = __toESM(require("lodash/truncate.js"));
var import_blocks_4014f298 = require("../../../chunks/blocks-4014f298.js");
var import_bottom_bar_168e682a = require("../../../chunks/bottom-bar-168e682a.js");
var import_press_and_news_item_cbbd7c00 = require("../../../chunks/press-and-news-item-cbbd7c00.js");
var import_metadata_c74c46dc = require("../../../chunks/metadata-c74c46dc.js");
var import_arrow_link_ef752029 = require("../../../chunks/arrow-link-ef752029.js");
var import_stores_f9761b8b = require("../../../chunks/stores-f9761b8b.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_get_video_id = require("get-video-id");
var import_slugify = require("slugify");
var import_get = require("lodash/get.js");
var import_date_fns = require("date-fns");
var import_core = require("@popperjs/core");
var import_global_eadaa9b6 = require("../../../chunks/global-eadaa9b6.js");
var import_stores_b7bb0fad = require("../../../chunks/stores-b7bb0fad.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: 'h2.svelte-ntbddt.svelte-ntbddt{font-family:"Eyebeam sans", Arial, sans-serif;font-size:32px;text-transform:uppercase;padding-right:40px}.tile.svelte-ntbddt.svelte-ntbddt{padding:15px;overflow:hidden;width:50%;display:block;float:left}@media(max-width: 800px), screen and (orientation: portrait){.tile.svelte-ntbddt.svelte-ntbddt{width:100%;border:1px solid var(--foreground-color);border-top:none}.tile.svelte-ntbddt.svelte-ntbddt:first-child{border-top:1px solid var(--foreground-color)}}.description.svelte-ntbddt.svelte-ntbddt{font-size:16px}.main-content.svelte-ntbddt.svelte-ntbddt{float:left;width:100%}@media(max-width: 800px), screen and (orientation: portrait){.main-content.svelte-ntbddt.svelte-ntbddt{width:100%}}.main-content.svelte-ntbddt .inner.svelte-ntbddt{width:100%;border:1px solid var(--foreground-color);min-height:100vh;display:inline-block}@media(max-width: 800px), screen and (orientation: portrait){.main-content.svelte-ntbddt .inner.svelte-ntbddt{border:unset}}.introduction.svelte-ntbddt.svelte-ntbddt{border-bottom:1px solid var(--foreground-color);min-height:440px;max-height:440px;overflow:scroll;padding-right:40px}@media(max-width: 800px), screen and (orientation: portrait){}.header-photo.svelte-ntbddt.svelte-ntbddt{overflow:hidden;padding:0;max-height:440px;border-bottom:1px solid var(--foreground-color);border-right:1px solid var(--foreground-color);height:440px}.header-photo.svelte-ntbddt img.svelte-ntbddt{height:100%;width:100%;object-fit:cover}.nav-tile.svelte-ntbddt.svelte-ntbddt{width:50%;min-height:440px;border-bottom:1px solid var(--foreground-color);border-right:1px solid var(--foreground-color);display:flex;flex-flow:column nowrap;float:left;text-decoration:none;cursor:pointer;padding-right:40px}.nav-tile.svelte-ntbddt a.svelte-ntbddt{text-decoration:none}.nav-tile.svelte-ntbddt.svelte-ntbddt:hover{background:#e0ded7;color:var(--hover-text-color)}.nav-tile.svelte-ntbddt.svelte-ntbddt:active{background:var(--foreground-color);color:#f5f4ee}.nav-tile.our-history.svelte-ntbddt.svelte-ntbddt,.nav-tile.artists.svelte-ntbddt.svelte-ntbddt,.nav-tile.the-fold.svelte-ntbddt.svelte-ntbddt,.nav-tile.media-kit.svelte-ntbddt.svelte-ntbddt{border-right:none}@media(max-width: 800px), screen and (orientation: portrait){.nav-tile.our-history.svelte-ntbddt.svelte-ntbddt,.nav-tile.artists.svelte-ntbddt.svelte-ntbddt,.nav-tile.the-fold.svelte-ntbddt.svelte-ntbddt,.nav-tile.media-kit.svelte-ntbddt.svelte-ntbddt{border-right:1px solid var(--foreground-color)}}@media(max-width: 800px), screen and (orientation: portrait){.nav-tile.svelte-ntbddt.svelte-ntbddt{width:100%;border-left:1px solid var(--foreground-color);border-right:1px solid var(--foreground-color);border-bottom:1px solid var(--foreground-color);min-height:33vh}.nav-tile.svelte-ntbddt.svelte-ntbddt:nth-child(odd){border-right:1px solid var(--foreground-color)}.nav-tile.svelte-ntbddt.svelte-ntbddt:last-child{border-bottom:1px solid var(--foreground-color)}.nav-tile.svelte-ntbddt.svelte-ntbddt:first-of-type{border-top:1px solid var(--foreground-color)}}.full-tile.svelte-ntbddt.svelte-ntbddt{width:100%;min-height:440px;border-bottom:1px solid var(--foreground-color);display:block;float:left;text-decoration:none}@media(max-width: 800px), screen and (orientation: portrait){.full-tile.svelte-ntbddt.svelte-ntbddt{min-height:unset;border-left:1px solid var(--foreground-color);border-right:1px solid var(--foreground-color)}}.full-tile.contact.svelte-ntbddt.svelte-ntbddt{border-bottom:none;min-height:unset;height:220px;position:relative}@media(max-width: 800px), screen and (orientation: portrait){.full-tile.contact.svelte-ntbddt.svelte-ntbddt{border-bottom:1px solid var(--foreground-color)}}.full-tile.contact.svelte-ntbddt .bottom-container.svelte-ntbddt{position:absolute;bottom:15px;left:15px;width:100%}.full-tile.contact.svelte-ntbddt .bottom-container .column.svelte-ntbddt{width:25%;float:left}@media(max-width: 800px), screen and (orientation: portrait){.full-tile.contact.svelte-ntbddt .bottom-container .column.svelte-ntbddt{width:calc(100% - 40px)}}.press-and-news.svelte-ntbddt.svelte-ntbddt{position:relative;padding-left:0;padding-right:0}.press-and-news.svelte-ntbddt h2.svelte-ntbddt{margin-right:15px;margin-left:15px}.press-and-news.svelte-ntbddt h2 a.svelte-ntbddt{text-decoration:none}.press-and-news.svelte-ntbddt .press-and-news-listing.svelte-ntbddt{width:100%;display:flex;margin-top:20px;padding-bottom:20px;overflow:hidden;position:relative}@media(max-width: 800px), screen and (orientation: portrait){.press-and-news.svelte-ntbddt .press-and-news-listing.svelte-ntbddt{flex-wrap:wrap;margin-top:0;padding-bottom:40px}}.press-and-news.svelte-ntbddt .see-all.svelte-ntbddt{position:absolute;bottom:0;left:0;height:50px;width:100%;border-top:1px solid var(--foreground-color);text-align:center;line-height:50px;text-decoration:none}.press-and-news.svelte-ntbddt .see-all.svelte-ntbddt:hover{background:#e0ded7;color:var(--hover-text-color)}',
  map: null
};
const About = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  const router = false;
  let { about } = $$props;
  let { pressAndNews } = $$props;
  console.log("about", about);
  console.log("pressAndNews", pressAndNews);
  const aboutMap = (0, import_keyBy.default)(about, "_id");
  const ORDER = [
    "our-mission-and-values",
    "our-history",
    "staff-and-board",
    "artists",
    "get-involved",
    "press-and-news",
    "our-operating-documents",
    "media-kit",
    "contact"
  ];
  const toc = [
    {
      link: "/about/our-mission-and-values",
      title: "Our Mission and Values"
    },
    {
      link: "/about/our-history",
      title: "Our History"
    },
    {
      link: "/about/staff-and-board",
      title: "Staff & Board"
    },
    { link: "/people", title: "Artists" },
    {
      link: "/about/support-eyebeam",
      title: "Support"
    },
    {
      link: "/about/get-involved",
      title: "Get involved"
    },
    {
      link: "/press-and-news",
      title: "Press & News"
    },
    {
      link: "/about/our-operating-documents",
      title: "Our Operating Documents"
    },
    {
      link: "/about/media-kit",
      title: "Media Kit"
    },
    { link: "/about/contact", title: "Contact" }
  ];
  if ($$props.router === void 0 && $$bindings.router && router !== void 0)
    $$bindings.router(router);
  if ($$props.about === void 0 && $$bindings.about && about !== void 0)
    $$bindings.about(about);
  if ($$props.pressAndNews === void 0 && $$bindings.pressAndNews && pressAndNews !== void 0)
    $$bindings.pressAndNews(pressAndNews);
  $$result.css.add(css);
  {
    import_stores_f9761b8b.a.set(aboutMap["what-is-eyebeam"].title);
  }
  {
    import_stores_f9761b8b.s.set(toc);
  }
  return `
${(0, import_index_277e1cdb.v)(import_metadata_c74c46dc.M, "Metadata").$$render($$result, { page: aboutMap["what-is-eyebeam"] }, {}, {})}


<div class="${"main-content svelte-ntbddt"}" tabindex="${"0"}"><div class="${"inner svelte-ntbddt"}"><div class="${"tile header-photo svelte-ntbddt"}"><img src="${"eyebeambox.gif"}" alt="${"A gif of a black box with the word 'Eyebeam' on each face, slowly rotating"}" class="${"svelte-ntbddt"}"></div>
		<div class="${"tile introduction svelte-ntbddt"}">
			<h1>${(0, import_index_277e1cdb.e)(aboutMap["what-is-eyebeam"].title)}</h1>
			
			${(0, import_has.default)(aboutMap["what-is-eyebeam"], "introduction.content") ? `<div class="${"description svelte-ntbddt"}">${(0, import_index_277e1cdb.v)(import_blocks_4014f298.B, "Blocks").$$render($$result, {
    blocks: aboutMap["what-is-eyebeam"].introduction.content
  }, {}, {})}</div>` : ``}</div>

		${(0, import_index_277e1cdb.d)(ORDER, (section) => {
    return `${section == "press-and-news" ? `
				<div class="${"tile full-tile press-and-news svelte-ntbddt"}"><h2 class="${"svelte-ntbddt"}"><a href="${"/press-and-news"}" sveltekit:prefetch class="${"svelte-ntbddt"}">${(0, import_index_277e1cdb.e)(aboutMap["press-and-news"].title)}</a></h2>
					<div class="${"press-and-news-listing svelte-ntbddt"}">${(0, import_index_277e1cdb.d)(pressAndNews, (post) => {
      return `${(0, import_index_277e1cdb.v)(import_press_and_news_item_cbbd7c00.P, "PressAndNewsItem").$$render($$result, { post }, {}, {})}`;
    })}</div>
					<a href="${"/press-and-news"}" class="${"see-all svelte-ntbddt"}" sveltekit:prefetch>See all Press &amp; News</a>
				</div>` : `${section == "contact" ? `
				<div class="${"tile full-tile contact svelte-ntbddt"}"><h2 class="${"svelte-ntbddt"}">Contact</h2>
					<div class="${"bottom-container svelte-ntbddt"}"><div class="${"column svelte-ntbddt"}">${(0, import_index_277e1cdb.e)(aboutMap["contact"].address)}</div>
						<div class="${"column svelte-ntbddt"}">${(0, import_index_277e1cdb.e)(aboutMap["contact"].phoneNumber)}<br>
							<a${(0, import_index_277e1cdb.a)("href", "mailto:" + aboutMap["contact"].email, 0)}>${(0, import_index_277e1cdb.e)(aboutMap["contact"].email)}</a>
						</div></div>
				</div>` : `
				<div class="${"tile nav-tile " + (0, import_index_277e1cdb.e)(section) + " svelte-ntbddt"}" sveltekit:prefetch><h2 class="${"svelte-ntbddt"}"><a${(0, import_index_277e1cdb.a)("href", section == "artists" ? "/people" : "/about/" + aboutMap[section]._id, 0)} class="${"svelte-ntbddt"}">${(0, import_index_277e1cdb.e)(aboutMap[section].title)}</a></h2>
					${(0, import_has.default)(aboutMap[section], "introduction.content") ? `<div class="${"description svelte-ntbddt"}"><!-- HTML_TAG_START -->${(0, import_truncate.default)((0, import_sanity_1a8ac269.r)(aboutMap[section].introduction.content), { length: 600 })}<!-- HTML_TAG_END --></div>
${(0, import_index_277e1cdb.v)(import_arrow_link_ef752029.A, "ArrowLink").$$render($$result, { link: "/about/" + aboutMap[section]._id }, {}, {})}` : ``}
				</div>`}`}`;
  })}</div>

	
	${(0, import_index_277e1cdb.v)(import_bottom_bar_168e682a.B, "BottomBar").$$render($$result, {}, {}, {})}
</div>`;
});
