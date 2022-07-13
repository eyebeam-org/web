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
  default: () => Everything,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_277e1cdb = require("../../../chunks/index-277e1cdb.js");
var import_global_eadaa9b6 = require("../../../chunks/global-eadaa9b6.js");
var import_has = __toESM(require("lodash/has.js"));
var import_get = __toESM(require("lodash/get.js"));
var import_blocks_9c29c100 = require("../../../chunks/blocks-9c29c100.js");
var import_metadata_08e68bb9 = require("../../../chunks/metadata-08e68bb9.js");
var import_stores_b7bb0fad = require("../../../chunks/stores-b7bb0fad.js");
var import_stores_f9761b8b = require("../../../chunks/stores-f9761b8b.js");
var import_slugify = require("slugify");
var import_date_fns = require("date-fns");
var import_core = require("@popperjs/core");
var import_sanity_bfd50d1d = require("../../../chunks/sanity-bfd50d1d.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_get_video_id = require("get-video-id");
var import_truncate = require("lodash/truncate.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-ne7u20.svelte-ne7u20{background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit}.main-content.svelte-ne7u20.svelte-ne7u20{float:left;width:100%}.main-content.svelte-ne7u20 .inner.svelte-ne7u20{border:1px solid var(--foreground-color);min-height:662px}.main-content.svelte-ne7u20 .inner .header.svelte-ne7u20{width:100%;display:inline-block;border-bottom:1px solid var(--foreground-color)}.main-content.svelte-ne7u20 .inner .header .description.svelte-ne7u20{margin-left:auto;margin-right:auto;margin-top:40px;margin-bottom:20px}.main-content.svelte-ne7u20 .inner .header h1.svelte-ne7u20{margin-right:20px;margin-left:20px}.main-content.svelte-ne7u20 .inner .header .filters.svelte-ne7u20{margin-top:40px;display:inline-block;margin-bottom:15px;margin-right:20px;margin-left:20px}.main-content.svelte-ne7u20 .inner .header .filters .filter.svelte-ne7u20{padding:8px 15px;border:1px solid var(--foreground-color);margin-right:5px;float:left;user-select:none;cursor:pointer;font-size:11px}@media(max-width: 800px), screen and (orientation: portrait){.main-content.svelte-ne7u20 .inner .header .filters .filter.svelte-ne7u20{margin-top:8px}}.main-content.svelte-ne7u20 .inner .header .filters .filter.svelte-ne7u20:hover{background:var(--foreground-color);color:var(--background-color)}.main-content.svelte-ne7u20 .inner .header .filters .filter.active.svelte-ne7u20{background:var(--foreground-color);color:var(--background-color)}.main-content.svelte-ne7u20 .inner .single-post.svelte-ne7u20{padding:15px;border-bottom:1px solid var(--foreground-color);text-decoration:none;display:block;font-size:14px}.main-content.svelte-ne7u20 .inner .single-post.svelte-ne7u20:last-child{border-bottom:unset}.main-content.svelte-ne7u20 .inner .single-post.svelte-ne7u20:hover{background:#e0ded7;cursor:pointer;color:var(--hover-text-color)}.main-content.svelte-ne7u20 .inner .single-post .top.svelte-ne7u20{width:100%;display:flex;justify-content:space-between}.main-content.svelte-ne7u20 .inner .single-post .top .type.svelte-ne7u20{font-size:11px;text-transform:uppercase;letter-spacing:0.5px}.main-content.svelte-ne7u20 .inner .single-post .top .date.svelte-ne7u20{float:right;margin-top:5px}.main-content.svelte-ne7u20 .inner .single-post .title.svelte-ne7u20{margin-bottom:5px;font-size:20px}.main-content.svelte-ne7u20 .inner .single-post .people.svelte-ne7u20{font-style:italic}",
  map: null
};
const prerender = false;
const Everything = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let $pageStore, $$unsubscribe_pageStore;
  $$unsubscribe_pageStore = (0, import_index_277e1cdb.b)(import_stores_b7bb0fad.p, (value) => $pageStore = value);
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
  let filteredPosts = [];
  let activeFilter = $pageStore.url.searchParams.get("filter") && $pageStore.url.searchParams.get("filter") != void 0 ? $pageStore.url.searchParams.get("filter") : "everything";
  if ($$props.page === void 0 && $$bindings.page && page$1 !== void 0)
    $$bindings.page(page$1);
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  {
    import_stores_f9761b8b.s.set([]);
  }
  $$unsubscribe_pageStore();
  return `
${(0, import_index_277e1cdb.v)(import_metadata_08e68bb9.M, "Metadata").$$render($$result, { page: page$1 }, {}, {})}


<div class="${"main-content svelte-ne7u20"}"><div class="${"inner svelte-ne7u20"}"><header class="${"header svelte-ne7u20"}"><h1 class="${"svelte-ne7u20"}">${(0, import_index_277e1cdb.e)(page$1.title)}</h1>
			
			${(0, import_has.default)(page$1, "content.content") ? `<div class="${"description svelte-ne7u20"}">${(0, import_index_277e1cdb.v)(import_blocks_9c29c100.B, "Blocks").$$render($$result, { blocks: page$1.content.content }, {}, {})}</div>` : ``}
			<section class="${"filters svelte-ne7u20"}" role="${"option"}">${(0, import_index_277e1cdb.d)(FILTERS, (filter) => {
    return `<button class="${["filter svelte-ne7u20", activeFilter == filter.value ? "active" : ""].join(" ").trim()}"${(0, import_index_277e1cdb.a)("aria-label", "Filter by: " + filter.value, 0)}${(0, import_index_277e1cdb.a)("aria-selected", activeFilter == filter.value ? "true" : "false", 0)}>${(0, import_index_277e1cdb.e)(filter.label)}
					</button>`;
  })}</section></header>
		<section>${(0, import_index_277e1cdb.d)(filteredPosts, (post) => {
    return `<a${(0, import_index_277e1cdb.a)("href", "/" + import_global_eadaa9b6.a[post._type] + "/" + (0, import_get.default)(post, "slug.current"), 0)} class="${"single-post svelte-ne7u20"}"><div class="${"top svelte-ne7u20"}">
					<div class="${"type svelte-ne7u20"}">${(0, import_index_277e1cdb.e)(import_global_eadaa9b6.b[post._type])}</div>
					
					<div class="${"date svelte-ne7u20"}">${(0, import_index_277e1cdb.e)((0, import_global_eadaa9b6.l)(post._createdAt))}</div></div>
				
				<div class="${"title svelte-ne7u20"}">${(0, import_index_277e1cdb.e)(post.title)}</div>
				
				${post.people && post.people.length > 0 ? `<div class="${"people svelte-ne7u20"}">Including
						${(0, import_index_277e1cdb.d)(post.people, (person) => {
      return `${(0, import_index_277e1cdb.v)(import_blocks_9c29c100.a, "PersonLink").$$render($$result, { person }, {}, {})}`;
    })}
					</div>` : ``}
			</a>`;
  })}</section></div>
</div>`;
});
