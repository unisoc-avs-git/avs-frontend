<script>
	import { goto } from '$app/navigation';
	import Navbar from '$lib/components/common/navbar.svelte';
	import Background from '$lib/components/common/background.svelte';
	import SDGsIcon from '$lib/components/common/sdgsIcon.svelte';
  
	// ステップ管理
	let userType = null;
	let formStep = 1;
	let isRegistered = false;
	let selectedOrganization = null;
  
	// フォームデータ
	let formData = {
	  // 共通フィールド
	  email: '',
	  password: '',
	  confirmPassword: '',
	  selectedOrganization: '',
	  
	  // 契約者・募集団体共通
	  organizationName: '',
	  representativeName: '',
	  phoneNumber: '',
	  
	  // 募集団体固有
	  activityArea: '',
	  selectedSDGs: [],
	  
	  // エンドユーザー固有
	  displayName: '',
	  gender: '',
	  address: '',
	  birthdate: '',
	  occupation: '',
	  skills: '',
	  preferredPrefecture: '',
	  preferredCity: '',
	  selectedPreferredSDGs: [], // 参加希望ジャンル用のSDGs選択
	  insuranceStatus: '',
	  profileVisibility: '',
  
	  // 契約者固有
	  selectedPlan: '',
	  paymentMethod: '',
	};
  
	// 料金プラン
	const plans = [
	  { name: "スタートプラン", deliveries: 2000, price: 15000 },
	  { name: "スタンダードプラン", deliveries: 10000, price: 50000 },
	  { name: "プロプラン", deliveries: 30000, price: 100000 },
	];
  
	// 支払い方法
	const paymentMethods = ["クレジットカード", "銀行振込", "口座引き落とし"];
  
	// 仲介組織
	const intermediaryOrganizations = [
	  { name: "NPO法人 地域支援センター", image: "/placeholder.svg?height=100&width=100" },
	  { name: "一般社団法人 未来創造機構", image: "/placeholder.svg?height=100&width=100" },
	  { name: "社会福祉法人 希望の輪", image: "/placeholder.svg?height=100&width=100" },
	  { name: "株式会社 コミュニティビルダーズ", image: "/placeholder.svg?height=100&width=100" },
	  { name: "一般財団法人 地域活性化支援機構", image: "/placeholder.svg?height=100&width=100" },
	];
  
	// SDGsの選択制限（募集団体用）
	$: isSDGsLimitReached = formData.selectedSDGs?.length >= 4;
  
	function handleSDGsSelect(goal) {
	  if (formData.selectedSDGs.includes(goal)) {
		formData.selectedSDGs = formData.selectedSDGs.filter(g => g !== goal);
	  } else if (!isSDGsLimitReached) {
		formData.selectedSDGs = [...formData.selectedSDGs, goal];
	  }
	}
  
	// 参加希望ジャンルのSDGs選択を処理する関数（エンドユーザー用）
	function handlePreferredSDGsSelect(goal) {
	  if (formData.selectedPreferredSDGs.includes(goal)) {
		formData.selectedPreferredSDGs = formData.selectedPreferredSDGs.filter(g => g !== goal);
	  } else {
		formData.selectedPreferredSDGs = [...formData.selectedPreferredSDGs, goal];
	  }
	}
  
	function handleSubmit(e) {
	  e.preventDefault();
	  if (formData.password !== formData.confirmPassword) {
		alert('パスワードが一致しません');
		return;
	  }
	  
	  // 契約者の場合のみ、次のステップに進む
	  if (userType === '契約者' && formStep < 3) {
		formStep++;
		return;
	  }
  
	  // 仲介組織選択の確認
	  if ((userType === '募集団体' || userType === 'エンドユーザー') && !selectedOrganization) {
		alert('仲介組織を選択してください');
		return;
	  }
  
	  // エンドユーザーの場合、参加希望ジャンルが選択されているか確認
	  if (userType === 'エンドユーザー' && formData.selectedPreferredSDGs.length === 0) {
		alert('参加希望ジャンルを1つ以上選択してください');
		return;
	  }
  
	  console.log('送信されたデータ:', { userType, ...formData, selectedOrganization });
	  isRegistered = true;
	}
  
	function handleUserTypeSelect(type) {
	  userType = type;
	  formStep = 1;
	}
  
	function handleBack() {
	  if (formStep > 1) {
		formStep--;
	  } else {
		userType = null;
	  }
	}
  
	function handleNext() {
	  // 基本的なバリデーション
	  if ((userType === '募集団体' || userType === 'エンドユーザー') && formStep === 1) {
		formStep++;
	  } else if (userType === '契約者' && formStep < 3) {
		formStep++;
	  }
	}
  
	function handleOrganizationSelect(org) {
	  selectedOrganization = org.name;
	  formData = { ...formData, selectedOrganization: org.name };
	}
  </script>

