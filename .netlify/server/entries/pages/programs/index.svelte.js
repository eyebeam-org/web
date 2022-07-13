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
  default: () => Programs,
  router: () => router
});
module.exports = __toCommonJS(stdin_exports);
var import_index_277e1cdb = require("../../../chunks/index-277e1cdb.js");
var import_sanity_bfd50d1d = require("../../../chunks/sanity-bfd50d1d.js");
var import_has = __toESM(require("lodash/has.js"));
var import_global_eadaa9b6 = require("../../../chunks/global-eadaa9b6.js");
var import_get = __toESM(require("lodash/get.js"));
var import_truncate = require("lodash/truncate.js");
var import_bottom_bar_168e682a = require("../../../chunks/bottom-bar-168e682a.js");
var import_metadata_08e68bb9 = require("../../../chunks/metadata-08e68bb9.js");
var import_arrow_link_ef752029 = require("../../../chunks/arrow-link-ef752029.js");
var import_stores_f9761b8b = require("../../../chunks/stores-f9761b8b.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_get_video_id = require("get-video-id");
var import_slugify = require("slugify");
var import_date_fns = require("date-fns");
var import_stores_b7bb0fad = require("../../../chunks/stores-b7bb0fad.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: 'h2.svelte-1koaaol.svelte-1koaaol{font-family:"Eyebeam sans", Arial, sans-serif;font-size:32px;text-transform:uppercase;padding-right:40px}.tile.svelte-1koaaol.svelte-1koaaol{padding:15px;overflow:hidden;width:50%;display:block;float:left;font-size:16px}@media(max-width: 1400px){.tile.svelte-1koaaol.svelte-1koaaol{width:100%}}@media(max-width: 800px), screen and (orientation: portrait){.tile.svelte-1koaaol.svelte-1koaaol{width:100%;border:1px solid var(--foreground-color);border-top:none}.tile.svelte-1koaaol.svelte-1koaaol:first-child{border-top:1px solid var(--foreground-color)}}.main-content.svelte-1koaaol.svelte-1koaaol{float:left;width:calc((100% / 6) * 5)}@media(max-width: 800px), screen and (orientation: portrait){.main-content.svelte-1koaaol.svelte-1koaaol{width:100%}}.main-content.svelte-1koaaol .inner.svelte-1koaaol{width:100%;min-height:100vh;border:1px solid var(--foreground-color);display:inline-block}@media(max-width: 800px), screen and (orientation: portrait){.main-content.svelte-1koaaol .inner.svelte-1koaaol{border:unset}}.introduction.svelte-1koaaol.svelte-1koaaol{border-bottom:1px solid var(--foreground-color);min-height:440px;padding:40px}@media(max-width: 800px), screen and (orientation: portrait){.introduction.svelte-1koaaol.svelte-1koaaol{min-height:unset}}.introduction.svelte-1koaaol p.svelte-1koaaol{font-style:italic;font-size:27px}@media(max-width: 800px), screen and (orientation: portrait){.introduction.svelte-1koaaol p.svelte-1koaaol{font-size:14px}}.header-photo.svelte-1koaaol.svelte-1koaaol{overflow:hidden;padding:0;max-height:440px;border-bottom:1px solid var(--foreground-color);border-right:1px solid var(--foreground-color)}.header-photo.svelte-1koaaol img.svelte-1koaaol{max-height:100%;max-width:100%}.nav-tile.svelte-1koaaol.svelte-1koaaol{min-height:440px;max-height:440px;border-bottom:1px solid var(--foreground-color);border-right:1px solid var(--foreground-color);text-decoration:none;overflow:scroll;display:flex;flex-flow:column nowrap;cursor:pointer;padding:40px}.nav-tile.svelte-1koaaol.svelte-1koaaol:nth-child(even){border-right:none}@media(max-width: 800px), screen and (orientation: portrait){.nav-tile.svelte-1koaaol.svelte-1koaaol:nth-child(even){border-right:1px solid var(--foreground-color)}}.nav-tile.svelte-1koaaol a.svelte-1koaaol{text-decoration:none}.nav-tile.svelte-1koaaol.svelte-1koaaol:nth-last-child(1){border-bottom:none}.nav-tile.svelte-1koaaol.svelte-1koaaol:hover{background:#e0ded7;color:var(--hover-text-color)}.nav-tile.svelte-1koaaol.svelte-1koaaol:active{background:var(--foreground-color);color:var(--background-color)}@media(max-width: 800px), screen and (orientation: portrait){.nav-tile.svelte-1koaaol.svelte-1koaaol{width:100%;border-left:1px solid var(--foreground-color);border-right:1px solid var(--foreground-color);border-bottom:1px solid var(--foreground-color);min-height:33vh}.nav-tile.svelte-1koaaol.svelte-1koaaol:nth-child(odd){border-right:1px solid var(--foreground-color)}.nav-tile.svelte-1koaaol.svelte-1koaaol:nth-last-child(1){border-bottom:1px solid var(--foreground-color)}.nav-tile.svelte-1koaaol.svelte-1koaaol:first-of-type{border-top:1px solid var(--foreground-color)}}.application-container.svelte-1koaaol.svelte-1koaaol{display:flex;align-items:center;background:#e0ded7;padding:15px}.application-container.svelte-1koaaol .circle.svelte-1koaaol{width:20px;height:20px;border-radius:50%;background:var(--foreground-color)}.application-container.svelte-1koaaol .text.svelte-1koaaol{margin-left:15px}.application-container.svelte-1koaaol .text .applications-open.svelte-1koaaol{font-size:11px}',
  map: null
};
const router = false;
const Programs = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { programs } = $$props;
  const toc = programs.map((p) => {
    return {
      title: p.title,
      link: "/programs/" + (0, import_get.default)(p, "slug.current", "")
    };
  });
  if ($$props.programs === void 0 && $$bindings.programs && programs !== void 0)
    $$bindings.programs(programs);
  $$result.css.add(css);
  {
    console.log("programs: ", programs);
  }
  {
    import_stores_f9761b8b.a.set("Programs");
  }
  {
    import_stores_f9761b8b.s.set(toc);
  }
  return `
${(0, import_index_277e1cdb.v)(import_metadata_08e68bb9.M, "Metadata").$$render($$result, { page: { title: "Programs" } }, {}, {})}


<div class="${"main-content svelte-1koaaol"}" tabindex="${"0"}"><div class="${"inner svelte-1koaaol"}"><div class="${"tile header-photo svelte-1koaaol"}"><img src="${"ddc_header.jpg"}" alt="${"A student sitting at a laptop with headphones around his ears, surrounded by other students deep in thought. He is black, with short, curly hair, wearing a black hoodie."}" class="${"svelte-1koaaol"}"></div>

		<div class="${"tile introduction svelte-1koaaol"}">
			<h1>Programs</h1>
			
			<div class="${"description"}"><p class="${"svelte-1koaaol"}">Eyebeam offers courses, fellowships, and other programs to support artists, technologists, and more.
		
	</p></div></div>
				
		${(0, import_index_277e1cdb.d)(programs, (program) => {
    return `<div class="${"tile nav-tile svelte-1koaaol"}" sveltekit:prefetch>
			<h2 class="${"svelte-1koaaol"}"><a${(0, import_index_277e1cdb.a)("href", "/programs/" + program.slug.current, 0)} sveltekit:prefetch class="${"svelte-1koaaol"}">${(0, import_index_277e1cdb.e)(program.title)}</a></h2>
				
				${(0, import_has.default)(program, "introduction.content") ? `<div class="${"introduction-text"}">
<!-- HTML_TAG_START -->${(0, import_sanity_bfd50d1d.r)(program.introduction.content)}<!-- HTML_TAG_END -->
					</div>` : ``}

				${program.applicationsOpen ? `<div class="${"application-container svelte-1koaaol"}"><div class="${"circle svelte-1koaaol"}"></div>
						<div class="${"text svelte-1koaaol"}"><div class="${"applications-open svelte-1koaaol"}">Applications open</div>
							<div class="${"date"}">Due by ${(0, import_index_277e1cdb.e)((0, import_global_eadaa9b6.l)(program.applicationEndDate))}
							</div></div>
					</div>` : ``}

			${(0, import_index_277e1cdb.v)(import_arrow_link_ef752029.A, "ArrowLink").$$render($$result, {
      link: "/programs/" + program.slug.current
    }, {}, {})}
			</div>`;
  })}</div>

	
	${(0, import_index_277e1cdb.v)(import_bottom_bar_168e682a.B, "BottomBar").$$render($$result, {}, {}, {})}
</div>`;
});
