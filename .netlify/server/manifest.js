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
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["OE_front_2.png", "OE_front_4.png", "ddc_header.jpg", "eyebeambox.gif", "favicon.png", "fonts/EyebeamSans-Medium.woff", "fonts/EyebeamSans-Medium.woff2", "stock.svg", "support_header.jpg"]),
  mimeTypes: { ".png": "image/png", ".jpg": "image/jpeg", ".gif": "image/gif", ".woff": "font/woff", ".woff2": "font/woff2", ".svg": "image/svg+xml" },
  _: {
    entry: { "file": "start-dc3a2561.js", "js": ["start-dc3a2561.js", "chunks/index-fa94c728.js", "chunks/index-6da00ed5.js", "chunks/singletons-d1fb5791.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/10.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/11.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/13.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/15.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/17.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/19.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/21.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/22.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/24.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/27.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/25.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/9.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/12.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/14.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/16.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/18.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/20.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/23.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/26.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/index.js"))),
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        id: "about",
        pattern: /^\/about\/?$/,
        names: [],
        types: [],
        path: "/about",
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/about/index.js"))),
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "events",
        pattern: /^\/events\/?$/,
        names: [],
        types: [],
        path: "/events",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "everything",
        pattern: /^\/everything\/?$/,
        names: [],
        types: [],
        path: "/everything",
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/everything/index.js"))),
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        id: "eyebeam-is-changing",
        pattern: /^\/eyebeam-is-changing\/?$/,
        names: [],
        types: [],
        path: "/eyebeam-is-changing",
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/eyebeam-is-changing/index.js"))),
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        id: "journal",
        pattern: /^\/journal\/?$/,
        names: [],
        types: [],
        path: "/journal",
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/journal/index.js"))),
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        id: "newsletter",
        pattern: /^\/newsletter\/?$/,
        names: [],
        types: [],
        path: "/newsletter",
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/newsletter/index.js"))),
        a: [0, 8],
        b: [1]
      },
      {
        type: "page",
        id: "notes",
        pattern: /^\/notes\/?$/,
        names: [],
        types: [],
        path: "/notes",
        shadow: null,
        a: [0, 9],
        b: [1]
      },
      {
        type: "page",
        id: "people",
        pattern: /^\/people\/?$/,
        names: [],
        types: [],
        path: "/people",
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/people/index.js"))),
        a: [0, 10],
        b: [1]
      },
      {
        type: "page",
        id: "press-and-news",
        pattern: /^\/press-and-news\/?$/,
        names: [],
        types: [],
        path: "/press-and-news",
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/press-and-news/index.js"))),
        a: [0, 11],
        b: [1]
      },
      {
        type: "page",
        id: "programs",
        pattern: /^\/programs\/?$/,
        names: [],
        types: [],
        path: "/programs",
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/programs/index.js"))),
        a: [0, 12],
        b: [1]
      },
      {
        type: "page",
        id: "projects",
        pattern: /^\/projects\/?$/,
        names: [],
        types: [],
        path: "/projects",
        shadow: null,
        a: [0, 13],
        b: [1]
      },
      {
        type: "page",
        id: "statements",
        pattern: /^\/statements\/?$/,
        names: [],
        types: [],
        path: "/statements",
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/statements/index.js"))),
        a: [0, 14],
        b: [1]
      },
      {
        type: "page",
        id: "support",
        pattern: /^\/support\/?$/,
        names: [],
        types: [],
        path: "/support",
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/support/index.js"))),
        a: [0, 15],
        b: [1]
      },
      {
        type: "page",
        id: "videos",
        pattern: /^\/videos\/?$/,
        names: [],
        types: [],
        path: "/videos",
        shadow: null,
        a: [0, 16],
        b: [1]
      },
      {
        type: "page",
        id: "support/supportBlock",
        pattern: /^\/support\/supportBlock\/?$/,
        names: [],
        types: [],
        path: "/support/supportBlock",
        shadow: null,
        a: [0, 17],
        b: [1]
      },
      {
        type: "page",
        id: "about/[slug]",
        pattern: /^\/about\/([^/]+?)\/?$/,
        names: ["slug"],
        types: [null],
        path: null,
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/about/_slug_.js"))),
        a: [0, 18],
        b: [1]
      },
      {
        type: "page",
        id: "events/[slug]",
        pattern: /^\/events\/([^/]+?)\/?$/,
        names: ["slug"],
        types: [null],
        path: null,
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/events/_slug_.js"))),
        a: [0, 19],
        b: [1]
      },
      {
        type: "page",
        id: "journal/[slug]",
        pattern: /^\/journal\/([^/]+?)\/?$/,
        names: ["slug"],
        types: [null],
        path: null,
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/journal/_slug_.js"))),
        a: [0, 20],
        b: [1]
      },
      {
        type: "page",
        id: "notes/[slug]",
        pattern: /^\/notes\/([^/]+?)\/?$/,
        names: ["slug"],
        types: [null],
        path: null,
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/notes/_slug_.js"))),
        a: [0, 21],
        b: [1]
      },
      {
        type: "page",
        id: "people/[slug]",
        pattern: /^\/people\/([^/]+?)\/?$/,
        names: ["slug"],
        types: [null],
        path: null,
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/people/_slug_.js"))),
        a: [0, 22],
        b: [1]
      },
      {
        type: "page",
        id: "press-and-news/[slug]",
        pattern: /^\/press-and-news\/([^/]+?)\/?$/,
        names: ["slug"],
        types: [null],
        path: null,
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/press-and-news/_slug_.js"))),
        a: [0, 23],
        b: [1]
      },
      {
        type: "page",
        id: "programs/[slug]",
        pattern: /^\/programs\/([^/]+?)\/?$/,
        names: ["slug"],
        types: [null],
        path: null,
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/programs/_slug_.js"))),
        a: [0, 24],
        b: [1]
      },
      {
        type: "page",
        id: "projects/[slug]",
        pattern: /^\/projects\/([^/]+?)\/?$/,
        names: ["slug"],
        types: [null],
        path: null,
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/projects/_slug_.js"))),
        a: [0, 25],
        b: [1]
      },
      {
        type: "page",
        id: "support/[slug]",
        pattern: /^\/support\/([^/]+?)\/?$/,
        names: ["slug"],
        types: [null],
        path: null,
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/support/_slug_.js"))),
        a: [0, 26],
        b: [1]
      },
      {
        type: "page",
        id: "videos/[slug]",
        pattern: /^\/videos\/([^/]+?)\/?$/,
        names: ["slug"],
        types: [null],
        path: null,
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/videos/_slug_.js"))),
        a: [0, 27],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
