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
  default: () => Everything
});
module.exports = __toCommonJS(stdin_exports);
var import_index_68ac15fd = require("../../../chunks/index-68ac15fd.js");
var import_global_61b718ff = require("../../../chunks/global-61b718ff.js");
var import_has = __toESM(require("lodash/has.js"));
var import_get = __toESM(require("lodash/get.js"));
var import_person_link_ca6b4a11 = require("../../../chunks/person-link-ca6b4a11.js");
var import_blocks_c75ee098 = require("../../../chunks/blocks-c75ee098.js");
var import_metadata_ef16be06 = require("../../../chunks/metadata-ef16be06.js");
var import_stores_2672c807 = require("../../../chunks/stores-2672c807.js");
var import_stores_25b712dd = require("../../../chunks/stores-25b712dd.js");
var import_slugify = require("slugify");
var import_date_fns = require("date-fns");
var import_core = require("@popperjs/core");
var import_sanity_59332496 = require("../../../chunks/sanity-59332496.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_get_video_id = require("get-video-id");
var import_truncate = require("lodash/truncate.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-lvpagv.svelte-lvpagv{background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit}.main-content.svelte-lvpagv.svelte-lvpagv{float:left;width:100%}.main-content.svelte-lvpagv .inner.svelte-lvpagv{border:1px solid var(--foreground-color);min-height:662px}.main-content.svelte-lvpagv .inner .header.svelte-lvpagv{width:100%;display:inline-block;border-bottom:1px solid var(--foreground-color)}.main-content.svelte-lvpagv .inner .header .description.svelte-lvpagv{margin-left:auto;margin-right:auto;margin-top:40px;margin-bottom:20px}.main-content.svelte-lvpagv .inner .header h1.svelte-lvpagv{margin-right:20px;margin-left:20px}.main-content.svelte-lvpagv .inner .header .filters.svelte-lvpagv{margin-top:40px;display:inline-block;margin-bottom:15px;margin-right:20px;margin-left:20px}.main-content.svelte-lvpagv .inner .header .filters .filter.svelte-lvpagv{padding:8px 15px;border:1px solid var(--foreground-color);margin-right:5px;float:left;user-select:none;cursor:pointer;font-size:11px}.main-content.svelte-lvpagv .inner .header .filters .filter.svelte-lvpagv:hover{background:var(--foreground-color);color:var(--background-color)}.main-content.svelte-lvpagv .inner .header .filters .filter.active.svelte-lvpagv{background:var(--foreground-color);color:var(--background-color)}.main-content.svelte-lvpagv .inner .single-post.svelte-lvpagv{padding:15px;border-bottom:1px solid var(--foreground-color);text-decoration:none;display:block;font-size:14px}.main-content.svelte-lvpagv .inner .single-post.svelte-lvpagv:last-child{border-bottom:unset}.main-content.svelte-lvpagv .inner .single-post.svelte-lvpagv:hover{background:#e0ded7;cursor:pointer;color:var(--hover-text-color)}.main-content.svelte-lvpagv .inner .single-post .top.svelte-lvpagv{width:100%;display:flex;justify-content:space-between}.main-content.svelte-lvpagv .inner .single-post .top .type.svelte-lvpagv{font-size:11px;text-transform:uppercase;letter-spacing:0.5px}.main-content.svelte-lvpagv .inner .single-post .top .date.svelte-lvpagv{float:right;margin-top:5px}.main-content.svelte-lvpagv .inner .single-post .title.svelte-lvpagv{margin-bottom:5px;font-size:20px}.main-content.svelte-lvpagv .inner .single-post .people.svelte-lvpagv{font-style:italic}",
  map: null
};
const Everything = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  let $pageStore, $$unsubscribe_pageStore;
  $$unsubscribe_pageStore = (0, import_index_68ac15fd.b)(import_stores_2672c807.p, (value) => $pageStore = value);
  let { page: page$1 } = $$props;
  let { posts } = $$props;
  const FILTERS = [
    { label: "Everything", value: "everything" },
    { label: "Programs", value: "program" },
    { label: "Events", value: "event" },
    { label: "Notes", value: "note" },
    { label: "Projects", value: "project" },
    { label: "Videos", value: "videoPost" },
    { label: "Press", value: "press" },
    { label: "News", value: "news" }
  ];
  let activeFilter = $pageStore.url.searchParams.get("filter") ? $pageStore.url.searchParams.get("filter") : "everything";
  let filteredPosts = [];
  if ($$props.page === void 0 && $$bindings.page && page$1 !== void 0)
    $$bindings.page(page$1);
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  {
    import_stores_25b712dd.b.set([]);
  }
  {
    {
      if (activeFilter === "everything") {
        filteredPosts = posts;
        history.replaceState({}, "", "/everything");
      } else {
        filteredPosts = posts.filter((p) => p._type === activeFilter);
        const url = new URL(window.location);
        url.searchParams.set("filter", activeFilter);
        history.replaceState({}, "", url);
      }
    }
  }
  $$unsubscribe_pageStore();
  return `
${(0, import_index_68ac15fd.v)(import_metadata_ef16be06.M, "Metadata").$$render($$result, { page: page$1 }, {}, {})}


<div class="${"main-content svelte-lvpagv"}"><div class="${"inner svelte-lvpagv"}"><header class="${"header svelte-lvpagv"}"><h1 class="${"svelte-lvpagv"}">${(0, import_index_68ac15fd.e)(page$1.title)}</h1>
			
			${(0, import_has.default)(page$1, "content.content") ? `<div class="${"description svelte-lvpagv"}">${(0, import_index_68ac15fd.v)(import_blocks_c75ee098.B, "Blocks").$$render($$result, { blocks: page$1.content.content }, {}, {})}</div>` : ``}
			<section class="${"filters svelte-lvpagv"}" role="${"option"}">${(0, import_index_68ac15fd.h)(FILTERS, (filter) => {
    return `<button class="${["filter svelte-lvpagv", activeFilter == filter.value ? "active" : ""].join(" ").trim()}"${(0, import_index_68ac15fd.a)("aria-label", "Filter by: " + filter.value, 0)}${(0, import_index_68ac15fd.a)("aria-selected", activeFilter == filter.value ? "true" : "false", 0)}>${(0, import_index_68ac15fd.e)(filter.label)}
					</button>`;
  })}</section></header>
		<section>${(0, import_index_68ac15fd.h)(filteredPosts, (post) => {
    return `<a${(0, import_index_68ac15fd.a)("href", "/" + import_global_61b718ff.a[post._type] + "/" + (0, import_get.default)(post, "slug.current"), 0)} class="${"single-post svelte-lvpagv"}"><div class="${"top svelte-lvpagv"}">
					<div class="${"type svelte-lvpagv"}">${(0, import_index_68ac15fd.e)(import_global_61b718ff.b[post._type])}</div>
					
					<div class="${"date svelte-lvpagv"}">${(0, import_index_68ac15fd.e)((0, import_global_61b718ff.l)(post._createdAt))}</div></div>
				
				<div class="${"title svelte-lvpagv"}">${(0, import_index_68ac15fd.e)(post.title)}</div>
				
				${post.people && post.people.length > 0 ? `<div class="${"people svelte-lvpagv"}">Including
						${(0, import_index_68ac15fd.h)(post.people, (person) => {
      return `${(0, import_index_68ac15fd.v)(import_person_link_ca6b4a11.P, "PersonLink").$$render($$result, { person }, {}, {})}`;
    })}
					</div>` : ``}
			</a>`;
  })}</section></div>
</div>`;
});
