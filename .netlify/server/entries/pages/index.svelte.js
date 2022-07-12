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
var import_index_277e1cdb = require("../../chunks/index-277e1cdb.js");
var import_truncate = __toESM(require("lodash/truncate.js"));
var import_get = __toESM(require("lodash/get.js"));
var import_global_eadaa9b6 = require("../../chunks/global-eadaa9b6.js");
var import_sanity_1a8ac269 = require("../../chunks/sanity-1a8ac269.js");
var import_menu_1006d4ca = require("../../chunks/menu-1006d4ca.js");
var import_sample = require("lodash/sample.js");
var import_core = require("@popperjs/core");
var import_slugify = require("slugify");
var import_has = __toESM(require("lodash/has.js"));
var import_get_video_id = require("get-video-id");
var import_person_link_list_a501f5d9 = require("../../chunks/person-link-list-a501f5d9.js");
var import_blocks_4014f298 = require("../../chunks/blocks-4014f298.js");
var import_metadata_c74c46dc = require("../../chunks/metadata-c74c46dc.js");
var import_date_fns = require("date-fns");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_stores_f9761b8b = require("../../chunks/stores-f9761b8b.js");
var import_stores_b7bb0fad = require("../../chunks/stores-b7bb0fad.js");
var triangleRight_svelte_svelte_type_style_lang = "";
var arrowRight_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "svg.svelte-klcelx.svelte-klcelx{transform:rotate(180deg)}svg.svelte-klcelx path.svelte-klcelx{fill:var(--foreground-color)}",
  map: null
};
const Arrow_right = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<svg width="${"8"}" height="${"10"}" viewBox="${"0 0 8 10"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-klcelx"}"><path d="${"M-0.000488072 5.06677L7.17615 9.45473L7.17615 0.678818L-0.000488072 5.06677Z"}" class="${"svelte-klcelx"}"></path></svg>`;
});
var openEyebeam_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '.open-eyebeam.svelte-w7ddu7.svelte-w7ddu7{width:100%;height:100%;text-decoration:none;display:flex;padding:0;z-index:100}.open-eyebeam.svelte-w7ddu7 .frame-container.svelte-w7ddu7{width:calc((100% / 3) * 2);overflow:hidden;border-right:1px solid var(--foreground-color)}.open-eyebeam.svelte-w7ddu7 .frame-container img.svelte-w7ddu7{object-fit:cover;width:100%;height:100%}.open-eyebeam.svelte-w7ddu7 .about.svelte-w7ddu7{padding:15px 5px;width:calc(100% / 3);display:flex;flex-flow:column nowrap;align-items:center;justify-content:space-between;height:100%;background-color:#f5f4ee;font-family:"Work Sans", Arial, sans-serif;font-size:16px;padding:15px}.open-eyebeam.svelte-w7ddu7 .about .open-eyebeam-link.svelte-w7ddu7{font-family:"Eyebeam sans", Arial, sans-serif;font-size:32px}@media(max-width: 1400px){.open-eyebeam.svelte-w7ddu7 .about .open-eyebeam-link.svelte-w7ddu7{font-size:18px}}.open-eyebeam.svelte-w7ddu7 .about .open-eyebeam-link a.svelte-w7ddu7{text-decoration:none}@media(max-width: 800px), screen and (orientation: portrait){.open-eyebeam.svelte-w7ddu7.svelte-w7ddu7{flex-wrap:wrap;height:65vh}.open-eyebeam.svelte-w7ddu7 .frame-container.svelte-w7ddu7{border-right:none;width:100%;height:40vh}.open-eyebeam.svelte-w7ddu7 .about.svelte-w7ddu7{width:100%;height:25vh;justify-content:flex-start;align-items:flex-start}.open-eyebeam.svelte-w7ddu7 .about .open-eyebeam-link.svelte-w7ddu7{font-size:27px;padding-bottom:15px;max-width:100%;order:-1}}',
  map: null
};
const Open_eyebeam = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"open-eyebeam svelte-w7ddu7"}"><div class="${"frame-container svelte-w7ddu7"}">
	<a href="${"https://open.eyebeam.org"}" class="${"svelte-w7ddu7"}"><img src="${"/OE_front_4.png"}" class="${"svelte-w7ddu7"}"></a></div>
