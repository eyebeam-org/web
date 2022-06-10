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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_68ac15fd = require("../../chunks/index-68ac15fd.js");
var import_truncate = __toESM(require("lodash/truncate.js"));
var import_get = __toESM(require("lodash/get.js"));
var import_global_61b718ff = require("../../chunks/global-61b718ff.js");
var import_sanity_59332496 = require("../../chunks/sanity-59332496.js");
var import_menu_svelte_svelte_type_style_lang_0e67a6a2 = require("../../chunks/menu.svelte_svelte_type_style_lang-0e67a6a2.js");
var import_sample = require("lodash/sample.js");
var import_core = require("@popperjs/core");
var import_slugify = require("slugify");
var import_date_fns = require("date-fns");
var import_person_link_list_0e613235 = require("../../chunks/person-link-list-0e613235.js");
var import_has = __toESM(require("lodash/has.js"));
var import_blocks_c75ee098 = require("../../chunks/blocks-c75ee098.js");
var import_metadata_ef16be06 = require("../../chunks/metadata-ef16be06.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_get_video_id = require("get-video-id");
var import_person_link_ca6b4a11 = require("../../chunks/person-link-ca6b4a11.js");
var import_stores_25b712dd = require("../../chunks/stores-25b712dd.js");
var import_stores_2672c807 = require("../../chunks/stores-2672c807.js");
const css$6 = {
  code: "svg.svelte-1t6ewqz path.svelte-1t6ewqz{stroke:var(--foreground-color)}svg.white.svelte-1t6ewqz path.svelte-1t6ewqz{stroke:#f5f4ee}",
  map: null
};
const Large_search = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  let { white = false } = $$props;
  if ($$props.white === void 0 && $$bindings.white && white !== void 0)
    $$bindings.white(white);
  $$result.css.add(css$6);
  return `<svg class="${["icon svelte-1t6ewqz", white ? "white" : ""].join(" ").trim()}" width="${"25"}" height="${"25"}" viewBox="${"0 0 12 13"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M11.2998 11.6992L7.2998 7.69922"}" stroke-width="${"2"}" class="${"svelte-1t6ewqz"}"></path><path d="${"M5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9Z"}" stroke-width="${"2"}" class="${"svelte-1t6ewqz"}"></path></svg>`;
});
const css$5 = {
  code: '.menu-content.svelte-hfkits.svelte-hfkits{width:100%;height:100%;background-color:#f5f4ee;text-align:center;font-family:"Eyebeam sans", Arial, sans-serif}.menu-content.svelte-hfkits .section.svelte-hfkits{margin:0 auto;display:flex;width:100%;height:100%;flex-flow:column nowrap}.menu-content.svelte-hfkits .section .menu-button.svelte-hfkits{font-size:32px;text-transform:uppercase;flex-grow:1;display:flex;margin:auto;align-items:center;justify-content:flex-start;text-decoration:none;text-align:center;padding:15px;border-bottom:1px solid var(--special-text-color);height:calc(100% / 6);cursor:pointer;width:100%}@media(max-width: 1400px){.menu-content.svelte-hfkits .section .menu-button.svelte-hfkits{font-size:18px}}.menu-content.svelte-hfkits .section .menu-button.svelte-hfkits:hover{background:var(--special-text-color);color:#f5f4ee}.menu-content.svelte-hfkits .section .menu-button .icon.svelte-hfkits{margin:5px 0 0 15px}@media(max-width: 1400px){.menu-content.svelte-hfkits .section .menu-button .icon.svelte-hfkits{display:none}}.menu-content.svelte-hfkits .section .menu-button.svelte-hfkits:last-child{border-bottom:none}',
  map: null
};
const Menu = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<nav class="${"menu-content svelte-hfkits"}" aria-label="${"primary"}" role="${"navigation"}"><div class="${"section svelte-hfkits"}"><a class="${"menu-button svelte-hfkits"}" href="${"/about"}">About</a>
<a class="${"menu-button svelte-hfkits"}" href="${"/people"}">Artists</a>
<a class="${"menu-button svelte-hfkits"}" href="${"/everything"}">Archive</a>
<a class="${"menu-button svelte-hfkits"}" href="${"/programs"}">Programs</a>
<a class="${"menu-button svelte-hfkits"}" target="${"_blank"}" href="${"https://fold.eyebeam.org/enter"}">Membership</a>
<a class="${"menu-button svelte-hfkits"}" href="${"/support"}">Support</a>
<a class="${"menu-button svelte-hfkits"}" href="${"#search"}"><span class="${"search-text"}">Search</span> <span class="${"icon svelte-hfkits"}">${(0, import_index_68ac15fd.v)(Large_search, "SearchIcon").$$render($$result, {}, {}, {})}</span></a></div></nav>

