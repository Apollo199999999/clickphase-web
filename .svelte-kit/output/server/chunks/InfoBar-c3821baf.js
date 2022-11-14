import { c as create_ssr_component, b as compute_rest_props, k as get_current_component, d as spread, e as escape, f as escape_object, h as add_attribute, o as compute_slots, p as createEventDispatcher, v as validate_component } from "./index-223a4ced.js";
import { c as createEventForwarder } from "./Button-9355eef8.js";
import "./NavigationView.svelte_svelte_type_style_lang-8088d3b7.js";
const css$1 = {
  code: ".info-badge.svelte-106nxdf{align-items:center;border-radius:16px;box-sizing:border-box;color:var(--fds-text-on-accent-primary);display:inline-flex;font-family:var(--fds-font-family-small);font-size:var(--fds-caption-font-size);justify-content:center;line-height:var(--fds-caption-font-size);min-block-size:16px;min-inline-size:16px;padding:2px 4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.info-badge.severity-attention.svelte-106nxdf{background-color:var(--fds-system-attention)}.info-badge.severity-success.svelte-106nxdf{background-color:var(--fds-system-success)}.info-badge.severity-caution.svelte-106nxdf{background-color:var(--fds-system-caution)}.info-badge.severity-critical.svelte-106nxdf{background-color:var(--fds-system-critical)}.info-badge.severity-information.svelte-106nxdf{background-color:var(--fds-system-solid-neutral)}.info-badge.svelte-106nxdf svg{fill:currentColor;block-size:8px;inline-size:8px}",
  map: null
};
const InfoBadge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["severity", "class", "element"]);
  let { severity = "attention" } = $$props;
  let { class: className = "" } = $$props;
  let { element = null } = $$props;
  createEventForwarder(get_current_component());
  const svgProps = {
    "aria-hidden": true,
    xmlns: "http://www.w3.org/2000/svg"
  };
  if ($$props.severity === void 0 && $$bindings.severity && severity !== void 0)
    $$bindings.severity(severity);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  $$result.css.add(css$1);
  return `
<span${spread([
    {
      class: "info-badge severity-" + escape(severity, true) + " " + escape(className, true)
    },
    escape_object($$restProps)
  ], { classes: "svelte-106nxdf" })}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : `
		${severity === "attention" ? `<svg${spread([escape_object(svgProps), { viewBox: "162 118 701 789" }], { classes: "svelte-106nxdf" })}><path fill="${"currentColor"}" d="${"M862.5,680C862.5,687.333 861.083,694.25 858.25,700.75C855.417,707.25 851.583,712.917 846.75,717.75C841.917,722.583 836.25,726.417 829.75,729.25C823.25,732.083 816.333,733.5 809,733.5C800,733.5 791.333,731.167 783,726.5L565.5,603.5L565.5,853.5C565.5,860.833 564.083,867.75 561.25,874.25C558.417,880.75 554.583,886.333 549.75,891C544.917,895.667 539.25,899.417 532.75,902.25C526.25,905.083 519.333,906.5 512,906.5C504.667,906.5 497.75,905.083 491.25,902.25C484.75,899.417 479.083,895.667 474.25,891C469.417,886.333 465.583,880.75 462.75,874.25C459.917,867.75 458.5,860.833 458.5,853.5L458.5,603.5L241,726.5C232.667,731.167 224,733.5 215,733.5C207.667,733.5 200.75,732.083 194.25,729.25C187.75,726.417 182.083,722.583 177.25,717.75C172.417,712.917 168.583,707.25 165.75,700.75C162.917,694.25 161.5,687.333 161.5,680C161.5,670.667 164,661.75 169,653.25C174,644.75 180.5,638.167 188.5,633.5L403.5,512L188.5,390.5C180.5,385.833 174,379.25 169,370.75C164,362.25 161.5,353.333 161.5,344C161.5,336.667 162.917,329.75 165.75,323.25C168.583,316.75 172.417,311.083 177.25,306.25C182.083,301.417 187.75,297.583 194.25,294.75C200.75,291.917 207.667,290.5 215,290.5C224.667,290.5 233.333,292.833 241,297.5L458.5,420.5L458.5,170.5C458.5,163.167 459.917,156.25 462.75,149.75C465.583,143.25 469.417,137.667 474.25,133C479.083,128.333 484.75,124.583 491.25,121.75C497.75,118.917 504.667,117.5 512,117.5C519.333,117.5 526.25,118.917 532.75,121.75C539.25,124.583 544.917,128.333 549.75,133C554.583,137.667 558.417,143.25 561.25,149.75C564.083,156.25 565.5,163.167 565.5,170.5L565.5,420.5L783,297.5C791.333,292.833 800,290.5 809,290.5C816.333,290.5 823.25,291.917 829.75,294.75C836.25,297.583 841.917,301.417 846.75,306.25C851.583,311.083 855.417,316.75 858.25,323.25C861.083,329.75 862.5,336.667 862.5,344C862.5,353.333 860,362.25 855,370.75C850,379.25 843.5,385.833 835.5,390.5L620.5,512L835.5,633.5C843.5,638.167 850,644.75 855,653.25C860,661.75 862.5,670.667 862.5,680Z"}"></path></svg>` : `${severity === "success" ? `<svg${spread([escape_object(svgProps), { viewBox: "118 245 790 577" }], { classes: "svelte-106nxdf" })}><path fill="${"currentColor"}" d="${"M117.5,554.5C117.5,547.167 118.917,540.25 121.75,533.75C124.583,527.25 128.417,521.583 133.25,516.75C138.083,511.917 143.75,508.083 150.25,505.25C156.75,502.417 163.667,501 171,501C185.333,501 197.833,506.333 208.5,517L384,692.5L815.5,261C826.167,250.333 838.833,245 853.5,245C860.833,245 867.75,246.417 874.25,249.25C880.75,252.083 886.417,256 891.25,261C896.083,266 899.917,271.75 902.75,278.25C905.583,284.75 907,291.5 907,298.5C907,313.167 901.667,325.833 891,336.5L421.5,805.5C416.5,810.5 410.75,814.417 404.25,817.25C397.75,820.083 391,821.5 384,821.5C369.667,821.5 357.167,816.167 346.5,805.5L133,592.5C122.667,582.167 117.5,569.5 117.5,554.5Z"}"></path></svg>` : `${severity === "caution" ? `<svg${spread([escape_object(svgProps), { viewBox: "406 86 213 875" }], { classes: "svelte-106nxdf" })}><path fill="${"currentColor"}" d="${"M426.5,512L426.5,170.5C426.5,158.833 428.75,147.833 433.25,137.5C437.75,127.167 443.917,118.167 451.75,110.5C459.583,102.833 468.667,96.75 479,92.25C489.333,87.75 500.333,85.5 512,85.5C523.667,85.5 534.667,87.75 545,92.25C555.333,96.75 564.417,102.833 572.25,110.5C580.083,118.167 586.25,127.167 590.75,137.5C595.25,147.833 597.5,158.833 597.5,170.5L597.5,512C597.5,523.667 595.25,534.667 590.75,545C586.25,555.333 580.083,564.417 572.25,572.25C564.417,580.083 555.333,586.25 545,590.75C534.667,595.25 523.667,597.5 512,597.5C500.333,597.5 489.333,595.25 479,590.75C468.667,586.25 459.583,580.083 451.75,572.25C443.917,564.417 437.75,555.333 433.25,545C428.75,534.667 426.5,523.667 426.5,512ZM405.5,853.5C405.5,838.833 408.333,825 414,812C419.667,799 427.333,787.667 437,778C446.667,768.333 457.917,760.667 470.75,755C483.583,749.333 497.333,746.5 512,746.5C526.667,746.5 540.417,749.333 553.25,755C566.083,760.667 577.333,768.333 587,778C596.667,787.667 604.333,799 610,812C615.667,825 618.5,838.833 618.5,853.5C618.5,868.167 615.667,881.917 610,894.75C604.333,907.583 596.667,918.833 587,928.5C577.333,938.167 566,945.833 553,951.5C540,957.167 526.333,960 512,960C497.333,960 483.583,957.167 470.75,951.5C457.917,945.833 446.667,938.167 437,928.5C427.333,918.833 419.667,907.583 414,894.75C408.333,881.917 405.5,868.167 405.5,853.5Z"}"></path></svg>` : `${severity === "critical" ? `<svg${spread([escape_object(svgProps), { viewBox: "172 171 683 683" }], { classes: "svelte-106nxdf" })}><path fill="${"currentColor"}" d="${"M512.5,587.5L262.5,838C252.167,848.333 239.5,853.5 224.5,853.5C209.5,853.5 196.917,848.417 186.75,838.25C176.583,828.083 171.5,815.5 171.5,800.5C171.5,785.5 176.667,772.833 187,762.5L437,512L187,262C176.667,251.667 171.5,239.167 171.5,224.5C171.5,217.167 172.833,210.167 175.5,203.5C178.167,196.833 181.917,191.167 186.75,186.5C191.583,181.833 197.167,178.083 203.5,175.25C209.833,172.417 216.833,171 224.5,171C239.167,171 251.667,176.167 262,186.5L512.5,437L762.5,186.5C773.167,175.833 785.833,170.5 800.5,170.5C807.833,170.5 814.75,171.917 821.25,174.75C827.75,177.583 833.417,181.417 838.25,186.25C843.083,191.083 846.833,196.75 849.5,203.25C852.167,209.75 853.5,216.667 853.5,224C853.5,238.667 848.333,251.167 838,261.5L587.5,512L838,762.5C848.667,773.167 854,785.833 854,800.5C854,807.833 852.583,814.667 849.75,821C846.917,827.333 843.083,832.917 838.25,837.75C833.417,842.583 827.75,846.417 821.25,849.25C814.75,852.083 807.833,853.5 800.5,853.5C785.5,853.5 772.833,848.333 762.5,838Z"}"></path></svg>` : `${severity === "information" ? `<svg${spread([escape_object(svgProps), { viewBox: "406 64 213 875" }], { classes: "svelte-106nxdf" })}><path fill="${"currentColor"}" d="${"M405.5,170.5C405.5,156.167 408.333,142.5 414,129.5C419.667,116.5 427.333,105.167 437,95.5C446.667,85.8334 457.917,78.1667 470.75,72.5C483.583,66.8334 497.333,64.0001 512,64C526.333,64.0001 540,66.8334 553,72.5C566,78.1667 577.333,85.8334 587,95.5C596.667,105.167 604.333,116.5 610,129.5C615.667,142.5 618.5,156.167 618.5,170.5C618.5,185.167 615.667,199 610,212C604.333,225 596.667,236.333 587,246C577.333,255.667 566.083,263.333 553.25,269C540.417,274.667 526.667,277.5 512,277.5C497.333,277.5 483.583,274.667 470.75,269C457.917,263.333 446.667,255.667 437,246C427.333,236.333 419.667,225 414,212C408.333,199 405.5,185.167 405.5,170.5ZM426.5,853.5L426.5,512C426.5,500.333 428.75,489.333 433.25,479C437.75,468.667 443.917,459.583 451.75,451.75C459.583,443.917 468.667,437.75 479,433.25C489.333,428.75 500.333,426.5 512,426.5C523.667,426.5 534.667,428.75 545,433.25C555.333,437.75 564.417,443.917 572.25,451.75C580.083,459.583 586.25,468.667 590.75,479C595.25,489.333 597.5,500.333 597.5,512L597.5,853.5C597.5,865.167 595.25,876.167 590.75,886.5C586.25,896.833 580.083,905.833 572.25,913.5C564.417,921.167 555.333,927.25 545,931.75C534.667,936.25 523.667,938.5 512,938.5C500.333,938.5 489.333,936.25 479,931.75C468.667,927.25 459.583,921.167 451.75,913.5C443.917,905.833 437.75,896.833 433.25,886.5C428.75,876.167 426.5,865.167 426.5,853.5Z"}"></path></svg>` : ``}`}`}`}`}
	`}
</span>`;
});
const css = {
  code: ".info-bar.svelte-fp4fp6.svelte-fp4fp6{-webkit-padding-start:15px;align-items:center;background-clip:padding-box;border:1px solid var(--fds-card-stroke-default);border-radius:var(--fds-control-corner-radius);box-sizing:border-box;display:flex;font-family:var(--fds-font-family-text);min-block-size:48px;padding-inline-start:15px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.info-bar.severity-information.svelte-fp4fp6.svelte-fp4fp6{background-color:var(--fds-card-background-secondary)}.info-bar.severity-success.svelte-fp4fp6.svelte-fp4fp6{background-color:var(--fds-system-background-success)}.info-bar.severity-caution.svelte-fp4fp6.svelte-fp4fp6{background-color:var(--fds-system-background-caution)}.info-bar.severity-critical.svelte-fp4fp6.svelte-fp4fp6{background-color:var(--fds-system-background-critical)}.info-bar.severity-attention.svelte-fp4fp6.svelte-fp4fp6{background-color:var(--fds-system-background-attention)}.info-bar-icon.svelte-fp4fp6.svelte-fp4fp6{-webkit-margin-before:16px;align-self:flex-start;display:flex;flex:0 0 auto;margin-block-start:16px}.info-bar-content.svelte-fp4fp6.svelte-fp4fp6{-webkit-margin-start:13px;-webkit-margin-before:7px;-webkit-margin-after:7px;align-items:center;box-sizing:border-box;display:flex;flex:1 1 auto;flex-wrap:wrap;margin-block-end:7px;margin-block-start:7px;margin-inline-start:13px;position:relative}.info-bar-content.action-wrapped.svelte-fp4fp6.svelte-fp4fp6,.info-bar-content.message-wrapped.svelte-fp4fp6.svelte-fp4fp6{-webkit-margin-before:13px;-webkit-margin-after:15px;margin-block-end:15px;margin-block-start:13px}.info-bar-content.message-wrapped.svelte-fp4fp6 h5.svelte-fp4fp6,.info-bar-content.message-wrapped.svelte-fp4fp6 p.svelte-fp4fp6{align-self:flex-start}.info-bar-content.message-wrapped.svelte-fp4fp6 .info-bar-action.svelte-fp4fp6{-webkit-margin-end:50%;margin-inline-end:50%}.info-bar-content.action-wrapped.svelte-fp4fp6 .info-bar-action.svelte-fp4fp6{-webkit-padding-before:16px;padding-block-start:16px}.info-bar.svelte-fp4fp6 h5.svelte-fp4fp6,.info-bar.svelte-fp4fp6 p.svelte-fp4fp6{color:var(--fds-text-primary);font-size:var(--fds-body-font-size);font-weight:400;line-height:20px;margin:0}.info-bar.svelte-fp4fp6 h5.svelte-fp4fp6{-webkit-margin-end:12px;font-weight:600;margin-inline-end:12px}.info-bar.svelte-fp4fp6 p.svelte-fp4fp6{-webkit-margin-end:15px;flex:1 1 auto;margin-inline-end:15px}.info-bar-action.svelte-fp4fp6.svelte-fp4fp6{-webkit-margin-end:4px;margin-inline-end:4px}.info-bar-action.svelte-fp4fp6.svelte-fp4fp6,.info-bar-close-button.svelte-fp4fp6.svelte-fp4fp6{align-items:center;align-self:flex-start;display:flex}.info-bar-close-button.svelte-fp4fp6.svelte-fp4fp6{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--fds-subtle-fill-transparent);block-size:38px;border:none;border-radius:var(--fds-control-corner-radius);color:var(--fds-text-primary);flex:0 0 auto;inline-size:38px;justify-content:center;margin:4px;outline:none;transition:var(--fds-control-fast-duration) var(--fds-control-fast-out-slow-in-easing)}.info-bar-close-button.svelte-fp4fp6.svelte-fp4fp6:focus-visible{box-shadow:var(--fds-focus-stroke)}.info-bar-close-button.svelte-fp4fp6.svelte-fp4fp6:hover{background-color:var(--fds-subtle-fill-secondary)}.info-bar-close-button.svelte-fp4fp6.svelte-fp4fp6:active{background-color:var(--fds-subtle-fill-tertiary);color:var(--fds-text-secondary)}.info-bar-close-button.svelte-fp4fp6 svg.svelte-fp4fp6{fill:currentColor;block-size:12px;inline-size:12px}",
  map: null
};
const InfoBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let actionWrapped;
  let messageWrapped;
  let $$restProps = compute_rest_props($$props, [
    "open",
    "closable",
    "severity",
    "title",
    "message",
    "class",
    "element",
    "titleElement",
    "messageElement",
    "actionElement",
    "closeButtonElement"
  ]);
  let $$slots = compute_slots(slots);
  let { open = true } = $$props;
  let { closable = true } = $$props;
  let { severity = "information" } = $$props;
  let { title = "" } = $$props;
  let { message = "" } = $$props;
  let { class: className = "" } = $$props;
  let { element = null } = $$props;
  let { titleElement = null } = $$props;
  let { messageElement = null } = $$props;
  let { actionElement = null } = $$props;
  let { closeButtonElement = null } = $$props;
  let clientHeight = 0;
  const dispatch = createEventDispatcher();
  createEventForwarder(get_current_component());
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.closable === void 0 && $$bindings.closable && closable !== void 0)
    $$bindings.closable(closable);
  if ($$props.severity === void 0 && $$bindings.severity && severity !== void 0)
    $$bindings.severity(severity);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.titleElement === void 0 && $$bindings.titleElement && titleElement !== void 0)
    $$bindings.titleElement(titleElement);
  if ($$props.messageElement === void 0 && $$bindings.messageElement && messageElement !== void 0)
    $$bindings.messageElement(messageElement);
  if ($$props.actionElement === void 0 && $$bindings.actionElement && actionElement !== void 0)
    $$bindings.actionElement(actionElement);
  if ($$props.closeButtonElement === void 0 && $$bindings.closeButtonElement && closeButtonElement !== void 0)
    $$bindings.closeButtonElement(closeButtonElement);
  $$result.css.add(css);
  actionWrapped = clientHeight;
  messageWrapped = clientHeight;
  {
    if (open) {
      dispatch("open");
    } else {
      dispatch("close");
    }
  }
  return `
${open ? `<div${spread([
    {
      class: "info-bar severity-" + escape(severity, true) + " " + escape(className, true)
    },
    { role: "alert" },
    escape_object($$restProps)
  ], { classes: "svelte-fp4fp6" })}${add_attribute("this", element, 0)}><div class="${"info-bar-icon svelte-fp4fp6"}">${slots.icon ? slots.icon({}) : `
				${validate_component(InfoBadge, "InfoBadge").$$render($$result, { severity }, {}, {})}
			`}</div>
		<div class="${[
    "info-bar-content svelte-fp4fp6",
    " " + ($$slots.action ? "action-visible" : "") + " " + (actionWrapped ? "action-wrapped" : "") + " " + (messageWrapped ? "message-wrapped" : "")
  ].join(" ").trim()}">${title ? `<h5 class="${"svelte-fp4fp6"}"${add_attribute("this", titleElement, 0)}>${escape(title)}</h5>` : ``}
			${message || $$slots.default ? `<p class="${"svelte-fp4fp6"}"${add_attribute("this", messageElement, 0)}>${escape(message)}
					${slots.default ? slots.default({}) : ``}</p>` : ``}
			${$$slots.action ? `<div class="${"info-bar-action svelte-fp4fp6"}"${add_attribute("this", actionElement, 0)}>${slots.action ? slots.action({}) : ``}</div>` : ``}</div>
		${closable ? `<button class="${"info-bar-close-button svelte-fp4fp6"}" type="${"button"}" aria-label="${"Close"}"${add_attribute("this", closeButtonElement, 0)}><svg aria-hidden="${"true"}" xmlns="${"http://www.w3.org/2000/svg"}" width="${"12"}" height="${"12"}" viewBox="${"0 0 1024 1024"}" class="${"svelte-fp4fp6"}"><path fill="${"currentColor"}" d="${"M512,584.5L87.5,1009C77.5,1019 65.5,1024 51.5,1024C36.8333,1024 24.5833,1019.08 14.75,1009.25C4.91667,999.417 0,987.167 0,972.5C0,958.5 5,946.5 15,936.5L439.5,512L15,87.5C5,77.5 0,65.3334 0,51C0,44 1.33333,37.3334 4,31C6.66667,24.6667 10.3333,19.25 15,14.75C19.6667,10.25 25.1667,6.66669 31.5,4C37.8333,1.33337 44.5,0 51.5,0C65.5,0 77.5,5 87.5,15L512,439.5L936.5,15C946.5,5 958.667,0 973,0C980,0 986.583,1.33337 992.75,4C998.917,6.66669 1004.33,10.3334 1009,15C1013.67,19.6667 1017.33,25.0834 1020,31.25C1022.67,37.4167 1024,44 1024,51C1024,65.3334 1019,77.5 1009,87.5L584.5,512L1009,936.5C1019,946.5 1024,958.5 1024,972.5C1024,979.5 1022.67,986.167 1020,992.5C1017.33,998.833 1013.75,1004.33 1009.25,1009C1004.75,1013.67 999.333,1017.33 993,1020C986.667,1022.67 980,1024 973,1024C958.667,1024 946.5,1019 936.5,1009Z"}"></path></svg></button>` : ``}</div>` : ``}`;
});
export { InfoBar as I };
