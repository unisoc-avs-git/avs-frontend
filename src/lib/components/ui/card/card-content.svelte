<script>
    export let class_ = '';  // カスタムクラスを受け取れるようにする
  </script>
  
  <div class={`p-6 ${class_}`}>
    <slot />
  </div>