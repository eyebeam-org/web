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
  router: () => router
});
module.exports = __toCommonJS(stdin_exports);
var import_index_277e1cdb = require("../../../chunks/index-277e1cdb.js");
var import_groupBy = __toESM(require("lodash/groupBy.js"));
var import_has = require("lodash/has.js");
var import_global_eadaa9b6 = require("../../../chunks/global-eadaa9b6.js");
var import_bottom_bar_168e682a = require("../../../chunks/bottom-bar-168e682a.js");
var import_blocks_9c29c100 = require("../../../chunks/blocks-9c29c100.js");
var import_metadata_08e68bb9 = require("../../../chunks/metadata-08e68bb9.js");
var import_stores_f9761b8b = require("../../../chunks/stores-f9761b8b.js");
var import_slugify = require("slugify");
var import_date_fns = require("date-fns");
var import_get = require("lodash/get.js");
var import_core = require("@popperjs/core");
var import_sanity_bfd50d1d = require("../../../chunks/sanity-bfd50d1d.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_get_video_id = require("get-video-id");
var import_truncate = require("lodash/truncate.js");
var import_stores_b7bb0fad = require("../../../chunks/stores-b7bb0fad.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-1eu4bly.svelte-1eu4bly{background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit}.main-content.svelte-1eu4bly.svelte-1eu4bly{float:left;width:100%}@media(max-width: 800px), screen and (orientation: portrait){.main-content.svelte-1eu4bly.svelte-1eu4bly{width:100%}}.main-content.svelte-1eu4bly .alphabetical-navigation.svelte-1eu4bly{background:var(--background-color);color:var(--foreground-color);display:flex;flex-direction:column;float:right;top:80px;right:100px;width:40px;user-select:none}@media(max-width: 800px), screen and (orientation: portrait){.main-content.svelte-1eu4bly .alphabetical-navigation.svelte-1eu4bly{display:none}}.main-content.svelte-1eu4bly .alphabetical-navigation .item.svelte-1eu4bly{height:40px;line-height:40px;text-align:center;display:block;width:40px;border-bottom:1px solid var(--foreground-color);border-left:1px solid var(--foreground-color);text-decoration:none;cursor:pointer}.main-content.svelte-1eu4bly .alphabetical-navigation .item.svelte-1eu4bly:hover{background:#e0ded7;color:var(--hover-text-color)}.main-content.svelte-1eu4bly .inner.svelte-1eu4bly{border:1px solid var(--foreground-color);min-height:100vh}.main-content.svelte-1eu4bly .inner .header.svelte-1eu4bly{border-bottom:1px solid var(--foreground-color);padding-left:15px;padding-right:15px;padding-bottom:20px}@media(max-width: 800px), screen and (orientation: portrait){}.main-content.svelte-1eu4bly .inner .sub-section.svelte-1eu4bly{border-bottom:1px solid var(--foreground-color);padding:15px}.main-content.svelte-1eu4bly .inner .sub-section.svelte-1eu4bly:last-child{border-bottom:none}ul.svelte-1eu4bly.svelte-1eu4bly{padding:0}ul.svelte-1eu4bly li.svelte-1eu4bly{list-style:none;margin-bottom:5px;font-size:16px;padding-left:0;text-indent:0}ul.svelte-1eu4bly li.svelte-1eu4bly:before{content:unset;padding-right:0;position:static;top:unset}.supersized.svelte-1eu4bly.svelte-1eu4bly{font-size:54px}.accessibility-descriptor.svelte-1eu4bly.svelte-1eu4bly{position:absolute;width:1px;height:1px;right:1000000px}.description.svelte-1eu4bly.svelte-1eu4bly{margin-left:auto;margin-right:20px;margin-top:40px;margin-bottom:20px}",
  map: null
};
const router = false;
const People = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { people } = $$props;
  let pageData = {
    children: [
      {
        text: "Eyebeam is in the process of uploading an archive of all our artists and their work over the years. If you see something that doesn't look right, please contact us at "
      },
      { text: "info@eyebeam.org.", marks: ["0"] }
    ],
    markDefs: [
      {
        _key: "0",
        _type: "link",
        href: "mailto:info@eyebeam.org"
      }
    ]
  };
  (0, import_global_eadaa9b6.i)();
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
  const flagEmpty = (person) => {
    if (person.bio == void 0 || person.bio.content == void 0 || person.bio.content[0].children == void 0 || person.bio.content[0].children.length <= 1 && person.bio.content[0].children[0].text === "") {
      person.isEmpty = true;
    }
    return person;
  };
  if ($$props.people === void 0 && $$bindings.people && people !== void 0)
    $$bindings.people(people);
  $$result.css.add(css);
  {
    {
      {
        filteredPeople = people.map(flagEmpty);
        console.log("people: ", filteredPeople);
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
    import_stores_f9761b8b.a.set("");
  }
  {
    import_stores_f9761b8b.s.set([]);
  }
  return `
${(0, import_index_277e1cdb.v)(import_metadata_08e68bb9.M, "Metadata").$$render($$result, { page: { title: "Artists" } }, {}, {})}

<div class="${"main-content svelte-1eu4bly"}"><div class="${"inner svelte-1eu4bly"}">${`
			<nav role="${"On this page"}" class="${"alphabetical-navigation svelte-1eu4bly"}"><h2 class="${"accessibility-descriptor svelte-1eu4bly"}">Jump to a letter of the alphabet</h2>
				${(0, import_index_277e1cdb.d)(ALPHABET, (alpha) => {
    return `<button class="${"item svelte-1eu4bly"}"${(0, import_index_277e1cdb.a)("aria-label", "Jump to the letter:" + alpha, 0)}>${(0, import_index_277e1cdb.e)(alpha)}
					</button>`;
  })}</nav>`}
		${``}

		
		<header class="${"header svelte-1eu4bly"}"><h1>Artists</h1>
			<div class="${"description svelte-1eu4bly"}">${(0, import_index_277e1cdb.v)(import_blocks_9c29c100.L, "LogoBlock").$$render($$result, { b: pageData }, {}, {})}</div>


			

			
</header>

		
		${`${(0, import_index_277e1cdb.d)(ALPHABET, (alpha) => {
    return `<section class="${"sub-section svelte-1eu4bly"}"${(0, import_index_277e1cdb.a)("id", alpha, 0)}><h2 class="${"supersized svelte-1eu4bly"}">${(0, import_index_277e1cdb.e)(alpha)}</h2>
					${groupedPeopleAlpha[alpha] ? `<ul class="${"svelte-1eu4bly"}">${(0, import_index_277e1cdb.d)(groupedPeopleAlpha[alpha], (person) => {
      return `${!person.isEmpty ? `<li class="${"svelte-1eu4bly"}">${(0, import_index_277e1cdb.v)(import_blocks_9c29c100.a, "PersonLink").$$render($$result, { person }, {}, {})}</li>` : `<li class="${"svelte-1eu4bly"}">${(0, import_index_277e1cdb.e)(person.title)}</li>`}`;
    })}
						</ul>` : ``}
				</section>`;
  })}`}
		${``}</div>

	
	${(0, import_index_277e1cdb.v)(import_bottom_bar_168e682a.B, "BottomBar").$$render($$result, {}, {}, {})}
</div>`;
});
