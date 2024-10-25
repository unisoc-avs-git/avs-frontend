<script>
  import { goto } from '$app/navigation';
  import { eventStore } from '$lib/data/events.js';
  import { mockUsers, eventParticipants } from '$lib/data/user_data.js';
  import { ChevronDown, Edit2, Copy, Eye, X } from 'lucide-svelte';

  // ストアの購読
  $: events = $eventStore;

  // ポップオーバー用の状態
  let showParticipants = false;
  let selectedEvent = null;
  let popoverPosition = { x: 0, y: 0 };

  // イベント参加者のデータを取得する関数
  function getEventParticipants(eventCreatedAt) {
    const participantIds = eventParticipants[eventCreatedAt] || [];
    return participantIds.map(id => mockUsers.find(user => user.id === id));
  }

  // 新規作成ボタンのクリックハンドラー
  const handleCreateNew = () => {
    goto('/event');
  };

  // 編集ボタンのクリックハンドラー
  const handleEdit = (eventId) => {
    goto(`/event/${eventId}`);
  };

  // 表示ボタンのクリックハンドラー
  // 位置調整: ここを修正
  const handleView = (event, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const popoverWidth = 400; // ポップオーバーの幅
    const popoverHeight = 300; // おおよそのポップオーバーの高さ
    
    // 表示位置の計算
    let x = rect.left - 800;
    
    // 画面右端からはみ出る場合の調整
    if (x + popoverWidth > windowWidth) {
      x = windowWidth - popoverWidth - 20; // 20pxの余白
    }
    
    // 左端が負の値にならないように調整
    x = Math.max(20, x);
    
    // ボタンの上に表示するように位置調整
    const y = rect.top - popoverHeight - 500; // ボタンの10px上
    
    popoverPosition = {
      x,
      y: y + window.scrollY // スクロール位置を考慮
    };
    
    selectedEvent = event;
    showParticipants = true;
  };

  // ポップオーバーを閉じる
  const closePopover = () => {
    showParticipants = false;
    selectedEvent = null;
  };

  // キーボードイベントハンドラー
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && showParticipants) {
      closePopover();
    }
  };

  // 複製ボタンのクリックハンドラー
  const handleDuplicate = (event) => {
    const duplicateData = {
      ...event,
      title: `${event.title}（複製）`,
      metadata: {
        ...event.metadata,
        status: "未配信",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    };
    
    const queryParams = encodeURIComponent(JSON.stringify(duplicateData));
    goto(`/event?duplicate=${queryParams}`);
  };

  // 日付のフォーマット
  const formatDates = (schedule) => {
    if (!schedule) return [];
    const dates = [];
    if (schedule.startDate) dates.push(schedule.startDate);
    if (schedule.endDate && schedule.endDate !== schedule.startDate) {
      dates.push(schedule.endDate);
    }
    return dates;
  };

  // ユーザーアイコンクリック時の遷移処理
  const handleUserClick = (userId) => {
    goto(`/user/${userId}/history`);
  };
</script>

<svelte:window on:keydown={handleKeyDown} />

<div class="bg-white rounded-lg shadow-md p-6">
  <h2 class="text-xl font-bold mb-4">イベント管理</h2>
  <!-- 絞り込みと並び替え -->
  <div class="flex justify-between mb-4">
    <div class="relative">
      <button class="border border-[#3AAFA9] text-[#3AAFA9] px-4 py-2 rounded-lg flex items-center">
        絞り込み
        <ChevronDown class="ml-2 h-4 w-4" />
      </button>
    </div>
    <div class="relative">
      <button class="border border-[#3AAFA9] text-[#3AAFA9] px-4 py-2 rounded-lg flex items-center">
        並び替え
        <ChevronDown class="ml-2 h-4 w-4" />
      </button>
    </div>
  </div>

  <div class="overflow-x-auto">
    <table class="w-full">
      <thead>
        <tr class="border-b">
          <th class="text-left p-2">開催日</th>
          <th class="text-left p-2">タイトル</th>
          <th class="text-left p-2">ジャンル（SDGs）</th>
          <th class="text-left p-2">配信者</th>
          <th class="text-left p-2">イベント表示</th>
          <th class="text-right p-2">アクション</th>
        </tr>
      </thead>
      <tbody>
        {#each events as event}
          <tr class="border-b">
            <td class="p-2">
              {#each formatDates(event.schedule) as date}
                <div>{date}</div>
              {/each}
            </td>
            <td class="p-2">{event.title}</td>
            <td class="p-2">
              <div class="flex flex-wrap gap-2">
                {#each event.categories.sdgs as sdg}
                  <img 
                    src="/sdgs/sdg_icon_{sdg}.png" 
                    alt="SDG {sdg}"
                    class="w-8 h-8 object-contain"
                  />
                {/each}
              </div>
            </td>
            <td class="p-2">{event.metadata.organizer}</td>
            <td class="p-2">
              <span class="px-2 py-1 rounded-full text-sm"
                class:bg-[#28A745]={event.metadata.status === "配信中"}
                class:bg-[#FFC107]={event.metadata.status === "配信予定"}
                class:bg-[#DC3545]={event.metadata.status === "配信完了"}
                class:bg-[#17A2B8]={event.metadata.status === "未配信"}
                class:text-white={true}>
                {event.metadata.status}
              </span>
            </td>
            <td class="p-2">
              <div class="flex justify-end space-x-2">
                <button 
                  class="flex items-center border border-[#3AAFA9] text-[#3AAFA9] hover:bg-[#3AAFA9] hover:text-white px-3 py-1 rounded-lg text-sm"
                  on:click={() => handleEdit(event.metadata.createdAt)}
                >
                  <Edit2 class="w-4 h-4 mr-1" />
                  編集
                </button>
                <button 
                  class="flex items-center border border-[#3AAFA9] text-[#3AAFA9] hover:bg-[#3AAFA9] hover:text-white px-3 py-1 rounded-lg text-sm"
                  on:click={() => handleDuplicate(event)}
                >
                  <Copy class="w-4 h-4 mr-1" />
                  複製
                </button>
                <button 
                  class="flex items-center border border-[#3AAFA9] text-[#3AAFA9] hover:bg-[#3AAFA9] hover:text-white px-3 py-1 rounded-lg text-sm"
                  on:click={(e) => handleView(event, e)}
                >
                  <Eye class="w-4 h-4 mr-1" />
                  表示
                </button>
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <div class="mt-6 flex justify-end">
    <button 
      on:click={handleCreateNew}
      class="bg-[#FF6B6B] text-white hover:bg-[#FF8080] active:bg-[#E66060] px-4 py-2 rounded-lg"
    >
      新規作成
    </button>
  </div>
</div>

<!-- 参加者一覧ポップオーバー -->
{#if showParticipants && selectedEvent}
  <button
    class="fixed inset-0 w-full h-full bg-black bg-opacity-50 cursor-default"
    on:click={closePopover}
    on:keydown={handleKeyDown}
    aria-label="ポップオーバーを閉じる"
  />

  <div
    class="participants-popover fixed bg-white rounded-lg shadow-xl p-6"
    style="top: {popoverPosition.y}px; left: {popoverPosition.x}px;"
    role="dialog"
    aria-label="参加者一覧"
  >
    <div class="popover-content">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold">参加者一覧</h3>
        <button 
          class="text-gray-500 hover:text-gray-700"
          on:click={closePopover}
          aria-label="閉じる"
        >
          <X class="w-5 h-5" />
        </button>
      </div>
      
      <div class="flex flex-wrap gap-3">
        {#each getEventParticipants(selectedEvent.metadata.createdAt) as participant}
          <div class="flex flex-col items-center">
            <button
              class="w-12 h-12 rounded-full border-2 border-[#3AAFA9] bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#3AAFA9] hover:text-white transition-colors duration-200"
              on:click={() => handleUserClick(participant.id)}
              role="link"
              aria-label={`${participant.name}の活動履歴を見る`}
              title={participant.name}
            >
              {participant.icon}
            </button>
          </div>
        {/each}
      </div>

      <div class="mt-4 pt-4 border-t">
        <div class="flex justify-between text-sm text-gray-600">
          <span>
            現在の参加者数: {getEventParticipants(selectedEvent.metadata.createdAt).length}名
          </span>
          <span>募集人数: {selectedEvent.schedule.participantLimit}名</span>
        </div>
        <div class="mt-2 w-full bg-gray-200 rounded-full h-2">
          <div 
            class="bg-[#3AAFA9] h-2 rounded-full"
            style="width: {(getEventParticipants(selectedEvent.metadata.createdAt).length / selectedEvent.schedule.participantLimit) * 100}%"
            role="progressbar"
            aria-valuenow={getEventParticipants(selectedEvent.metadata.createdAt).length}
            aria-valuemin="0"
            aria-valuemax={selectedEvent.schedule.participantLimit}
          ></div>
        </div>
      </div>
    </div>
  </div>
{/if}

<!-- 位置調整: ここを修正 -->
<style>
  .participants-popover {
    width: 400px;
    max-width: calc(100vw - 40px);
    position: fixed;
    z-index: 50;
  }

  button[aria-label="ポップオーバーを閉じる"] {
    z-index: 40;
  }
</style>