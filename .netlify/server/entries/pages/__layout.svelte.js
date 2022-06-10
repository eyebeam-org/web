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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_68ac15fd = require("../../chunks/index-68ac15fd.js");
var import_sample = __toESM(require("lodash/sample.js"));
var import_js_cookie = require("js-cookie");
var import_menu_svelte_svelte_type_style_lang_0e67a6a2 = require("../../chunks/menu.svelte_svelte_type_style_lang-0e67a6a2.js");
var import_sanity_59332496 = require("../../chunks/sanity-59332496.js");
var import_has = require("lodash/has.js");
var import_slugify = require("slugify");
var import_get = require("lodash/get.js");
var import_date_fns = require("date-fns");
var import_core = require("@popperjs/core");
var import_get_video_id = require("get-video-id");
var import_inRange = require("lodash/inRange.js");
var import_stores_25b712dd = require("../../chunks/stores-25b712dd.js");
var import_big_beam_b40565b9 = require("../../chunks/big-beam-b40565b9.js");
var import_logo_000a5202 = require("../../chunks/logo-000a5202.js");
var import_global_61b718ff = require("../../chunks/global-61b718ff.js");
var import_stores_2672c807 = require("../../chunks/stores-2672c807.js");
var import_tween = __toESM(require("@tweenjs/tween.js"));
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
const css$9 = {
  code: "svg.svelte-7pkpif.svelte-7pkpif{max-height:100%;width:60px;margin-left:20px}svg.svelte-7pkpif path.svelte-7pkpif{fill:none;stroke:var(--foreground-color);stroke-width:2.5px;stroke-miterlimit:10}",
  map: null
};
const Header_beam = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$9);
  return `<svg version="${"1.1"}" id="${"Layer_1"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" x="${"0px"}" y="${"0px"}" viewBox="${"0 0 326.4 167.6"}" style="${"enable-background:new 0 0 326.4 167.6;"}" xml:space="${"preserve"}" class="${"svelte-7pkpif"}"><path class="${"st0 svelte-7pkpif"}" d="${"M323.1,136.7l-121.6,21.4 M316.2,109.3l-116,42.2 M304.3,83.3l-106.9,61.6 M287.8,60.7L193.2,140 M269.1,41\n		l-79.3,94.4 M245.5,24.3L183.8,131 M219.2,12L177,127.9 M192.5,4.4l-21.4,121.4 M325,165.7H201.5 M2.4,136.7l121.6,21.4 M9.3,109.3\n		l116,42.2 M21.2,83.3l106.9,61.6 M37.7,60.7l94.6,79.2 M56.4,41l79.3,94.4 M80,24.3L141.7,131 M106.3,12l42.2,115.8 M133,4.4\n		l21.4,121.4 M161.9,1.8l0,123.3 M0.5,165.7H124"}"></path></svg>`;
});
var logoHeader_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: '.menu-content.svelte-1sejnou.svelte-1sejnou{transition:transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);position:relative;display:block;width:100%;padding-top:20px;text-align:center;display:flex;text-align:left;padding-left:60px}.menu-content.open.svelte-1sejnou.svelte-1sejnou{transform:translateY(240px)}.menu-content.svelte-1sejnou .home.svelte-1sejnou{font-family:"Eyebeam sans", Arial, sans-serif;font-size:44px}.menu-content.svelte-1sejnou .home .eyebeam-text.svelte-1sejnou{text-decoration:none;font-weight:600}@media(max-width: 800px){.menu-content.svelte-1sejnou.svelte-1sejnou{display:none}}',
  map: null
};
const Logo_header = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  let { trayOpen: trayOpen2 } = $$props;
  if ($$props.trayOpen === void 0 && $$bindings.trayOpen && trayOpen2 !== void 0)
    $$bindings.trayOpen(trayOpen2);
  $$result.css.add(css$8);
  return `<div class="${["menu-content svelte-1sejnou", trayOpen2 ? "open" : ""].join(" ").trim()}"><div class="${"home svelte-1sejnou"}" role="${"header"}"><a href="${"/"}" class="${"eyebeam-text svelte-1sejnou"}" aria-label="${"eyebeam-homepage"}">EYEBEAM${(0, import_index_68ac15fd.v)(Header_beam, "HeaderBeam").$$render($$result, {}, {}, {})}</a></div>
</div>`;
});
var clock_svelte_svelte_type_style_lang = "";
var fullBeam_svelte_svelte_type_style_lang = "";
var menubar_svelte_svelte_type_style_lang$1 = "";
const css$7 = {
  code: "svg.svelte-1t5c9in path.svelte-1t5c9in{stroke:var(--foreground-color)}svg.white.svelte-1t5c9in path.svelte-1t5c9in{stroke:#f5f4ee}svg.svelte-1t5c9in:hover path.svelte-1t5c9in{stroke:#f5f4ee}",
  map: null
};
const Search = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  let { white = false } = $$props;
  if ($$props.white === void 0 && $$bindings.white && white !== void 0)
    $$bindings.white(white);
  $$result.css.add(css$7);
  return `<svg class="${["icon svelte-1t5c9in", white ? "white" : ""].join(" ").trim()}" width="${"12"}" height="${"13"}" viewBox="${"0 0 12 13"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M11.2998 11.6992L7.2998 7.69922"}" stroke-width="${"2"}" class="${"svelte-1t5c9in"}"></path><path d="${"M5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9Z"}" stroke-width="${"2"}" class="${"svelte-1t5c9in"}"></path></svg>`;
});
var footer_svelte_svelte_type_style_lang$1 = "";
const css$6 = {
  code: ".search.svelte-1egppze.svelte-1egppze{text-decoration:none;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:flex-start;height:50px;width:50%;margin:0 auto 40px;border:1px solid var(--foreground-color);padding:15px;overflow:hidden;user-select:none}@media(max-width: 800px){.search.svelte-1egppze.svelte-1egppze{font-size:16px}}.search.svelte-1egppze .search-text.svelte-1egppze{margin-left:5px}.search.svelte-1egppze.svelte-1egppze:hover{background:#e0ded7;cursor:pointer;color:var(--hover-text-color)}.search.svelte-1egppze.svelte-1egppze:active{background:var(--foreground-color)}@media(max-width: 800px){.search.svelte-1egppze.svelte-1egppze{display:none}}footer.svelte-1egppze.svelte-1egppze{margin-top:20px;margin-bottom:40px;float:left;width:100%;display:flex;align-items:center;flex-direction:column}@media(max-width: 800px){footer.svelte-1egppze.svelte-1egppze{display:none}}footer.svelte-1egppze .line.svelte-1egppze{margin-bottom:5px}footer.svelte-1egppze .line a.svelte-1egppze{text-decoration:none}footer.svelte-1egppze .line .beams.svelte-1egppze{margin-bottom:5px;width:340px}footer.svelte-1egppze .line .wordmark.svelte-1egppze{margin-bottom:5px;width:340px}footer.svelte-1egppze .line.tagline.svelte-1egppze{margin-bottom:20px}footer.svelte-1egppze .line.address.svelte-1egppze{margin-bottom:5px}footer.svelte-1egppze .social-link.svelte-1egppze{float:left;margin-right:10px !important}",
  map: null
};
const Footer$1 = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  const contact = (0, import_sanity_59332496.l)("*[_id == 'contact'][0]");
  $$result.css.add(css$6);
  return `${function(__value) {
    if ((0, import_index_68ac15fd.i)(__value)) {
      __value.then(null, import_index_68ac15fd.n);
      return ``;
    }
    return function(contact2) {
      return `
	<footer role="${"footer"}" class="${"svelte-1egppze"}">

		<div class="${"line logo svelte-1egppze"}"><div class="${"beams svelte-1egppze"}">${(0, import_index_68ac15fd.v)(import_big_beam_b40565b9.B, "BigBeam").$$render($$result, {}, {}, {})}</div>
			<div class="${"wordmark svelte-1egppze"}">${(0, import_index_68ac15fd.v)(import_logo_000a5202.L, "Logo").$$render($$result, {}, {}, {})}</div></div>
		
		<div class="${"line tagline svelte-1egppze"}">${(0, import_index_68ac15fd.e)(contact2.tagline)}</div>
		
