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
  default: () => Newsletter
});
module.exports = __toCommonJS(stdin_exports);
var import_index_277e1cdb = require("../../../chunks/index-277e1cdb.js");
var import_has = __toESM(require("lodash/has.js"));
var import_blocks_9c29c100 = require("../../../chunks/blocks-9c29c100.js");
var import_bottom_bar_168e682a = require("../../../chunks/bottom-bar-168e682a.js");
var import_metadata_08e68bb9 = require("../../../chunks/metadata-08e68bb9.js");
var import_stores_f9761b8b = require("../../../chunks/stores-f9761b8b.js");
var import_slugify = require("slugify");
var import_get = require("lodash/get.js");
var import_date_fns = require("date-fns");
var import_core = require("@popperjs/core");
var import_sanity_bfd50d1d = require("../../../chunks/sanity-bfd50d1d.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_get_video_id = require("get-video-id");
var import_global_eadaa9b6 = require("../../../chunks/global-eadaa9b6.js");
var import_truncate = require("lodash/truncate.js");
var import_stores_b7bb0fad = require("../../../chunks/stores-b7bb0fad.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".main-content.svelte-di92ot.svelte-di92ot{float:left;width:calc((100% / 3) * 2)}@media(max-width: 800px), screen and (orientation: portrait){.main-content.svelte-di92ot.svelte-di92ot{width:100%}}.main-content.svelte-di92ot .inner.svelte-di92ot{padding:15px;border:1px solid var(--foreground-color);min-height:660px;padding-top:0}.main-content.svelte-di92ot .inner h1.svelte-di92ot{margin-bottom:120px}@media(max-width: 800px), screen and (orientation: portrait){.main-content.svelte-di92ot .inner.svelte-di92ot{border:unset;padding:0}.main-content.svelte-di92ot .inner h1.svelte-di92ot{margin-bottom:40px}}.body-content.svelte-di92ot.svelte-di92ot{margin-bottom:90px}@media(max-width: 800px), screen and (orientation: portrait){.body-content.svelte-di92ot.svelte-di92ot{margin-bottom:40px}}form.svelte-di92ot.svelte-di92ot{width:100%}@media(max-width: 800px), screen and (orientation: portrait){form.svelte-di92ot.svelte-di92ot{width:100%;margin-right:0;margin-left:0}}form.svelte-di92ot label.svelte-di92ot{width:100%;margin-bottom:15px;display:block;font-size:11px}form.svelte-di92ot input.svelte-di92ot{margin-bottom:20px;width:100%;height:70px;font-family:inherit}form.svelte-di92ot input.email.svelte-di92ot{border:1px solid var(--foreground-color);border-radius:0;background:#f5f4ee;padding-left:20px}form.svelte-di92ot input.subscribe.svelte-di92ot{border:0;background:var(--foreground-color);color:var(--background-color);cursor:pointer;font-size:11px;letter-spacing:1px}",
  map: null
};
const Newsletter = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { page } = $$props;
  let emailAddress = "";
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  $$result.css.add(css);
  {
    import_stores_f9761b8b.a.set("");
  }
  {
    import_stores_f9761b8b.s.set([]);
  }
  return `
${(0, import_index_277e1cdb.v)(import_metadata_08e68bb9.M, "Metadata").$$render($$result, { page }, {}, {})}


<div class="${"main-content svelte-di92ot"}"><div class="${"inner svelte-di92ot"}">
		<h1 class="${"svelte-di92ot"}">${(0, import_index_277e1cdb.e)(page.title)}</h1>

		
		${(0, import_has.default)(page, "content.content") ? `<div class="${"body-content svelte-di92ot"}">${(0, import_index_277e1cdb.v)(import_blocks_9c29c100.B, "Blocks").$$render($$result, { blocks: page.content.content }, {}, {})}</div>` : ``}

		

		
		<form action="${"https://eyebeam.us4.list-manage.com/subscribe?u=c72c271895f3f76b36105229c"}" method="${"get"}" id="${"subscribe"}" class="${" svelte-di92ot"}"><input type="${"hidden"}" name="${"u"}" value="${"c72c271895f3f76b36105229c"}" class="${"svelte-di92ot"}">
			<input type="${"hidden"}" name="${"id"}" value="${"bb4e74c232"}" class="${"svelte-di92ot"}">
			<label for="${"email"}" class="${"svelte-di92ot"}">Your email</label>
			<input type="${"email"}" name="${"MERGE0"}" class="${"email svelte-di92ot"}"${(0, import_index_277e1cdb.a)("value", emailAddress, 0)}>
			<input type="${"submit"}" class="${"subscribe svelte-di92ot"}" value="${"SUBSCRIBE"}"></form></div>

	
	${(0, import_index_277e1cdb.v)(import_bottom_bar_168e682a.B, "BottomBar").$$render($$result, { updatedAt: page._updatedAt }, {}, {})}
</div>`;
});
