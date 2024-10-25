import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/ssr.js";
import { B as Background } from "../../../chunks/background.js";
import { I as Icon, N as Navbar, S as Settings } from "../../../chunks/navbar.js";
import { u as userRole } from "../../../chunks/user2.js";
const Chevron_left = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m15 18-6-6 6-6" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "chevron-left" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentRole;
  userRole.subscribe((value) => {
    currentRole = value;
    if (typeof window !== "undefined") {
      localStorage.setItem("userRole", value);
    }
  });
  return `<div class="min-h-screen relative overflow-hidden">${validate_component(Background, "Background").$$render($$result, {}, {}, {})} <div class="min-h-screen relative">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}  <main class="container mx-auto mt-8 px-4 lg:px-8"><div class="flex justify-between items-center mb-6"><div class="flex items-center space-x-4"><a href="/home" class="text-[#3AAFA9] hover:text-[#2B7A78]">${validate_component(Chevron_left, "ChevronLeft").$$render($$result, { class: "w-6 h-6" }, {}, {})}</a> <h1 class="text-3xl font-bold text-[#4A4A4A]" data-svelte-h="svelte-ka54m2">設定</h1></div> <select${add_attribute("value", currentRole, 0)} class="w-[180px] px-3 py-2 border rounded-lg bg-white text-[#4A4A4A]"><option value="contractor" data-svelte-h="svelte-1dfooxt">契約者</option><option value="organization" data-svelte-h="svelte-195gp6i">募集団体</option><option value="enduser" data-svelte-h="svelte-mow874">エンドユーザー</option></select></div> <div class="bg-white rounded-lg shadow-md mb-8"><div class="p-6"><h2 class="text-xl font-bold text-[#4A4A4A]" data-svelte-h="svelte-2hdc7t">アカウント設定</h2> <p class="text-[#777777] mt-1 mb-4" data-svelte-h="svelte-exerzw">アカウントに関する基本的な設定を行います。</p> <div class="space-y-4">${currentRole === "contractor" ? ` <button class="w-full flex items-center px-4 py-2 border rounded-lg hover:bg-[#3AAFA9] hover:text-white">${validate_component(Settings, "SettingsIcon").$$render($$result, { class: "w-4 h-4 mr-2" }, {}, {})}
                情報配信条件設定</button> <button class="w-full flex items-center px-4 py-2 border rounded-lg hover:bg-[#3AAFA9] hover:text-white">${validate_component(Settings, "SettingsIcon").$$render($$result, { class: "w-4 h-4 mr-2" }, {}, {})}
                催促タイミング設定</button>` : `${currentRole === "organization" ? ` <button class="w-full flex items-center px-4 py-2 border rounded-lg hover:bg-[#3AAFA9] hover:text-white">${validate_component(Settings, "SettingsIcon").$$render($$result, { class: "w-4 h-4 mr-2" }, {}, {})}
                情報配信条件設定</button> <button class="w-full flex items-center px-4 py-2 border rounded-lg hover:bg-[#3AAFA9] hover:text-white">${validate_component(Settings, "SettingsIcon").$$render($$result, { class: "w-4 h-4 mr-2" }, {}, {})}
                通知タイミング設定</button>` : ` <button class="w-full flex items-center px-4 py-2 border rounded-lg hover:bg-[#3AAFA9] hover:text-white">${validate_component(Settings, "SettingsIcon").$$render($$result, { class: "w-4 h-4 mr-2" }, {}, {})}
                プロフィール公開設定</button>`}`}</div></div></div></main></div></div>  ${``}  ${``}  ${``}`;
});
export {
  Page as default
};
