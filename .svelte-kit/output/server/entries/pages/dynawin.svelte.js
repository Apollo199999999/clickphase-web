import { c as create_ssr_component, b as compute_rest_props, o as compute_slots, k as get_current_component, p as createEventDispatcher, h as add_attribute, d as spread, e as escape, n as escape_attribute_value, f as escape_object, v as validate_component, q as noop, r as safe_not_equal, a as subscribe } from "../../chunks/index-223a4ced.js";
import { T as TextBlock } from "../../chunks/NavigationView.svelte_svelte_type_style_lang-8088d3b7.js";
import { M as MicaBackground } from "../../chunks/MicaBackground-bde423f3.js";
import { c as createEventForwarder, u as uid, B as Button } from "../../chunks/Button-9355eef8.js";
import { I as InfoBar } from "../../chunks/InfoBar-c3821baf.js";
import { H as HeaderChip } from "../../chunks/HeaderChip-992c049f.js";
const css$8 = {
  code: ".content-dialog.svelte-1szmc6y{-webkit-animation:dialog-inner var(--fds-control-fast-duration) var(--fds-control-fast-out-slow-in-easing);animation:dialog-inner var(--fds-control-fast-duration) var(--fds-control-fast-out-slow-in-easing);background-clip:padding-box;background-color:var(--fds-solid-background-base);border:1px solid var(--fds-surface-stroke-default);border-radius:var(--fds-overlay-corner-radius);box-shadow:var(--fds-dialog-shadow);box-sizing:border-box;max-inline-size:calc(100% - 24px);overflow:hidden;position:fixed}.content-dialog.size-min.svelte-1szmc6y{inline-size:320px}.content-dialog.size-standard.svelte-1szmc6y{inline-size:448px}.content-dialog.size-max.svelte-1szmc6y{inline-size:540px}.content-dialog-smoke.svelte-1szmc6y{align-items:center;block-size:100%;display:flex;flex-direction:column;inline-size:100%;inset-block-start:0;inset-inline-start:0;justify-content:center;position:fixed;z-index:101}.content-dialog-smoke.darken.svelte-1szmc6y{background-color:var(--fds-smoke-background-default)}.content-dialog.svelte-1szmc6y .content-dialog-title{color:var(--fds-text-primary);display:block;margin-bottom:12px}.content-dialog-body.svelte-1szmc6y,.content-dialog-footer.svelte-1szmc6y{padding:24px}.content-dialog-body.svelte-1szmc6y{background-color:var(--fds-layer-background-default);color:var(--fds-text-primary);font-family:var(--fds-font-family-text);font-size:var(--fds-body-font-size);font-weight:400;line-height:20px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.content-dialog-footer.svelte-1szmc6y{grid-gap:8px;-webkit-border-before:1px solid var(--fds-card-stroke-default);border-block-start:1px solid var(--fds-card-stroke-default);display:grid;grid-auto-flow:column;grid-auto-rows:1fr;white-space:nowrap}.content-dialog-footer.svelte-1szmc6y>.button:only-child{inline-size:50%;justify-self:end}",
  map: null
};
const ContentDialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "open",
    "title",
    "size",
    "closable",
    "append",
    "darken",
    "trapFocus",
    "class",
    "element",
    "backdropElement",
    "bodyElement",
    "footerElement"
  ]);
  let $$slots = compute_slots(slots);
  let { open = false } = $$props;
  let { title = "" } = $$props;
  let { size = "standard" } = $$props;
  let { closable = true } = $$props;
  let { append = void 0 } = $$props;
  let { darken = true } = $$props;
  let { trapFocus = true } = $$props;
  let { class: className = "" } = $$props;
  let { element = null } = $$props;
  let { backdropElement = null } = $$props;
  let { bodyElement = null } = $$props;
  let { footerElement = null } = $$props;
  createEventForwarder(get_current_component(), ["open", "close", "backdropclick", "backdropmousedown"]);
  const dispatch = createEventDispatcher();
  const titleId = uid("fds-dialog-title-");
  const bodyId = uid("fds-dialog-body-");
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.closable === void 0 && $$bindings.closable && closable !== void 0)
    $$bindings.closable(closable);
  if ($$props.append === void 0 && $$bindings.append && append !== void 0)
    $$bindings.append(append);
  if ($$props.darken === void 0 && $$bindings.darken && darken !== void 0)
    $$bindings.darken(darken);
  if ($$props.trapFocus === void 0 && $$bindings.trapFocus && trapFocus !== void 0)
    $$bindings.trapFocus(trapFocus);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.backdropElement === void 0 && $$bindings.backdropElement && backdropElement !== void 0)
    $$bindings.backdropElement(backdropElement);
  if ($$props.bodyElement === void 0 && $$bindings.bodyElement && bodyElement !== void 0)
    $$bindings.bodyElement(bodyElement);
  if ($$props.footerElement === void 0 && $$bindings.footerElement && footerElement !== void 0)
    $$bindings.footerElement(footerElement);
  $$result.css.add(css$8);
  {
    if (!open)
      dispatch("close");
  }
  return `

${open ? `<div class="${["content-dialog-smoke svelte-1szmc6y", darken ? "darken" : ""].join(" ").trim()}"${add_attribute("this", backdropElement, 0)}><div${spread([
    {
      class: "content-dialog size-" + escape(size, true) + " " + escape(className, true)
    },
    { role: "dialog" },
    { "aria-modal": "true" },
    {
      "aria-labelledby": escape_attribute_value(title && titleId)
    },
    {
      "aria-describedby": escape_attribute_value(bodyId)
    },
    escape_object($$restProps)
  ], { classes: "svelte-1szmc6y" })}${add_attribute("this", element, 0)}><div class="${"content-dialog-body svelte-1szmc6y"}"${add_attribute("id", bodyId, 0)}${add_attribute("this", bodyElement, 0)}>${title ? `${validate_component(TextBlock, "TextBlock").$$render($$result, {
    variant: "subtitle",
    class: "content-dialog-title",
    id: titleId
  }, {}, {
    default: () => {
      return `${escape(title)}`;
    }
  })}` : ``}
				${slots.default ? slots.default({}) : ``}</div>
			${$$slots.footer ? `<footer class="${"content-dialog-footer svelte-1szmc6y"}"${add_attribute("this", footerElement, 0)}>${slots.footer ? slots.footer({}) : ``}</footer>` : ``}</div>
		${slots.outer ? slots.outer({}) : ``}</div>` : ``}`;
});
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
var HeroSection_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: '.parallax-container.svelte-f0ytc1.svelte-f0ytc1{position:relative;width:100%;height:72vh;overflow-y:hidden;align-items:center;justify-content:center;text-align:center}.bg-image-div.svelte-f0ytc1.svelte-f0ytc1{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.bg-image-div.svelte-f0ytc1 img.svelte-f0ytc1{max-height:calc(72vh - 50px);max-width:80vw;content:url("/screenshots/dynawin/WindowLight.png");-webkit-fliter:blur(2px);filter:blur(2px)}@media(prefers-color-scheme: dark){.bg-image-div.svelte-f0ytc1 img.svelte-f0ytc1{max-height:calc(72vh - 50px);max-width:80vw;content:url("/screenshots/dynawin/WindowDark.png");-webkit-fliter:blur(2px);filter:blur(2px)}}.logo-components.svelte-f0ytc1.svelte-f0ytc1{position:absolute;word-wrap:break-word;top:50%;left:50%;transform:translate(-50%, -50%);width:90vw}.logo-components.svelte-f0ytc1 img.svelte-f0ytc1{display:block;max-height:20vh;max-width:80vw;content:url("/app-images/dynawin/logoLight.png");margin:auto}@media(prefers-color-scheme: dark){.logo-components.svelte-f0ytc1 img.svelte-f0ytc1{display:block;max-height:20vh;max-width:80vw;content:url("/app-images/dynawin/logoDark.png");margin:auto}}.logo-components.svelte-f0ytc1 .caption-text{display:block;margin-top:10px}.logo-components.svelte-f0ytc1 .download-btn{margin-top:calc(25px / calc(16 / 14))}',
  map: null
};
const HeroSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sy;
  $$result.css.add(css$7);
  return `


<div class="${"parallax-container svelte-f0ytc1"}">${validate_component(MicaBackground, "MicaBackground").$$render($$result, {}, {}, {})}

    <div class="${"bg-image-div svelte-f0ytc1"}"><img style="${"transform: translate(0," + escape(-sy * 0.2, true) + "px)"}" alt="${"DynaWin Window Screenshot"}" class="${"svelte-f0ytc1"}"></div>

    <div class="${"logo-components svelte-f0ytc1"}"><img style="${"transform: translate(0," + escape(-sy * 0.1, true) + "px)"}" alt="${"DynaWin Logo"}" class="${"svelte-f0ytc1"}">
        ${validate_component(TextBlock, "TextBlock").$$render($$result, {
    variant: "subtitle",
    style: "transform: translate(0," + -sy * 0.1 + "px)",
    class: "caption-text"
  }, {}, {
    default: () => {
      return `Dynamic Desktop for Windows 10 and Windows 11
        `;
    }
  })}

        ${validate_component(Button, "Button").$$render($$result, {
    class: "download-btn",
    style: "transform: translate(0," + -sy * 0.1 + "px) scale(calc(16/14))",
    onclick: "window.open('https://github.com/Apollo199999999/DynaWin/releases', '_blank');",
    variant: "accent"
  }, {}, {
    default: () => {
      return `Download DynaWin
        `;
    }
  })}</div>
</div>`;
});
var AboutDynaWin_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".padding-div.svelte-1x9kd4c.svelte-1x9kd4c{padding:2em 5vw 2em 5vw;background-color:var(--fds-solid-background-base)}.install-infobar{max-width:1024px;margin:auto;padding:0.2em}.content-dialog{margin-top:20px}.container.svelte-1x9kd4c.svelte-1x9kd4c{margin-top:1em;overflow:hidden;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;overflow:hidden}.container.svelte-1x9kd4c .titleText{margin-left:5px;margin-right:5px}.container.svelte-1x9kd4c .bodyText{display:block;text-align:center;margin:auto;margin-top:1.5em}.container.svelte-1x9kd4c iframe.svelte-1x9kd4c{width:90vw;max-width:840px;height:calc(calc(90vw / 16) * 9);max-height:473px;margin-top:1.5em}",
  map: null
};
const AboutDynaWin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open = false;
  $$result.css.add(css$6);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"padding-div svelte-1x9kd4c"}">${validate_component(InfoBar, "InfoBar").$$render($$result, {
      severity: "caution",
      class: "install-infobar",
      title: "Before you install..."
    }, {}, {
      action: () => {
        return `${validate_component(Button, "Button").$$render($$result, { slot: "action" }, {}, {
          default: () => {
            return `View Notice`;
          }
        })}`;
      },
      default: () => {
        return `Please read this notice about some antiviruses preventing DynaWin from functioning normally.
        `;
      }
    })}
     
     ${validate_component(ContentDialog, "ContentDialog").$$render($$result, {
      class: "content-dialog",
      size: "max",
      title: "NOTICE: Before you install...",
      open
    }, {
      open: ($$value) => {
        open = $$value;
        $$settled = false;
      }
    }, {
      footer: () => {
        return `${validate_component(Button, "Button").$$render($$result, { slot: "footer", variant: "accent" }, {}, {
          default: () => {
            return `OK`;
          }
        })}`;
      },
      default: () => {
        return `<p class="${"content-dialog-first-para"}">To run on startup, DynaWin creates a batch script in the user&#39;s startup folder. However, some antiviruses may flag this as unsafe. If this is the case, please add DynaWin and the batch script, located at 
             <code><strong>%APPDATA%\\<wbr>Microsoft\\<wbr>Windows\\<wbr>Start\xA0Menu\\<wbr>Programs\\<wbr>Startup\\<wbr>StartDynaWin.bat</strong></code> to your antivirus&#39;s exclusions list. </p>
     
         <p>Some antiviruses and/or firewalls may block DynaWin from accessing the internet, causing the auto-update system to not work. In this case, please add DynaWin to your firewall&#39;s or antivrus&#39;s exclusion list.</p>`;
      }
    })}
     
     <div class="${"container svelte-1x9kd4c"}">${validate_component(HeaderChip, "HeaderChip").$$render($$result, {}, {}, {
      default: () => {
        return `About`;
      }
    })}
         ${validate_component(TextBlock, "TextBlock").$$render($$result, {
      variant: "titleLarge",
      class: "titleText"
    }, {}, {
      default: () => {
        return `About DynaWin`;
      }
    })}
         ${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "bodyLarge", class: "bodyText" }, {}, {
      default: () => {
        return `DynaWin is a utility that allows the Windows desktop to change
             dynamically.`;
      }
    })}
         <iframe src="${"https://www.youtube-nocookie.com/embed/J0iyzZG5tXc"}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen class="${"svelte-1x9kd4c"}"></iframe></div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
