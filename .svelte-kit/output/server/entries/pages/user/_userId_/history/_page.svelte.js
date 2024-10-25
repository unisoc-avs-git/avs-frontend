import { c as create_ssr_component, v as validate_component, f as each, e as escape } from "../../../../../chunks/ssr.js";
import { B as Background } from "../../../../../chunks/background.js";
import { I as Icon, N as Navbar, M as Message_square } from "../../../../../chunks/navbar.js";
import { S as SdgsIcon } from "../../../../../chunks/sdgsIcon.js";
import { U as User } from "../../../../../chunks/user.js";
const User_plus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      }
    ],
    ["circle", { "cx": "9", "cy": "7", "r": "4" }],
    [
      "line",
      {
        "x1": "19",
        "x2": "19",
        "y1": "8",
        "y2": "14"
      }
    ],
    [
      "line",
      {
        "x1": "22",
        "x2": "16",
        "y1": "11",
        "y2": "11"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "user-plus" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const sdgsData = [
    { goal: 1, vp: 70 },
    { goal: 2, vp: 70 },
    { goal: 3, vp: 20 },
    { goal: 4, vp: 6 },
    { goal: 5, vp: 7 },
    { goal: 6, vp: 6 },
    { goal: 7, vp: 7 },
    { goal: "all", vp: 186 }
  ];
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="relative min-h-screen bg-[#F5F5F5]">${validate_component(Background, "Background").$$render($$result, {}, {}, {})} <div class="relative container mx-auto flex items-center justify-center min-h-screen py-8"><div class="w-[300px] bg-white shadow-md rounded-lg overflow-hidden"> <div class="flex flex-col items-center space-y-2 bg-[#3AAFA9] text-white p-6"><div class="relative w-24 h-24"><div class="w-full h-full rounded-full border-4 border-white overflow-hidden bg-white flex items-center justify-center">${validate_component(User, "User").$$render($$result, { class: "w-16 h-16 text-[#3AAFA9]" }, {}, {})}</div></div> <h2 class="text-2xl font-bold" data-svelte-h="svelte-mxekqn">山田 太郎</h2> <p class="text-sm opacity-75" data-svelte-h="svelte-z5dqmh">年齢：47歳</p></div>  <div class="p-6"><div class="mb-4" data-svelte-h="svelte-qayr0d"><p class="text-sm text-[#4A4A4A] mb-2">職業：会社員</p> <p class="text-sm text-[#4A4A4A] mb-2">保持スキル：</p></div>  <div class="grid grid-cols-4 gap-4 mb-4">${each(sdgsData, ({ goal, vp }) => {
    return `<div class="flex flex-col items-center">${validate_component(SdgsIcon, "SdgsIcon").$$render($$result, { goal, size: 32 }, {}, {})} <span class="text-xs mt-1 font-semibold">${escape(vp)} VP</span> </div>`;
  })}</div> <p class="text-sm text-[#4A4A4A] mb-2" data-svelte-h="svelte-qx2jz4">参加：12回</p> <p class="text-sm text-[#4A4A4A]" data-svelte-h="svelte-1bq33c9">総時間：18時間39分</p></div>  <div class="flex justify-between p-4 bg-gray-50"><button class="flex-1 mr-2 border border-[#3AAFA9] text-[#3AAFA9] hover:bg-[#3AAFA9] hover:text-white px-4 py-2 rounded flex items-center justify-center">${validate_component(User_plus, "UserPlus").$$render($$result, { class: "w-4 h-4 mr-2" }, {}, {})}
            友達を追加</button> <button class="flex-1 border border-[#3AAFA9] text-[#3AAFA9] hover:bg-[#3AAFA9] hover:text-white px-4 py-2 rounded flex items-center justify-center">${validate_component(Message_square, "MessageSquare").$$render($$result, { class: "w-4 h-4 mr-2" }, {}, {})}
            メッセージ</button></div></div></div></div>`;
});
export {
  Page as default
};
