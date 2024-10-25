<script>
    import Navbar from '$lib/components/common/navbar.svelte';
    import Background from '$lib/components/common/background.svelte';
    import { goto } from '$app/navigation';
  
    // フォームの状態管理
    let comment = '';
    let experience = '';
    let impression = '';
  
    // 評価の選択肢
    const ratings = [1, 2, 3, 4, 5];
  
    // フォーム送信処理
    const handleSubmit = (e) => {
      e.preventDefault();
      // フォーム送信のロジックをここに記述
      console.log({ comment, experience, impression });
    };
  </script>
  
  <Navbar />
  <div class="relative min-h-screen overflow-hidden bg-[#F5F5F5]">
    <Background />
    
    <main class="relative container mx-auto mt-8 px-4">
      <div class="w-full max-w-2xl mx-auto bg-[#F5F5F5] rounded-lg overflow-hidden shadow-sm">
        <!-- ヘッダー -->
        <div class="bg-[#3AAFA9] p-6">
          <h1 class="text-2xl font-bold text-[#F5F5F5]">活動報告書提出フォーム</h1>
        </div>
  
        <!-- フォームコンテンツ -->
        <div class="p-6">
          <form on:submit={handleSubmit} class="space-y-6">
            <!-- 活動の評価 -->
            <div class="space-y-4">
              <label class="text-[#4A4A4A] font-medium">ボランティア参加を終えた感想は？</label>
              <div class="flex items-center justify-between w-full">
                {#each ratings as value}
                  <div class="flex flex-col items-center">
                    <div
                      class="w-6 h-6 rounded-full border-2 border-[#3AAFA9] cursor-pointer {experience === value.toString() ? 'bg-[#3AAFA9]' : 'bg-white'}"
                      on:click={() => experience = value.toString()}
                    />
                    <span class="mt-1 text-sm text-[#4A4A4A]">{value}</span>
                  </div>
                {/each}
              </div>
              <div class="flex justify-between text-sm text-[#4A4A4A]">
                <span>学び無し</span>
                <span>有意義</span>
              </div>
            </div>
  
            <!-- 団体の印象 -->
            <div class="space-y-4">
              <label class="text-[#4A4A4A] font-medium">事業団体に対する印象はいかがでしたか？</label>
              <div class="flex items-center justify-between w-full">
                {#each ratings as value}
                  <div class="flex flex-col items-center">
                    <div
                      class="w-6 h-6 rounded-full border-2 border-[#3AAFA9] cursor-pointer {impression === value.toString() ? 'bg-[#3AAFA9]' : 'bg-white'}"
                      on:click={() => impression = value.toString()}
                    />
                    <span class="mt-1 text-sm text-[#4A4A4A]">{value}</span>
                  </div>
                {/each}
              </div>
              <div class="flex justify-between text-sm text-[#4A4A4A]">
                <span>悪い</span>
                <span>良い</span>
              </div>
            </div>
  
            <!-- コメント -->
            <div class="space-y-2">
              <label for="comment" class="text-[#4A4A4A] font-medium">
                ボランティア体験をして、活動を通して感じた事を教えて下さい。
              </label>
              <textarea
                id="comment"
                bind:value={comment}
                placeholder="感想をご記入ください。"
                class="w-full p-2 border-2 border-[#3AAFA9] rounded-lg resize-none"
              />
            </div>
  
            <!-- 送信ボタン -->
            <div class="flex justify-end">
              <button
                type="submit"
                class="px-6 h-12 w-36 bg-[#FF6B6B] text-[#F5F5F5] rounded-lg hover:bg-[#FF8080] active:bg-[#E66060] transition-colors"
              >
                提出
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
  
  <style>
    textarea {
      min-height: 120px;
    }
  
    button {
      font-weight: 500;
    }
  </style>