${``}`;
});
var triangleRight_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "svg.svelte-1g6edcb path.svelte-1g6edcb{fill:var(--foreground-color)}",
  map: null
};
const Triangle_right = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<svg width="${"9"}" height="${"11"}" viewBox="${"0 0 9 11"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-1g6edcb"}"><path d="${"M9 5.5L0.750001 10.2631L0.750001 0.73686L9 5.5Z"}" class="${"svelte-1g6edcb"}"></path></svg>`;
});
var arrowRight_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "svg.svelte-klcelx.svelte-klcelx{transform:rotate(180deg)}svg.svelte-klcelx path.svelte-klcelx{fill:var(--foreground-color)}",
  map: null
};
const Arrow_right = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<svg width="${"8"}" height="${"10"}" viewBox="${"0 0 8 10"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-klcelx"}"><path d="${"M-0.000488072 5.06677L7.17615 9.45473L7.17615 0.678818L-0.000488072 5.06677Z"}" class="${"svelte-klcelx"}"></path></svg>`;
});
var openEyebeam_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '.open-eyebeam.svelte-1asu1bv.svelte-1asu1bv{width:100%;height:100%;text-decoration:none;display:flex;padding:0;z-index:100}.open-eyebeam.svelte-1asu1bv .frame-container.svelte-1asu1bv{width:calc((100% / 3) * 2);overflow:hidden;border-right:1px solid var(--foreground-color)}.open-eyebeam.svelte-1asu1bv iframe.svelte-1asu1bv{border:none;width:150%;height:150%;transform:translate(-15%, -25%)}.open-eyebeam.svelte-1asu1bv .about.svelte-1asu1bv{padding:15px 5px;width:calc(100% / 3);display:flex;flex-flow:column nowrap;align-items:center;justify-content:space-between;height:100%;background-color:#f5f4ee;font-family:"Work Sans", Arial, sans-serif;font-size:16px;padding:15px}.open-eyebeam.svelte-1asu1bv .about .open-eyebeam-link.svelte-1asu1bv{font-family:"Eyebeam sans", Arial, sans-serif;font-size:32px}@media(max-width: 1400px){.open-eyebeam.svelte-1asu1bv .about .open-eyebeam-link.svelte-1asu1bv{font-size:18px}}.open-eyebeam.svelte-1asu1bv .about .open-eyebeam-link a.svelte-1asu1bv{text-decoration:none}.open-eyebeam.svelte-1asu1bv .link.svelte-1asu1bv{position:absolute;bottom:20px;left:15px;font-size:11px;color:var(--special-text-color)}.open-eyebeam.svelte-1asu1bv .link .arrow.svelte-1asu1bv{margin-right:5px;position:relative;top:2px}@media(max-width: 800px){.open-eyebeam.svelte-1asu1bv.svelte-1asu1bv{flex-wrap:wrap}.open-eyebeam.svelte-1asu1bv .link.svelte-1asu1bv{display:none}.open-eyebeam.svelte-1asu1bv .frame-container.svelte-1asu1bv{width:100%}.open-eyebeam.svelte-1asu1bv .about.svelte-1asu1bv{width:100%}}',
  map: null
};
const Open_eyebeam = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"open-eyebeam svelte-1asu1bv"}"><div class="${"frame-container svelte-1asu1bv"}"><iframe${(0, import_index_68ac15fd.a)("src", "https://embedded--open-eyebeam.netlify.app", 0)} title="${"Open Eyebeam"}" aria-label="${"A live view of Eyebeam's new digital artist studio, Open Eyebeam. This area changes randomly on each page load, but shows a randomized area in The Field of Open Eyebeam, which will show doors to artists' studios."}" class="${"svelte-1asu1bv"}"></iframe>
<a target="${"_blank"}" href="${"https://open-eyebeam.netlify.app"}" class="${"svelte-1asu1bv"}"><div class="${"link svelte-1asu1bv"}"><span class="${"arrow svelte-1asu1bv"}">${(0, import_index_68ac15fd.v)(Triangle_right, "TriangleRight").$$render($$result, {}, {}, {})}</span> open.eyebeam.org</div></a></div>
<div class="${"about svelte-1asu1bv"}">Come see what our fellows are up to in our new digital studio space.
	<div class="${"open-eyebeam-link svelte-1asu1bv"}"><a target="${"_blank"}" href="${"https://open-eyebeam.netlify.app"}" class="${"svelte-1asu1bv"}">OPEN EYEBEAM ${(0, import_index_68ac15fd.v)(Arrow_right, "ArrowRight").$$render($$result, {}, {}, {})}</a></div></div>
