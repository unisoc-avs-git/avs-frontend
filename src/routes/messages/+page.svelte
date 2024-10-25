<script>
  import Background from '$lib/components/common/background.svelte';
  import Navbar from '$lib/components/common/navbar.svelte';
  import { conversations, messages } from '$lib/data/messages';
  import { Check, Send } from 'lucide-svelte';

  let selectedConversation = null;
</script>

<div class="relative min-h-screen overflow-hidden">
  <Background />
  
  <div class="relative z-10 flex flex-col min-h-screen">
    <Navbar />

    <div class="flex flex-1 overflow-hidden bg-white rounded-lg shadow-lg mx-16 my-4">
      <!-- サイドバー -->
      <div class="w-1/3 border-r border-gray-200 overflow-y-auto">
        <div class="p-4">
          <input
            type="search"
            placeholder="メッセージを検索"
            class="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div class="divide-y divide-gray-200">
          {#each conversations as conversation}
            <div
              class="p-4 cursor-pointer hover:bg-gray-100 {selectedConversation === conversation.id ? 'bg-gray-100' : ''}"
              on:click={() => selectedConversation = conversation.id}
            >
              <div class="flex items-center space-x-4">
                <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  {conversation.name === "匿名ユーザー" ? "?" : conversation.name[0]}
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate">
                    {conversation.name}
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    {conversation.lastMessage}
                  </p>
                </div>
                <div class="text-xs text-gray-400">{conversation.time}</div>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- メインエリア -->
      <div class="flex-1 flex flex-col">
        {#if selectedConversation}
          <!-- プロフィールエリア -->
          <div class="p-4 border-b border-gray-200 bg-white">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  {conversations[selectedConversation - 1].name === "匿名ユーザー" 
                    ? "?" 
                    : conversations[selectedConversation - 1].name[0]}
                </div>
                <div>
                  <h2 class="text-lg font-semibold text-gray-900">
                    {conversations[selectedConversation - 1].name}
                  </h2>
                  <p class="text-sm text-gray-500">
                    {conversations[selectedConversation - 1].approved ? "承認済み" : "未承認"}
                  </p>
                </div>
              </div>
              {#if !conversations[selectedConversation - 1].approved}
                <button class="flex items-center px-4 py-2 bg-[#3AAFA9] text-white rounded-lg hover:bg-opacity-90">
                  <Check class="w-4 h-4 mr-2" />
                  メッセージ承認を得る
                </button>
              {/if}
            </div>
          </div>

          <!-- メッセージエリア -->
          <div class="flex-1 overflow-y-auto p-4 space-y-4">
            {#each messages[selectedConversation] as message}
              <div
                class="flex {message.sender === 'あなた' ? 'justify-end' : 'justify-start'}"
              >
                <div
                  class="max-w-xs lg:max-w-md xl:max-w-lg px-4 py-2 rounded-lg {
                    message.sender === 'あなた'
                      ? 'bg-[#3AAFA9] text-white'
                      : 'bg-gray-200 text-gray-900'
                  }"
                >
                  <p class="text-sm font-medium mb-1">
                    {message.sender === 'あなた' ? 'あなた' : message.sender}
                  </p>
                  <p class="text-sm">{message.content}</p>
                  <p class="text-xs text-right mt-1 opacity-70">
                    {message.time}
                  </p>
                </div>
              </div>
            {/each}
          </div>

          <!-- メッセージ入力エリア -->
          <div class="p-4 border-t border-gray-200 bg-white">
            {#if !conversations[selectedConversation - 1].approved}
              <p class="text-sm text-yellow-600 mb-2">
                注意: 未承認ユーザーは1度に50文字までしか送信できません。
              </p>
            {/if}
            <form class="flex space-x-2">
              <input
                type="text"
                placeholder="メッセージを入力"
                class="flex-1 px-3 py-2 border rounded-lg"
                maxlength={conversations[selectedConversation - 1].approved ? undefined : 50}
              />
              <button
                type="submit"
                class="flex items-center px-4 py-2 bg-[#3AAFA9] text-white rounded-lg hover:bg-opacity-90"
              >
                <Send class="w-4 h-4 mr-2" />
                送信
              </button>
            </form>
          </div>
        {:else}
          <div class="flex-1 flex items-center justify-center text-gray-500">
            メッセージを選択してください
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>