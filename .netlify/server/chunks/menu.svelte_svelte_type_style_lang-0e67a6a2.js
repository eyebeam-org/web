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
  I: () => Instagram,
  N: () => Newsletter,
  T: () => Twitter,
  Y: () => Youtube
});
module.exports = __toCommonJS(stdin_exports);
var import_index_68ac15fd = require("./index-68ac15fd.js");
var headerBeam_svelte_svelte_type_style_lang = "";
var newsletter_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "svg.svelte-1g6edcb path.svelte-1g6edcb{fill:var(--foreground-color)}",
  map: null
};
const Newsletter = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<svg width="${"17"}" height="${"12"}" viewBox="${"0 0 17 12"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" role="${"image"}" aria-label="${"Subscribe to our newsletter."}" class="${"svelte-1g6edcb"}"><path d="${"M9.2275 8.38428L8.87816 8.73363L7.96986 9.64192L6.85196 8.38428L0.144531 1.67686V11.6681H16.1445V1.53712L9.2275 8.38428ZM0.284269 0L7.76025 7.47598L8.1096 7.82533L8.45894 7.47598L15.8651 0H0.284269Z"}" class="${"svelte-1g6edcb"}"></path></svg>`;
});
var twitter_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "svg.svelte-1g6edcb path.svelte-1g6edcb{fill:var(--foreground-color)}",
  map: null
};
const Twitter = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<span class="${"nodisplay"}">Eyebeam&#39;s Twitter.</span>
<svg width="${"16"}" height="${"14"}" viewBox="${"0 0 16 14"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" role="${"image"}" aria-label="${"Follow us on Twitter."}" class="${"svelte-1g6edcb"}"><path d="${"M16 1.60291C15.4311 1.89435 14.7911 2.04007 14.1511 2.11293C14.8622 1.67577 15.36 1.02004 15.5733 0.218579C14.9333 0.655738 14.2222 0.874317 13.44 1.0929C12.8711 0.437158 12.0178 0 11.0222 0C9.24444 0 7.75111 1.53005 7.75111 3.35155C7.75111 3.64299 7.75111 3.86157 7.82222 4.15301C5.12 4.00729 2.70222 2.69581 1.06667 0.655738C0.853333 1.0929 0.64 1.67577 0.64 2.33151C0.64 3.49727 1.20889 4.5173 2.06222 5.10018C1.56444 5.10018 1.06667 4.95446 0.64 4.66302C0.64 4.66302 0.64 4.66302 0.64 4.73588C0.64 6.3388 1.77778 7.72313 3.27111 8.01457C2.98667 8.08743 2.70222 8.16029 2.41778 8.16029C2.20444 8.16029 1.99111 8.16029 1.77778 8.08743C2.20444 9.39891 3.41333 10.4189 4.83556 10.4189C3.69778 11.2933 2.27556 11.8761 0.782222 11.8761C0.497778 11.8761 0.284444 11.8761 0 11.8033C1.42222 12.7505 3.2 13.3333 5.04889 13.3333C11.0933 13.3333 14.3644 8.23315 14.3644 3.78871C14.3644 3.64299 14.3644 3.49727 14.3644 3.35155C15.0044 2.84153 15.5022 2.25865 16 1.60291Z"}" class="${"svelte-1g6edcb"}"></path></svg>`;
});
var instagram_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "svg.svelte-1g6edcb path.svelte-1g6edcb{fill:var(--foreground-color)}",
  map: null
};
const Instagram = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<span class="${"nodisplay"}">Eyebeam&#39;s Instagram.</span>
<svg width="${"16"}" height="${"17"}" viewBox="${"0 0 16 17"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" role="${"image"}" aria-label="${"Follow us on Instagram."}" class="${"svelte-1g6edcb"}"><path d="${"M14.1972 4.13146C14.1972 4.88263 13.446 4.88263 13.446 4.88263H11.8685C11.1174 4.88263 11.1174 4.13146 11.1174 4.13146V2.55399C11.1174 1.80282 11.8685 1.80282 11.8685 1.80282H13.446C14.1972 1.80282 14.1972 2.55399 14.1972 2.55399V4.13146ZM11.0423 8.03756C11.0423 9.69014 9.69014 11.0423 8.03756 11.0423C6.38498 11.0423 5.03286 9.69014 5.03286 8.03756C5.03286 6.38498 6.38498 5.03286 8.03756 5.03286C9.69014 5.03286 11.0423 6.38498 11.0423 8.03756ZM3.23005 8.03756C3.23005 10.6667 5.40845 12.8451 8.03756 12.8451C10.6667 12.8451 12.8451 10.6667 12.8451 8.03756C12.8451 7.58685 12.77 7.06103 12.6197 6.68545H14.1972V13.7465C14.1972 14.1972 13.8216 14.2723 13.6714 14.2723H2.32864C1.87793 14.2723 1.80282 13.8967 1.80282 13.7465V6.61033H3.38028C3.30516 7.06103 3.23005 7.51174 3.23005 8.03756ZM16 13.7465V2.32864C16 1.42723 15.3991 0 13.6714 0H2.32864C1.35211 0 0 0.600939 0 2.32864V13.7465C0 14.6479 0.600939 16.0751 2.32864 16.0751H13.7465C14.6479 16 16 15.3991 16 13.7465Z"}" class="${"svelte-1g6edcb"}"></path></svg>`;
});
var youtube_svelte_svelte_type_style_lang = "";
const css = {
  code: "svg.svelte-1g6edcb path.svelte-1g6edcb{fill:var(--foreground-color)}",
  map: null
};
const Youtube = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<span class="${"nodisplay"}">Eyebeam&#39;s Youtube.</span>
<svg width="${"16"}" height="${"12"}" viewBox="${"0 0 16 12"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" role="${"image"}" aria-label="${"Follow us on Youtube."}" class="${"svelte-1g6edcb"}"><path d="${"M15.8609 3.33913C15.7913 2.92174 15.7913 2.43478 15.6522 2.01739C15.4435 0.973913 14.8174 0.347826 13.7043 0.278261C12.3826 0.13913 11.0609 0.13913 9.73913 0.0695652C9.6 0.0695652 9.46087 0.0695652 9.32174 0C8.41739 0 7.44348 0 6.53913 0C6.1913 0 5.84348 0 5.49565 0.0695652C4.31304 0.208696 3.13043 0.278261 1.94783 0.417391C1.11304 0.556522 0.556522 1.11304 0.347826 1.94783C0.0695652 3.06087 0 4.17391 0 5.28696C0 6.6087 0 7.93043 0.278261 9.18261C0.486957 10.2957 1.11304 10.9217 2.22609 10.9913C3.89565 11.1304 5.49565 11.2 7.16522 11.2C9.04348 11.2 10.9217 11.1304 12.8696 11.0609C13.287 11.0609 13.6348 10.9913 14.0522 10.9217C14.887 10.7826 15.513 10.2261 15.6522 9.3913C15.7913 8.62609 15.8609 7.86087 15.9304 7.09565C15.9304 6.95652 16 6.74783 16 6.6087C16 5.91304 16 5.28696 16 4.5913C15.9304 4.24348 15.8609 3.82609 15.8609 3.33913ZM6.33044 8.06956C6.33044 6.46956 6.33044 4.93913 6.33044 3.26956C7.72174 4.03478 9.11304 4.86957 10.5043 5.63478C9.11304 6.46956 7.72174 7.30435 6.33044 8.06956Z"}" class="${"svelte-1g6edcb"}"></path></svg>`;
});
var search_svelte_svelte_type_style_lang = "";
var statements_svelte_svelte_type_style_lang = "";
var largeSearch_svelte_svelte_type_style_lang = "";
var menu_svelte_svelte_type_style_lang = "";