</div>`;
});
var sticker_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".big-sticker.svelte-1art2qg.svelte-1art2qg{width:100%;height:50%;text-decoration:none;display:block;border-bottom:1px solid var(--foreground-color)}.big-sticker.svelte-1art2qg img.svelte-1art2qg{width:100%;height:100%;object-fit:cover}.big-sticker.svelte-1art2qg .text.svelte-1art2qg{padding:15px;font-size:54px;color:var(--foreground-color);line-height:1.1em}.big-sticker.inverted.svelte-1art2qg.svelte-1art2qg{background:var(--foreground-color)}.big-sticker.inverted.svelte-1art2qg .text.svelte-1art2qg{color:var(--background-color)}.big-sticker.small.svelte-1art2qg .text.svelte-1art2qg{font-size:32px}",
  map: null
};
const Sticker = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  let { sticker = {} } = $$props;
  let { small = false } = $$props;
  console.log("sticker", sticker);
  let url = "";
  if (sticker.externalLink) {
    url = sticker.externalLink;
  } else if ((0, import_has.default)(sticker, "internalLink.slug.current")) {
    url = "ccccc";
  }
  if ($$props.sticker === void 0 && $$bindings.sticker && sticker !== void 0)
    $$bindings.sticker(sticker);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0)
    $$bindings.small(small);
  $$result.css.add(css$1);
  return `<a${(0, import_index_68ac15fd.a)("href", url, 0)} class="${[
    "tile big-sticker svelte-1art2qg",
    (small ? "small" : "") + " " + (sticker.inverted ? "inverted" : "")
  ].join(" ").trim()}">${(0, import_has.default)(sticker, "image.asset") ? `<img alt="${"Eyebeam"}"${(0, import_index_68ac15fd.a)("src", (0, import_sanity_59332496.u)(sticker.image).quality(90).width(800).url(), 0)} class="${"svelte-1art2qg"}">` : `<div class="${"text svelte-1art2qg"}">${(0, import_has.default)(sticker, "text.content") ? `${(0, import_index_68ac15fd.v)(import_blocks_c75ee098.B, "Blocks").$$render($$result, { blocks: sticker.text.content }, {}, {})}` : ``}</div>`}
