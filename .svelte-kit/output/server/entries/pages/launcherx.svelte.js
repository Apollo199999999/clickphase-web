import { c as create_ssr_component, v as validate_component, e as escape } from "../../chunks/index-223a4ced.js";
import { T as TextBlock } from "../../chunks/NavigationView.svelte_svelte_type_style_lang-8088d3b7.js";
import { M as MicaBackground } from "../../chunks/MicaBackground-bde423f3.js";
import { B as Button } from "../../chunks/Button-9355eef8.js";
import { I as InfoBar } from "../../chunks/InfoBar-c3821baf.js";
import { H as HeaderChip } from "../../chunks/HeaderChip-992c049f.js";
var HeroSection_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '.parallax-container.svelte-egah5j.svelte-egah5j{position:relative;width:100%;height:72vh;overflow-y:hidden;align-items:center;justify-content:center;text-align:center}.bg-image-div.svelte-egah5j.svelte-egah5j{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.bg-image-div.svelte-egah5j img.svelte-egah5j{max-height:calc(72vh - 50px);max-width:80vw;content:url("/screenshots/launcherx/WindowLight.png");-webkit-fliter:blur(6px);filter:blur(6px)}@media(prefers-color-scheme: dark){.bg-image-div.svelte-egah5j img.svelte-egah5j{max-height:calc(72vh - 50px);max-width:80vw;content:url("/screenshots/launcherx/WindowDark.png");-webkit-fliter:blur(6px);filter:blur(6px)}}.logo-components.svelte-egah5j.svelte-egah5j{position:absolute;word-wrap:break-word;top:50%;left:50%;transform:translate(-50%, -50%);width:90vw}.logo-components.svelte-egah5j img.svelte-egah5j{display:block;max-height:15vh;max-width:80vw;content:url("/app-images/launcherx/logoLight.png");margin:auto}@media(prefers-color-scheme: dark){.logo-components.svelte-egah5j img.svelte-egah5j{display:block;max-height:15vh;max-width:80vw;content:url("/app-images/launcherx/logoDark.png");margin:auto}}.logo-components.svelte-egah5j .caption-text{display:block;margin-top:10px}.logo-components.svelte-egah5j .download-btn{margin-top:calc(25px / calc(16/14))}',
  map: null
};
const HeroSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sy;
  $$result.css.add(css$2);
  return `


<div class="${"parallax-container svelte-egah5j"}">${validate_component(MicaBackground, "MicaBackground").$$render($$result, {}, {}, {})}

    <div class="${"bg-image-div svelte-egah5j"}"><img style="${"transform: translate(0," + escape(-sy * 0.2, true) + "px)"}" alt="${"LauncherX Window Screenshot"}" class="${"svelte-egah5j"}"></div>

    <div class="${"logo-components svelte-egah5j"}"><img style="${"transform: translate(0," + escape(-sy * 0.1, true) + "px)"}" alt="${"LauncherX Logo"}" class="${"svelte-egah5j"}">
        ${validate_component(TextBlock, "TextBlock").$$render($$result, {
    variant: "subtitle",
    style: "transform: translate(0," + -sy * 0.1 + "px)",
    class: "caption-text"
  }, {}, {
    default: () => {
      return `Organise all your stuff!
        `;
    }
  })}

        ${validate_component(Button, "Button").$$render($$result, {
    class: "download-btn",
    style: "transform: translate(0," + -sy * 0.1 + "px) scale(calc(16/14))",
    onclick: "window.open('https://github.com/Apollo199999999/LauncherX/releases', '_blank');",
    variant: "accent"
  }, {}, {
    default: () => {
      return `Download LauncherX
        `;
    }
  })}</div>
</div>`;
});
var AboutLauncherX_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".padding-div.svelte-1qg3puz.svelte-1qg3puz{padding:2em 5vw 2em 5vw;background-color:var(--fds-solid-background-base)}.attention-infobar{max-width:1060px;margin:auto;padding:0.2em}.links.svelte-1qg3puz.svelte-1qg3puz{color:var(--fds-accent-text-primary);text-align:center;overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;-ms-hyphens:auto;-moz-hyphens:auto;-webkit-hyphens:auto;hyphens:auto}.container.svelte-1qg3puz.svelte-1qg3puz{background-color:var(--fds-solid-background-base);margin-top:1em;overflow:hidden;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;overflow:hidden}.container.svelte-1qg3puz .titleText{margin-left:5px;margin-right:5px}.container.svelte-1qg3puz .bodyText{display:block;text-align:center;margin:auto;margin-top:1.5em;max-width:1100px}.container.svelte-1qg3puz iframe.svelte-1qg3puz{width:90vw;max-width:840px;height:calc(calc(90vw / 16) * 9);max-height:473px;margin-top:1.5em}",
  map: null
};
const AboutLauncherX = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"padding-div svelte-1qg3puz"}">${validate_component(InfoBar, "InfoBar").$$render($$result, {
    severity: "caution",
    class: "attention-infobar",
    title: "Attention"
  }, {}, {
    default: () => {
      return `This page is still under construction. For now, please head to <a class="${"links svelte-1qg3puz"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://clickphase.weebly.com/launcherx.html"}">https://clickphase.weebly.com/launcherx.html
        </a>
        for information about LauncherX.
    `;
    }
  })}

    <div class="${"container svelte-1qg3puz"}">${validate_component(HeaderChip, "HeaderChip").$$render($$result, {}, {}, {
    default: () => {
      return `About`;
    }
  })}

        ${validate_component(TextBlock, "TextBlock").$$render($$result, {
    variant: "titleLarge",
    class: "titleText"
  }, {}, {
    default: () => {
      return `About LauncherX`;
    }
  })}

        ${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "bodyLarge", class: "bodyText" }, {}, {
    default: () => {
      return `LauncherX is a Windows Program used to organize and access all of
            your files, folders, websites, and pretty much anything.`;
    }
  })}

        <iframe src="${"https://www.youtube-nocookie.com/embed/TPSv2jQtsIA"}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen class="${"svelte-1qg3puz"}"></iframe></div>