<a href="${"#search"}" class="${"tile search svelte-1egppze"}"><div class="${"icon"}">${(0, import_index_68ac15fd.v)(Search, "SearchIcon").$$render($$result, {}, {}, {})}</div> <span class="${"search-text svelte-1egppze"}">Search this website</span></a>

		
		<div class="${"line phone-number svelte-1egppze"}"><a${(0, import_index_68ac15fd.a)("href", "tel:" + contact2.phoneNumber, 0)} target="${"_blank"}" class="${"svelte-1egppze"}">${(0, import_index_68ac15fd.e)(contact2.phoneNumber)}</a></div>
		
		<div class="${"line email svelte-1egppze"}"><a${(0, import_index_68ac15fd.a)("href", "mailto:" + contact2.email, 0)} target="${"_blank"}" class="${"svelte-1egppze"}">${(0, import_index_68ac15fd.e)(contact2.email)}</a></div>
		
		<div class="${"line address svelte-1egppze"}">${(0, import_index_68ac15fd.e)(contact2.address)}</div>
		
		<div class="${"line social svelte-1egppze"}"><span class="${"social-link svelte-1egppze"}">${(0, import_index_68ac15fd.v)(import_menu_svelte_svelte_type_style_lang_0e67a6a2.N, "Newsletter").$$render($$result, {}, {}, {})}</span>
			<a${(0, import_index_68ac15fd.a)("href", import_global_61b718ff.I, 0)} target="${"_blank"}" class="${"social-link svelte-1egppze"}">${(0, import_index_68ac15fd.v)(import_menu_svelte_svelte_type_style_lang_0e67a6a2.I, "Instagram").$$render($$result, {}, {}, {})}</a>
			<a${(0, import_index_68ac15fd.a)("href", import_global_61b718ff.T, 0)} target="${"_blank"}" class="${"social-link svelte-1egppze"}">${(0, import_index_68ac15fd.v)(import_menu_svelte_svelte_type_style_lang_0e67a6a2.T, "Twitter").$$render($$result, {}, {}, {})}</a>
			<a${(0, import_index_68ac15fd.a)("href", import_global_61b718ff.Y, 0)} target="${"_blank"}" class="${"social-link svelte-1egppze"}">${(0, import_index_68ac15fd.v)(import_menu_svelte_svelte_type_style_lang_0e67a6a2.Y, "Youtube").$$render($$result, {}, {}, {})}</a></div></footer>
