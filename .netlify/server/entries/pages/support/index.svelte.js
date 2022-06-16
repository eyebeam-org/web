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
  default: () => Support
});
module.exports = __toCommonJS(stdin_exports);
var import_index_68ac15fd = require("../../../chunks/index-68ac15fd.js");
var import_sanity_bf41d9e1 = require("../../../chunks/sanity-bf41d9e1.js");
var import_has = require("lodash/has.js");
var import_keyBy = __toESM(require("lodash/keyBy.js"));
var import_truncate = require("lodash/truncate.js");
var import_slugify = require("slugify");
var import_get = require("lodash/get.js");
var import_date_fns = require("date-fns");
var import_core = require("@popperjs/core");
var import_get_video_id = require("get-video-id");
var import_supportBlock_svelte = __toESM(require("./supportBlock.svelte.js"));
var import_bottom_bar_9ab2e699 = require("../../../chunks/bottom-bar-9ab2e699.js");
var import_stores_25b712dd = require("../../../chunks/stores-25b712dd.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_blocks_7e60b135 = require("../../../chunks/blocks-7e60b135.js");
var import_person_link_82d12ee3 = require("../../../chunks/person-link-82d12ee3.js");
var import_global_61b718ff = require("../../../chunks/global-61b718ff.js");
var import_stores_2672c807 = require("../../../chunks/stores-2672c807.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".row.svelte-1hkdb2p.svelte-1hkdb2p{display:flex;flex-flow:row wrap}.tile.svelte-1hkdb2p.svelte-1hkdb2p{padding:20px;overflow:hidden;width:50%;display:block;float:left}@media(max-width: 800px){.tile.svelte-1hkdb2p.svelte-1hkdb2p{width:100%;border:1px solid var(--foreground-color);border-top:none}.tile.svelte-1hkdb2p.svelte-1hkdb2p:first-child{border-top:1px solid var(--foreground-color)}}.main-content.svelte-1hkdb2p.svelte-1hkdb2p{float:left;width:100%}@media(max-width: 800px){.main-content.svelte-1hkdb2p.svelte-1hkdb2p{width:100%}}.main-content.svelte-1hkdb2p .inner.svelte-1hkdb2p{width:100%;border:1px solid var(--foreground-color);min-height:100vh;display:inline-block}@media(max-width: 800px){.main-content.svelte-1hkdb2p .inner.svelte-1hkdb2p{border:unset}}@media(max-width: 800px){}.header-photo.svelte-1hkdb2p.svelte-1hkdb2p{overflow:none;padding:0;min-height:440px;border-bottom:1px solid var(--foreground-color);border-right:1px solid var(--foreground-color);height:440px}.header-photo.svelte-1hkdb2p img.svelte-1hkdb2p{width:100%;height:100%;object-fit:cover}@media(max-width: 800px){}@media(max-width: 800px){}@media(max-width: 800px){}@media(max-width: 800px){}@media(max-width: 800px){}@media(max-width: 800px){}",
  map: null
};
const Support = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  let { about } = $$props;
  console.log("about", about);
  const aboutMap = (0, import_keyBy.default)(about, "_id");
  const ORDER = [
    [
      "volunteer",
      "supporters"
    ],
    ["contact"]
  ];
  const toc = [];
  if ($$props.about === void 0 && $$bindings.about && about !== void 0)
    $$bindings.about(about);
  $$result.css.add(css);
  {
    import_stores_25b712dd.s.set("Join Us");
  }
  {
    import_stores_25b712dd.b.set(toc);
  }
  return `


<div class="${"main-content svelte-1hkdb2p"}" tabindex="${"0"}"><div class="${"inner svelte-1hkdb2p"}"><div class="${"row svelte-1hkdb2p"}"><div class="${"tile header-photo svelte-1hkdb2p"}"><img src="${"eyebeambox.gif"}" alt="${"A gif of a black box with the word 'Eyebeam' on each face, slowly rotating"}" class="${"svelte-1hkdb2p"}"></div>
				${(0, import_index_68ac15fd.v)(import_supportBlock_svelte.default, "SupportBlock").$$render($$result, { section: "donate", aboutMap }, {}, {})}</div>

		${(0, import_index_68ac15fd.h)(ORDER, (section, i) => {
    return `<div class="${"row svelte-1hkdb2p"}">${(0, import_index_68ac15fd.v)(import_supportBlock_svelte.default, "SupportBlock").$$render($$result, { section: section[0], aboutMap }, {}, {})}
				${section.length > 1 ? `${(0, import_index_68ac15fd.v)(import_supportBlock_svelte.default, "SupportBlock").$$render($$result, { section: section[1], aboutMap }, {}, {})}` : ``}
			</div>`;
  })}</div>

	
	${(0, import_index_68ac15fd.v)(import_bottom_bar_9ab2e699.B, "BottomBar").$$render($$result, {}, {}, {})}
</div>`;
});
