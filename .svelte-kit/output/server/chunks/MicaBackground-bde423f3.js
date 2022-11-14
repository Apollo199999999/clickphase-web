import { c as create_ssr_component } from "./index-223a4ced.js";
var MicaBackground_svelte_svelte_type_style_lang = "";
const css = {
  code: '.container.svelte-wa3wd2{width:100%;height:72vh;overflow:hidden}.image.svelte-wa3wd2{background-image:url("/MicaLight.png");width:100%;height:100%;filter:saturate(120%);transform:scale(1.7);background-position:center;background-repeat:no-repeat;background-size:cover}@media(prefers-color-scheme: dark){.image.svelte-wa3wd2{background-image:url("/MicaDark.png");width:100%;height:100%;filter:saturate(120%);transform:scale(1.7);background-position:center;background-repeat:no-repeat;background-size:cover}}.image.svelte-wa3wd2:before{content:"";position:absolute;left:0;right:0;top:0;bottom:0;background:var(--fds-card-background-secondary)}',
  map: null
};
const MicaBackground = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `
<div class="${"container svelte-wa3wd2"}"><div class="${"image svelte-wa3wd2"}"></div>
</div>`;
});
export { MicaBackground as M };
