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
  B: () => Bottom_bar
});
module.exports = __toCommonJS(stdin_exports);
var import_index_277e1cdb = require("./index-277e1cdb.js");
var import_global_eadaa9b6 = require("./global-eadaa9b6.js");
const css$2 = {
  code: "svg.svelte-1xuw7em.svelte-1xuw7em{width:24px}svg.svelte-1xuw7em path.svelte-1xuw7em{fill:none;stroke:var(--foreground-color);stroke-width:0.75;stroke-miterlimit:10}",
  map: null
};
const Half_beam = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<svg version="${"1.1"}" id="${"Layer_1"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" x="${"0px"}" y="${"0px"}" viewBox="${"0 0 18 9"}" style="${"enable-background:new 0 0 18 9;"}" xml:space="${"preserve"}" class="${"svelte-1xuw7em"}"><path class="${"st1 svelte-1xuw7em"}" stroke="${"#000000"}" d="${"M0,8.8h6.8 M16.8,4.4l-5.9,3.3L16.8,4.4z M13.6,1.2l-3.4,5.7L13.6,1.2z M18,8.8h-6.9H18z M1.2,4.4l5.9,3.3L1.2,4.4z M4.4,1.2l3.4,5.7L4.4,1.2z M9,0v6.6V0z"}"></path></svg>`;
});
const css$1 = {
  code: "svg.svelte-1ofkf54.svelte-1ofkf54{height:12px}svg.svelte-1ofkf54 path.svelte-1ofkf54,svg.svelte-1ofkf54 line.svelte-1ofkf54{fill:none;stroke:var(--foreground-color);stroke-width:0.75;stroke-miterlimit:10}",
  map: null
};
const Arrow_up = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<svg version="${"1.1"}" id="${"Layer_1"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" x="${"0px"}" y="${"0px"}" viewBox="${"0 0 13.1 12.5"}" style="${"enable-background:new 0 0 13.1 12.5;"}" xml:space="${"preserve"}" class="${"svelte-1ofkf54"}"><line class="${"st0 svelte-1ofkf54"}" x1="${"6.6"}" y1="${"12.5"}" x2="${"6.6"}" y2="${"0.6"}"></line><path class="${"st0 svelte-1ofkf54"}" d="${"M0.3,6.8l6.3-6.3l6.3,6.3"}"></path></svg>`;
});
const css = {
  code: ".bottom-bar.svelte-1fhu6vw.svelte-1fhu6vw{border-left:1px solid var(--foreground-color);border-right:1px solid var(--foreground-color);border-bottom:1px solid var(--foreground-color);width:100%;display:inline-block;padding:15px;height:50px}@media(max-width: 800px), screen and (orientation: portrait){.bottom-bar.svelte-1fhu6vw.svelte-1fhu6vw{display:none}}.bottom-bar.svelte-1fhu6vw .last-updated.svelte-1fhu6vw{float:left}.bottom-bar.svelte-1fhu6vw .last-updated .icon.svelte-1fhu6vw{margin-right:5px}.bottom-bar.svelte-1fhu6vw .back-to-top.svelte-1fhu6vw{float:right;cursor:pointer}.bottom-bar.svelte-1fhu6vw .back-to-top .icon.svelte-1fhu6vw{margin-left:5px}",
  map: null
};
const Bottom_bar = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { updatedAt = false } = $$props;
  if ($$props.updatedAt === void 0 && $$bindings.updatedAt && updatedAt !== void 0)
    $$bindings.updatedAt(updatedAt);
  $$result.css.add(css);
  return `<div class="${"bottom-bar svelte-1fhu6vw"}">${updatedAt ? `<div class="${"last-updated svelte-1fhu6vw"}"><span class="${"icon svelte-1fhu6vw"}">${(0, import_index_277e1cdb.v)(Half_beam, "HalfBeam").$$render($$result, {}, {}, {})}</span> Last updated: ${(0, import_index_277e1cdb.e)((0, import_global_eadaa9b6.d)(updatedAt))}</div>` : ``}
	<a href="${"#"}" class="${"back-to-top svelte-1fhu6vw"}">Back to top <span class="${"icon svelte-1fhu6vw"}">${(0, import_index_277e1cdb.v)(Arrow_up, "ArrowUp").$$render($$result, {}, {}, {})}</span></a>
</div>`;
});
