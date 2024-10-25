import { c as create_ssr_component, v as validate_component, f as each, e as escape } from "../../../chunks/ssr.js";
import { B as Background } from "../../../chunks/background.js";
import { N as Navbar } from "../../../chunks/navbar.js";
const conversations = [
  { id: 1, name: "田中 太郎", lastMessage: "はい、承知しました。", time: "14:30", approved: true },
  { id: 2, name: "匿名ユーザー", lastMessage: "ありがとうございます。", time: "昨日", approved: true },
  { id: 3, name: "佐藤 次郎", lastMessage: "明日の予定を確認しました。", time: "2日前", approved: false }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectedConversation = null;
  return `<div class="relative min-h-screen overflow-hidden">${validate_component(Background, "Background").$$render($$result, {}, {}, {})} <div class="relative z-10 flex flex-col min-h-screen">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="flex flex-1 overflow-hidden bg-white rounded-lg shadow-lg mx-16 my-4"> <div class="w-1/3 border-r border-gray-200 overflow-y-auto"><div class="p-4" data-svelte-h="svelte-zmdczu"><input type="search" placeholder="メッセージを検索" class="w-full px-3 py-2 border rounded-lg"></div> <div class="divide-y divide-gray-200">${each(conversations, (conversation) => {
    return `<div class="${"p-4 cursor-pointer hover:bg-gray-100 " + escape(
      selectedConversation === conversation.id ? "bg-gray-100" : "",
      true
    )}"><div class="flex items-center space-x-4"><div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">${escape(conversation.name === "匿名ユーザー" ? "?" : conversation.name[0])}</div> <div class="flex-1 min-w-0"><p class="text-sm font-medium text-gray-900 truncate">${escape(conversation.name)}</p> <p class="text-sm text-gray-500 truncate">${escape(conversation.lastMessage)} </p></div> <div class="text-xs text-gray-400">${escape(conversation.time)}</div></div> </div>`;
  })}</div></div>  <div class="flex-1 flex flex-col">${`<div class="flex-1 flex items-center justify-center text-gray-500" data-svelte-h="svelte-1le6c0c">メッセージを選択してください</div>`}</div></div></div></div>`;
});
export {
  Page as default
};
