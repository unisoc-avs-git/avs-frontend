<script>
    import Background from '$lib/components/common/background.svelte';
    import Navbar from '$lib/components/common/navbar.svelte';
    import SDGsIcon from '$lib/components/common/sdgsIcon.svelte';
    import { CalendarIcon } from "lucide-svelte";
    import { format } from "date-fns";
    import { goto } from '$app/navigation';
  
    let selectedDate = new Date();
    let gender = "male";
  
    const prefectures = ["静岡県", "愛知県", "東京都", "神奈川県"];
    const cities = {
      "静岡県": ["静岡市", "浜松市", "沼津市", "富士市"],
      "愛知県": ["名古屋市", "豊橋市", "岡崎市"],
      "東京都": ["新宿区", "渋谷区", "港区"],
      "神奈川県": ["横浜市", "川崎市", "相模原市"]
    };
  
    // SDGsゴール1-17の配列を作成
    const sdgsGoals = Array.from({ length: 17 }, (_, i) => i + 1);
    let selectedSDGs = new Set();
  
    let prefecture = "静岡県";
    let city = "浜松市";
  
    // イベント参加希望地域
    let areas = [
      { prefecture: "", city: "" },
      { prefecture: "", city: "" },
      { prefecture: "", city: "" }
    ];
  
    $: availableCities = areas.map(area => 
      area.prefecture ? cities[area.prefecture] : []
    );
  
    function toggleSDGs(goal) {
      if (selectedSDGs.has(goal)) {
        selectedSDGs.delete(goal);
      } else {
        selectedSDGs.add(goal);
      }
      selectedSDGs = selectedSDGs;
    }
  
    function handleSubmit() {
      console.log('プロフィール更新');
      goto('/home');
    }
  </script>
  
  <div class="min-h-screen relative overflow-hidden">
    <Background />
    
    <div class="relative z-10 flex flex-col min-h-screen">
      <Navbar />
  
      <main class="container mx-auto py-8 px-4">
        <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
          <div class="p-6">
            <h2 class="text-2xl font-bold text-center mb-6">プロフィール編集</h2>
  
            <form class="space-y-6" on:submit|preventDefault={handleSubmit}>
              <div class="space-y-2">
                <label for="nickname" class="block text-sm font-medium text-gray-700">
                  表示名（ニックネーム）
                </label>
                <input
                  type="text"
                  id="nickname"
                  class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3AAFA9]"
                  placeholder="ニックネーム"
                />
              </div>
  
              <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700">性別</label>
                <div class="flex space-x-4">
                  {#each ['male', 'female', 'other', 'no_answer'] as value}
                    <label class="flex items-center space-x-2">
                      <input
                        type="radio"
                        {value}
                        bind:group={gender}
                        class="text-[#3AAFA9] focus:ring-[#3AAFA9]"
                      />
                      <span>
                        {value === 'male' ? '男性' :
                         value === 'female' ? '女性' :
                         value === 'other' ? 'その他' : '回答しない'}
                      </span>
                    </label>
                  {/each}
                </div>
              </div>
  
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label class="block text-sm font-medium text-gray-700">
                    居住地（都道府県）
                  </label>
                  <select
                    bind:value={prefecture}
                    class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3AAFA9]"
                  >
                    <option value="">都道府県を選択</option>
                    {#each prefectures as pref}
                      <option value={pref}>{pref}</option>
                    {/each}
                  </select>
                </div>
                <div class="space-y-2">
                  <label class="block text-sm font-medium text-gray-700">
                    居住地（市区町村）
                  </label>
                  <select
                    bind:value={city}
                    class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3AAFA9]"
                  >
                    <option value="">市区町村を選択</option>
                    {#each cities[prefecture] || [] as c}
                      <option value={c}>{c}</option>
                    {/each}
                  </select>
                </div>
              </div>
  
              <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700">生年月日</label>
                <div class="relative">
                  <input
                    type="date"
                    bind:value={selectedDate}
                    class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3AAFA9]"
                  />
                </div>
              </div>
  
              <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700">職業</label>
                <input
                  type="text"
                  class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3AAFA9]"
                  placeholder="職業"
                />
              </div>
  
              {#each [1, 2, 3] as num}
                <div class="space-y-2">
                  <label class="block text-sm font-medium text-gray-700">
                    保持スキル{num}
                  </label>
                  <input
                    type="text"
                    class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3AAFA9]"
                    placeholder={`スキル${num}`}
                  />
                </div>
              {/each}
  
              <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700">
                  イベント参加希望地域（3個まで）
                </label>
                <div class="space-y-4">
                  {#each areas as area, i}
                    <div class="grid grid-cols-2 gap-4">
                      <select
                        bind:value={area.prefecture}
                        class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3AAFA9]"
                      >
                        <option value="">地域{i + 1}の都道府県を選択</option>
                        {#each prefectures as pref}
                          <option value={pref}>{pref}</option>
                        {/each}
                      </select>
                      <select
                        bind:value={area.city}
                        class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3AAFA9]"
                        disabled={!area.prefecture}
                      >
                        <option value="">市区町村を選択</option>
                        {#each availableCities[i] || [] as c}
                          <option value={c}>{c}</option>
                        {/each}
                      </select>
                    </div>
                  {/each}
                </div>
              </div>
  
              <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700">参加希望ジャンル</label>
                <div class="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-2">
                  {#each sdgsGoals as goal}
                    <div 
                      class="relative cursor-pointer transition-transform hover:scale-110 w-fit"
                      on:click={() => toggleSDGs(goal)}
                      on:keydown={(e) => e.key === 'Enter' && toggleSDGs(goal)}
                      role="button"
                      tabindex="0"
                    >
                      <SDGsIcon 
                        {goal}
                        size={56}
                      />
                      {#if selectedSDGs.has(goal)}
                        <div class="absolute inset-0 rounded bg-[#3AAFA9]/10 ring-2 ring-[#3AAFA9] ring-inset"></div>
                      {/if}
                    </div>
                  {/each}
                </div>
              </div>
  
              <div class="flex justify-between pt-6">
                <button
                  type="button"
                  class="px-6 py-2 text-gray-600 hover:text-gray-900 border rounded"
                  on:click={() => goto('/home')}
                >
                  キャンセル
                </button>
                <button
                  type="submit"
                  class="px-6 py-2 bg-[#3AAFA9] text-white rounded hover:bg-[#2B7A78]"
                >
                  保存
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  </div>
  
  <style>
    input[type="radio"] {
      accent-color: #3AAFA9;
    }
    
    select {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
      background-position: right 0.5rem center;
      background-repeat: no-repeat;
      background-size: 1.5em 1.5em;
      padding-right: 2.5rem;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
  </style>