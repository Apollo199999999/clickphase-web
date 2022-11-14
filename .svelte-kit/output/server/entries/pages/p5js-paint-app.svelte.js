import { c as create_ssr_component, v as validate_component, e as escape, p as createEventDispatcher, t as onDestroy, h as add_attribute } from "../../chunks/index-223a4ced.js";
import { T as TextBlock } from "../../chunks/NavigationView.svelte_svelte_type_style_lang-8088d3b7.js";
import { M as MicaBackground } from "../../chunks/MicaBackground-bde423f3.js";
import { B as Button } from "../../chunks/Button-9355eef8.js";
import screenfull from "screenfull";
import { H as HeaderChip } from "../../chunks/HeaderChip-992c049f.js";
var HeroSection_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.parallax-container.svelte-1u6dzon.svelte-1u6dzon{position:relative;width:100%;height:72vh;overflow-y:hidden;align-items:center;justify-content:center;text-align:center}.bg-image-div.svelte-1u6dzon.svelte-1u6dzon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.bg-image-div.svelte-1u6dzon img.svelte-1u6dzon{max-height:calc(72vh - 50px);max-width:80vw;content:url("/screenshots/p5js-paint-app/Window.png");-webkit-fliter:blur(4px);filter:blur(4px)}@media(prefers-color-scheme: dark){.bg-image-div.svelte-1u6dzon img.svelte-1u6dzon{max-height:calc(72vh - 50px);max-width:80vw;content:url("/screenshots/p5js-paint-app/Window.png");-webkit-fliter:blur(4px) brightness(0.8);filter:blur(4px) brightness(0.8)}}.logo-components.svelte-1u6dzon.svelte-1u6dzon{position:absolute;word-wrap:break-word;top:50%;left:50%;transform:translate(-50%, -50%);width:90vw}.logo-components.svelte-1u6dzon .logo-title{display:block;line-height:normal;font-size:min(7vmax, 68px);margin:auto}.logo-components.svelte-1u6dzon .caption-text{display:block;margin-top:20px}.logo-components.svelte-1u6dzon .visit-btn{margin-top:calc(25px / calc(16 / 14))}',
  map: null
};
const HeroSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sy;
  $$result.css.add(css$1);
  return `


<div class="${"parallax-container svelte-1u6dzon"}">${validate_component(MicaBackground, "MicaBackground").$$render($$result, {}, {}, {})}

    <div class="${"bg-image-div svelte-1u6dzon"}"><img style="${"transform: translate(0," + escape(-sy * 0.2, true) + "px)"}" alt="${"p5.js Paint App Screenshot"}" class="${"svelte-1u6dzon"}"></div>

    <div class="${"logo-components svelte-1u6dzon"}">${validate_component(TextBlock, "TextBlock").$$render($$result, {
    class: "logo-title",
    style: "transform: translate(0," + -sy * 0.1 + "px)",
    variant: "display"
  }, {}, {
    default: () => {
      return `p5.js Paint App`;
    }
  })}
        ${validate_component(TextBlock, "TextBlock").$$render($$result, {
    variant: "subtitle",
    style: "transform: translate(0," + -sy * 0.1 + "px)",
    class: "caption-text"
  }, {}, {
    default: () => {
      return `A lightweight, online, and minimal paint app made in p5.js
        `;
    }
  })}

        ${validate_component(Button, "Button").$$render($$result, {
    class: "visit-btn",
    style: "transform: translate(0," + -sy * 0.1 + "px) scale(calc(16/14))",
    onclick: "window.open('https://editor.p5js.org/Apollo199999999/sketches/X0Y6tSIjJ', '_blank');",
    variant: "accent"
  }, {}, {
    default: () => {
      return `Visit Paint App on p5.js
        `;
    }
  })}</div>
</div>`;
});
const Fullscreen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let component;
  createEventDispatcher();
  const onToggle = () => {
    if (screenfull.isEnabled && component?.nextElementSibling) {
      screenfull.toggle(component.nextElementSibling);
    }
  };
  const onRequest = () => {
    if (screenfull.isEnabled && component?.nextElementSibling) {
      screenfull.request(component.nextElementSibling);
    }
  };
  const onExit = () => {
    if (screenfull.isEnabled && component?.nextElementSibling) {
      screenfull.exit();
    }
  };
  onDestroy(() => {
    if (screenfull.isEnabled) {
      screenfull.off("change", () => true);
      screenfull.off("error", () => true);
    }
  });
  return `<div style="${"width:0; height:0"}"${add_attribute("this", component, 0)}></div>
${slots.default ? slots.default({ onToggle, onRequest, onExit }) : ``}`;
});
var p5jsFrameSection_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1vlp3o7{margin-top:1em;padding:2em 5vw 2em 5vw;overflow:hidden;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;overflow:hidden}.container.svelte-1vlp3o7 .bodyText{display:block;text-align:center;margin:auto;margin-top:1.5em}.paint-app-frame.svelte-1vlp3o7{display:flex;align-items:center;justify-content:center;background-color:var(--fds-solid-background-base)}.frame-div.svelte-1vlp3o7{overflow-x:scroll;width:90vw;height:100%}.paint-app-frame.svelte-1vlp3o7 .fullscreen-btn{margin:1em}",
  map: null
};
const P5jsFrameSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-1vlp3o7"}">${validate_component(HeaderChip, "HeaderChip").$$render($$result, {}, {}, {
    default: () => {
      return `About`;
    }
  })}
    
    ${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "titleLarge" }, {}, {
    default: () => {
      return `p5.js Paint App`;
    }
  })}
    ${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "bodyLarge", class: "bodyText" }, {}, {
    default: () => {
      return `A lightweight, online, and minimal paint app developed in p5.js by me.
        (Works best on desktop, does not work well on mobile)
    `;
    }
  })}

    ${validate_component(Fullscreen, "Fullscreen").$$render($$result, {}, {}, {
    default: ({ onToggle }) => {
      return `<div class="${"paint-app-frame svelte-1vlp3o7"}"><div><div class="${"fullscreen-btn-div"}">${validate_component(Button, "Button").$$render($$result, {
        class: "fullscreen-btn",
        variant: "accent"
      }, {}, {
        default: () => {
          return `Toggle Fullscreen`;
        }
      })}</div>
                <div class="${"frame-div svelte-1vlp3o7"}"><iframe title="${"p5.js Paint App"}" width="${"900"}" height="${"642"}" src="${"https://editor.p5js.org/Apollo199999999/embed/X0Y6tSIjJ"}"></iframe></div></div></div>`;
    }
  })}
</div>`;
});
const P5js_paint_app = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>p5.js Paint App - ClickPhase</title>`, ""}<meta name="${"description"}" content="${"p5.js - A lightweight, online, and minimal paint app made in p5.js"}" data-svelte="svelte-vyya11"><meta name="${"keywords"}" content="${"Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js"}" data-svelte="svelte-vyya11"><meta name="${"author"}" content="${"ClickPhase"}" data-svelte="svelte-vyya11">`, ""}

${validate_component(HeroSection, "HeroSection").$$render($$result, {}, {}, {})}
${validate_component(P5jsFrameSection, "P5jsFrameSection").$$render($$result, {}, {}, {})}`;
});
export { P5js_paint_app as default };
