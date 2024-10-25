<script>
  import { goto } from '$app/navigation';
  import Background from '$lib/components/common/background.svelte';
  import Datepicker from '$lib/components/common/datepicker.svelte';
  import Navbar from '$lib/components/common/navbar.svelte';
  import SDGsIcon from '$lib/components/common/SDGsIcon.svelte';
  import { eventStore } from '$lib/data/events.js';
  import { Building2, Calendar, Clock, LayoutGrid, Map, MapPin, Share2, Star, Users } from 'lucide-svelte';

  let selectedDate = null;
  let selectedLocation = "すべて";
  let selectedCategory = "すべて";
  let searchQuery = "";
  let viewMode = "card"; // "card" or "map"

  // Subscribe to event store
  let events = [];
  eventStore.subscribe(value => {
    events = value;
  });

  function handleDateSelect(event) {
    selectedDate = event.detail;
  }

  // 都道府県の一覧を取得（イベントデータから重複を除いて取得）
  $: locations = ["すべて", ...new Set(events.map(event => event.location.prefecture))];
  
  // カテゴリの一覧を取得（イベントデータから重複を除いて取得）
  $: categories = ["すべて", ...new Set(events.flatMap(event => event.categories.eventTypes))];

  // Handle share functionality
  function handleShare(event, e) {
    e.preventDefault();
    const shareUrl = `https://avs.com/event-list/${event.metadata.createdAt}`;
    const shareText = `${event.title}に参加します！一緒に参加しませんか？ ${shareUrl}`;
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: shareText,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareText);
      alert("共有用リンクがクリップボードにコピーされました。");
    }
  }

  // Navigate to detail page
  function goToDetail(event) {
    goto(`/event-list/${event.metadata.createdAt}`);
  }

  // フィルター関数
  $: filteredEvents = events.filter(event => {
    const matchesSearch = searchQuery === "" || 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesLocation = selectedLocation === "すべて" || 
      event.location.prefecture === selectedLocation;
      
    const matchesCategory = selectedCategory === "すべて" || 
      event.categories.eventTypes.includes(selectedCategory);
      
    const matchesDate = !selectedDate || 
      event.schedule.startDate === selectedDate;
      
    return matchesSearch && matchesLocation && matchesCategory && matchesDate;
  });
</script>