`;
    }(__value);
  }(contact)}
${``}`;
});
var menuX_svelte_svelte_type_style_lang = "";
var hamburger_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "svg.svelte-1e3mbpt path.svelte-1e3mbpt{stroke:var(--foreground-color);stroke-width:1px}",
  map: null
};
const Hamburger = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<svg width="${"30"}" height="${"20"}" viewBox="${"0 0 30 20"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-1e3mbpt"}"><path d="${"M0 10H30"}" class="${"svelte-1e3mbpt"}"></path><path d="${"M0 1H30"}" class="${"svelte-1e3mbpt"}"></path><path d="${"M0 19H30"}" class="${"svelte-1e3mbpt"}"></path></svg>`;
});
var menubar_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".menubar.svelte-1lc05gv.svelte-1lc05gv{cursor:pointer;margin-bottom:20px;display:none}.menubar.svelte-1lc05gv .search-bar.svelte-1lc05gv{background:var(--foreground-color);padding-top:8px;padding-bottom:8px;text-align:center;color:#f5f4ee}.menubar.svelte-1lc05gv .search-bar .icon.svelte-1lc05gv{margin-right:5px}.menubar.svelte-1lc05gv .logo.svelte-1lc05gv{margin:20px;display:block}.menubar.svelte-1lc05gv .wordmark.svelte-1lc05gv{margin:20px;display:block}.menubar.svelte-1lc05gv .menu-toggle.svelte-1lc05gv{border-bottom:1px solid var(--foreground-color);border-top:1px solid var(--foreground-color);margin:20px;font-size:27px;display:flex;justify-content:space-between;padding-top:8px;padding-bottom:8px;margin-bottom:0}.menubar.svelte-1lc05gv .menu.svelte-1lc05gv{border-bottom:1px solid var(--foreground-color);margin:20px;margin-top:0;font-size:27px;padding-bottom:8px;padding-top:8px}.menubar.svelte-1lc05gv .menu .menu-item.svelte-1lc05gv{display:block;text-decoration:none}.menubar.svelte-1lc05gv .menu .menu-item.svelte-1lc05gv:hover,.menubar.svelte-1lc05gv .menu .menu-item.svelte-1lc05gv:active{background:#e0ded7}@media(max-width: 800px){.menubar.svelte-1lc05gv.svelte-1lc05gv{display:block}}",
  map: null
};
const Menubar = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_68ac15fd.b)(import_stores_2672c807.p, (value) => $page = value);
  $$result.css.add(css$4);
  $$unsubscribe_page();
  return `<nav class="${"menubar svelte-1lc05gv"}"><div class="${"search-bar svelte-1lc05gv"}"><span class="${"icon svelte-1lc05gv"}">${(0, import_index_68ac15fd.v)(Search, "SearchIcon").$$render($$result, { white: true }, {}, {})}</span>Search this site
	</div>
	${$page.url.pathname == "/" ? `<a href="${"/"}" aria-label="${"The Eyebeam logo: lines spreading out in a half-circle like sun rays."}" class="${"logo svelte-1lc05gv"}">${(0, import_index_68ac15fd.v)(import_big_beam_b40565b9.B, "BigBeam").$$render($$result, {}, {}, {})}</a>` : ``}
		<div class="${"wordmark svelte-1lc05gv"}">${(0, import_index_68ac15fd.v)(import_logo_000a5202.L, "Logo").$$render($$result, {}, {}, {})}</div>
		<div class="${"menu-toggle svelte-1lc05gv"}"><span class="${"menu-toggle-header"}">Click to ${(0, import_index_68ac15fd.e)("show")} menu</span>
			<span class="${"icon svelte-1lc05gv"}">${`${(0, import_index_68ac15fd.v)(Hamburger, "Hamburger").$$render($$result, {}, {}, {})}`}</span></div>
		${``}</nav>

${``}`;
});
var footer_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "footer.svelte-1q9d0tg.svelte-1q9d0tg{margin-top:40px;margin-bottom:40px;width:100%;margin-right:20px;margin-left:20px;overflow:hidden;width:calc(100vw - 40px);display:none}footer.svelte-1q9d0tg .wordmark.svelte-1q9d0tg{width:180px}footer.svelte-1q9d0tg .tagline.svelte-1q9d0tg{font-size:32px;font-style:italic;line-height:1.1em;width:100%}footer.svelte-1q9d0tg .black-box.svelte-1q9d0tg{height:20px;width:20px;background:black;display:inline-block}@media(max-width: 800px){footer.svelte-1q9d0tg.svelte-1q9d0tg{display:block}}",
  map: null
};
const Footer = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  const contact = (0, import_sanity_59332496.l)("*[_id == 'contact'][0]");
  $$result.css.add(css$3);
  return `${function(__value) {
    if ((0, import_index_68ac15fd.i)(__value)) {
      __value.then(null, import_index_68ac15fd.n);
      return ``;
    }
    return function(contact2) {
      return `
	<footer class="${"svelte-1q9d0tg"}">
		<div class="${"wordmark svelte-1q9d0tg"}">${(0, import_index_68ac15fd.v)(import_logo_000a5202.L, "Logo").$$render($$result, {}, {}, {})}</div>
		
		<div class="${"line tagline svelte-1q9d0tg"}">${(0, import_index_68ac15fd.e)(contact2.tagline)}<span class="${"black-box svelte-1q9d0tg"}"></span></div></footer>
