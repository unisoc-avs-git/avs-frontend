<script>
  import { goto } from '$app/navigation';
  import { userRole } from '$lib/stores/user';
  import { Edit, Settings, UserCircle } from 'lucide-svelte';

  function handleEditClick() {
    goto('/home/profile-edit'); // パスを修正
  }

</script>

<div class="bg-white rounded-lg shadow-sm mb-8 p-6">
  <h2 class="text-xl font-bold mb-4">プロフィール</h2>
  <div class="flex items-center space-x-4 mb-4">
    <UserCircle class="w-16 h-16 text-[#3AAFA9]" />
    <div>
      <h2 class="text-xl font-semibold">山田 太郎</h2>
      <p class="text-gray-600">yamada@example.com</p>
      <p class="text-sm text-gray-500">
        {#if $userRole === 'contractor'}
          契約者
        {:else if $userRole === 'organization'}
          募集団体
        {:else}
          エンドユーザー
        {/if}
      </p>
    </div>
  </div>
  <div class="flex space-x-2">
    <button 
      class="flex-1 flex items-center justify-center px-4 py-2 border rounded-lg hover:bg-[#3AAFA9] hover:text-white"
      on:click={handleEditClick}
    >
      <Edit class="w-4 h-4 mr-2" />
      プロフィール編集
    </button>
    <button 
      on:click={() => goto('/settings')}
      class="flex-1 flex items-center justify-center px-4 py-2 border rounded-lg hover:bg-[#3AAFA9] hover:text-white"
    >
      <Settings class="w-4 h-4 mr-2" />
      設定
    </button>
  </div>
</div>