<div class="${"about svelte-w7ddu7"}">Come see what our fellows are up to in our new digital studio space.
	<div class="${"open-eyebeam-link svelte-w7ddu7"}"><a target="${"_blank"}" href="${"https://open.eyebeam.org"}" alt="${"A pixelated drawing of a root network in a spiral, pastel on white background. Throughout the spiral are scattered seashells and a small planet, and at its center are two figures holding hands like skydivers."}" class="${"svelte-w7ddu7"}">OPEN EYEBEAM ${(0, import_index_277e1cdb.v)(Arrow_right, "ArrowRight").$$render($$result, {}, {}, {})}</a></div></div>
</div>`;
});
var sticker_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".big-sticker.svelte-1eoz1c.svelte-1eoz1c{text-decoration:none;width:100%;height:50%;display:block;border-bottom:1px solid var(--foreground-color)}.big-sticker.svelte-1eoz1c img.svelte-1eoz1c{width:100%;height:100%;max-height:100%;max-width:100%;margin:0 auto;object-fit:cover}.big-sticker.svelte-1eoz1c .text.svelte-1eoz1c{padding:15px;font-size:54px;color:var(--foreground-color);line-height:1.1em}.big-sticker.inverted.svelte-1eoz1c.svelte-1eoz1c{background:var(--foreground-color)}.big-sticker.inverted.svelte-1eoz1c .text.svelte-1eoz1c{color:var(--background-color)}.big-sticker.small.svelte-1eoz1c .text.svelte-1eoz1c{font-size:32px}@media(max-width: 800px), screen and (orientation: portrait){.big-sticker.svelte-1eoz1c.svelte-1eoz1c{max-height:40vh;overflow:hidden}}",
  map: null
};
const Sticker = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
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
  return `<a${(0, import_index_277e1cdb.a)("href", url, 0)} class="${[
    "tile big-sticker svelte-1eoz1c",
    (small ? "small" : "") + " " + (sticker.inverted ? "inverted" : "")
  ].join(" ").trim()}">${(0, import_has.default)(sticker, "image.asset") ? `<img alt="${"Eyebeam"}"${(0, import_index_277e1cdb.a)("src", (0, import_sanity_1a8ac269.u)(sticker.image).quality(90).width(800).url(), 0)} class="${"svelte-1eoz1c"}">` : `<div class="${"text svelte-1eoz1c"}">${(0, import_has.default)(sticker, "text.content") ? `${(0, import_index_277e1cdb.v)(import_blocks_4014f298.B, "Blocks").$$render($$result, { blocks: sticker.text.content }, {}, {})}` : ``}</div>`}
