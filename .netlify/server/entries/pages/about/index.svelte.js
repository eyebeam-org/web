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
var import_index_68ac15fd = require("../../../chunks/index-68ac15fd.js");
var import_sanity_59332496 = require("../../../chunks/sanity-59332496.js");
var import_has = __toESM(require("lodash/has.js"));
var import_keyBy = __toESM(require("lodash/keyBy.js"));
var import_truncate = __toESM(require("lodash/truncate.js"));
var import_blocks_c75ee098 = require("../../../chunks/blocks-c75ee098.js");
var import_bottom_bar_9ab2e699 = require("../../../chunks/bottom-bar-9ab2e699.js");
var import_press_and_news_item_7ee66134 = require("../../../chunks/press-and-news-item-7ee66134.js");
var import_metadata_ef16be06 = require("../../../chunks/metadata-ef16be06.js");
var import_stores_25b712dd = require("../../../chunks/stores-25b712dd.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_get_video_id = require("get-video-id");
var import_slugify = require("slugify");
var import_get = require("lodash/get.js");
var import_date_fns = require("date-fns");
var import_person_link_ca6b4a11 = require("../../../chunks/person-link-ca6b4a11.js");
var import_core = require("@popperjs/core");
var import_global_61b718ff = require("../../../chunks/global-61b718ff.js");
var import_stores_2672c807 = require("../../../chunks/stores-2672c807.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: 'h2.svelte-tvkrls.svelte-tvkrls{font-family:"Eyebeam sans", Arial, sans-serif;font-size:32px;text-transform:uppercase;padding-right:40px}.tile.svelte-tvkrls.svelte-tvkrls{padding:15px;overflow:hidden;width:50%;display:block;float:left}@media(max-width: 800px){.tile.svelte-tvkrls.svelte-tvkrls{width:100%;border:1px solid var(--foreground-color);border-top:none}.tile.svelte-tvkrls.svelte-tvkrls:first-child{border-top:1px solid var(--foreground-color)}}.description.svelte-tvkrls.svelte-tvkrls{font-size:16px}.main-content.svelte-tvkrls.svelte-tvkrls{float:left;width:100%}@media(max-width: 800px){.main-content.svelte-tvkrls.svelte-tvkrls{width:100%}}.main-content.svelte-tvkrls .inner.svelte-tvkrls{width:100%;border:1px solid var(--foreground-color);min-height:100vh;display:inline-block}@media(max-width: 800px){.main-content.svelte-tvkrls .inner.svelte-tvkrls{border:unset}}.introduction.svelte-tvkrls.svelte-tvkrls{border-bottom:1px solid var(--foreground-color);min-height:440px;max-height:440px;overflow:scroll;padding-right:40px}@media(max-width: 800px){.introduction.svelte-tvkrls.svelte-tvkrls{border-bottom:unset;min-height:unset;padding:unset}}@media(max-width: 800px){}.header-photo.svelte-tvkrls.svelte-tvkrls{overflow:hidden;padding:0;max-height:440px;border-bottom:1px solid var(--foreground-color);border-right:1px solid var(--foreground-color);height:440px}.header-photo.svelte-tvkrls img.svelte-tvkrls{height:100%;width:100%;object-fit:cover}.nav-tile.svelte-tvkrls.svelte-tvkrls{width:50%;min-height:440px;border-bottom:1px solid var(--foreground-color);border-right:1px solid var(--foreground-color);display:block;float:left;text-decoration:none;cursor:pointer;padding-right:40px}.nav-tile.svelte-tvkrls a.svelte-tvkrls{text-decoration:none}.nav-tile.svelte-tvkrls.svelte-tvkrls:hover{background:#e0ded7;color:var(--hover-text-color)}.nav-tile.svelte-tvkrls.svelte-tvkrls:active{background:var(--foreground-color);color:#f5f4ee}.nav-tile.our-history.svelte-tvkrls.svelte-tvkrls,.nav-tile.artists.svelte-tvkrls.svelte-tvkrls,.nav-tile.the-fold.svelte-tvkrls.svelte-tvkrls,.nav-tile.media-kit.svelte-tvkrls.svelte-tvkrls{border-right:none}@media(max-width: 800px){.nav-tile.our-history.svelte-tvkrls.svelte-tvkrls,.nav-tile.artists.svelte-tvkrls.svelte-tvkrls,.nav-tile.the-fold.svelte-tvkrls.svelte-tvkrls,.nav-tile.media-kit.svelte-tvkrls.svelte-tvkrls{border-right:1px solid var(--foreground-color)}}@media(max-width: 800px){.nav-tile.svelte-tvkrls.svelte-tvkrls{width:100%;border-left:1px solid var(--foreground-color);border-right:1px solid var(--foreground-color);border-bottom:1px solid var(--foreground-color);min-height:33vh}.nav-tile.svelte-tvkrls.svelte-tvkrls:nth-child(odd){border-right:1px solid var(--foreground-color)}.nav-tile.svelte-tvkrls.svelte-tvkrls:last-child{border-bottom:1px solid var(--foreground-color)}.nav-tile.svelte-tvkrls.svelte-tvkrls:first-of-type{border-top:1px solid var(--foreground-color)}}.full-tile.svelte-tvkrls.svelte-tvkrls{width:100%;min-height:440px;border-bottom:1px solid var(--foreground-color);display:block;float:left;text-decoration:none}@media(max-width: 800px){.full-tile.svelte-tvkrls.svelte-tvkrls{min-height:unset;border-left:1px solid var(--foreground-color);border-right:1px solid var(--foreground-color)}}.full-tile.contact.svelte-tvkrls.svelte-tvkrls{border-bottom:none;min-height:unset;height:220px;position:relative}@media(max-width: 800px){.full-tile.contact.svelte-tvkrls.svelte-tvkrls{border-bottom:1px solid var(--foreground-color)}}.full-tile.contact.svelte-tvkrls .bottom-container.svelte-tvkrls{position:absolute;bottom:15px;left:15px;width:100%}.full-tile.contact.svelte-tvkrls .bottom-container .column.svelte-tvkrls{width:25%;float:left}@media(max-width: 800px){.full-tile.contact.svelte-tvkrls .bottom-container .column.svelte-tvkrls{width:calc(100% - 40px)}}.press-and-news.svelte-tvkrls.svelte-tvkrls{position:relative;padding-left:0;padding-right:0}.press-and-news.svelte-tvkrls h2.svelte-tvkrls{margin-right:15px;margin-left:15px}.press-and-news.svelte-tvkrls h2 a.svelte-tvkrls{text-decoration:none}.press-and-news.svelte-tvkrls .press-and-news-listing.svelte-tvkrls{width:100%;display:flex;margin-top:20px;padding-bottom:20px;overflow:hidden;position:relative}@media(max-width: 800px){.press-and-news.svelte-tvkrls .press-and-news-listing.svelte-tvkrls{flex-wrap:wrap;margin-top:0;padding-bottom:40px}}.press-and-news.svelte-tvkrls .see-all.svelte-tvkrls{position:absolute;bottom:0;left:0;height:50px;width:100%;border-top:1px solid var(--foreground-color);text-align:center;line-height:50px;text-decoration:none}.press-and-news.svelte-tvkrls .see-all.svelte-tvkrls:hover{background:#e0ded7;color:var(--hover-text-color)}',
  map: null
};
const About = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
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
  if ($$props.about === void 0 && $$bindings.about && about !== void 0)
    $$bindings.about(about);
  if ($$props.pressAndNews === void 0 && $$bindings.pressAndNews && pressAndNews !== void 0)
    $$bindings.pressAndNews(pressAndNews);
  $$result.css.add(css);
  {
    import_stores_25b712dd.s.set(aboutMap["what-is-eyebeam"].title);
  }
  {
    import_stores_25b712dd.b.set(toc);
  }
  return `
${(0, import_index_68ac15fd.v)(import_metadata_ef16be06.M, "Metadata").$$render($$result, { page: aboutMap["what-is-eyebeam"] }, {}, {})}


<div class="${"main-content svelte-tvkrls"}" tabindex="${"0"}"><div class="${"inner svelte-tvkrls"}"><div class="${"tile header-photo svelte-tvkrls"}"><img src="${"eyebeambox.gif"}" alt="${"A gif of a black box with the word 'Eyebeam' on each face, slowly rotating"}" class="${"svelte-tvkrls"}"></div>
		<div class="${"tile introduction svelte-tvkrls"}">
			<h1>${(0, import_index_68ac15fd.e)(aboutMap["what-is-eyebeam"].title)}</h1>
			
			${(0, import_has.default)(aboutMap["what-is-eyebeam"], "introduction.content") ? `<div class="${"description svelte-tvkrls"}">${(0, import_index_68ac15fd.v)(import_blocks_c75ee098.B, "Blocks").$$render($$result, {
    blocks: aboutMap["what-is-eyebeam"].introduction.content
  }, {}, {})}</div>` : ``}</div>

		${(0, import_index_68ac15fd.h)(ORDER, (section) => {
    return `${section == "press-and-news" ? `
				<div class="${"tile full-tile press-and-news svelte-tvkrls"}"><h2 class="${"svelte-tvkrls"}"><a href="${"/press-and-news"}" sveltekit:prefetch class="${"svelte-tvkrls"}">${(0, import_index_68ac15fd.e)(aboutMap["press-and-news"].title)}</a></h2>
					<div class="${"press-and-news-listing svelte-tvkrls"}">${(0, import_index_68ac15fd.h)(pressAndNews, (post) => {
      return `${(0, import_index_68ac15fd.v)(import_press_and_news_item_7ee66134.P, "PressAndNewsItem").$$render($$result, { post }, {}, {})}`;
    })}</div>
					<a href="${"/press-and-news"}" class="${"see-all svelte-tvkrls"}" sveltekit:prefetch>See all Press &amp; News</a>
				</div>` : `${section == "contact" ? `
				<div class="${"tile full-tile contact svelte-tvkrls"}"><h2 class="${"svelte-tvkrls"}">Contact</h2>
					<div class="${"bottom-container svelte-tvkrls"}"><div class="${"column svelte-tvkrls"}">${(0, import_index_68ac15fd.e)(aboutMap["contact"].address)}</div>
						<div class="${"column svelte-tvkrls"}">${(0, import_index_68ac15fd.e)(aboutMap["contact"].phoneNumber)}<br>
							<a${(0, import_index_68ac15fd.a)("href", "mailto:" + aboutMap["contact"].email, 0)}>${(0, import_index_68ac15fd.e)(aboutMap["contact"].email)}</a>
						</div></div>
				</div>` : `
				<div class="${"tile nav-tile " + (0, import_index_68ac15fd.e)(section) + " svelte-tvkrls"}" sveltekit:prefetch><h2 class="${"svelte-tvkrls"}"><a${(0, import_index_68ac15fd.a)("href", section == "artists" ? "/artists" : "/about/" + aboutMap[section]._id, 0)} class="${"svelte-tvkrls"}">${(0, import_index_68ac15fd.e)(aboutMap[section].title)}</a></h2>
					${(0, import_has.default)(aboutMap[section], "introduction.content") ? `<div class="${"description svelte-tvkrls"}"><!-- HTML_TAG_START -->${(0, import_truncate.default)((0, import_sanity_59332496.r)(aboutMap[section].introduction.content), { length: 600 })}<!-- HTML_TAG_END -->
						</div>` : ``}
				</div>`}`}`;
  })}</div>

	
	${(0, import_index_68ac15fd.v)(import_bottom_bar_9ab2e699.B, "BottomBar").$$render($$result, {}, {}, {})}
</div>`;
});
