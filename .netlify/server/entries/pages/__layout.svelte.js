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
var import_index_277e1cdb = require("../../chunks/index-277e1cdb.js");
var import_sample = __toESM(require("lodash/sample.js"));
var import_js_cookie = require("js-cookie");
var import_menu_d4d57d79 = require("../../chunks/menu-d4d57d79.js");
var import_sanity_59332496 = require("../../chunks/sanity-59332496.js");
var import_has = require("lodash/has.js");
var import_slugify = require("slugify");
var import_get = require("lodash/get.js");
var import_date_fns = require("date-fns");
var import_core = require("@popperjs/core");
var import_get_video_id = require("get-video-id");
var import_inRange = require("lodash/inRange.js");
var import_stores_effda588 = require("../../chunks/stores-effda588.js");
var import_big_beam_c5c43470 = require("../../chunks/big-beam-c5c43470.js");
var import_logo_255ac452 = require("../../chunks/logo-255ac452.js");
var import_global_61b718ff = require("../../chunks/global-61b718ff.js");
var import_stores_b7bb0fad = require("../../chunks/stores-b7bb0fad.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
const css$8 = {
  code: "svg.svelte-7pkpif.svelte-7pkpif{max-height:100%;width:60px;margin-left:20px}svg.svelte-7pkpif path.svelte-7pkpif{fill:none;stroke:var(--foreground-color);stroke-width:2.5px;stroke-miterlimit:10}",
  map: null
};
const Header_beam = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `<svg version="${"1.1"}" id="${"Layer_1"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" x="${"0px"}" y="${"0px"}" viewBox="${"0 0 326.4 167.6"}" style="${"enable-background:new 0 0 326.4 167.6;"}" xml:space="${"preserve"}" class="${"svelte-7pkpif"}"><path class="${"st0 svelte-7pkpif"}" d="${"M323.1,136.7l-121.6,21.4 M316.2,109.3l-116,42.2 M304.3,83.3l-106.9,61.6 M287.8,60.7L193.2,140 M269.1,41\n		l-79.3,94.4 M245.5,24.3L183.8,131 M219.2,12L177,127.9 M192.5,4.4l-21.4,121.4 M325,165.7H201.5 M2.4,136.7l121.6,21.4 M9.3,109.3\n		l116,42.2 M21.2,83.3l106.9,61.6 M37.7,60.7l94.6,79.2 M56.4,41l79.3,94.4 M80,24.3L141.7,131 M106.3,12l42.2,115.8 M133,4.4\n		l21.4,121.4 M161.9,1.8l0,123.3 M0.5,165.7H124"}"></path></svg>`;
});
var logoHeader_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: '.menu-content.svelte-1sejnou.svelte-1sejnou{transition:transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);position:relative;display:block;width:100%;padding-top:20px;text-align:center;display:flex;text-align:left;padding-left:60px}.menu-content.open.svelte-1sejnou.svelte-1sejnou{transform:translateY(240px)}.menu-content.svelte-1sejnou .home.svelte-1sejnou{font-family:"Eyebeam sans", Arial, sans-serif;font-size:44px}.menu-content.svelte-1sejnou .home .eyebeam-text.svelte-1sejnou{text-decoration:none;font-weight:600}@media(max-width: 800px){.menu-content.svelte-1sejnou.svelte-1sejnou{display:none}}',
  map: null
};
const Logo_header = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { trayOpen: trayOpen2 } = $$props;
  if ($$props.trayOpen === void 0 && $$bindings.trayOpen && trayOpen2 !== void 0)
    $$bindings.trayOpen(trayOpen2);
  $$result.css.add(css$7);
  return `<div class="${["menu-content svelte-1sejnou", trayOpen2 ? "open" : ""].join(" ").trim()}"><div class="${"home svelte-1sejnou"}" role="${"header"}"><a href="${"/"}" class="${"eyebeam-text svelte-1sejnou"}" aria-label="${"eyebeam-homepage"}">EYEBEAM${(0, import_index_277e1cdb.v)(Header_beam, "HeaderBeam").$$render($$result, {}, {}, {})}</a></div>
</div>`;
});
var clock_svelte_svelte_type_style_lang = "";
var fullBeam_svelte_svelte_type_style_lang = "";
var menubar_svelte_svelte_type_style_lang$1 = "";
const css$6 = {
  code: "svg.svelte-1t5c9in path.svelte-1t5c9in{stroke:var(--foreground-color)}svg.white.svelte-1t5c9in path.svelte-1t5c9in{stroke:#f5f4ee}svg.svelte-1t5c9in:hover path.svelte-1t5c9in{stroke:#f5f4ee}",
  map: null
};
const Search = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { white = false } = $$props;
  if ($$props.white === void 0 && $$bindings.white && white !== void 0)
    $$bindings.white(white);
  $$result.css.add(css$6);
  return `<svg class="${["icon svelte-1t5c9in", white ? "white" : ""].join(" ").trim()}" width="${"12"}" height="${"13"}" viewBox="${"0 0 12 13"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M11.2998 11.6992L7.2998 7.69922"}" stroke-width="${"2"}" class="${"svelte-1t5c9in"}"></path><path d="${"M5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9Z"}" stroke-width="${"2"}" class="${"svelte-1t5c9in"}"></path></svg>`;
});
var footer_svelte_svelte_type_style_lang$1 = "";
const css$5 = {
  code: ".search.svelte-1egppze.svelte-1egppze{text-decoration:none;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:flex-start;height:50px;width:50%;margin:0 auto 40px;border:1px solid var(--foreground-color);padding:15px;overflow:hidden;user-select:none}@media(max-width: 800px){.search.svelte-1egppze.svelte-1egppze{font-size:16px}}.search.svelte-1egppze .search-text.svelte-1egppze{margin-left:5px}.search.svelte-1egppze.svelte-1egppze:hover{background:#e0ded7;cursor:pointer;color:var(--hover-text-color)}.search.svelte-1egppze.svelte-1egppze:active{background:var(--foreground-color)}@media(max-width: 800px){.search.svelte-1egppze.svelte-1egppze{display:none}}footer.svelte-1egppze.svelte-1egppze{margin-top:20px;margin-bottom:40px;float:left;width:100%;display:flex;align-items:center;flex-direction:column}@media(max-width: 800px){footer.svelte-1egppze.svelte-1egppze{display:none}}footer.svelte-1egppze .line.svelte-1egppze{margin-bottom:5px}footer.svelte-1egppze .line a.svelte-1egppze{text-decoration:none}footer.svelte-1egppze .line .beams.svelte-1egppze{margin-bottom:5px;width:340px}footer.svelte-1egppze .line .wordmark.svelte-1egppze{margin-bottom:5px;width:340px}footer.svelte-1egppze .line.tagline.svelte-1egppze{margin-bottom:20px}footer.svelte-1egppze .line.address.svelte-1egppze{margin-bottom:5px}footer.svelte-1egppze .social-link.svelte-1egppze{float:left;margin-right:10px !important}",
  map: null
};
const Footer$1 = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  const contact = (0, import_sanity_59332496.l)("*[_id == 'contact'][0]");
  $$result.css.add(css$5);
  return `${function(__value) {
    if ((0, import_index_277e1cdb.i)(__value)) {
      __value.then(null, import_index_277e1cdb.n);
      return ``;
    }
    return function(contact2) {
      return `
	<footer role="${"footer"}" class="${"svelte-1egppze"}">

		<div class="${"line logo svelte-1egppze"}"><div class="${"beams svelte-1egppze"}">${(0, import_index_277e1cdb.v)(import_big_beam_c5c43470.B, "BigBeam").$$render($$result, {}, {}, {})}</div>
			<div class="${"wordmark svelte-1egppze"}">${(0, import_index_277e1cdb.v)(import_logo_255ac452.L, "Logo").$$render($$result, {}, {}, {})}</div></div>
		
		<div class="${"line tagline svelte-1egppze"}">${(0, import_index_277e1cdb.e)(contact2.tagline)}</div>
		
