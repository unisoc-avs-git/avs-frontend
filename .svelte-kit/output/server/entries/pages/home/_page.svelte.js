import { c as create_ssr_component, v as validate_component, a as subscribe, f as each, e as escape } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { B as Background } from "../../../chunks/background.js";
import { I as Icon, B as Bell, F as File_question, a as Briefcase, C as Circle_user, S as Settings, N as Navbar } from "../../../chunks/navbar.js";
import { e as eventStore } from "../../../chunks/events.js";
import { u as userRole } from "../../../chunks/user2.js";
const Chevron_down = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m6 9 6 6 6-6" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "chevron-down" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Chevron_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m9 18 6-6-6-6" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "chevron-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Clipboard_check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "8",
        "height": "4",
        "x": "8",
        "y": "2",
        "rx": "1",
        "ry": "1"
      }
    ],
    [
      "path",
      {
        "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
      }
    ],
    ["path", { "d": "m9 14 2 2 4-4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "clipboard-check" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Copy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "14",
        "height": "14",
        "x": "8",
        "y": "8",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "path",
      {
        "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "copy" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Eye = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
      }
    ],
    ["circle", { "cx": "12", "cy": "12", "r": "3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "eye" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Pen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "pen" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Square_pen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
      }
    ],
    [
      "path",
      {
        "d": "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "square-pen" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const css = {
  code: '.participants-popover.svelte-15i49oc{width:400px;max-width:calc(100vw - 40px);position:fixed;z-index:50}button[aria-label="ポップオーバーを閉じる"].svelte-15i49oc{z-index:40}',
  map: '{"version":3,"file":"event-management.svelte","sources":["event-management.svelte"],"sourcesContent":["<script>\\n  import { goto } from \'$app/navigation\';\\n  import { eventStore } from \'$lib/data/events.js\';\\n  import { mockUsers, eventParticipants } from \'$lib/data/user_data.js\';\\n  import { ChevronDown, Edit2, Copy, Eye, X } from \'lucide-svelte\';\\n\\n  // ストアの購読\\n  $: events = $eventStore;\\n\\n  // ポップオーバー用の状態\\n  let showParticipants = false;\\n  let selectedEvent = null;\\n  let popoverPosition = { x: 0, y: 0 };\\n\\n  // イベント参加者のデータを取得する関数\\n  function getEventParticipants(eventCreatedAt) {\\n    const participantIds = eventParticipants[eventCreatedAt] || [];\\n    return participantIds.map(id => mockUsers.find(user => user.id === id));\\n  }\\n\\n  // 新規作成ボタンのクリックハンドラー\\n  const handleCreateNew = () => {\\n    goto(\'/event\');\\n  };\\n\\n  // 編集ボタンのクリックハンドラー\\n  const handleEdit = (eventId) => {\\n    goto(`/event/${eventId}`);\\n  };\\n\\n  // 表示ボタンのクリックハンドラー\\n  // 位置調整: ここを修正\\n  const handleView = (event, e) => {\\n    const rect = e.currentTarget.getBoundingClientRect();\\n    const windowWidth = window.innerWidth;\\n    const popoverWidth = 400; // ポップオーバーの幅\\n    const popoverHeight = 300; // おおよそのポップオーバーの高さ\\n    \\n    // 表示位置の計算\\n    let x = rect.left - 800;\\n    \\n    // 画面右端からはみ出る場合の調整\\n    if (x + popoverWidth > windowWidth) {\\n      x = windowWidth - popoverWidth - 20; // 20pxの余白\\n    }\\n    \\n    // 左端が負の値にならないように調整\\n    x = Math.max(20, x);\\n    \\n    // ボタンの上に表示するように位置調整\\n    const y = rect.top - popoverHeight - 500; // ボタンの10px上\\n    \\n    popoverPosition = {\\n      x,\\n      y: y + window.scrollY // スクロール位置を考慮\\n    };\\n    \\n    selectedEvent = event;\\n    showParticipants = true;\\n  };\\n\\n  // ポップオーバーを閉じる\\n  const closePopover = () => {\\n    showParticipants = false;\\n    selectedEvent = null;\\n  };\\n\\n  // キーボードイベントハンドラー\\n  const handleKeyDown = (e) => {\\n    if (e.key === \'Escape\' && showParticipants) {\\n      closePopover();\\n    }\\n  };\\n\\n  // 複製ボタンのクリックハンドラー\\n  const handleDuplicate = (event) => {\\n    const duplicateData = {\\n      ...event,\\n      title: `${event.title}（複製）`,\\n      metadata: {\\n        ...event.metadata,\\n        status: \\"未配信\\",\\n        createdAt: new Date().toISOString(),\\n        updatedAt: new Date().toISOString()\\n      }\\n    };\\n    \\n    const queryParams = encodeURIComponent(JSON.stringify(duplicateData));\\n    goto(`/event?duplicate=${queryParams}`);\\n  };\\n\\n  // 日付のフォーマット\\n  const formatDates = (schedule) => {\\n    if (!schedule) return [];\\n    const dates = [];\\n    if (schedule.startDate) dates.push(schedule.startDate);\\n    if (schedule.endDate && schedule.endDate !== schedule.startDate) {\\n      dates.push(schedule.endDate);\\n    }\\n    return dates;\\n  };\\n\\n  // ユーザーアイコンクリック時の遷移処理\\n  const handleUserClick = (userId) => {\\n    goto(`/user/${userId}/history`);\\n  };\\n<\/script>\\n\\n<svelte:window on:keydown={handleKeyDown} />\\n\\n<div class=\\"bg-white rounded-lg shadow-md p-6\\">\\n  <h2 class=\\"text-xl font-bold mb-4\\">イベント管理</h2>\\n  <!-- 絞り込みと並び替え -->\\n  <div class=\\"flex justify-between mb-4\\">\\n    <div class=\\"relative\\">\\n      <button class=\\"border border-[#3AAFA9] text-[#3AAFA9] px-4 py-2 rounded-lg flex items-center\\">\\n        絞り込み\\n        <ChevronDown class=\\"ml-2 h-4 w-4\\" />\\n      </button>\\n    </div>\\n    <div class=\\"relative\\">\\n      <button class=\\"border border-[#3AAFA9] text-[#3AAFA9] px-4 py-2 rounded-lg flex items-center\\">\\n        並び替え\\n        <ChevronDown class=\\"ml-2 h-4 w-4\\" />\\n      </button>\\n    </div>\\n  </div>\\n\\n  <div class=\\"overflow-x-auto\\">\\n    <table class=\\"w-full\\">\\n      <thead>\\n        <tr class=\\"border-b\\">\\n          <th class=\\"text-left p-2\\">開催日</th>\\n          <th class=\\"text-left p-2\\">タイトル</th>\\n          <th class=\\"text-left p-2\\">ジャンル（SDGs）</th>\\n          <th class=\\"text-left p-2\\">配信者</th>\\n          <th class=\\"text-left p-2\\">イベント表示</th>\\n          <th class=\\"text-right p-2\\">アクション</th>\\n        </tr>\\n      </thead>\\n      <tbody>\\n        {#each events as event}\\n          <tr class=\\"border-b\\">\\n            <td class=\\"p-2\\">\\n              {#each formatDates(event.schedule) as date}\\n                <div>{date}</div>\\n              {/each}\\n            </td>\\n            <td class=\\"p-2\\">{event.title}</td>\\n            <td class=\\"p-2\\">\\n              <div class=\\"flex flex-wrap gap-2\\">\\n                {#each event.categories.sdgs as sdg}\\n                  <img \\n                    src=\\"/sdgs/sdg_icon_{sdg}.png\\" \\n                    alt=\\"SDG {sdg}\\"\\n                    class=\\"w-8 h-8 object-contain\\"\\n                  />\\n                {/each}\\n              </div>\\n            </td>\\n            <td class=\\"p-2\\">{event.metadata.organizer}</td>\\n            <td class=\\"p-2\\">\\n              <span class=\\"px-2 py-1 rounded-full text-sm\\"\\n                class:bg-[#28A745]={event.metadata.status === \\"配信中\\"}\\n                class:bg-[#FFC107]={event.metadata.status === \\"配信予定\\"}\\n                class:bg-[#DC3545]={event.metadata.status === \\"配信完了\\"}\\n                class:bg-[#17A2B8]={event.metadata.status === \\"未配信\\"}\\n                class:text-white={true}>\\n                {event.metadata.status}\\n              </span>\\n            </td>\\n            <td class=\\"p-2\\">\\n              <div class=\\"flex justify-end space-x-2\\">\\n                <button \\n                  class=\\"flex items-center border border-[#3AAFA9] text-[#3AAFA9] hover:bg-[#3AAFA9] hover:text-white px-3 py-1 rounded-lg text-sm\\"\\n                  on:click={() => handleEdit(event.metadata.createdAt)}\\n                >\\n                  <Edit2 class=\\"w-4 h-4 mr-1\\" />\\n                  編集\\n                </button>\\n                <button \\n                  class=\\"flex items-center border border-[#3AAFA9] text-[#3AAFA9] hover:bg-[#3AAFA9] hover:text-white px-3 py-1 rounded-lg text-sm\\"\\n                  on:click={() => handleDuplicate(event)}\\n                >\\n                  <Copy class=\\"w-4 h-4 mr-1\\" />\\n                  複製\\n                </button>\\n                <button \\n                  class=\\"flex items-center border border-[#3AAFA9] text-[#3AAFA9] hover:bg-[#3AAFA9] hover:text-white px-3 py-1 rounded-lg text-sm\\"\\n                  on:click={(e) => handleView(event, e)}\\n                >\\n                  <Eye class=\\"w-4 h-4 mr-1\\" />\\n                  表示\\n                </button>\\n              </div>\\n            </td>\\n          </tr>\\n        {/each}\\n      </tbody>\\n    </table>\\n  </div>\\n\\n  <div class=\\"mt-6 flex justify-end\\">\\n    <button \\n      on:click={handleCreateNew}\\n      class=\\"bg-[#FF6B6B] text-white hover:bg-[#FF8080] active:bg-[#E66060] px-4 py-2 rounded-lg\\"\\n    >\\n      新規作成\\n    </button>\\n  </div>\\n</div>\\n\\n<!-- 参加者一覧ポップオーバー -->\\n{#if showParticipants && selectedEvent}\\n  <button\\n    class=\\"fixed inset-0 w-full h-full bg-black bg-opacity-50 cursor-default\\"\\n    on:click={closePopover}\\n    on:keydown={handleKeyDown}\\n    aria-label=\\"ポップオーバーを閉じる\\"\\n  />\\n\\n  <div\\n    class=\\"participants-popover fixed bg-white rounded-lg shadow-xl p-6\\"\\n    style=\\"top: {popoverPosition.y}px; left: {popoverPosition.x}px;\\"\\n    role=\\"dialog\\"\\n    aria-label=\\"参加者一覧\\"\\n  >\\n    <div class=\\"popover-content\\">\\n      <div class=\\"flex justify-between items-center mb-4\\">\\n        <h3 class=\\"text-lg font-semibold\\">参加者一覧</h3>\\n        <button \\n          class=\\"text-gray-500 hover:text-gray-700\\"\\n          on:click={closePopover}\\n          aria-label=\\"閉じる\\"\\n        >\\n          <X class=\\"w-5 h-5\\" />\\n        </button>\\n      </div>\\n      \\n      <div class=\\"flex flex-wrap gap-3\\">\\n        {#each getEventParticipants(selectedEvent.metadata.createdAt) as participant}\\n          <div class=\\"flex flex-col items-center\\">\\n            <button\\n              class=\\"w-12 h-12 rounded-full border-2 border-[#3AAFA9] bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#3AAFA9] hover:text-white transition-colors duration-200\\"\\n              on:click={() => handleUserClick(participant.id)}\\n              role=\\"link\\"\\n              aria-label={`${participant.name}の活動履歴を見る`}\\n              title={participant.name}\\n            >\\n              {participant.icon}\\n            </button>\\n          </div>\\n        {/each}\\n      </div>\\n\\n      <div class=\\"mt-4 pt-4 border-t\\">\\n        <div class=\\"flex justify-between text-sm text-gray-600\\">\\n          <span>\\n            現在の参加者数: {getEventParticipants(selectedEvent.metadata.createdAt).length}名\\n          </span>\\n          <span>募集人数: {selectedEvent.schedule.participantLimit}名</span>\\n        </div>\\n        <div class=\\"mt-2 w-full bg-gray-200 rounded-full h-2\\">\\n          <div \\n            class=\\"bg-[#3AAFA9] h-2 rounded-full\\"\\n            style=\\"width: {(getEventParticipants(selectedEvent.metadata.createdAt).length / selectedEvent.schedule.participantLimit) * 100}%\\"\\n            role=\\"progressbar\\"\\n            aria-valuenow={getEventParticipants(selectedEvent.metadata.createdAt).length}\\n            aria-valuemin=\\"0\\"\\n            aria-valuemax={selectedEvent.schedule.participantLimit}\\n          ></div>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n{/if}\\n\\n<!-- 位置調整: ここを修正 -->\\n<style>\\n  .participants-popover {\\n    width: 400px;\\n    max-width: calc(100vw - 40px);\\n    position: fixed;\\n    z-index: 50;\\n  }\\n\\n  button[aria-label=\\"ポップオーバーを閉じる\\"] {\\n    z-index: 40;\\n  }\\n</style>"],"names":[],"mappings":"AAuRE,oCAAsB,CACpB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,CAC7B,QAAQ,CAAE,KAAK,CACf,OAAO,CAAE,EACX,CAEA,MAAM,CAAC,UAAU,CAAC,aAAa,gBAAE,CAC/B,OAAO,CAAE,EACX"}'
};
const Event_management = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let events;
  let $eventStore, $$unsubscribe_eventStore;
  $$unsubscribe_eventStore = subscribe(eventStore, (value) => $eventStore = value);
  const formatDates = (schedule) => {
    if (!schedule) return [];
    const dates = [];
    if (schedule.startDate) dates.push(schedule.startDate);
    if (schedule.endDate && schedule.endDate !== schedule.startDate) {
      dates.push(schedule.endDate);
    }
    return dates;
  };
  $$result.css.add(css);
  events = $eventStore;
  $$unsubscribe_eventStore();
  return ` <div class="bg-white rounded-lg shadow-md p-6"><h2 class="text-xl font-bold mb-4" data-svelte-h="svelte-1deokd7">イベント管理</h2>  <div class="flex justify-between mb-4"><div class="relative"><button class="border border-[#3AAFA9] text-[#3AAFA9] px-4 py-2 rounded-lg flex items-center">絞り込み
        ${validate_component(Chevron_down, "ChevronDown").$$render($$result, { class: "ml-2 h-4 w-4" }, {}, {})}</button></div> <div class="relative"><button class="border border-[#3AAFA9] text-[#3AAFA9] px-4 py-2 rounded-lg flex items-center">並び替え
        ${validate_component(Chevron_down, "ChevronDown").$$render($$result, { class: "ml-2 h-4 w-4" }, {}, {})}</button></div></div> <div class="overflow-x-auto"><table class="w-full"><thead data-svelte-h="svelte-1s47b6"><tr class="border-b"><th class="text-left p-2">開催日</th> <th class="text-left p-2">タイトル</th> <th class="text-left p-2">ジャンル（SDGs）</th> <th class="text-left p-2">配信者</th> <th class="text-left p-2">イベント表示</th> <th class="text-right p-2">アクション</th></tr></thead> <tbody>${each(events, (event) => {
    return `<tr class="border-b"><td class="p-2">${each(formatDates(event.schedule), (date) => {
      return `<div>${escape(date)}</div>`;
    })}</td> <td class="p-2">${escape(event.title)}</td> <td class="p-2"><div class="flex flex-wrap gap-2">${each(event.categories.sdgs, (sdg) => {
      return `<img src="${"/sdgs/sdg_icon_" + escape(sdg, true) + ".png"}" alt="${"SDG " + escape(sdg, true)}" class="w-8 h-8 object-contain">`;
    })} </div></td> <td class="p-2">${escape(event.metadata.organizer)}</td> <td class="p-2"><span class="${[
      "px-2 py-1 rounded-full text-sm",
      (event.metadata.status === "配信中" ? "bg-[#28A745]" : "") + " " + (event.metadata.status === "配信予定" ? "bg-[#FFC107]" : "") + " " + (event.metadata.status === "配信完了" ? "bg-[#DC3545]" : "") + " " + (event.metadata.status === "未配信" ? "bg-[#17A2B8]" : "") + " text-white"
    ].join(" ").trim()}">${escape(event.metadata.status)} </span></td> <td class="p-2"><div class="flex justify-end space-x-2"><button class="flex items-center border border-[#3AAFA9] text-[#3AAFA9] hover:bg-[#3AAFA9] hover:text-white px-3 py-1 rounded-lg text-sm">${validate_component(Pen, "Edit2").$$render($$result, { class: "w-4 h-4 mr-1" }, {}, {})}
                  編集</button> <button class="flex items-center border border-[#3AAFA9] text-[#3AAFA9] hover:bg-[#3AAFA9] hover:text-white px-3 py-1 rounded-lg text-sm">${validate_component(Copy, "Copy").$$render($$result, { class: "w-4 h-4 mr-1" }, {}, {})}
                  複製</button> <button class="flex items-center border border-[#3AAFA9] text-[#3AAFA9] hover:bg-[#3AAFA9] hover:text-white px-3 py-1 rounded-lg text-sm">${validate_component(Eye, "Eye").$$render($$result, { class: "w-4 h-4 mr-1" }, {}, {})}
                  表示</button> </div></td> </tr>`;
  })}</tbody></table></div> <div class="mt-6 flex justify-end"><button class="bg-[#FF6B6B] text-white hover:bg-[#FF8080] active:bg-[#E66060] px-4 py-2 rounded-lg" data-svelte-h="svelte-aa4w73">新規作成</button></div></div>  ${``} `;
});
const Notifications = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="bg-white rounded-lg shadow-sm mb-8 p-6"><h2 class="text-xl font-bold mb-4" data-svelte-h="svelte-n8l7al">通知</h2> <div class="border-l-4 border-l-[#FF6B6B] p-4 bg-white shadow-sm rounded mb-4"><div class="flex items-center">${validate_component(Bell, "Bell").$$render($$result, { class: "h-4 w-4 text-[#FF6B6B] mr-2" }, {}, {})} <h3 class="font-semibold text-[#FF6B6B]" data-svelte-h="svelte-nq8nrh">新しいメッセージ</h3></div> <p class="mt-1 text-gray-600" data-svelte-h="svelte-13jiobu">新しいメッセージが3件あります。確認してください。</p></div> <div class="border-l-4 border-l-[#28A745] p-4 bg-white shadow-sm rounded mb-4"><div class="flex items-center">${validate_component(File_question, "FileQuestion").$$render($$result, { class: "h-4 w-4 text-[#28A745] mr-2" }, {}, {})} <h3 class="font-semibold text-[#28A745]" data-svelte-h="svelte-145wjqc">アンケートのお願い</h3></div> <p class="mt-1 text-gray-600" data-svelte-h="svelte-1ov4upc">活動終了しました。参加者はリンクからAVS 活動アンケートを提出してください。</p> <button class="mt-2 text-[#3AAFA9] hover:text-[#2B7A78] font-medium underline" data-svelte-h="svelte-1bh40dx">アンケートに回答する</button></div> <div class="border-l-4 p-4 bg-white shadow-sm rounded mb-4"><div class="flex items-center">${validate_component(Briefcase, "Briefcase").$$render($$result, { class: "h-4 h-4 mr-2" }, {}, {})} <h3 class="font-semibold" data-svelte-h="svelte-1hntcke">イベント更新</h3></div> <p class="mt-1 text-gray-600" data-svelte-h="svelte-8jqzjz">参加予定のイベント情報が更新されました。</p></div></div>`;
});
const Profile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userRole, $$unsubscribe_userRole;
  $$unsubscribe_userRole = subscribe(userRole, (value) => $userRole = value);
  $$unsubscribe_userRole();
  return `<div class="bg-white rounded-lg shadow-sm mb-8 p-6"><h2 class="text-xl font-bold mb-4" data-svelte-h="svelte-1peg5hp">プロフィール</h2> <div class="flex items-center space-x-4 mb-4">${validate_component(Circle_user, "UserCircle").$$render($$result, { class: "w-16 h-16 text-[#3AAFA9]" }, {}, {})} <div><h2 class="text-xl font-semibold" data-svelte-h="svelte-e89q87">山田 太郎</h2> <p class="text-gray-600" data-svelte-h="svelte-r1bq31">yamada@example.com</p> <p class="text-sm text-gray-500">${$userRole === "contractor" ? `契約者` : `${$userRole === "organization" ? `募集団体` : `エンドユーザー`}`}</p></div></div> <div class="flex space-x-2"><button class="flex-1 flex items-center justify-center px-4 py-2 border rounded-lg hover:bg-[#3AAFA9] hover:text-white">${validate_component(Square_pen, "Edit").$$render($$result, { class: "w-4 h-4 mr-2" }, {}, {})}
      プロフィール編集</button> <button class="flex-1 flex items-center justify-center px-4 py-2 border rounded-lg hover:bg-[#3AAFA9] hover:text-white">${validate_component(Settings, "Settings").$$render($$result, { class: "w-4 h-4 mr-2" }, {}, {})}
      設定</button></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let events;
  let $eventStore, $$unsubscribe_eventStore;
  let $userRole, $$unsubscribe_userRole;
  $$unsubscribe_eventStore = subscribe(eventStore, (value) => $eventStore = value);
  $$unsubscribe_userRole = subscribe(userRole, (value) => $userRole = value);
  const getStatusDisplay = (status) => {
    switch (status) {
      case "配信完了":
        return { text: "参加完了", class: "bg-[#28A745]" };
      case "配信中":
        return { text: "参加予定", class: "bg-[#FF6B6B]" };
      case "配信予定":
        return { text: "参加予定", class: "bg-[#FF6B6B]" };
      default:
        return { text: "募集中", class: "bg-[#FFC107]" };
    }
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(
      "ja-JP",
      {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }
    ).format(date);
  };
  events = $eventStore;
  {
    console.log("ホームページでのイベント一覧:", events);
  }
  $$unsubscribe_eventStore();
  $$unsubscribe_userRole();
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="relative min-h-screen overflow-hidden bg-white">${validate_component(Background, "Background").$$render($$result, {}, {}, {})}  <main class="relative container mx-auto mt-8 px-4"><div class="flex justify-between items-center mb-6"><h1 class="text-3xl font-bold" data-svelte-h="svelte-948ws3">マイページ</h1> <select class="border rounded-lg px-4 py-2 bg-white"><option value="contractor" data-svelte-h="svelte-1dfooxt">契約者</option><option value="organization" data-svelte-h="svelte-195gp6i">募集団体</option><option value="enduser" data-svelte-h="svelte-mow874">エンドユーザー</option></select></div>  ${validate_component(Profile, "Profile").$$render($$result, {}, {}, {})} ${validate_component(Notifications, "Notifications").$$render($$result, {}, {}, {})}  ${$userRole === "contractor" ? `<div class="bg-white rounded-lg shadow-sm mb-8 p-6"><h2 class="text-xl font-bold mb-4" data-svelte-h="svelte-b86klb">所属団体/ユーザー</h2> <button class="w-full flex items-center justify-between px-4 py-2 border rounded-lg hover:bg-[#3AAFA9] hover:text-white">所属団体/ユーザー一覧
          ${validate_component(Chevron_right, "ChevronRight").$$render($$result, { class: "w-4 h-4" }, {}, {})}</button></div> <div class="mb-8">${validate_component(Event_management, "EventManagement").$$render($$result, {}, {}, {})}</div>` : ``}  ${$userRole === "organization" ? `<div class="mb-8">${validate_component(Event_management, "EventManagement").$$render($$result, {}, {}, {})}</div>` : ``}  ${$userRole === "enduser" ? `<div class="bg-white rounded-lg shadow-sm p-6"><h2 class="text-xl font-bold mb-4" data-svelte-h="svelte-r3bc0j">参加イベント一覧</h2> <div class="overflow-x-auto"><table class="w-full"><thead data-svelte-h="svelte-1qvxnhs"><tr class="border-b"><th class="text-left p-2">日付</th> <th class="text-left p-2">イベント名</th> <th class="text-left p-2">ステータス</th> <th class="text-left p-2">アクション</th></tr></thead> <tbody>${each(events, (event) => {
    let status = getStatusDisplay(event.metadata.status);
    return ` <tr class="border-b"><td class="p-2">${escape(formatDate(event.schedule.startDate))}</td> <td class="p-2">${escape(event.title)}</td> <td class="p-2"><span class="${escape(status.class, true) + " text-white px-2 py-1 rounded-full text-sm"}">${escape(status.text)} </span></td> <td class="p-2 space-x-2 flex"><button class="flex items-center px-3 py-1 border rounded hover:bg-[#3AAFA9] hover:text-white">${validate_component(Eye, "Eye").$$render($$result, { class: "w-4 h-4 mr-2" }, {}, {})}
                      詳細を見る</button> ${status.text === "参加予定" ? `<button class="flex items-center px-3 py-1 border rounded hover:bg-[#3AAFA9] hover:text-white">${validate_component(Clipboard_check, "ClipboardCheck").$$render($$result, { class: "w-4 h-4 mr-2" }, {}, {})}
                        参加記録
                      </button>` : ``}</td> </tr>`;
  })}</tbody></table></div></div>` : ``}</main></div>`;
});
export {
  Page as default
};
