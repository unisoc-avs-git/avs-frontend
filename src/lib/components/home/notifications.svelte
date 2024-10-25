<script>
  import { Bell, Briefcase, FileQuestion } from 'lucide-svelte';
  import { goto } from '$app/navigation';

  const handleSurveyClick = () => {
    goto('/report');
  };
</script>

<div class="bg-white rounded-lg shadow-sm mb-8 p-6">
  <h2 class="text-xl font-bold mb-4">通知</h2>
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
      on:click={handleSurveyClick}
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
</div>