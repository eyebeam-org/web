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
var import_person_link_eed93e98 = require("../../../chunks/person-link-eed93e98.js");
var import_blocks_11eda655 = require("../../../chunks/blocks-11eda655.js");
var import_metadata_a699f85e = require("../../../chunks/metadata-a699f85e.js");
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
  code: "button.svelte-1ox3jy3.svelte-1ox3jy3{background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit}.main-content.svelte-1ox3jy3.svelte-1ox3jy3{float:left;width:100%}.main-content.svelte-1ox3jy3 .inner.svelte-1ox3jy3{border:1px solid var(--foreground-color);min-height:662px}.main-content.svelte-1ox3jy3 .inner .header.svelte-1ox3jy3{width:100%;display:inline-block;border-bottom:1px solid var(--foreground-color)}.main-content.svelte-1ox3jy3 .inner .header .description.svelte-1ox3jy3{margin-left:auto;margin-right:auto;margin-top:40px;margin-bottom:20px}.main-content.svelte-1ox3jy3 .inner .header h1.svelte-1ox3jy3{margin-right:20px;margin-left:20px}.main-content.svelte-1ox3jy3 .inner .header .filters.svelte-1ox3jy3{margin-top:40px;display:inline-block;margin-bottom:15px;margin-right:20px;margin-left:20px}.main-content.svelte-1ox3jy3 .inner .header .filters .filter.svelte-1ox3jy3{padding:8px 15px;border:1px solid var(--foreground-color);margin-right:5px;float:left;user-select:none;cursor:pointer;font-size:11px}@media(max-width: 800px){.main-content.svelte-1ox3jy3 .inner .header .filters .filter.svelte-1ox3jy3{margin-top:8px}}.main-content.svelte-1ox3jy3 .inner .header .filters .filter.svelte-1ox3jy3:hover{background:var(--foreground-color);color:var(--background-color)}.main-content.svelte-1ox3jy3 .inner .header .filters .filter.active.svelte-1ox3jy3{background:var(--foreground-color);color:var(--background-color)}.main-content.svelte-1ox3jy3 .inner .single-post.svelte-1ox3jy3{padding:15px;border-bottom:1px solid var(--foreground-color);text-decoration:none;display:block;font-size:14px}.main-content.svelte-1ox3jy3 .inner .single-post.svelte-1ox3jy3:last-child{border-bottom:unset}.main-content.svelte-1ox3jy3 .inner .single-post.svelte-1ox3jy3:hover{background:#e0ded7;cursor:pointer;color:var(--hover-text-color)}.main-content.svelte-1ox3jy3 .inner .single-post .top.svelte-1ox3jy3{width:100%;display:flex;justify-content:space-between}.main-content.svelte-1ox3jy3 .inner .single-post .top .type.svelte-1ox3jy3{font-size:11px;text-transform:uppercase;letter-spacing:0.5px}.main-content.svelte-1ox3jy3 .inner .single-post .top .date.svelte-1ox3jy3{float:right;margin-top:5px}.main-content.svelte-1ox3jy3 .inner .single-post .title.svelte-1ox3jy3{margin-bottom:5px;font-size:20px}.main-content.svelte-1ox3jy3 .inner .single-post .people.svelte-1ox3jy3{font-style:italic}",
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
${(0, import_index_68ac15fd.v)(import_metadata_a699f85e.M, "Metadata").$$render($$result, { page: page$1 }, {}, {})}


<div class="${"main-content svelte-1ox3jy3"}"><div class="${"inner svelte-1ox3jy3"}"><header class="${"header svelte-1ox3jy3"}"><h1 class="${"svelte-1ox3jy3"}">${(0, import_index_68ac15fd.e)(page$1.title)}</h1>
			
			${(0, import_has.default)(page$1, "content.content") ? `<div class="${"description svelte-1ox3jy3"}">${(0, import_index_68ac15fd.v)(import_blocks_11eda655.B, "Blocks").$$render($$result, { blocks: page$1.content.content }, {}, {})}</div>` : ``}
			<section class="${"filters svelte-1ox3jy3"}" role="${"option"}">${(0, import_index_68ac15fd.h)(FILTERS, (filter) => {
    return `<button class="${["filter svelte-1ox3jy3", activeFilter == filter.value ? "active" : ""].join(" ").trim()}"${(0, import_index_68ac15fd.a)("aria-label", "Filter by: " + filter.value, 0)}${(0, import_index_68ac15fd.a)("aria-selected", activeFilter == filter.value ? "true" : "false", 0)}>${(0, import_index_68ac15fd.e)(filter.label)}
					</button>`;
  })}</section></header>
		<section>${(0, import_index_68ac15fd.h)(filteredPosts, (post) => {
    return `<a${(0, import_index_68ac15fd.a)("href", "/" + import_global_61b718ff.a[post._type] + "/" + (0, import_get.default)(post, "slug.current"), 0)} class="${"single-post svelte-1ox3jy3"}"><div class="${"top svelte-1ox3jy3"}">
					<div class="${"type svelte-1ox3jy3"}">${(0, import_index_68ac15fd.e)(import_global_61b718ff.b[post._type])}</div>
					
					<div class="${"date svelte-1ox3jy3"}">${(0, import_index_68ac15fd.e)((0, import_global_61b718ff.l)(post._createdAt))}</div></div>
				
				<div class="${"title svelte-1ox3jy3"}">${(0, import_index_68ac15fd.e)(post.title)}</div>
				
				${post.people && post.people.length > 0 ? `<div class="${"people svelte-1ox3jy3"}">Including
						${(0, import_index_68ac15fd.h)(post.people, (person) => {
      return `${(0, import_index_68ac15fd.v)(import_person_link_eed93e98.P, "PersonLink").$$render($$result, { person }, {}, {})}`;
    })}
					</div>` : ``}
			</a>`;
  })}</section></div>
</div>`;
});
