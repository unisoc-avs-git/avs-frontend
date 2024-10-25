import { c as create_ssr_component, v as validate_component, a as subscribe, e as escape, d as add_attribute, f as each } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
import { p as page } from "../../../../chunks/stores.js";
import { B as Background } from "../../../../chunks/background.js";
import { I as Icon, N as Navbar, U as Users } from "../../../../chunks/navbar.js";
import { S as SdgsIcon } from "../../../../chunks/sdgsIcon.js";
import { e as eventStore } from "../../../../chunks/events.js";
import { C as Calendar, a as Clock, M as Map_pin, B as Building_2, S as Star, b as Share_2 } from "../../../../chunks/star.js";
import { U as User } from "../../../../chunks/user.js";
const Arrow_left = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m12 19-7-7 7-7" }], ["path", { "d": "M19 12H5" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-left" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const mockUsers = [
  {
    id: 1,
    name: "田中 太郎",
    icon: "T",
    participationCount: 15
  },
  {
    id: 2,
    name: "鈴木 花子",
    icon: "S",
    participationCount: 23
  },
  {
    id: 3,
    name: "佐藤 健一",
    icon: "S",
    participationCount: 8
  },
  {
    id: 4,
    name: "山田 美咲",
    icon: "Y",
    participationCount: 31
  },
  {
    id: 5,
    name: "伊藤 直樹",
    icon: "I",
    participationCount: 12
  },
  {
    id: 6,
    name: "中村 真由子",
    icon: "N",
    participationCount: 19
  },
  {
    id: 7,
    name: "小林 雄太",
    icon: "K",
    participationCount: 7
  },
  {
    id: 8,
    name: "加藤 恵",
    icon: "K",
    participationCount: 25
  },
  {
    id: 9,
    name: "吉田 拓也",
    icon: "Y",
    participationCount: 16
  },
  {
    id: 10,
    name: "渡辺 陽子",
    icon: "W",
    participationCount: 28
  },
  {
    id: 11,
    name: "松本 和也",
    icon: "M",
    participationCount: 14
  },
  {
    id: 12,
    name: "高橋 明日香",
    icon: "T",
    participationCount: 21
  },
  {
    id: 13,
    name: "石井 大輔",
    icon: "I",
    participationCount: 9
  },
  {
    id: 14,
    name: "木村 純",
    icon: "K",
    participationCount: 17
  },
  {
    id: 15,
    name: "林 美樹",
    icon: "H",
    participationCount: 22
  },
  {
    id: 16,
    name: "斎藤 康平",
    icon: "S",
    participationCount: 11
  },
  {
    id: 17,
    name: "山口 千代",
    icon: "Y",
    participationCount: 26
  },
  {
    id: 18,
    name: "清水 翔太",
    icon: "S",
    participationCount: 13
  },
  {
    id: 19,
    name: "阿部 真弓",
    icon: "A",
    participationCount: 24
  },
  {
    id: 20,
    name: "池田 悠太",
    icon: "I",
    participationCount: 18
  }
];
const eventParticipants = {
  // イベントIDと参加ユーザーIDの配列
  "2024-03-25T10:00:00Z": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  // 春のボランティアフェスタ
  "2024-03-25T11:00:00Z": [11, 12, 13, 14, 15],
  // 子ども食堂支援イベント
  "2024-03-25T12:00:00Z": [16, 17, 18, 19, 20, 1, 2, 3],
  // ビーチクリーンアップ
  "2024-03-25T13:00:00Z": [4, 5, 6, 7, 8, 9],
  // 高齢者向けIT講座
  "2024-10-25T10:22:20.177Z": [10, 11, 12, 13, 14],
  // 海岸ゴミ拾いボランティア
  "2024-10-25T13:04:27.581Z": [15, 16, 17, 18, 19, 20]
  // 春のボランティアフェスタ（複製）
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let eventId;
  let event;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let events = [];
  eventStore.subscribe((value) => {
    events = value;
  });
  function getEventParticipants(eventCreatedAt) {
    const participantIds = eventParticipants[eventCreatedAt] || [];
    return participantIds.map((id) => mockUsers.find((user) => user.id === id));
  }
  eventId = $page.params.id;
  event = events.find((e) => e.metadata.createdAt === eventId);
  $$unsubscribe_page();
  return `<div class="min-h-screen relative overflow-hidden">${validate_component(Background, "Background").$$render($$result, {}, {}, {})} <div class="relative z-10 flex flex-col min-h-screen">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main class="container mx-auto p-4 relative z-10 pt-20">${event ? `<div class="w-full max-w-4xl mx-auto bg-white bg-opacity-90 rounded-lg shadow"><div class="p-6"><div class="flex items-center mb-4"><a href="/event-list" class="mr-2 p-2 hover:bg-gray-100 rounded">${validate_component(Arrow_left, "ArrowLeft").$$render($$result, { class: "h-4 w-4" }, {}, {})}</a> <h1 class="text-3xl font-bold">${escape(event.title)}</h1></div> <p class="text-lg text-gray-600 mb-6">${escape(event.description)}</p> <div class="grid md:grid-cols-2 gap-6"><img${add_attribute("src", event.image, 0)}${add_attribute("alt", event.title, 0)} class="w-full h-auto object-cover rounded-lg"> <div class="space-y-4"><div class="flex items-center">${validate_component(Calendar, "Calendar").$$render($$result, { class: "mr-2 h-5 w-5 text-[#3AAFA9]" }, {}, {})} <span class="font-semibold" data-svelte-h="svelte-185mru7">実施日：</span> <span class="ml-2">${escape(new Date(event.schedule.startDate).toLocaleDateString("ja-JP"))}</span></div> <div class="flex items-center">${validate_component(Clock, "Clock").$$render($$result, { class: "mr-2 h-5 w-5 text-[#3AAFA9]" }, {}, {})} <span class="font-semibold" data-svelte-h="svelte-oedt5d">時間：</span> <span class="ml-2">${escape(event.schedule.startTime)} - ${escape(event.schedule.endTime)}</span></div> <div class="flex items-center">${validate_component(Map_pin, "MapPin").$$render($$result, { class: "mr-2 h-5 w-5 text-[#3AAFA9]" }, {}, {})} <span class="font-semibold" data-svelte-h="svelte-ergovi">場所：</span> <span class="ml-2">${escape(event.location.prefecture)} ${escape(event.location.city)} ${escape(event.location.address)}</span></div> <div class="flex items-center">${validate_component(Users, "Users").$$render($$result, { class: "mr-2 h-5 w-5 text-[#3AAFA9]" }, {}, {})} <span class="font-semibold" data-svelte-h="svelte-5h85l1">募集人数：</span> <span class="ml-2">${escape(event.schedule.participantLimit)}名</span></div> <div class="flex items-center">${validate_component(Calendar, "Calendar").$$render($$result, { class: "mr-2 h-5 w-5 text-[#FF6B6B]" }, {}, {})} <span class="font-semibold text-[#FF6B6B]" data-svelte-h="svelte-1sowdeu">応募締め切り：</span> <span class="ml-2 text-[#FF6B6B]">${escape(new Date(event.schedule.applicationDeadline).toLocaleDateString("ja-JP"))}</span></div> <div class="flex items-center">${validate_component(Building_2, "Building2").$$render($$result, { class: "mr-2 h-5 w-5 text-[#3AAFA9]" }, {}, {})} <span class="font-semibold" data-svelte-h="svelte-1jlmhmx">配信者：</span> <span class="ml-2">${escape(event.metadata.organizer)}</span></div></div></div>  <div class="mt-6"><h3 class="text-xl font-semibold mb-2" data-svelte-h="svelte-1rpzl5d">イベント参加者</h3> <div class="flex flex-wrap gap-2">${each(getEventParticipants(event.metadata.createdAt), (participant) => {
    return `<button class="group relative"${add_attribute("title", participant.name, 0)}><div class="w-10 h-10 rounded-full border-2 border-[#3AAFA9] bg-white flex items-center justify-center text-[#3AAFA9] overflow-hidden transition-colors duration-200 hover:bg-[#3AAFA9] hover:text-white">${validate_component(User, "User").$$render($$result, { class: "w-6 h-6" }, {}, {})}</div> <div class="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-200">${escape(participant.name)}</div> </button>`;
  })} ${getEventParticipants(event.metadata.createdAt).length < event.schedule.participantLimit ? `<div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-sm">+${escape(event.schedule.participantLimit - getEventParticipants(event.metadata.createdAt).length)}</div>` : ``}</div></div>  <div class="mt-6 bg-gray-100 p-4 rounded-md"><h3 class="text-xl font-semibold mb-4" data-svelte-h="svelte-1hf462y">関連するSDGs</h3> <div class="flex flex-wrap gap-4 items-center">${event.categories.representativeSDG ? `<div class="flex items-center">${validate_component(SdgsIcon, "SDGsIcon").$$render(
    $$result,
    {
      goal: event.categories.representativeSDG,
      size: 56
    },
    {},
    {}
  )}</div>` : ``} ${each(event.categories.sdgs.filter((g) => g !== event.categories.representativeSDG), (sdgsGoal) => {
    return `${validate_component(SdgsIcon, "SDGsIcon").$$render($$result, { goal: sdgsGoal, size: 56 }, {}, {})}`;
  })}</div> <div class="flex items-center justify-end mt-4">${validate_component(Star, "Star").$$render($$result, { class: "h-6 w-6 text-[#3AAFA9] mr-2" }, {}, {})} <span class="font-bold text-[#3AAFA9] text-xl">${escape(event.activity.vpPoints)}VP</span></div></div>  <div class="mt-6"><h3 class="text-xl font-semibold mb-2" data-svelte-h="svelte-t5w75t">イベント開催地</h3> <div class="bg-white p-4 rounded-lg shadow"><div class="rounded-lg overflow-hidden" data-svelte-h="svelte-pm1qvf"><iframe width="100%" height="400" frameborder="0" style="border:0" loading="lazy" allowfullscreen src="https://www.openstreetmap.org/export/embed.html?bbox=138.3830,34.9717,138.3930,34.9757&amp;layer=mapnik&amp;marker=34.9737,138.3880&amp;zoom=17" title="イベント開催地"></iframe></div> <div class="mt-2 text-sm text-gray-600"><a href="https://www.openstreetmap.org/?mlat=34.9737&amp;mlon=138.3880#map=17/34.9737/138.3880" target="_blank" rel="noopener noreferrer" class="text-[#3AAFA9] hover:text-[#FF6B6B]" data-svelte-h="svelte-7kav9y">大きな地図で見る</a> <p class="mt-1">${escape(event.location.prefecture)} ${escape(event.location.city)} ${escape(event.location.address)}</p></div></div></div> ${event.requirements && (event.requirements.qualifications?.length > 0 || event.requirements.ageRange) ? `<div class="mt-6 bg-gray-50 p-4 rounded-lg"><h3 class="text-xl font-semibold mb-2" data-svelte-h="svelte-r0ihlp">参加要件</h3> ${event.requirements.ageRange ? `<div class="mb-2"><span class="font-semibold" data-svelte-h="svelte-jw33k6">年齢制限：</span> ${escape(event.requirements.ageRange.min)}歳
                    ${event.requirements.ageRange.max ? `～${escape(event.requirements.ageRange.max)}歳` : ``}</div>` : ``} ${event.requirements.qualifications?.length > 0 ? `<div><span class="font-semibold" data-svelte-h="svelte-1qn07mz">必要な資格：</span> <ul class="list-disc list-inside ml-4">${each(event.requirements.qualifications, (qualification) => {
    return `<li>${escape(qualification)}</li>`;
  })}</ul></div>` : ``}</div>` : ``} ${event.metadata.remarks ? `<div class="mt-4 text-gray-600"><span class="font-semibold" data-svelte-h="svelte-54d7f6">備考：</span>${escape(event.metadata.remarks)}</div>` : ``} <div class="mt-6 flex justify-between"><button class="hover:text-[#3AAFA9] border border-current px-4 py-2 rounded flex items-center">${validate_component(Share_2, "Share2").$$render($$result, { class: "mr-2 h-5 w-5" }, {}, {})}
                共有する</button> <button class="bg-[#FF6B6B] hover:bg-[#FF8080] text-white px-6 py-2 rounded" data-svelte-h="svelte-1uqp2bb">参加申し込み</button></div></div></div>` : `<div class="text-center py-10" data-svelte-h="svelte-1q3lipz"><p>イベントが見つかりませんでした。</p></div>`}</main></div></div>`;
});
export {
  Page as default
};
