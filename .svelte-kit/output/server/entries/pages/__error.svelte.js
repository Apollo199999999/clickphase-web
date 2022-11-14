import { c as create_ssr_component, v as validate_component, e as escape } from "../../chunks/index-223a4ced.js";
import { T as TextBlock } from "../../chunks/NavigationView.svelte_svelte_type_style_lang-8088d3b7.js";
import { B as Button } from "../../chunks/Button-9355eef8.js";
var __error_svelte_svelte_type_style_lang = "";
const css = {
  code: '.container.svelte-1pkjsfi{position:relative;word-wrap:break-word;align-items:center;justify-content:center;text-align:center}.components.svelte-1pkjsfi{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);text-align:center}.error-status.svelte-1pkjsfi{line-height:normal}.error-message.svelte-1pkjsfi{margin-top:1rem;line-height:normal}.error-button.svelte-1pkjsfi{transform:scale(calc(16/14));margin-top:calc(1.5rem / calc(16/14))}.mica-bg.svelte-1pkjsfi{position:relative;width:100%;height:calc(100vh - 4em);overflow:hidden}.image.svelte-1pkjsfi{background-image:url("/MicaLight.png");width:100%;height:100%;filter:saturate(120%);transform:scale(1.7);background-position:center;background-repeat:no-repeat;background-size:cover;background-attachment:fixed}@media(prefers-color-scheme: dark){.image.svelte-1pkjsfi{background-image:url("/MicaDark.png");width:100%;height:100%;filter:saturate(120%);transform:scale(1.7);background-position:center;background-repeat:no-repeat;background-size:cover;background-attachment:fixed}}.image.svelte-1pkjsfi:before{content:"";position:absolute;left:0;right:0;top:0;bottom:0;background:var(--fds-card-background-secondary)}',
  map: null
};
function load({ error, status }) {
  return {
    props: { message: error.message, status }
  };
}
const _error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { message } = $$props;
  let { status } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  $$result.css.add(css);
  return `
<div class="${"container svelte-1pkjsfi"}"><div class="${"mica-bg svelte-1pkjsfi"}"><div class="${"image svelte-1pkjsfi"}"></div></div>
    <div class="${"components svelte-1pkjsfi"}"><div class="${"error-status svelte-1pkjsfi"}">${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "display" }, {}, {
    default: () => {
      return `Error ${escape(status)}`;
    }
  })}</div>
        <div class="${"error-message svelte-1pkjsfi"}">${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "bodyLarge" }, {}, {
    default: () => {
      return `Error message: ${escape(message)}`;
    }
  })}</div>
        <div class="${"error-button svelte-1pkjsfi"}">${validate_component(Button, "Button").$$render($$result, { href: "/" }, {}, {
    default: () => {
      return `Return to homepage`;
    }
  })}</div></div>
</div>`;
});
export { _error as default, load };
