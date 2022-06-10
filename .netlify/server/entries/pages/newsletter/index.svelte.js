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
var import_index_68ac15fd = require("../../../chunks/index-68ac15fd.js");
var import_has = __toESM(require("lodash/has.js"));
var import_blocks_c75ee098 = require("../../../chunks/blocks-c75ee098.js");
var import_bottom_bar_9ab2e699 = require("../../../chunks/bottom-bar-9ab2e699.js");
var import_metadata_ef16be06 = require("../../../chunks/metadata-ef16be06.js");
var import_stores_25b712dd = require("../../../chunks/stores-25b712dd.js");
var import_slugify = require("slugify");
var import_get = require("lodash/get.js");
var import_date_fns = require("date-fns");
var import_person_link_ca6b4a11 = require("../../../chunks/person-link-ca6b4a11.js");
var import_core = require("@popperjs/core");
var import_sanity_59332496 = require("../../../chunks/sanity-59332496.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_get_video_id = require("get-video-id");
var import_global_61b718ff = require("../../../chunks/global-61b718ff.js");
var import_truncate = require("lodash/truncate.js");
var import_stores_2672c807 = require("../../../chunks/stores-2672c807.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".main-content.svelte-bj8d6r.svelte-bj8d6r{float:left;width:calc((100% / 3) * 2)}@media(max-width: 800px){.main-content.svelte-bj8d6r.svelte-bj8d6r{width:100%}}.main-content.svelte-bj8d6r .inner.svelte-bj8d6r{padding:15px;border:1px solid var(--foreground-color);min-height:660px;padding-top:0}.main-content.svelte-bj8d6r .inner h1.svelte-bj8d6r{margin-bottom:120px}@media(max-width: 800px){.main-content.svelte-bj8d6r .inner.svelte-bj8d6r{border:unset;padding:0}.main-content.svelte-bj8d6r .inner h1.svelte-bj8d6r{margin-bottom:40px}}.body-content.svelte-bj8d6r.svelte-bj8d6r{margin-bottom:90px}@media(max-width: 800px){.body-content.svelte-bj8d6r.svelte-bj8d6r{margin-bottom:40px}}form.svelte-bj8d6r.svelte-bj8d6r{width:100%}@media(max-width: 800px){form.svelte-bj8d6r.svelte-bj8d6r{width:100%;margin-right:0;margin-left:0}}form.svelte-bj8d6r label.svelte-bj8d6r{width:100%;margin-bottom:15px;display:block;font-size:11px}form.svelte-bj8d6r input.svelte-bj8d6r{margin-bottom:20px;width:100%;height:70px;font-family:inherit}form.svelte-bj8d6r input.email.svelte-bj8d6r{border:1px solid var(--foreground-color);border-radius:0;background:#f5f4ee;padding-left:20px}form.svelte-bj8d6r input.subscribe.svelte-bj8d6r{border:0;background:var(--foreground-color);color:var(--background-color);cursor:pointer;font-size:11px;letter-spacing:1px}",
  map: null
};
const Newsletter = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  let { page } = $$props;
  let emailAddress = "";
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  $$result.css.add(css);
  {
    import_stores_25b712dd.s.set("");
  }
  {
    import_stores_25b712dd.b.set([]);
  }
  return `
${(0, import_index_68ac15fd.v)(import_metadata_ef16be06.M, "Metadata").$$render($$result, { page }, {}, {})}


<div class="${"main-content svelte-bj8d6r"}"><div class="${"inner svelte-bj8d6r"}">
		<h1 class="${"svelte-bj8d6r"}">${(0, import_index_68ac15fd.e)(page.title)}</h1>

		
		${(0, import_has.default)(page, "content.content") ? `<div class="${"body-content svelte-bj8d6r"}">${(0, import_index_68ac15fd.v)(import_blocks_c75ee098.B, "Blocks").$$render($$result, { blocks: page.content.content }, {}, {})}</div>` : ``}

		

		
		<form action="${"https://eyebeam.us4.list-manage.com/subscribe?u=c72c271895f3f76b36105229c"}" method="${"get"}" id="${"subscribe"}" class="${" svelte-bj8d6r"}"><input type="${"hidden"}" name="${"u"}" value="${"c72c271895f3f76b36105229c"}" class="${"svelte-bj8d6r"}">
			<input type="${"hidden"}" name="${"id"}" value="${"bb4e74c232"}" class="${"svelte-bj8d6r"}">
			<label for="${"email"}" class="${"svelte-bj8d6r"}">Your email</label>
			<input type="${"email"}" name="${"MERGE0"}" class="${"email svelte-bj8d6r"}"${(0, import_index_68ac15fd.a)("value", emailAddress, 0)}>
			<input type="${"submit"}" class="${"subscribe svelte-bj8d6r"}" value="${"SUBSCRIBE"}"></form></div>

	
	${(0, import_index_68ac15fd.v)(import_bottom_bar_9ab2e699.B, "BottomBar").$$render($$result, { updatedAt: page._updatedAt }, {}, {})}
</div>`;
});
