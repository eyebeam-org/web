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
  get: () => get
});
module.exports = __toCommonJS(stdin_exports);
var import_sanity_59332496 = require("../../../chunks/sanity-59332496.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_get_video_id = require("get-video-id");
var import_has = require("lodash/has.js");
const get = async (request) => {
  const about = await (0, import_sanity_59332496.l)("*[_id in ['what-is-eyebeam', 'get-involved', 'our-mission-and-values', 'our-history', 'staff-and-board', 'artists', 'press-and-news', 'our-operating-documents', 'media-kit', 'contact']]{..., 'xoxoxoxo': *[_type == 'press' || _type == 'news' ][0..3]{...}}");
  const pressAndNews = await (0, import_sanity_59332496.l)("*[_type == 'press' || _type == 'news' ][0..3]");
  return {
    body: {
      about: about.status === 404 ? "ERROR" : about,
      pressAndNews: pressAndNews.status === 404 ? "ERROR" : pressAndNews
    }
  };
};