<div class="min-h-screen relative overflow-hidden">
  <Background />
  
  <div class="relative z-10 flex flex-col min-h-screen">
    <Navbar />

    <main class="container mx-auto p-4 relative z-10 pt-20">
      <!-- 検索機能 -->
      <div class="mb-4 space-y-4">
        <div class="flex justify-between items-center">
          <input
            type="text"
            bind:value={searchQuery}
            placeholder="イベントを検索..."
            class="w-full px-3 py-2 border rounded-lg mr-4"
          />
          <!-- ビュー切り替えボタン -->
          <div class="flex border rounded-lg overflow-hidden">
            <button
              class="px-4 py-2 flex items-center {viewMode === 'card' ? 'bg-[#3AAFA9] text-white' : 'bg-white hover:bg-gray-100'}"
              on:click={() => viewMode = 'card'}
            >
              <LayoutGrid class="w-5 h-5 mr-2" />
            </button>
            <button
              class="px-4 py-2 flex items-center {viewMode === 'map' ? 'bg-[#3AAFA9] text-white' : 'bg-white hover:bg-gray-100'}"
              on:click={() => viewMode = 'map'}
            >
              <Map class="w-5 h-5 mr-2" />
            </button>
          </div>
        </div>
        <div class="flex flex-wrap gap-4">
          <select
            bind:value={selectedLocation}
            class="w-[180px] px-3 py-2 border rounded-lg"
          >
            {#each locations as location}
              <option value={location}>{location}</option>
            {/each}
          </select>

          <select
            bind:value={selectedCategory}
            class="w-[180px] px-3 py-2 border rounded-lg"
          >
            {#each categories as category}
              <option value={category}>{category}</option>
            {/each}
          </select>

          <Datepicker selected={selectedDate} on:select={handleDateSelect} />
        </div>
      </div>

      <!-- イベントリスト表示切り替え -->
      {#if viewMode === 'card'}
        <!-- カード表示 -->
        <div class="grid gap-4 mb-4">
          {#each filteredEvents as event}
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="flex flex-col md:flex-row">
                <div class="md:w-1/3 p-4">
                  <img
                    src={event.image}
                    alt={event.title}
                    class="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div class="md:w-2/3">
                  <div class="p-4">
                    <h2 class="text-xl font-bold mb-2">{event.title}</h2>
                    <p class="text-gray-600 mb-4">{event.description}</p>

                    <div class="grid gap-4">
                      <div class="grid grid-cols-2 gap-4">
                        <div>
                          <div class="flex items-center mb-1">
                            <Calendar class="mr-2 h-5 w-5 text-[#3AAFA9]" />
                            <span class="font-semibold">実施日</span>
                          </div>
                          <p class="ml-7">{new Date(event.schedule.startDate).toLocaleDateString('ja-JP')}</p>
                        </div>
                        <div>
                          <div class="flex items-center mb-1">
                            <Clock class="mr-2 h-5 w-5 text-[#3AAFA9]" />
                            <span class="font-semibold">時間</span>
                          </div>
                          <p class="ml-7">{event.schedule.startTime} - {event.schedule.endTime}</p>
                        </div>
                        <div>
                          <div class="flex items-center mb-1">
                            <MapPin class="mr-2 h-5 w-5 text-[#3AAFA9]" />
                            <span class="font-semibold">場所</span>
                          </div>
                          <p class="ml-7">{event.location.prefecture} {event.location.city}</p>
                        </div>
                        <div>
                          <div class="flex items-center mb-1">
                            <Users class="mr-2 h-5 w-5 text-[#3AAFA9]" />
                            <span class="font-semibold">募集人数</span>
                          </div>
                          <p class="ml-7">{event.schedule.participantLimit}名</p>
                        </div>
                        <div>
                          <div class="flex items-center mb-1">
                            <Calendar class="mr-2 h-5 w-5 text-[#FF6B6B]" />
                            <span class="font-semibold text-[#FF6B6B]">応募締め切り</span>
                          </div>
                          <p class="ml-7 text-[#FF6B6B]">
                            {new Date(event.schedule.applicationDeadline).toLocaleDateString('ja-JP')}
                          </p>
                        </div>
                        <div>
                          <div class="flex items-center mb-1">
                            <Building2 class="mr-2 h-5 w-5 text-[#3AAFA9]" />
                            <span class="font-semibold">募集団体</span>
                          </div>
                          <p class="ml-7">{event.metadata.organizer}</p>
                        </div>
                      </div>

                      <div class="flex items-center justify-between bg-gray-100 p-3 rounded-md">
                        <div class="flex items-center space-x-3">
                          {#if event.categories.representativeSDG}
                            <SDGsIcon 
                              goal={event.categories.representativeSDG} 
                              size={48}
                            />
                          {/if}
                        </div>
                        <div class="flex items-center space-x-2">
                          <Star class="h-5 w-5 text-[#3AAFA9]" />
                          <span class="font-bold text-[#3AAFA9] text-lg">{event.activity.vpPoints}VP</span>
                        </div>
                      </div>
                    </div>

                    <div class="flex justify-between mt-4">
                      <button 
                        class="px-4 py-2 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#FF8080]"
                        on:click={() => goToDetail(event)}
                      >
                        詳細を見る
                      </button>
                      <button 
                        class="px-4 py-2 hover:text-[#3AAFA9] flex items-center"
                        on:click={(e) => handleShare(event, e)}
                      >
                        <Share2 class="mr-2 h-5 w-5" />
                        共有する
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      {:else}
        <!-- マップ表示 -->
        <div class="bg-white rounded-lg shadow-lg p-4 mb-4">
          <div class="w-full h-[600px] rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              frameborder="0"
              style="border:0"
              loading="lazy"
              allowfullscreen
              src="https://www.openstreetmap.org/export/embed.html?bbox=137.615000,34.682500,138.845697,35.161344&layer=mapnik"
              title="イベント一覧マップ"
            ></iframe>
          </div>
          <!-- サイドパネル -->
          <div class="mt-4">
            <h3 class="text-lg font-bold mb-2">表示中のイベント</h3>
            <div class="space-y-2">
              {#each filteredEvents as event}
                <div class="p-2 border rounded hover:bg-gray-50 cursor-pointer" on:click={() => goToDetail(event)}>
                  <p class="font-medium">{event.title}</p>
                  <p class="text-sm text-gray-600">{event.location.prefecture} {event.location.city}</p>
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/if}
    </main>
  </div>
</div>