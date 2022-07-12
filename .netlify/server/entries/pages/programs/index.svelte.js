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
  default: () => Programs
});
module.exports = __toCommonJS(stdin_exports);
var import_index_277e1cdb = require("../../../chunks/index-277e1cdb.js");
var import_sanity_59332496 = require("../../../chunks/sanity-59332496.js");
var import_has = __toESM(require("lodash/has.js"));
var import_global_61b718ff = require("../../../chunks/global-61b718ff.js");
var import_get = __toESM(require("lodash/get.js"));
var import_truncate = require("lodash/truncate.js");
var import_bottom_bar_2d2f7e63 = require("../../../chunks/bottom-bar-2d2f7e63.js");
var import_metadata_2f61a1e2 = require("../../../chunks/metadata-2f61a1e2.js");
var import_stores_effda588 = require("../../../chunks/stores-effda588.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_get_video_id = require("get-video-id");
var import_slugify = require("slugify");
var import_date_fns = require("date-fns");
var import_stores_b7bb0fad = require("../../../chunks/stores-b7bb0fad.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: 'h2.svelte-17uik13.svelte-17uik13{font-family:"Eyebeam sans", Arial, sans-serif;font-size:32px;text-transform:uppercase;padding-right:40px}.tile.svelte-17uik13.svelte-17uik13{padding:15px;overflow:hidden;width:50%;display:block;float:left;font-size:16px}@media(max-width: 1400px){.tile.svelte-17uik13.svelte-17uik13{width:100%}}@media(max-width: 800px){.tile.svelte-17uik13.svelte-17uik13{width:100%;border:1px solid var(--foreground-color);border-top:none}.tile.svelte-17uik13.svelte-17uik13:first-child{border-top:1px solid var(--foreground-color)}}.main-content.svelte-17uik13.svelte-17uik13{float:left;width:calc((100% / 6) * 5)}@media(max-width: 800px){.main-content.svelte-17uik13.svelte-17uik13{width:100%}}.main-content.svelte-17uik13 .inner.svelte-17uik13{width:100%;min-height:100vh;border:1px solid var(--foreground-color);display:inline-block}@media(max-width: 800px){.main-content.svelte-17uik13 .inner.svelte-17uik13{border:unset}}.introduction.svelte-17uik13.svelte-17uik13{border-bottom:1px solid var(--foreground-color);min-height:440px;padding:40px}@media(max-width: 800px){.introduction.svelte-17uik13.svelte-17uik13{min-height:unset}}.introduction.svelte-17uik13 p.svelte-17uik13{font-style:italic;font-size:27px}@media(max-width: 800px){.introduction.svelte-17uik13 p.svelte-17uik13{font-size:14px}}.header-photo.svelte-17uik13.svelte-17uik13{overflow:hidden;padding:0;max-height:440px;border-bottom:1px solid var(--foreground-color);border-right:1px solid var(--foreground-color)}.header-photo.svelte-17uik13 img.svelte-17uik13{max-height:100%;max-width:100%}.nav-tile.svelte-17uik13.svelte-17uik13{min-height:440px;max-height:440px;border-bottom:1px solid var(--foreground-color);border-right:1px solid var(--foreground-color);text-decoration:none;overflow:scroll;cursor:pointer;padding:40px}.nav-tile.svelte-17uik13.svelte-17uik13:nth-child(even){border-right:none}.nav-tile.svelte-17uik13 a.svelte-17uik13{text-decoration:none}.nav-tile.svelte-17uik13.svelte-17uik13:nth-last-child(1){border-bottom:none}.nav-tile.svelte-17uik13.svelte-17uik13:hover{background:#e0ded7;color:var(--hover-text-color)}.nav-tile.svelte-17uik13.svelte-17uik13:active{background:var(--foreground-color);color:var(--background-color)}@media(max-width: 800px){.nav-tile.svelte-17uik13.svelte-17uik13{width:100%;border-left:1px solid var(--foreground-color);border-right:1px solid var(--foreground-color);border-bottom:1px solid var(--foreground-color);min-height:33vh}.nav-tile.svelte-17uik13.svelte-17uik13:nth-child(odd){border-right:1px solid var(--foreground-color)}.nav-tile.svelte-17uik13.svelte-17uik13:nth-last-child(1){border-bottom:1px solid var(--foreground-color)}.nav-tile.svelte-17uik13.svelte-17uik13:first-of-type{border-top:1px solid var(--foreground-color)}}.application-container.svelte-17uik13.svelte-17uik13{display:flex;align-items:center;background:#e0ded7;padding:15px}.application-container.svelte-17uik13 .circle.svelte-17uik13{width:20px;height:20px;border-radius:50%;background:var(--foreground-color)}.application-container.svelte-17uik13 .text.svelte-17uik13{margin-left:15px}.application-container.svelte-17uik13 .text .applications-open.svelte-17uik13{font-size:11px}',
  map: null
};
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
    import_stores_effda588.a.set("Programs");
  }
  {
    import_stores_effda588.s.set(toc);
  }
  return `
${(0, import_index_277e1cdb.v)(import_metadata_2f61a1e2.M, "Metadata").$$render($$result, { page: { title: "Programs" } }, {}, {})}


<div class="${"main-content svelte-17uik13"}" tabindex="${"0"}"><div class="${"inner svelte-17uik13"}"><div class="${"tile header-photo svelte-17uik13"}"><img src="${"ddc_header.jpg"}" alt="${"A student sitting at a laptop with headphones around his ears, surrounded by other students deep in thought. He is black, with short, curly hair, wearing a black hoodie."}" class="${"svelte-17uik13"}"></div>

		<div class="${"tile introduction svelte-17uik13"}">
			<h1>Programs</h1>
			
			<div class="${"description"}"><p class="${"svelte-17uik13"}">Eyebeam offers courses, fellowships, and other programs to support artists, technologists, and more.
		
	</p></div></div>
				
		${(0, import_index_277e1cdb.d)(programs, (program) => {
    return `<div class="${"tile nav-tile svelte-17uik13"}" sveltekit:prefetch>
			<h2 class="${"svelte-17uik13"}"><a${(0, import_index_277e1cdb.a)("href", "/programs/" + program.slug.current, 0)} sveltekit:prefetch class="${"svelte-17uik13"}">${(0, import_index_277e1cdb.e)(program.title)}</a></h2>
				
				${(0, import_has.default)(program, "introduction.content") ? `<div class="${"introduction-text"}">
						<!-- HTML_TAG_START -->${(0, import_sanity_59332496.r)(program.introduction.content)}<!-- HTML_TAG_END -->
					</div>` : ``}

				${program.applicationsOpen ? `<div class="${"application-container svelte-17uik13"}"><div class="${"circle svelte-17uik13"}"></div>
						<div class="${"text svelte-17uik13"}"><div class="${"applications-open svelte-17uik13"}">Applications open</div>
							<div class="${"date"}">Due by ${(0, import_index_277e1cdb.e)((0, import_global_61b718ff.l)(program.applicationEndDate))}
							</div></div>
					</div>` : ``}
			</div>`;
  })}</div>

	
	${(0, import_index_277e1cdb.v)(import_bottom_bar_2d2f7e63.B, "BottomBar").$$render($$result, {}, {}, {})}
</div>`;
});
