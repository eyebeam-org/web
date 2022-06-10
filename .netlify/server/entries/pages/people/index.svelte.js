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
  default: () => People
});
module.exports = __toCommonJS(stdin_exports);
var import_index_68ac15fd = require("../../../chunks/index-68ac15fd.js");
var import_groupBy = __toESM(require("lodash/groupBy.js"));
var import_global_61b718ff = require("../../../chunks/global-61b718ff.js");
var import_bottom_bar_9ab2e699 = require("../../../chunks/bottom-bar-9ab2e699.js");
var import_person_link_ca6b4a11 = require("../../../chunks/person-link-ca6b4a11.js");
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
var import_has = require("lodash/has.js");
var import_get = require("lodash/get.js");
var import_truncate = require("lodash/truncate.js");
const css$1 = {
  code: "svg.svelte-grj5vd path.svelte-grj5vd{fill:var(--background-color)}svg.inverted.svelte-grj5vd path.svelte-grj5vd{fill:var(--foreground-color)}",
  map: null
};
const Arrow_down = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  let { inverted = false } = $$props;
  if ($$props.inverted === void 0 && $$bindings.inverted && inverted !== void 0)
    $$bindings.inverted(inverted);
  $$result.css.add(css$1);
  return `<svg width="${"9"}" height="${"8"}" viewBox="${"0 0 9 8"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${["svelte-grj5vd", inverted ? "inverted" : ""].join(" ").trim()}"><path d="${"M4.78393 7.78516L0.640486 0.608508L8.92737 0.608508L4.78393 7.78516Z"}" class="${"svelte-grj5vd"}"></path></svg>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-lkp3hv.svelte-lkp3hv{background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit}.main-content.svelte-lkp3hv.svelte-lkp3hv{float:left;width:100%}@media(max-width: 800px){.main-content.svelte-lkp3hv.svelte-lkp3hv{width:100%}}.main-content.svelte-lkp3hv .alphabetical-navigation.svelte-lkp3hv{background:var(--background-color);color:var(--foreground-color);display:flex;flex-direction:column;float:right;top:80px;right:100px;width:40px;user-select:none}@media(max-width: 800px){.main-content.svelte-lkp3hv .alphabetical-navigation.svelte-lkp3hv{display:none}}.main-content.svelte-lkp3hv .alphabetical-navigation .item.svelte-lkp3hv{height:40px;line-height:40px;text-align:center;display:block;width:40px;border-bottom:1px solid var(--foreground-color);border-left:1px solid var(--foreground-color);text-decoration:none;cursor:pointer}.main-content.svelte-lkp3hv .alphabetical-navigation .item.svelte-lkp3hv:hover{background:#e0ded7;color:var(--hover-text-color)}.main-content.svelte-lkp3hv .inner.svelte-lkp3hv{border:1px solid var(--foreground-color);min-height:100vh}.main-content.svelte-lkp3hv .inner .header.svelte-lkp3hv{border-bottom:1px solid var(--foreground-color);padding-left:15px;padding-right:15px;padding-bottom:20px}.main-content.svelte-lkp3hv .inner .header .order.svelte-lkp3hv{margin-top:15px;width:100%}.main-content.svelte-lkp3hv .inner .header .order .order-header.svelte-lkp3hv{font-style:italic;font-size:11px;margin-bottom:5px}.main-content.svelte-lkp3hv .inner .header .order .order-options.svelte-lkp3hv{display:flex}.main-content.svelte-lkp3hv .inner .header .order .order-options .order-option.svelte-lkp3hv{padding:8px 15px;margin-right:5px;border:1px solid var(--foreground-color);user-select:none;cursor:pointer;font-size:11px;color:var(--foreground-color)}.main-content.svelte-lkp3hv .inner .header .order .order-options .order-option .icon.svelte-lkp3hv{margin-left:5px}.main-content.svelte-lkp3hv .inner .header .order .order-options .order-option.svelte-lkp3hv:hover{background:var(--foreground-color);color:var(--background-color)}.main-content.svelte-lkp3hv .inner .header .order .order-options .order-option.active.svelte-lkp3hv{background:var(--foreground-color);color:var(--background-color)}@media(max-width: 800px){}.main-content.svelte-lkp3hv .inner .sub-section.svelte-lkp3hv{border-bottom:1px solid var(--foreground-color);padding:15px}.main-content.svelte-lkp3hv .inner .sub-section.svelte-lkp3hv:last-child{border-bottom:none}ul.svelte-lkp3hv.svelte-lkp3hv{padding:0}ul.svelte-lkp3hv li.svelte-lkp3hv{list-style:none;margin-bottom:5px;font-size:16px;padding-left:0;text-indent:0}ul.svelte-lkp3hv li.svelte-lkp3hv:before{content:unset;padding-right:0;position:static;top:unset}.supersized.svelte-lkp3hv.svelte-lkp3hv{font-size:54px}.accessibility-descriptor.svelte-lkp3hv.svelte-lkp3hv{position:absolute;width:1px;height:1px;right:1000000px}",
  map: null
};
const People = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  let $pageStore, $$unsubscribe_pageStore;
  $$unsubscribe_pageStore = (0, import_index_68ac15fd.b)(import_stores_2672c807.p, (value) => $pageStore = value);
  let { people } = $$props;
  (0, import_global_61b718ff.i)();
  const ALPHABET = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  let filteredPeople = [];
  let groupedPeopleAlpha = {};
  let activeFilter = $pageStore.url.searchParams.get("filter") ? $pageStore.url.searchParams.get("filter") : "everyone";
  if ($$props.people === void 0 && $$bindings.people && people !== void 0)
    $$bindings.people(people);
  $$result.css.add(css);
  {
    {
      if (activeFilter === "everyone") {
        filteredPeople = people;
        history.replaceState({}, "", "/artists");
      } else {
        filteredPeople = people.filter((p) => p.role === activeFilter);
        const url = new URL(window.location);
        url.searchParams.set("filter", activeFilter);
        history.replaceState({}, "", url);
      }
    }
  }
  {
    {
      groupedPeopleAlpha = (0, import_groupBy.default)(filteredPeople, (p) => p.lastName.charAt(0));
      (0, import_groupBy.default)(filteredPeople, (p) => p.firstEngagement);
    }
  }
  {
    import_stores_25b712dd.s.set("");
  }
  {
    import_stores_25b712dd.b.set([]);
  }
  $$unsubscribe_pageStore();
  return `