var Compatibility_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".container.svelte-1wisto3{padding:2em 5vw 2em 5vw;background-color:var(--fds-solid-background-secondary);overflow:hidden;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;overflow:hidden}.container.svelte-1wisto3 .titleText{margin-left:5px;margin-right:5px}.container.svelte-1wisto3 .bodyText{display:block;text-align:center;margin:auto;margin-top:1.5em;max-width:1100px}",
  map: null
};
const Compatibility = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<div class="${"container svelte-1wisto3"}">${validate_component(HeaderChip, "HeaderChip").$$render($$result, {}, {}, {
    default: () => {
      return `System`;
    }
  })}

    ${validate_component(TextBlock, "TextBlock").$$render($$result, {
    class: "titleText",
    variant: "titleLarge"
  }, {}, {
    default: () => {
      return `Compatibility`;
    }
  })}
    ${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "bodyLarge", class: "bodyText" }, {}, {
    default: () => {
      return `DynaWin works with Windows 10 and Windows 11. I have not tested if
        DynaWin works with Windows 8.1 or Windows 7, so if you are on those
        versions of Windows, use at your own risk. DynaWin also requires .NET
        framework version 4.8 to function properly.
    `;
    }
  })}
</div>`;
});
var CompareImage_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: '.svelte-compare-image-container.svelte-qgpj5s{box-sizing:border-box;position:relative;width:100%;height:var(--container-height);overflow:hidden}.svelte-compare-image-container.svelte-qgpj5s:focus-within{outline:auto 4px rgba(59, 153, 252, 0.7);outline:auto 4px -moz-mac-focusring;outline:auto 4px -webkit-focus-ring-color}img.svelte-qgpj5s{display:block;height:100%;object-fit:cover;position:absolute;width:100%}.left-img.svelte-qgpj5s{clip:rect(\n      auto,\n      calc(var(--container-width) * var(--slider-position)),\n      auto,\n      auto\n    )}.right-img.svelte-qgpj5s{clip:rect(\n      auto,\n      auto,\n      auto,\n      calc(var(--container-width) * var(--slider-position))\n    )}.slider.svelte-qgpj5s{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:var(--handle-size);cursor:ew-resize;position:absolute;left:calc(\n      var(--container-width) * var(--slider-position) -\n        var(--handle-size, 2.5rem) / 2\n    );top:0}.slider.svelte-qgpj5s:focus{outline:none}.line.svelte-qgpj5s{background:var(--slider-color, #ffffff);box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2),\n      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);flex:0 1 auto;height:100%;width:var(--slider-width, 0.125rem)}.handle.svelte-qgpj5s{box-sizing:border-box;flex:1 0 auto;display:flex;justify-content:center;align-items:center;border:var(--slider-width, 0.125rem) solid var(--slider-color, #ffffff);border-radius:100%;box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2),\n      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);height:var(--handle-size, 2.5rem);width:var(--handle-size, 2.5rem)}.handle.svelte-qgpj5s::before{content:"";border:inset calc(var(--handle-size, 2.5rem) * 0.15) rgba(0, 0, 0, 0);border-right:calc(var(--handle-size, 2.5rem) * 0.15) solid\n      var(--slider-color, #ffffff);height:0;margin-right:calc(var(--handle-size, 2.5rem) * 0.25);width:0}.handle.svelte-qgpj5s::after{content:"";border:inset calc(var(--handle-size, 2.5rem) * 0.15) rgba(0, 0, 0, 0);border-left:calc(var(--handle-size, 2.5rem) * 0.15) solid\n      var(--slider-color, #ffffff);height:0;width:0}',
  map: null
};
const CompareImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let containerWidthStore;
  let $containerWidthStore, $$unsubscribe_containerWidthStore = noop, $$subscribe_containerWidthStore = () => ($$unsubscribe_containerWidthStore(), $$unsubscribe_containerWidthStore = subscribe(containerWidthStore, ($$value) => $containerWidthStore = $$value), containerWidthStore);
  let { imageLeftSrc = "" } = $$props;
  let { imageLeftAlt = "" } = $$props;
  let { imageRightSrc = "" } = $$props;
  let { imageRightAlt = "" } = $$props;
  function syncWidth(el) {
    return writable(0, (set) => {
      if (!el) {
        return;
      }
      let ro = new ResizeObserver(([entry]) => {
        set(entry.target.getBoundingClientRect().width);
      });
      ro.observe(el);
      return () => ro.disconnect();
    });
  }
  let containerRef = null;
  let imageLeftRef = null;
  let imageRightRef = null;
  let height = 0;
  let sliderRef = null;
  let sliderPosition = 0.5;
  if ($$props.imageLeftSrc === void 0 && $$bindings.imageLeftSrc && imageLeftSrc !== void 0)
    $$bindings.imageLeftSrc(imageLeftSrc);
  if ($$props.imageLeftAlt === void 0 && $$bindings.imageLeftAlt && imageLeftAlt !== void 0)
    $$bindings.imageLeftAlt(imageLeftAlt);
  if ($$props.imageRightSrc === void 0 && $$bindings.imageRightSrc && imageRightSrc !== void 0)
    $$bindings.imageRightSrc(imageRightSrc);
  if ($$props.imageRightAlt === void 0 && $$bindings.imageRightAlt && imageRightAlt !== void 0)
    $$bindings.imageRightAlt(imageRightAlt);
  $$result.css.add(css$4);
  $$subscribe_containerWidthStore(containerWidthStore = syncWidth(containerRef));
  {
    {
      imageLeftRef?.complete ?? false;
    }
  }
  {
    {
      imageRightRef?.complete ?? false;
    }
  }
  $$unsubscribe_containerWidthStore();
  return `<div class="${"svelte-compare-image-container svelte-qgpj5s"}" style="${"--container-height: " + escape(height, true) + "px; --container-width: " + escape($containerWidthStore, true) + "px; --slider-position: " + escape(sliderPosition, true) + ";"}" data-testid="${"svelte-compare-image"}"${add_attribute("this", containerRef, 0)}><img${add_attribute("src", imageLeftSrc, 0)}${add_attribute("alt", imageLeftAlt, 0)} class="${"left-img svelte-qgpj5s"}"${add_attribute("this", imageLeftRef, 0)}>
  <img${add_attribute("src", imageRightSrc, 0)}${add_attribute("alt", imageRightAlt, 0)} class="${"right-img svelte-qgpj5s"}"${add_attribute("this", imageRightRef, 0)}>
  <div class="${"slider svelte-qgpj5s"}" role="${"slider"}"${add_attribute("aria-valuemin", 0, 0)}${add_attribute("aria-valuemax", 1, 0)}${add_attribute("aria-valuenow", sliderPosition, 0)} aria-label="${"Compare image"}" tabindex="${"0"}"${add_attribute("this", sliderRef, 0)}><div class="${"line svelte-qgpj5s"}"></div>
    <div class="${"handle svelte-qgpj5s"}"></div>
    <div class="${"line svelte-qgpj5s"}"></div></div>
