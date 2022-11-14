import { c as create_ssr_component, v as validate_component, e as escape, h as add_attribute } from "../../chunks/index-223a4ced.js";
import { T as TextBlock } from "../../chunks/NavigationView.svelte_svelte_type_style_lang-8088d3b7.js";
import { M as MicaBackground } from "../../chunks/MicaBackground-bde423f3.js";
var HeroSection_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".container.svelte-10rlesd.svelte-10rlesd{position:relative;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;padding:0%}.logo.svelte-10rlesd.svelte-10rlesd{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.logo.svelte-10rlesd a.svelte-10rlesd{display:flex;align-items:center;justify-content:center;width:100%;height:100%;text-decoration:none;color:inherit;padding:0%}.logo.svelte-10rlesd img.svelte-10rlesd{width:6em;height:6em;object-fit:contain;margin-right:1.2em;padding:0%}",
  map: null
};
const HeroSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sy;
  $$result.css.add(css$2);
  return `


<div class="${"container svelte-10rlesd"}">${validate_component(MicaBackground, "MicaBackground").$$render($$result, {}, {}, {})}
    <div class="${"logo svelte-10rlesd"}"><div style="${"transform: translate(0," + escape(-sy * 0.17, true) + "px)"}"><a${add_attribute("href", void 0, 0)} class="${"svelte-10rlesd"}"><img src="${"/logo-img.png"}" alt="${"ClickPhase"}" class="${"svelte-10rlesd"}">
                ${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "display" }, {}, {
    default: () => {
      return `ClickPhase`;
    }
  })}</a></div></div>
</div>`;
});
var CardsSection_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@font-face{font-family:"FluentUIIcons";src:url("/FluentSystemIcons-Regular.ttf")}.container.svelte-1qqtj1q{margin-top:-11.5em;padding:2em 5vw 2em 5vw;overflow:hidden}.cards-collection.svelte-1qqtj1q{margin-bottom:-1.5em;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.card.svelte-1qqtj1q{display:flex;justify-content:center;align-items:center;margin:0em 0.7rem 1.5em 0.7rem;width:280px;min-width:200px;flex-grow:1;height:350px;text-align:center;border-radius:var(--fds-control-corner-radius);z-index:999;-webkit-transition:200ms ease-in-out;-o-transition:200ms ease-in-out;transition:200ms ease-in-out;-webkit-box-shadow:0 0 15px rgba(0, 0, 0, 0.3);box-shadow:0 0 15px rgba(0, 0, 0, 0.3);background:linear-gradient(\r\n                var(--fds-card-background-default),\r\n                var(--fds-card-background-default)\r\n            ),\r\n            linear-gradient(\r\n                var(--fds-solid-background-base),\r\n                var(--fds-solid-background-base)\r\n            )}.card.svelte-1qqtj1q:hover{transform:scale(1.035);-webkit-box-shadow:0 0 20px rgba(0, 0, 0, 0.2);box-shadow:0 0 20px rgba(0, 0, 0, 0.2)}.card-content.svelte-1qqtj1q{width:100%}.card-default-icon.svelte-1qqtj1q{font-family:"FluentUIIcons" !important;font-size:100px;color:var(--fds-accent-default);margin:0px}.card-github-icon.svelte-1qqtj1q{fill:var(--fds-text-primary);margin:0px}.card-text.svelte-1qqtj1q{font-family:var(--fds-font-family-display);font-weight:600;font-size:28px;margin:0px;margin-top:1.5rem;margin-left:10px;margin-right:10px}',
  map: null
};
const CardsSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${$$result.head += `<link rel="${"preload"}" href="${"/FluentSystemIcons-Regular.ttf"}" as="${"font"}" crossorigin="${"anonymous"}" data-svelte="svelte-1cl6w1x">`, ""}

<div class="${"container svelte-1qqtj1q"}"><div class="${"cards-collection svelte-1qqtj1q"}"><div class="${"card svelte-1qqtj1q"}" onclick="${"window.location.href = '/software';"}"><div class="${"card-content svelte-1qqtj1q"}"><p class="${"card-default-icon svelte-1qqtj1q"}">\u02A7</p>
                <p class="${"card-text svelte-1qqtj1q"}">All Software</p></div></div>

        <div class="${"card svelte-1qqtj1q"}" onclick="${"window.open('https://www.youtube.com/channel/UCUy3erIflkjOWYsfGPVIM6g', '_blank');"}"><div class="${"card-content svelte-1qqtj1q"}"><p class="${"card-default-icon svelte-1qqtj1q"}">\u0379</p>
                <p class="${"card-text svelte-1qqtj1q"}">YouTube</p></div></div>

        <div class="${"card svelte-1qqtj1q"}" onclick="${"window.location.href = 'mailto:clickphasehelp@gmail.com';"}"><div class="${"card-content svelte-1qqtj1q"}"><p class="${"card-default-icon svelte-1qqtj1q"}">\uF509</p>
                <p class="${"card-text svelte-1qqtj1q"}">Email</p></div></div>

        <div class="${"card svelte-1qqtj1q"}" onclick="${"window.open('https://github.com/Apollo199999999', '_blank');"}"><div class="${"card-content svelte-1qqtj1q"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 16 16"}" width="${"100"}" height="${"100"}" class="${"card-github-icon svelte-1qqtj1q"}"><path fill-rule="${"evenodd"}" d="${"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"}"></path></svg>
                <p class="${"card-text svelte-1qqtj1q"}">GitHub</p></div></div></div>
