<script>
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { eventStore } from '$lib/data/events';
  import Background from '$lib/components/common/background.svelte';
  import Navbar from '$lib/components/common/navbar.svelte';
  import EventForm from '$lib/components/events/event_form.svelte';

  // URLからイベントIDを取得（[id]フォルダ名がパラメータとして使用される）
  $: eventId = $page.params.id;
  
  // 編集対象のイベントを取得
  $: currentEvent = $eventStore.find(event => event.metadata.createdAt === eventId);

  // フォーム送信ハンドラ
  const handleSubmit = async (event) => {
    const { eventData } = event.detail;
    console.log('更新するイベントデータ:', eventData);
    eventStore.updateEvent(eventId, eventData);
    await goto('/home');
  };

  // キャンセルハンドラ
  const handleCancel = () => {
    goto('/home');
  };
</script>

<Navbar />
  
<div class="relative min-h-screen bg-white">
  <Background />
  
  <div class="relative z-10 pt-16">
    {#if currentEvent}
      <EventForm 
        isEditMode={true}
        initialData={currentEvent}
        on:submit={handleSubmit}
        on:cancel={handleCancel}
      />
    {:else}
      <div class="text-center py-8">
        <p>イベントが見つかりません</p>
      </div>
    {/if}
  </div>
</div>