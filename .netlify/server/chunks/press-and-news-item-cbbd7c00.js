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
  P: () => Press_and_news_item
});
module.exports = __toCommonJS(stdin_exports);
var import_index_277e1cdb = require("./index-277e1cdb.js");
var import_global_eadaa9b6 = require("./global-eadaa9b6.js");
var pressAndNewsItem_svelte_svelte_type_style_lang = "";
const css = {
  code: ".press-and-news-item.svelte-1y0qbzq.svelte-1y0qbzq{width:25%;text-decoration:none;padding:20px}@media(max-width: 800px), screen and (orientation: portrait){.press-and-news-item.svelte-1y0qbzq.svelte-1y0qbzq{width:50%}}.press-and-news-item.svelte-1y0qbzq .date.svelte-1y0qbzq{font-size:11px;margin-bottom:5px}.press-and-news-item.svelte-1y0qbzq .title.svelte-1y0qbzq{font-size:14px}.press-and-news-item.svelte-1y0qbzq .source.svelte-1y0qbzq{font-size:11px;letter-spacing:1px;margin-top:20px;text-transform:uppercase}.press-and-news-item.svelte-1y0qbzq.svelte-1y0qbzq:hover{background:#e0ded7;color:var(--hover-text-color)}",
  map: null
};
const Press_and_news_item = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { post = {} } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css);
  return `<a${(0, import_index_277e1cdb.a)("href", "/press-and-news/" + post.slug.current, 0)} class="${"press-and-news-item " + (0, import_index_277e1cdb.e)(post._type) + " svelte-1y0qbzq"}" sveltekit:prefetch><div class="${"date svelte-1y0qbzq"}">${(0, import_index_277e1cdb.e)((0, import_global_eadaa9b6.s)(post._createdAt))}</div>
	<div class="${"title svelte-1y0qbzq"}">${(0, import_index_277e1cdb.e)(post.title)}</div>
	${post.source ? `<div class="${"source svelte-1y0qbzq"}">${(0, import_index_277e1cdb.e)(post.source)}</div>` : ``}
</a>`;
});
