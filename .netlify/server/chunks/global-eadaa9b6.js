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
  B: () => BASE_URL,
  D: () => DEFAULT_IMAGE,
  I: () => INSTAGRAM_URL,
  T: () => TWITTER_URL,
  Y: () => YOUTUBE_URL,
  a: () => postTypeToCategory,
  b: () => postTypeToName,
  c: () => categoryToName,
  d: () => dotFormatDate,
  e: () => dateTimeFormat,
  f: () => DEFAULT_DESCRIPTION,
  g: () => renderNewLines,
  h: () => distanceToDate,
  i: () => getCurrentYear,
  l: () => longFormatDate,
  p: () => parseToc,
  r: () => roleToRoleName,
  s: () => shortFormatDate
});
module.exports = __toCommonJS(stdin_exports);
var import_slugify = __toESM(require("slugify"));
var import_date_fns = require("date-fns");
const INSTAGRAM_URL = "https://www.instagram.com/eyebeamnyc/";
const TWITTER_URL = "https://twitter.com/eyebeamnyc";
const YOUTUBE_URL = "https://www.youtube.com/channel/UCoTYylvEkyd5sv1ZIQJIVeg";
const BASE_URL = "https://eyebeam.org";
const DEFAULT_DESCRIPTION = "Eyebeam provides both space and support for a community of diverse, justice-driven artists. Our annual fellowship program, highly engaged community of alumni, advanced tools and resources, shows, and events help our artists bring their work to life and out into the world. Eyebeam enables people to think creatively and critically about technology\u2019s effect on society, with the mission of revealing new paths toward a better future for all.";
const DEFAULT_IMAGE = "https://eyebeam.netlify.com/img/eyebeam-logo.png";
const postTypeToCategory = {
  program: "programs",
  person: "people",
  journalPost: "journal",
  event: "events",
  aboutPage: "about",
  project: "projects",
  note: "notes",
  videoPost: "videos",
  press: "press-and-news",
  news: "press-and-news"
};
const postTypeToName = {
  program: "Program",
  person: "Person",
  journalPost: "Journal",
  event: "Event",
  aboutPage: "About",
  project: "Project",
  note: "Note",
  videoPost: "Video",
  press: "Press",
  news: "News"
};
const categoryToName = {
  programs: "Programs",
  people: "People",
  journal: "Journal",
  events: "Events",
  about: "About",
  projects: "Projects",
  notes: "Notes",
  videos: "Videos",
  statements: "Statements",
  everything: "Everything",
  press: "Press",
  news: "News"
};
const roleToRoleName = {
  artist: "Artist",
  staff: "Staff",
  board: "Board",
  advisoryCommittee: "Advisory Committee"
};
const dotFormatDate = (date) => {
  try {
    if (date) {
      return (0, import_date_fns.format)((0, import_date_fns.parseISO)(date), "dd.MM.yyyy");
    }
  } catch (err) {
    console.dir(err);
  }
};
const longFormatDate = (date) => {
  try {
    if (date) {
      return (0, import_date_fns.format)((0, import_date_fns.parseISO)(date), "MMMM d, yyyy");
    }
  } catch (err) {
    console.dir(err);
  }
};
const dateTimeFormat = (date) => {
  try {
    if (date) {
      return (0, import_date_fns.format)((0, import_date_fns.parseISO)(date), "MMMM d, yyyy, HH:mm");
    }
  } catch (err) {
    console.dir(err);
  }
};
const shortFormatDate = (date) => {
  try {
    if (date) {
      return (0, import_date_fns.format)((0, import_date_fns.parseISO)(date), "MMMM yyyy");
    }
  } catch (err) {
    console.dir(err);
  }
};
const distanceToDate = (date) => {
  try {
    if (date) {
      const parsedDate = (0, import_date_fns.parseISO)(date);
      if ((0, import_date_fns.isFuture)(parsedDate)) {
        return "On " + (0, import_date_fns.format)(parsedDate, "MMMM d");
      }
      return (0, import_date_fns.formatDistanceToNow)(parsedDate) + " ago";
    }
    return "";
  } catch (err) {
    console.dir(err);
  }
};
const getCurrentYear = () => {
  return Number((0, import_date_fns.format)(new Date(), "yyyy"));
};
const parseToc = (text) => {
  let tempToc = [];
  if (text && Array.isArray(text)) {
    let headers = text.filter((b) => b.style == "h2" || b._type == "columnsBlock" || b._type == "faq");
    tempToc = headers.map((b) => {
      if (b._type == "columnsBlock" || b._type == "faq") {
        return {
          title: b.title,
          link: "#" + (0, import_slugify.default)(b.title, {
            lower: true
          })
        };
      } else {
        return {
          title: b.children[0].text,
          link: "#" + (0, import_slugify.default)(b.children[0].text, {
            lower: true
          })
        };
      }
    });
  }
  return tempToc;
};
const renderNewLines = (t) => t.replace(/(?:\r\n|\r|\n)/g, "<br>");