</a>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: 'section.svelte-jtcwvv.svelte-jtcwvv{all:unset}.homepage-content.svelte-jtcwvv.svelte-jtcwvv{display:flex;width:calc((100% / 6) * 5);height:100%}@media(max-width: 800px), screen and (orientation: portrait){.homepage-content.svelte-jtcwvv.svelte-jtcwvv{width:100%;flex-flow:row wrap}}.accessibility-title.svelte-jtcwvv.svelte-jtcwvv{position:absolute;left:100000000000000000000000000000px;width:1px;width:0px;overflow:hidden}h2.svelte-jtcwvv.svelte-jtcwvv,h3.svelte-jtcwvv.svelte-jtcwvv{all:unset}ul.svelte-jtcwvv.svelte-jtcwvv,li.svelte-jtcwvv.svelte-jtcwvv{all:unset;padding:0;display:inline;max-height:100%}ul.svelte-jtcwvv.svelte-jtcwvv:before,li.svelte-jtcwvv.svelte-jtcwvv:before{padding:0;all:unset;list-style:none;content:none}.homepage-menu.svelte-jtcwvv.svelte-jtcwvv{border:1px solid var(--foreground-color);width:100%;height:calc(100vh - 130px);margin-bottom:50px;margin-left:auto;margin-right:auto;min-height:520px;max-width:100%}@media(max-width: 800px), screen and (orientation: portrait){.homepage-menu.svelte-jtcwvv.svelte-jtcwvv{height:auto;display:inline-block;margin-bottom:unset;min-height:unset;min-width:unset;max-width:100%;max-height:unset}}@media(max-width: 800px), screen and (orientation: portrait){}.column.svelte-jtcwvv.svelte-jtcwvv{float:left;max-width:100%;border-right:1px solid var(--special-text-color);max-width:100%}@media(max-width: 800px), screen and (orientation: portrait){.column.svelte-jtcwvv.svelte-jtcwvv{border-right:none}}.column.one.svelte-jtcwvv.svelte-jtcwvv{width:calc(100% / 6);height:100%}@media(max-width: 800px), screen and (orientation: portrait){.column.one.svelte-jtcwvv.svelte-jtcwvv{display:none}}.column.two.svelte-jtcwvv.svelte-jtcwvv{width:61.8034%;height:100%;display:flex;flex-flow:column wrap}@media(max-width: 800px), screen and (orientation: portrait){.column.two.svelte-jtcwvv.svelte-jtcwvv{width:100%;height:auto}}.column.three.svelte-jtcwvv.svelte-jtcwvv{display:flex;flex-flow:column wrap;width:38.1966%;height:100%;border-right:none}@media(max-width: 800px), screen and (orientation: portrait){.column.three.svelte-jtcwvv.svelte-jtcwvv{width:100%}}.tile.svelte-jtcwvv.svelte-jtcwvv{display:flex;flex-wrap:wrap;overflow:hidden;user-select:none}@media(max-width: 800px), screen and (orientation: portrait){.tile.svelte-jtcwvv.svelte-jtcwvv{font-size:16px}}.socials.svelte-jtcwvv.svelte-jtcwvv{width:100%;height:calc(100% / 12)}.socials.bottom.svelte-jtcwvv.svelte-jtcwvv{border-top:1px solid var(--foreground-color)}.socials.middle.svelte-jtcwvv.svelte-jtcwvv{border-bottom:1px solid var(--foreground-color)}@media(max-width: 800px), screen and (orientation: portrait){.socials.svelte-jtcwvv.svelte-jtcwvv{height:50px;order:1;border-top:1px solid var(--foreground-color);border-bottom:none !important}}@media(max-width: 800px), screen and (orientation: portrait){}@media(max-width: 800px), screen and (orientation: portrait){}@media(max-width: 800px), screen and (orientation: portrait){}@media(max-width: 800px), screen and (orientation: portrait){}.social.svelte-jtcwvv.svelte-jtcwvv{font-family:"Eyebeam sans", Arial, sans-serif;justify-content:center;text-align:center;flex-wrap:nowrap;flex-direction:column;width:25%;height:100%;padding:10px !important;float:left;border-right:1px solid var(--foreground-color)}@media(max-width: 800px), screen and (orientation: portrait){.social.svelte-jtcwvv.svelte-jtcwvv{width:25%}}@media(max-width: 1400px){.social.svelte-jtcwvv.svelte-jtcwvv{font-size:0px}}.social.youtube.svelte-jtcwvv.svelte-jtcwvv{border-right:none}.social.svelte-jtcwvv .icon.svelte-jtcwvv{width:100%;text-align:center;margin:5px auto}@media(max-width: 800px), screen and (orientation: portrait){}@media(max-width: 800px), screen and (orientation: portrait){}.events.svelte-jtcwvv.svelte-jtcwvv{align-items:flex-start;align-content:flex-start;justify-content:flex-start;flex-flow:column wrap;flex:1;width:100%;float:left;height:calc((100%/12)*5)}.events.has-sticker.svelte-jtcwvv.svelte-jtcwvv{flex-flow:row wrap}.events.has-sticker.svelte-jtcwvv .event.svelte-jtcwvv{width:50%;max-width:50%;height:50%;max-height:100%}.events.has-sticker.svelte-jtcwvv .event .post-image.svelte-jtcwvv{display:none}.events.has-sticker.svelte-jtcwvv .event .title.svelte-jtcwvv{font-size:14px}.events.no-sticker.svelte-jtcwvv.svelte-jtcwvv{height:calc((100% - (100%/12)) - (100%/6))}@media(max-width: 800px), screen and (orientation: portrait){.events.svelte-jtcwvv.svelte-jtcwvv{height:30vh;flex:auto}}.featured-artists.svelte-jtcwvv.svelte-jtcwvv{height:calc(50% - (100%/6) - (100%/12));font-family:"Eyebeam sans", Arial, sans-serif;font-size:27px}.featured-artists.svelte-jtcwvv .tile.svelte-jtcwvv{height:100%;width:calc(100% / 3);border-right:1px solid var(--special-text-color)}.featured-artists.svelte-jtcwvv .tile.svelte-jtcwvv:last-child{border-right:none}.featured-artists.svelte-jtcwvv .featured-artist.svelte-jtcwvv{padding:15px 20px;height:100%;width:100%;display:flex;align-items:center;justify-content:space-between;flex-flow:row nowrap;text-align:center}.featured-artists.svelte-jtcwvv .featured-artist-name.svelte-jtcwvv{font-size:16px;padding:5px;width:100%}@media(max-width: 800px), screen and (orientation: portrait){.featured-artists.svelte-jtcwvv .featured-artist-name.svelte-jtcwvv{font-size:27px}}@media(max-width: 1400px){}.featured-artists.svelte-jtcwvv ul.svelte-jtcwvv{display:flex;height:100%;flex-flow:row nowrap}.featured-artists.svelte-jtcwvv .featured-artist-image.svelte-jtcwvv{max-width:50%}@media(max-width: 800px), screen and (orientation: portrait){.featured-artists.svelte-jtcwvv.svelte-jtcwvv{border-bottom:1px solid var(--foreground-color);height:40vh}.featured-artists.svelte-jtcwvv .tile.svelte-jtcwvv{width:100%;height:calc(100% / 3);flex-flow:row wrap;font-size:27px;border-right:none}.featured-artists.svelte-jtcwvv ul.svelte-jtcwvv{flex-flow:row wrap}.featured-artists.svelte-jtcwvv li.svelte-jtcwvv{width:100%}.featured-artists.svelte-jtcwvv .featured-artist-image.svelte-jtcwvv{max-width:25%}}.open-eyebeam.svelte-jtcwvv.svelte-jtcwvv{height:calc(50% + (100%/12) * 2);background:#e0ded7;width:100%;border-bottom:1px solid var(--foreground-color);float:left;position:relative;padding:0}@media(max-width: 800px), screen and (orientation: portrait){.open-eyebeam.svelte-jtcwvv.svelte-jtcwvv{flex:1;height:unset}}@media(max-width: 800px), screen and (orientation: portrait){}@media(max-width: 800px), screen and (orientation: portrait){}a.svelte-jtcwvv.svelte-jtcwvv{text-decoration:none}a.svelte-jtcwvv.svelte-jtcwvv:hover{background:#e0ded7;color:var(--hover-text-color)}a.svelte-jtcwvv.svelte-jtcwvv:active{background:var(--foreground-color);color:var(--background-color)}.header-container.svelte-jtcwvv.svelte-jtcwvv{height:calc(100%/12)}.header-container.svelte-jtcwvv h2.svelte-jtcwvv{display:flex;width:100%;height:100%}@media(max-width: 800px), screen and (orientation: portrait){.header-container.svelte-jtcwvv.svelte-jtcwvv{height:auto}}.sub-tile.svelte-jtcwvv.svelte-jtcwvv{width:50%;padding:15px;max-height:50%;overflow:hidden}@media(max-width: 800px), screen and (orientation: portrait){.sub-tile.svelte-jtcwvv.svelte-jtcwvv{width:100%;padding-top:5px;padding-bottom:5px;font-size:14px}}@media(max-width: 800px), screen and (orientation: portrait){.sub-tile.svelte-jtcwvv.svelte-jtcwvv:last-child{padding-bottom:20px}}.sub-tile.header.svelte-jtcwvv.svelte-jtcwvv{font-family:"Eyebeam sans", Arial, sans-serif;font-size:27px;flex:1;display:flex;align-content:center;align-items:center;width:100%;height:100%;max-height:100%;border-bottom:1px solid var(--foreground-color);padding:15px}@media(max-width: 1400px){.sub-tile.header.svelte-jtcwvv.svelte-jtcwvv{font-size:18px}}.sub-tile.event.svelte-jtcwvv.svelte-jtcwvv{width:100%;padding:5px 20px;min-height:calc(100% /5);max-height:25%;height:25%;display:flex;align-content:center;align-items:center}.sub-tile.event.svelte-jtcwvv .post-image.svelte-jtcwvv{height:80%;width:30%;flex:none;display:flex;overflow:hidden}.sub-tile.event.svelte-jtcwvv .post-image img.svelte-jtcwvv{max-width:100%;width:100%;align-items:center;object-fit:cover}.sub-tile.event.svelte-jtcwvv .post-content.svelte-jtcwvv{padding:0 15px;display:flex;max-height:100%;flex-flow:column nowrap;overflow:hidden}@media(max-width: 1400px){.sub-tile.event.svelte-jtcwvv .post-content.svelte-jtcwvv{max-height:98%}}@media(max-width: 1400px){}@media(max-width: 800px), screen and (orientation: portrait){.sub-tile.event.svelte-jtcwvv.svelte-jtcwvv{padding:0}}.sub-tile.svelte-jtcwvv .time.svelte-jtcwvv{margin-bottom:5px;font-size:11px}@media(max-width: 1400px){.sub-tile.svelte-jtcwvv .time.svelte-jtcwvv{display:none}}.sub-tile.svelte-jtcwvv .title.svelte-jtcwvv{margin-bottom:5px;font-size:16px;width:100%;overflow:hidden}@media(max-width: 1400px){.sub-tile.svelte-jtcwvv .title.svelte-jtcwvv{font-size:14px}}@media(max-width: 800px), screen and (orientation: portrait){}',
  map: null
};
const Routes = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
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
    artists = [
      featuredArtists[0].featuredArtist1,
      featuredArtists[0].featuredArtist2,
      featuredArtists[0].featuredArtist3
    ];
  }
  {
    console.log("posts: ", newPosts);
  }
  return `
${(0, import_index_277e1cdb.v)(import_metadata_c74c46dc.M, "Metadata").$$render($$result, {}, {}, {})}
<h1 class="${"accessibility-title svelte-jtcwvv"}">Eyebeam Home</h1>
<div class="${"homepage-menu svelte-jtcwvv"}"><section role="${"menu"}" class="${"svelte-jtcwvv"}"><div class="${"column one svelte-jtcwvv"}">${(0, import_index_277e1cdb.v)(import_menu_1006d4ca.M, "Menu").$$render($$result, {}, {}, {})}</div>
	<section role="${"content"}" class="${"homepage-content svelte-jtcwvv"}"><div class="${"column two svelte-jtcwvv"}"><div class="${"tile open-eyebeam svelte-jtcwvv"}">${(0, import_get.default)(stickers, "stickerLeft.enabled", false) ? `${(0, import_index_277e1cdb.v)(Sticker, "Sticker").$$render($$result, { sticker: stickers.stickerLeft }, {}, {})}` : `${(0, import_index_277e1cdb.v)(Open_eyebeam, "OpenEyebeam").$$render($$result, {}, {}, {})}`}</div>
<div class="${"header-container svelte-jtcwvv"}"><h2 class="${"svelte-jtcwvv"}"><a class="${"sub-tile header svelte-jtcwvv"}" href="${"/people"}">FEATURED ARTISTS</a></h2></div>
				<div class="${"featured-artists svelte-jtcwvv"}"><ul class="${"svelte-jtcwvv"}">${(0, import_index_277e1cdb.d)(artists, (artist) => {
    return `<div class="${"tile svelte-jtcwvv"}"><li class="${"svelte-jtcwvv"}"><a${(0, import_index_277e1cdb.a)("href", "/people/" + artist.slug.current, 0)} sveltekit:prefetch class="${"featured-artist svelte-jtcwvv"}"><img class="${"featured-artist-image svelte-jtcwvv"}" alt="${""}"${(0, import_index_277e1cdb.a)("src", (0, import_sanity_1a8ac269.u)(artist.image.url).saturation(-100), 0)}><div class="${"featured-artist-name svelte-jtcwvv"}"><h3 class="${"svelte-jtcwvv"}">${(0, import_index_277e1cdb.e)(artist.firstName)} ${(0, import_index_277e1cdb.e)(artist.lastName)}</h3></div>
	</a></li>
					</div>`;
  })}</ul></div></div>
	<div class="${"column three svelte-jtcwvv"}"><div class="${"header-container svelte-jtcwvv"}"><h2 class="${"svelte-jtcwvv"}"><a class="${"sub-tile header svelte-jtcwvv"}" href="${"/events"}">UPCOMING &amp; RECENT</a></h2></div>
		${(0, import_get.default)(stickers, "stickerRight.enabled", false) ? `${(0, import_get.default)(stickers, "stickerRight.fullWidth", false) == false ? `${(0, import_index_277e1cdb.v)(Sticker, "Sticker").$$render($$result, {
    sticker: stickers.stickerRight,
    small: true
  }, {}, {})}` : `${(0, import_index_277e1cdb.v)(Sticker, "Sticker").$$render($$result, {
    sticker: stickers.stickerRight,
    small: false
  }, {}, {})}`}` : ``}
	${(0, import_get.default)(stickers, "stickerRight.enabled", false) ? `<div class="${"socials middle svelte-jtcwvv"}"><ul class="${"svelte-jtcwvv"}"><li class="${"svelte-jtcwvv"}"><a href="${"/newsletter"}" class="${"tile social newsletter svelte-jtcwvv"}" sveltekit:prefetch><div class="${"icon svelte-jtcwvv"}">${(0, import_index_277e1cdb.v)(import_menu_1006d4ca.N, "Newsletter").$$render($$result, {}, {}, {})}</div></a></li>
	<li class="${"svelte-jtcwvv"}"><a${(0, import_index_277e1cdb.a)("href", import_global_eadaa9b6.I, 0)} target="${"_blank"}" class="${"tile social instagram svelte-jtcwvv"}"><div class="${"icon svelte-jtcwvv"}">${(0, import_index_277e1cdb.v)(import_menu_1006d4ca.I, "Instagram").$$render($$result, {}, {}, {})}</div></a></li>
	<li class="${"svelte-jtcwvv"}"><a${(0, import_index_277e1cdb.a)("href", import_global_eadaa9b6.T, 0)} target="${"_blank"}" class="${"tile social twitter svelte-jtcwvv"}"><div class="${"icon svelte-jtcwvv"}">${(0, import_index_277e1cdb.v)(import_menu_1006d4ca.T, "Twitter").$$render($$result, {}, {}, {})}</div></a></li>
	<li class="${"svelte-jtcwvv"}"><a${(0, import_index_277e1cdb.a)("href", import_global_eadaa9b6.Y, 0)} target="${"_blank"}" class="${"tile social youtube svelte-jtcwvv"}"><div class="${"icon svelte-jtcwvv"}">${(0, import_index_277e1cdb.v)(import_menu_1006d4ca.Y, "Youtube").$$render($$result, {}, {}, {})}</div></a></li></ul></div>` : ``}

		<div class="${[
    "tile events svelte-jtcwvv",
    ((0, import_get.default)(stickers, "stickerRight.enabled", false) == false ? "no-sticker" : "") + " " + ((0, import_get.default)(stickers, "stickerRight.enabled", false) && (0, import_get.default)(stickers, "stickerRight.fullWidth", false) == false ? "has-sticker" : "")
  ].join(" ").trim()}">${(0, import_index_277e1cdb.d)(newPosts.slice(0, 4), (post) => {
    return `<a${(0, import_index_277e1cdb.a)("href", "/" + post.route + "/" + (0, import_get.default)(post, "slug.current", ""), 0)} class="${"sub-tile event svelte-jtcwvv"}" sveltekit:prefetch>${post.mainImage != void 0 && post.mainImage.asset != void 0 ? `${(0, import_get.default)(stickers, "stickerRight.enabled", false) == false ? `<div class="${"post-image svelte-jtcwvv"}"><img${(0, import_index_277e1cdb.a)("src", (0, import_sanity_1a8ac269.u)(post.mainImage.asset).width(1e3).url(), 0)}${(0, import_index_277e1cdb.a)("alt", post.mainImage.alt, 0)} class="${"svelte-jtcwvv"}">
						</div>` : ``}` : ``}
					<div class="${"post-content svelte-jtcwvv"}">${post.startDate ? `<div class="${"time svelte-jtcwvv"}">${(0, import_index_277e1cdb.e)((0, import_global_eadaa9b6.h)(post.startDate))}</div>` : `${post._updatedAt ? `<div class="${"time svelte-jtcwvv"}">${(0, import_index_277e1cdb.e)((0, import_global_eadaa9b6.h)(post._updatedAt))}</div>` : ``}`}
