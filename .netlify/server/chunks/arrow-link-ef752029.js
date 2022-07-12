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
  A: () => Arrow_link
});
module.exports = __toCommonJS(stdin_exports);
var import_index_277e1cdb = require("./index-277e1cdb.js");
var arrowLink_svelte_svelte_type_style_lang = "";
const css = {
  code: ".arrow-container.svelte-1pflacp.svelte-1pflacp{width:100%;display:flex;justify-content:start;align-items:flex-end;flex-grow:1}.arrow-container.svelte-1pflacp svg.svelte-1pflacp{height:100px;max-height:100px}",
  map: null
};
const Arrow_link = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { link = "" } = $$props;
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css);
  return `<div class="${"arrow-container svelte-1pflacp"}"><a${(0, import_index_277e1cdb.a)("href", link, 0)}><svg id="${"Layer_1"}" data-name="${"Layer 1"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 174 154"}" class="${"svelte-1pflacp"}"><defs><style>.cls-1{fill:none;stroke:#221f20;stroke-miterlimit:10;}</style></defs><line class="${"cls-1"}" x1="${"34.12"}" y1="${"77.39"}" x2="${"140"}" y2="${"77.39"}"></line><polyline class="${"cls-1"}" points="${"98.81 39.26 139.66 77.39 98.81 114.84"}"></polyline></svg></a>
</div>`;
});
