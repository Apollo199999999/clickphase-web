import { l as listen, j as bubble, c as create_ssr_component, b as compute_rest_props, k as get_current_component, d as spread, n as escape_attribute_value, e as escape, f as escape_object, h as add_attribute, i as is_void } from "./index-223a4ced.js";
import "./NavigationView.svelte_svelte_type_style_lang-8088d3b7.js";
function uid(prefix) {
  return prefix + String.fromCharCode(Math.floor(Math.random() * 26) + 97) + Math.random().toString(16).slice(2) + Date.now().toString(16).split(".")[0];
}
function createEventForwarder(component, exclude = []) {
  let $on;
  let events = [];
  component.$on = (eventType, callback) => {
    let destructor = () => {
    };
    if (exclude.includes(eventType)) {
      const callbacks = component.$$.callbacks[eventType] || (component.$$.callbacks[eventType] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events.push([eventType, callback]);
    }
    return () => destructor();
  };
  return (node) => {
    const destructors = [];
    const forwardDestructors = {};
    const forward = (e) => bubble(component, e);
    $on = (eventType, callback) => {
      let handler = callback;
      let options = false;
      const off = listen(node, eventType, handler, options);
      const destructor = () => {
        off();
        const idx = destructors.indexOf(destructor);
        if (idx > -1) {
          destructors.splice(idx, 1);
        }
      };
      destructors.push(destructor);
      if (!(eventType in forwardDestructors)) {
        forwardDestructors[eventType] = listen(node, eventType, forward);
      }
      return destructor;
    };
    for (const event of events) {
      $on(event[0], event[1]);
    }
    return {
      destroy: () => {
        for (const destructor of destructors) {
          destructor();
        }
        for (let entry of Object.entries(forwardDestructors)) {
          entry[1]();
        }
      }
    };
  };
}
const css = {
  code: ".button.svelte-1ulhukx{align-items:center;border:none;border-radius:var(--fds-control-corner-radius);box-sizing:border-box;cursor:default;display:inline-flex;font-family:var(--fds-font-family-text);font-size:var(--fds-body-font-size);font-weight:400;justify-content:center;line-height:20px;outline:none;padding-block:4px 6px;padding-inline:11px;position:relative;text-decoration:none;transition:var(--fds-control-faster-duration) ease background;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.button.svelte-1ulhukx:focus-visible{box-shadow:var(--fds-focus-stroke)}.button.style-standard.svelte-1ulhukx{background-clip:padding-box;background-color:var(--fds-control-fill-default);border:1px solid;border-color:var(--fds-control-border-default);color:var(--fds-text-primary)}.button.style-standard.svelte-1ulhukx:hover{background-color:var(--fds-control-fill-secondary)}.button.style-standard.svelte-1ulhukx:active{background-color:var(--fds-control-fill-tertiary);border-color:var(--fds-control-stroke-default);color:var(--fds-text-secondary)}.button.style-standard.disabled.svelte-1ulhukx{background-color:var(--fds-control-fill-disabled);border-color:var(--fds-control-stroke-default);color:var(--fds-text-disabled)}.button.style-accent.svelte-1ulhukx{background-color:var(--fds-accent-default);border:1px solid var(--fds-control-stroke-on-accent-default);border-bottom-color:var(--fds-control-stroke-on-accent-secondary);color:var(--fds-text-on-accent-primary);transition:var(--fds-control-faster-duration) ease border-color}.button.style-accent.svelte-1ulhukx:hover{background-color:var(--fds-accent-secondary)}.button.style-accent.svelte-1ulhukx:active{background-color:var(--fds-accent-tertiary);border-color:transparent;color:var(--fds-text-on-accent-secondary)}.button.style-accent.disabled.svelte-1ulhukx{background-color:var(--fds-accent-disabled);border-color:transparent;color:var(--fds-text-on-accent-disabled)}.button.style-hyperlink.svelte-1ulhukx{background-color:var(--fds-subtle-fill-transparent);color:var(--fds-accent-text-primary);cursor:pointer}.button.style-hyperlink.svelte-1ulhukx:hover{background-color:var(--fds-subtle-fill-secondary)}.button.style-hyperlink.svelte-1ulhukx:active{background-color:var(--fds-subtle-fill-tertiary);color:var(--fds-accent-text-tertiary)}.button.style-hyperlink.disabled.svelte-1ulhukx{color:var(--fds-accent-text-disabled)}.button.disabled.svelte-1ulhukx{pointer-events:none}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["variant", "href", "disabled", "class", "element"]);
  let { variant = "standard" } = $$props;
  let { href = "" } = $$props;
  let { disabled = false } = $$props;
  let { class: className = "" } = $$props;
  let { element = null } = $$props;
  createEventForwarder(get_current_component());
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  $$result.css.add(css);
  return `
${((tag) => {
    return tag ? `<${href && !disabled ? "a" : "button"}${spread([
      {
        role: escape_attribute_value(href && !disabled ? "button" : void 0)
      },
      {
        href: escape_attribute_value(href && !disabled ? href : void 0)
      },
      {
        class: "button style-" + escape(variant, true) + " " + escape(className, true)
      },
      escape_object($$restProps)
    ], {
      classes: (disabled ? "disabled" : "") + " svelte-1ulhukx"
    })}${add_attribute("this", element, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}
`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href && !disabled ? "a" : "button")}`;
});
export { Button as B, createEventForwarder as c, uid as u };