<a href="${"#search"}" class="${"tile search svelte-1egppze"}"><div class="${"icon"}">${(0, import_index_277e1cdb.v)(Search, "SearchIcon").$$render($$result, {}, {}, {})}</div> <span class="${"search-text svelte-1egppze"}">Search this website</span></a>

		
		<div class="${"line phone-number svelte-1egppze"}"><a${(0, import_index_277e1cdb.a)("href", "tel:" + contact2.phoneNumber, 0)} target="${"_blank"}" class="${"svelte-1egppze"}">${(0, import_index_277e1cdb.e)(contact2.phoneNumber)}</a></div>
		
		<div class="${"line email svelte-1egppze"}"><a${(0, import_index_277e1cdb.a)("href", "mailto:" + contact2.email, 0)} target="${"_blank"}" class="${"svelte-1egppze"}">${(0, import_index_277e1cdb.e)(contact2.email)}</a></div>
		
		<div class="${"line address svelte-1egppze"}">${(0, import_index_277e1cdb.e)(contact2.address)}</div>
		
		<div class="${"line social svelte-1egppze"}"><span class="${"social-link svelte-1egppze"}">${(0, import_index_277e1cdb.v)(import_menu_d4d57d79.N, "Newsletter").$$render($$result, {}, {}, {})}</span>
			<a${(0, import_index_277e1cdb.a)("href", import_global_61b718ff.I, 0)} target="${"_blank"}" class="${"social-link svelte-1egppze"}">${(0, import_index_277e1cdb.v)(import_menu_d4d57d79.I, "Instagram").$$render($$result, {}, {}, {})}</a>
			<a${(0, import_index_277e1cdb.a)("href", import_global_61b718ff.T, 0)} target="${"_blank"}" class="${"social-link svelte-1egppze"}">${(0, import_index_277e1cdb.v)(import_menu_d4d57d79.T, "Twitter").$$render($$result, {}, {}, {})}</a>
			<a${(0, import_index_277e1cdb.a)("href", import_global_61b718ff.Y, 0)} target="${"_blank"}" class="${"social-link svelte-1egppze"}">${(0, import_index_277e1cdb.v)(import_menu_d4d57d79.Y, "Youtube").$$render($$result, {}, {}, {})}</a></div></footer>
