<script>
  export let id = '';
  export let name = '';
  export let checked = false;
</script>

<input
  type="checkbox"
  {id}
  {name}
  bind:checked
  class="h-4 w-4 text-[#3AAFA9] rounded border-gray-300 focus:ring-[#3AAFA9]"
  on:change
/>