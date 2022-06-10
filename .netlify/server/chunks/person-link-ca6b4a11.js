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
  P: () => Person_link
});
module.exports = __toCommonJS(stdin_exports);
var import_index_68ac15fd = require("./index-68ac15fd.js");
var import_core = require("@popperjs/core");
var import_sanity_59332496 = require("./sanity-59332496.js");
var import_global_61b718ff = require("./global-61b718ff.js");
var import_get = __toESM(require("lodash/get.js"));
const css = {
  code: ".pop-up.svelte-1xgt9do.svelte-1xgt9do{background:var(--background-color);padding:20px;border:1px solid var(--foreground-color);z-index:1000;color:var(--foreground-color);position:relative;display:none;max-width:360px}.pop-up.svelte-1xgt9do .name.svelte-1xgt9do{font-weight:bold;margin-right:15px}.pop-up.show{display:flex !important}a.svelte-1xgt9do.svelte-1xgt9do{color:var(--special-text-color);background:#e0ded7;text-decoration:none;margin-bottom:5px;display:inline-block}.person-link.svelte-1xgt9do.svelte-1xgt9do{font-size:14px;font-weight:200}@media(max-width: 1400px){.person-link.svelte-1xgt9do.svelte-1xgt9do{font-size:11px}}.column.first.svelte-1xgt9do.svelte-1xgt9do{padding-right:20px}",
  map: null
};
const Person_link = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  let { person = false } = $$props;
  let { overrideText = false } = $$props;
  let { personId = false } = $$props;
  let linkEl = {};
  let popEl = {};
  const initPopper = () => {
    (0, import_core.createPopper)(linkEl, popEl, {
      placement: "bottom-start",
      modifiers: [
        {
          name: "offset",
          options: { offset: [10, 5] }
        },
        { name: "eventListeners", enabled: false }
      ]
    });
  };
  if (personId) {
    (0, import_sanity_59332496.l)('*[_id == "' + personId + '"][0]').then((p) => {
      person = p;
      setTimeout(initPopper, 1e3);
    });
  }
  if ($$props.person === void 0 && $$bindings.person && person !== void 0)
    $$bindings.person(person);
  if ($$props.overrideText === void 0 && $$bindings.overrideText && overrideText !== void 0)
    $$bindings.overrideText(overrideText);
  if ($$props.personId === void 0 && $$bindings.personId && personId !== void 0)
    $$bindings.personId(personId);
  $$result.css.add(css);
  return `${person ? `<a${(0, import_index_68ac15fd.a)("href", "/people/" + (0, import_get.default)(person, "slug.current"), 0)} sveltekit:prefetch class="${"person-link svelte-1xgt9do"}"${(0, import_index_68ac15fd.a)("this", linkEl, 0)}>${person.title.length < 20 ? `<!-- HTML_TAG_START -->${overrideText ? (0, import_global_61b718ff.g)(overrideText) : person.title}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${overrideText ? (0, import_global_61b718ff.g)(overrideText) : person.title.slice(0, 20) + "..."}<!-- HTML_TAG_END -->`}</a>

	<div class="${"pop-up svelte-1xgt9do"}" aria-expanded="${"false"}"${(0, import_index_68ac15fd.a)("this", popEl, 0)}>
		<div class="${"column first svelte-1xgt9do"}">
			<div class="${"name svelte-1xgt9do"}">${(0, import_index_68ac15fd.e)(person.title)}</div>
			
			<div class="${"badges"}">${person.role ? `<div class="${"badge"}">${(0, import_index_68ac15fd.e)(import_global_61b718ff.r[person.role])}</div>` : ``}
				${person.groupTags ? `${(0, import_index_68ac15fd.h)(person.groupTags, (tag) => {
    return `<div class="${"badge"}">${(0, import_index_68ac15fd.e)(tag.label)}</div>`;
  })}` : ``}</div></div>
		
		<div class="${"column second"}">
			${person.mainImage ? `<img class="${"image"}"${(0, import_index_68ac15fd.a)("alt", person.title, 0)}${(0, import_index_68ac15fd.a)("src", (0, import_sanity_59332496.u)(person.mainImage).quality(90).saturation(-100).width(100).height(100).url(), 0)}>` : ``}</div></div>` : ``}`;
});
