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
  default: () => Support,
  router: () => router
});
module.exports = __toCommonJS(stdin_exports);
var import_index_277e1cdb = require("../../../chunks/index-277e1cdb.js");
var import_sanity_bfd50d1d = require("../../../chunks/sanity-bfd50d1d.js");
var import_has = require("lodash/has.js");
var import_keyBy = __toESM(require("lodash/keyBy.js"));
var import_truncate = require("lodash/truncate.js");
var import_slugify = require("slugify");
var import_get = require("lodash/get.js");
var import_date_fns = require("date-fns");
var import_core = require("@popperjs/core");
var import_get_video_id = require("get-video-id");
var import_supportBlock_svelte = __toESM(require("./supportBlock.svelte.js"));
var import_bottom_bar_168e682a = require("../../../chunks/bottom-bar-168e682a.js");
var import_stores_f9761b8b = require("../../../chunks/stores-f9761b8b.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_blocks_9c29c100 = require("../../../chunks/blocks-9c29c100.js");
var import_global_eadaa9b6 = require("../../../chunks/global-eadaa9b6.js");
var import_arrow_link_ef752029 = require("../../../chunks/arrow-link-ef752029.js");
var import_stores_b7bb0fad = require("../../../chunks/stores-b7bb0fad.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".row.svelte-1j8e4rt.svelte-1j8e4rt{display:flex;flex-flow:row wrap}.tile.svelte-1j8e4rt.svelte-1j8e4rt{padding:20px;overflow:hidden;width:50%;display:block;float:left}@media(max-width: 800px), screen and (orientation: portrait){.tile.svelte-1j8e4rt.svelte-1j8e4rt{width:100%;border:1px solid var(--foreground-color);border-top:none}.tile.svelte-1j8e4rt.svelte-1j8e4rt:first-child{border-top:1px solid var(--foreground-color)}}.main-content.svelte-1j8e4rt.svelte-1j8e4rt{float:left;width:100%}@media(max-width: 800px), screen and (orientation: portrait){.main-content.svelte-1j8e4rt.svelte-1j8e4rt{width:100%}}.main-content.svelte-1j8e4rt .inner.svelte-1j8e4rt{width:100%;border:1px solid var(--foreground-color);min-height:100vh;display:inline-block}@media(max-width: 800px), screen and (orientation: portrait){.main-content.svelte-1j8e4rt .inner.svelte-1j8e4rt{border:unset}}@media(max-width: 800px), screen and (orientation: portrait){}.header-photo.svelte-1j8e4rt.svelte-1j8e4rt{overflow:none;padding:0;min-height:440px;border-bottom:1px solid var(--foreground-color);border-right:1px solid var(--foreground-color);height:440px}.header-photo.svelte-1j8e4rt img.svelte-1j8e4rt{width:100%;height:100%;object-fit:cover}@media(max-width: 800px), screen and (orientation: portrait){}@media(max-width: 800px), screen and (orientation: portrait){}@media(max-width: 800px), screen and (orientation: portrait){}@media(max-width: 800px), screen and (orientation: portrait){}@media(max-width: 800px), screen and (orientation: portrait){}@media(max-width: 800px), screen and (orientation: portrait){}",
  map: null
};
const router = false;
const Support = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  const router2 = false;
  let { about } = $$props;
  console.log("about", about);
  const aboutMap = (0, import_keyBy.default)(about, "_id");
  const ORDER = [["volunteer", "supporters"], ["contact"]];
  const toc = [];
  if ($$props.router === void 0 && $$bindings.router && router2 !== void 0)
    $$bindings.router(router2);
  if ($$props.about === void 0 && $$bindings.about && about !== void 0)
    $$bindings.about(about);
  $$result.css.add(css);
  {
    import_stores_f9761b8b.a.set("Join Us");
  }
  {
    import_stores_f9761b8b.s.set(toc);
  }
  return `


<div class="${"main-content svelte-1j8e4rt"}" tabindex="${"0"}"><div class="${"inner svelte-1j8e4rt"}"><div class="${"row svelte-1j8e4rt"}"><div class="${"tile header-photo svelte-1j8e4rt"}"><img src="${"eyebeambox.gif"}" alt="${"A gif of a black box with the word 'Eyebeam' on each face, slowly rotating"}" class="${"svelte-1j8e4rt"}"></div>
				${(0, import_index_277e1cdb.v)(import_supportBlock_svelte.default, "SupportBlock").$$render($$result, { section: "donate", aboutMap }, {}, {})}</div>

		${(0, import_index_277e1cdb.d)(ORDER, (section, i) => {
    return `<div class="${"row svelte-1j8e4rt"}">${(0, import_index_277e1cdb.v)(import_supportBlock_svelte.default, "SupportBlock").$$render($$result, { section: section[0], aboutMap }, {}, {})}
				${section.length > 1 ? `${(0, import_index_277e1cdb.v)(import_supportBlock_svelte.default, "SupportBlock").$$render($$result, { section: section[1], aboutMap }, {}, {})}` : ``}
			</div>`;
  })}</div>

	
	${(0, import_index_277e1cdb.v)(import_bottom_bar_168e682a.B, "BottomBar").$$render($$result, {}, {}, {})}
</div>`;
});
