<script>
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Background from '$lib/components/common/background.svelte';
  import Navbar from '$lib/components/common/navbar.svelte';
  import SDGsIcon from '$lib/components/common/sdgsIcon.svelte';
  import { eventStore } from '$lib/data/events.js';
  import { mockUsers, eventParticipants } from '$lib/data/user_data.js';
  import { ArrowLeft, Building2, Calendar, Clock, MapPin, Share2, Star, Users, User } from 'lucide-svelte';

  // Get event ID from URL parameter
  $: eventId = $page.params.id;
  
  // Subscribe to event store and find the specific event
  let events = [];
  eventStore.subscribe(value => {
    events = value;
  });

  // Find the event by matching createdAt timestamp (used as ID)
  $: event = events.find(e => e.metadata.createdAt === eventId);

  // イベント参加者のデータを取得する関数
  function getEventParticipants(eventCreatedAt) {
    const participantIds = eventParticipants[eventCreatedAt] || [];
    return participantIds.map(id => mockUsers.find(user => user.id === id));
  }

  // ユーザープロファイルへの遷移
  function handleUserClick(userId) {
    goto(`/user/${userId}/history`);
  }

  // Handle share functionality
  function handleShare() {
    const shareUrl = `https://avs.com/event-list/${eventId}`;
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
</script>

<div class="min-h-screen relative overflow-hidden">
  <Background />
  
  <div class="relative z-10 flex flex-col min-h-screen">
    <Navbar />

    <main class="container mx-auto p-4 relative z-10 pt-20">
      {#if event}
        <div class="w-full max-w-4xl mx-auto bg-white bg-opacity-90 rounded-lg shadow">
          <div class="p-6">
            <div class="flex items-center mb-4">
              <a href="/event-list" class="mr-2 p-2 hover:bg-gray-100 rounded">
                <ArrowLeft class="h-4 w-4" />
              </a>
              <h1 class="text-3xl font-bold">{event.title}</h1>
            </div>
            <p class="text-lg text-gray-600 mb-6">{event.description}</p>

            <div class="grid md:grid-cols-2 gap-6">
              <img
                src={event.image}
                alt={event.title}
                class="w-full h-auto object-cover rounded-lg"
              />
              <div class="space-y-4">
                <div class="flex items-center">
                  <Calendar class="mr-2 h-5 w-5 text-[#3AAFA9]" />
                  <span class="font-semibold">実施日：</span>
                  <span class="ml-2">{new Date(event.schedule.startDate).toLocaleDateString('ja-JP')}</span>
                </div>
                <div class="flex items-center">
                  <Clock class="mr-2 h-5 w-5 text-[#3AAFA9]" />
                  <span class="font-semibold">時間：</span>
                  <span class="ml-2">{event.schedule.startTime} - {event.schedule.endTime}</span>
                </div>
                <div class="flex items-center">
                  <MapPin class="mr-2 h-5 w-5 text-[#3AAFA9]" />
                  <span class="font-semibold">場所：</span>
                  <span class="ml-2">{event.location.prefecture} {event.location.city} {event.location.address}</span>
                </div>
                <div class="flex items-center">
                  <Users class="mr-2 h-5 w-5 text-[#3AAFA9]" />
                  <span class="font-semibold">募集人数：</span>
                  <span class="ml-2">{event.schedule.participantLimit}名</span>
                </div>
                <div class="flex items-center">
                  <Calendar class="mr-2 h-5 w-5 text-[#FF6B6B]" />
                  <span class="font-semibold text-[#FF6B6B]">応募締め切り：</span>
                  <span class="ml-2 text-[#FF6B6B]">
                    {new Date(event.schedule.applicationDeadline).toLocaleDateString('ja-JP')}
                  </span>
                </div>
                <div class="flex items-center">
                  <Building2 class="mr-2 h-5 w-5 text-[#3AAFA9]" />
                  <span class="font-semibold">配信者：</span>
                  <span class="ml-2">{event.metadata.organizer}</span>
                </div>
              </div>
            </div>

            <!-- イベント参加者 -->
            <div class="mt-6">
              <h3 class="text-xl font-semibold mb-2">イベント参加者</h3>
              <div class="flex flex-wrap gap-2">
                {#each getEventParticipants(event.metadata.createdAt) as participant}
                  <button
                    class="group relative"
                    on:click={() => handleUserClick(participant.id)}
                    title={participant.name}
                  >
                    <div class="w-10 h-10 rounded-full border-2 border-[#3AAFA9] bg-white flex items-center justify-center text-[#3AAFA9] overflow-hidden transition-colors duration-200 hover:bg-[#3AAFA9] hover:text-white">
                      <User class="w-6 h-6" />
                    </div>
                    <div class="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-200">
                      {participant.name}
                    </div>
                  </button>
                {/each}
                {#if getEventParticipants(event.metadata.createdAt).length < event.schedule.participantLimit}
                  <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-sm">
                    +{event.schedule.participantLimit - getEventParticipants(event.metadata.createdAt).length}
                  </div>
                {/if}
              </div>
            </div>

            <!-- SDGsセクション -->
            <div class="mt-6 bg-gray-100 p-4 rounded-md">
              <h3 class="text-xl font-semibold mb-4">関連するSDGs</h3>
              <div class="flex flex-wrap gap-4 items-center">
                {#if event.categories.representativeSDG}
                  <div class="flex items-center">
                    <SDGsIcon 
                      goal={event.categories.representativeSDG} 
                      size={56}
                    />
                  </div>
                {/if}
                
                {#each event.categories.sdgs.filter(g => g !== event.categories.representativeSDG) as sdgsGoal}
                  <SDGsIcon 
                    goal={sdgsGoal} 
                    size={56}
                  />
                {/each}
              </div>
              
              <div class="flex items-center justify-end mt-4">
                <Star class="h-6 w-6 text-[#3AAFA9] mr-2" />
                <span class="font-bold text-[#3AAFA9] text-xl">{event.activity.vpPoints}VP</span>
              </div>
            </div>

            <!-- イベント開催地マップ -->
            <div class="mt-6">
              <h3 class="text-xl font-semibold mb-2">イベント開催地</h3>
              <div class="bg-white p-4 rounded-lg shadow">
                <div class="rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="400"
                    frameborder="0"
                    style="border:0"
                    loading="lazy"
                    allowfullscreen
                    src="https://www.openstreetmap.org/export/embed.html?bbox=138.3830,34.9717,138.3930,34.9757&layer=mapnik&marker=34.9737,138.3880&zoom=17"
                    title="イベント開催地"
                  ></iframe>
                </div>
                <div class="mt-2 text-sm text-gray-600">
                  <a 
                    href="https://www.openstreetmap.org/?mlat=34.9737&mlon=138.3880#map=17/34.9737/138.3880"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-[#3AAFA9] hover:text-[#FF6B6B]"
                  >
                    大きな地図で見る
                  </a>
                  <p class="mt-1">{event.location.prefecture} {event.location.city} {event.location.address}</p>
                </div>
              </div>
            </div>

            {#if event.requirements && (event.requirements.qualifications?.length > 0 || event.requirements.ageRange)}
              <div class="mt-6 bg-gray-50 p-4 rounded-lg">
                <h3 class="text-xl font-semibold mb-2">参加要件</h3>
                {#if event.requirements.ageRange}
                  <div class="mb-2">
                    <span class="font-semibold">年齢制限：</span>
                    {event.requirements.ageRange.min}歳
                    {#if event.requirements.ageRange.max}
                      ～{event.requirements.ageRange.max}歳
                    {/if}
                  </div>
                {/if}
                {#if event.requirements.qualifications?.length > 0}
                  <div>
                    <span class="font-semibold">必要な資格：</span>
                    <ul class="list-disc list-inside ml-4">
                      {#each event.requirements.qualifications as qualification}
                        <li>{qualification}</li>
                      {/each}
                    </ul>
                  </div>
                {/if}
              </div>
            {/if}

            {#if event.metadata.remarks}
              <div class="mt-4 text-gray-600">
                <span class="font-semibold">備考：</span>{event.metadata.remarks}
              </div>
            {/if}

            <div class="mt-6 flex justify-between">
              <button 
                class="hover:text-[#3AAFA9] border border-current px-4 py-2 rounded flex items-center"
                on:click={handleShare}
              >
                <Share2 class="mr-2 h-5 w-5" />
                共有する
              </button>
              <button class="bg-[#FF6B6B] hover:bg-[#FF8080] text-white px-6 py-2 rounded">
                参加申し込み
              </button>
            </div>
          </div>
        </div>
      {:else}
        <div class="text-center py-10">
          <p>イベントが見つかりませんでした。</p>
        </div>
      {/if}
    </main>
  </div>
</div>