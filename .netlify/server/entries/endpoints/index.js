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
var import_sanity_bf41d9e1 = require("../../chunks/sanity-bf41d9e1.js");
var import_client = require("@sanity/client");
var import_block_content_to_html = require("@sanity/block-content-to-html");
var import_image_url = require("@sanity/image-url");
var import_get_video_id = require("get-video-id");
var import_has = require("lodash/has.js");
const get = async (request) => {
  const programs = await (0, import_sanity_bf41d9e1.l)("*[_type == 'program']");
  const newPosts = await (0, import_sanity_bf41d9e1.l)("*[_type in ['event', 'press', 'news', 'note', 'videoPost', 'journalPost']]{..., people[]->{...}} | order(_createdAt desc)");
  const stickers = await (0, import_sanity_bf41d9e1.l)("*[_id == 'stickers']{...}[0]");
  const featuredArtists = await (0, import_sanity_bf41d9e1.l)("*[_type == 'featuredArtists']{..., featuredArtist1->{..., 'image': mainImage.asset->}, featuredArtist2->{..., 'image': mainImage.asset->}, featuredArtist3->{..., 'image': mainImage.asset->}}");
  return {
    body: {
      programs: programs.status === 404 ? "ERROR" : programs,
      newPosts: newPosts.status === 404 ? "ERROR" : addRoute(newPosts),
      stickers: stickers.status === 404 ? "ERROR" : stickers,
      featuredArtists: featuredArtists.status === 404 ? "ERROR" : featuredArtists
    }
  };
};
function addRoute(data) {
  return data.map((item) => {
    if (item._type == "press" || item._type == "news") {
      item.route = "press-and-news";
    } else if (item._type == "journalPost") {
      item.route = "journal";
    } else if (item._type == "videoPost") {
      item.route = "videos";
    } else {
      item.route = "notes";
    }
    return item;
  });
}