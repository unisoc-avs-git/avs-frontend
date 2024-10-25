<script>
  export let value = '';
  export let id = '';
  export let name = '';
  export let group = '';  // checked の代わりに group を使用
</script>

<div class="flex items-center space-x-2">
  <input
    {id}
    {name}
    type="radio"
    {value}
    bind:group
    class="h-4 w-4 text-[#3AAFA9] border-gray-300 focus:ring-[#3AAFA9]"
  />
  <slot />
</div>