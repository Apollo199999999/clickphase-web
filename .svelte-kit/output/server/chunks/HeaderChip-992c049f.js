import { c as create_ssr_component } from "./index-223a4ced.js";
import "./NavigationView.svelte_svelte_type_style_lang-8088d3b7.js";
var HeaderChip_svelte_svelte_type_style_lang = "";
const css = {
  code: ".header-chip.svelte-1bkpq2h{display:inline-flex;margin-block-end:8px;padding:4px 16px;border-radius:50px;background-color:var(--fds-subtle-fill-secondary);color:var(--fds-text-secondary);font-size:var(--fds-body-font-size);font-weight:600;line-height:18px;user-select:none;margin-bottom:0.5em}",
  map: null
};
const HeaderChip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div><span class="${"header-chip svelte-1bkpq2h"}">${slots.default ? slots.default({}) : ``}</span>
</div>`;
});
export { HeaderChip as H };