</div>`;
});
var FeaturedApps_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-8l66gp{padding:2em 5vw 2em 5vw;overflow:hidden;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;overflow:hidden}.cards-collection.svelte-8l66gp{margin-top:1.5em;margin-bottom:-1.5em;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.card.svelte-8l66gp{display:flex;justify-content:center;align-items:center;margin:0em 0.7em 1.5em 0.7em;width:280px;min-width:200px;flex-grow:1;height:350px;text-align:center;border-radius:var(--fds-control-corner-radius);z-index:999;-webkit-transition:200ms ease-in-out;-o-transition:200ms ease-in-out;transition:200ms ease-in-out;-webkit-box-shadow:0 0 15px rgba(0, 0, 0, 0.3);box-shadow:0 0 15px rgba(0, 0, 0, 0.3);background:linear-gradient(\r\n                var(--fds-card-background-default),\r\n                var(--fds-card-background-default)\r\n            ),\r\n            linear-gradient(\r\n                var(--fds-solid-background-base),\r\n                var(--fds-solid-background-base)\r\n            )}.card.svelte-8l66gp:hover{transform:scale(1.035);-webkit-box-shadow:0 0 20px rgba(0, 0, 0, 0.2);box-shadow:0 0 20px rgba(0, 0, 0, 0.2)}.card-content.svelte-8l66gp{width:100%}.card-image.svelte-8l66gp{width:80%;max-width:260px}.card-text.svelte-8l66gp{font-family:var(--fds-font-family-display);font-weight:600;font-size:28px;margin:0px;margin-top:1.5rem;margin-left:10px;margin-right:10px}.card-subtext.svelte-8l66gp{font-family:var(--fds-font-family-display);font-size:18px;margin:0px;margin-top:1rem;margin-left:20px;margin-right:20px}",
  map: null
};
const FeaturedApps = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-8l66gp"}">${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "titleLarge" }, {}, {
    default: () => {
      return `Featured Software`;
    }
  })}

    <div class="${"cards-collection svelte-8l66gp"}"><div class="${"card svelte-8l66gp"}" onclick="${"window.location.href = '/dynawin';"}"><div class="${"card-content svelte-8l66gp"}"><img class="${"card-image svelte-8l66gp"}" alt="${"DynaWin"}" src="${"/app-images/dynawin/DynaWinImage.jpg"}">
                <p class="${"card-text svelte-8l66gp"}">DynaWin</p>
                <p class="${"card-subtext svelte-8l66gp"}">Dynamic Desktop for Windows 10 and Windows 11
                </p></div></div>

        <div class="${"card svelte-8l66gp"}" onclick="${"window.location.href = '/launcherx';"}"><div class="${"card-content svelte-8l66gp"}"><img class="${"card-image svelte-8l66gp"}" alt="${"LauncherX"}" src="${"/app-images/launcherx/LauncherXImage.png"}">
                <p class="${"card-text svelte-8l66gp"}">LauncherX</p>
                <p class="${"card-subtext svelte-8l66gp"}">Organise all your stuff!</p></div></div></div>
</div>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Home - ClickPhase</title>`, ""}<meta name="${"description"}" content="${"The official site of ClickPhase. ClickPhase specialises in desktop software and utlities."}" data-svelte="svelte-ra94wo"><meta name="${"keywords"}" content="${"Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js"}" data-svelte="svelte-ra94wo"><meta name="${"author"}" content="${"ClickPhase"}" data-svelte="svelte-ra94wo">`, ""}

${validate_component(HeroSection, "HeroSection").$$render($$result, {}, {}, {})}
${validate_component(CardsSection, "CardsSection").$$render($$result, {}, {}, {})}
${validate_component(FeaturedApps, "FeaturedApps").$$render($$result, {}, {}, {})}`;
});
export { Routes as default };
