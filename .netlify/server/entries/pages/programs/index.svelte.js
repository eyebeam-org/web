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
var import_index_68ac15fd = require("../../../chunks/index-68ac15fd.js");
var import_sanity_59332496 = require("../../../chunks/sanity-59332496.js");
var import_has = __toESM(require("lodash/has.js"));
var import_global_61b718ff = require("../../../chunks/global-61b718ff.js");
var import_get = __toESM(require("lodash/get.js"));
var import_truncate = __toESM(require("lodash/truncate.js"));
var import_bottom_bar_9ab2e699 = require("../../../chunks/bottom-bar-9ab2e699.js");
var import_metadata_a699f85e = require("../../../chunks/metadata-a699f85e.js");
var import_stores_25b712dd = require("../../../chunks/stores-25b712dd.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_get_video_id = require("get-video-id");
var import_slugify = require("slugify");
var import_date_fns = require("date-fns");
var import_stores_2672c807 = require("../../../chunks/stores-2672c807.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: 'h2.svelte-1ihhav2.svelte-1ihhav2{font-family:"Eyebeam sans", Arial, sans-serif;font-size:32px;text-transform:uppercase;padding-right:40px}.tile.svelte-1ihhav2.svelte-1ihhav2{padding:15px;overflow:hidden;width:50%;display:block;float:left;font-size:16px}@media(max-width: 1400px){.tile.svelte-1ihhav2.svelte-1ihhav2{width:100%}}@media(max-width: 800px){.tile.svelte-1ihhav2.svelte-1ihhav2{width:100%;border:1px solid var(--foreground-color);border-top:none}.tile.svelte-1ihhav2.svelte-1ihhav2:first-child{border-top:1px solid var(--foreground-color)}}.main-content.svelte-1ihhav2.svelte-1ihhav2{float:left;width:calc((100% / 6) * 5)}@media(max-width: 800px){.main-content.svelte-1ihhav2.svelte-1ihhav2{width:100%}}.main-content.svelte-1ihhav2 .inner.svelte-1ihhav2{width:100%;min-height:100vh;border:1px solid var(--foreground-color);display:inline-block}@media(max-width: 800px){.main-content.svelte-1ihhav2 .inner.svelte-1ihhav2{border:unset}}.introduction.svelte-1ihhav2.svelte-1ihhav2{border-bottom:1px solid var(--foreground-color);min-height:440px;padding:40px}@media(max-width: 800px){.introduction.svelte-1ihhav2.svelte-1ihhav2{min-height:unset}}.introduction.svelte-1ihhav2 p.svelte-1ihhav2{font-style:italic;font-size:27px}@media(max-width: 800px){.introduction.svelte-1ihhav2 p.svelte-1ihhav2{font-size:14px}}.header-photo.svelte-1ihhav2.svelte-1ihhav2{overflow:hidden;padding:0;max-height:440px;border-bottom:1px solid var(--foreground-color);border-right:1px solid var(--foreground-color)}.header-photo.svelte-1ihhav2 img.svelte-1ihhav2{max-height:100%;max-width:100%}.nav-tile.svelte-1ihhav2.svelte-1ihhav2{min-height:440px;border-bottom:1px solid var(--foreground-color);border-right:1px solid var(--foreground-color);text-decoration:none;cursor:pointer;padding:40px}.nav-tile.svelte-1ihhav2.svelte-1ihhav2:nth-child(even){border-right:none}.nav-tile.svelte-1ihhav2 a.svelte-1ihhav2{text-decoration:none}.nav-tile.svelte-1ihhav2.svelte-1ihhav2:nth-last-child(1){border-bottom:none}.nav-tile.svelte-1ihhav2.svelte-1ihhav2:hover{background:#e0ded7;color:var(--hover-text-color)}.nav-tile.svelte-1ihhav2.svelte-1ihhav2:active{background:var(--foreground-color);color:var(--background-color)}@media(max-width: 800px){.nav-tile.svelte-1ihhav2.svelte-1ihhav2{width:100%;border-left:1px solid var(--foreground-color);border-right:1px solid var(--foreground-color);border-bottom:1px solid var(--foreground-color);min-height:33vh}.nav-tile.svelte-1ihhav2.svelte-1ihhav2:nth-child(odd){border-right:1px solid var(--foreground-color)}.nav-tile.svelte-1ihhav2.svelte-1ihhav2:nth-last-child(1){border-bottom:1px solid var(--foreground-color)}.nav-tile.svelte-1ihhav2.svelte-1ihhav2:first-of-type{border-top:1px solid var(--foreground-color)}}.application-container.svelte-1ihhav2.svelte-1ihhav2{display:flex;align-items:center;background:#e0ded7;padding:15px}.application-container.svelte-1ihhav2 .circle.svelte-1ihhav2{width:20px;height:20px;border-radius:50%;background:var(--foreground-color)}.application-container.svelte-1ihhav2 .text.svelte-1ihhav2{margin-left:15px}.application-container.svelte-1ihhav2 .text .applications-open.svelte-1ihhav2{font-size:11px}',
  map: null
};
const Programs = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
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
    import_stores_25b712dd.s.set("Programs");
  }
  {
    import_stores_25b712dd.b.set(toc);
  }
  return `
${(0, import_index_68ac15fd.v)(import_metadata_a699f85e.M, "Metadata").$$render($$result, { page: { title: "Programs" } }, {}, {})}


<div class="${"main-content svelte-1ihhav2"}" tabindex="${"0"}"><div class="${"inner svelte-1ihhav2"}"><div class="${"tile header-photo svelte-1ihhav2"}"><img src="${"ddc_header.jpg"}" alt="${"A student sitting at a laptop with headphones around his ears, surrounded by other students deep in thought. He is black, with short, curly hair, wearing a black hoodie."}" class="${"svelte-1ihhav2"}"></div>

		<div class="${"tile introduction svelte-1ihhav2"}">
			<h1>Programs</h1>
			
			<div class="${"description"}"><p class="${"svelte-1ihhav2"}">Eyebeam offers courses, fellowships, and other programs to support artists, technologists, and more.
		
	</p></div></div>
				
		${(0, import_index_68ac15fd.h)(programs, (program) => {
    return `<div class="${"tile nav-tile svelte-1ihhav2"}" sveltekit:prefetch>
			<h2 class="${"svelte-1ihhav2"}"><a${(0, import_index_68ac15fd.a)("href", "/programs/" + program.slug.current, 0)} sveltekit:prefetch class="${"svelte-1ihhav2"}">${(0, import_index_68ac15fd.e)(program.title)}</a></h2>
				
				${(0, import_has.default)(program, "introduction.content") ? `<div class="${"introduction-text"}"><!-- HTML_TAG_START -->${(0, import_truncate.default)((0, import_sanity_59332496.r)(program.introduction.content), { length: 600 })}<!-- HTML_TAG_END -->
					</div>` : ``}

				${program.applicationsOpen ? `<div class="${"application-container svelte-1ihhav2"}"><div class="${"circle svelte-1ihhav2"}"></div>
						<div class="${"text svelte-1ihhav2"}"><div class="${"applications-open svelte-1ihhav2"}">Applications open</div>
							<div class="${"date"}">Due by ${(0, import_index_68ac15fd.e)((0, import_global_61b718ff.l)(program.applicationEndDate))}
							</div></div>
					</div>` : ``}
			</div>`;
  })}</div>

	
	${(0, import_index_68ac15fd.v)(import_bottom_bar_9ab2e699.B, "BottomBar").$$render($$result, {}, {}, {})}
</div>`;
});
