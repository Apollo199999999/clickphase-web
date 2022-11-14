import { c as create_ssr_component, v as validate_component } from "../../chunks/index-223a4ced.js";
import { T as TextBlock } from "../../chunks/NavigationView.svelte_svelte_type_style_lang-8088d3b7.js";
import { M as MicaBackground } from "../../chunks/MicaBackground-bde423f3.js";
var HeroSection_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".container.svelte-19s7slf{position:relative;word-wrap:break-word;align-items:center;justify-content:center;text-align:center}.text-div.svelte-19s7slf{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.text-div.svelte-19s7slf .titleText{line-height:normal;font-size:min(7vmax, 68px)}",
  map: null
};
const HeroSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sy;
  $$result.css.add(css$1);
  return `


<div class="${"container svelte-19s7slf"}">${validate_component(MicaBackground, "MicaBackground").$$render($$result, {}, {}, {})}
    <div class="${"text-div svelte-19s7slf"}">${validate_component(TextBlock, "TextBlock").$$render($$result, {
    class: "titleText",
    style: "transform: translate(0," + -sy * 0.2 + "px)",
    variant: "display"
  }, {}, {
    default: () => {
      return `Animations &amp; Videos`;
    }
  })}</div>
</div>`;
});
var VideoChannels_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1sady8u{margin-top:1em;padding:2em 5vw 2em 5vw;overflow:hidden;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;overflow:hidden}.container.svelte-1sady8u .titleText{margin-left:5px;margin-right:5px}.container.svelte-1sady8u .bodyText{display:block;text-align:center;margin:auto;margin-top:1.5em}.cards-collection.svelte-1sady8u{margin-top:1.5em;margin-bottom:-1.5em;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.card.svelte-1sady8u{display:flex;justify-content:center;align-items:center;margin:0em 0.7em 1.5em 0.7em;width:280px;min-width:200px;flex-grow:1;height:350px;text-align:center;border-radius:var(--fds-control-corner-radius);z-index:999;-webkit-transition:200ms ease-in-out;-o-transition:200ms ease-in-out;transition:200ms ease-in-out;-webkit-box-shadow:0 0 15px rgba(0, 0, 0, 0.3);box-shadow:0 0 15px rgba(0, 0, 0, 0.3);background:linear-gradient(\r\n                var(--fds-card-background-default),\r\n                var(--fds-card-background-default)\r\n            ),\r\n            linear-gradient(\r\n                var(--fds-solid-background-base),\r\n                var(--fds-solid-background-base)\r\n            )}.card.svelte-1sady8u:hover{transform:scale(1.035);-webkit-box-shadow:0 0 20px rgba(0, 0, 0, 0.2);box-shadow:0 0 20px rgba(0, 0, 0, 0.2)}.card-content.svelte-1sady8u{width:100%}.card-image.svelte-1sady8u{width:40%;max-width:260px}.card-text.svelte-1sady8u{font-family:var(--fds-font-family-display);font-weight:600;font-size:28px;margin:0px;margin-top:1rem;margin-left:20px;margin-right:20px}",
  map: null
};
const VideoChannels = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-1sady8u"}">${validate_component(TextBlock, "TextBlock").$$render($$result, {
    variant: "titleLarge",
    class: "titleText"
  }, {}, {
    default: () => {
      return `My animations &amp; videos`;
    }
  })}
    ${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "bodyLarge", class: "bodyText" }, {}, {
    default: () => {
      return `You can find all of my animations and videos on my 3 YouTube channels.`;
    }
  })}

    <div class="${"cards-collection svelte-1sady8u"}"><div class="${"card svelte-1sady8u"}" onclick="${"window.open('https://www.youtube.com/channel/UCUy3erIflkjOWYsfGPVIM6g', '_blank');"}"><div class="${"card-content svelte-1sady8u"}"><img class="${"card-image svelte-1sady8u"}" alt="${"ClickPhase"}" src="${"/youtube-profiles/clickphase.png"}">
                <p class="${"card-text svelte-1sady8u"}">ClickPhase</p></div></div>

        <div class="${"card svelte-1sady8u"}" onclick="${"window.open('https://www.youtube.com/channel/UCyx7JU3eigRv4A9HnxRWAIQ', '_blank');"}"><div class="${"card-content svelte-1sady8u"}"><img class="${"card-image svelte-1sady8u"}" alt="${"Matthias Wang"}" src="${"/youtube-profiles/matthias-wang.jpg"}">
                <p class="${"card-text svelte-1sady8u"}">Matthias Wang</p></div></div>

        <div class="${"card svelte-1sady8u"}" onclick="${"window.open('https://www.youtube.com/channel/UCDVwYsVmGsjiWVdWCb_4vIg', '_blank');"}"><div class="${"card-content svelte-1sady8u"}"><img class="${"card-image svelte-1sady8u"}" alt="${"Granny the Great"}" src="${"/youtube-profiles/granny.png"}">
                <p class="${"card-text svelte-1sady8u"}">Granny the Great</p></div></div></div>
</div>`;
});
const Animationsvideos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Animations &amp; Videos - ClickPhase</title>`, ""}<meta name="${"description"}" content="${"Animations and Videos from ClickPhase and others."}" data-svelte="svelte-1uumrc6"><meta name="${"keywords"}" content="${"Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js"}" data-svelte="svelte-1uumrc6"><meta name="${"author"}" content="${"ClickPhase"}" data-svelte="svelte-1uumrc6">`, ""}

${validate_component(HeroSection, "HeroSection").$$render($$result, {}, {}, {})}
${validate_component(VideoChannels, "VideoChannels").$$render($$result, {}, {}, {})}`;
});
export { Animationsvideos as default };
