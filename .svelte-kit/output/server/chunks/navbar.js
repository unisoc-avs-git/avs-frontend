import { c as create_ssr_component, i as compute_rest_props, j as spread, k as escape_object, l as escape_attribute_value, f as each, v as validate_component, e as escape } from "./ssr.js";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
/**
 * @license lucide-svelte v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"]);
  let { name = void 0 } = $$props;
  let { color = "currentColor" } = $$props;
  let { size = 24 } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { absoluteStrokeWidth = false } = $$props;
  let { iconNode = [] } = $$props;
  const mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && array.indexOf(className) === index;
  }).join(" ");
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.absoluteStrokeWidth === void 0 && $$bindings.absoluteStrokeWidth && absoluteStrokeWidth !== void 0) $$bindings.absoluteStrokeWidth(absoluteStrokeWidth);
  if ($$props.iconNode === void 0 && $$bindings.iconNode && iconNode !== void 0) $$bindings.iconNode(iconNode);
  return `<svg${spread(
    [
      escape_object(defaultAttributes),
      escape_object($$restProps),
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { stroke: escape_attribute_value(color) },
      {
        "stroke-width": escape_attribute_value(absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth)
      },
      {
        class: escape_attribute_value(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$props.class))
      }
    ],
    {}
  )}>${each(iconNode, ([tag, attrs]) => {
    return `${((tag$1) => {
      return tag$1 ? `<${tag}${spread([escape_object(attrs)], {})}>${is_void(tag$1) ? "" : ``}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
    })(tag)}`;
  })}${slots.default ? slots.default({}) : ``}</svg>`;
});
const Bell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
      }
    ],
    ["path", { "d": "M10.3 21a1.94 1.94 0 0 0 3.4 0" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "bell" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Briefcase = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
      }
    ],
    [
      "rect",
      {
        "width": "20",
        "height": "14",
        "x": "2",
        "y": "6",
        "rx": "2"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "briefcase" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Circle_user = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["circle", { "cx": "12", "cy": "10", "r": "3" }],
    [
      "path",
      {
        "d": "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "circle-user" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const File_question = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M12 17h.01" }],
    [
      "path",
      {
        "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"
      }
    ],
    [
      "path",
      {
        "d": "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "file-question" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const House = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"
      }
    ],
    [
      "path",
      {
        "d": "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "house" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Message_square = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "message-square" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      }
    ],
    ["circle", { "cx": "12", "cy": "12", "r": "3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "settings" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Users = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      }
    ],
    ["circle", { "cx": "9", "cy": "7", "r": "4" }],
    ["path", { "d": "M22 21v-2a4 4 0 0 0-3-3.87" }],
    ["path", { "d": "M16 3.13a4 4 0 0 1 0 7.75" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "users" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let positionClass;
  let { isOpen = false } = $$props;
  let { position = "right" } = $$props;
  let { width = "w-48" } = $$props;
  let { containerClass = "" } = $$props;
  let { dropdownClass = "" } = $$props;
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0) $$bindings.isOpen(isOpen);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0) $$bindings.position(position);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.containerClass === void 0 && $$bindings.containerClass && containerClass !== void 0) $$bindings.containerClass(containerClass);
  if ($$props.dropdownClass === void 0 && $$bindings.dropdownClass && dropdownClass !== void 0) $$bindings.dropdownClass(dropdownClass);
  positionClass = {
    "right": "right-0",
    "left": "left-0",
    "center": "left-1/2 -translate-x-1/2"
  }[position];
  return `<div class="${"relative " + escape(containerClass, true)}">${slots.trigger ? slots.trigger({}) : ``} ${isOpen ? `<div class="${"absolute mt-2 " + escape(width, true) + " bg-white rounded-lg shadow-lg py-1 z-50 dropdown-menu " + escape(positionClass, true) + " " + escape(dropdownClass, true)}">${slots.default ? slots.default({}) : ``}</div>` : ``}</div>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isUserMenuOpen = false;
  let isNotificationMenuOpen = false;
  return `   <nav class="flex items-center justify-between p-4 bg-white border-b-4 border-[#3AAFA9] shadow-sm rounded-lg"><a href="/home" class="text-2xl font-bold text-[#3AAFA9]" data-svelte-h="svelte-cxru4s">AVS</a> <div class="flex items-center space-x-6"><a href="/home" class="flex flex-col items-center text-sm font-medium text-gray-600 hover:text-[#3AAFA9]">${validate_component(House, "Home").$$render($$result, { class: "w-5 h-5 mb-1 text-[#3AAFA9]" }, {}, {})}
      ホーム</a> <a href="/event-list" class="flex flex-col items-center text-sm font-medium text-gray-600 hover:text-[#3AAFA9]">${validate_component(Users, "Users").$$render($$result, { class: "w-5 h-5 mb-1 text-[#3AAFA9]" }, {}, {})}
      イベント</a> <a href="/messages" class="flex flex-col items-center text-sm font-medium text-gray-600 hover:text-[#3AAFA9]">${validate_component(Message_square, "MessageSquare").$$render($$result, { class: "w-5 h-5 mb-1 text-[#3AAFA9]" }, {}, {})}
      メッセージ</a> <a href="/settings" class="flex flex-col items-center text-sm font-medium text-gray-600 hover:text-[#3AAFA9]">${validate_component(Settings, "Settings").$$render($$result, { class: "w-5 h-5 mb-1 text-[#3AAFA9]" }, {}, {})}
      設定</a></div> <div class="flex items-center space-x-4">${validate_component(Dropdown, "Dropdown").$$render(
    $$result,
    {
      isOpen: isNotificationMenuOpen,
      containerClass: "notification-menu-container",
      width: "w-max"
    },
    {},
    {
      trigger: () => {
        return `<div slot="trigger"><button class="text-[#3AAFA9] hover:bg-[#3AAFA9] hover:text-white relative p-2 rounded-lg">${validate_component(Bell, "Bell").$$render($$result, { class: "w-5 h-5" }, {}, {})}</button> <span class="absolute top-0 right-0 bg-[#FF6B6B] text-white text-xs px-1.5 rounded-full" data-svelte-h="svelte-1lx64lb">3</span></div>`;
      },
      default: () => {
        return `<div class="border-l-4 border-l-[#FF6B6B] p-4 bg-white shadow-sm rounded mb-4"><div class="flex items-center">${validate_component(Bell, "Bell").$$render($$result, { class: "h-4 w-4 text-[#FF6B6B] mr-2" }, {}, {})} <h3 class="font-semibold text-[#FF6B6B]" data-svelte-h="svelte-nq8nrh">新しいメッセージ</h3></div> <p class="mt-1 text-gray-600" data-svelte-h="svelte-13jiobu">新しいメッセージが3件あります。確認してください。</p></div> <div class="border-l-4 border-l-[#28A745] p-4 bg-white shadow-sm rounded mb-4"><div class="flex items-center">${validate_component(File_question, "FileQuestion").$$render($$result, { class: "h-4 w-4 text-[#28A745] mr-2" }, {}, {})} <h3 class="font-semibold text-[#28A745]" data-svelte-h="svelte-145wjqc">アンケートのお願い</h3></div> <p class="mt-1 text-gray-600" data-svelte-h="svelte-1ov4upc">活動終了しました。参加者はリンクからAVS 活動アンケートを提出してください。</p> <button class="mt-2 text-[#3AAFA9] hover:text-[#2B7A78] font-medium underline" data-svelte-h="svelte-bkj0d">アンケートに回答する</button></div> <div class="border-l-4 p-4 bg-white shadow-sm rounded mb-4"><div class="flex items-center">${validate_component(Briefcase, "Briefcase").$$render($$result, { class: "h-4 h-4 mr-2" }, {}, {})} <h3 class="font-semibold" data-svelte-h="svelte-1hntcke">イベント更新</h3></div> <p class="mt-1 text-gray-600" data-svelte-h="svelte-8jqzjz">参加予定のイベント情報が更新されました。</p></div>  `;
      }
    }
  )} ${validate_component(Dropdown, "Dropdown").$$render(
    $$result,
    {
      isOpen: isUserMenuOpen,
      containerClass: "user-menu-container"
    },
    {},
    {
      trigger: () => {
        return `<div slot="trigger"><button class="text-[#3AAFA9] hover:bg-[#3AAFA9] hover:text-white p-2 rounded-lg">${validate_component(Circle_user, "UserCircle").$$render($$result, { class: "w-5 h-5" }, {}, {})}</button></div>`;
      },
      default: () => {
        return `<a href="/login" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#3AAFA9]" data-svelte-h="svelte-s1ty0r">ログイン</a> <a href="/register" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#3AAFA9]" data-svelte-h="svelte-bzd5d5">新規登録</a>`;
      }
    }
  )}</div></nav>`;
});
export {
  Bell as B,
  Circle_user as C,
  File_question as F,
  Icon as I,
  Message_square as M,
  Navbar as N,
  Settings as S,
  Users as U,
  Briefcase as a
};
