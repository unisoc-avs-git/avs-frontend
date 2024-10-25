<script>
	import Background from '$lib/components/common/background.svelte';
  </script>
  
  <div class="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
	<Background />
  
	<!-- ログインフォーム -->
	<div class="w-full max-w-md relative z-10 bg-white p-8 rounded-lg shadow-lg">
	  <h1 class="text-3xl font-bold text-center mb-6" style="color: #3AAFA9;">AVS</h1>
	  
	  <form class="space-y-4">
		<div class="space-y-2">
		  <label 
			for="email" 
			class="block text-base font-medium text-[#4A4A4A]"
		  >
			メールアドレス
		  </label>
		  <input
			id="email"
			type="email"
			required
			class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3AAFA9] focus:border-transparent"
		  />
		</div>
  
		<div class="space-y-2">
		  <label 
			for="password" 
			class="block text-base font-medium text-[#4A4A4A]"
		  >
			パスワード
		  </label>
		  <input
			id="password"
			type="password"
			required
			class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3AAFA9] focus:border-transparent"
		  />
		</div>
  
		<button
		  type="submit"
		  class="w-full h-10 px-4 py-2 bg-[#3AAFA9] hover:bg-[#FF8080] active:bg-[#E66060] text-white rounded-lg font-medium transition-colors duration-200"
		>
		  ログイン
		</button>
	  </form>
  
	  <p class="mt-4 text-center text-sm text-[#777777]">
		アカウントをお持ちでない方は
		<a 
		  href="/register" 
		  class="font-semibold hover:underline"
		  style="color: #3AAFA9;"
		>
		  新規登録
		</a>
	  </p>
	</div>
  </div>
  
  <style>
	:global(body) {
	  font-family: 'Noto Sans JP', sans-serif;
	  background-color: #F5F5F5;
	  line-height: 1.5;
	}
  
	h1 {
	  font-size: 2rem;
	  line-height: 1.2;
	}
  
	label {
	  font-weight: 500;
	}
  
	button {
	  font-weight: 500;
	  transition: background-color 0.2s ease-in-out;
	}
  </style>