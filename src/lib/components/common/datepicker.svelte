<script>
  import { Calendar } from 'lucide-svelte';
  import { createEventDispatcher } from 'svelte';

  export let selected = null;
  let isOpen = false;
  
  const dispatch = createEventDispatcher();
  const dayNames = ['日', '月', '火', '水', '木', '金', '土'];

  $: today = new Date();
  $: currentMonth = selected ? selected.getMonth() : today.getMonth();
  $: currentYear = selected ? selected.getFullYear() : today.getFullYear();
  $: firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  $: lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  $: daysInMonth = lastDayOfMonth.getDate();
  $: startingDayOfWeek = firstDayOfMonth.getDay();

  function toggleCalendar() {
    isOpen = !isOpen;
  }

  function handleDateSelect(date) {
    dispatch('select', date);
    selected = date;
    isOpen = false;
  }
</script>

<div class="relative">
  <button 
    class="w-[180px] px-3 py-2 border rounded-lg flex items-center bg-white"
    on:click={toggleCalendar}
  >
    <Calendar class="mr-2 h-4 w-4" />
    {selected ? selected.toLocaleDateString('ja-JP') : '日付を選択'}
  </button>

  {#if isOpen}
    <div class="absolute mt-2 p-2 bg-white border rounded-md shadow-lg z-10">
      <table class="border-collapse">
        <thead>
          <tr>
            <th colspan="7" class="p-2 text-center">
              {new Date(currentYear, currentMonth).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long' })}
            </th>
          </tr>
          <tr>
            {#each dayNames as day}
              <th class="p-2 text-center font-normal text-sm">{day}</th>
            {/each}
          </tr>
        </thead>
        <tbody>
          {#each Array(Math.ceil((startingDayOfWeek + daysInMonth) / 7)) as _, weekIndex}
            <tr>
              {#each Array(7) as _, dayIndex}
                {@const dayNumber = weekIndex * 7 + dayIndex - startingDayOfWeek + 1}
                <td class="p-2">
                  {#if dayNumber > 0 && dayNumber <= daysInMonth}
                    {@const date = new Date(currentYear, currentMonth, dayNumber)}
                    {@const isSelected = selected && date.toDateString() === selected.toDateString()}
                    {@const isToday = date.toDateString() === today.toDateString()}
                    <button
                      type="button"
                      on:click={() => handleDateSelect(date)}
                      class="w-8 h-8 rounded-full flex items-center justify-center text-sm
                        {isSelected ? 'bg-[#3AAFA9] text-white' : ''}
                        {isToday && !isSelected ? 'border border-[#3AAFA9] text-[#3AAFA9]' : ''}
                        {!isSelected && !isToday ? 'hover:bg-gray-100' : ''}"
                    >
                      {dayNumber}
                    </button>
                  {/if}
                </td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</div>