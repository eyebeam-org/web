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
  B: () => Blocks,
  E: () => External_link,
  L: () => LogoBlock,
  P: () => Play_arrow,
  a: () => Person_link
});
module.exports = __toCommonJS(stdin_exports);
var import_index_277e1cdb = require("./index-277e1cdb.js");
var import_slugify = __toESM(require("slugify"));
var import_get = __toESM(require("lodash/get.js"));
var import_date_fns = require("date-fns");
var import_core = require("@popperjs/core");
var import_sanity_bfd50d1d = require("./sanity-bfd50d1d.js");
var import_global_eadaa9b6 = require("./global-eadaa9b6.js");
var import_has = __toESM(require("lodash/has.js"));
var import_get_video_id = __toESM(require("get-video-id"));
const css$h = {
  code: ".pop-up.svelte-j84dxt.svelte-j84dxt{background:var(--background-color);padding:20px;border:1px solid var(--foreground-color);z-index:1000;color:var(--foreground-color);position:relative;display:none;max-width:360px}.pop-up.svelte-j84dxt .name.svelte-j84dxt{font-weight:bold;margin-right:15px}.pop-up.show{display:flex !important}a.svelte-j84dxt.svelte-j84dxt{color:var(--special-text-color);background:#e0ded7;text-decoration:none;margin-bottom:5px;display:inline-block}.person-link.svelte-j84dxt.svelte-j84dxt{font-size:16px;font-weight:200}.column.first.svelte-j84dxt.svelte-j84dxt{padding-right:20px}",
  map: null
};
const Person_link = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { person = false } = $$props;
  let { overrideText = false } = $$props;
  let { personId = false } = $$props;
  let { tiny = false } = $$props;
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
    (0, import_sanity_bfd50d1d.l)('*[_id == "' + personId + '"][0]').then((p) => {
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
  if ($$props.tiny === void 0 && $$bindings.tiny && tiny !== void 0)
    $$bindings.tiny(tiny);
  $$result.css.add(css$h);
  {
    console.log("tiny: ", tiny);
  }
  return `${person ? `<a${(0, import_index_277e1cdb.a)("href", "/people/" + (0, import_get.default)(person, "slug.current"), 0)} sveltekit:prefetch class="${"person-link svelte-j84dxt"}"${(0, import_index_277e1cdb.a)("style", tiny ? "font-size: 11px" : "", 0)}${(0, import_index_277e1cdb.a)("this", linkEl, 0)}>${person.title.length < 20 ? `<!-- HTML_TAG_START -->${overrideText ? (0, import_global_eadaa9b6.g)(overrideText) : person.title}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${overrideText ? (0, import_global_eadaa9b6.g)(overrideText) : person.title.slice(0, 20) + "..."}<!-- HTML_TAG_END -->`}</a>

	<div class="${"pop-up svelte-j84dxt"}" aria-expanded="${"false"}"${(0, import_index_277e1cdb.a)("this", popEl, 0)}>
		<div class="${"column first svelte-j84dxt"}">
			<div class="${"name svelte-j84dxt"}">${(0, import_index_277e1cdb.e)(person.title)}</div>
			
			<div class="${"badges"}">${person.role ? `<div class="${"badge"}">${(0, import_index_277e1cdb.e)(import_global_eadaa9b6.r[person.role])}</div>` : ``}
				${person.groupTags ? `${(0, import_index_277e1cdb.d)(person.groupTags, (tag) => {
    return `<div class="${"badge"}">${(0, import_index_277e1cdb.e)(tag.label)}</div>`;
  })}` : ``}
${person.shortBio ? `<div class="${"bio"}">${(0, import_index_277e1cdb.v)(Blocks, "Blocks").$$render($$result, { blocks: person.shortBio.content }, {}, {})}</div>` : ``}</div>
			${person.shortBio ? `<div class="${"bio"}">${(0, import_index_277e1cdb.v)(Blocks, "Blocks").$$render($$result, { blocks: person.shortBio.content }, {}, {})}</div>` : ``}</div>
		
		<div class="${"column second"}">
			${person.mainImage ? `<img class="${"image"}"${(0, import_index_277e1cdb.a)("alt", person.title, 0)}${(0, import_index_277e1cdb.a)("src", (0, import_sanity_bfd50d1d.u)(person.mainImage).quality(90).saturation(-100).width(100).height(100).url(), 0)}>` : ``}</div></div>` : ``}`;
});
const css$g = {
  code: "svg.svelte-12vfqt3.svelte-12vfqt3{margin-left:3px}svg.svelte-12vfqt3 path.svelte-12vfqt3{fill:var(--foreground-color)}",
  map: null
};
const External_link = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$g);
  return `<svg width="${"11"}" height="${"11"}" viewBox="${"0 0 11 11"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-12vfqt3"}"><path d="${"M3.9378 1.68763V2.81271H1.12509V9.00068H7.31305V6.18797H8.43814V9.56322C8.43814 9.72074 8.38376 9.85387 8.275 9.96263C8.16624 10.0714 8.03311 10.1258 7.8756 10.1258H0.562543C0.40503 10.1258 0.271896 10.0714 0.163137 9.96263C0.0543785 9.85387 0 9.72074 0 9.56322V2.25017C0 2.09266 0.0543785 1.95952 0.163137 1.85077C0.271896 1.74201 0.40503 1.68763 0.562543 1.68763H3.9378ZM10.1258 0V4.50034H9.00068V1.9239L4.61285 6.30048L3.82529 5.51292L8.20187 1.12509H5.62543V0H10.1258Z"}" class="${"svelte-12vfqt3"}"></path></svg>`;
});
const Process_text_mark = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { defs = {} } = $$props;
  let { c = {} } = $$props;
  c.marks && c.marks[0] ? defs.find((m) => m._key === c.marks[0]) : null;
  console.log("defs:", defs);
  if ($$props.defs === void 0 && $$bindings.defs && defs !== void 0)
    $$bindings.defs(defs);
  if ($$props.c === void 0 && $$bindings.c && c !== void 0)
    $$bindings.c(c);
  {
    console.log("c: ", c);
  }
  return `${!c.marks || c.marks.length === 0 ? `
	<!-- HTML_TAG_START -->${(0, import_global_eadaa9b6.g)(c.text)}<!-- HTML_TAG_END -->` : `${c.marks.includes("em") ? `
	<em><!-- HTML_TAG_START -->${(0, import_global_eadaa9b6.g)(c.text)}<!-- HTML_TAG_END --></em>` : `${c.marks.includes("strong") ? `
	<strong><!-- HTML_TAG_START -->${(0, import_global_eadaa9b6.g)(c.text)}<!-- HTML_TAG_END --></strong>` : `<!-- HTML_TAG_START -->${(0, import_global_eadaa9b6.g)(c.text)}<!-- HTML_TAG_END -->`}`}`}`;
});
const Text_mark = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { defs = {} } = $$props;
  let { c = {} } = $$props;
  let currentDefinition = c.marks && c.marks[0] ? defs.find((m) => c.marks.includes(m._key)) : null;
  console.log("current definition: ", currentDefinition);
  if ($$props.defs === void 0 && $$bindings.defs && defs !== void 0)
    $$bindings.defs(defs);
  if ($$props.c === void 0 && $$bindings.c && c !== void 0)
    $$bindings.c(c);
  return `${!currentDefinition ? `${(0, import_index_277e1cdb.v)(Process_text_mark, "ProcessTextMark").$$render($$result, { c, defs }, {}, {})}` : `${currentDefinition._type === "link" && currentDefinition.href ? `${currentDefinition.href.includes("https://eyebeam.org") ? `
			<a${(0, import_index_277e1cdb.a)("href", currentDefinition.href, 0)}>${(0, import_index_277e1cdb.v)(Process_text_mark, "ProcessTextMark").$$render($$result, { c, defs }, {}, {})}</a>` : `
		<a${(0, import_index_277e1cdb.a)("href", currentDefinition.href, 0)} target="${"_blank"}">${(0, import_index_277e1cdb.v)(Process_text_mark, "ProcessTextMark").$$render($$result, { c, defs }, {}, {})}			${(0, import_index_277e1cdb.v)(External_link, "ExternalLink").$$render($$result, {}, {}, {})}</a>`}` : `${currentDefinition._type === "person" ? `
	${(0, import_index_277e1cdb.v)(Person_link, "PersonLink").$$render($$result, {
    overrideText: c.text,
    personId: (0, import_get.default)(currentDefinition, "link._ref", false)
  }, {}, {})}` : ``}`}`}`;
});
const css$f = {
  code: 'h2.svelte-qdbjhv,h3.svelte-qdbjhv{font-family:"Eyebeam sans", Arial, sans-serif;text-transform:uppercase}',
  map: null
};
const Text = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { b = {} } = $$props;
  console.log("b: ", b);
  let slug = (0, import_slugify.default)(b.children[0].text, { lower: true });
  if ($$props.b === void 0 && $$bindings.b && b !== void 0)
    $$bindings.b(b);
  $$result.css.add(css$f);
  return `${b.children && b.children.length > 0 ? `${b.style == "h2" ? `<h2${(0, import_index_277e1cdb.a)("id", slug, 0)} class="${"svelte-qdbjhv"}">${(0, import_index_277e1cdb.d)(b.children, (c) => {
    return `${!c.marks || c.marks.length === 0 ? `${(0, import_index_277e1cdb.e)(c.text)}` : `<strong>${(0, import_index_277e1cdb.e)(c.text)}</strong>`}`;
  })}</h2>` : `${b.style == "h3" ? `<h3 class="${"svelte-qdbjhv"}">${(0, import_index_277e1cdb.d)(b.children, (c) => {
    return `${(0, import_index_277e1cdb.e)(c.text)}`;
  })}</h3>` : `<p>${(0, import_index_277e1cdb.d)(b.children, (c) => {
    return `${(0, import_index_277e1cdb.v)(Text_mark, "TextMark").$$render($$result, { c, defs: b.markDefs }, {}, {})}`;
  })}</p>`}`}` : ``}`;
});
const css$e = {
  code: ".html-content.svelte-1p9fi0z{padding:20px}",
  map: null
};
const Html = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { b = {} } = $$props;
  if ($$props.b === void 0 && $$bindings.b && b !== void 0)
    $$bindings.b(b);
  $$result.css.add(css$e);
  return `${b.children && b.children.length > 0 ? `<style>.html-content img {
			display: block;
			margin: 12px auto;
		}

