<script>
  export let value = 0;
</script>

<div class="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
  <div 
    class="absolute left-0 top-0 h-full bg-[#3AAFA9] transition-all duration-300 ease-in-out rounded-full"
    style="width: {value}%"
  />
</div>