`;
    }(__value);
  }(contact)}
${``}`;
});
var menuX_svelte_svelte_type_style_lang = "";
var hamburger_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "svg.svelte-1e3mbpt path.svelte-1e3mbpt{stroke:var(--foreground-color);stroke-width:1px}",
  map: null
};
const Hamburger = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<svg width="${"30"}" height="${"20"}" viewBox="${"0 0 30 20"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-1e3mbpt"}"><path d="${"M0 10H30"}" class="${"svelte-1e3mbpt"}"></path><path d="${"M0 1H30"}" class="${"svelte-1e3mbpt"}"></path><path d="${"M0 19H30"}" class="${"svelte-1e3mbpt"}"></path></svg>`;
});
var menubar_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".menubar.svelte-1lc05gv.svelte-1lc05gv{cursor:pointer;margin-bottom:20px;display:none}.menubar.svelte-1lc05gv .search-bar.svelte-1lc05gv{background:var(--foreground-color);padding-top:8px;padding-bottom:8px;text-align:center;color:#f5f4ee}.menubar.svelte-1lc05gv .search-bar .icon.svelte-1lc05gv{margin-right:5px}.menubar.svelte-1lc05gv .logo.svelte-1lc05gv{margin:20px;display:block}.menubar.svelte-1lc05gv .wordmark.svelte-1lc05gv{margin:20px;display:block}.menubar.svelte-1lc05gv .menu-toggle.svelte-1lc05gv{border-bottom:1px solid var(--foreground-color);border-top:1px solid var(--foreground-color);margin:20px;font-size:27px;display:flex;justify-content:space-between;padding-top:8px;padding-bottom:8px;margin-bottom:0}.menubar.svelte-1lc05gv .menu.svelte-1lc05gv{border-bottom:1px solid var(--foreground-color);margin:20px;margin-top:0;font-size:27px;padding-bottom:8px;padding-top:8px}.menubar.svelte-1lc05gv .menu .menu-item.svelte-1lc05gv{display:block;text-decoration:none}.menubar.svelte-1lc05gv .menu .menu-item.svelte-1lc05gv:hover,.menubar.svelte-1lc05gv .menu .menu-item.svelte-1lc05gv:active{background:#e0ded7}@media(max-width: 800px){.menubar.svelte-1lc05gv.svelte-1lc05gv{display:block}}",
  map: null
};
const Menubar = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_277e1cdb.b)(import_stores_b7bb0fad.p, (value) => $page = value);
  $$result.css.add(css$3);
  $$unsubscribe_page();
  return `<nav class="${"menubar svelte-1lc05gv"}"><div class="${"search-bar svelte-1lc05gv"}"><span class="${"icon svelte-1lc05gv"}">${(0, import_index_277e1cdb.v)(Search, "SearchIcon").$$render($$result, { white: true }, {}, {})}</span>Search this site
	</div>
	${$page.url.pathname == "/" ? `<a href="${"/"}" aria-label="${"The Eyebeam logo: lines spreading out in a half-circle like sun rays."}" class="${"logo svelte-1lc05gv"}">${(0, import_index_277e1cdb.v)(import_big_beam_c5c43470.B, "BigBeam").$$render($$result, {}, {}, {})}</a>` : ``}
<div class="${"wordmark svelte-1lc05gv"}"><a href="${"/"}">${(0, import_index_277e1cdb.v)(import_logo_255ac452.L, "Logo").$$render($$result, {}, {}, {})}</a></div>
		<div class="${"menu-toggle svelte-1lc05gv"}"><span class="${"menu-toggle-header"}">Click to ${(0, import_index_277e1cdb.e)("show")} menu</span>
			<span class="${"icon svelte-1lc05gv"}">${`${(0, import_index_277e1cdb.v)(Hamburger, "Hamburger").$$render($$result, {}, {}, {})}`}</span></div>
		${``}</nav>

${``}`;
});
var footer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "footer.svelte-1q9d0tg.svelte-1q9d0tg{margin-top:40px;margin-bottom:40px;width:100%;margin-right:20px;margin-left:20px;overflow:hidden;width:calc(100vw - 40px);display:none}footer.svelte-1q9d0tg .wordmark.svelte-1q9d0tg{width:180px}footer.svelte-1q9d0tg .tagline.svelte-1q9d0tg{font-size:32px;font-style:italic;line-height:1.1em;width:100%}footer.svelte-1q9d0tg .black-box.svelte-1q9d0tg{height:20px;width:20px;background:black;display:inline-block}@media(max-width: 800px){footer.svelte-1q9d0tg.svelte-1q9d0tg{display:block}}",
  map: null
};
const Footer = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  const contact = (0, import_sanity_59332496.l)("*[_id == 'contact'][0]");
  $$result.css.add(css$2);
  return `${function(__value) {
    if ((0, import_index_277e1cdb.i)(__value)) {
      __value.then(null, import_index_277e1cdb.n);
      return ``;
    }
    return function(contact2) {
      return `
	<footer class="${"svelte-1q9d0tg"}">
		<div class="${"wordmark svelte-1q9d0tg"}">${(0, import_index_277e1cdb.v)(import_logo_255ac452.L, "Logo").$$render($$result, {}, {}, {})}</div>
		
		<div class="${"line tagline svelte-1q9d0tg"}">${(0, import_index_277e1cdb.e)(contact2.tagline)}<span class="${"black-box svelte-1q9d0tg"}"></span></div></footer>