${(0, import_index_68ac15fd.v)(import_metadata_ef16be06.M, "Metadata").$$render($$result, { page: { title: "Artists" } }, {}, {})}

<div class="${"main-content svelte-lkp3hv"}"><div class="${"inner svelte-lkp3hv"}">${`
			<nav role="${"On this page"}" class="${"alphabetical-navigation svelte-lkp3hv"}"><h2 class="${"accessibility-descriptor svelte-lkp3hv"}">Jump to a letter of the alphabet</h2>
				${(0, import_index_68ac15fd.h)(ALPHABET, (alpha) => {
    return `<button class="${"item svelte-lkp3hv"}"${(0, import_index_68ac15fd.a)("aria-label", "Jump to the letter:" + alpha, 0)}>${(0, import_index_68ac15fd.e)(alpha)}
					</button>`;
  })}</nav>`}
		${``}

		
		<header class="${"header svelte-lkp3hv"}"><h1>Artists</h1>
			
			<nav class="${"order svelte-lkp3hv"}"><div class="${"order-header svelte-lkp3hv"}">Order by</div>
				<div class="${"order-options svelte-lkp3hv"}"><button class="${[
    "order-option alphabetical svelte-lkp3hv",
    "active"
  ].join(" ").trim()}" role="${"option"}"${(0, import_index_68ac15fd.a)("aria-selected", true, 0)}${(0, import_index_68ac15fd.a)("aria-label", "Filter by: alphabetical", 0)}>A-Z <span class="${"icon svelte-lkp3hv"}">${(0, import_index_68ac15fd.v)(Arrow_down, "ArrowDown").$$render($$result, {}, {}, {})}</span></button>
					<div class="${[
    "order-option chronological svelte-lkp3hv",
    ""
  ].join(" ").trim()}" role="${"option"}"${(0, import_index_68ac15fd.a)("aria-selected", false, 0)}${(0, import_index_68ac15fd.a)("aria-label", "Order by: chronological", 0)}>Year <span class="${"icon svelte-lkp3hv"}">${(0, import_index_68ac15fd.v)(Arrow_down, "ArrowDown").$$render($$result, {}, {}, {})}</span></div></div></nav>
			
</header>

		
		${`${(0, import_index_68ac15fd.h)(ALPHABET, (alpha) => {
    return `<section class="${"sub-section svelte-lkp3hv"}"${(0, import_index_68ac15fd.a)("id", alpha, 0)}><h2 class="${"supersized svelte-lkp3hv"}">${(0, import_index_68ac15fd.e)(alpha)}</h2>
					${groupedPeopleAlpha[alpha] ? `<ul class="${"svelte-lkp3hv"}">${(0, import_index_68ac15fd.h)(groupedPeopleAlpha[alpha], (person) => {
      return `<li class="${"svelte-lkp3hv"}">${(0, import_index_68ac15fd.v)(import_person_link_ca6b4a11.P, "PersonLink").$$render($$result, { person }, {}, {})}</li>`;
    })}
						</ul>` : ``}
				</section>`;
  })}`}
		${``}</div>

	
	${(0, import_index_68ac15fd.v)(import_bottom_bar_9ab2e699.B, "BottomBar").$$render($$result, {}, {}, {})}
</div>`;
});
