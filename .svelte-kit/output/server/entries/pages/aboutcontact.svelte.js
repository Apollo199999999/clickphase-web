import { c as create_ssr_component, v as validate_component, h as add_attribute } from "../../chunks/index-223a4ced.js";
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
      return `About &amp; Contact`;
    }
  })}</div>
</div>`;
});
var InfoSection_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-3j17de.svelte-3j17de{margin-top:1em;padding:2em 5vw 2em 5vw;word-wrap:break-word;align-items:center;justify-content:center;text-align:center}.logo.svelte-3j17de.svelte-3j17de{max-width:450px;margin-top:4em;margin-bottom:4em;margin-left:auto;margin-right:auto}.logo.svelte-3j17de a.svelte-3j17de{display:flex;align-items:center;justify-content:center;width:100%;height:100%;text-decoration:none;color:inherit;margin-right:3em}.logo.svelte-3j17de img.svelte-3j17de{width:6em;height:6em;object-fit:contain;margin-right:1.2em}.container.svelte-3j17de .bodyText{display:block;text-align:center;max-width:1100px;margin:auto;margin-bottom:2em}.divider.svelte-3j17de.svelte-3j17de{border-top:1px solid var(--fds-divider-stroke-default);margin:auto;max-width:1200px}.container.svelte-3j17de .contactHeader{display:block;margin-top:1em;margin-bottom:1em;text-align:center}.container.svelte-3j17de .linkTextBlock{text-align:center}.links.svelte-3j17de.svelte-3j17de{color:var(--fds-accent-text-primary);text-align:center;overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;-ms-hyphens:auto;-moz-hyphens:auto;-webkit-hyphens:auto;hyphens:auto}.container.svelte-3j17de ul.svelte-3j17de{padding:0;-webkit-padding-start:0;list-style-type:none}.container.svelte-3j17de ul li.svelte-3j17de{margin-bottom:0.2em}.container.svelte-3j17de .contactText{display:block;text-align:center;max-width:1100px;margin:auto;margin-top:2.8em;margin-bottom:2em}",
  map: null
};
const InfoSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-3j17de"}">${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "titleLarge" }, {}, {
    default: () => {
      return `About ClickPhase`;
    }
  })}

	<div class="${"logo svelte-3j17de"}"><a${add_attribute("href", void 0, 0)} class="${"svelte-3j17de"}"><img src="${"/logo-img.png"}" alt="${"ClickPhase"}" class="${"svelte-3j17de"}">
			${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "display" }, {}, {
    default: () => {
      return `ClickPhase`;
    }
  })}</a></div>

	${validate_component(TextBlock, "TextBlock").$$render($$result, { class: "bodyText", variant: "bodyLarge" }, {}, {
    default: () => {
      return `Hi! I am Matthias from ClickPhase, the only person here. I make
		software and animations during my free time and I hope you like using my
		software and watching my animations as much as I enjoy making them :)`;
    }
  })}

	<div class="${"divider svelte-3j17de"}"></div>

	${validate_component(TextBlock, "TextBlock").$$render($$result, {
    class: "contactHeader",
    variant: "titleLarge"
  }, {}, {
    default: () => {
      return `Contact ClickPhase`;
    }
  })}

	<ul class="${"svelte-3j17de"}"><li class="${"svelte-3j17de"}">${validate_component(TextBlock, "TextBlock").$$render($$result, {
    class: "linkTextBlock",
    variant: "bodyLarge"
  }, {}, {
    default: () => {
      return `Email:
				<a class="${"links svelte-3j17de"}" href="${"mailto:clickphasehelp@gmail.com"}">clickphasehelp@gmail.com
				</a>`;
    }
  })}</li>
		<li class="${"svelte-3j17de"}">${validate_component(TextBlock, "TextBlock").$$render($$result, {
    class: "linkTextBlock",
    variant: "bodyLarge"
  }, {}, {
    default: () => {
      return `GitHub Account:
				<a class="${"links svelte-3j17de"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://github.com/Apollo199999999"}">https://github.com/Apollo199999999
				</a>`;
    }
  })}</li>
		<li class="${"svelte-3j17de"}">${validate_component(TextBlock, "TextBlock").$$render($$result, {
    class: "linkTextBlock",
    variant: "bodyLarge"
  }, {}, {
    default: () => {
      return `YouTube Channel:
				<a class="${"links svelte-3j17de"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://www.youtube.com/channel/UCUy3erIflkjOWYsfGPVIM6g"}">https://www.youtube.com/channel/UCUy3erIflkjOWYsfGPVIM6g
				</a>`;
    }
  })}</li>
		<li class="${"svelte-3j17de"}">${validate_component(TextBlock, "TextBlock").$$render($$result, {
    class: "linkTextBlock",
    variant: "bodyLarge"
  }, {}, {
    default: () => {
      return `Personal YouTube Channel:
				<a class="${"links svelte-3j17de"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://www.youtube.com/channel/UCyx7JU3eigRv4A9HnxRWAIQ"}">https://www.youtube.com/channel/UCyx7JU3eigRv4A9HnxRWAIQ
				</a>`;
    }
  })}</li></ul>

	${validate_component(TextBlock, "TextBlock").$$render($$result, {
    class: "contactText",
    variant: "bodyLarge"
  }, {}, {
    default: () => {
      return `If you need support or want to leave feedback, 
		you may tell us on the designated GitHub repository for each software. 
		Alternatively, you may email us. We will respond within 5 business days.`;
    }
  })}
</div>`;
});
const Aboutcontact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>About &amp; Contact - ClickPhase</title>`, ""}<meta name="${"description"}" content="${"About ClickPhase and how to contact ClickPhase."}" data-svelte="svelte-mxenvi"><meta name="${"keywords"}" content="${"Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js"}" data-svelte="svelte-mxenvi"><meta name="${"author"}" content="${"ClickPhase"}" data-svelte="svelte-mxenvi">`, ""}

${validate_component(HeroSection, "HeroSection").$$render($$result, {}, {}, {})}
${validate_component(InfoSection, "InfoSection").$$render($$result, {}, {}, {})}`;
});
export { Aboutcontact as default };
