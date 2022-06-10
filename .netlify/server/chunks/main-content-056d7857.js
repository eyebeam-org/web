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
var import_index_68ac15fd = require("./index-68ac15fd.js");
var import_sanity_59332496 = require("./sanity-59332496.js");
var import_has = __toESM(require("lodash/has.js"));
var import_get = __toESM(require("lodash/get.js"));
var import_global_61b718ff = require("./global-61b718ff.js");
var import_blocks_c75ee098 = require("./blocks-c75ee098.js");
var import_see_also_998afbc8 = require("./see-also-998afbc8.js");
var import_bottom_bar_9ab2e699 = require("./bottom-bar-9ab2e699.js");
var import_person_link_ca6b4a11 = require("./person-link-ca6b4a11.js");
var import_get_video_id = require("get-video-id");
const css$2 = {
  code: ".video-block.svelte-k3zfg3.svelte-k3zfg3{text-decoration:none;width:100%;position:relative;display:block;margin-bottom:20px;cursor:pointer;background:var(--foreground-color)}.video-block.svelte-k3zfg3 img.svelte-k3zfg3{display:block;width:100%;height:100%}.video-block.svelte-k3zfg3 .title.svelte-k3zfg3{display:block;position:absolute;top:10px;left:90px;z-index:10;color:#f5f4ee;font-size:32px;line-height:1.2em}@media(max-width: 800px){.video-block.svelte-k3zfg3 .title.svelte-k3zfg3{font-size:16px}}.video-block.svelte-k3zfg3 .icon.svelte-k3zfg3{position:absolute;top:10px;left:10px;z-index:100;width:70px;height:70px;border-radius:50%;background:#f5f4ee;color:#f5f4ee;line-height:1.2em;display:flex;justify-content:center;align-items:center;padding-left:7px}.embed.svelte-k3zfg3.svelte-k3zfg3{color:#f5f4ee;cursor:pointer;display:flex;justify-content:center;align-items:center;width:100%}.embed.svelte-k3zfg3 .inner.svelte-k3zfg3{width:100%;position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:100%}.embed.svelte-k3zfg3 .inner iframe.svelte-k3zfg3{width:100%;position:absolute;top:0;left:0;width:100%;height:100%}",
  map: null
};
const Video_player = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  let { page } = $$props;
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  $$result.css.add(css$2);
  return `
<div class="${"video-block svelte-k3zfg3"}"><div class="${"embed svelte-k3zfg3"}">${`
			${page.mainImage ? `<img${(0, import_index_68ac15fd.a)("alt", page.title, 0)}${(0, import_index_68ac15fd.a)("src", (0, import_sanity_59332496.u)(page.mainImage).quality(90).saturation(-100).width(400).url(), 0)} class="${"svelte-k3zfg3"}">` : ``}
			<div class="${"icon svelte-k3zfg3"}">${(0, import_index_68ac15fd.v)(import_blocks_c75ee098.P, "PlayArrow").$$render($$result, {}, {}, {})}</div>
			<div class="${"title svelte-k3zfg3"}">${(0, import_index_68ac15fd.e)(page.title)}
				${page.runtime ? `(${(0, import_index_68ac15fd.e)(page.runtime)})` : ``}</div>`}</div>
</div>`;
});
const css$1 = {
  code: "#desc.svelte-sa2s07.svelte-sa2s07{display:none}.connected-post.svelte-sa2s07.svelte-sa2s07{margin-bottom:20px;display:block;text-decoration:none;width:calc(50% - 10px);float:left;overflow:hidden;font-size:14px}@media(max-width: 800px){.connected-post.svelte-sa2s07.svelte-sa2s07{width:100%;margin-bottom:40px}}.connected-post.svelte-sa2s07.svelte-sa2s07:nth-child(even){margin-right:20px}.connected-post.svelte-sa2s07 .text.svelte-sa2s07{margin-top:5px}.connected-post.svelte-sa2s07 .text .type.svelte-sa2s07{font-size:11px;letter-spacing:0.5px;text-transform:uppercase;margin-right:20px}.connected-post.svelte-sa2s07 .image.svelte-sa2s07{border:1px solid var(--foreground-color);max-height:400px;width:100%;line-height:0;overflow:hidden}.connected-post.svelte-sa2s07 .image img.svelte-sa2s07{min-height:200px;width:100%;height:100%;object-fit:cover}.connected-post.svelte-sa2s07 .image .big-title.svelte-sa2s07{font-size:32px;width:100%;padding:15px;padding-top:10px;min-height:200px;line-height:1.2em}.connected-post.svelte-sa2s07 .image.svelte-sa2s07:hover{background:#e0ded7;color:var(--hover-text-color)}.at-eyebeam.svelte-sa2s07.svelte-sa2s07{padding:20px;border-top:1px solid var(--foreground-color)}@media(max-width: 800px){.at-eyebeam.svelte-sa2s07.svelte-sa2s07{padding-left:0;padding-right:0}}.at-eyebeam.svelte-sa2s07 h2.svelte-sa2s07{margin-bottom:20px;margin-left:0}",
  map: null
};
const At_eyebeam = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  let { posts = [] } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css$1);
  {
    console.log("posts: ", posts);
  }
  return `
<div class="${"at-eyebeam svelte-sa2s07"}" id="${"at-eyebeam"}"><h2 class="${"svelte-sa2s07"}">At Eyebeam</h2>
	${(0, import_index_68ac15fd.h)(posts, (post) => {
    return `<a class="${"connected-post svelte-sa2s07"}"${(0, import_index_68ac15fd.a)("href", "/" + import_global_61b718ff.a[post._type] + "/" + post.slug.current, 0)} sveltekit:prefetch><div class="${"image svelte-sa2s07"}">${post.mainImage ? `<img${(0, import_index_68ac15fd.a)("alt", post.title, 0)} aria-describedby="${"desc"}"${(0, import_index_68ac15fd.a)("src", (0, import_sanity_59332496.u)(post.mainImage).quality(90).saturation(-100).width(400).url(), 0)} class="${"svelte-sa2s07"}">` : `<div class="${"big-title svelte-sa2s07"}">${(0, import_index_68ac15fd.e)(post.title)}</div>`}</div>
			<div class="${"text svelte-sa2s07"}"><span class="${"type svelte-sa2s07"}">${(0, import_index_68ac15fd.e)(import_global_61b718ff.b[post._type])}</span>
				<span class="${"title"}">${(0, import_index_68ac15fd.e)(post.title)}</span>
			</div></a>

				${post.mainImage ? `<span id="${"desc"}" class="${"svelte-sa2s07"}">${(0, import_index_68ac15fd.e)(post.mainImage.alt)}</span>` : ``}`;
  })}
</div>`;
});
var mainContent_svelte_svelte_type_style_lang = "";
const css = {
  code: ".main-content.svelte-lix96d.svelte-lix96d{width:calc((100% / 6) * 5);margin-bottom:120px}@media(max-width: 800px){.main-content.svelte-lix96d.svelte-lix96d{width:100%;margin-bottom:0}}.article.svelte-lix96d.svelte-lix96d{border:1px solid var(--foreground-color);min-height:100vh;display:inline-block;width:100%;padding-bottom:20px}@media(max-width: 800px){.article.svelte-lix96d.svelte-lix96d{border:unset}}.article.svelte-lix96d .header.svelte-lix96d{display:flex;justify-content:space-between;width:100%;overflow:hidden}@media(max-width: 800px){.article.svelte-lix96d .header.svelte-lix96d{display:block;margin-bottom:20px}}.article.svelte-lix96d .header h1.svelte-lix96d{margin-left:20px;margin-right:40px;margin-right:20px;margin-top:20px;margin-bottom:120px;line-height:1.1em}@media(max-width: 800px){.article.svelte-lix96d .header h1.svelte-lix96d{margin-left:0;margin-bottom:0;margin-bottom:20px}}.article.svelte-lix96d .header h1.long.svelte-lix96d{font-size:32px}.article.svelte-lix96d .header .quote.svelte-lix96d{margin:20px;font-size:16px}.article.svelte-lix96d .header .badges.svelte-lix96d{margin-top:20px;margin-bottom:20px;margin-left:20px}@media(max-width: 800px){.article.svelte-lix96d .header .badges.svelte-lix96d{margin-left:0}}.article.svelte-lix96d .header .badges .badge.svelte-lix96d{text-decoration:none;padding:8px 15px;background:var(--foreground-color);color:var(--background-color);text-transform:capitalize;font-size:11px;display:inline-block;margin-bottom:5px}.article.svelte-lix96d .header .date.svelte-lix96d{margin-left:20px;margin-right:40px;margin-bottom:20px}@media(max-width: 800px){.article.svelte-lix96d .header .date.svelte-lix96d{margin-left:0;margin-right:0}}.article.svelte-lix96d .header .authors.svelte-lix96d{margin-left:20px;margin-right:40px;margin-bottom:20px}@media(max-width: 800px){.article.svelte-lix96d .header .authors.svelte-lix96d{margin-left:0;margin-right:0}}.article.svelte-lix96d .header .image-container.svelte-lix96d{max-width:30%;min-width:30%;width:30%;max-height:400px;margin-right:20px}.article.svelte-lix96d .header .image-container img.svelte-lix96d{border:1px solid var(--foreground-color);max-height:100%;max-width:100%}@media(max-width: 800px){.article.svelte-lix96d .header .image-container.svelte-lix96d{width:100%;margin-right:0;margin:0;max-width:unset;min-width:unset}}.article.svelte-lix96d .header.boxed.svelte-lix96d{display:flex;border-bottom:1px solid var(--foreground-color)}@media(max-width: 800px){.article.svelte-lix96d .header.boxed.svelte-lix96d{height:auto;padding-bottom:40px}}.article.svelte-lix96d .header.boxed h1.svelte-lix96d{margin-bottom:20px}.article.svelte-lix96d .header.tight h1.svelte-lix96d{margin-bottom:40px}@media(max-width: 800px){.article.svelte-lix96d .header.tight h1.svelte-lix96d{margin-bottom:20px}}.transcript.svelte-lix96d.svelte-lix96d{margin-bottom:20px}.transcript.svelte-lix96d .transcript-button.svelte-lix96d{padding:15px;background:#e0ded7;display:inline-block;margin-left:20px;cursor:pointer;text-decoration:none}@media(max-width: 800px){.transcript.svelte-lix96d .transcript-button.svelte-lix96d{margin-left:0}}.bio.svelte-lix96d.svelte-lix96d{margin-top:20px}.website.svelte-lix96d.svelte-lix96d{margin-top:20px}.people.svelte-lix96d.svelte-lix96d{width:100%;padding:20px}@media(max-width: 800px){.people.svelte-lix96d.svelte-lix96d{padding-left:0;padding-right:0}}.people.svelte-lix96d h2.svelte-lix96d{margin-bottom:20px;padding-left:0;padding-right:0;margin-left:0}.people.svelte-lix96d .people-inner.svelte-lix96d{display:inline-block;width:100%}.people.svelte-lix96d .people-inner .people-link.svelte-lix96d{margin-bottom:20px;display:block;text-decoration:none;width:calc(50% - 8px);overflow:hidden;float:left}@media(max-width: 800px){.people.svelte-lix96d .people-inner .people-link.svelte-lix96d{width:100%}}.people.svelte-lix96d .people-inner .people-link.svelte-lix96d:nth-child(odd){margin-right:15px}.people.svelte-lix96d .people-inner .people-link .title.svelte-lix96d{font-size:16px;background:#e0ded7;margin-top:10px;display:inline-block;color:var(--special-text-color)}.people.svelte-lix96d .people-inner .people-link .image.svelte-lix96d{border:1px solid var(--foreground-color);width:100%;line-height:0}.people.svelte-lix96d .people-inner .people-link .image img.svelte-lix96d{width:100%;min-height:200px}.published-by.svelte-lix96d.svelte-lix96d,.date.svelte-lix96d.svelte-lix96d,.author.svelte-lix96d.svelte-lix96d,.including.svelte-lix96d.svelte-lix96d{font-style:italic;margin-left:20px;margin-right:40px;font-size:16px}@media(max-width: 800px){.published-by.svelte-lix96d.svelte-lix96d,.date.svelte-lix96d.svelte-lix96d,.author.svelte-lix96d.svelte-lix96d,.including.svelte-lix96d.svelte-lix96d{margin-left:0}}.including.svelte-lix96d.svelte-lix96d{margin-top:20px;margin-bottom:20px}.button.svelte-lix96d.svelte-lix96d{padding:20px;background:#e0ded7;display:inline-block;font-size:14px;margin-left:20px;margin-top:20px;text-decoration:none;color:var(--special-text-color)}@media(max-width: 800px){.button.svelte-lix96d.svelte-lix96d{margin-left:0}}.event-info.svelte-lix96d.svelte-lix96d{padding:15px;border:1px solid var(--foreground-color);font-size:14px;display:inline-block;margin-left:20px;min-width:300px;width:40%}@media(max-width: 800px){.event-info.svelte-lix96d.svelte-lix96d{margin-left:0;margin-right:0}}.event-info.svelte-lix96d .dates.svelte-lix96d{margin-bottom:20px}.event-info p{margin:0}.event-info h3{margin:0}",
  map: null
};
const Main_content = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
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
  return `<div class="${"main-content svelte-lix96d"}" tabindex="${"0"}"><article class="${"article svelte-lix96d"}">${page._type == "videoPost" ? `${(0, import_index_68ac15fd.v)(Video_player, "VideoPlayer").$$render($$result, { page }, {}, {})}` : `<header class="${[
    "header svelte-lix96d",
    (boxed ? "boxed" : "") + " " + (tight ? "tight" : "")
  ].join(" ").trim()}"><div>
					<h1 class="${["svelte-lix96d", page.title.length > 42 ? "long" : ""].join(" ").trim()}">${(0, import_index_68ac15fd.e)(page.title)}</h1>

					
					${page._type == "person" ? `<div class="${"badges svelte-lix96d"}">${page.role ? `<a${(0, import_index_68ac15fd.a)("href", "/people?filter=" + page.role, 0)} class="${"badge svelte-lix96d"}">${(0, import_index_68ac15fd.e)(import_global_61b718ff.r[page.role])}</a>` : ``}
							${page.groupTags ? `${(0, import_index_68ac15fd.h)(page.groupTags, (tag) => {
    return `<a href="${"/people"}" class="${"badge svelte-lix96d"}">${(0, import_index_68ac15fd.e)(tag.label)}</a>`;
  })}` : ``}</div>` : ``}

					
					${page.quote ? `<div class="${"quote svelte-lix96d"}">&quot;${(0, import_index_68ac15fd.e)(page.quote)}&quot;</div>` : ``}

					${page._type == "note" ? `
						<div class="${"date svelte-lix96d"}">${(0, import_index_68ac15fd.e)((0, import_global_61b718ff.e)(page._createdAt))}</div>
						
						${page.people && page.people.length > 0 ? `<div class="${"authors svelte-lix96d"}">by ${(0, import_index_68ac15fd.h)(page.people, (person) => {
    return `${(0, import_index_68ac15fd.v)(import_person_link_ca6b4a11.P, "PersonLink").$$render($$result, { person }, {}, {})}`;
  })}</div>` : ``}` : ``}
				${page._type == "press" || page._type == "news" ? `${page.source ? `<div class="${"published-by svelte-lix96d"}">Published by ${(0, import_index_68ac15fd.e)(page.source)}</div>
						<div class="${"date svelte-lix96d"}">${(0, import_index_68ac15fd.e)((0, import_global_61b718ff.l)(page._createdAt))}</div>` : ``}
						
						${page.author ? `<div class="${"author svelte-lix96d"}">${(0, import_index_68ac15fd.e)(page.author)}</div>` : ``}
			${page.externalLink ? `<a${(0, import_index_68ac15fd.a)("href", page.externalLink, 0)} class="${"button read-original svelte-lix96d"}" target="${"_blank"}">Read original article on ${(0, import_index_68ac15fd.e)(page.source)} ${(0, import_index_68ac15fd.v)(import_blocks_c75ee098.E, "ExternalLink").$$render($$result, {}, {}, {})}</a>` : ``}` : ``}

					
					${showIntroduction && (0, import_has.default)(page, "introduction.content", []) ? `<div>${(0, import_index_68ac15fd.v)(import_blocks_c75ee098.B, "Blocks").$$render($$result, { blocks: page.introduction.content }, {}, {})}</div>` : ``}</div>

				
				${(0, import_has.default)(page, "mainImage.asset") ? `<figure class="${"image-container svelte-lix96d"}"><img class="${"main-image svelte-lix96d"}"${(0, import_index_68ac15fd.a)("alt", page.mainImage.alt, 0)}${(0, import_index_68ac15fd.a)("src", (0, import_sanity_59332496.u)(page.mainImage).quality(90).saturation(-100).width(400).url(), 0)}>
						${(0, import_has.default)(page, "mainImage.caption.content") ? `<figcaption>${(0, import_index_68ac15fd.v)(import_blocks_c75ee098.B, "Blocks").$$render($$result, { blocks: page.mainImage.caption.content }, {}, {})}</figcaption>` : ``}</figure>` : ``}</header>`}

		
		${page._type === "event" ? `<div class="${"event-info svelte-lix96d"}">${page.startDate ? `<div class="${"dates svelte-lix96d"}"><h3>Dates</h3>
						${(0, import_index_68ac15fd.e)((0, import_global_61b718ff.l)(page.startDate))}</div>` : ``}
				${(0, import_has.default)(page, "location.content") ? `<div class="${"location"}"><h3>Location</h3>
						${(0, import_index_68ac15fd.v)(import_blocks_c75ee098.B, "Blocks").$$render($$result, { blocks: page.location.content }, {}, {})}</div>` : ``}</div>` : ``}

		
		${page._type === "press" || page._type === "news" ? `
			
			
			${page.people && page.people.length > 0 ? `<div class="${"including svelte-lix96d"}">Including:
					${(0, import_index_68ac15fd.h)(page.people, (person) => {
    return `${(0, import_index_68ac15fd.v)(import_person_link_ca6b4a11.P, "PersonLink").$$render($$result, { person }, {}, {})}`;
  })}</div>` : ``}
			
			${page.pdfFile ? `<a href="${""}" class="${"button download-pdf svelte-lix96d"}">Download as PDF</a>` : ``}
			` : ``}

		
		${page.website ? `<div class="${"website svelte-lix96d"}" id="${"website"}"><h3>Website</h3>
				<p><a${(0, import_index_68ac15fd.a)("href", page.website, 0)} target="${"_blank"}">${(0, import_index_68ac15fd.e)(page.website)} ${(0, import_index_68ac15fd.v)(import_blocks_c75ee098.E, "ExternalLink").$$render($$result, {}, {}, {})}</a></p></div>` : ``}

		
		${(0, import_has.default)(page, "bio.content") ? `<div class="${"bio svelte-lix96d"}" id="${"bio"}"><h3>Bio</h3>
				${(0, import_index_68ac15fd.v)(import_blocks_c75ee098.B, "Blocks").$$render($$result, { blocks: page.bio.content }, {}, {})}</div>` : ``}

		
		${(0, import_has.default)(page, "content.content") ? `${(0, import_index_68ac15fd.v)(import_blocks_c75ee098.B, "Blocks").$$render($$result, { blocks: page.content.content }, {}, {})}` : ``}

		
		${page.transcript && page.transcript.asset && page.transcript.asset._ref ? `<div class="${"transcript svelte-lix96d"}" id="${"transcript"}"><h2>Transcript</h2>
				<a${(0, import_index_68ac15fd.a)("href", page.transcriptUrl, 0)} target="${"_blank"}" class="${"transcript-button svelte-lix96d"}">Download transcript as .PDF
				</a></div>` : ``}

		
		${showPeople && (0, import_get.default)(page, "people", []).length > 0 ? `<div class="${"people svelte-lix96d"}" id="${"people"}"><h2 class="${"svelte-lix96d"}">People</h2>
				<div class="${"people-inner svelte-lix96d"}">${(0, import_index_68ac15fd.h)(page.people, (person) => {
    return `<a class="${"people-link svelte-lix96d"}"${(0, import_index_68ac15fd.a)("href", "/people/" + person.slug.current, 0)} sveltekit:prefetch><div class="${"image svelte-lix96d"}">${person.mainImage ? `<img${(0, import_index_68ac15fd.a)("alt", person.title, 0)}${(0, import_index_68ac15fd.a)("src", (0, import_sanity_59332496.u)(person.mainImage).quality(90).width(400).url(), 0)} class="${"svelte-lix96d"}">` : ``}</div>
							<div class="${"text"}"><span class="${"title svelte-lix96d"}">${(0, import_index_68ac15fd.e)(person.title)}</span></div>
						</a>`;
  })}</div></div>` : ``}

		
		${(0, import_get.default)(page, "connectedPosts", []).length > 0 ? `${(0, import_index_68ac15fd.v)(At_eyebeam, "AtEyebeam").$$render($$result, { posts: page.connectedPosts }, {}, {})}` : ``}

		
		${page.internalLinks || page.externalLinks ? `${(0, import_index_68ac15fd.v)(import_see_also_998afbc8.S, "SeeAlso").$$render($$result, {
    externalLinks: page.externalLinks,
    internalLinks: page.internalLinks
  }, {}, {})}` : ``}</article>

	
	${(0, import_index_68ac15fd.v)(import_bottom_bar_9ab2e699.B, "BottomBar").$$render($$result, { updatedAt: page._updatedAt }, {}, {})}
</div>`;
});