`;
    }(__value);
  }(contact)}`;
});
var animatedBeam_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "svg.svelte-n78eow.svelte-n78eow{height:90%}svg.svelte-n78eow path.svelte-n78eow,svg.svelte-n78eow line.svelte-n78eow{fill:none;stroke:var(--foreground-color);stroke-width:0.7px;stroke-miterlimit:10;opacity:0}svg.svelte-n78eow path.shown.svelte-n78eow,svg.svelte-n78eow line.shown.svelte-n78eow{opacity:1}",
  map: null
};
const Animated_beam = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  const EASING = import_tween.default.Easing.Cubic.Out;
  let counter = { value: 1 };
  let pos = 1;
  new import_tween.default.Tween(counter).to({
    value: 20
  }, 1500).easing(EASING).onUpdate(() => {
    pos = counter.value;
  });
  $$result.css.add(css$2);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 139.98 67.2"}" class="${"svelte-n78eow"}"><line class="${["l-1 svelte-n78eow", pos > 1 ? "shown" : ""].join(" ").trim()}" y1="${"66.95"}" x2="${"53.24"}" y2="${"66.95"}"></line><path class="${["l-2 svelte-n78eow", pos > 2 ? "shown" : ""].join(" ").trim()}" d="${"M.82,55.05,53.28,63.8Z"}"></path><path class="${["l-3 svelte-n78eow", pos > 3 ? "shown" : ""].join(" ").trim()}" d="${"M3.8,43.85l50,17.25Z"}"></path><path class="${["l-4 svelte-n78eow", pos > 4 ? "shown" : ""].join(" ").trim()}" d="${"M8.93,33.26,55.05,58.44Z"}"></path><path class="${["l-5 svelte-n78eow", pos > 5 ? "shown" : ""].join(" ").trim()}" d="${"M16.05,24,56.86,56.4Z"}"></path><path class="${["l-6 svelte-n78eow", pos > 6 ? "shown" : ""].join(" ").trim()}" d="${"M24.12,16,58.33,54.56Z"}"></path><path class="${["l-7 svelte-n78eow", pos > 7 ? "shown" : ""].join(" ").trim()}" d="${"M34.3,9.1,60.92,52.76Z"}"></path><path class="${["l-8 svelte-n78eow", pos > 8 ? "shown" : ""].join(" ").trim()}" d="${"M45.65,4.12l18.2,47.33Z"}"></path><path class="${["l-9 svelte-n78eow", pos > 9 ? "shown" : ""].join(" ").trim()}" d="${"M57.12,1,66.4,50.64Z"}"></path><line class="${["l-10 svelte-n78eow", pos > 10 ? "shown" : ""].join(" ").trim()}" x1="${"69.63"}" y1="${"50.35"}" x2="${"69.63"}"></line><path class="${["l-11 svelte-n78eow", pos > 11 ? "shown" : ""].join(" ").trim()}" d="${"M82.84,1,73.6,50.64Z"}"></path><path class="${["l-12 svelte-n78eow", pos > 12 ? "shown" : ""].join(" ").trim()}" d="${"M94.35,4.12,76.15,51.45Z"}"></path><path class="${["l-13 svelte-n78eow", pos > 13 ? "shown" : ""].join(" ").trim()}" d="${"M105.7,9.1,79.08,52.76Z"}"></path><path class="${["l-14 svelte-n78eow", pos > 14 ? "shown" : ""].join(" ").trim()}" d="${"M115.84,16,81.63,54.56Z"}"></path><path class="${["l-15 svelte-n78eow", pos > 15 ? "shown" : ""].join(" ").trim()}" d="${"M124,24,83.14,56.4Z"}"></path><path class="${["l-16 svelte-n78eow", pos > 16 ? "shown" : ""].join(" ").trim()}" d="${"M131.07,33.26,85,58.44Z"}"></path><path class="${["l-17 svelte-n78eow", pos > 17 ? "shown" : ""].join(" ").trim()}" d="${"M136.2,43.85l-50,17.25Z"}"></path><path class="${["l-18 svelte-n78eow", pos > 18 ? "shown" : ""].join(" ").trim()}" d="${"M139.18,55.05,86.72,63.8Z"}"></path><line class="${["l-19 svelte-n78eow", pos > 19 ? "shown" : ""].join(" ").trim()}" x1="${"86.74"}" y1="${"66.95"}" x2="${"139.98"}" y2="${"66.95"}"></line></svg>`;
});
var loading_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".loading.svelte-b9q8io.svelte-b9q8io{position:fixed;top:0;left:0;width:100vw;height:100vh;background:#f5f4ee;display:flex;align-items:center;justify-content:center;z-index:10;opacity:1}.loading.svelte-b9q8io .logo .beams.svelte-b9q8io{margin-bottom:15px;width:260px}.loading.svelte-b9q8io .logo .wordmark.svelte-b9q8io{margin-bottom:15px;width:260px}",
  map: null
};
const Loading = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"loading svelte-b9q8io"}">
	<div class="${"logo"}"><div class="${"beams svelte-b9q8io"}">${(0, import_index_68ac15fd.v)(Animated_beam, "AnimatedBeam").$$render($$result, {}, {}, {})}</div>
		<div class="${"wordmark svelte-b9q8io"}">${(0, import_index_68ac15fd.v)(import_logo_000a5202.L, "Logo").$$render($$result, {}, {}, {})}</div></div>
</div>`;
});
var sidebar_svelte_svelte_type_style_lang = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: `@charset "UTF-8";:root{--background-color:rgb(245, 244, 238);--foreground-color:rgb(34, 31, 32);--hover-text-color:rgb(34, 31, 32);--special-text-color:rgb(34, 31, 32);--journal-background-color:rgb(34, 31, 32);--font-stack:'Literata', serif}body,html{background:var(--background-color);color:var(--foreground-color);font-family:var(--font-stack);font-size:14px;margin:0;padding:0}a{color:var(--foreground-color)}*{box-sizing:border-box;transition:color 0.3s cubic-bezier(0.23, 1, 0.32, 1), background-color 0.3s cubic-bezier(0.23, 1, 0.32, 1);-webkit-tap-highlight-color:transparent}*::selection{background:rgba(224, 222, 215, 0.95)}*::-moz-selection{background:rgba(224, 222, 215, 0.95)}main{padding-top:20px;padding-left:60px;padding-right:60px;transition:transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);position:relative;opacity:1;display:flex;align-items:flex-start}main.open{transform:translateY(240px)}@media(max-width: 800px){main{padding-left:15px;padding-right:15px;padding-top:0;max-width:100%;display:inline-block}}main.journal{background:var(--journal-background-color);padding-bottom:120px;min-height:100vh}h1{font-size:54px;font-weight:normal;margin:0;line-height:1.2em;font-family:"Eyebeam sans", Arial, sans-serif;text-transform:uppercase}@media(max-width: 800px){h1{font-size:32px}}h2{font-size:32px;font-weight:normal;letter-spacing:-0.025em;margin:0;line-height:1.2em}h3{font-size:16px;font-weight:bold;margin:0;line-height:1.2em;letter-spacing:-0.025em}figure{margin-right:0;margin-left:0;margin-top:20px}figure img{max-width:100%}.article p,.article h2,.article h3{margin-left:20px;margin-right:40px;margin-bottom:20px}@media(max-width: 800px){.article p,.article h2,.article h3{padding-right:0;padding-left:0;margin-left:0;margin-right:0}}.article p{font-size:16px}figcaption{font-style:italic}figcaption p{padding-left:0 !important;padding-right:0 !important;padding-top:0 !important;margin-top:0 !important}ul{list-style:none;margin-left:15px;padding-left:0;margin-left:0}ul li{padding-left:1em;text-indent:-1em}ul li:before{content:'\u2022';padding-right:5px;position:relative;top:-1px}.nodisplay{display:none}`,
  map: null
};
const BLACK = "rgb(34, 31, 32)";
const WHITE = "rgb(245, 244, 238)";
const RED = "rgb(255, 0, 0)";
const GREEN = "rgb(0, 160, 0)";
const BLUE = "rgb(0, 0, 255)";
const MAIN_FONT = "'Work Sans', Arial, sans-serif";
const ALT_FONT = "'Eyebeam Sans', sans-serif";
const _layout = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $theme, $$unsubscribe_theme;
  let $inversion, $$unsubscribe_inversion;
  let $trayOpen, $$unsubscribe_trayOpen;
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_page = (0, import_index_68ac15fd.b)(import_stores_2672c807.p, (value) => $page = value);
  $$unsubscribe_theme = (0, import_index_68ac15fd.b)(import_stores_25b712dd.t, (value) => $theme = value);
  $$unsubscribe_inversion = (0, import_index_68ac15fd.b)(import_stores_25b712dd.i, (value) => $inversion = value);
  $$unsubscribe_trayOpen = (0, import_index_68ac15fd.b)(import_stores_25b712dd.a, (value) => $trayOpen = value);
  $$unsubscribe_navigating = (0, import_index_68ac15fd.b)(import_stores_2672c807.n, (value) => $navigating = value);
  let root = {};
  const RGB = [RED, GREEN, BLUE];
  let isJournal = false;
  $$result.css.add(css);
  {
    if (root.style) {
      if ($inversion) {
        console.log("DARKMODE");
        root.style.setProperty("--background-color", BLACK);
        root.style.setProperty("--foreground-color", WHITE);
        root.style.setProperty("--hover-text-color", BLACK);
        root.style.setProperty("--special-text-color", BLACK);
        root.style.setProperty("--journal-background-color", BLACK);
      } else {
        console.log("LIGHT MODE");
        root.style.setProperty("--background-color", WHITE);
        root.style.setProperty("--foreground-color", BLACK);
        root.style.setProperty("--hover-text-color", BLACK);
        root.style.setProperty("--special-text-color", BLACK);
        root.style.setProperty("--journal-background-color", BLACK);
      }
    }
  }
  {
    if (root.style) {
      if ($theme == "rgb") {
        console.log("RGB");
        let randomColor = (0, import_sample.default)(RGB);
        root.style.setProperty("--font-stack", ALT_FONT);
        root.style.setProperty("--background-color", WHITE);
        root.style.setProperty("--foreground-color", randomColor);
        root.style.setProperty("--hover-text-color", randomColor);
        root.style.setProperty("--special-text-color", randomColor);
        root.style.setProperty("--journal-background-color", randomColor);
        import_stores_25b712dd.i.set(false);
      }
      if ($theme == "ink") {
        console.log("INK");
        root.style.setProperty("--font-stack", MAIN_FONT);
        root.style.setProperty("--background-color", WHITE);
        root.style.setProperty("--foreground-color", BLACK);
        root.style.setProperty("--hover-text-color", BLACK);
        root.style.setProperty("--special-text-color", BLACK);
        root.style.setProperty("--journal-background-color", BLACK);
      }
    }
  }
  {
    if ($page.url.pathname.includes("/journal")) {
      isJournal = true;
    } else {
      isJournal = false;
    }
  }
  $$unsubscribe_page();
  $$unsubscribe_theme();
  $$unsubscribe_inversion();
  $$unsubscribe_trayOpen();
  $$unsubscribe_navigating();
  return `



${(0, import_index_68ac15fd.v)(Menubar, "PhoneMenubar").$$render($$result, {}, {}, {})}
${(0, import_index_68ac15fd.v)(Logo_header, "LogoHeader").$$render($$result, { trayOpen: $trayOpen }, {}, {})}


${`
	${(0, import_index_68ac15fd.v)(Loading, "Loading").$$render($$result, {}, {}, {})}`}



${$navigating == null ? `${$page.url.pathname !== "/" && !isJournal ? `${(0, import_index_68ac15fd.v)(Footer$1, "Footer").$$render($$result, {}, {}, {})}` : ``}
	
	${!isJournal ? `${(0, import_index_68ac15fd.v)(Footer, "PhoneFooter").$$render($$result, {}, {}, {})}` : ``}` : ``}`;
});