</div>`;
});
var HowToInstall_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1j28iyo.svelte-1j28iyo{padding:2em 5vw 2em 5vw;background-color:var(--fds-solid-background-secondary);overflow:hidden;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;overflow:hidden}.container.svelte-1j28iyo .titleText{margin-left:5px;margin-right:5px}.container.svelte-1j28iyo .bodyText{display:block;text-align:center;margin:auto;margin-top:1.5em;max-width:1100px}.container.svelte-1j28iyo iframe.svelte-1j28iyo{width:90vw;max-width:840px;height:calc(calc(90vw / 16) * 9);max-height:473px;margin-top:1.5em}",
  map: null
};
const HowToInstall = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-1j28iyo"}">${validate_component(HeaderChip, "HeaderChip").$$render($$result, {}, {}, {
    default: () => {
      return `Installation`;
    }
  })}

    ${validate_component(TextBlock, "TextBlock").$$render($$result, {
    variant: "titleLarge",
    class: "titleText"
  }, {}, {
    default: () => {
      return `How to install`;
    }
  })}

    ${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "bodyLarge", class: "bodyText" }, {}, {
    default: () => {
      return `How to install LauncherX.`;
    }
  })}

    <iframe src="${"https://www.youtube-nocookie.com/embed/8QV_SVkfgtU"}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen class="${"svelte-1j28iyo"}"></iframe>
</div>`;
});
const Launcherx = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>LauncherX - ClickPhase</title>`, ""}<meta name="${"description"}" content="${"LauncherX - Organise all your stuff!"}" data-svelte="svelte-107j836"><meta name="${"keywords"}" content="${"Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js"}" data-svelte="svelte-107j836"><meta name="${"author"}" content="${"ClickPhase"}" data-svelte="svelte-107j836">`, ""}

${validate_component(HeroSection, "HeroSection").$$render($$result, {}, {}, {})}
${validate_component(AboutLauncherX, "AboutLauncherX").$$render($$result, {}, {}, {})}
${validate_component(HowToInstall, "HowToInstall").$$render($$result, {}, {}, {})}`;
});
export { Launcherx as default };
