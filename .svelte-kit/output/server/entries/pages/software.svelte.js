import { c as create_ssr_component, v as validate_component } from "../../chunks/index-223a4ced.js";
import { T as TextBlock } from "../../chunks/NavigationView.svelte_svelte_type_style_lang-8088d3b7.js";
import { M as MicaBackground } from "../../chunks/MicaBackground-bde423f3.js";
var HeroSection_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".container.svelte-kgadmr{position:relative;word-wrap:break-word;align-items:center;justify-content:center;text-align:center}.text-div.svelte-kgadmr{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.text-div.svelte-kgadmr .titleText{line-height:normal;font-size:min(7vmax, 68px)}",
  map: null
};
const HeroSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sy;
  $$result.css.add(css$1);
  return `


<div class="${"container svelte-kgadmr"}">${validate_component(MicaBackground, "MicaBackground").$$render($$result, {}, {}, {})}
    <div class="${"text-div svelte-kgadmr"}">${validate_component(TextBlock, "TextBlock").$$render($$result, {
    class: "titleText",
    style: "transform: translate(0," + -sy * 0.2 + "px)",
    variant: "display"
  }, {}, {
    default: () => {
      return `Software`;
    }
  })}</div>
</div>`;
});
var AllSoftware_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-9pbw57{margin-top:1em;padding:2em 5vw 2em 5vw;overflow:hidden;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;overflow:hidden}.cards-collection.svelte-9pbw57{margin-top:1.5em;margin-bottom:-1.5em;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.card.svelte-9pbw57{display:flex;justify-content:center;align-items:center;margin:0em 0.7em 1.5em 0.7em;width:280px;min-width:200px;flex-grow:1;height:350px;text-align:center;border-radius:var(--fds-control-corner-radius);z-index:999;-webkit-transition:200ms ease-in-out;-o-transition:200ms ease-in-out;transition:200ms ease-in-out;-webkit-box-shadow:0 0 15px rgba(0, 0, 0, 0.3);box-shadow:0 0 15px rgba(0, 0, 0, 0.3);background:linear-gradient(\r\n                var(--fds-card-background-default),\r\n                var(--fds-card-background-default)\r\n            ),\r\n            linear-gradient(\r\n                var(--fds-solid-background-base),\r\n                var(--fds-solid-background-base)\r\n            )}.card.svelte-9pbw57:hover{transform:scale(1.035);-webkit-box-shadow:0 0 20px rgba(0, 0, 0, 0.2);box-shadow:0 0 20px rgba(0, 0, 0, 0.2)}.card-content.svelte-9pbw57{width:100%}.card-image.svelte-9pbw57{width:80%;max-width:260px}.card-text.svelte-9pbw57{font-family:var(--fds-font-family-display);font-weight:600;font-size:28px;margin:0px;margin-top:1.5rem;margin-left:10px;margin-right:10px}.card-subtext.svelte-9pbw57{font-family:var(--fds-font-family-display);font-size:18px;margin:0px;margin-top:1rem;margin-left:20px;margin-right:20px}",
  map: null
};
const AllSoftware = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-9pbw57"}">${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "titleLarge" }, {}, {
    default: () => {
      return `All Software`;
    }
  })}

    <div class="${"cards-collection svelte-9pbw57"}"><div class="${"card svelte-9pbw57"}" onclick="${"window.location.href = '/p5js-paint-app';"}"><div class="${"card-content svelte-9pbw57"}"><img class="${"card-image svelte-9pbw57"}" alt="${"p5.js Paint App"}" src="${"/app-images/p5js-paint-app/p5jsPaintAppImage.png"}">
                <p class="${"card-text svelte-9pbw57"}">p5.js Paint App</p>
                <p class="${"card-subtext svelte-9pbw57"}">A lightweight, online, and minimal paint app made in p5.js</p></div></div>

        <div class="${"card svelte-9pbw57"}" onclick="${"window.location.href = '/dynawin';"}"><div class="${"card-content svelte-9pbw57"}"><img class="${"card-image svelte-9pbw57"}" alt="${"DynaWin"}" src="${"/app-images/dynawin/DynaWinImage.jpg"}">
                <p class="${"card-text svelte-9pbw57"}">DynaWin</p>
                <p class="${"card-subtext svelte-9pbw57"}">Dynamic Desktop for Windows 10 and Windows 11</p></div></div>

        <div class="${"card svelte-9pbw57"}" onclick="${"window.location.href = '/launcherx';"}"><div class="${"card-content svelte-9pbw57"}"><img class="${"card-image svelte-9pbw57"}" alt="${"LauncherX"}" src="${"/app-images/launcherx/LauncherXImage.png"}">
                <p class="${"card-text svelte-9pbw57"}">LauncherX</p>
                <p class="${"card-subtext svelte-9pbw57"}">Organise all your stuff!</p></div></div>

        <div class="${"card svelte-9pbw57"}" onclick="${"window.location.href = '/granny-keyboard';"}"><div class="${"card-content svelte-9pbw57"}"><img class="${"card-image svelte-9pbw57"}" alt="${"Granny Keyboard"}" src="${"/app-images/granny-keyboard/GrannyKeyboardImage.png"}">
                <p class="${"card-text svelte-9pbw57"}">Granny Keyboard</p>
                <p class="${"card-subtext svelte-9pbw57"}">Your keys will start worshipping Granny</p></div></div></div>
</div>`;
});
const Software = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Software - ClickPhase</title>`, ""}<meta name="${"description"}" content="${"Software made by ClickPhase. LauncherX, DynaWin, and others."}" data-svelte="svelte-170st9z"><meta name="${"keywords"}" content="${"Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js"}" data-svelte="svelte-170st9z"><meta name="${"author"}" content="${"ClickPhase"}" data-svelte="svelte-170st9z">`, ""}

${validate_component(HeroSection, "HeroSection").$$render($$result, {}, {}, {})}
${validate_component(AllSoftware, "AllSoftware").$$render($$result, {}, {}, {})}`;
});
export { Software as default };
