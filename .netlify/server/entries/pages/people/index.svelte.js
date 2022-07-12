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
  default: () => People,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_277e1cdb = require("../../../chunks/index-277e1cdb.js");
var import_groupBy = __toESM(require("lodash/groupBy.js"));
var import_global_61b718ff = require("../../../chunks/global-61b718ff.js");
var import_bottom_bar_2d2f7e63 = require("../../../chunks/bottom-bar-2d2f7e63.js");
var import_person_link_7a5675bf = require("../../../chunks/person-link-7a5675bf.js");
var import_metadata_2f61a1e2 = require("../../../chunks/metadata-2f61a1e2.js");
var import_stores_b7bb0fad = require("../../../chunks/stores-b7bb0fad.js");
var import_stores_effda588 = require("../../../chunks/stores-effda588.js");
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
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-lkp3hv.svelte-lkp3hv{background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit}.main-content.svelte-lkp3hv.svelte-lkp3hv{float:left;width:100%}@media(max-width: 800px){.main-content.svelte-lkp3hv.svelte-lkp3hv{width:100%}}.main-content.svelte-lkp3hv .alphabetical-navigation.svelte-lkp3hv{background:var(--background-color);color:var(--foreground-color);display:flex;flex-direction:column;float:right;top:80px;right:100px;width:40px;user-select:none}@media(max-width: 800px){.main-content.svelte-lkp3hv .alphabetical-navigation.svelte-lkp3hv{display:none}}.main-content.svelte-lkp3hv .alphabetical-navigation .item.svelte-lkp3hv{height:40px;line-height:40px;text-align:center;display:block;width:40px;border-bottom:1px solid var(--foreground-color);border-left:1px solid var(--foreground-color);text-decoration:none;cursor:pointer}.main-content.svelte-lkp3hv .alphabetical-navigation .item.svelte-lkp3hv:hover{background:#e0ded7;color:var(--hover-text-color)}.main-content.svelte-lkp3hv .inner.svelte-lkp3hv{border:1px solid var(--foreground-color);min-height:100vh}.main-content.svelte-lkp3hv .inner .header.svelte-lkp3hv{border-bottom:1px solid var(--foreground-color);padding-left:15px;padding-right:15px;padding-bottom:20px}@media(max-width: 800px){}.main-content.svelte-lkp3hv .inner .sub-section.svelte-lkp3hv{border-bottom:1px solid var(--foreground-color);padding:15px}.main-content.svelte-lkp3hv .inner .sub-section.svelte-lkp3hv:last-child{border-bottom:none}ul.svelte-lkp3hv.svelte-lkp3hv{padding:0}ul.svelte-lkp3hv li.svelte-lkp3hv{list-style:none;margin-bottom:5px;font-size:16px;padding-left:0;text-indent:0}ul.svelte-lkp3hv li.svelte-lkp3hv:before{content:unset;padding-right:0;position:static;top:unset}.supersized.svelte-lkp3hv.svelte-lkp3hv{font-size:54px}.accessibility-descriptor.svelte-lkp3hv.svelte-lkp3hv{position:absolute;width:1px;height:1px;right:1000000px}",
  map: null
};
const prerender = false;
const People = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let $pageStore, $$unsubscribe_pageStore;
  $$unsubscribe_pageStore = (0, import_index_277e1cdb.b)(import_stores_b7bb0fad.p, (value) => $pageStore = value);
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
        console.log('people:"');
        filteredPeople = people;
      } else {
        filteredPeople = people.filter((p) => p.role === activeFilter);
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
    import_stores_effda588.a.set("");
  }
  {
    import_stores_effda588.s.set([]);
  }
  $$unsubscribe_pageStore();
  return `
${(0, import_index_277e1cdb.v)(import_metadata_2f61a1e2.M, "Metadata").$$render($$result, { page: { title: "Artists" } }, {}, {})}

<div class="${"main-content svelte-lkp3hv"}"><div class="${"inner svelte-lkp3hv"}">${`
			<nav role="${"On this page"}" class="${"alphabetical-navigation svelte-lkp3hv"}"><h2 class="${"accessibility-descriptor svelte-lkp3hv"}">Jump to a letter of the alphabet</h2>
				${(0, import_index_277e1cdb.d)(ALPHABET, (alpha) => {
    return `<button class="${"item svelte-lkp3hv"}"${(0, import_index_277e1cdb.a)("aria-label", "Jump to the letter:" + alpha, 0)}>${(0, import_index_277e1cdb.e)(alpha)}
					</button>`;
  })}</nav>`}
		${``}

		
		<header class="${"header svelte-lkp3hv"}"><h1>Artists</h1>
			

			
</header>

		
		${`${(0, import_index_277e1cdb.d)(ALPHABET, (alpha) => {
    return `<section class="${"sub-section svelte-lkp3hv"}"${(0, import_index_277e1cdb.a)("id", alpha, 0)}><h2 class="${"supersized svelte-lkp3hv"}">${(0, import_index_277e1cdb.e)(alpha)}</h2>
					${groupedPeopleAlpha[alpha] ? `<ul class="${"svelte-lkp3hv"}">${(0, import_index_277e1cdb.d)(groupedPeopleAlpha[alpha], (person) => {
      return `<li class="${"svelte-lkp3hv"}">${(0, import_index_277e1cdb.v)(import_person_link_7a5675bf.P, "PersonLink").$$render($$result, { person }, {}, {})}</li>`;
    })}
						</ul>` : ``}
				</section>`;
  })}`}
		${``}</div>

	
	${(0, import_index_277e1cdb.v)(import_bottom_bar_2d2f7e63.B, "BottomBar").$$render($$result, {}, {}, {})}
</div>`;
});
