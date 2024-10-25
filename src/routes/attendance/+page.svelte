<script>
    import Navbar from '$lib/components/common/navbar.svelte';
    import Background from '$lib/components/common/background.svelte';
    import { Bell, UserCircle } from 'lucide-svelte';
    import { goto } from '$app/navigation';
  
    const handleParticipate = () => {
      // 参加処理の実装
      console.log('参加記録');
    };
  
    const handleComplete = () => {
      // 終了処理の実装
      console.log('終了記録');
    };
  </script>
  
  <Navbar />
  <div class="relative min-h-screen overflow-hidden bg-[#F5F5F5]">
    <Background />
    <!-- メインコンテンツ -->
    <main class="relative container mx-auto mt-8 px-4">
      <div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 class="text-2xl font-bold text-center mb-6">イベント参加・終了 記録</h1>
        <div class="space-y-4">
          <button
            class="w-full bg-[#3AAFA9] hover:bg-[#2B7A78] text-white font-bold py-2 px-4 rounded transition-colors"
            on:click={handleParticipate}
          >
            参加する
          </button>
          <button
            class="w-full bg-[#FF6B6B] hover:bg-[#FF8080] text-white font-bold py-2 px-4 rounded transition-colors"
            on:click={handleComplete}
          >
            終了する
          </button>
        </div>
      </div>
    </main>
  </div>
  
  <style>
    /* トランジションのスタイル */
    button {
      transition: background-color 0.2s ease-in-out;
    }
  </style>