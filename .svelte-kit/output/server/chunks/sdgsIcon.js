import { c as create_ssr_component, d as add_attribute, e as escape } from "./ssr.js";
const SdgsIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let iconPath;
  let altText;
  let { goal } = $$props;
  let { size = 48 } = $$props;
  let { className = "" } = $$props;
  if ($$props.goal === void 0 && $$bindings.goal && goal !== void 0) $$bindings.goal(goal);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  iconPath = goal === "all" ? "/sdgs/sdgs_icon.png" : `/sdgs/sdg_icon_${goal}.png`;
  altText = goal === "all" ? "SDGs 17の目標全て" : `SDGs Goal ${goal}`;
  return `<img${add_attribute("src", iconPath, 0)}${add_attribute("alt", altText, 0)}${add_attribute("class", className, 0)} style="${"width: " + escape(size, true) + "px; height: " + escape(size, true) + "px; object-fit: contain;"}">`;
});
export {
  SdgsIcon as S
};