</a>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: 'section.svelte-tttif7.svelte-tttif7{all:unset}.accessibility-title.svelte-tttif7.svelte-tttif7{position:absolute;left:100000000000000000000000000000px;width:1px;width:0px;overflow:hidden}h2.svelte-tttif7.svelte-tttif7,h3.svelte-tttif7.svelte-tttif7{all:unset}ul.svelte-tttif7.svelte-tttif7,li.svelte-tttif7.svelte-tttif7{all:unset;padding:0;display:inline;max-height:100%}ul.svelte-tttif7.svelte-tttif7:before,li.svelte-tttif7.svelte-tttif7:before{padding:0;all:unset;list-style:none;content:none}.homepage-menu.svelte-tttif7.svelte-tttif7{border:1px solid var(--foreground-color);width:100%;height:calc(100vh - 130px);margin-bottom:50px;margin-left:auto;margin-right:auto;min-height:520px;max-width:100%}@media(max-width: 800px){.homepage-menu.svelte-tttif7.svelte-tttif7{height:auto;display:inline-block;margin-bottom:unset;min-height:unset;min-width:unset;max-width:100%;max-height:unset}}@media(max-width: 800px){}.column.svelte-tttif7.svelte-tttif7{float:left;max-width:100%;border-right:1px solid var(--special-text-color);max-width:100%}@media(max-width: 800px){.column.svelte-tttif7.svelte-tttif7{border-right:none}}.column.one.svelte-tttif7.svelte-tttif7{width:calc(100% / 6);height:100%}@media(max-width: 1400px){.column.one.svelte-tttif7.svelte-tttif7{width:calc(100% / 4)}}@media(max-width: 800px){.column.one.svelte-tttif7.svelte-tttif7{display:none}}.column.two.svelte-tttif7.svelte-tttif7{width:calc((100%/12)*6);height:100%}@media(max-width: 1400px){.column.two.svelte-tttif7.svelte-tttif7{width:calc(100% / 2)}}@media(max-width: 800px){.column.two.svelte-tttif7.svelte-tttif7{width:100%;height:auto}}.column.three.svelte-tttif7.svelte-tttif7{width:calc((100%/12)*4);height:100%;border-right:none}@media(max-width: 1400px){.column.three.svelte-tttif7.svelte-tttif7{width:calc(100% / 4)}}@media(max-width: 800px){.column.three.svelte-tttif7.svelte-tttif7{width:100%;height:calc(100% / 3)}}.socials.svelte-tttif7.svelte-tttif7{height:calc(100% / 6);width:100%}@media(max-width: 800px){}@media(max-width: 800px){}@media(max-width: 800px){}@media(max-width: 800px){}.social.svelte-tttif7.svelte-tttif7{font-family:"Eyebeam sans", Arial, sans-serif;justify-content:center;text-align:center;flex-wrap:nowrap;flex-direction:column;width:25%;height:100%;padding:10px !important;float:left;border-top:1px solid var(--foreground-color);border-right:1px solid var(--foreground-color)}@media(max-width: 800px){.social.svelte-tttif7.svelte-tttif7{width:50%;height:85px}}@media(max-width: 1400px){.social.svelte-tttif7.svelte-tttif7{font-size:0px}}.social.youtube.svelte-tttif7.svelte-tttif7{border-right:none}@media(max-width: 800px){.social.instagram.svelte-tttif7.svelte-tttif7{border-right:none}}.social.svelte-tttif7 .icon.svelte-tttif7{width:100%;text-align:center;margin:5px auto}@media(max-width: 800px){}@media(max-width: 800px){}.events.svelte-tttif7.svelte-tttif7{align-items:flex-start;align-content:flex-start;justify-content:flex-start;flex-flow:column wrap;width:100%;float:left}.events.has-sticker.svelte-tttif7.svelte-tttif7{height:calc(((100%/6)*2) - (100%/12));flex-flow:row wrap}.events.has-sticker.svelte-tttif7 .event.svelte-tttif7{width:50%;max-width:50%;height:100%;max-height:100%}.events.has-sticker.svelte-tttif7 .event .post-image.svelte-tttif7{display:none}.events.no-sticker.svelte-tttif7.svelte-tttif7{height:calc((100% - (100%/12)) - (100%/6))}.featured-artists.svelte-tttif7.svelte-tttif7{height:calc(50% - (100%/6));flex-flow:row wrap;font-family:"Eyebeam sans", Arial, sans-serif;font-size:27px}.featured-artists.svelte-tttif7 .tile.svelte-tttif7{height:50%}.featured-artists.svelte-tttif7 .featured-artist.svelte-tttif7,.featured-artists.svelte-tttif7 .quote.svelte-tttif7{padding:15px 20px;height:100%;width:100%;display:flex;align-items:center;justify-content:space-between;flex-flow:row nowrap;text-align:center}.featured-artists.svelte-tttif7 .featured-artist-name.svelte-tttif7{padding:5px}.featured-artists.svelte-tttif7 .quote.svelte-tttif7{width:calc((100% / 5) * 2);font-size:16px;font-family:"Work Sans", Arial, sans-serif}@media(max-width: 1400px){.featured-artists.svelte-tttif7 .quote.svelte-tttif7{font-size:11px;padding:5px}}.featured-artists.svelte-tttif7 .featured-artist-image.svelte-tttif7{height:100%;max-width:25%}@media(max-width: 800px){.featured-artists.svelte-tttif7.svelte-tttif7{border-bottom:1px solid var(--foreground-color)}.featured-artists.svelte-tttif7 .featured-artist.svelte-tttif7{width:100%;justify-content:flex-start;font-size:27px}.featured-artists.svelte-tttif7 .featured-artist-image.svelte-tttif7{margin-right:20px}.featured-artists.svelte-tttif7 .quote.svelte-tttif7{display:none}}.tile.svelte-tttif7.svelte-tttif7{display:flex;flex-wrap:wrap;overflow:hidden;user-select:none}@media(max-width: 800px){.tile.svelte-tttif7.svelte-tttif7{font-size:16px}}.open-eyebeam.svelte-tttif7.svelte-tttif7{height:calc(50% + (100%/12));background:#e0ded7;width:100%;border-bottom:1px solid var(--foreground-color);float:left;position:relative;padding:0}@media(max-width: 800px){}@media(max-width: 800px){}a.svelte-tttif7.svelte-tttif7{text-decoration:none}a.svelte-tttif7.svelte-tttif7:hover{background:#e0ded7;color:var(--hover-text-color)}a.svelte-tttif7.svelte-tttif7:active{background:var(--foreground-color);color:var(--background-color)}.sub-tile.svelte-tttif7.svelte-tttif7{width:50%;padding:15px;max-height:50%;overflow:hidden}@media(max-width: 800px){.sub-tile.svelte-tttif7.svelte-tttif7{width:100%;padding-top:5px;padding-bottom:5px;font-size:14px}}@media(max-width: 800px){.sub-tile.svelte-tttif7.svelte-tttif7:last-child{padding-bottom:20px}}.sub-tile.header.svelte-tttif7.svelte-tttif7{display:block;font-family:"Eyebeam sans", Arial, sans-serif;font-size:27px;display:flex;align-content:center;align-items:center;min-height:auto;width:100%;border-bottom:1px solid var(--foreground-color);height:calc(100%/12);padding:15px}@media(max-width: 1400px){.sub-tile.header.svelte-tttif7.svelte-tttif7{font-size:18px}}.sub-tile.event.svelte-tttif7.svelte-tttif7{width:100%;padding:5px 20px;min-height:calc(100% /5);max-height:25%;height:25%;display:flex;align-content:center;align-items:center}.sub-tile.event.svelte-tttif7 .post-image.svelte-tttif7{height:80%;width:30%;flex:none;display:flex;overflow:hidden}.sub-tile.event.svelte-tttif7 .post-image img.svelte-tttif7{max-width:100%;width:100%;align-items:center;object-fit:cover}.sub-tile.event.svelte-tttif7 .post-content.svelte-tttif7{padding:0 15px;display:flex;max-height:100%;flex-flow:column nowrap;overflow:hidden}@media(max-width: 1400px){.sub-tile.event.svelte-tttif7 .post-content.svelte-tttif7{max-height:98%}}@media(max-width: 1400px){.sub-tile.event.svelte-tttif7 .and-more.svelte-tttif7{display:none}}.sub-tile.svelte-tttif7 .time.svelte-tttif7{margin-bottom:5px;font-size:11px}@media(max-width: 1400px){.sub-tile.svelte-tttif7 .time.svelte-tttif7{display:none}}.sub-tile.svelte-tttif7 .title.svelte-tttif7{margin-bottom:5px;font-size:16px;width:100%;overflow:hidden}@media(max-width: 1400px){.sub-tile.svelte-tttif7 .title.svelte-tttif7{font-size:14px}}@media(max-width: 800px){}',
  map: null
};
const Routes = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  let { programs } = $$props;
  let { newPosts } = $$props;
  let { stickers } = $$props;
  let { featuredArtists } = $$props;
  let artists;
  if ($$props.programs === void 0 && $$bindings.programs && programs !== void 0)
    $$bindings.programs(programs);
  if ($$props.newPosts === void 0 && $$bindings.newPosts && newPosts !== void 0)
    $$bindings.newPosts(newPosts);
  if ($$props.stickers === void 0 && $$bindings.stickers && stickers !== void 0)
    $$bindings.stickers(stickers);
  if ($$props.featuredArtists === void 0 && $$bindings.featuredArtists && featuredArtists !== void 0)
    $$bindings.featuredArtists(featuredArtists);
  $$result.css.add(css);
  {
    artists = [featuredArtists[0].featuredArtist1, featuredArtists[0].featuredArtist2];
  }
  {
    console.log("artists: ", artists);
  }
  return `
${(0, import_index_68ac15fd.v)(import_metadata_ef16be06.M, "Metadata").$$render($$result, {}, {}, {})}
<h1 class="${"accessibility-title svelte-tttif7"}">Eyebeam Home</h1>
<div class="${"homepage-menu svelte-tttif7"}"><section role="${"menu"}" class="${"svelte-tttif7"}"><div class="${"column one svelte-tttif7"}">${(0, import_index_68ac15fd.v)(Menu, "Menu").$$render($$result, {}, {}, {})}</div>
	<section class="${"svelte-tttif7"}"><div class="${"column two svelte-tttif7"}"><div class="${"tile open-eyebeam svelte-tttif7"}">${(0, import_get.default)(stickers, "stickerLeft.enabled", false) ? `${(0, import_index_68ac15fd.v)(Sticker, "Sticker").$$render($$result, { sticker: stickers.stickerLeft }, {}, {})}` : `${(0, import_index_68ac15fd.v)(Open_eyebeam, "OpenEyebeam").$$render($$result, {}, {}, {})}`}</div>
<h2 class="${"svelte-tttif7"}"><a class="${"sub-tile header svelte-tttif7"}" href="${"/people"}">FEATURED ARTISTS</a></h2>
				<div class="${"featured-artists svelte-tttif7"}"><ul class="${"svelte-tttif7"}">${(0, import_index_68ac15fd.h)(artists, (artist) => {
    return `<div class="${"tile svelte-tttif7"}"><li class="${"svelte-tttif7"}"><a${(0, import_index_68ac15fd.a)("href", "/people/" + artist.slug.current, 0)} sveltekit:prefetch class="${"featured-artist svelte-tttif7"}"><img class="${"featured-artist-image svelte-tttif7"}" alt="${""}"${(0, import_index_68ac15fd.a)("src", artist.image.url, 0)}><h3 class="${"featured-artist-name svelte-tttif7"}">${(0, import_index_68ac15fd.e)(artist.firstName)} ${(0, import_index_68ac15fd.e)(artist.lastName)}</h3>
					<div class="${"quote svelte-tttif7"}">&quot;${(0, import_index_68ac15fd.e)(artist.quote)}&quot;
			</div>
	</a></li>
					</div>`;
  })}</ul></div></div>
	<div class="${"column three svelte-tttif7"}"><h2 class="${"svelte-tttif7"}"><a class="${"sub-tile header svelte-tttif7"}" href="${"/events"}">UPCOMING &amp; RECENT</a></h2>
		${(0, import_get.default)(stickers, "stickerRight.enabled", false) ? `${(0, import_get.default)(stickers, "stickerRight.fullWidth", false) == false ? `${(0, import_index_68ac15fd.v)(Sticker, "Sticker").$$render($$result, {
    sticker: stickers.stickerRight,
    small: true
  }, {}, {})}` : `${(0, import_index_68ac15fd.v)(Sticker, "Sticker").$$render($$result, {
    sticker: stickers.stickerRight,
    small: false
  }, {}, {})}`}` : ``}
		<div class="${[
    "tile events svelte-tttif7",
    ((0, import_get.default)(stickers, "stickerRight.enabled", false) == false ? "no-sticker" : "") + " " + ((0, import_get.default)(stickers, "stickerRight.enabled", false) && (0, import_get.default)(stickers, "stickerRight.fullWidth", false) == false ? "has-sticker" : "")
  ].join(" ").trim()}">${(0, import_index_68ac15fd.h)(newPosts.slice(0, 4), (post) => {
    return `<a${(0, import_index_68ac15fd.a)("href", "/" + post.route + "/" + (0, import_get.default)(post, "slug.current", ""), 0)} class="${"sub-tile event svelte-tttif7"}" sveltekit:prefetch>${post.mainImage != void 0 && post.mainImage.asset != void 0 ? `${(0, import_get.default)(stickers, "stickerRight.enabled", false) == false ? `<div class="${"post-image svelte-tttif7"}"><img${(0, import_index_68ac15fd.a)("src", (0, import_sanity_59332496.u)(post.mainImage.asset).width(1e3).url(), 0)}${(0, import_index_68ac15fd.a)("alt", post.mainImage.alt, 0)} class="${"svelte-tttif7"}">
						</div>` : ``}` : ``}
					<div class="${"post-content svelte-tttif7"}">${post.startDate ? `<div class="${"time svelte-tttif7"}">${(0, import_index_68ac15fd.e)((0, import_global_61b718ff.h)(post.startDate))}</div>` : `${post._updatedAt ? `<div class="${"time svelte-tttif7"}">${(0, import_index_68ac15fd.e)((0, import_global_61b718ff.h)(post._updatedAt))}</div>` : ``}`}
