import { c as create_ssr_component, v as validate_component, e as escape } from "../../chunks/index-223a4ced.js";
import { T as TextBlock } from "../../chunks/NavigationView.svelte_svelte_type_style_lang-8088d3b7.js";
import { M as MicaBackground } from "../../chunks/MicaBackground-bde423f3.js";
import { B as Button } from "../../chunks/Button-9355eef8.js";
import { H as HeaderChip } from "../../chunks/HeaderChip-992c049f.js";
var HeroSection_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '.parallax-container.svelte-1iyksoe.svelte-1iyksoe{position:relative;width:100%;height:72vh;overflow-y:hidden;align-items:center;justify-content:center;text-align:center}.bg-image-div.svelte-1iyksoe.svelte-1iyksoe{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.bg-image-div.svelte-1iyksoe img.svelte-1iyksoe{max-height:calc(72vh - 50px);max-width:95vw;content:url("/screenshots/granny-keyboard/Window.png");-webkit-fliter:blur(4px);filter:blur(4px)}.logo-components.svelte-1iyksoe.svelte-1iyksoe{position:absolute;word-wrap:break-word;top:50%;left:50%;transform:translate(-50%, -50%);width:90vw}.logo-components.svelte-1iyksoe img.svelte-1iyksoe{display:block;max-height:17vh;max-width:90vw;content:url("/app-images/granny-keyboard/logoLight.png");margin:auto}@media(prefers-color-scheme: dark){.logo-components.svelte-1iyksoe img.svelte-1iyksoe{display:block;max-height:17vh;max-width:90vw;content:url("/app-images/granny-keyboard/logoDark.png");margin:auto}}.logo-components.svelte-1iyksoe .caption-text{display:block;margin-top:10px}.logo-components.svelte-1iyksoe .download-btn{margin-top:calc(25px / calc(16/14))}',
  map: null
};
const HeroSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sy;
  $$result.css.add(css$2);
  return `


<div class="${"parallax-container svelte-1iyksoe"}">${validate_component(MicaBackground, "MicaBackground").$$render($$result, {}, {}, {})}

    <div class="${"bg-image-div svelte-1iyksoe"}"><img style="${"transform: translate(0," + escape(-sy * 0.2, true) + "px)"}" alt="${"Granny Keyboard Windows Screenshot"}" class="${"svelte-1iyksoe"}"></div>

    <div class="${"logo-components svelte-1iyksoe"}"><img style="${"transform: translate(0," + escape(-sy * 0.1, true) + "px)"}" alt="${"Granny Keyboard Logo"}" class="${"svelte-1iyksoe"}">
        ${validate_component(TextBlock, "TextBlock").$$render($$result, {
    variant: "subtitle",
    style: "transform: translate(0," + -sy * 0.1 + "px)",
    class: "caption-text"
  }, {}, {
    default: () => {
      return `Your keys will start worshipping Granny
        `;
    }
  })}

        ${validate_component(Button, "Button").$$render($$result, {
    class: "download-btn",
    style: "transform: translate(0," + -sy * 0.1 + "px) scale(calc(16/14))",
    onclick: "window.open('https://github.com/Apollo199999999/Granny-Keyboard/releases', '_blank');",
    variant: "accent"
  }, {}, {
    default: () => {
      return `Download Granny Keyboard
        `;
    }
  })}</div>
</div>`;
});
var AboutGrannyKeyboard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".container.svelte-18fotlr.svelte-18fotlr{padding:2em 5vw 2em 5vw;background-color:var(--fds-solid-background-base);margin-top:1em;overflow:hidden;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;overflow:hidden}.container.svelte-18fotlr .titleText{margin-left:5px;margin-right:5px}.container.svelte-18fotlr .bodyText{display:block;text-align:center;margin:auto;margin-top:1.5em;max-width:1100px}.container.svelte-18fotlr iframe.svelte-18fotlr{width:90vw;max-width:840px;height:calc(calc(90vw / 16) * 9);max-height:473px;margin-top:1.5em}",
  map: null
};
const AboutGrannyKeyboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"container svelte-18fotlr"}">${validate_component(HeaderChip, "HeaderChip").$$render($$result, {}, {}, {
    default: () => {
      return `About`;
    }
  })}
    
    ${validate_component(TextBlock, "TextBlock").$$render($$result, {
    variant: "titleLarge",
    class: "titleText"
  }, {}, {
    default: () => {
      return `About Granny Keyboard`;
    }
  })}

    ${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "bodyLarge", class: "bodyText" }, {}, {
    default: () => {
      return `Granny Keyboard is a keyboard modifier that modifies your keyboard to
        make it worthy of Granny. Whichever key you press, the word &#39;Granny&#39;
        will be added in front of it and a dialog box will pop up.`;
    }
  })}

    <iframe src="${"https://www.youtube-nocookie.com/embed/NdBmcblzhFA"}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen class="${"svelte-18fotlr"}"></iframe>
