import { c as create_ssr_component } from "../../chunks/index.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col h-screen justify-between"><main>${slots.default ? slots.default({}) : ``}</main></div>`;
});
export {
  Layout as default
};
