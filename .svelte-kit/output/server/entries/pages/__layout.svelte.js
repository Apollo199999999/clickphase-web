import { g as getContext, c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/index-223a4ced.js";
import { T as TextBlock } from "../../chunks/NavigationView.svelte_svelte_type_style_lang-8088d3b7.js";
import "web-vitals";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@font-face{font-family:"FluentUIIcons";src:url("/FluentSystemIcons-Regular.ttf")}.active.svelte-1emlb1d a.svelte-1emlb1d{background-color:var(--fds-accent-default) !important;color:var(--fds-text-on-accent-primary) !important}header.svelte-1emlb1d.svelte-1emlb1d{position:sticky;top:0;z-index:2147483647;display:flex;overflow:auto;background-color:var(--fds-control-solid-fill-default)}@supports (-webkit-backdrop-filter: blur(60px) saturate(200%)) or\n		(backdrop-filter: blur(60px) saturate(200%)){header.svelte-1emlb1d.svelte-1emlb1d{position:sticky;top:0;z-index:2147483647;display:flex;overflow:auto;background-color:var(--fds-control-fill-default);backdrop-filter:blur(60px) saturate(200%);-webkit-backdrop-filter:blur(60px) saturate(200%)}}.corner.svelte-1emlb1d.svelte-1emlb1d{height:4em}.corner.svelte-1emlb1d a.svelte-1emlb1d{display:flex;align-items:center;justify-content:center;width:100%;height:100%;text-decoration:none;color:inherit;margin-right:3em}.corner.svelte-1emlb1d img.svelte-1emlb1d{width:2.5em;height:2.5em;object-fit:contain;margin-right:0.5em}nav.svelte-1emlb1d.svelte-1emlb1d{display:flex;justify-content:center;margin-left:1em}ul.svelte-1emlb1d.svelte-1emlb1d{position:relative;padding:0;margin:auto;display:flex;justify-content:center;align-items:center;list-style:none;background-size:contain}li.svelte-1emlb1d.svelte-1emlb1d{position:relative;height:100%;margin-right:0.5em}li.svelte-1emlb1d a.svelte-1emlb1d{padding:5px 11px 5px 7px;border-radius:var(--fds-control-corner-radius);text-decoration:none;font-family:var(--fds-font-family-display);display:flex;color:var(--fds-text-secondary)}li.svelte-1emlb1d a.svelte-1emlb1d:hover{color:var(--fds-accent-text-primary);background-color:var(--fds-card-background-secondary)}.linkIcon.svelte-1emlb1d.svelte-1emlb1d{font-family:"FluentUIIcons" !important;font-size:20px;margin:auto;margin-right:0.3em}.linkText.svelte-1emlb1d.svelte-1emlb1d{margin:auto;line-height:100%}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `${$$result.head += `<link rel="${"preload"}" href="${"/FluentSystemIcons-Regular.ttf"}" as="${"font"}" crossorigin="${"anonymous"}" data-svelte="svelte-11ucb4r">`, ""}

<header class="${"svelte-1emlb1d"}"><div class="${"corner svelte-1emlb1d"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-1emlb1d"}"><img src="${"/logo-img.png"}" alt="${"ClickPhase"}" class="${"svelte-1emlb1d"}">
			${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "title" }, {}, {
    default: () => {
      return `ClickPhase`;
    }
  })}</a></div>

	<nav class="${"svelte-1emlb1d"}"><ul class="${"svelte-1emlb1d"}"><li class="${["svelte-1emlb1d", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-1emlb1d"}"><p class="${"linkIcon svelte-1emlb1d"}">\uF480</p>
					<p class="${"linkText svelte-1emlb1d"}">Home</p></a></li>
			<li class="${["svelte-1emlb1d", $page.url.pathname === "/software" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/software"}" class="${"svelte-1emlb1d"}"><p class="${"linkIcon svelte-1emlb1d"}">\u02A7</p>
					<p class="${"linkText svelte-1emlb1d"}">Software</p></a></li>
			<li class="${[
    "svelte-1emlb1d",
    $page.url.pathname === "/animationsvideos" ? "active" : ""
  ].join(" ").trim()}"><a sveltekit:prefetch href="${"/animationsvideos"}" class="${"svelte-1emlb1d"}"><p class="${"linkIcon svelte-1emlb1d"}">\u0378</p>
					<p class="${"linkText svelte-1emlb1d"}">Animations/Videos</p></a></li>
			<li class="${["svelte-1emlb1d", $page.url.pathname === "/aboutcontact" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/aboutcontact"}" class="${"svelte-1emlb1d"}"><p class="${"linkIcon svelte-1emlb1d"}">\uF4A3</p>
					<p class="${"linkText svelte-1emlb1d"}">About/Contact</p></a></li></ul></nav>

	<div class="${"corner svelte-1emlb1d"}"></div>
</header>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{background-color:var(--fds-solid-background-base);color:var(--fds-text-primary);margin:0%;padding:0%;width:100%}h1, h2, h3, h4, h5, h6, p, span{font-family:var(--fds-font-family-display) !important}main.svelte-o28w7s{flex:1;display:flex;flex-direction:column;width:100%;margin:0, auto;padding:0%;box-sizing:border-box;overflow-x:hidden}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<meta name="${"viewport"}" content="${"width=device-width, initial-scale=1.0"}">
<main class="${"svelte-o28w7s"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
export { _layout as default };
