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
  l: () => loadData,
  r: () => renderBlockText,
  t: () => toPlainText,
  u: () => urlFor
});
module.exports = __toCommonJS(stdin_exports);
var import_client = __toESM(require("@sanity/client"));
var import_block_content_to_html = __toESM(require("@sanity/block-content-to-html"));
var import_image_url = __toESM(require("@sanity/image-url"));
var import_get_video_id = __toESM(require("get-video-id"));
var import_has = __toESM(require("lodash/has.js"));
const SANITY_ID = "3knpqano";
console.log("env: ", process.env.NODE_ENV);
const client = (0, import_client.default)({
  projectId: SANITY_ID,
  dataset: process.env.NODE_ENV == "development" ? "test" : "production",
  apiVersion: "2021-10-05",
  useCdn: false
});
const h = import_block_content_to_html.default.h;
const prepareTextElements = (props) => {
  let textElements = [];
  if ((0, import_has.default)(props, "node.caption.content"))
    textElements.push(h("figcaption", { className: "caption" }, toPlainText(props.node.caption.content)));
  if ((0, import_has.default)(props, "node.attribution"))
    textElements.push(h("figcaption", { className: "credits" }, props.node.attribution));
  return textElements;
};
const renderBlockText = (text) => (0, import_block_content_to_html.default)({
  blocks: text,
  serializers,
  projectId: SANITY_ID,
  dataset: "production"
});
const toPlainText = (blocks = []) => {
  return blocks.map((block) => {
    if (block._type !== "block" || !block.children) {
      return "";
    }
    return block.children.map((child) => child.text).join("");
  }).join("\n\n");
};
const builder = (0, import_image_url.default)(client);
const urlFor = (source) => builder.image(source);
const serializers = {
  marks: {
    link: (props) => h("a", { target: "_blank", rel: "noreferrer", href: props.mark.href }, props.children),
    interviewName: (props) => h("span", { className: "interview-name" }, props.children),
    footnote: (props) => {
      return h("span", props.children, h("a", { id: "link-" + props.mark._key, className: "footnote-link", href: "#note-" + props.mark._key }));
    }
  },
  types: {
    block: (props) => {
      const style = props.node.style || "normal";
      if (style === "blockquote")
        return h("blockquote", {}, props.children);
      if (style === "h2")
        return h("h2", {}, props.children);
      if (style === "h3")
        return h("h3", {}, props.children);
      if (style === "h4")
        return h("h4", {}, props.children);
      return h("p", { className: style }, props.children);
    },
    image: (props) => {
      return h("figure", { className: "image" }, [
        h("img", {
          src: urlFor(props.node.asset).width(800).saturation(-100).quality(90).auto("format").url()
        }),
        ...prepareTextElements(props)
      ]);
    },
    embedBlock: (props) => {
      if (props.node.url.includes("youtube")) {
        return h("figure", { className: "youtube" }, [
          h("div", { className: "embed-container" }, h("iframe", { width: "720", height: "480", src: "https://www.youtube.com/embed/" + (0, import_get_video_id.default)(props.node.url).id, frameborder: "no", allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", allowfullscreen: true })),
          ...prepareTextElements(props)
        ]);
      }
      if (props.node.url.includes("vimeo")) {
        return h("figure", { className: "vimeo" }, [
          h("div", { className: "embed-container" }, h("iframe", { width: "720", height: "480", src: "https://player.vimeo.com/video/" + (0, import_get_video_id.default)(props.node.url).id, frameborder: "no", byline: false, color: "#ffffff", allow: "autoplay; fullscreen", allowfullscreen: true })),
          ...prepareTextElements(props)
        ]);
      }
      if (props.node.url.includes("soundcloud")) {
        return h("figure", { className: "soundcloud" }, [
          h("div", { className: "soundcloud-container" }, h("iframe", { width: "100%", height: "300", src: "https://w.soundcloud.com/player/?url=" + props.node.url + "&color=%23fffff", frameborder: "no", scrolling: "no", allow: "autoplay" })),
          ...prepareTextElements(props)
        ]);
      }
    },
    videoBlock: (props) => {
      const videoUrl = "https://cdn.sanity.io/files/yesqrmft/production/" + props.node.videoFile.asset._ref.replace("file-", "").replace("-mp4", ".mp4");
      return h("figure", { className: "video" }, [
        h("video", { src: videoUrl, controls: true, loop: true, autoplay: props.node.autoPlay }),
        ...prepareTextElements(props)
      ]);
    },
    audioBlock: (props) => {
      const audioUrl = "https://cdn.sanity.io/files/yesqrmft/production/" + props.node.audioFile.asset._ref.replace("file-", "").replace("-mp3", ".mp3");
      return h("figure", { className: "audio" }, [
        h("audio", { src: audioUrl, controls: true }),
        ...prepareTextElements(props)
      ]);
    }
  }
};
const loadData = async (query, params) => {
  try {
    const res = await client.fetch(query, params);
    if (res === null) {
      console.log("QUERY", query);
      return Promise.reject("No posts");
    }
    return res;
  } catch (err) {
    return Promise.reject(new Error(404));
  }
};