</style>

	<div class="${"html-content svelte-1p9fi0z"}">${(0, import_index_277e1cdb.d)(b.children, (c) => {
    return `${c.text != "" ? `<!-- HTML_TAG_START -->${c.text.replace(/<\/strong>/g, "</strong><br/><br/>").replace(/<strong>/g, "<br/><br/><strong>").replace('<a href="/', '<a href="https://old.eyebeam.org/"').replace(/style=".*?"/, "").replace(/width=".*?"/, "").replace(/height=".*?"/, "").replace('alt=" ">', 'alt=""><br/>')}<!-- HTML_TAG_END -->` : ``}`;
  })}</div>` : ``}`;
});
const css$d = {
  code: "figure.svelte-16k1mtz.svelte-16k1mtz{margin-left:20px;margin-right:20px;float:left;border:1px solid var(--foreground-color);display:flex;float:left;max-width:50%}@media(max-width: 800px), screen and (orientation: portrait){figure.svelte-16k1mtz.svelte-16k1mtz{margin-left:0}}figure.right.svelte-16k1mtz.svelte-16k1mtz{float:right;max-width:50%}@media(max-width: 800px), screen and (orientation: portrait){figure.right.svelte-16k1mtz.svelte-16k1mtz{margin-left:20px}}figure.full.svelte-16k1mtz.svelte-16k1mtz{float:unset;margin-left:0;margin-right:0;margin-top:0;border:unset;max-width:unset;width:100%}figure.full.svelte-16k1mtz img.svelte-16k1mtz{display:block;margin-left:auto;margin-right:auto}figure.full.svelte-16k1mtz figcaption.svelte-16k1mtz{padding:20px;border-top:1px solid var(--foreground-color);border-bottom:1px solid var(--foreground-color)}figure.cover.svelte-16k1mtz img.svelte-16k1mtz{width:100%;max-height:500px;object-fit:cover;object-position:center}@media(max-width: 800px), screen and (orientation: portrait){figure.cover.svelte-16k1mtz img.svelte-16k1mtz{height:300px}}figure.cover.svelte-16k1mtz figcaption.svelte-16k1mtz{padding:20px;border-top:1px solid var(--foreground-color);border-bottom:1px solid var(--foreground-color)}@media(max-width: 800px), screen and (orientation: portrait){figure.cover.svelte-16k1mtz figcaption.svelte-16k1mtz{padding-left:0;padding-right:0}}.article figcaption p{margin-bottom:0;margin-left:0;margin-right:0;font-size:14px !important}",
  map: null
};
const Image = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { b = {} } = $$props;
  if ($$props.b === void 0 && $$bindings.b && b !== void 0)
    $$bindings.b(b);
  $$result.css.add(css$d);
  return `<figure class="${[
    "svelte-16k1mtz",
    (b.layout == "left" ? "left" : "") + " " + (b.layout == "right" ? "right" : "") + " " + (b.fullWidth ? "full" : "") + " " + (b.coverAndCrop ? "cover" : "")
  ].join(" ").trim()}"><img${(0, import_index_277e1cdb.a)("src", (0, import_sanity_bfd50d1d.u)(b.asset).quality(90).saturation(-100).width(1e3).url(), 0)}${(0, import_index_277e1cdb.a)("alt", b.alt ? b.alt : "", 0)} class="${"svelte-16k1mtz"}">
	${(0, import_has.default)(b, "caption.content") ? `<figcaption class="${"svelte-16k1mtz"}">${(0, import_index_277e1cdb.v)(Blocks, "Blocks").$$render($$result, { blocks: b.caption.content }, {}, {})}</figcaption>` : ``}
</figure>`;
});
const css$c = {
  code: ".inverted-block.svelte-11ng4xn{width:100%;background:var(--foreground-color);padding:40px;color:var(--background-color)}",
  map: null
};
const InvertedBlock = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { b = {} } = $$props;
  if ($$props.b === void 0 && $$bindings.b && b !== void 0)
    $$bindings.b(b);
  $$result.css.add(css$c);
  return `<div class="${"inverted-block svelte-11ng4xn"}">${(0, import_index_277e1cdb.v)(Text, "Text").$$render($$result, { b }, {}, {})}
</div>`;
});
const css$b = {
  code: "svg.svelte-3b3r84 path.svelte-3b3r84{fill:none;stroke:var(--foreground-color);stroke-width:2.5px;stroke-miterlimit:10}",
  map: null
};
const Block_beam = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$b);
  return `<svg version="${"1.1"}" id="${"Layer_1"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" x="${"0px"}" y="${"0px"}" viewBox="${"0 0 326.4 167.6"}" style="${"enable-background:new 0 0 326.4 167.6;"}" xml:space="${"preserve"}" class="${"svelte-3b3r84"}"><path class="${"st0 svelte-3b3r84"}" d="${"M323.1,136.7l-121.6,21.4 M316.2,109.3l-116,42.2 M304.3,83.3l-106.9,61.6 M287.8,60.7L193.2,140 M269.1,41\n		l-79.3,94.4 M245.5,24.3L183.8,131 M219.2,12L177,127.9 M192.5,4.4l-21.4,121.4 M325,165.7H201.5 M2.4,136.7l121.6,21.4 M9.3,109.3\n		l116,42.2 M21.2,83.3l106.9,61.6 M37.7,60.7l94.6,79.2 M56.4,41l79.3,94.4 M80,24.3L141.7,131 M106.3,12l42.2,115.8 M133,4.4\n		l21.4,121.4 M161.9,1.8l0,123.3 M0.5,165.7H124"}"></path></svg>`;
});
const css$a = {
  code: ".logo-block.svelte-8n89ze.svelte-8n89ze{margin-left:20px;margin-right:20px;margin-bottom:20px;margin-top:20px;border-bottom:1px solid var(--foreground-color);font-size:16px}@media(max-width: 800px), screen and (orientation: portrait){.logo-block.svelte-8n89ze.svelte-8n89ze{margin-left:0;margin-right:0;padding:0 15px}}.logo-block.svelte-8n89ze .top-row.svelte-8n89ze{display:flex}.logo-block.svelte-8n89ze .top-row .beam.svelte-8n89ze{width:160px;position:relative;top:0;left:1px;padding:0;line-height:0;display:inline-block}.logo-block.svelte-8n89ze .top-row .line.svelte-8n89ze{border-bottom:1px solid var(--foreground-color);width:100%}.logo-block.svelte-8n89ze .logoblock-text.svelte-8n89ze{padding-top:20px;padding-bottom:20px}.article .logoblock-text p{padding-left:0;padding-right:0;margin-top:0;margin-bottom:0}",
  map: null
};
const LogoBlock = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { b = {} } = $$props;
  console.log("b: ", b);
  if ($$props.b === void 0 && $$bindings.b && b !== void 0)
    $$bindings.b(b);
  $$result.css.add(css$a);
  return `<div class="${"logo-block svelte-8n89ze"}"><div class="${"top-row svelte-8n89ze"}"><div class="${"beam svelte-8n89ze"}">${(0, import_index_277e1cdb.v)(Block_beam, "BlockBeam").$$render($$result, {}, {}, {})}</div>
		<div class="${"line svelte-8n89ze"}"></div></div>
	<div class="${"logoblock-text svelte-8n89ze"}">${(0, import_index_277e1cdb.v)(Text, "Text").$$render($$result, { b }, {}, {})}</div>
</div>`;
});
const css$9 = {
  code: ".embed.svelte-1159bik.svelte-1159bik{color:#f5f4ee;margin-bottom:20px;cursor:pointer;display:flex;justify-content:center;align-items:center;padding-bottom:20px;padding-top:20px;width:100%}.embed.svelte-1159bik .inner.svelte-1159bik{width:720px}@media(max-width: 800px), screen and (orientation: portrait){.embed.svelte-1159bik .inner.svelte-1159bik{width:480px}}.embed.svelte-1159bik .inner iframe.svelte-1159bik{width:100%}.embed.full .inner.svelte-1159bik iframe.svelte-1159bik{height:100vh}",
  map: null
};
const Embed = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { b = {} } = $$props;
  if ($$props.b === void 0 && $$bindings.b && b !== void 0)
    $$bindings.b(b);
  $$result.css.add(css$9);
  return `<div class="${"embed svelte-1159bik"}"><div class="${"inner svelte-1159bik"}">${b.url.includes("youtube") ? `<iframe width="${"720"}" height="${"480"}" src="${"https://www.youtube.com/embed/" + (0, import_index_277e1cdb.e)((0, import_get_video_id.default)(b.url).id)}" frameborder="${"0"}" allow="${"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen class="${"svelte-1159bik"}"></iframe>` : ``}
		${b.url.includes("vimeo") ? `<iframe width="${"720"}" height="${"480"}" src="${"https://player.vimeo.com/video/" + (0, import_index_277e1cdb.e)((0, import_get_video_id.default)(b.url).id)}" frameborder="${"0"}" color="${"#ffffff"}" allow="${"autoplay; fullscreen"}" allowfullscreen class="${"svelte-1159bik"}"></iframe>` : ``}</div></div>

