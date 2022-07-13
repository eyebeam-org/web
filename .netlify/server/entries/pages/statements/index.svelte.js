var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Statements
});
module.exports = __toCommonJS(stdin_exports);
var import_index_277e1cdb = require("../../../chunks/index-277e1cdb.js");
var import_sanity_bfd50d1d = require("../../../chunks/sanity-bfd50d1d.js");
var import_global_eadaa9b6 = require("../../../chunks/global-eadaa9b6.js");
var import_bottom_bar_168e682a = require("../../../chunks/bottom-bar-168e682a.js");
var import_blocks_9c29c100 = require("../../../chunks/blocks-9c29c100.js");
var import_metadata_08e68bb9 = require("../../../chunks/metadata-08e68bb9.js");
var import_big_beam_c5c43470 = require("../../../chunks/big-beam-c5c43470.js");
var import_stores_f9761b8b = require("../../../chunks/stores-f9761b8b.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_get_video_id = require("get-video-id");
var import_has = require("lodash/has.js");
var import_slugify = require("slugify");
var import_date_fns = require("date-fns");
var import_get = require("lodash/get.js");
var import_core = require("@popperjs/core");
var import_truncate = require("lodash/truncate.js");
var import_stores_b7bb0fad = require("../../../chunks/stores-b7bb0fad.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".main-content.svelte-5wdn90.svelte-5wdn90{float:left;width:50%;width:calc((100% / 3) * 2)}.main-content.svelte-5wdn90 .inner.svelte-5wdn90{border:1px solid var(--foreground-color);min-height:100vh}.main-content.svelte-5wdn90 .inner .header.svelte-5wdn90{height:440px;border-bottom:1px solid var(--foreground-color);display:flex;justify-content:center;align-items:center;padding:20px}.main-content.svelte-5wdn90 .inner .single-statement.svelte-5wdn90{padding:15px;margin-bottom:20px}.main-content.svelte-5wdn90 .inner .single-statement .text.svelte-5wdn90{font-size:32px;line-height:1.2em}.main-content.svelte-5wdn90 .inner .single-statement .person.svelte-5wdn90{font-size:16px;margin-top:15px}.main-content.svelte-5wdn90 .inner .single-statement .date.svelte-5wdn90{font-size:16px;margin-top:15px}.single-statement .text p{font-size:32px}",
  map: null
};
const Statements = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { statements } = $$props;
  if ($$props.statements === void 0 && $$bindings.statements && statements !== void 0)
    $$bindings.statements(statements);
  $$result.css.add(css);
  {
    import_stores_f9761b8b.a.set("");
  }
  {
    import_stores_f9761b8b.s.set([]);
  }
  return `
${(0, import_index_277e1cdb.v)(import_metadata_08e68bb9.M, "Metadata").$$render($$result, { page: { title: "Statements" } }, {}, {})}


<div class="${"main-content svelte-5wdn90"}"><div class="${"inner svelte-5wdn90"}"><div class="${"header svelte-5wdn90"}">${(0, import_index_277e1cdb.v)(import_big_beam_c5c43470.B, "BigBeam").$$render($$result, {}, {}, {})}</div>
		${(0, import_index_277e1cdb.d)(statements, (statement) => {
    return `<div class="${"single-statement svelte-5wdn90"}">
				<div class="${"text svelte-5wdn90"}"><!-- HTML_TAG_START -->${(0, import_sanity_bfd50d1d.r)(statement.content.content)}<!-- HTML_TAG_END --></div>
				
				${statement.person ? `<div class="${"person svelte-5wdn90"}">${(0, import_index_277e1cdb.v)(import_blocks_9c29c100.a, "PersonLink").$$render($$result, { person: statement.person }, {}, {})}</div>` : ``}
				
				${statement.date ? `<div class="${"date svelte-5wdn90"}">${(0, import_index_277e1cdb.e)((0, import_global_eadaa9b6.l)(statement.date))}</div>` : ``}
			</div>`;
  })}</div>

	
	${(0, import_index_277e1cdb.v)(import_bottom_bar_168e682a.B, "BottomBar").$$render($$result, {}, {}, {})}
</div>`;
});
