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
  default: () => SupportBlock
});
module.exports = __toCommonJS(stdin_exports);
var import_index_68ac15fd = require("../../../chunks/index-68ac15fd.js");
var import_sanity_59332496 = require("../../../chunks/sanity-59332496.js");
var import_has = __toESM(require("lodash/has.js"));
var import_keyBy = require("lodash/keyBy.js");
var import_truncate = __toESM(require("lodash/truncate.js"));
var import_blocks_11eda655 = require("../../../chunks/blocks-11eda655.js");
var import_get = __toESM(require("lodash/get.js"));
var import_stores_25b712dd = require("../../../chunks/stores-25b712dd.js");
var import_slugify = require("slugify");
var import_date_fns = require("date-fns");
var import_global_61b718ff = require("../../../chunks/global-61b718ff.js");
var import_person_link_eed93e98 = require("../../../chunks/person-link-eed93e98.js");
var import_get_video_id = require("get-video-id");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_core = require("@popperjs/core");
var import_stores_2672c807 = require("../../../chunks/stores-2672c807.js");
var embedContent_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".main-content.svelte-gjqyw.svelte-gjqyw{width:100%}@media(max-width: 800px){.main-content.svelte-gjqyw.svelte-gjqyw{width:100%;margin-bottom:0}}.article.svelte-gjqyw.svelte-gjqyw{min-height:100vh;display:inline-block;width:100%;padding-bottom:20px}@media(max-width: 800px){.article.svelte-gjqyw.svelte-gjqyw{border:unset}}@media(max-width: 800px){}@media(max-width: 800px){}@media(max-width: 800px){}.article.svelte-gjqyw .header .date.svelte-gjqyw{margin-left:20px;margin-right:40px;margin-bottom:20px}@media(max-width: 800px){.article.svelte-gjqyw .header .date.svelte-gjqyw{margin-left:0;margin-right:0}}@media(max-width: 800px){}.article.svelte-gjqyw .header .image-container img.svelte-gjqyw{border:1px solid var(--foreground-color);max-height:100%;max-width:100%}@media(max-width: 800px){}@media(max-width: 800px){}@media(max-width: 800px){}.transcript.svelte-gjqyw.svelte-gjqyw{margin-bottom:20px}.transcript.svelte-gjqyw .transcript-button.svelte-gjqyw{padding:15px;background:#e0ded7;display:inline-block;margin-left:20px;cursor:pointer;text-decoration:none}@media(max-width: 800px){.transcript.svelte-gjqyw .transcript-button.svelte-gjqyw{margin-left:0}}.bio.svelte-gjqyw.svelte-gjqyw{margin-top:20px}.website.svelte-gjqyw.svelte-gjqyw{margin-top:20px}.people.svelte-gjqyw.svelte-gjqyw{width:100%;padding:20px}@media(max-width: 800px){.people.svelte-gjqyw.svelte-gjqyw{padding-left:0;padding-right:0}}.people.svelte-gjqyw h2.svelte-gjqyw{margin-bottom:20px;padding-left:0;padding-right:0;margin-left:0}.people.svelte-gjqyw .people-inner.svelte-gjqyw{display:inline-block;width:100%}.people.svelte-gjqyw .people-inner .people-link.svelte-gjqyw{margin-bottom:20px;display:block;text-decoration:none;width:calc(50% - 8px);overflow:hidden;float:left}@media(max-width: 800px){.people.svelte-gjqyw .people-inner .people-link.svelte-gjqyw{width:100%}}.people.svelte-gjqyw .people-inner .people-link.svelte-gjqyw:nth-child(odd){margin-right:15px}.people.svelte-gjqyw .people-inner .people-link .title.svelte-gjqyw{font-size:16px;background:#e0ded7;margin-top:10px;display:inline-block;color:var(--special-text-color)}.people.svelte-gjqyw .people-inner .people-link .image.svelte-gjqyw{border:1px solid var(--foreground-color);width:100%;line-height:0}.people.svelte-gjqyw .people-inner .people-link .image img.svelte-gjqyw{width:100%;min-height:200px}.published-by.svelte-gjqyw.svelte-gjqyw,.date.svelte-gjqyw.svelte-gjqyw,.author.svelte-gjqyw.svelte-gjqyw,.including.svelte-gjqyw.svelte-gjqyw{font-style:italic;margin-left:20px;margin-right:40px;font-size:16px}@media(max-width: 800px){.published-by.svelte-gjqyw.svelte-gjqyw,.date.svelte-gjqyw.svelte-gjqyw,.author.svelte-gjqyw.svelte-gjqyw,.including.svelte-gjqyw.svelte-gjqyw{margin-left:0}}.including.svelte-gjqyw.svelte-gjqyw{margin-top:20px;margin-bottom:20px}.button.svelte-gjqyw.svelte-gjqyw{padding:20px;background:#e0ded7;display:inline-block;font-size:14px;margin-left:20px;margin-top:20px;text-decoration:none;color:var(--special-text-color)}@media(max-width: 800px){.button.svelte-gjqyw.svelte-gjqyw{margin-left:0}}.event-info.svelte-gjqyw.svelte-gjqyw{padding:15px;border:1px solid var(--foreground-color);font-size:14px;display:inline-block;margin-left:20px;min-width:300px;width:40%}@media(max-width: 800px){.event-info.svelte-gjqyw.svelte-gjqyw{margin-left:0;margin-right:0}}.event-info.svelte-gjqyw .dates.svelte-gjqyw{margin-bottom:20px}.event-info p{margin:0}.event-info h3{margin:0}",
  map: null
};
const Embed_content = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  let { page } = $$props;
  const BOXED_TYPES = ["program", "note", "person"];
  BOXED_TYPES.includes(page._type) ? true : false;
  const INTRO_TYPES = ["program", "note"];
  INTRO_TYPES.includes(page._type) ? true : false;
  const TIGHT_TYPES = ["artists", "event", "eyebeamIsChanging", "news", "press"];
  TIGHT_TYPES.includes(page._type) ? true : false;
  const PEOPLE_TYPES = ["event", "videoPost"];
  let showPeople = PEOPLE_TYPES.includes(page._type) ? true : false;
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  $$result.css.add(css$1);
  return `<div class="${"main-content svelte-gjqyw"}"><article class="${"article svelte-gjqyw"}">
		${page._type === "event" ? `<div class="${"event-info svelte-gjqyw"}">${page.startDate ? `<div class="${"dates svelte-gjqyw"}"><h3>Dates</h3>
						${(0, import_index_68ac15fd.e)((0, import_global_61b718ff.l)(page.startDate))}</div>` : ``}
				${(0, import_has.default)(page, "location.content") ? `<div class="${"location"}"><h3>Location</h3>
						${(0, import_index_68ac15fd.v)(import_blocks_11eda655.B, "Blocks").$$render($$result, { blocks: page.location.content }, {}, {})}</div>` : ``}</div>` : ``}

		
		${page._type === "press" || page._type === "news" ? `
			${page.source ? `<div class="${"published-by svelte-gjqyw"}">Published by ${(0, import_index_68ac15fd.e)(page.source)}</div>` : ``}
			
			<div class="${"date svelte-gjqyw"}">${(0, import_index_68ac15fd.e)((0, import_global_61b718ff.l)(page._createdAt))}</div>
			
			${page.author ? `<div class="${"author svelte-gjqyw"}">Author</div>` : ``}
			
			${page.people && page.people.length > 0 ? `<div class="${"including svelte-gjqyw"}">Including:
					${(0, import_index_68ac15fd.h)(page.people, (person) => {
    return `${(0, import_index_68ac15fd.v)(import_person_link_eed93e98.P, "PersonLink").$$render($$result, { person }, {}, {})}`;
  })}</div>` : ``}
			
			${page.pdfFile ? `<a href="${""}" class="${"button download-pdf svelte-gjqyw"}">Download as PDF</a>` : ``}
			
			${page.externalLink ? `<a${(0, import_index_68ac15fd.a)("href", page.externalLink, 0)} class="${"button read-original svelte-gjqyw"}" target="${"_blank"}">Read original article on ${(0, import_index_68ac15fd.e)(page.source)} ${(0, import_index_68ac15fd.v)(import_blocks_11eda655.E, "ExternalLink").$$render($$result, {}, {}, {})}</a>` : ``}` : ``}

		
		${page.website ? `<div class="${"website svelte-gjqyw"}" id="${"website"}"><h3>Website</h3>
				<p><a${(0, import_index_68ac15fd.a)("href", page.website, 0)} target="${"_blank"}">${(0, import_index_68ac15fd.e)(page.website)} ${(0, import_index_68ac15fd.v)(import_blocks_11eda655.E, "ExternalLink").$$render($$result, {}, {}, {})}</a></p></div>` : ``}

		
		${(0, import_has.default)(page, "bio.content") ? `<div class="${"bio svelte-gjqyw"}" id="${"bio"}"><h3>Bio</h3>
				${(0, import_index_68ac15fd.v)(import_blocks_11eda655.B, "Blocks").$$render($$result, { blocks: page.bio.content }, {}, {})}</div>` : ``}

		
		${(0, import_has.default)(page, "content.content") ? `${(0, import_index_68ac15fd.v)(import_blocks_11eda655.B, "Blocks").$$render($$result, { blocks: page.content.content }, {}, {})}` : ``}

		
		${page.transcript && page.transcript.asset && page.transcript.asset._ref ? `<div class="${"transcript svelte-gjqyw"}" id="${"transcript"}"><h2>Transcript</h2>
				<a${(0, import_index_68ac15fd.a)("href", page.transcriptUrl, 0)} target="${"_blank"}" class="${"transcript-button svelte-gjqyw"}">Download transcript as .PDF
				</a></div>` : ``}

		
		${showPeople && (0, import_get.default)(page, "people", []).length > 0 ? `<div class="${"people svelte-gjqyw"}" id="${"people"}"><h2 class="${"svelte-gjqyw"}">People</h2>
				<div class="${"people-inner svelte-gjqyw"}">${(0, import_index_68ac15fd.h)(page.people, (person) => {
    return `<a class="${"people-link svelte-gjqyw"}"${(0, import_index_68ac15fd.a)("href", "/people/" + person.slug.current, 0)} sveltekit:prefetch><div class="${"image svelte-gjqyw"}">${person.mainImage ? `<img${(0, import_index_68ac15fd.a)("alt", person.title, 0)}${(0, import_index_68ac15fd.a)("src", (0, import_sanity_59332496.u)(person.mainImage).quality(90).width(400).url(), 0)} class="${"svelte-gjqyw"}">` : ``}</div>
							<div class="${"text"}"><span class="${"title svelte-gjqyw"}">${(0, import_index_68ac15fd.e)(person.title)}</span></div>
						</a>`;
  })}</div></div>` : ``}</article>

</div>`;
});
var supportBlock_svelte_svelte_type_style_lang = "";
const css = {
  code: 'h2.svelte-1vl71hy.svelte-1vl71hy{font-family:"Eyebeam sans", Arial, sans-serif;font-size:32px;text-transform:uppercase;padding-left:0}.tile.svelte-1vl71hy.svelte-1vl71hy{padding:20px;overflow:hidden;width:50%;display:block;float:left}@media(max-width: 800px){.tile.svelte-1vl71hy.svelte-1vl71hy{width:100%;border:1px solid var(--foreground-color);border-top:none}.tile.svelte-1vl71hy.svelte-1vl71hy:first-child{border-top:1px solid var(--foreground-color)}}.main-content.svelte-1vl71hy.svelte-1vl71hy{float:left;width:100%}@media(max-width: 800px){.main-content.svelte-1vl71hy.svelte-1vl71hy{width:100%}}@media(max-width: 800px){}.description.svelte-1vl71hy.svelte-1vl71hy{font-size:16px}.introduction.svelte-1vl71hy.svelte-1vl71hy{border-bottom:1px solid var(--foreground-color);min-height:440px;max-height:440px;overflow:scroll;padding:20px}@media(max-width: 800px){}.header-photo.svelte-1vl71hy.svelte-1vl71hy{overflow:none;padding:0;min-height:440px;border-bottom:1px solid var(--foreground-color);border-right:1px solid var(--foreground-color);height:440px}.nav-tile.svelte-1vl71hy.svelte-1vl71hy{width:50%;min-height:440px;border-bottom:1px solid var(--foreground-color);display:block;float:left;text-decoration:none;padding-right:40px}.nav-tile.svelte-1vl71hy.svelte-1vl71hy:nth-child(odd){border-right:1px solid var(--foreground-color)}.nav-tile.our-history.svelte-1vl71hy.svelte-1vl71hy,.nav-tile.artists.svelte-1vl71hy.svelte-1vl71hy,.nav-tile.get-involved.svelte-1vl71hy.svelte-1vl71hy,.nav-tile.media-kit.svelte-1vl71hy.svelte-1vl71hy{border-right:none}@media(max-width: 800px){.nav-tile.our-history.svelte-1vl71hy.svelte-1vl71hy,.nav-tile.artists.svelte-1vl71hy.svelte-1vl71hy,.nav-tile.get-involved.svelte-1vl71hy.svelte-1vl71hy,.nav-tile.media-kit.svelte-1vl71hy.svelte-1vl71hy{border-right:1px solid var(--foreground-color)}}@media(max-width: 800px){.nav-tile.svelte-1vl71hy.svelte-1vl71hy{width:100%;border-left:1px solid var(--foreground-color);border-right:1px solid var(--foreground-color);border-bottom:1px solid var(--foreground-color);min-height:33vh}.nav-tile.svelte-1vl71hy.svelte-1vl71hy:nth-child(odd){border-right:1px solid var(--foreground-color)}.nav-tile.svelte-1vl71hy.svelte-1vl71hy:last-child{border-bottom:1px solid var(--foreground-color)}.nav-tile.svelte-1vl71hy.svelte-1vl71hy:first-of-type{border-top:1px solid var(--foreground-color)}}.nav-tile.crypto-widget.svelte-1vl71hy div.svelte-1vl71hy{width:100%}.full-tile.svelte-1vl71hy.svelte-1vl71hy{width:100%;min-height:440px;border-bottom:1px solid var(--foreground-color);display:block;float:left;text-decoration:none}@media(max-width: 800px){.full-tile.svelte-1vl71hy.svelte-1vl71hy{min-height:unset;border-left:1px solid var(--foreground-color);border-right:1px solid var(--foreground-color)}}.full-tile.contact.svelte-1vl71hy.svelte-1vl71hy{border-bottom:none;min-height:unset;height:220px;position:relative}@media(max-width: 800px){.full-tile.contact.svelte-1vl71hy.svelte-1vl71hy{border-bottom:1px solid var(--foreground-color)}}.full-tile.contact.svelte-1vl71hy .bottom-container.svelte-1vl71hy{position:absolute;bottom:15px;left:15px;width:100%}.full-tile.contact.svelte-1vl71hy .bottom-container .column.svelte-1vl71hy{width:25%;float:left}@media(max-width: 800px){.full-tile.contact.svelte-1vl71hy .bottom-container .column.svelte-1vl71hy{width:calc(100% - 40px)}}.press-and-news.svelte-1vl71hy.svelte-1vl71hy{position:relative;padding-left:0;padding-right:0}.press-and-news.svelte-1vl71hy h2.svelte-1vl71hy{margin-right:15px;margin-left:15px}@media(max-width: 800px){}',
  map: null
};
const SupportBlock = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  let { section, aboutMap } = $$props;
  if ($$props.section === void 0 && $$bindings.section && section !== void 0)
    $$bindings.section(section);
  if ($$props.aboutMap === void 0 && $$bindings.aboutMap && aboutMap !== void 0)
    $$bindings.aboutMap(aboutMap);
  $$result.css.add(css);
  return `${section == "contact" ? `
				<div class="${"tile full-tile contact svelte-1vl71hy"}"><h2 class="${"svelte-1vl71hy"}">Contact</h2>
					<div class="${"bottom-container svelte-1vl71hy"}"><div class="${"column svelte-1vl71hy"}">${(0, import_index_68ac15fd.e)(aboutMap["contact"].address)}</div>
						<div class="${"column svelte-1vl71hy"}">${(0, import_index_68ac15fd.e)(aboutMap["contact"].phoneNumber)}<br>
							<a${(0, import_index_68ac15fd.a)("href", "mailto:" + aboutMap["contact"].email, 0)}>${(0, import_index_68ac15fd.e)(aboutMap["contact"].email)}</a></div></div></div>` : `${section == "donate" ? `
				
				<div${(0, import_index_68ac15fd.a)("id", section == "donate" ? "donate" : "", 0)} class="${"tile introduction " + (0, import_index_68ac15fd.e)(section) + " svelte-1vl71hy"}" sveltekit:prefetch><h1>${(0, import_index_68ac15fd.e)(aboutMap[section].title)}</h1>
					${(0, import_has.default)(aboutMap[section], "introduction.content") ? `<div class="${"description svelte-1vl71hy"}"><!-- HTML_TAG_START -->${(0, import_sanity_59332496.r)(aboutMap[section].introduction.content)}<!-- HTML_TAG_END --></div>` : ``}</div>
			${(0, import_index_68ac15fd.h)(aboutMap[section].content, (content) => {
    return `<div class="${"tile nav-tile svelte-1vl71hy"}">${(0, import_index_68ac15fd.v)(import_blocks_11eda655.B, "Blocks").$$render($$result, { blocks: content.content }, {}, {})}
						</div>`;
  })}
						<div class="${"tile nav-tile crypto-widget svelte-1vl71hy"}"><h2 class="${"svelte-1vl71hy"}">Donate Crypto </h2>
<p>Your cryptocurrency donation is tax-deductible and will support our mission by helping us support artists and bringing their ideas to actionable projects. </p>

<script id="${"tgb-widget-script"}">!function(t,e,i,n,o,c,d,s){t.tgbWidgetOptions={id:o,domain:n},(d=e.createElement(i)).src=[n,"widget/script.js"].join(""),d.async=1,(s=e.getElementById(c)).parentNode.insertBefore(d,s)}(window,document,"script","https://tgbwidget.com/","133952075","tgb-widget-script"); <\/script></div>` : `
				
				<div${(0, import_index_68ac15fd.a)("id", section == "donate" ? "donate" : "", 0)} class="${"tile nav-tile " + (0, import_index_68ac15fd.e)(section) + " svelte-1vl71hy"}" sveltekit:prefetch><h2 class="${"svelte-1vl71hy"}">${(0, import_index_68ac15fd.e)(aboutMap[section].title)}</h2>
					${(0, import_has.default)(aboutMap[section], "introduction.content") ? `<div class="${"description svelte-1vl71hy"}"><!-- HTML_TAG_START -->${(0, import_truncate.default)((0, import_sanity_59332496.r)(aboutMap[section].introduction.content), { length: 600 })}<!-- HTML_TAG_END --></div>
						<div class="${"content svelte-1vl71hy"}">${(0, import_index_68ac15fd.v)(Embed_content, "EmbedContent").$$render($$result, { page: aboutMap[section] }, {}, {})}
							${section == "donate" ? `<script id="${"tgb-widget-script"}">!function(t,e,i,n,o,c,d,s){t.tgbWidgetOptions={id:o,domain:n},(d=e.createElement(i)).src=[n,"widget/script.js"].join(""),d.async=1,(s=e.getElementById(c)).parentNode.insertBefore(d,s)}(window,document,"script","https://tgbwidget.com/","133952075","tgb-widget-script"); <\/script>` : ``}</div>` : ``}</div>`}`}`;
});