${(0, import_has.default)(b, "caption.content") ? `<figcaption>${(0, import_index_277e1cdb.v)(Blocks, "Blocks").$$render($$result, { blocks: b.caption.content }, {}, {})}</figcaption>` : ``}`;
});
const css$8 = {
  code: ".divider.svelte-12n4epy{margin-top:20px;margin-bottom:20px;height:1px;border-top:1px solid var(--foreground-color);display:block;width:100%;min-width:100%}",
  map: null
};
const Divider = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { b = {} } = $$props;
  if ($$props.b === void 0 && $$bindings.b && b !== void 0)
    $$bindings.b(b);
  $$result.css.add(css$8);
  return `<div class="${"divider svelte-12n4epy"}"></div>`;
});
const css$7 = {
  code: ".columns.svelte-1djwm6v h2.svelte-1djwm6v{padding-top:20px;padding-bottom:20px}.columns.svelte-1djwm6v .inner.svelte-1djwm6v{width:100%;column-count:2;column-fill:balance;column-width:50%}@media(max-width: 800px), screen and (orientation: portrait){.columns .inner p{font-size:14px}}",
  map: null
};
const Columns = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { b = {} } = $$props;
  const slug = (0, import_slugify.default)(b.title ? b.title : "", { lower: true });
  if ($$props.b === void 0 && $$bindings.b && b !== void 0)
    $$bindings.b(b);
  $$result.css.add(css$7);
  {
    console.log("columnn block:", b);
  }
  return `<div class="${"columns svelte-1djwm6v"}">${b.title ? `<h2${(0, import_index_277e1cdb.a)("id", slug, 0)} class="${"svelte-1djwm6v"}">${(0, import_index_277e1cdb.e)(b.title)}</h2>` : ``}
	${(0, import_has.default)(b, "columnContent.content") ? `<div class="${"inner svelte-1djwm6v"}">${(0, import_index_277e1cdb.v)(Blocks, "Blocks").$$render($$result, { blocks: b.columnContent.content }, {}, {})}</div>` : ``}