<div class="${"title svelte-tttif7"}"><h3 class="${"svelte-tttif7"}">${(0, import_index_68ac15fd.e)((0, import_truncate.default)(post.title, { length: 72 }))}</h3></div>
					${post.people && post.people.length > 0 ? `<div class="${"event-people"}">${post.people.length <= 1 ? `${(0, import_index_68ac15fd.v)(import_person_link_list_0e613235.P, "PersonLinkList").$$render($$result, { people: post.people }, {}, {})}` : `${(0, import_index_68ac15fd.v)(import_person_link_list_0e613235.P, "PersonLinkList").$$render($$result, { people: post.people.slice(0, 1) }, {}, {})} <span class="${"and-more svelte-tttif7"}">&amp; ${(0, import_index_68ac15fd.e)(post.people.length - 1)} more</span>`}
							</div>` : ``}</div>
				</a>`;
  })}</div>
<div class="${"socials svelte-tttif7"}"><ul class="${"svelte-tttif7"}"><li class="${"svelte-tttif7"}"><a href="${"/newsletter"}" class="${"tile social newsletter svelte-tttif7"}" sveltekit:prefetch>Newsletter
<div class="${"icon svelte-tttif7"}">${(0, import_index_68ac15fd.v)(import_menu_svelte_svelte_type_style_lang_0e67a6a2.N, "Newsletter").$$render($$result, {}, {}, {})}</div></a></li>
<li class="${"svelte-tttif7"}"><a${(0, import_index_68ac15fd.a)("href", import_global_61b718ff.I, 0)} target="${"_blank"}" class="${"tile social instagram svelte-tttif7"}">Instagram
			<div class="${"icon svelte-tttif7"}">${(0, import_index_68ac15fd.v)(import_menu_svelte_svelte_type_style_lang_0e67a6a2.I, "Instagram").$$render($$result, {}, {}, {})}</div></a></li>
<li class="${"svelte-tttif7"}"><a${(0, import_index_68ac15fd.a)("href", import_global_61b718ff.T, 0)} target="${"_blank"}" class="${"tile social twitter svelte-tttif7"}">Twitter
			<div class="${"icon svelte-tttif7"}">${(0, import_index_68ac15fd.v)(import_menu_svelte_svelte_type_style_lang_0e67a6a2.T, "Twitter").$$render($$result, {}, {}, {})}</div></a></li>
<li class="${"svelte-tttif7"}"><a${(0, import_index_68ac15fd.a)("href", import_global_61b718ff.Y, 0)} target="${"_blank"}" class="${"tile social youtube svelte-tttif7"}">Youtube
			<div class="${"icon svelte-tttif7"}">${(0, import_index_68ac15fd.v)(import_menu_svelte_svelte_type_style_lang_0e67a6a2.Y, "Youtube").$$render($$result, {}, {}, {})}</div></a></li></ul></div></div></section></section></div>

${``}`;
});
