<script>
    export let goal;
    export let size = 48;
    export let className = "";
  
    $: iconPath = goal === "all" 
      ? "/sdgs/sdgs_icon.png"
      : `/sdgs/sdg_icon_${goal}.png`;
  
    $: altText = goal === "all"
      ? "SDGs 17の目標全て"
      : `SDGs Goal ${goal}`;
  </script>
  
  <img
    src={iconPath}
    alt={altText}
    class="{className}"
    style="width: {size}px; height: {size}px; object-fit: contain;"
  />