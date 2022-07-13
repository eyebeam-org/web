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
var import_menu_9f832952 = require("../../chunks/menu-9f832952.js");
var import_sanity_bfd50d1d = require("../../chunks/sanity-bfd50d1d.js");
var import_has = require("lodash/has.js");
var import_slugify = require("slugify");
var import_get = require("lodash/get.js");
var import_date_fns = require("date-fns");
var import_core = require("@popperjs/core");
var import_get_video_id = require("get-video-id");
var import_inRange = require("lodash/inRange.js");
var import_stores_f9761b8b = require("../../chunks/stores-f9761b8b.js");
var import_big_beam_c5c43470 = require("../../chunks/big-beam-c5c43470.js");
var import_logo_255ac452 = require("../../chunks/logo-255ac452.js");
var import_global_eadaa9b6 = require("../../chunks/global-eadaa9b6.js");
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
  code: '.menu-content.svelte-13k6i0t.svelte-13k6i0t{transition:transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);position:relative;display:block;width:100%;padding-top:20px;text-align:center;display:flex;text-align:left;padding-left:60px}.menu-content.open.svelte-13k6i0t.svelte-13k6i0t{transform:translateY(240px)}.menu-content.svelte-13k6i0t .home.svelte-13k6i0t{font-family:"Eyebeam sans", Arial, sans-serif;font-size:44px}.menu-content.svelte-13k6i0t .home .eyebeam-text.svelte-13k6i0t{text-decoration:none;font-weight:600}@media(max-width: 800px), screen and (orientation: portrait){.menu-content.svelte-13k6i0t.svelte-13k6i0t{display:none}}',
  map: null
};
const Logo_header = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { trayOpen: trayOpen2 } = $$props;
  if ($$props.trayOpen === void 0 && $$bindings.trayOpen && trayOpen2 !== void 0)
    $$bindings.trayOpen(trayOpen2);
  $$result.css.add(css$7);
  return `<div class="${["menu-content svelte-13k6i0t", trayOpen2 ? "open" : ""].join(" ").trim()}"><div class="${"home svelte-13k6i0t"}" role="${"header"}"><a href="${"/"}" class="${"eyebeam-text svelte-13k6i0t"}" aria-label="${"eyebeam-homepage"}">EYEBEAM${(0, import_index_277e1cdb.v)(Header_beam, "HeaderBeam").$$render($$result, {}, {}, {})}</a></div>
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
  code: ".search.svelte-zxatyl.svelte-zxatyl{text-decoration:none;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:flex-start;height:50px;width:50%;margin:0 auto 40px;border:1px solid var(--foreground-color);padding:15px;overflow:hidden;user-select:none}@media(max-width: 800px), screen and (orientation: portrait){.search.svelte-zxatyl.svelte-zxatyl{font-size:16px}}.search.svelte-zxatyl .search-text.svelte-zxatyl{margin-left:5px}.search.svelte-zxatyl.svelte-zxatyl:hover{background:#e0ded7;cursor:pointer;color:var(--hover-text-color)}.search.svelte-zxatyl.svelte-zxatyl:active{background:var(--foreground-color)}@media(max-width: 800px), screen and (orientation: portrait){.search.svelte-zxatyl.svelte-zxatyl{display:none}}footer.svelte-zxatyl.svelte-zxatyl{margin-top:20px;margin-bottom:40px;float:left;width:100%;display:flex;align-items:center;flex-direction:column}@media(max-width: 800px), screen and (orientation: portrait){footer.svelte-zxatyl.svelte-zxatyl{display:none}}footer.svelte-zxatyl .line.svelte-zxatyl{margin-bottom:5px}footer.svelte-zxatyl .line a.svelte-zxatyl{text-decoration:none}footer.svelte-zxatyl .line .beams.svelte-zxatyl{margin-bottom:5px;width:340px}footer.svelte-zxatyl .line .wordmark.svelte-zxatyl{margin-bottom:5px;width:340px}footer.svelte-zxatyl .line.tagline.svelte-zxatyl{margin-bottom:20px}footer.svelte-zxatyl .line.address.svelte-zxatyl{margin-bottom:5px}footer.svelte-zxatyl .social-link.svelte-zxatyl{float:left;margin-right:10px !important}",
  map: null
};
const Footer$1 = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  const contact = (0, import_sanity_bfd50d1d.l)("*[_id == 'contact'][0]");
  $$result.css.add(css$5);
  return `${function(__value) {
    if ((0, import_index_277e1cdb.i)(__value)) {
      __value.then(null, import_index_277e1cdb.n);
      return ``;
    }
    return function(contact2) {
      return `
	<footer role="${"footer"}" class="${"svelte-zxatyl"}">

		<div class="${"line logo svelte-zxatyl"}"><div class="${"beams svelte-zxatyl"}">${(0, import_index_277e1cdb.v)(import_big_beam_c5c43470.B, "BigBeam").$$render($$result, {}, {}, {})}</div>
			<div class="${"wordmark svelte-zxatyl"}">${(0, import_index_277e1cdb.v)(import_logo_255ac452.L, "Logo").$$render($$result, {}, {}, {})}</div></div>
		
		<div class="${"line tagline svelte-zxatyl"}">${(0, import_index_277e1cdb.e)(contact2.tagline)}</div>
		
<a href="${"#search"}" class="${"tile search svelte-zxatyl"}"><div class="${"icon"}">${(0, import_index_277e1cdb.v)(Search, "SearchIcon").$$render($$result, {}, {}, {})}</div> <span class="${"search-text svelte-zxatyl"}">Search this website</span></a>

		
		<div class="${"line phone-number svelte-zxatyl"}"><a${(0, import_index_277e1cdb.a)("href", "tel:" + contact2.phoneNumber, 0)} target="${"_blank"}" class="${"svelte-zxatyl"}">${(0, import_index_277e1cdb.e)(contact2.phoneNumber)}</a></div>
		
		<div class="${"line email svelte-zxatyl"}"><a${(0, import_index_277e1cdb.a)("href", "mailto:" + contact2.email, 0)} target="${"_blank"}" class="${"svelte-zxatyl"}">${(0, import_index_277e1cdb.e)(contact2.email)}</a></div>
		
		<div class="${"line address svelte-zxatyl"}">${(0, import_index_277e1cdb.e)(contact2.address)}</div>
		
		<div class="${"line social svelte-zxatyl"}"><span class="${"social-link svelte-zxatyl"}">${(0, import_index_277e1cdb.v)(import_menu_9f832952.N, "Newsletter").$$render($$result, {}, {}, {})}</span>
			<a${(0, import_index_277e1cdb.a)("href", import_global_eadaa9b6.I, 0)} target="${"_blank"}" class="${"social-link svelte-zxatyl"}">${(0, import_index_277e1cdb.v)(import_menu_9f832952.I, "Instagram").$$render($$result, {}, {}, {})}</a>
			<a${(0, import_index_277e1cdb.a)("href", import_global_eadaa9b6.T, 0)} target="${"_blank"}" class="${"social-link svelte-zxatyl"}">${(0, import_index_277e1cdb.v)(import_menu_9f832952.T, "Twitter").$$render($$result, {}, {}, {})}</a>
			<a${(0, import_index_277e1cdb.a)("href", import_global_eadaa9b6.Y, 0)} target="${"_blank"}" class="${"social-link svelte-zxatyl"}">${(0, import_index_277e1cdb.v)(import_menu_9f832952.Y, "Youtube").$$render($$result, {}, {}, {})}</a></div></footer>
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
  code: ".menubar.svelte-jarzc0.svelte-jarzc0{cursor:pointer;margin-bottom:20px;display:none}.menubar.svelte-jarzc0 .search-bar.svelte-jarzc0{background:var(--foreground-color);padding-top:8px;padding-bottom:8px;text-align:center;color:#f5f4ee}.menubar.svelte-jarzc0 .search-bar .icon.svelte-jarzc0{margin-right:5px}.menubar.svelte-jarzc0 .logo.svelte-jarzc0{margin:20px;display:block}.menubar.svelte-jarzc0 .wordmark.svelte-jarzc0{margin:20px;display:block}.menubar.svelte-jarzc0 .menu-toggle.svelte-jarzc0{border-bottom:1px solid var(--foreground-color);border-top:1px solid var(--foreground-color);margin:20px;font-size:27px;display:flex;justify-content:space-between;padding-top:8px;padding-bottom:8px;margin-bottom:0}.menubar.svelte-jarzc0 .menu.svelte-jarzc0{border-bottom:1px solid var(--foreground-color);margin:20px;margin-top:0;font-size:27px;padding-bottom:8px;padding-top:8px}.menubar.svelte-jarzc0 .menu .menu-item.svelte-jarzc0{display:block;text-decoration:none}.menubar.svelte-jarzc0 .menu .menu-item.svelte-jarzc0:hover,.menubar.svelte-jarzc0 .menu .menu-item.svelte-jarzc0:active{background:#e0ded7}@media(max-width: 800px), screen and (orientation: portrait){.menubar.svelte-jarzc0.svelte-jarzc0{display:block}}",
  map: null
};
const Menubar = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_277e1cdb.b)(import_stores_b7bb0fad.p, (value) => $page = value);
  $$result.css.add(css$3);
  $$unsubscribe_page();
  return `<nav class="${"menubar svelte-jarzc0"}"><div class="${"search-bar svelte-jarzc0"}"><span class="${"icon svelte-jarzc0"}">${(0, import_index_277e1cdb.v)(Search, "SearchIcon").$$render($$result, { white: true }, {}, {})}</span>Search this site
	</div>
	${$page.url.pathname == "/" ? `<a href="${"/"}" aria-label="${"The Eyebeam logo: lines spreading out in a half-circle like sun rays."}" class="${"logo svelte-jarzc0"}">${(0, import_index_277e1cdb.v)(import_big_beam_c5c43470.B, "BigBeam").$$render($$result, {}, {}, {})}</a>` : ``}
<div class="${"wordmark svelte-jarzc0"}"><a href="${"/"}">${(0, import_index_277e1cdb.v)(import_logo_255ac452.L, "Logo").$$render($$result, {}, {}, {})}</a></div>
		<div class="${"menu-toggle svelte-jarzc0"}"><span class="${"menu-toggle-header"}">Click to ${(0, import_index_277e1cdb.e)("show")} menu</span>
			<span class="${"icon svelte-jarzc0"}">${`${(0, import_index_277e1cdb.v)(Hamburger, "Hamburger").$$render($$result, {}, {}, {})}`}</span></div>
		${``}</nav>

${``}`;
});
var footer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "footer.svelte-dokcq5.svelte-dokcq5{margin-top:40px;margin-bottom:40px;width:100%;margin-right:20px;margin-left:20px;overflow:hidden;width:calc(100vw - 40px);display:none}footer.svelte-dokcq5 .wordmark.svelte-dokcq5{width:180px}footer.svelte-dokcq5 .tagline.svelte-dokcq5{font-size:32px;font-style:italic;line-height:1.1em;width:100%}footer.svelte-dokcq5 .black-box.svelte-dokcq5{height:20px;width:20px;background:black;display:inline-block}@media(max-width: 800px), screen and (orientation: portrait){footer.svelte-dokcq5.svelte-dokcq5{display:block}}",
  map: null
};
const Footer = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  const contact = (0, import_sanity_bfd50d1d.l)("*[_id == 'contact'][0]");
  $$result.css.add(css$2);
  return `${function(__value) {
    if ((0, import_index_277e1cdb.i)(__value)) {
      __value.then(null, import_index_277e1cdb.n);
      return ``;
    }
    return function(contact2) {
      return `
	<footer class="${"svelte-dokcq5"}">
		<div class="${"wordmark svelte-dokcq5"}">${(0, import_index_277e1cdb.v)(import_logo_255ac452.L, "Logo").$$render($$result, {}, {}, {})}</div>
		
		<div class="${"line tagline svelte-dokcq5"}">${(0, import_index_277e1cdb.e)(contact2.tagline)}<span class="${"black-box svelte-dokcq5"}"></span></div></footer>
`;
    }(__value);
  }(contact)}`;
});
var sidebar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".tile.svelte-1cupfzd.svelte-1cupfzd{padding:15px;overflow:hidden}.sidebar.svelte-1cupfzd.svelte-1cupfzd{width:calc(100% / 6);border:1px solid var(--foreground-color);border-right:none;border-bottom:none;font-size:14px}.sidebar.full-borders.svelte-1cupfzd.svelte-1cupfzd{border-right:1px solid var(--foreground-color)}@media(max-width: 800px), screen and (orientation: portrait){.sidebar.svelte-1cupfzd.svelte-1cupfzd{display:none}}.sidebar.svelte-1cupfzd .open-eyebeam.svelte-1cupfzd{border-bottom:1px solid var(--foreground-color);background:#e0ded7;height:calc(100vh - 130px);width:100%;float:left;position:relative;padding:0}.sidebar.svelte-1cupfzd .logo a.svelte-1cupfzd{display:block}.sidebar.svelte-1cupfzd .toc.svelte-1cupfzd{padding-top:0;border-bottom:1px solid var(--foreground-color)}.sidebar.svelte-1cupfzd .toc .pseudo-link.svelte-1cupfzd{text-decoration:none;cursor:pointer}.sidebar.svelte-1cupfzd .toc .pseudo-link.svelte-1cupfzd:hover{text-decoration:underline}",
  map: null
};
const Sidebar = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let $sidebarToC, $$unsubscribe_sidebarToC;
  let $sidebarTitle, $$unsubscribe_sidebarTitle;
  $$unsubscribe_sidebarToC = (0, import_index_277e1cdb.b)(import_stores_f9761b8b.s, (value) => $sidebarToC = value);
  $$unsubscribe_sidebarTitle = (0, import_index_277e1cdb.b)(import_stores_f9761b8b.a, (value) => $sidebarTitle = value);
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
<aside class="${["sidebar svelte-1cupfzd", fullBorders ? "full-borders" : ""].join(" ").trim()}"><div class="${"tile open-eyebeam svelte-1cupfzd"}">${(0, import_index_277e1cdb.v)(import_menu_9f832952.M, "Menu").$$render($$result, {}, {}, {})}</div>

	
	${hasContent ? `<nav aria-label="${"Secondary"}" class="${"tile toc svelte-1cupfzd"}"><p>${(0, import_index_277e1cdb.e)($sidebarTitle)}</p>
			${$sidebarToC.length > 0 ? `<ul>${(0, import_index_277e1cdb.d)($sidebarToC, (item) => {
    return `<li><a class="${"pseudo-link svelte-1cupfzd"}">${(0, import_index_277e1cdb.e)(item.title)}</a>
						</li>`;
  })}</ul>` : ``}</nav>` : ``}

</aside>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: `@charset "UTF-8";:root{--background-color:rgb(245, 244, 238);--foreground-color:rgb(34, 31, 32);--hover-text-color:rgb(34, 31, 32);--special-text-color:rgb(34, 31, 32);--journal-background-color:rgb(34, 31, 32);--font-stack:'Literata', serif}body,html{background:var(--background-color);color:var(--foreground-color);font-family:var(--font-stack);font-size:14px;margin:0;padding:0}a{color:var(--foreground-color)}*{box-sizing:border-box;transition:color 0.3s cubic-bezier(0.23, 1, 0.32, 1), background-color 0.3s cubic-bezier(0.23, 1, 0.32, 1);-webkit-tap-highlight-color:transparent}*::selection{background:rgba(224, 222, 215, 0.95)}*::-moz-selection{background:rgba(224, 222, 215, 0.95)}main{padding-top:20px;padding-left:60px;padding-right:60px;transition:transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);position:relative;opacity:1;display:flex;align-items:flex-start}main.open{transform:translateY(240px)}@media(max-width: 800px), screen and (orientation: portrait){main{padding-left:15px;padding-right:15px;padding-top:0;max-width:100%;width:100%;display:inline-block}}main.journal{background:var(--journal-background-color);padding-bottom:120px;min-height:100vh}h1{font-size:54px;font-weight:normal;margin:0;line-height:1.2em;font-family:"Eyebeam sans", Arial, sans-serif;text-transform:uppercase}@media(max-width: 800px), screen and (orientation: portrait){h1{font-size:32px}}h2{font-size:32px;font-weight:normal;letter-spacing:-0.025em;margin:0;line-height:1.2em}h3{font-size:16px;font-weight:bold;margin:0;line-height:1.2em;letter-spacing:-0.025em}figure{margin-right:0;margin-left:0;margin-top:20px}figure img{max-width:100%}.article p,.article h2,.article h3{margin-left:20px;margin-right:40px;margin-bottom:20px}@media(max-width: 800px), screen and (orientation: portrait){.article p,.article h2,.article h3{padding-right:0;padding-left:0;margin-left:0;margin-right:0}}.article p{font-size:16px}figcaption{font-style:italic}figcaption p{padding-left:0 !important;padding-right:0 !important;padding-top:0 !important;margin-top:0 !important}ul{list-style:none;margin-left:15px;padding-left:0;margin-left:0}ul li{padding-left:1em;text-indent:-1em}ul li:before{content:'\u2022';padding-right:5px;position:relative;top:-1px}.nodisplay{display:none}`,
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
  $$unsubscribe_theme = (0, import_index_277e1cdb.b)(import_stores_f9761b8b.t, (value) => $theme = value);
  $$unsubscribe_inversion = (0, import_index_277e1cdb.b)(import_stores_f9761b8b.i, (value) => $inversion = value);
  $$unsubscribe_trayOpen = (0, import_index_277e1cdb.b)(import_stores_f9761b8b.b, (value) => $trayOpen = value);
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
        import_stores_f9761b8b.i.set(false);
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



${$navigating == null ? `${$page.url.pathname !== "/" && !isJournal ? `${(0, import_index_277e1cdb.v)(Footer$1, "Footer").$$render($$result, {}, {}, {})}` : ``}` : ``}
	
${(0, import_index_277e1cdb.v)(Footer, "PhoneFooter").$$render($$result, {}, {}, {})}`;
});
