<script>
    import './dropdown.css';
    
    export let isOpen = false;
    export let position = 'right'; // 'right' | 'left' | 'center'
    export let width = 'w-48';
    export let containerClass = '';
    export let dropdownClass = '';
  
    // 位置の計算
    $: positionClass = {
      'right': 'right-0',
      'left': 'left-0',
      'center': 'left-1/2 -translate-x-1/2'
    }[position];
</script>
  
  <div class="relative {containerClass}">
    <slot name="trigger" />
    
    {#if isOpen}
      <div 
        class="absolute mt-2 {width} bg-white rounded-lg shadow-lg py-1 z-50 dropdown-menu {positionClass} {dropdownClass}"
      >
        <slot />
      </div>
    {/if}
  </div>