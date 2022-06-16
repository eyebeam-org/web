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
  S: () => See_also
});
module.exports = __toCommonJS(stdin_exports);
var import_index_68ac15fd = require("./index-68ac15fd.js");
var import_global_61b718ff = require("./global-61b718ff.js");
var import_get = __toESM(require("lodash/get.js"));
var import_blocks_11eda655 = require("./blocks-11eda655.js");
const css = {
  code: ".see-also.svelte-rp6j0l.svelte-rp6j0l{width:100%;background:#e0ded7;padding:20px;font-size:16px;border-top:1px solid var(--foreground-color)}ul.svelte-rp6j0l li a.svelte-rp6j0l{text-decoration:none}ul.svelte-rp6j0l li a.svelte-rp6j0l:hover{text-decoration:underline}",
  map: null
};
const See_also = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  let { externalLinks = [] } = $$props;
  let { internalLinks = [] } = $$props;
  console.log("externallinks", externalLinks);
  console.log("internlalinks", internalLinks);
  if ($$props.externalLinks === void 0 && $$bindings.externalLinks && externalLinks !== void 0)
    $$bindings.externalLinks(externalLinks);
  if ($$props.internalLinks === void 0 && $$bindings.internalLinks && internalLinks !== void 0)
    $$bindings.internalLinks(internalLinks);
  $$result.css.add(css);
  return `<div class="${"see-also svelte-rp6j0l"}"><div class="${"header"}">See also:</div>
	<ul class="${"svelte-rp6j0l"}">
		${internalLinks ? `${(0, import_index_68ac15fd.h)(internalLinks, (link) => {
    return `<li><a${(0, import_index_68ac15fd.a)("href", "/" + import_global_61b718ff.a[link._type] + "/" + (0, import_get.default)(link, "slug.current", ""), 0)} sveltekit:prefetch class="${"svelte-rp6j0l"}">${(0, import_index_68ac15fd.e)(link.title)}</a>
				</li>`;
  })}` : ``}
		
		${externalLinks ? `${(0, import_index_68ac15fd.h)(externalLinks, (link) => {
    return `<li><a${(0, import_index_68ac15fd.a)("href", link.linkUrl, 0)} target="${"_blank"}" class="${"svelte-rp6j0l"}">${(0, import_index_68ac15fd.e)(link.linkText)} ${(0, import_index_68ac15fd.v)(import_blocks_11eda655.E, "ExternalLink").$$render($$result, {}, {}, {})}</a>
				</li>`;
  })}` : ``}</ul>
</div>`;
});
