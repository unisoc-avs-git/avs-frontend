<script>
    import Background from '$lib/components/common/background.svelte';
    import Navbar from '$lib/components/common/navbar.svelte';
    import SdgsIcon from '$lib/components/common/sdgsIcon.svelte';
    import { MessageSquare, User, UserPlus } from 'lucide-svelte';
    
    // SDGsのデータ（ゴール番号と対応するVP値）
    const sdgsData = [
      { goal: 1, vp: 70 },
      { goal: 2, vp: 70 },
      { goal: 3, vp: 20 },
      { goal: 4, vp: 6 },
      { goal: 5, vp: 7 },
      { goal: 6, vp: 6 },
      { goal: 7, vp: 7 },
      { goal: "all", vp: 186 }
    ];
  </script>
  
  <Navbar />
  <div class="relative min-h-screen bg-[#F5F5F5]">
    <Background />
    <div class="relative container mx-auto flex items-center justify-center min-h-screen py-8">
      <div class="w-[300px] bg-white shadow-md rounded-lg overflow-hidden">
        <!-- ヘッダー部分 -->
        <div class="flex flex-col items-center space-y-2 bg-[#3AAFA9] text-white p-6">
          <div class="relative w-24 h-24">
            <div class="w-full h-full rounded-full border-4 border-white overflow-hidden bg-white flex items-center justify-center">
              <User class="w-16 h-16 text-[#3AAFA9]" />
            </div>
          </div>
          <h2 class="text-2xl font-bold">山田 太郎</h2>
          <p class="text-sm opacity-75">年齢：47歳</p>
        </div>
        
        <!-- コンテンツ部分 -->
        <div class="p-6">
          <div class="mb-4">
            <p class="text-sm text-[#4A4A4A] mb-2">職業：会社員</p>
            <p class="text-sm text-[#4A4A4A] mb-2">保持スキル：</p>
          </div>
          
          <!-- SDGsアイコンとVPポイントのグリッド -->
          <div class="grid grid-cols-4 gap-4 mb-4">
            {#each sdgsData as {goal, vp}}
              <div class="flex flex-col items-center">
                <SdgsIcon {goal} size={32} />
                <span class="text-xs mt-1 font-semibold">{vp} VP</span>
              </div>
            {/each}
          </div>
          
          <p class="text-sm text-[#4A4A4A] mb-2">参加：12回</p>
          <p class="text-sm text-[#4A4A4A]">総時間：18時間39分</p>
        </div>
        
        <!-- フッター部分 -->
        <div class="flex justify-between p-4 bg-gray-50">
          <button 
            class="flex-1 mr-2 border border-[#3AAFA9] text-[#3AAFA9] hover:bg-[#3AAFA9] hover:text-white px-4 py-2 rounded flex items-center justify-center"
          >
            <UserPlus class="w-4 h-4 mr-2" />
            友達を追加
          </button>
          <button 
            class="flex-1 border border-[#3AAFA9] text-[#3AAFA9] hover:bg-[#3AAFA9] hover:text-white px-4 py-2 rounded flex items-center justify-center"
          >
            <MessageSquare class="w-4 h-4 mr-2" />
            メッセージ
          </button>
        </div>
      </div>
    </div>
  </div>