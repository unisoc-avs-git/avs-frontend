<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { eventStore } from '$lib/data/events';
  import Background from '$lib/components/common/background.svelte';
  import Navbar from '$lib/components/common/navbar.svelte';
  import EventForm from '$lib/components/events/event_form.svelte';

  let initialData = null;

  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    const duplicateParam = params.get('duplicate');
    if (duplicateParam) {
      try {
        initialData = JSON.parse(decodeURIComponent(duplicateParam));
        console.log('Loaded initial data:', initialData);
      } catch (error) {
        console.error('Failed to parse duplicate data:', error);
      }
    }
  });

  // フォーム送信ハンドラ
  const handleSubmit = async (event) => {
    const { eventData } = event.detail;
    console.log('送信するイベントデータ:', eventData);
    eventStore.addEvent(eventData);
    console.log('イベント追加後のストア:', $eventStore);
    await goto('/home');
  };
</script>

<Navbar />
  
<div class="relative min-h-screen bg-white">
  <Background />
  
  <div class="relative z-10 pt-16">
    <EventForm on:submit={handleSubmit} />
  </div>
</div>