</div>`;
});
const css$6 = {
  code: '.donation-widget .gl-widget__donation-input-field{font-family:"Work Sans", Arial, sans-serif !important}.donation-widget .gl-widget__currency{font-family:"Work Sans", Arial, sans-serif !important}.donation-widget .gl-widget__frequency-buttons{font-family:"Work Sans", Arial, sans-serif !important}.donation-widget .gl-widget__donation-submit-button{font-family:"Work Sans", Arial, sans-serif !important}',
  map: null
};
const DonationWidget = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `${$$result.head += `<script src="${"https://secure.givelively.org/widgets/simple_donation/the-eyebeam-atelier-inc/donate-to-eyebeam.js?show_suggested_amount_buttons=false&show_in_honor_of=false&address_required=false&has_required_custom_question=false"}" data-svelte="svelte-1ufij64"><\/script>`, ""}

<div class="${"donation-widget"}"><div id="${"give-lively-widget"}" class="${"gl-simple-donation-widget"}"></div>
</div>`;
});
const css$5 = {
  code: ".application-button-small.svelte-5i8wig.svelte-5i8wig{margin-top:0;margin-bottom:40px;display:inline-block;width:100%}.application-button-small.svelte-5i8wig .application-button-inner.svelte-5i8wig{margin:20px;display:inline-block}.application-button-small.svelte-5i8wig .application-button-inner .button.svelte-5i8wig{background:#e0ded7;padding:15px;display:flex;align-items:center;text-decoration:none}.application-button-small.svelte-5i8wig .application-button-inner .button .circle.svelte-5i8wig{width:20px;height:20px;border-radius:50%;background:var(--foreground-color)}.application-button-small.svelte-5i8wig .application-button-inner .button .applications-text.svelte-5i8wig{margin-left:15px;font-size:14px}.application-button-small.svelte-5i8wig .application-button-inner .button.svelte-5i8wig:hover{background:var(--foreground-color);color:#e0ded7}.application-button-small.svelte-5i8wig .application-button-inner .button:hover .circle.svelte-5i8wig{background:#e0ded7}.application-button-small.svelte-5i8wig .application-button-inner .date.svelte-5i8wig{font-style:italic}.application-button-large.svelte-5i8wig.svelte-5i8wig{width:100%;background:var(--foreground-color);color:var(--background-color);height:220px;padding:20px;display:flex}@media(max-width: 800px), screen and (orientation: portrait){.application-button-large.svelte-5i8wig.svelte-5i8wig{flex-wrap:wrap}}.application-button-large.svelte-5i8wig .column.svelte-5i8wig{height:100%}@media(max-width: 800px), screen and (orientation: portrait){.application-button-large.svelte-5i8wig .column.svelte-5i8wig{height:auto}}.application-button-large.svelte-5i8wig .column.first.svelte-5i8wig{width:80%;display:flex;flex-direction:column;justify-content:space-between}@media(max-width: 800px), screen and (orientation: portrait){.application-button-large.svelte-5i8wig .column.first.svelte-5i8wig{width:100%}}.application-button-large.svelte-5i8wig .column.second.svelte-5i8wig{width:220px}@media(max-width: 800px), screen and (orientation: portrait){.application-button-large.svelte-5i8wig .column.second.svelte-5i8wig{width:100%}}.application-button-large.svelte-5i8wig .top.svelte-5i8wig{display:flex;font-size:14px}.application-button-large.svelte-5i8wig .top .col.second.svelte-5i8wig{margin-left:15px}.application-button-large.svelte-5i8wig .circle.svelte-5i8wig{width:20px;height:20px;background:var(--background-color);border-radius:50%;float:left;margin-top:2px}.application-button-large.svelte-5i8wig .headline.svelte-5i8wig{font-size:11px;letter-spacing:1px}.application-button-large.svelte-5i8wig .date.svelte-5i8wig{font-style:italic}.application-button-large.svelte-5i8wig .text.svelte-5i8wig{padding-right:40px;font-size:16px}@media(max-width: 800px), screen and (orientation: portrait){.application-button-large.svelte-5i8wig .text.svelte-5i8wig{display:none}}.application-button-large.svelte-5i8wig .apply-now.svelte-5i8wig{border:1px solid var(--background-color);height:100%;display:flex;justify-content:center;align-items:center;cursor:pointer;user-select:none;color:var(--background-color);text-decoration:none;font-size:16px}.application-button-large.svelte-5i8wig .apply-now.svelte-5i8wig:hover{background:var(--background-color);color:var(--foreground-color)}.article .application-button-large .text p{margin-bottom:0;margin-left:0;margin-right:0}",
  map: null
};
const ApplicationButton = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { b = {} } = $$props;
  if ($$props.b === void 0 && $$bindings.b && b !== void 0)
    $$bindings.b(b);
  $$result.css.add(css$5);
  return `${b.size == "large" ? `
	<div class="${"application-button-large svelte-5i8wig"}"><div class="${"column first svelte-5i8wig"}">
			<div class="${"top svelte-5i8wig"}"><div class="${"col first"}"><div class="${"circle svelte-5i8wig"}"></div></div>
				<div class="${"col second svelte-5i8wig"}"><div class="${"headline svelte-5i8wig"}">APPLICATIONS ARE OPEN</div>
					${b.applicationEndDate ? `<div class="${"date svelte-5i8wig"}">Due by ${(0, import_index_277e1cdb.e)((0, import_global_eadaa9b6.l)(b.applicationEndDate))}</div>` : ``}</div></div>

			
			${(0, import_has.default)(b, "longText.content") ? `<div class="${"text svelte-5i8wig"}">${(0, import_index_277e1cdb.v)(Blocks, "Blocks").$$render($$result, { blocks: b.longText.content }, {}, {})}</div>` : ``}</div>

		<div class="${"column second svelte-5i8wig"}">
			<a${(0, import_index_277e1cdb.a)("href", b.url, 0)} target="${"_blank"}" class="${"apply-now svelte-5i8wig"}">${(0, import_index_277e1cdb.e)(b.shortText)}</a></div></div>` : `
	<div class="${"application-button-small svelte-5i8wig"}"><div class="${"application-button-inner svelte-5i8wig"}"><a${(0, import_index_277e1cdb.a)("href", b.url, 0)} target="${"_blank"}" class="${"button svelte-5i8wig"}">${b.applicationEndDate ? `<div class="${"circle svelte-5i8wig"}"></div>` : ``}
				<div class="${"applications-text svelte-5i8wig"}"><div class="${"short-text"}">${(0, import_index_277e1cdb.e)(b.shortText)}</div>
					${b.applicationEndDate ? `<div class="${"date svelte-5i8wig"}">Applications Due by ${(0, import_index_277e1cdb.e)((0, import_global_eadaa9b6.l)(b.applicationEndDate))}</div>` : ``}</div></a></div></div>`}`;
});
const css$4 = {
  code: "svg.svelte-1g6edcb path.svelte-1g6edcb{fill:var(--foreground-color)}",
  map: null
};
const Arrow_left = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<svg width="${"8"}" height="${"10"}" viewBox="${"0 0 8 10"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-1g6edcb"}"><path d="${"M-0.000488072 5.06677L7.17615 9.45473L7.17615 0.678818L-0.000488072 5.06677Z"}" class="${"svelte-1g6edcb"}"></path></svg>`;
});
const css$3 = {
  code: ".qa.svelte-u3h2d3.svelte-u3h2d3{width:100%;display:inline-block}.qa.svelte-u3h2d3 .question.svelte-u3h2d3{width:100%;display:flex;justify-content:space-between;border-bottom:1px solid var(--foreground-color);cursor:pointer}.qa.svelte-u3h2d3 .question .text.svelte-u3h2d3{font-style:italic;user-select:none;padding-top:15px;padding-bottom:15px;font-size:14px}.qa.svelte-u3h2d3 .question .icon.svelte-u3h2d3{position:relative;top:6px}.qa.svelte-u3h2d3 .answer.svelte-u3h2d3{border-bottom:1px solid var(--foreground-color)}",
  map: null
};
const QuestionAnswerItem = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { item = {} } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css$3);
  return `<div class="${"qa svelte-u3h2d3"}"><div class="${"question svelte-u3h2d3"}"><div class="${"text svelte-u3h2d3"}">${(0, import_index_277e1cdb.e)(item.question)}</div>
		<div class="${"icon svelte-u3h2d3"}">${`${(0, import_index_277e1cdb.v)(Arrow_left, "ArrowLeft").$$render($$result, {}, {}, {})}`}</div></div>
	${``}
</div>`;
});
const css$2 = {
  code: ".faq.svelte-188e4bc.svelte-188e4bc{display:inline-block;width:100%;padding:20px;margin-bottom:40px}.faq.svelte-188e4bc h2.svelte-188e4bc{margin-left:0;margin-right:0}@media(max-width: 800px), screen and (orientation: portrait){.faq.svelte-188e4bc.svelte-188e4bc{padding-left:0;padding-right:0}}.faq.svelte-188e4bc .faq-inner.svelte-188e4bc{margin-top:20px}",
  map: null
};
const Faq = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { b = {} } = $$props;
  let slug = (0, import_slugify.default)(b.title, { lower: true });
  if ($$props.b === void 0 && $$bindings.b && b !== void 0)
    $$bindings.b(b);
  $$result.css.add(css$2);
  return `<div class="${"faq svelte-188e4bc"}"><h2${(0, import_index_277e1cdb.a)("id", slug, 0)} class="${"svelte-188e4bc"}">${(0, import_index_277e1cdb.e)(b.title)}</h2>
	<div class="${"faq-inner svelte-188e4bc"}">${(0, import_index_277e1cdb.d)(b.questionAnswer, (item) => {
    return `${(0, import_index_277e1cdb.v)(QuestionAnswerItem, "QA").$$render($$result, { item }, {}, {})}`;
  })}</div>
</div>`;
});
const css$1 = {
  code: "svg.svelte-1g6edcb path.svelte-1g6edcb{fill:var(--foreground-color)}",
  map: null
};
const Play_arrow = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<svg width="${"21"}" height="${"35"}" viewBox="${"0 0 21 35"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-1g6edcb"}"><path d="${"M0.123047 34.0552V0L20.5614 17.0276L0.123047 34.0552Z"}" class="${"svelte-1g6edcb"}"></path></svg>`;
});
const css = {
  code: ".video-block.svelte-hbikqk.svelte-hbikqk{text-decoration:none;width:100%;position:relative;display:block;margin-bottom:20px}.video-block.svelte-hbikqk img.svelte-hbikqk{display:block;width:100%;height:auto;height:100%;object-fit:cover}.video-block.svelte-hbikqk .title.svelte-hbikqk{display:block;position:absolute;top:10px;left:90px;z-index:10;color:#f5f4ee;font-size:32px;line-height:1.2em}@media(max-width: 800px), screen and (orientation: portrait){.video-block.svelte-hbikqk .title.svelte-hbikqk{font-size:16px}}.video-block.svelte-hbikqk .icon.svelte-hbikqk{position:absolute;top:10px;left:10px;z-index:100;width:70px;height:70px;border-radius:50%;background:#f5f4ee;color:#f5f4ee;line-height:1.2em;display:flex;justify-content:center;align-items:center;padding-left:5px}.embed.svelte-hbikqk.svelte-hbikqk{color:#f5f4ee;cursor:pointer;display:flex;justify-content:center;align-items:center;width:100%}",
  map: null
};
const Video = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { b = {} } = $$props;
  const videoPost = (0, import_sanity_bfd50d1d.l)("*[_id == $id][0]", { id: b.videoPost._ref });
  if ($$props.b === void 0 && $$bindings.b && b !== void 0)
    $$bindings.b(b);
  $$result.css.add(css);
  return `${function(__value) {
    if ((0, import_index_277e1cdb.i)(__value)) {
      __value.then(null, import_index_277e1cdb.n);
      return ``;
    }
    return function(videoPost2) {
      return `
	<a${(0, import_index_277e1cdb.a)("href", "/videos/" + (0, import_get.default)(videoPost2, "slug.current"), 0)} class="${"video-block svelte-hbikqk"}"><div class="${"embed svelte-hbikqk"}">${videoPost2.mainImage ? `<img${(0, import_index_277e1cdb.a)("alt", videoPost2.title, 0)}${(0, import_index_277e1cdb.a)("src", (0, import_sanity_bfd50d1d.u)(videoPost2.mainImage).quality(90).saturation(-100).width(400).url(), 0)} class="${"svelte-hbikqk"}">` : ``}
			<div class="${"icon svelte-hbikqk"}">${(0, import_index_277e1cdb.v)(Play_arrow, "PlayArrow").$$render($$result, {}, {}, {})}</div>
			<div class="${"title svelte-hbikqk"}">${(0, import_index_277e1cdb.e)(videoPost2.title)}
				${videoPost2.runtime ? `(${(0, import_index_277e1cdb.e)(videoPost2.runtime)})` : ``}</div></div></a>
