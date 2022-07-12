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
  M: () => Main_content
});
module.exports = __toCommonJS(stdin_exports);
var import_index_277e1cdb = require("./index-277e1cdb.js");
var import_sanity_1a8ac269 = require("./sanity-1a8ac269.js");
var import_has = __toESM(require("lodash/has.js"));
var import_get = __toESM(require("lodash/get.js"));
var import_global_eadaa9b6 = require("./global-eadaa9b6.js");
var import_blocks_4014f298 = require("./blocks-4014f298.js");
var import_see_also_b2303e09 = require("./see-also-b2303e09.js");
var import_bottom_bar_168e682a = require("./bottom-bar-168e682a.js");
var import_get_video_id = require("get-video-id");
const css$2 = {
  code: ".video-block.svelte-q3dcfc.svelte-q3dcfc{text-decoration:none;width:100%;position:relative;display:block;margin-bottom:20px;cursor:pointer;background:var(--foreground-color)}.video-block.svelte-q3dcfc img.svelte-q3dcfc{display:block;width:100%;height:100%}.video-block.svelte-q3dcfc .title.svelte-q3dcfc{display:block;position:absolute;top:10px;left:90px;z-index:10;color:#f5f4ee;font-size:32px;line-height:1.2em}@media(max-width: 800px), screen and (orientation: portrait){.video-block.svelte-q3dcfc .title.svelte-q3dcfc{font-size:16px}}.video-block.svelte-q3dcfc .icon.svelte-q3dcfc{position:absolute;top:10px;left:10px;z-index:100;width:70px;height:70px;border-radius:50%;background:#f5f4ee;color:#f5f4ee;line-height:1.2em;display:flex;justify-content:center;align-items:center;padding-left:7px}.embed.svelte-q3dcfc.svelte-q3dcfc{color:#f5f4ee;cursor:pointer;display:flex;justify-content:center;align-items:center;width:100%}.embed.svelte-q3dcfc .inner.svelte-q3dcfc{width:100%;position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:100%}.embed.svelte-q3dcfc .inner iframe.svelte-q3dcfc{width:100%;position:absolute;top:0;left:0;width:100%;height:100%}",
  map: null
};
const Video_player = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { page } = $$props;
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  $$result.css.add(css$2);
  return `
<div class="${"video-block svelte-q3dcfc"}"><div class="${"embed svelte-q3dcfc"}">${`
			${page.mainImage ? `<img${(0, import_index_277e1cdb.a)("alt", page.title, 0)}${(0, import_index_277e1cdb.a)("src", (0, import_sanity_1a8ac269.u)(page.mainImage).quality(90).saturation(-100).width(400).url(), 0)} class="${"svelte-q3dcfc"}">` : ``}
			<div class="${"icon svelte-q3dcfc"}">${(0, import_index_277e1cdb.v)(import_blocks_4014f298.P, "PlayArrow").$$render($$result, {}, {}, {})}</div>
			<div class="${"title svelte-q3dcfc"}">${(0, import_index_277e1cdb.e)(page.title)}
				${page.runtime ? `(${(0, import_index_277e1cdb.e)(page.runtime)})` : ``}</div>`}</div>
</div>`;
});
const css$1 = {
  code: "#desc.svelte-1edkxmz.svelte-1edkxmz{display:none}.connected-post.svelte-1edkxmz.svelte-1edkxmz{margin-bottom:20px;display:block;text-decoration:none;width:calc(50% - 10px);float:left;overflow:hidden;font-size:14px}@media(max-width: 800px), screen and (orientation: portrait){.connected-post.svelte-1edkxmz.svelte-1edkxmz{width:100%;margin-bottom:40px}}.connected-post.svelte-1edkxmz.svelte-1edkxmz:nth-child(even){margin-right:20px}.connected-post.svelte-1edkxmz .text.svelte-1edkxmz{margin-top:5px}.connected-post.svelte-1edkxmz .text .type.svelte-1edkxmz{font-size:11px;letter-spacing:0.5px;text-transform:uppercase;margin-right:20px}.connected-post.svelte-1edkxmz .image.svelte-1edkxmz{border:1px solid var(--foreground-color);max-height:400px;width:100%;line-height:0;overflow:hidden}.connected-post.svelte-1edkxmz .image img.svelte-1edkxmz{min-height:200px;width:100%;height:100%;object-fit:cover}.connected-post.svelte-1edkxmz .image .big-title.svelte-1edkxmz{font-size:32px;width:100%;padding:15px;padding-top:10px;min-height:200px;line-height:1.2em}.connected-post.svelte-1edkxmz .image.svelte-1edkxmz:hover{background:#e0ded7;color:var(--hover-text-color)}.at-eyebeam.svelte-1edkxmz.svelte-1edkxmz{padding:20px;border-top:1px solid var(--foreground-color)}@media(max-width: 800px), screen and (orientation: portrait){.at-eyebeam.svelte-1edkxmz.svelte-1edkxmz{padding-left:0;padding-right:0}}.at-eyebeam.svelte-1edkxmz h2.svelte-1edkxmz{margin-bottom:20px;margin-left:0}",
  map: null
};
const At_eyebeam = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { posts = [] } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css$1);
  {
    console.log("posts: ", posts);
  }
  return `
<div class="${"at-eyebeam svelte-1edkxmz"}" id="${"at-eyebeam"}"><h2 class="${"svelte-1edkxmz"}">At Eyebeam</h2>
	${(0, import_index_277e1cdb.d)(posts, (post) => {
    return `<a class="${"connected-post svelte-1edkxmz"}"${(0, import_index_277e1cdb.a)("href", "/" + import_global_eadaa9b6.a[post._type] + "/" + post.slug.current, 0)} sveltekit:prefetch><div class="${"image svelte-1edkxmz"}">${post.mainImage ? `<img${(0, import_index_277e1cdb.a)("alt", post.title, 0)} aria-describedby="${"desc"}"${(0, import_index_277e1cdb.a)("src", (0, import_sanity_1a8ac269.u)(post.mainImage).quality(90).saturation(-100).width(400).url(), 0)} class="${"svelte-1edkxmz"}">` : `<div class="${"big-title svelte-1edkxmz"}">${(0, import_index_277e1cdb.e)(post.title)}</div>`}</div>
			<div class="${"text svelte-1edkxmz"}"><span class="${"type svelte-1edkxmz"}">${(0, import_index_277e1cdb.e)(import_global_eadaa9b6.b[post._type])}</span>
				<span class="${"title"}">${(0, import_index_277e1cdb.e)(post.title)}</span>
			</div></a>

				${post.mainImage ? `<span id="${"desc"}" class="${"svelte-1edkxmz"}">${(0, import_index_277e1cdb.e)(post.mainImage.alt)}</span>` : ``}`;
  })}
</div>`;
});
var mainContent_svelte_svelte_type_style_lang = "";
const css = {
  code: ".main-content.svelte-1xdc4al.svelte-1xdc4al{width:calc((100% / 6) * 5);margin-bottom:120px}@media(max-width: 800px), screen and (orientation: portrait){.main-content.svelte-1xdc4al.svelte-1xdc4al{width:100%;margin-bottom:0}}.article.svelte-1xdc4al.svelte-1xdc4al{border:1px solid var(--foreground-color);min-height:100vh;display:inline-block;width:100%;padding-bottom:20px}@media(max-width: 800px), screen and (orientation: portrait){.article.svelte-1xdc4al.svelte-1xdc4al{border:unset}}.article.svelte-1xdc4al .header.svelte-1xdc4al{display:flex;justify-content:space-between;width:100%;overflow:hidden}@media(max-width: 800px), screen and (orientation: portrait){.article.svelte-1xdc4al .header.svelte-1xdc4al{display:block;margin-bottom:20px}}.article.svelte-1xdc4al .header h1.svelte-1xdc4al{margin-left:20px;margin-right:40px;margin-right:20px;margin-top:20px;margin-bottom:120px;line-height:1.1em}@media(max-width: 800px), screen and (orientation: portrait){.article.svelte-1xdc4al .header h1.svelte-1xdc4al{margin-left:0;margin-bottom:0;margin-bottom:20px}}.article.svelte-1xdc4al .header h1.long.svelte-1xdc4al{font-size:32px}.article.svelte-1xdc4al .header .quote.svelte-1xdc4al{margin:20px;font-size:16px}.article.svelte-1xdc4al .header .badges.svelte-1xdc4al{margin-top:20px;margin-bottom:20px;margin-left:20px}@media(max-width: 800px), screen and (orientation: portrait){.article.svelte-1xdc4al .header .badges.svelte-1xdc4al{margin-left:0}}.article.svelte-1xdc4al .header .badges .badge.svelte-1xdc4al{text-decoration:none;padding:8px 15px;background:var(--foreground-color);color:var(--background-color);text-transform:capitalize;font-size:11px;display:inline-block;margin-bottom:5px}.article.svelte-1xdc4al .header .date.svelte-1xdc4al{margin-left:20px;margin-right:40px;margin-bottom:20px}@media(max-width: 800px), screen and (orientation: portrait){.article.svelte-1xdc4al .header .date.svelte-1xdc4al{margin-left:0;margin-right:0}}.article.svelte-1xdc4al .header .authors.svelte-1xdc4al{margin-left:20px;margin-right:40px;margin-bottom:20px}@media(max-width: 800px), screen and (orientation: portrait){.article.svelte-1xdc4al .header .authors.svelte-1xdc4al{margin-left:0;margin-right:0}}.article.svelte-1xdc4al .header .image-container.svelte-1xdc4al{max-width:30%;min-width:30%;width:30%;max-height:400px;margin-right:20px}.article.svelte-1xdc4al .header .image-container img.svelte-1xdc4al{border:1px solid var(--foreground-color);max-height:100%;max-width:100%}@media(max-width: 800px), screen and (orientation: portrait){.article.svelte-1xdc4al .header .image-container.svelte-1xdc4al{width:100%;margin-right:0;margin:0;max-width:unset;min-width:unset}}.article.svelte-1xdc4al .header.boxed.svelte-1xdc4al{display:flex;border-bottom:1px solid var(--foreground-color)}@media(max-width: 800px), screen and (orientation: portrait){.article.svelte-1xdc4al .header.boxed.svelte-1xdc4al{height:auto;padding-bottom:40px}}.article.svelte-1xdc4al .header.boxed h1.svelte-1xdc4al{margin-bottom:20px}.article.svelte-1xdc4al .header.tight h1.svelte-1xdc4al{margin-bottom:40px}@media(max-width: 800px), screen and (orientation: portrait){.article.svelte-1xdc4al .header.tight h1.svelte-1xdc4al{margin-bottom:20px}}.transcript.svelte-1xdc4al.svelte-1xdc4al{margin-bottom:20px}.transcript.svelte-1xdc4al .transcript-button.svelte-1xdc4al{padding:15px;background:#e0ded7;display:inline-block;margin-left:20px;cursor:pointer;text-decoration:none}@media(max-width: 800px), screen and (orientation: portrait){.transcript.svelte-1xdc4al .transcript-button.svelte-1xdc4al{margin-left:0}}.bio.svelte-1xdc4al.svelte-1xdc4al{margin-top:20px}.website.svelte-1xdc4al.svelte-1xdc4al{margin-top:20px}.people.svelte-1xdc4al.svelte-1xdc4al{width:100%;padding:20px}@media(max-width: 800px), screen and (orientation: portrait){.people.svelte-1xdc4al.svelte-1xdc4al{padding-left:0;padding-right:0}}.people.svelte-1xdc4al h2.svelte-1xdc4al{margin-bottom:20px;padding-left:0;padding-right:0;margin-left:0}.people.svelte-1xdc4al .people-inner.svelte-1xdc4al{display:inline-block;width:100%}.people.svelte-1xdc4al .people-inner .people-link.svelte-1xdc4al{margin-bottom:20px;display:block;text-decoration:none;width:calc(50% - 8px);overflow:hidden;float:left}@media(max-width: 800px), screen and (orientation: portrait){.people.svelte-1xdc4al .people-inner .people-link.svelte-1xdc4al{width:100%}}.people.svelte-1xdc4al .people-inner .people-link.svelte-1xdc4al:nth-child(odd){margin-right:15px}.people.svelte-1xdc4al .people-inner .people-link .title.svelte-1xdc4al{font-size:16px;background:#e0ded7;margin-top:10px;display:inline-block;color:var(--special-text-color)}.people.svelte-1xdc4al .people-inner .people-link .image.svelte-1xdc4al{border:1px solid var(--foreground-color);width:100%;line-height:0}.people.svelte-1xdc4al .people-inner .people-link .image img.svelte-1xdc4al{width:100%;min-height:200px}.published-by.svelte-1xdc4al.svelte-1xdc4al,.date.svelte-1xdc4al.svelte-1xdc4al,.author.svelte-1xdc4al.svelte-1xdc4al,.including.svelte-1xdc4al.svelte-1xdc4al{font-style:italic;margin-left:20px;margin-right:40px;font-size:16px}@media(max-width: 800px), screen and (orientation: portrait){.published-by.svelte-1xdc4al.svelte-1xdc4al,.date.svelte-1xdc4al.svelte-1xdc4al,.author.svelte-1xdc4al.svelte-1xdc4al,.including.svelte-1xdc4al.svelte-1xdc4al{margin-left:0}}.including.svelte-1xdc4al.svelte-1xdc4al{margin-top:20px;margin-bottom:20px}.button.svelte-1xdc4al.svelte-1xdc4al{padding:20px;background:#e0ded7;display:inline-block;font-size:14px;margin-left:20px;margin-top:20px;text-decoration:none;color:var(--special-text-color)}@media(max-width: 800px), screen and (orientation: portrait){.button.svelte-1xdc4al.svelte-1xdc4al{margin-left:0}}.event-info.svelte-1xdc4al.svelte-1xdc4al{padding:15px;border:1px solid var(--foreground-color);font-size:14px;display:inline-block;margin-left:20px;min-width:300px;width:40%}@media(max-width: 800px), screen and (orientation: portrait){.event-info.svelte-1xdc4al.svelte-1xdc4al{margin-left:0;margin-right:0}}.event-info.svelte-1xdc4al .dates.svelte-1xdc4al{margin-bottom:20px}.event-info p{margin:0}.event-info h3{margin:0}",
  map: null
};
const Main_content = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { page } = $$props;
  const BOXED_TYPES = ["program", "note", "person"];
  let boxed = BOXED_TYPES.includes(page._type) ? true : false;
  const INTRO_TYPES = ["program", "note", "about", "ourHistory", "ourMissionAndValues"];
  let showIntroduction = INTRO_TYPES.includes(page._type) ? true : false;
  const TIGHT_TYPES = ["artists", "event", "eyebeamIsChanging", "news", "press"];
  let tight = TIGHT_TYPES.includes(page._type) ? true : false;
  const PEOPLE_TYPES = ["event", "videoPost"];
  let showPeople = PEOPLE_TYPES.includes(page._type) ? true : false;
  console.log("page type: ", page._type);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  $$result.css.add(css);
  return `<div class="${"main-content svelte-1xdc4al"}" tabindex="${"0"}"><article class="${"article svelte-1xdc4al"}">${page._type == "videoPost" ? `${(0, import_index_277e1cdb.v)(Video_player, "VideoPlayer").$$render($$result, { page }, {}, {})}` : `<header class="${[
    "header svelte-1xdc4al",
    (boxed ? "boxed" : "") + " " + (tight ? "tight" : "")
  ].join(" ").trim()}"><div>
					<h1 class="${["svelte-1xdc4al", page.title.length > 42 ? "long" : ""].join(" ").trim()}">${(0, import_index_277e1cdb.e)(page.title)}</h1>

					
					${page._type == "person" ? `<div class="${"badges svelte-1xdc4al"}">${page.role ? `<a${(0, import_index_277e1cdb.a)("href", "/people?filter=" + page.role, 0)} class="${"badge svelte-1xdc4al"}">${(0, import_index_277e1cdb.e)(import_global_eadaa9b6.r[page.role])}</a>` : ``}
							${page.groupTags ? `${(0, import_index_277e1cdb.d)(page.groupTags, (tag) => {
    return `<a href="${"/people"}" class="${"badge svelte-1xdc4al"}">${(0, import_index_277e1cdb.e)(tag.label)}</a>`;
  })}` : ``}</div>` : ``}

					
					${page.quote ? `<div class="${"quote svelte-1xdc4al"}">&quot;${(0, import_index_277e1cdb.e)(page.quote)}&quot;</div>` : ``}

					${page._type == "note" ? `
						<div class="${"date svelte-1xdc4al"}">${(0, import_index_277e1cdb.e)((0, import_global_eadaa9b6.e)(page._createdAt))}</div>
						
						${page.people && page.people.length > 0 ? `<div class="${"authors svelte-1xdc4al"}">by ${(0, import_index_277e1cdb.d)(page.people, (person) => {
    return `${(0, import_index_277e1cdb.v)(import_blocks_4014f298.a, "PersonLink").$$render($$result, { person }, {}, {})}`;
  })}</div>` : ``}` : ``}
				${page._type == "press" || page._type == "news" ? `${page.source ? `<div class="${"published-by svelte-1xdc4al"}">Published by ${(0, import_index_277e1cdb.e)(page.source)}</div>
						<div class="${"date svelte-1xdc4al"}">${(0, import_index_277e1cdb.e)((0, import_global_eadaa9b6.l)(page._createdAt))}</div>` : ``}
						
						${page.author ? `<div class="${"author svelte-1xdc4al"}">${(0, import_index_277e1cdb.e)(page.author)}</div>` : ``}
			${page.externalLink ? `<a${(0, import_index_277e1cdb.a)("href", page.externalLink, 0)} class="${"button read-original svelte-1xdc4al"}" target="${"_blank"}">Read original article on ${(0, import_index_277e1cdb.e)(page.source)} ${(0, import_index_277e1cdb.v)(import_blocks_4014f298.E, "ExternalLink").$$render($$result, {}, {}, {})}</a>` : ``}` : ``}

					
					${showIntroduction && (0, import_has.default)(page, "introduction.content", []) ? `<div>${(0, import_index_277e1cdb.v)(import_blocks_4014f298.B, "Blocks").$$render($$result, { blocks: page.introduction.content }, {}, {})}</div>` : ``}</div>

				
				${(0, import_has.default)(page, "mainImage.asset") ? `<figure class="${"image-container svelte-1xdc4al"}"><img class="${"main-image svelte-1xdc4al"}"${(0, import_index_277e1cdb.a)("alt", page.mainImage.alt, 0)}${(0, import_index_277e1cdb.a)("src", (0, import_sanity_1a8ac269.u)(page.mainImage).quality(90).saturation(-100).width(400).url(), 0)}>
						${(0, import_has.default)(page, "mainImage.caption.content") ? `<figcaption>${(0, import_index_277e1cdb.v)(import_blocks_4014f298.B, "Blocks").$$render($$result, { blocks: page.mainImage.caption.content }, {}, {})}</figcaption>` : ``}</figure>` : ``}</header>`}

		
		${page._type === "event" ? `<div class="${"event-info svelte-1xdc4al"}">${page.startDate ? `<div class="${"dates svelte-1xdc4al"}"><h3>Dates</h3>
						${(0, import_index_277e1cdb.e)((0, import_global_eadaa9b6.l)(page.startDate))}</div>` : ``}
				${(0, import_has.default)(page, "location.content") ? `<div class="${"location"}"><h3>Location</h3>
						${(0, import_index_277e1cdb.v)(import_blocks_4014f298.B, "Blocks").$$render($$result, { blocks: page.location.content }, {}, {})}</div>` : ``}</div>` : ``}

		
		${page._type === "press" || page._type === "news" ? `
			
			
			${page.people && page.people.length > 0 ? `<div class="${"including svelte-1xdc4al"}">Including:
					${(0, import_index_277e1cdb.d)(page.people, (person) => {
    return `${(0, import_index_277e1cdb.v)(import_blocks_4014f298.a, "PersonLink").$$render($$result, { person }, {}, {})}`;
  })}</div>` : ``}
			
			${page.pdfFile ? `<a href="${""}" class="${"button download-pdf svelte-1xdc4al"}">Download as PDF</a>` : ``}
			` : ``}

		
		${page.website ? `<div class="${"website svelte-1xdc4al"}" id="${"website"}"><h3>Website</h3>
				<p><a${(0, import_index_277e1cdb.a)("href", page.website, 0)} target="${"_blank"}">${(0, import_index_277e1cdb.e)(page.website)} ${(0, import_index_277e1cdb.v)(import_blocks_4014f298.E, "ExternalLink").$$render($$result, {}, {}, {})}</a></p></div>` : ``}

		
		${(0, import_has.default)(page, "bio.content") ? `<div class="${"bio svelte-1xdc4al"}" id="${"bio"}"><h3>Bio</h3>
				${(0, import_index_277e1cdb.v)(import_blocks_4014f298.B, "Blocks").$$render($$result, { blocks: page.bio.content }, {}, {})}</div>` : ``}

		
		${(0, import_has.default)(page, "content.content") ? `${(0, import_index_277e1cdb.v)(import_blocks_4014f298.B, "Blocks").$$render($$result, { blocks: page.content.content }, {}, {})}` : ``}

		
		${page.transcript && page.transcript.asset && page.transcript.asset._ref ? `<div class="${"transcript svelte-1xdc4al"}" id="${"transcript"}"><h2>Transcript</h2>
				<a${(0, import_index_277e1cdb.a)("href", page.transcriptUrl, 0)} target="${"_blank"}" class="${"transcript-button svelte-1xdc4al"}">Download transcript as .PDF
				</a></div>` : ``}

		
		${showPeople && (0, import_get.default)(page, "people", []).length > 0 ? `<div class="${"people svelte-1xdc4al"}" id="${"people"}"><h2 class="${"svelte-1xdc4al"}">People</h2>
				<div class="${"people-inner svelte-1xdc4al"}">${(0, import_index_277e1cdb.d)(page.people, (person) => {
    return `<a class="${"people-link svelte-1xdc4al"}"${(0, import_index_277e1cdb.a)("href", "/people/" + person.slug.current, 0)} sveltekit:prefetch><div class="${"image svelte-1xdc4al"}">${person.mainImage ? `<img${(0, import_index_277e1cdb.a)("alt", person.title, 0)}${(0, import_index_277e1cdb.a)("src", (0, import_sanity_1a8ac269.u)(person.mainImage).quality(90).width(400).url(), 0)} class="${"svelte-1xdc4al"}">` : ``}</div>
							<div class="${"text"}"><span class="${"title svelte-1xdc4al"}">${(0, import_index_277e1cdb.e)(person.title)}</span></div>
						</a>`;
  })}</div></div>` : ``}

		
		${(0, import_get.default)(page, "connectedPosts", []).length > 0 ? `${(0, import_index_277e1cdb.v)(At_eyebeam, "AtEyebeam").$$render($$result, { posts: page.connectedPosts }, {}, {})}` : ``}

		
		${page.internalLinks || page.externalLinks ? `${(0, import_index_277e1cdb.v)(import_see_also_b2303e09.S, "SeeAlso").$$render($$result, {
    externalLinks: page.externalLinks,
    internalLinks: page.internalLinks
  }, {}, {})}` : ``}</article>

	
	${(0, import_index_277e1cdb.v)(import_bottom_bar_168e682a.B, "BottomBar").$$render($$result, { updatedAt: page._updatedAt }, {}, {})}
</div>`;
});
