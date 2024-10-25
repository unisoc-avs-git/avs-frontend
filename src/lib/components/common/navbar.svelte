<!-- src/lib/components/common/navbar.svelte -->
<script>
  import { Bell, Briefcase, FileQuestion, Home, MessageSquare, Settings, UserCircle, Users } from 'lucide-svelte';
  import Dropdown from './dropdown.svelte';
  
  let isUserMenuOpen = false;
  let isNotificationMenuOpen = false;

  // クリックイベントのハンドラー
  function handleClickOutside(event) {
    if (isUserMenuOpen && !event.target.closest('.user-menu-container')) {
      isUserMenuOpen = false;
    }
    if (isNotificationMenuOpen && !event.target.closest('.notification-menu-container')) {
      isNotificationMenuOpen = false;
    }
  }
</script>

<svelte:window on:click={handleClickOutside}/>

<nav class="flex items-center justify-between p-4 bg-white border-b-4 border-[#3AAFA9] shadow-sm rounded-lg">
  <a href="/home" class="text-2xl font-bold text-[#3AAFA9]">AVS</a>
  <div class="flex items-center space-x-6">
    <a href="/home" class="flex flex-col items-center text-sm font-medium text-gray-600 hover:text-[#3AAFA9]">
      <Home class="w-5 h-5 mb-1 text-[#3AAFA9]" />
      ホーム
    </a>
    <a href="/event-list" class="flex flex-col items-center text-sm font-medium text-gray-600 hover:text-[#3AAFA9]">
      <Users class="w-5 h-5 mb-1 text-[#3AAFA9]" />
      イベント
    </a>
    <a href="/messages" class="flex flex-col items-center text-sm font-medium text-gray-600 hover:text-[#3AAFA9]">
      <MessageSquare class="w-5 h-5 mb-1 text-[#3AAFA9]" />
      メッセージ
    </a>
    <a href="/settings" class="flex flex-col items-center text-sm font-medium text-gray-600 hover:text-[#3AAFA9]">
      <Settings class="w-5 h-5 mb-1 text-[#3AAFA9]" />
      設定
    </a>
  </div>
  <div class="flex items-center space-x-4">    
    <Dropdown 
      isOpen={isNotificationMenuOpen} 
      containerClass="notification-menu-container"
      width="w-max"
    >
      <div slot="trigger">
        <button 
          class="text-[#3AAFA9] hover:bg-[#3AAFA9] hover:text-white relative p-2 rounded-lg"
          on:click={() => isNotificationMenuOpen = !isNotificationMenuOpen}
        >
          <Bell class="w-5 h-5" />
        </button>
        <span class="absolute top-0 right-0 bg-[#FF6B6B] text-white text-xs px-1.5 rounded-full">3</span>
      </div>
      <div class="border-l-4 border-l-[#FF6B6B] p-4 bg-white shadow-sm rounded mb-4">
        <div class="flex items-center">
          <Bell class="h-4 w-4 text-[#FF6B6B] mr-2" />
          <h3 class="font-semibold text-[#FF6B6B]">新しいメッセージ</h3>
        </div>
        <p class="mt-1 text-gray-600">新しいメッセージが3件あります。確認してください。</p>
      </div>
        <div class="border-l-4 border-l-[#28A745] p-4 bg-white shadow-sm rounded mb-4">
    <div class="flex items-center">
      <FileQuestion class="h-4 w-4 text-[#28A745] mr-2" />
      <h3 class="font-semibold text-[#28A745]">アンケートのお願い</h3>
    </div>
    <p class="mt-1 text-gray-600">活動終了しました。参加者はリンクからAVS 活動アンケートを提出してください。</p>
    <button 
      class="mt-2 text-[#3AAFA9] hover:text-[#2B7A78] font-medium underline"
    >
      アンケートに回答する
    </button>
  </div>
      <div class="border-l-4 p-4 bg-white shadow-sm rounded mb-4">
        <div class="flex items-center">
          <Briefcase class="h-4 h-4 mr-2" />
          <h3 class="font-semibold">イベント更新</h3>
        </div>
        <p class="mt-1 text-gray-600">参加予定のイベント情報が更新されました。</p>
      </div>
      <!-- <Notifications/> -->
      <!--
      <a 
        href="/messages" 
        class="block px-4 py-2 text-sm text-gray-700< hover:bg-gray-100 hover:text-[#3AAFA9]"
      >
        通知A
      </a>
      <a 
        href="/messages" 
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#3AAFA9]"
      >
        通知B
      </a>
      <a 
      href="/messages" 
      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#3AAFA9]"
      >
        通知C
      </a>
      -->
    </Dropdown>

    <Dropdown 
      isOpen={isUserMenuOpen} 
      containerClass="user-menu-container"
    >
      <div slot="trigger">
        <button 
          class="text-[#3AAFA9] hover:bg-[#3AAFA9] hover:text-white p-2 rounded-lg"
          on:click={() => isUserMenuOpen = !isUserMenuOpen}
        >
          <UserCircle class="w-5 h-5" />
        </button>
      </div>

      <a 
        href="/login" 
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#3AAFA9]"
      >
        ログイン
      </a>
      <a 
        href="/register" 
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#3AAFA9]"
      >
        新規登録
      </a>
    </Dropdown>
  </div>
</nav>