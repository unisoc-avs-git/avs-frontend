<script>
  import { goto } from '$app/navigation';
  import Background from '$lib/components/common/background.svelte';
  import Navbar from '$lib/components/common/navbar.svelte';
  import EventManagement from '$lib/components/home/event-management.svelte';
  import Notifications from '$lib/components/home/notifications.svelte';
  import Profile from '$lib/components/home/profile.svelte';
  import { eventStore } from '$lib/data/events';
  import { userRole } from '$lib/stores/user';
  import { ChevronRight, ClipboardCheck, Eye } from 'lucide-svelte';

  // ストアの購読
  $: events = $eventStore;
  $: console.log('ホームページでのイベント一覧:', events);

  // ステータス表示の決定
  const getStatusDisplay = (status) => {
    switch (status) {
      case '配信完了':
        return { text: '参加完了', class: 'bg-[#28A745]' };
      case '配信中':
        return { text: '参加予定', class: 'bg-[#FF6B6B]' };
      case '配信予定':
        return { text: '参加予定', class: 'bg-[#FF6B6B]' };
      default:
        return { text: '募集中', class: 'bg-[#FFC107]' };
    }
  };

  // イベント参加記録ページへの遷移
  const handleAttendanceRecord = () => {
    goto('/attendance');
  };

  // イベント詳細ページへの遷移
  const handleViewDetail = (event) => {
    goto(`/event-list/${event.metadata.createdAt}`);
  };

  // 日付フォーマット
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(date);
  };
</script>

<Navbar />
<div class="relative min-h-screen overflow-hidden bg-white">
  <Background />
  <!-- メインコンテンツ -->
  <main class="relative container mx-auto mt-8 px-4">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold">マイページ</h1>
      <select 
        bind:value={$userRole}
        class="border rounded-lg px-4 py-2 bg-white"
      >
        <option value="contractor">契約者</option>
        <option value="organization">募集団体</option>
        <option value="enduser">エンドユーザー</option>
      </select>
    </div>

    <!-- 共通セクション -->
    <Profile />
    <Notifications />

    <!-- 契約者向けコンテンツ -->
    {#if $userRole === 'contractor'}
      <div class="bg-white rounded-lg shadow-sm mb-8 p-6">
        <h2 class="text-xl font-bold mb-4">所属団体/ユーザー</h2>
        <button class="w-full flex items-center justify-between px-4 py-2 border rounded-lg hover:bg-[#3AAFA9] hover:text-white">
          所属団体/ユーザー一覧
          <ChevronRight class="w-4 h-4" />
        </button>
      </div>
      <div class="mb-8">
        <EventManagement />
      </div>
    {/if}

    <!-- 募集団体向けコンテンツ -->
    {#if $userRole === 'organization'}
      <div class="mb-8">
        <EventManagement />
      </div>
    {/if}

    <!-- エンドユーザー向けコンテンツ -->
    {#if $userRole === 'enduser'}
      <div class="bg-white rounded-lg shadow-sm p-6">
        <h2 class="text-xl font-bold mb-4">参加イベント一覧</h2>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b">
                <th class="text-left p-2">日付</th>
                <th class="text-left p-2">イベント名</th>
                <th class="text-left p-2">ステータス</th>
                <th class="text-left p-2">アクション</th>
              </tr>
            </thead>
            <tbody>
              {#each events as event}
                {@const status = getStatusDisplay(event.metadata.status)}
                <tr class="border-b">
                  <td class="p-2">{formatDate(event.schedule.startDate)}</td>
                  <td class="p-2">{event.title}</td>
                  <td class="p-2">
                    <span class="{status.class} text-white px-2 py-1 rounded-full text-sm">
                      {status.text}
                    </span>
                  </td>
                  <td class="p-2 space-x-2 flex">
                    <button 
                      class="flex items-center px-3 py-1 border rounded hover:bg-[#3AAFA9] hover:text-white"
                      on:click={() => handleViewDetail(event)}
                    >
                      <Eye class="w-4 h-4 mr-2" />
                      詳細を見る
                    </button>
                    {#if status.text === '参加予定'}
                      <button 
                        class="flex items-center px-3 py-1 border rounded hover:bg-[#3AAFA9] hover:text-white"
                        on:click={handleAttendanceRecord}
                      >
                        <ClipboardCheck class="w-4 h-4 mr-2" />
                        参加記録
                      </button>
                    {/if}
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    {/if}
  </main>
</div>