import { c as create_ssr_component, v as validate_component, b as createEventDispatcher, e as escape, d as add_attribute, f as each } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { B as Background } from "../../../chunks/background.js";
import { C as Calendar, a as Clock, M as Map_pin, B as Building_2, S as Star, b as Share_2 } from "../../../chunks/star.js";
import { I as Icon, N as Navbar, U as Users } from "../../../chunks/navbar.js";
import { S as SdgsIcon } from "../../../chunks/sdgsIcon.js";
import { e as eventStore } from "../../../chunks/events.js";
const Layout_grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "7",
        "height": "7",
        "x": "3",
        "y": "3",
        "rx": "1"
      }
    ],
    [
      "rect",
      {
        "width": "7",
        "height": "7",
        "x": "14",
        "y": "3",
        "rx": "1"
      }
    ],
    [
      "rect",
      {
        "width": "7",
        "height": "7",
        "x": "14",
        "y": "14",
        "rx": "1"
      }
    ],
    [
      "rect",
      {
        "width": "7",
        "height": "7",
        "x": "3",
        "y": "14",
        "rx": "1"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "layout-grid" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Map = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"
      }
    ],
    ["path", { "d": "M15 5.764v15" }],
    ["path", { "d": "M9 3.236v15" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "map" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Datepicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let today;
  let currentMonth;
  let currentYear;
  let firstDayOfMonth;
  let lastDayOfMonth;
  let { selected = null } = $$props;
  createEventDispatcher();
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  today = /* @__PURE__ */ new Date();
  currentMonth = selected ? selected.getMonth() : today.getMonth();
  currentYear = selected ? selected.getFullYear() : today.getFullYear();
  firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  lastDayOfMonth.getDate();
  firstDayOfMonth.getDay();
  return `<div class="relative"><button class="w-[180px] px-3 py-2 border rounded-lg flex items-center bg-white">${validate_component(Calendar, "Calendar").$$render($$result, { class: "mr-2 h-4 w-4" }, {}, {})} ${escape(selected ? selected.toLocaleDateString("ja-JP") : "日付を選択")}</button> ${``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let locations;
  let categories;
  let filteredEvents;
  let selectedDate = null;
  let selectedLocation = "すべて";
  let selectedCategory = "すべて";
  let searchQuery = "";
  let events = [];
  eventStore.subscribe((value) => {
    events = value;
  });
  locations = ["すべて", ...new Set(events.map((event) => event.location.prefecture))];
  categories = ["すべて", ...new Set(events.flatMap((event) => event.categories.eventTypes))];
  filteredEvents = events.filter((event) => {
    const matchesSearch = searchQuery === "";
    const matchesLocation = selectedLocation === "すべて";
    const matchesCategory = selectedCategory === "すべて";
    const matchesDate = !selectedDate;
    return matchesSearch && matchesLocation && matchesCategory && matchesDate;
  });
  return `<div class="min-h-screen relative overflow-hidden">${validate_component(Background, "Background").$$render($$result, {}, {}, {})} <div class="relative z-10 flex flex-col min-h-screen">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main class="container mx-auto p-4 relative z-10 pt-20"> <div class="mb-4 space-y-4"><div class="flex justify-between items-center"><input type="text" placeholder="イベントを検索..." class="w-full px-3 py-2 border rounded-lg mr-4"${add_attribute("value", searchQuery, 0)}>  <div class="flex border rounded-lg overflow-hidden"><button class="${"px-4 py-2 flex items-center " + escape(
    "bg-[#3AAFA9] text-white",
    true
  )}">${validate_component(Layout_grid, "LayoutGrid").$$render($$result, { class: "w-5 h-5 mr-2" }, {}, {})}</button> <button class="${"px-4 py-2 flex items-center " + escape(
    "bg-white hover:bg-gray-100",
    true
  )}">${validate_component(Map, "Map").$$render($$result, { class: "w-5 h-5 mr-2" }, {}, {})}</button></div></div> <div class="flex flex-wrap gap-4"><select class="w-[180px] px-3 py-2 border rounded-lg">${each(locations, (location) => {
    return `<option${add_attribute("value", location, 0)}>${escape(location)}</option>`;
  })}</select> <select class="w-[180px] px-3 py-2 border rounded-lg">${each(categories, (category) => {
    return `<option${add_attribute("value", category, 0)}>${escape(category)}</option>`;
  })}</select> ${validate_component(Datepicker, "Datepicker").$$render($$result, { selected: selectedDate }, {}, {})}</div></div>  ${` <div class="grid gap-4 mb-4">${each(filteredEvents, (event) => {
    return `<div class="bg-white rounded-lg shadow-lg overflow-hidden"><div class="flex flex-col md:flex-row"><div class="md:w-1/3 p-4"><img${add_attribute("src", event.image, 0)}${add_attribute("alt", event.title, 0)} class="w-full h-auto object-cover rounded-lg"></div> <div class="md:w-2/3"><div class="p-4"><h2 class="text-xl font-bold mb-2">${escape(event.title)}</h2> <p class="text-gray-600 mb-4">${escape(event.description)}</p> <div class="grid gap-4"><div class="grid grid-cols-2 gap-4"><div><div class="flex items-center mb-1">${validate_component(Calendar, "Calendar").$$render($$result, { class: "mr-2 h-5 w-5 text-[#3AAFA9]" }, {}, {})} <span class="font-semibold" data-svelte-h="svelte-blf28d">実施日</span></div> <p class="ml-7">${escape(new Date(event.schedule.startDate).toLocaleDateString("ja-JP"))}</p></div> <div><div class="flex items-center mb-1">${validate_component(Clock, "Clock").$$render($$result, { class: "mr-2 h-5 w-5 text-[#3AAFA9]" }, {}, {})} <span class="font-semibold" data-svelte-h="svelte-1krosxz">時間</span></div> <p class="ml-7">${escape(event.schedule.startTime)} - ${escape(event.schedule.endTime)}</p></div> <div><div class="flex items-center mb-1">${validate_component(Map_pin, "MapPin").$$render($$result, { class: "mr-2 h-5 w-5 text-[#3AAFA9]" }, {}, {})} <span class="font-semibold" data-svelte-h="svelte-4jdx2c">場所</span></div> <p class="ml-7">${escape(event.location.prefecture)} ${escape(event.location.city)}</p></div> <div><div class="flex items-center mb-1">${validate_component(Users, "Users").$$render($$result, { class: "mr-2 h-5 w-5 text-[#3AAFA9]" }, {}, {})} <span class="font-semibold" data-svelte-h="svelte-1ap7vfr">募集人数</span></div> <p class="ml-7">${escape(event.schedule.participantLimit)}名</p></div> <div><div class="flex items-center mb-1">${validate_component(Calendar, "Calendar").$$render($$result, { class: "mr-2 h-5 w-5 text-[#FF6B6B]" }, {}, {})} <span class="font-semibold text-[#FF6B6B]" data-svelte-h="svelte-7y6ndo">応募締め切り</span></div> <p class="ml-7 text-[#FF6B6B]">${escape(new Date(event.schedule.applicationDeadline).toLocaleDateString("ja-JP"))} </p></div> <div><div class="flex items-center mb-1">${validate_component(Building_2, "Building2").$$render($$result, { class: "mr-2 h-5 w-5 text-[#3AAFA9]" }, {}, {})} <span class="font-semibold" data-svelte-h="svelte-2xeyub">募集団体</span></div> <p class="ml-7">${escape(event.metadata.organizer)}</p> </div></div> <div class="flex items-center justify-between bg-gray-100 p-3 rounded-md"><div class="flex items-center space-x-3">${event.categories.representativeSDG ? `${validate_component(SdgsIcon, "SDGsIcon").$$render(
      $$result,
      {
        goal: event.categories.representativeSDG,
        size: 48
      },
      {},
      {}
    )}` : ``}</div> <div class="flex items-center space-x-2">${validate_component(Star, "Star").$$render($$result, { class: "h-5 w-5 text-[#3AAFA9]" }, {}, {})} <span class="font-bold text-[#3AAFA9] text-lg">${escape(event.activity.vpPoints)}VP</span></div> </div></div> <div class="flex justify-between mt-4"><button class="px-4 py-2 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#FF8080]" data-svelte-h="svelte-1qx1crm">詳細を見る</button> <button class="px-4 py-2 hover:text-[#3AAFA9] flex items-center">${validate_component(Share_2, "Share2").$$render($$result, { class: "mr-2 h-5 w-5" }, {}, {})}
                        共有する</button> </div></div> </div></div> </div>`;
  })}</div>`}</main></div></div>`;
});
export {
  Page as default
};
