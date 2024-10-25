<script>
  export let name = '';
  export let value = '';

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function handleChange(event) {
    const checkedValue = event.target.value;
    value = checkedValue;
    dispatch('change', checkedValue);
  }
</script>

<div class="space-y-2" on:change={handleChange}>
  <slot />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>