</div>`;
});
var DownloadLinks_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-2gk8ks{padding:2em 5vw 2em 5vw;background-color:var(--fds-solid-background-secondary);overflow:hidden;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;overflow:hidden}.container.svelte-2gk8ks .titleText{margin-left:5px;margin-right:5px}.container.svelte-2gk8ks .bodyText{display:block;text-align:center;margin:auto;margin-top:1.5em}.cards-collection.svelte-2gk8ks{margin-top:1.5em;margin-bottom:-1.5em;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.card.svelte-2gk8ks{display:flex;justify-content:center;align-items:center;margin:0em 0.7em 1.5em 0.7em;padding:1.5rem 0.2rem;width:280px;min-width:200px;flex-grow:1;min-height:145px;text-align:center;border-radius:var(--fds-control-corner-radius);z-index:999;-webkit-transition:200ms ease-in-out;-o-transition:200ms ease-in-out;transition:200ms ease-in-out;-webkit-box-shadow:0 0 5px rgba(0, 0, 0, 0.3);box-shadow:0 0 5px rgba(0, 0, 0, 0.3);background:linear-gradient(\r\n                var(--fds-card-background-default),\r\n                var(--fds-card-background-default)\r\n            ),\r\n            linear-gradient(\r\n                var(--fds-solid-background-secondary),\r\n                var(--fds-solid-background-secondary)\r\n            )}.card-content.svelte-2gk8ks{width:100%}.card-text.svelte-2gk8ks{font-family:var(--fds-font-family-display);font-weight:600;font-size:28px;margin:0px;margin-left:10px;margin-right:10px}.card-subtext.svelte-2gk8ks{font-family:var(--fds-font-family-display);font-size:18px;margin:0px;margin-top:1rem;margin-left:20px;margin-right:20px}.download-btn{margin-top:calc(1.5em / 1.1);transform:scale(1.1)}.hyperlinks{margin-top:1em;margin-bottom:-0.5em;margin-left:10px;margin-right:10px}",
  map: null
};
const DownloadLinks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-2gk8ks"}">${validate_component(HeaderChip, "HeaderChip").$$render($$result, {}, {}, {
    default: () => {
      return `Links`;
    }
  })}

    ${validate_component(TextBlock, "TextBlock").$$render($$result, {
    class: "titleText",
    variant: "titleLarge"
  }, {}, {
    default: () => {
      return `Downloads and Links`;
    }
  })}
    ${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "bodyLarge", class: "bodyText" }, {}, {
    default: () => {
      return `Granny Keyboard downloads and other links.
    `;
    }
  })}

    <div class="${"cards-collection svelte-2gk8ks"}"><div class="${"card svelte-2gk8ks"}"><div class="${"card-content svelte-2gk8ks"}"><p class="${"card-text svelte-2gk8ks"}">Download Granny Keyboard</p>
                <p class="${"card-subtext svelte-2gk8ks"}">Click the button below to download Granny Keyboard:
                </p>
                ${validate_component(Button, "Button").$$render($$result, {
    onclick: "window.open('https://github.com/Apollo199999999/Granny-Keyboard/releases', '_blank');",
    variant: "accent",
    class: "download-btn"
  }, {}, {
    default: () => {
      return `Download Granny Keyboard
                `;
    }
  })}</div></div>

        <div class="${"card svelte-2gk8ks"}"><div class="${"card-content svelte-2gk8ks"}"><p class="${"card-text svelte-2gk8ks"}">Granny Keyboard links</p>
                ${validate_component(Button, "Button").$$render($$result, {
    class: "hyperlinks",
    onclick: "window.open('https://github.com/Apollo199999999/Granny-Keyboard', '_blank');",
    variant: "hyperlink"
  }, {}, {
    default: () => {
      return `Granny Keyboard source code`;
    }
  })}
                ${validate_component(Button, "Button").$$render($$result, {
    class: "hyperlinks",
    onclick: "window.open('https://github.com/Apollo199999999/Granny-Keyboard/issues', '_blank');",
    variant: "hyperlink"
  }, {}, {
    default: () => {
      return `Report a bug`;
    }
  })}
                ${validate_component(Button, "Button").$$render($$result, {
    class: "hyperlinks",
    onclick: "window.open('https://github.com/Apollo199999999/Granny-Keyboard/issues', '_blank');",
    variant: "hyperlink"
  }, {}, {
    default: () => {
      return `Request a feature`;
    }
  })}</div></div></div>
</div>`;
});
const Granny_keyboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Granny Keyboard - ClickPhase</title>`, ""}<meta name="${"description"}" content="${"Granny Keyboard - Your keys will start worshipping Granny"}" data-svelte="svelte-17x9va3"><meta name="${"keywords"}" content="${"Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js"}" data-svelte="svelte-17x9va3"><meta name="${"author"}" content="${"ClickPhase"}" data-svelte="svelte-17x9va3">`, ""}

${validate_component(HeroSection, "HeroSection").$$render($$result, {}, {}, {})}
${validate_component(AboutGrannyKeyboard, "AboutGrannyKeyboard").$$render($$result, {}, {}, {})}
${validate_component(DownloadLinks, "DownloadLinks").$$render($$result, {}, {}, {})}`;
});
export { Granny_keyboard as default };
