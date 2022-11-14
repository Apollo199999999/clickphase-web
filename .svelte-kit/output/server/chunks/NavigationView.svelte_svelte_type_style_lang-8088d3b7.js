import { c as create_ssr_component, b as compute_rest_props, d as spread, e as escape, f as escape_object, h as add_attribute, i as is_void } from "./index-223a4ced.js";
var theme = "";
var ComboBoxItem_svelte_svelte_type_style_lang = "";
var FlyoutSurface_svelte_svelte_type_style_lang = "";
var TooltipSurface_svelte_svelte_type_style_lang = "";
var MenuFlyoutSurface_svelte_svelte_type_style_lang = "";
var CalendarViewItem_svelte_svelte_type_style_lang = "";
var Button_svelte_svelte_type_style_lang = "";
var Checkbox_svelte_svelte_type_style_lang = "";
var ToggleSwitch_svelte_svelte_type_style_lang = "";
var RadioButton_svelte_svelte_type_style_lang = "";
var ProgressRing_svelte_svelte_type_style_lang = "";
var ProgressBar_svelte_svelte_type_style_lang = "";
var TextBoxButton_svelte_svelte_type_style_lang = "";
var TextBox_svelte_svelte_type_style_lang = "";
var ComboBox_svelte_svelte_type_style_lang = "";
var InfoBadge_svelte_svelte_type_style_lang = "";
var FlyoutWrapper_svelte_svelte_type_style_lang = "";
var InfoBar_svelte_svelte_type_style_lang = "";
var NumberBox_svelte_svelte_type_style_lang = "";
var TextBlock_svelte_svelte_type_style_lang = "";
const css = {
  code: ".text-block.svelte-zxj483{color:currentColor;display:inline-block;margin:0;padding:0}.text-block.type-display.svelte-zxj483,.text-block.type-subtitle.svelte-zxj483,.text-block.type-title.svelte-zxj483,.text-block.type-title-large.svelte-zxj483{font-family:var(--fds-font-family-display);font-weight:600}.text-block.type-body.svelte-zxj483,.text-block.type-body-large.svelte-zxj483,.text-block.type-body-strong.svelte-zxj483{font-family:var(--fds-font-family-text)}.text-block.type-caption.svelte-zxj483{font-family:var(--fds-font-family-small);font-size:var(--fds-caption-font-size);font-weight:400;line-height:16px}.text-block.type-body.svelte-zxj483,.text-block.type-body-large.svelte-zxj483,.text-block.type-body-strong.svelte-zxj483{font-size:var(--fds-body-font-size);font-weight:400;line-height:20px}.text-block.type-body-strong.svelte-zxj483{font-weight:600}.text-block.type-body-large.svelte-zxj483{font-size:var(--fds-body-large-font-size);line-height:24px}.text-block.type-subtitle.svelte-zxj483{font-size:var(--fds-subtitle-font-size);line-height:28px}.text-block.type-title.svelte-zxj483{font-size:var(--fds-title-font-size);line-height:36px}.text-block.type-title-large.svelte-zxj483{font-size:var(--fds-title-large-font-size);line-height:52px}.text-block.type-display.svelte-zxj483{font-size:var(--fds-display-font-size);line-height:92px}",
  map: null
};
const TextBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["variant", "tag", "class", "element"]);
  let { variant = "body" } = $$props;
  let { tag = void 0 } = $$props;
  let { class: className = "" } = $$props;
  let { element = null } = $$props;
  const map = {
    caption: { tag: "span", name: "caption" },
    body: { tag: "span", name: "body" },
    bodyStrong: { tag: "h5", name: "body-strong" },
    bodyLarge: { tag: "h5", name: "body-large" },
    subtitle: { tag: "h4", name: "subtitle" },
    title: { tag: "h3", name: "title" },
    titleLarge: { tag: "h2", name: "title-large" },
    display: { tag: "h1", name: "display" }
  };
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  $$result.css.add(css);
  return `${((tag$1) => {
    return tag$1 ? `<${tag ? tag : map[variant].tag}${spread([
      {
        class: "text-block type-" + escape(map[variant].name, true) + " " + escape(className, true)
      },
      escape_object($$restProps)
    ], { classes: "svelte-zxj483" })}${add_attribute("this", element, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}
`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag ? tag : map[variant].tag)}`;
});
var ListItem_svelte_svelte_type_style_lang = "";
var AutoSuggestBox_svelte_svelte_type_style_lang = "";
var Slider_svelte_svelte_type_style_lang = "";
var PersonPicture_svelte_svelte_type_style_lang = "";
var TooltipWrapper_svelte_svelte_type_style_lang = "";
var ContentDialog_svelte_svelte_type_style_lang = "";
var Expander_svelte_svelte_type_style_lang = "";
var IconButton_svelte_svelte_type_style_lang = "";
var MenuBar_svelte_svelte_type_style_lang = "";
var MenuBarItem_svelte_svelte_type_style_lang = "";
var MenuFlyoutWrapper_svelte_svelte_type_style_lang = "";
var MenuFlyoutItem_svelte_svelte_type_style_lang = "";
var MenuFlyoutDivider_svelte_svelte_type_style_lang = "";
var ContextMenu_svelte_svelte_type_style_lang = "";
var CalendarView_svelte_svelte_type_style_lang = "";
var CalendarDatePicker_svelte_svelte_type_style_lang = "";
var NavigationView_svelte_svelte_type_style_lang = "";
export { TextBlock as T };
