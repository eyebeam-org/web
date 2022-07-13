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
  default: () => SupportBlock,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_277e1cdb = require("../../../chunks/index-277e1cdb.js");
var import_sanity_bfd50d1d = require("../../../chunks/sanity-bfd50d1d.js");
var import_has = __toESM(require("lodash/has.js"));
var import_keyBy = require("lodash/keyBy.js");
var import_truncate = require("lodash/truncate.js");
var import_blocks_c7be9ebc = require("../../../chunks/blocks-c7be9ebc.js");
var import_get = require("lodash/get.js");
var import_stores_f9761b8b = require("../../../chunks/stores-f9761b8b.js");
var import_slugify = require("slugify");
var import_date_fns = require("date-fns");
var import_core = require("@popperjs/core");
var import_get_video_id = require("get-video-id");
var import_arrow_link_ef752029 = require("../../../chunks/arrow-link-ef752029.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_global_eadaa9b6 = require("../../../chunks/global-eadaa9b6.js");
var import_stores_b7bb0fad = require("../../../chunks/stores-b7bb0fad.js");
var embedContent_svelte_svelte_type_style_lang = "";
var supportBlock_svelte_svelte_type_style_lang = "";
const css = {
  code: 'h2.svelte-y3ui1o.svelte-y3ui1o{font-family:"Eyebeam sans", Arial, sans-serif;font-size:32px;text-transform:uppercase;padding-left:0}.tile.svelte-y3ui1o.svelte-y3ui1o{padding:20px;overflow:hidden;width:50%;display:block;float:left}@media(max-width: 800px), screen and (orientation: portrait){.tile.svelte-y3ui1o.svelte-y3ui1o{width:100%;border:1px solid var(--foreground-color);border-top:none}.tile.svelte-y3ui1o.svelte-y3ui1o:first-child{border-top:1px solid var(--foreground-color)}}.main-content.svelte-y3ui1o.svelte-y3ui1o{float:left;width:100%}@media(max-width: 800px), screen and (orientation: portrait){.main-content.svelte-y3ui1o.svelte-y3ui1o{width:100%}}@media(max-width: 800px), screen and (orientation: portrait){}.description.svelte-y3ui1o.svelte-y3ui1o{font-size:16px}.introduction.svelte-y3ui1o.svelte-y3ui1o{border-bottom:1px solid var(--foreground-color);min-height:440px;max-height:440px;overflow:scroll;padding:20px}@media(max-width: 800px), screen and (orientation: portrait){}.header-photo.svelte-y3ui1o.svelte-y3ui1o{overflow:none;padding:0;min-height:440px;border-bottom:1px solid var(--foreground-color);border-right:1px solid var(--foreground-color);height:440px}.nav-tile.svelte-y3ui1o.svelte-y3ui1o{width:50%;min-height:440px;display:flex;flex-flow:column nowrap;border-bottom:1px solid var(--foreground-color);font-size:16px;float:left;text-decoration:none;padding-right:40px}.nav-tile.svelte-y3ui1o.svelte-y3ui1o:nth-child(odd){border-right:1px solid var(--foreground-color)}@media(max-width: 800px), screen and (orientation: portrait){.nav-tile.svelte-y3ui1o.svelte-y3ui1o:nth-child(odd){border-right:none}}.nav-tile.svelte-y3ui1o a.svelte-y3ui1o{text-decoration:none}.nav-tile.has-link.svelte-y3ui1o.svelte-y3ui1o:hover{background:#e0ded7;color:var(--hover-text-color);cursor:pointer}.nav-tile.our-history.svelte-y3ui1o.svelte-y3ui1o,.nav-tile.artists.svelte-y3ui1o.svelte-y3ui1o,.nav-tile.get-involved.svelte-y3ui1o.svelte-y3ui1o,.nav-tile.media-kit.svelte-y3ui1o.svelte-y3ui1o{border-right:none}@media(max-width: 800px), screen and (orientation: portrait){.nav-tile.our-history.svelte-y3ui1o.svelte-y3ui1o,.nav-tile.artists.svelte-y3ui1o.svelte-y3ui1o,.nav-tile.get-involved.svelte-y3ui1o.svelte-y3ui1o,.nav-tile.media-kit.svelte-y3ui1o.svelte-y3ui1o{border-right:1px solid var(--foreground-color)}}@media(max-width: 800px), screen and (orientation: portrait){.nav-tile.svelte-y3ui1o.svelte-y3ui1o{width:100%;border-left:1px solid var(--foreground-color);border-right:1px solid var(--foreground-color);border-bottom:1px solid var(--foreground-color);min-height:33vh}.nav-tile.svelte-y3ui1o.svelte-y3ui1o:nth-child(odd){border-right:1px solid var(--foreground-color)}.nav-tile.svelte-y3ui1o.svelte-y3ui1o:last-child{border-bottom:none}.nav-tile.svelte-y3ui1o.svelte-y3ui1o:first-of-type{border-top:1px solid var(--foreground-color)}}.nav-tile.crypto-widget.svelte-y3ui1o div.svelte-y3ui1o{width:100%}.full-tile.svelte-y3ui1o.svelte-y3ui1o{width:100%;min-height:440px;border-bottom:1px solid var(--foreground-color);display:block;float:left;text-decoration:none}@media(max-width: 800px), screen and (orientation: portrait){.full-tile.svelte-y3ui1o.svelte-y3ui1o{min-height:unset;border-left:1px solid var(--foreground-color);border-right:1px solid var(--foreground-color)}}.full-tile.contact.svelte-y3ui1o.svelte-y3ui1o{border-bottom:none;min-height:unset;height:220px;position:relative}@media(max-width: 800px), screen and (orientation: portrait){.full-tile.contact.svelte-y3ui1o.svelte-y3ui1o{border-bottom:1px solid var(--foreground-color)}}.full-tile.contact.svelte-y3ui1o .bottom-container.svelte-y3ui1o{position:absolute;bottom:15px;left:15px;width:100%}.full-tile.contact.svelte-y3ui1o .bottom-container .column.svelte-y3ui1o{width:25%;float:left}@media(max-width: 800px), screen and (orientation: portrait){.full-tile.contact.svelte-y3ui1o .bottom-container .column.svelte-y3ui1o{width:calc(100% - 40px)}}.press-and-news.svelte-y3ui1o.svelte-y3ui1o{position:relative;padding-left:0;padding-right:0}.press-and-news.svelte-y3ui1o h2.svelte-y3ui1o{margin-right:15px;margin-left:15px}.press-and-news.svelte-y3ui1o h2 a.svelte-y3ui1o{text-decoration:none}@media(max-width: 800px), screen and (orientation: portrait){}',
  map: null
};
const prerender = false;
const SupportBlock = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { section, aboutMap } = $$props;
  if ($$props.section === void 0 && $$bindings.section && section !== void 0)
    $$bindings.section(section);
  if ($$props.aboutMap === void 0 && $$bindings.aboutMap && aboutMap !== void 0)
    $$bindings.aboutMap(aboutMap);
  $$result.css.add(css);
  {
    console.log("aboutMap: ", aboutMap);
  }
  return `${section == "contact" ? `
				<div class="${"tile full-tile contact svelte-y3ui1o"}"><h2 class="${"svelte-y3ui1o"}">Contact</h2>
					<div class="${"bottom-container svelte-y3ui1o"}"><div class="${"column svelte-y3ui1o"}">${(0, import_index_277e1cdb.e)(aboutMap["contact"].address)}</div>
						<div class="${"column svelte-y3ui1o"}">${(0, import_index_277e1cdb.e)(aboutMap["contact"].phoneNumber)}<br>
							<a${(0, import_index_277e1cdb.a)("href", "mailto:" + aboutMap["contact"].email, 0)}>${(0, import_index_277e1cdb.e)(aboutMap["contact"].email)}</a></div></div></div>` : `${section == "donate" ? `
				
				<div id="${"donate"}" class="${"tile introduction " + (0, import_index_277e1cdb.e)(section) + " svelte-y3ui1o"}" sveltekit:prefetch><h1>${(0, import_index_277e1cdb.e)(aboutMap[section].title)}</h1>
					${(0, import_has.default)(aboutMap[section], "introduction.content") ? `<div class="${"description svelte-y3ui1o"}"><!-- HTML_TAG_START -->${(0, import_sanity_bfd50d1d.r)(aboutMap[section].introduction.content)}<!-- HTML_TAG_END --></div>` : ``}</div>
			${(0, import_index_277e1cdb.d)(aboutMap[section].content, (content) => {
    return `${content.content[0].children[0].text == "THE FOLD" ? `<div class="${"tile nav-tile has-link svelte-y3ui1o"}">${(0, import_index_277e1cdb.v)(import_blocks_c7be9ebc.B, "Blocks").$$render($$result, { blocks: content.content }, {}, {})}

							${(0, import_index_277e1cdb.v)(import_arrow_link_ef752029.A, "ArrowLink").$$render($$result, { link: "https://fold.eyebeam.org/enter" }, {}, {})}
					</div>` : `<div class="${"tile nav-tile svelte-y3ui1o"}">${(0, import_index_277e1cdb.v)(import_blocks_c7be9ebc.B, "Blocks").$$render($$result, { blocks: content.content }, {}, {})}
					</div>`}`;
  })}
						<div class="${"tile nav-tile crypto-widget svelte-y3ui1o"}"><h2 class="${"svelte-y3ui1o"}">Donate Crypto </h2>
<p>Your cryptocurrency donation is tax-deductible and will support our mission by helping us support artists and bringing their ideas to actionable projects. </p>

<script id="${"tgb-widget-script"}">!function(t,e,i,n,o,c,d,s){t.tgbWidgetOptions={id:o,domain:n},(d=e.createElement(i)).src=[n,"widget/script.js"].join(""),d.async=1,(s=e.getElementById(c)).parentNode.insertBefore(d,s)}(window,document,"script","https://tgbwidget.com/","133952075","tgb-widget-script"); <\/script></div>` : `
				<div class="${"tile nav-tile has-link " + (0, import_index_277e1cdb.e)(section) + " svelte-y3ui1o"}" sveltekit:prefetch><a${(0, import_index_277e1cdb.a)("href", "support/" + aboutMap[section]._id, 0)} class="${"svelte-y3ui1o"}"><h2 class="${"svelte-y3ui1o"}">${(0, import_index_277e1cdb.e)(aboutMap[section].title)}</h2></a>
						${(0, import_has.default)(aboutMap[section], "introduction.content") ? `<div class="${"description svelte-y3ui1o"}"><!-- HTML_TAG_START -->${(0, import_sanity_bfd50d1d.r)(aboutMap[section].introduction.content)}<!-- HTML_TAG_END --></div>
						<div class="${"content svelte-y3ui1o"}">${section == "donate" ? `<script id="${"tgb-widget-script"}">!function(t,e,i,n,o,c,d,s){t.tgbWidgetOptions={id:o,domain:n},(d=e.createElement(i)).src=[n,"widget/script.js"].join(""),d.async=1,(s=e.getElementById(c)).parentNode.insertBefore(d,s)}(window,document,"script","https://tgbwidget.com/","133952075","tgb-widget-script"); <\/script>` : ``}</div>
						${section != "donate" ? `${(0, import_index_277e1cdb.v)(import_arrow_link_ef752029.A, "ArrowLink").$$render($$result, {
    link: "/support/" + aboutMap[section]._id
  }, {}, {})}` : ``}` : ``}</div>`}`}`;
});