<Navbar />
<div class="relative min-h-screen overflow-hidden bg-white">
  <Background />
  
  <main class="relative container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-center text-[#3AAFA9] mb-2">AVS</h1>
    <p class="text-xl text-center text-gray-600 mb-6">新規登録</p>

    {#if isRegistered}
      <div class="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg">
        <div class="p-8 text-center">
          <h2 class="text-2xl font-bold mb-4">ご登録ありがとうございます！</h2>
          <p class="text-gray-600">
            承認が完了し次第、ご登録いただいたメールアドレスに通知させていただきます。
          </p>
        </div>
      </div>
    {:else}
      <div class="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
        <div class="p-8">
          <form on:submit={handleSubmit} class="space-y-6">
            {#if !userType}
              <!-- ユーザータイプ選択 -->
              <div class="space-y-4">
                <h2 class="text-lg font-bold">ステークホルダーの種類を選択してください</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {#each ['契約者', '募集団体', 'エンドユーザー'] as type}
                    <button
                      type="button"
                      class="w-full py-6 text-lg border rounded-lg {userType === type ? 'bg-[#3AAFA9] text-white' : 'hover:bg-gray-50'}"
                      on:click={() => handleUserTypeSelect(type)}
                    >
                      {type}
                    </button>
                  {/each}
                </div>
              </div>

            {:else if formStep === 1}
              <!-- 基本情報フォーム -->
              <div class="space-y-4">
                {#if userType === '契約者' || userType === '募集団体'}
                  <div>
                    <label for="organizationName" class="block font-medium text-gray-700">団体名</label>
                    <input
                      id="organizationName"
                      bind:value={formData.organizationName}
                      type="text"
                      required
                      class="mt-1 w-full px-3 py-2 border rounded-lg border-[#3AAFA9] focus:ring-[#2B7A78] focus:border-[#2B7A78]"
                    />
                  </div>

                  <div>
                    <label for="representativeName" class="block font-medium text-gray-700">代表者氏名</label>
                    <input
                      id="representativeName"
                      bind:value={formData.representativeName}
                      type="text"
                      required
                      class="mt-1 w-full px-3 py-2 border rounded-lg border-[#3AAFA9] focus:ring-[#2B7A78] focus:border-[#2B7A78]"
                    />
                  </div>

                  <div>
                    <label for="phoneNumber" class="block font-medium text-gray-700">電話番号</label>
                    <input
                      id="phoneNumber"
                      bind:value={formData.phoneNumber}
                      type="tel"
                      required
                      class="mt-1 w-full px-3 py-2 border rounded-lg border-[#3AAFA9] focus:ring-[#2B7A78] focus:border-[#2B7A78]"
                    />
                  </div>
                {/if}

                {#if userType === '募集団体'}
                  <div>
                    <label for="activityArea" class="block font-medium text-gray-700">主な活動地域（県・市区町村）</label>
                    <input
                      id="activityArea"
                      bind:value={formData.activityArea}
                      type="text"
                      required
                      class="mt-1 w-full px-3 py-2 border rounded-lg border-[#3AAFA9] focus:ring-[#2B7A78] focus:border-[#2B7A78]"
                    />
                  </div>

                  <div>
                    <label class="block font-medium text-gray-700 mb-2">
                      活動ジャンル（SDGsアクションから最大4つ選択）
                      <span class="text-sm text-gray-500 ml-2">選択中: {formData.selectedSDGs?.length || 0}/4</span>
                    </label>
                    <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
                      {#each Array.from({length: 17}, (_, i) => i + 1) as goal}
                        <button
                          type="button"
                          class="relative {formData.selectedSDGs?.includes(goal) ? 'ring-2 ring-[#3AAFA9]' : ''} 
                                 {!formData.selectedSDGs?.includes(goal) && isSDGsLimitReached ? 'opacity-50' : ''} 
                                 rounded-lg focus:outline-none"
                          disabled={!formData.selectedSDGs?.includes(goal) && isSDGsLimitReached}
                          on:click={() => handleSDGsSelect(goal)}
                        >
                          <SDGsIcon {goal} size={48} />
                        </button>
                      {/each}
                    </div>
                  </div>
                {/if}

                {#if userType === 'エンドユーザー'}
					<div>
						<label for="displayName" class="block font-medium text-gray-700">表示名</label>
						<input
						id="displayName"
						bind:value={formData.displayName}
						type="text"
						required
						class="mt-1 w-full px-3 py-2 border rounded-lg border-[#3AAFA9] focus:ring-[#2B7A78] focus:border-[#2B7A78]"
						/>
					</div>

					<!-- 性別選択 -->
					<div>
						<label class="block font-medium text-gray-700">性別</label>
						<div class="mt-2 space-x-4">
						{#each [['male', '男性'], ['female', '女性'], ['other', 'その他']] as [value, label]}
							<label class="inline-flex items-center">
							<input
								type="radio"
								name="gender"
								value={value}
								bind:group={formData.gender}
								class="text-[#3AAFA9] border-[#3AAFA9]"
								required
							/>
							<span class="ml-2">{label}</span>
							</label>
						{/each}
						</div>
					</div>

					<div>
						<label for="address" class="block font-medium text-gray-700">住所（県・市区町村）</label>
						<input
						id="address"
						bind:value={formData.address}
						type="text"
						required
						class="mt-1 w-full px-3 py-2 border rounded-lg border-[#3AAFA9] focus:ring-[#2B7A78] focus:border-[#2B7A78]"
						/>
					</div>

					<div>
						<label for="birthdate" class="block font-medium text-gray-700">生年月日</label>
						<input
						id="birthdate"
						bind:value={formData.birthdate}
						type="date"
						required
						class="mt-1 w-full px-3 py-2 border rounded-lg border-[#3AAFA9] focus:ring-[#2B7A78] focus:border-[#2B7A78]"
						/>
					</div>

					<div>
						<label for="occupation" class="block font-medium text-gray-700">職業</label>
						<input
						id="occupation"
						bind:value={formData.occupation}
						type="text"
						required
						class="mt-1 w-full px-3 py-2 border rounded-lg border-[#3AAFA9] focus:ring-[#2B7A78] focus:border-[#2B7A78]"
						/>
					</div>

					<div>
						<label for="skills" class="block font-medium text-gray-700">保持スキル</label>
						<input
						id="skills"
						bind:value={formData.skills}
						type="text"
						class="mt-1 w-full px-3 py-2 border rounded-lg border-[#3AAFA9] focus:ring-[#2B7A78] focus:border-[#2B7A78]"
						/>
					</div>

					<!-- 参加希望地域 -->
					<div class="space-y-4">
						<label class="block font-medium text-gray-700">参加希望地域</label>
						<div class="grid grid-cols-2 gap-4">
						<div>
							<label for="preferredPrefecture" class="block text-sm text-gray-600">都道府県</label>
							<input
							id="preferredPrefecture"
							bind:value={formData.preferredPrefecture}
							type="text"
							required
							class="mt-1 w-full px-3 py-2 border rounded-lg border-[#3AAFA9] focus:ring-[#2B7A78] focus:border-[#2B7A78]"
							/>
						</div>
						<div>
							<label for="preferredCity" class="block text-sm text-gray-600">市区町村</label>
							<input
							id="preferredCity"
							bind:value={formData.preferredCity}
							type="text"
							required
							class="mt-1 w-full px-3 py-2 border rounded-lg border-[#3AAFA9] focus:ring-[#2B7A78] focus:border-[#2B7A78]"
							/>
						</div>
						</div>
					</div>

					<!-- 参加希望ジャンル（SDGs） -->
					<div class="space-y-4">
						<label class="block font-medium text-gray-700">
						参加希望ジャンル（SDGsから選択）
						<span class="text-sm text-gray-500 ml-2">選択中: {formData.selectedPreferredSDGs?.length || 0}</span>
						</label>
						<div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
						{#each Array.from({length: 17}, (_, i) => i + 1) as goal}
							<button
							type="button"
							class="relative {formData.selectedPreferredSDGs?.includes(goal) ? 'ring-2 ring-[#3AAFA9]' : ''} 
									rounded-lg focus:outline-none hover:opacity-80"
							on:click={() => handlePreferredSDGsSelect(goal)}
							>
							<SDGsIcon {goal} size={48} />
							</button>
						{/each}
						</div>
					</div>

					<!-- ボランティア保険加入有無 -->
					<div>
						<label class="block font-medium text-gray-700">ボランティア保険加入有無</label>
						<div class="mt-2 space-x-4">
						{#each [['yes', '加入済み'], ['no', '未加入']] as [value, label]}
							<label class="inline-flex items-center">
							<input
								type="radio"
								name="insuranceStatus"
								value={value}
								bind:group={formData.insuranceStatus}
								required
								class="text-[#3AAFA9] border-[#3AAFA9]"
							/>
							<span class="ml-2">{label}</span>
							</label>
						{/each}
						</div>
					</div>

					<!-- プロフィールの公開設定 -->
					<div>
						<label class="block font-medium text-gray-700">プロフィールの公開設定</label>
						<div class="mt-2 space-x-4">
						{#each [['public', '公開'], ['private', '非公開']] as [value, label]}
							<label class="inline-flex items-center">
							<input
								type="radio"
								name="profileVisibility"
								value={value}
								bind:group={formData.profileVisibility}
								required
								class="text-[#3AAFA9] border-[#3AAFA9]"
							/>
							<span class="ml-2">{label}</span>
							</label>
						{/each}
						</div>
					</div>
					{/if}

                <!-- 共通フィールド -->
                <div>
                  <label for="email" class="block font-medium text-gray-700">メールアドレス</label>
                  <input
                    id="email"
                    bind:value={formData.email}
                    type="email"
                    required
                    class="mt-1 w-full px-3 py-2 border rounded-lg border-[#3AAFA9] focus:ring-[#2B7A78] focus:border-[#2B7A78]"
                  />
                </div>

                <div>
                  <label for="password" class="block font-medium text-gray-700">パスワード</label>
                  <input
                    id="password"
                    bind:value={formData.password}
                    type="password"
                    required
                    class="mt-1 w-full px-3 py-2 border rounded-lg border-[#3AAFA9] focus:ring-[#2B7A78] focus:border-[#2B7A78]"
                  />
                </div>

                <div>
                  <label for="confirmPassword" class="block font-medium text-gray-700">パスワード（確認）</label>
                  <input
                    id="confirmPassword"
                    bind:value={formData.confirmPassword}
                    type="password"
                    required
                    class="mt-1 w-full px-3 py-2 border rounded-lg border-[#3AAFA9] focus:ring-[#2B7A78] focus:border-[#2B7A78]"
                  />
                </div>
              </div>

            {:else if formStep === 2 && (userType === '募集団体' || userType === 'エンドユーザー')}
              <!-- 仲介組織選択 -->
              <div class="space-y-4">
                <h2 class="text-lg font-bold">所属する仲介組織を選択</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {#each intermediaryOrganizations as org}
                    <div 
                      class="flex flex-col items-center space-y-2 p-4 border rounded-lg cursor-pointer transition-colors duration-200 
                             {selectedOrganization === org.name ? 'bg-[#3AAFA9] text-white' : 'hover:bg-gray-100'}"
                      on:click={() => handleOrganizationSelect(org)}
                    >
                      <img src={org.image} alt={org.name} class="w-24 h-24 rounded-full" />
                      <span class="text-center">{org.name}</span>
                    </div>
                  {/each}
                </div>
              </div>

            {:else if formStep === 2 && userType === '契約者'}
              <!-- 料金プラン選択 -->
              <div class="space-y-6">
                <h2 class="text-lg font-bold">料金プラン選択</h2>
                {#each plans as plan}
                  <label class="flex items-center space-x-2 p-4 border rounded-lg">
                    <input
                      type="radio"
                      name="selectedPlan"
                      value={plan.name}
                      class="text-[#3AAFA9] border-[#3AAFA9]"
                      bind:group={formData.selectedPlan}
                    />
                    <div>
                      <div class="font-bold">{plan.name}</div>
                      <div>配信数: {plan.deliveries.toLocaleString()}通</div>
                      <div>料金: {plan.price.toLocaleString()}円</div>
                    </div>
                  </label>
                {/each}
              </div>

            {:else if formStep === 3 && userType === '契約者'}
              <!-- 支払い方法選択 -->
              <div class="space-y-6">
                <h2 class="text-lg font-bold">支払い方法選択</h2>
                {#each paymentMethods as method}
                  <label class="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method}
                      class="text-[#3AAFA9] border-[#3AAFA9]"
                      bind:group={formData.paymentMethod}
                    />
                    <span>{method}</span>
                  </label>
                {/each}
              </div>
            {/if}

            <!-- ナビゲーションボタン -->
            <div class="flex justify-between mt-6">
              {#if userType || formStep > 1}
                <button 
                  type="button" 
                  class="px-4 py-2 border rounded hover:bg-gray-50"
                  on:click={handleBack}
                >
                  戻る
                </button>
              {:else}
                <div></div>
              {/if}

              {#if (userType === '契約者' && formStep < 3) || ((userType === '募集団体' || userType === 'エンドユーザー') && formStep === 1)}
                <button 
                  type="button" 
                  class="px-6 py-2 bg-[#3AAFA9] text-white rounded-lg hover:bg-[#2B7A78] transition-colors"
                  on:click={handleNext}
                >
                  次へ
                </button>
              {:else}
                <button 
                  type="submit" 
                  class="px-6 py-2 bg-[#3AAFA9] text-white rounded-lg hover:bg-[#2B7A78] transition-colors"
                  disabled={(userType === '募集団体' || userType === 'エンドユーザー') && !selectedOrganization}
                >
                  登録する
                </button>
              {/if}
            </div>
          </form>
        </div>
      </div>
    {/if}

    <p class="mt-4 text-center text-sm text-gray-500">
      すでにアカウントをお持ちの方は
      <a href="/login" class="font-semibold text-[#3AAFA9] hover:text-[#2B7A78]">
        ログイン
      </a>
    </p>
  </main>
</div>

<style>
  input[type="radio"] {
    accent-color: #3AAFA9;
  }
</style>