</div>`;
});
var DynamicThemeFeature_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".container.svelte-quqcrl{padding:2em 5vw 2em 5vw;background-color:var(--fds-solid-background-base);overflow:hidden;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;overflow:hidden}.container.svelte-quqcrl .titleText{margin-left:5px;margin-right:5px}.container.svelte-quqcrl .bodyText{display:block;text-align:center;margin:auto;margin-top:1.5em}.cards-collection.svelte-quqcrl{margin-top:1.5em;margin-bottom:-1.5em;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.card.svelte-quqcrl{display:flex;justify-content:center;align-items:center;margin:0em 0.7em 1.5em 0.7em;padding:1.5rem 0.2rem;width:280px;min-width:200px;flex-grow:1;min-height:180px;text-align:center;border-radius:var(--fds-control-corner-radius);z-index:999;-webkit-transition:200ms ease-in-out;-o-transition:200ms ease-in-out;transition:200ms ease-in-out;-webkit-box-shadow:0 0 5px rgba(0, 0, 0, 0.3);box-shadow:0 0 5px rgba(0, 0, 0, 0.3);background:linear-gradient(\r\n                var(--fds-card-background-default),\r\n                var(--fds-card-background-default)\r\n            ),\r\n            linear-gradient(\r\n                var(--fds-solid-background-base),\r\n                var(--fds-solid-background-base)\r\n            )}.card-content.svelte-quqcrl{width:100%}.card-text.svelte-quqcrl{font-family:var(--fds-font-family-display);font-weight:600;font-size:28px;margin:0px;margin-left:10px;margin-right:10px}.card-subtext.svelte-quqcrl{font-family:var(--fds-font-family-display);font-size:18px;margin:0px;margin-top:1rem;margin-left:20px;margin-right:20px}.compare-image-div.svelte-quqcrl{padding:1.5em 5vw 0vw 5vw}",
  map: null
};
const DynamicThemeFeature = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="${"container svelte-quqcrl"}">${validate_component(HeaderChip, "HeaderChip").$$render($$result, {}, {}, {
    default: () => {
      return `Feature`;
    }
  })}

    ${validate_component(TextBlock, "TextBlock").$$render($$result, {
    class: "titleText",
    variant: "titleLarge"
  }, {}, {
    default: () => {
      return `Dynamic Theme`;
    }
  })}
    ${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "bodyLarge", class: "bodyText" }, {}, {
    default: () => {
      return `Switch your Windows theme or app theme based on time.
    `;
    }
  })}

    <div class="${"cards-collection svelte-quqcrl"}"><div class="${"card svelte-quqcrl"}"><div class="${"card-content svelte-quqcrl"}"><p class="${"card-text svelte-quqcrl"}">Automatic switching of theme</p>
                <p class="${"card-subtext svelte-quqcrl"}">You can configure DynaWin to automatically switch the theme
                    at specified timings. For example, you can automatically
                    switch Windows to Dark theme, so that it is easier on the
                    eyes at night.
                </p></div></div>

        <div class="${"card svelte-quqcrl"}"><div class="${"card-content svelte-quqcrl"}"><p class="${"card-text svelte-quqcrl"}">Choose which mode to switch</p>
                <p class="${"card-subtext svelte-quqcrl"}">You can configure DynaWin to switch only the app or system
                    theme, or both. This allows DynaWin to better cater to your
                    needs.
                </p></div></div></div>

    <div class="${"compare-image-div svelte-quqcrl"}"><div style="display: contents; --handle-size:${"2.5rem"}; --slider-color:${"#ffffff"}; --slider-width:${"0.125rem"};">${validate_component(CompareImage, "CompareImage").$$render($$result, {
    class: "image-comparer",
    imageLeftSrc: "/screenshots/dynawin/DynamicThemeLight.png",
    imageLeftAlt: "Light Theme",
    imageRightSrc: "/screenshots/dynawin/DynamicThemeDark.png",
    imageRightAlt: "Dark Theme"
  }, {}, {})}</div></div>
</div>`;
});
var DynamicWallpaperFeature_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".container.svelte-4v8q38{padding:2em 5vw 2em 5vw;background-color:var(--fds-solid-background-secondary);overflow:hidden;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;overflow:hidden}.container.svelte-4v8q38 .titleText{margin-left:5px;margin-right:5px}.container.svelte-4v8q38 .bodyText{display:block;text-align:center;margin:auto;margin-top:1.5em}.cards-collection.svelte-4v8q38{margin-top:1.5em;margin-bottom:-1.5em;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.card.svelte-4v8q38{display:flex;justify-content:center;align-items:center;margin:0em 0.7em 1.5em 0.7em;padding:1.5rem 0.2rem;width:280px;min-width:200px;flex-grow:1;min-height:180px;text-align:center;border-radius:var(--fds-control-corner-radius);z-index:999;-webkit-transition:200ms ease-in-out;-o-transition:200ms ease-in-out;transition:200ms ease-in-out;-webkit-box-shadow:0 0 5px rgba(0, 0, 0, 0.3);box-shadow:0 0 5px rgba(0, 0, 0, 0.3);background:linear-gradient(\r\n                var(--fds-card-background-default),\r\n                var(--fds-card-background-default)\r\n            ),\r\n            linear-gradient(\r\n                var(--fds-solid-background-secondary),\r\n                var(--fds-solid-background-secondary)\r\n            )}.card-content.svelte-4v8q38{width:100%}.card-text.svelte-4v8q38{font-family:var(--fds-font-family-display);font-weight:600;font-size:28px;margin:0px;margin-left:10px;margin-right:10px}.card-subtext.svelte-4v8q38{font-family:var(--fds-font-family-display);font-size:18px;margin:0px;margin-top:1rem;margin-left:20px;margin-right:20px}.compare-image-div.svelte-4v8q38{padding:1.5em 5vw 0vw 5vw}",
  map: null
};
const DynamicWallpaperFeature = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"container svelte-4v8q38"}">${validate_component(HeaderChip, "HeaderChip").$$render($$result, {}, {}, {
    default: () => {
      return `Feature`;
    }
  })}

    ${validate_component(TextBlock, "TextBlock").$$render($$result, {
    class: "titleText",
    variant: "titleLarge"
  }, {}, {
    default: () => {
      return `Dynamic Wallpaper`;
    }
  })}
    ${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "bodyLarge", class: "bodyText" }, {}, {
    default: () => {
      return `Switch your desktop wallpaper at certain triggers.
    `;
    }
  })}

    <div class="${"cards-collection svelte-4v8q38"}"><div class="${"card svelte-4v8q38"}"><div class="${"card-content svelte-4v8q38"}"><p class="${"card-text svelte-4v8q38"}">Automatic switching of desktop wallpaper
                </p>
                <p class="${"card-subtext svelte-4v8q38"}">You can configure DynaWin to automatically switch your
                    wallpaper at specific triggers. For example, you can
                    configure DynaWin to switch your wallpaper at night, to make
                    it easier on the eyes at night.
                </p></div></div>

        <div class="${"card svelte-4v8q38"}"><div class="${"card-content svelte-4v8q38"}"><p class="${"card-text svelte-4v8q38"}">Choose when to change your wallpaper</p>
                <p class="${"card-subtext svelte-4v8q38"}">You can choose to change your wallpaper either based on the
                    time, or based on your battery percentage. This can help remind you
                    when your battery is running low, or remind you to unplug
                    your laptop charger when your laptop is fully charged.
                </p></div></div></div>

    <div class="${"compare-image-div svelte-4v8q38"}"><div style="display: contents; --handle-size:${"2.5rem"}; --slider-color:${"#ffffff"}; --slider-width:${"0.125rem"};">${validate_component(CompareImage, "CompareImage").$$render($$result, {
    class: "image-comparer",
    imageLeftSrc: "/screenshots/dynawin/DynamicWallpaperLight.png",
    imageLeftAlt: "Light Theme",
    imageRightSrc: "/screenshots/dynawin/DynamicWallpaperDark.png",
    imageRightAlt: "Dark Theme"
  }, {}, {})}</div></div>