`;
    }(__value);
  }(contact)}`;
});
var sidebar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".tile.svelte-15wxrzg.svelte-15wxrzg{padding:15px;overflow:hidden}.sidebar.svelte-15wxrzg.svelte-15wxrzg{width:calc(100% / 6);border:1px solid var(--foreground-color);border-right:none;border-bottom:none;font-size:14px}.sidebar.full-borders.svelte-15wxrzg.svelte-15wxrzg{border-right:1px solid var(--foreground-color)}@media(max-width: 800px){.sidebar.svelte-15wxrzg.svelte-15wxrzg{display:none}}.sidebar.svelte-15wxrzg .open-eyebeam.svelte-15wxrzg{border-bottom:1px solid var(--foreground-color);background:#e0ded7;height:calc(100vh - 130px);width:100%;float:left;position:relative;padding:0}.sidebar.svelte-15wxrzg .logo a.svelte-15wxrzg{display:block}.sidebar.svelte-15wxrzg .toc.svelte-15wxrzg{padding-top:0;border-bottom:1px solid var(--foreground-color)}.sidebar.svelte-15wxrzg .toc .pseudo-link.svelte-15wxrzg{text-decoration:none;cursor:pointer}.sidebar.svelte-15wxrzg .toc .pseudo-link.svelte-15wxrzg:hover{text-decoration:underline}",
  map: null
};
const Sidebar = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let $sidebarToC, $$unsubscribe_sidebarToC;
  let $sidebarTitle, $$unsubscribe_sidebarTitle;
  $$unsubscribe_sidebarToC = (0, import_index_277e1cdb.b)(import_stores_effda588.s, (value) => $sidebarToC = value);
  $$unsubscribe_sidebarTitle = (0, import_index_277e1cdb.b)(import_stores_effda588.a, (value) => $sidebarTitle = value);
  let { fullBorders = false } = $$props;
  let hasContent = false;
  if ($$props.fullBorders === void 0 && $$bindings.fullBorders && fullBorders !== void 0)
    $$bindings.fullBorders(fullBorders);
  $$result.css.add(css$1);
  hasContent = $sidebarToC.length > 0;
  {
    console.log("sidebarToc: ", $sidebarToC);
  }
  $$unsubscribe_sidebarToC();
  $$unsubscribe_sidebarTitle();
  return `
<aside class="${["sidebar svelte-15wxrzg", fullBorders ? "full-borders" : ""].join(" ").trim()}"><div class="${"tile open-eyebeam svelte-15wxrzg"}">${(0, import_index_277e1cdb.v)(import_menu_d4d57d79.M, "Menu").$$render($$result, {}, {}, {})}</div>

	
	${hasContent ? `<nav aria-label="${"Secondary"}" class="${"tile toc svelte-15wxrzg"}"><p>${(0, import_index_277e1cdb.e)($sidebarTitle)}</p>
			${$sidebarToC.length > 0 ? `<ul>${(0, import_index_277e1cdb.d)($sidebarToC, (item) => {
    return `<li><a class="${"pseudo-link svelte-15wxrzg"}">${(0, import_index_277e1cdb.e)(item.title)}</a>
						</li>`;
  })}</ul>` : ``}</nav>` : ``}

</aside>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: `@charset "UTF-8";:root{--background-color:rgb(245, 244, 238);--foreground-color:rgb(34, 31, 32);--hover-text-color:rgb(34, 31, 32);--special-text-color:rgb(34, 31, 32);--journal-background-color:rgb(34, 31, 32);--font-stack:'Literata', serif}body,html{background:var(--background-color);color:var(--foreground-color);font-family:var(--font-stack);font-size:14px;margin:0;padding:0}a{color:var(--foreground-color)}*{box-sizing:border-box;transition:color 0.3s cubic-bezier(0.23, 1, 0.32, 1), background-color 0.3s cubic-bezier(0.23, 1, 0.32, 1);-webkit-tap-highlight-color:transparent}*::selection{background:rgba(224, 222, 215, 0.95)}*::-moz-selection{background:rgba(224, 222, 215, 0.95)}main{padding-top:20px;padding-left:60px;padding-right:60px;transition:transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);position:relative;opacity:1;display:flex;align-items:flex-start}main.open{transform:translateY(240px)}@media(max-width: 800px){main{padding-left:15px;padding-right:15px;padding-top:0;max-width:100%;width:100%;display:inline-block}}main.journal{background:var(--journal-background-color);padding-bottom:120px;min-height:100vh}h1{font-size:54px;font-weight:normal;margin:0;line-height:1.2em;font-family:"Eyebeam sans", Arial, sans-serif;text-transform:uppercase}@media(max-width: 800px){h1{font-size:32px}}h2{font-size:32px;font-weight:normal;letter-spacing:-0.025em;margin:0;line-height:1.2em}h3{font-size:16px;font-weight:bold;margin:0;line-height:1.2em;letter-spacing:-0.025em}figure{margin-right:0;margin-left:0;margin-top:20px}figure img{max-width:100%}.article p,.article h2,.article h3{margin-left:20px;margin-right:40px;margin-bottom:20px}@media(max-width: 800px){.article p,.article h2,.article h3{padding-right:0;padding-left:0;margin-left:0;margin-right:0}}.article p{font-size:16px}figcaption{font-style:italic}figcaption p{padding-left:0 !important;padding-right:0 !important;padding-top:0 !important;margin-top:0 !important}ul{list-style:none;margin-left:15px;padding-left:0;margin-left:0}ul li{padding-left:1em;text-indent:-1em}ul li:before{content:'\u2022';padding-right:5px;position:relative;top:-1px}.nodisplay{display:none}`,
  map: null
};
const BLACK = "rgb(34, 31, 32)";
const WHITE = "rgb(245, 244, 238)";
const RED = "rgb(255, 0, 0)";
const GREEN = "rgb(0, 160, 0)";
const BLUE = "rgb(0, 0, 255)";
const MAIN_FONT = "'Work Sans', Arial, sans-serif";
const ALT_FONT = "'Eyebeam Sans', sans-serif";
const _layout = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $theme, $$unsubscribe_theme;
  let $inversion, $$unsubscribe_inversion;
  let $trayOpen, $$unsubscribe_trayOpen;
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_page = (0, import_index_277e1cdb.b)(import_stores_b7bb0fad.p, (value) => $page = value);
  $$unsubscribe_theme = (0, import_index_277e1cdb.b)(import_stores_effda588.t, (value) => $theme = value);
  $$unsubscribe_inversion = (0, import_index_277e1cdb.b)(import_stores_effda588.i, (value) => $inversion = value);
  $$unsubscribe_trayOpen = (0, import_index_277e1cdb.b)(import_stores_effda588.b, (value) => $trayOpen = value);
  $$unsubscribe_navigating = (0, import_index_277e1cdb.b)(import_stores_b7bb0fad.n, (value) => $navigating = value);
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
        import_stores_effda588.i.set(false);
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



${(0, import_index_277e1cdb.v)(Menubar, "PhoneMenubar").$$render($$result, {}, {}, {})}
${(0, import_index_277e1cdb.v)(Logo_header, "LogoHeader").$$render($$result, { trayOpen: $trayOpen }, {}, {})}


	
	<main id="${"main"}" role="${"main"}"${(0, import_index_277e1cdb.f)((($trayOpen ? "open" : "") + " " + (isJournal ? "journal" : "") + " " + ($inversion ? "inversion" : "")).trim())}>
		${$page.url.pathname == "/" || isJournal ? `${$navigating == null ? `${slots.default ? slots.default({}) : ``}` : `<div class="${"navigating"}"></div>`}` : `${(0, import_index_277e1cdb.v)(Sidebar, "Sidebar").$$render($$result, { fullBorders: $navigating !== null }, {}, {})}
			${$navigating == null ? `${slots.default ? slots.default({}) : ``}` : `<div class="${"navigating"}"></div>`}`}</main>



${$navigating == null ? `${$page.url.pathname !== "/" && !isJournal ? `${(0, import_index_277e1cdb.v)(Footer$1, "Footer").$$render($$result, {}, {}, {})}` : ``}
	
	${!isJournal ? `${(0, import_index_277e1cdb.v)(Footer, "PhoneFooter").$$render($$result, {}, {}, {})}` : ``}` : ``}`;
});
