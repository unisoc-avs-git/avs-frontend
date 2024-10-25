<script>
  import Background from '$lib/components/common/background.svelte';
  import Navbar from '$lib/components/common/navbar.svelte';
  import { userRole } from '$lib/stores/user';
  import { ChevronLeft, Settings as SettingsIcon } from 'lucide-svelte';
  import { onMount } from 'svelte';

  // ダイアログの状態管理
  let isNotificationDialogOpen = false;
  let isReminderDialogOpen = false;
  let isProfileDialogOpen = false;
  let currentRole;

  onMount(() => {
    // ローカルストレージから初期値を取得
    if (typeof window !== 'undefined') {
      currentRole = localStorage.getItem('userRole') || 'enduser';
      userRole.set(currentRole);
    }
  });

  // userRoleストアの値が変更されたときの処理
  userRole.subscribe(value => {
    currentRole = value;
    if (typeof window !== 'undefined') {
      localStorage.setItem('userRole', value);
    }
  });

  // ロール変更時の処理
  function handleRoleChange(event) {
    const newRole = event.target.value;
    userRole.set(newRole);
  }
</script>

<div class="min-h-screen relative overflow-hidden">
  <Background />
  
  <div class="min-h-screen relative">
    <Navbar />

    <!-- メインコンテンツ -->
    <main class="container mx-auto mt-8 px-4 lg:px-8">
      <div class="flex justify-between items-center mb-6">
        <div class="flex items-center space-x-4">
          <a href="/home" class="text-[#3AAFA9] hover:text-[#2B7A78]">
            <ChevronLeft class="w-6 h-6" />
          </a>
          <h1 class="text-3xl font-bold text-[#4A4A4A]">設定</h1>
        </div>
        <select 
          value={currentRole}
          on:change={handleRoleChange}
          class="w-[180px] px-3 py-2 border rounded-lg bg-white text-[#4A4A4A]"
        >
          <option value="contractor">契約者</option>
          <option value="organization">募集団体</option>
          <option value="enduser">エンドユーザー</option>
        </select>
      </div>

      <div class="bg-white rounded-lg shadow-md mb-8">
        <div class="p-6">
          <h2 class="text-xl font-bold text-[#4A4A4A]">アカウント設定</h2>
          <p class="text-[#777777] mt-1 mb-4">アカウントに関する基本的な設定を行います。</p>
          <div class="space-y-4">
            {#if currentRole === 'contractor'}
              <!-- 契約者向け設定 -->
              <button
                on:click={() => isNotificationDialogOpen = true}
                class="w-full flex items-center px-4 py-2 border rounded-lg hover:bg-[#3AAFA9] hover:text-white"
              >
                <SettingsIcon class="w-4 h-4 mr-2" />
                情報配信条件設定
              </button>
              <button
                on:click={() => isReminderDialogOpen = true}
                class="w-full flex items-center px-4 py-2 border rounded-lg hover:bg-[#3AAFA9] hover:text-white"
              >
                <SettingsIcon class="w-4 h-4 mr-2" />
                催促タイミング設定
              </button>
            {:else if currentRole === 'organization'}
              <!-- 募集団体向け設定 -->
              <button
                on:click={() => isNotificationDialogOpen = true}
                class="w-full flex items-center px-4 py-2 border rounded-lg hover:bg-[#3AAFA9] hover:text-white"
              >
                <SettingsIcon class="w-4 h-4 mr-2" />
                情報配信条件設定
              </button>
              <button
                on:click={() => isReminderDialogOpen = true}
                class="w-full flex items-center px-4 py-2 border rounded-lg hover:bg-[#3AAFA9] hover:text-white"
              >
                <SettingsIcon class="w-4 h-4 mr-2" />
                通知タイミング設定
              </button>
            {:else}
              <!-- エンドユーザー向け設定 -->
              <button
                on:click={() => isProfileDialogOpen = true}
                class="w-full flex items-center px-4 py-2 border rounded-lg hover:bg-[#3AAFA9] hover:text-white"
              >
                <SettingsIcon class="w-4 h-4 mr-2" />
                プロフィール公開設定
              </button>
            {/if}
          </div>
        </div>
      </div>
    </main>
  </div>
</div>

<!-- ダイアログ：情報配信条件設定 (契約者・募集団体) -->
{#if isNotificationDialogOpen}
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div class="bg-white rounded-lg max-w-md w-full p-6">
      <h2 class="text-lg font-semibold mb-4">情報配信条件設定</h2>
      <p class="text-[#777777] mb-4">情報配信の条件を設定します。</p>
      <div class="space-y-4">
        {#if currentRole === 'contractor'}
          <div class="flex items-center justify-between">
            <label for="email-notifications">メール通知</label>
            <input type="checkbox" id="email-notifications" class="toggle" />
          </div>
          <div class="flex items-center justify-between">
            <label for="push-notifications">プッシュ通知</label>
            <input type="checkbox" id="push-notifications" class="toggle" />
          </div>
        {:else}
          <div class="flex items-center justify-between">
            <label for="event-updates">イベント更新通知</label>
            <input type="checkbox" id="event-updates" class="toggle" />
          </div>
          <div class="flex items-center justify-between">
            <label for="volunteer-applications">ボランティア応募通知</label>
            <input type="checkbox" id="volunteer-applications" class="toggle" />
          </div>
        {/if}
      </div>
      <div class="mt-6 flex justify-end">
        <button
          on:click={() => isNotificationDialogOpen = false}
          class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-[#4A4A4A]"
        >
          閉じる
        </button>
      </div>
    </div>
  </div>
{/if}

<!-- ダイアログ：タイミング設定 (契約者・募集団体) -->
{#if isReminderDialogOpen}
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div class="bg-white rounded-lg max-w-md w-full p-6">
      <h2 class="text-lg font-semibold mb-4">
        {currentRole === 'contractor' ? '催促タイミング設定' : '通知タイミング設定'}
      </h2>
      <p class="text-[#777777] mb-4">
        {currentRole === 'contractor' ? '催促のタイミングを設定します。' : '通知のタイミングを設定します。'}
      </p>
      <div class="space-y-4">
        {#if currentRole === 'contractor'}
          <div class="flex items-center justify-between">
            <label for="reminder-1-day">1日前</label>
            <input type="checkbox" id="reminder-1-day" class="toggle" />
          </div>
          <div class="flex items-center justify-between">
            <label for="reminder-3-days">3日前</label>
            <input type="checkbox" id="reminder-3-days" class="toggle" />
          </div>
          <div class="flex items-center justify-between">
            <label for="reminder-1-week">1週間前</label>
            <input type="checkbox" id="reminder-1-week" class="toggle" />
          </div>
        {:else}
          <div class="flex items-center justify-between">
            <label for="notify-immediately">即時</label>
            <input type="checkbox" id="notify-immediately" class="toggle" />
          </div>
          <div class="flex items-center justify-between">
            <label for="notify-daily">1日1回</label>
            <input type="checkbox" id="notify-daily" class="toggle" />
          </div>
          <div class="flex items-center justify-between">
            <label for="notify-weekly">週1回</label>
            <input type="checkbox" id="notify-weekly" class="toggle" />
          </div>
        {/if}
      </div>
      <div class="mt-6 flex justify-end">
        <button
          on:click={() => isReminderDialogOpen = false}
          class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-[#4A4A4A]"
        >
          閉じる
        </button>
      </div>
    </div>
  </div>
{/if}

<!-- ダイアログ：プロフィール公開設定 (エンドユーザー) -->
{#if isProfileDialogOpen}
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div class="bg-white rounded-lg max-w-md w-full p-6">
      <h2 class="text-lg font-semibold mb-4">プロフィール公開設定</h2>
      <p class="text-[#777777] mb-4">プロフィールの公開範囲を設定します。</p>
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <label for="public-profile">プロフィールを公開</label>
          <input type="checkbox" id="public-profile" class="toggle" />
        </div>
        <div class="flex items-center justify-between">
          <label for="show-email">メールアドレスを表示</label>
          <input type="checkbox" id="show-email" class="toggle" />
        </div>
        <div class="flex items-center justify-between">
          <label for="show-activities">活動履歴を表示</label>
          <input type="checkbox" id="show-activities" class="toggle" />
        </div>
      </div>
      <div class="mt-6 flex justify-end">
        <button
          on:click={() => isProfileDialogOpen = false}
          class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-[#4A4A4A]"
        >
          閉じる
        </button>
      </div>
    </div>
  </div>
{/if}