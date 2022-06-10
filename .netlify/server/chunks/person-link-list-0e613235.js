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
  P: () => Person_link_list
});
module.exports = __toCommonJS(stdin_exports);
var import_index_68ac15fd = require("./index-68ac15fd.js");
var import_person_link_ca6b4a11 = require("./person-link-ca6b4a11.js");
const Person_link_list = (0, import_index_68ac15fd.c)(($$result, $$props, $$bindings, slots) => {
  let { people = [] } = $$props;
  if ($$props.people === void 0 && $$bindings.people && people !== void 0)
    $$bindings.people(people);
  return `${(0, import_index_68ac15fd.h)(people, (person, index) => {
    return `${(0, import_index_68ac15fd.v)(import_person_link_ca6b4a11.P, "PersonLink").$$render($$result, { person }, {}, {})}${index == people.length - 2 ? `&amp;` : ``}`;
  })}`;
});