`;
    }(__value);
  }(videoPost)}`;
});
const PersonList = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { b = {} } = $$props;
  if ($$props.b === void 0 && $$bindings.b && b !== void 0)
    $$bindings.b(b);
  return `<div class="${"person-list"}"><p>${(0, import_index_277e1cdb.d)(b.persons, (person) => {
    return `<div>${(0, import_index_277e1cdb.v)(Person_link, "PersonLink").$$render($$result, {
      personId: (0, import_get.default)(person, "personLink._ref", false)
    }, {}, {})}${person.role ? `\u2013 ${(0, import_index_277e1cdb.e)(person.role)}` : ``}
			</div>`;
  })}</p></div>`;
});
const Blocks = (0, import_index_277e1cdb.c)(($$result, $$props, $$bindings, slots) => {
  let { blocks = [] } = $$props;
  if ($$props.blocks === void 0 && $$bindings.blocks && blocks !== void 0)
    $$bindings.blocks(blocks);
  {
    console.log("blocks: ", blocks);
  }
  return `${(0, import_index_277e1cdb.d)(blocks, (b) => {
    return `${b._type == "block" ? `${b.style == "logoBlock" ? `${(0, import_index_277e1cdb.v)(LogoBlock, "LogoBlock").$$render($$result, { b }, {}, {})}` : `${b.style == "invertedBlock" ? `${(0, import_index_277e1cdb.v)(InvertedBlock, "InvertedBlock").$$render($$result, { b }, {}, {})}` : `${b.style == "html" ? `${(0, import_index_277e1cdb.v)(Html, "HTML").$$render($$result, { b }, {}, {})}` : `${(0, import_index_277e1cdb.v)(Text, "Text").$$render($$result, { b }, {}, {})}`}`}`}` : ``}
	${b._type == "image" ? `${(0, import_index_277e1cdb.v)(Image, "Image").$$render($$result, { b }, {}, {})}` : ``}
	${b._type == "embedBlock" ? `${(0, import_index_277e1cdb.v)(Embed, "Embed").$$render($$result, { b }, {}, {})}` : ``}
	${b._type == "dividerBlock" ? `${(0, import_index_277e1cdb.v)(Divider, "Divider").$$render($$result, { b }, {}, {})}` : ``}
	${b._type == "columnsBlock" ? `${(0, import_index_277e1cdb.v)(Columns, "Columns").$$render($$result, { b }, {}, {})}` : ``}
	${b._type == "donationWidget" ? `${(0, import_index_277e1cdb.v)(DonationWidget, "DonationWidget").$$render($$result, { b }, {}, {})}` : ``}
	${b._type == "applicationButton" ? `${(0, import_index_277e1cdb.v)(ApplicationButton, "ApplicationButton").$$render($$result, { b }, {}, {})}` : ``}
	${b._type == "faq" ? `${(0, import_index_277e1cdb.v)(Faq, "Faq").$$render($$result, { b }, {}, {})}` : ``}
	${b._type == "videoBlock" ? `${(0, import_index_277e1cdb.v)(Video, "Video").$$render($$result, { b }, {}, {})}` : ``}
	${b._type == "personList" ? `${(0, import_index_277e1cdb.v)(PersonList, "PersonList").$$render($$result, { b }, {}, {})}` : ``}`;
  })}`;
});