<div class="${"title svelte-jtcwvv"}"><h3 class="${"svelte-jtcwvv"}">${(0, import_index_277e1cdb.e)((0, import_truncate.default)(post.title, { length: 72 }))}</h3></div>
					${post.people && post.people.length > 0 ? `<div class="${"event-people"}">${post.people.length <= 1 ? `${(0, import_index_277e1cdb.v)(import_person_link_list_a501f5d9.P, "PersonLinkList").$$render($$result, {
      people: post.people,
      tiny: (0, import_get.default)(stickers, "stickerRight.enabled", false)
    }, {}, {})}` : `${(0, import_index_277e1cdb.v)(import_person_link_list_a501f5d9.P, "PersonLinkList").$$render($$result, {
      people: post.people.slice(0, 1),
      tiny: (0, import_get.default)(stickers, "stickerRight.enabled", false)
    }, {}, {})}`}
							</div>` : ``}</div>
				</a>`;
  })}</div>

${!(0, import_get.default)(stickers, "stickerRight.enabled", false) ? `<div class="${"socials bottom svelte-jtcwvv"}"><ul class="${"svelte-jtcwvv"}"><li class="${"svelte-jtcwvv"}"><a href="${"/newsletter"}" class="${"tile social newsletter svelte-jtcwvv"}" sveltekit:prefetch><div class="${"icon svelte-jtcwvv"}">${(0, import_index_277e1cdb.v)(import_menu_1006d4ca.N, "Newsletter").$$render($$result, {}, {}, {})}</div></a></li>
<li class="${"svelte-jtcwvv"}"><a${(0, import_index_277e1cdb.a)("href", import_global_eadaa9b6.I, 0)} target="${"_blank"}" class="${"tile social instagram svelte-jtcwvv"}"><div class="${"icon svelte-jtcwvv"}">${(0, import_index_277e1cdb.v)(import_menu_1006d4ca.I, "Instagram").$$render($$result, {}, {}, {})}</div></a></li>
<li class="${"svelte-jtcwvv"}"><a${(0, import_index_277e1cdb.a)("href", import_global_eadaa9b6.T, 0)} target="${"_blank"}" class="${"tile social twitter svelte-jtcwvv"}"><div class="${"icon svelte-jtcwvv"}">${(0, import_index_277e1cdb.v)(import_menu_1006d4ca.T, "Twitter").$$render($$result, {}, {}, {})}</div></a></li>
<li class="${"svelte-jtcwvv"}"><a${(0, import_index_277e1cdb.a)("href", import_global_eadaa9b6.Y, 0)} target="${"_blank"}" class="${"tile social youtube svelte-jtcwvv"}"><div class="${"icon svelte-jtcwvv"}">${(0, import_index_277e1cdb.v)(import_menu_1006d4ca.Y, "Youtube").$$render($$result, {}, {}, {})}</div></a></li></ul></div>` : ``}</div></section></section></div>

${``}`;
});