</div>`;
});
var AutomaticUpdates_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".container.svelte-14h04yk{padding:2em 5vw 2em 5vw;background-color:var(--fds-solid-background-base);overflow:hidden;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;overflow:hidden}.container.svelte-14h04yk .titleText{margin-left:5px;margin-right:5px}.container.svelte-14h04yk .bodyText{display:block;text-align:center;margin:auto;margin-top:1.5em;max-width:1100px}",
  map: null
};
const AutomaticUpdates = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"container svelte-14h04yk"}">${validate_component(HeaderChip, "HeaderChip").$$render($$result, {}, {}, {
    default: () => {
      return `Feature`;
    }
  })}

    ${validate_component(TextBlock, "TextBlock").$$render($$result, {
    class: "titleText",
    variant: "titleLarge"
  }, {}, {
    default: () => {
      return `Automatic Updates`;
    }
  })}
    ${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "bodyLarge", class: "bodyText" }, {}, {
    default: () => {
      return `DynaWin also automatically notifies you when there is a new update. This
        is to ensure that you have the latest version of DynaWin at all times so
        that you can have the latest features available.
    `;
    }
  })}
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
      return `DynaWin downloads and other links.
    `;
    }
  })}

    <div class="${"cards-collection svelte-2gk8ks"}"><div class="${"card svelte-2gk8ks"}"><div class="${"card-content svelte-2gk8ks"}"><p class="${"card-text svelte-2gk8ks"}">Download DynaWin</p>
                <p class="${"card-subtext svelte-2gk8ks"}">Click the button below to download DynaWin:
                </p>
                ${validate_component(Button, "Button").$$render($$result, {
    onclick: "window.open('https://github.com/Apollo199999999/DynaWin/releases', '_blank');",
    variant: "accent",
    class: "download-btn"
  }, {}, {
    default: () => {
      return `Download DynaWin
                `;
    }
  })}</div></div>

        <div class="${"card svelte-2gk8ks"}"><div class="${"card-content svelte-2gk8ks"}"><p class="${"card-text svelte-2gk8ks"}">DynaWin links</p>
                ${validate_component(Button, "Button").$$render($$result, {
    class: "hyperlinks",
    onclick: "window.open('https://github.com/Apollo199999999/DynaWin', '_blank');",
    variant: "hyperlink"
  }, {}, {
    default: () => {
      return `DynaWin source code`;
    }
  })}
                ${validate_component(Button, "Button").$$render($$result, {
    class: "hyperlinks",
    onclick: "window.open('https://github.com/Apollo199999999/DynaWin/issues', '_blank');",
    variant: "hyperlink"
  }, {}, {
    default: () => {
      return `Report a bug`;
    }
  })}
                ${validate_component(Button, "Button").$$render($$result, {
    class: "hyperlinks",
    onclick: "window.open('https://github.com/Apollo199999999/DynaWin/issues', '_blank');",
    variant: "hyperlink"
  }, {}, {
    default: () => {
      return `Request a feature`;
    }
  })}
                ${validate_component(Button, "Button").$$render($$result, {
    class: "hyperlinks",
    onclick: "window.open('https://github.com/Apollo199999999/DynaWin/blob/main/NOTICE.txt', '_blank');",
    variant: "hyperlink"
  }, {}, {
    default: () => {
      return `Third Party Notices and Licenses`;
    }
  })}</div></div></div>
</div>`;
});
const Dynawin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>DynaWin - ClickPhase</title>`, ""}<meta name="${"description"}" content="${"DynaWin - Dynamic Desktop for Windows 10 and Windows 11"}" data-svelte="svelte-iig045"><meta name="${"keywords"}" content="${"Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js"}" data-svelte="svelte-iig045"><meta name="${"author"}" content="${"ClickPhase"}" data-svelte="svelte-iig045">`, ""}

${validate_component(HeroSection, "HeroSection").$$render($$result, {}, {}, {})}
${validate_component(AboutDynaWin, "AboutDynaWin").$$render($$result, {}, {}, {})}
${validate_component(Compatibility, "Compatibility").$$render($$result, {}, {}, {})}
${validate_component(DynamicThemeFeature, "DynamicThemeFeature").$$render($$result, {}, {}, {})}
${validate_component(DynamicWallpaperFeature, "DynamicWallpaperFeature").$$render($$result, {}, {}, {})}
${validate_component(AutomaticUpdates, "AutomaticUpdates").$$render($$result, {}, {}, {})}
${validate_component(DownloadLinks, "DownloadLinks").$$render($$result, {}, {}, {})}`;
});
export { Dynawin as default };
