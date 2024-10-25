<script>
  import { createEventDispatcher } from 'svelte';
  
  // Props
  export const isEditMode = false;
  export let initialData = null;
  
  const dispatch = createEventDispatcher();

// フォームの状態管理（変数宣言）
let title = initialData?.title ?? '';
  let description = initialData?.description ?? '';
  let prefecture = initialData?.location?.prefecture ?? '';
  let city = initialData?.location?.city ?? '';
  let address = initialData?.location?.address ?? '';
  let venue = initialData?.location?.venue ?? '';
  let latitude = initialData?.location?.latitude ?? '';
  let longitude = initialData?.location?.longitude ?? '';
  let fileName = initialData?.image?.replace('/placeholder.svg', '') ?? '';
  let eventStartDate = initialData?.schedule?.startDate ?? '';
  let eventEndDate = initialData?.schedule?.endDate ?? '';
  let eventStartTime = initialData?.schedule?.startTime ?? '';
  let eventEndTime = initialData?.schedule?.endTime ?? '';
  let applicationDeadline = initialData?.schedule?.applicationDeadline ?? '';
  let participantLimit = initialData?.schedule?.participantLimit?.toString() ?? '';
  let gender = initialData?.requirements?.gender ?? 'any';
  let minAge = initialData?.requirements?.ageRange?.min?.toString() ?? '';
  let maxAge = initialData?.requirements?.ageRange?.max?.toString() ?? '';
  let qualification1 = initialData?.requirements?.qualifications?.[0] ?? '';
  let qualification2 = initialData?.requirements?.qualifications?.[1] ?? '';
  let qualification3 = initialData?.requirements?.qualifications?.[2] ?? '';
  let volunteerHours = initialData?.activity?.volunteerHours ?? 1;
  let vpPoints = initialData?.activity?.vpPoints ?? 10;
  let phoneNumber = initialData?.contact?.phoneNumber ?? '';
  let email = initialData?.contact?.email ?? '';
  let twitter = initialData?.contact?.socialMedia?.twitter ?? '';
  let facebook = initialData?.contact?.socialMedia?.facebook ?? '';
  let instagram = initialData?.contact?.socialMedia?.instagram ?? '';
  let remarks = initialData?.metadata?.remarks ?? '';
  let selectedSDGs = initialData?.categories?.sdgs ?? [];
  let representativeSDG = initialData?.categories?.representativeSDG?.toString() ?? '';
  let selectedEventTypes = initialData?.categories?.eventTypes ?? [];

  // ジオコーディング処理
  const handleGeocoding = async () => {
    latitude = '35.097542';
    longitude = '138.845697';
  };

  // ファイル選択処理
  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    fileName = file ? file.name : '';
  };

  // SDGsの選択処理
  const handleSDGChange = (sdg) => {
    if (selectedSDGs.includes(sdg)) {
      selectedSDGs = selectedSDGs.filter(item => item !== sdg);
    } else {
      selectedSDGs = [...selectedSDGs, sdg];
    }
  };

  // イベントタイプの選択処理
  const handleEventTypeChange = (eventType) => {
    if (selectedEventTypes.includes(eventType)) {
      selectedEventTypes = selectedEventTypes.filter(item => item !== eventType);
    } else {
      selectedEventTypes = [...selectedEventTypes, eventType];
    }
  };

  // VP計算の反応性
  $: vpPoints = volunteerHours * 10;

  // フォーム送信ハンドラ
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const eventData = {
      title,
      description,
      image: fileName || "/placeholder.svg",
      location: {
        prefecture,
        city,
        address,
        venue,
        latitude,
        longitude
      },
      schedule: {
        startDate: eventStartDate,
        endDate: eventEndDate,
        startTime: eventStartTime,
        endTime: eventEndTime,
        applicationDeadline,
        participantLimit: parseInt(participantLimit) || 0
      },
      requirements: {
        gender,
        ageRange: {
          min: parseInt(minAge) || null,
          max: parseInt(maxAge) || null
        },
        qualifications: [
          qualification1,
          qualification2,
          qualification3
        ].filter(Boolean)
      },
      activity: {
        volunteerHours: parseInt(volunteerHours) || 0,
        vpPoints: parseInt(vpPoints) || 0
      },
      contact: {
        phoneNumber,
        email,
        socialMedia: {
          twitter,
          facebook,
          instagram
        }
      },
      categories: {
        sdgs: selectedSDGs,
        representativeSDG: parseInt(representativeSDG) || null,
        eventTypes: selectedEventTypes
      },
      metadata: {
        status: initialData?.metadata?.status ?? "未配信",
        organizer: "AVSサポートデスク",
        remarks,
        createdAt: initialData?.metadata?.createdAt ?? new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    };

    dispatch('submit', { eventData });
  };
</script>

<div class="w-full max-w-4xl mx-auto bg-white p-6">
  <h2 class="text-2xl font-bold text-center text-[#17252A] mb-6">
    {isEditMode ? 'ボランティア編集' : 'ボランティア作成'}
  </h2>
  
  <form on:submit={handleSubmit} class="space-y-6">
    <!-- 基本情報セクション -->
    <div class="space-y-2">
      <label for="title">タイトル</label>
      <input
        id="title"
        type="text"
        bind:value={title}
        class="w-full px-3 py-2 border border-[#3AAFA9] rounded-lg focus:ring-[#2B7A78] focus:border-[#2B7A78]"
        placeholder="例：【参加者募集】海岸ゴミ拾いボランティア"
      />
    </div>

    <div class="space-y-2">
      <label for="description">概要</label>
      <textarea
        id="description"
        bind:value={description}
        class="w-full px-3 py-2 border border-[#3AAFA9] rounded-lg focus:ring-[#2B7A78] focus:border-[#2B7A78]"
        placeholder="例：みんなで海岸のゴミを拾ってキレイにしよう。"
      ></textarea>
    </div>

    <!-- 画像アップロード -->
    <div class="space-y-2">
      <label for="image">イベントの代表画像</label>
      <div class="mt-1 flex items-center">
        <label
          for="image"
          class="cursor-pointer bg-white py-2 px-3 border border-[#3AAFA9] rounded-md shadow-sm text-sm leading-4 font-medium text-[#3AAFA9] hover:bg-[#3AAFA9] hover:text-white"
        >
          ファイル選択
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          class="sr-only"
          on:change={handleFileChange}
        />
        <span class="ml-3 text-sm text-gray-500">{fileName || 'ファイルが選択されていません'}</span>
      </div>
    </div>

    <!-- 開催場所情報 -->
    <div class="grid grid-cols-2 gap-4">
      <div class="space-y-2">
        <label for="prefecture">県</label>
        <select 
          id="prefecture"
          bind:value={prefecture}
          class="w-full px-3 py-2 border border-[#3AAFA9] rounded-lg"
        >
          <option value="">県を選択</option>
          <option value="shizuoka">静岡県</option>
          <option value="tokyo">東京都</option>
          <option value="osaka">大阪府</option>
        </select>
      </div>
      <div class="space-y-2">
        <label for="city">市</label>
        <select 
          id="city"
          bind:value={city}
          class="w-full px-3 py-2 border border-[#3AAFA9] rounded-lg"
        >
          <option value="">市を選択</option>
          <option value="numazu">沼津市</option>
          <option value="shizuoka">静岡市</option>
          <option value="hamamatsu">浜松市</option>
        </select>
      </div>
    </div>

    <div class="space-y-2">
      <label for="address">住所</label>
      <input 
        id="address" 
        type="text"
        bind:value={address}
        class="w-full px-3 py-2 border border-[#3AAFA9] rounded-lg" 
        placeholder="例：本字千本1919-6"
      />
    </div>

    <div class="flex items-center space-x-2">
      <button
        type="button"
        on:click={handleGeocoding}
        class="px-4 py-2 bg-[#2B7A78] text-white rounded-lg hover:bg-[#3AAFA9]"
      >
        経度緯度自動入力
      </button>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div class="space-y-2">
        <label for="latitude">開催場所緯度</label>
        <input
          id="latitude"
          type="text"
          bind:value={latitude}
          class="w-full px-3 py-2 border border-[#3AAFA9] rounded-lg"
        />
      </div>
      <div class="space-y-2">
        <label for="longitude">開催場所経度</label>
        <input
          id="longitude"
          type="text"
          bind:value={longitude}
          class="w-full px-3 py-2 border border-[#3AAFA9] rounded-lg"
        />
      </div>
    </div>

    <div class="space-y-2">
      <label for="venue">開催場所の名称</label>
      <input
        id="venue"
        type="text"
        bind:value={venue}
        class="w-full px-3 py-2 border border-[#3AAFA9] rounded-lg"
        placeholder="例：千本浜海岸"
      />
    </div>

    <!-- 開催時間情報 -->
    <div class="space-y-2">
      <label for="eventStartDate">開催期間</label>
      <div class="flex items-center space-x-2">
        <input 
          type="date" 
          id="eventStartDate" 
          bind:value={eventStartDate}
          class="px-3 py-2 border border-[#3AAFA9] rounded-lg" 
        />
        <span>~</span>
        <input 
          type="date" 
          id="eventEndDate" 
          bind:value={eventEndDate}
          class="px-3 py-2 border border-[#3AAFA9] rounded-lg" 
        />
      </div>
    </div>

    <div class="space-y-2">
      <label for="eventStartTime">開催時間</label>
      <div class="flex items-center space-x-2">
        <input 
          type="time" 
          id="eventStartTime" 
          bind:value={eventStartTime}
          class="w-24 px-3 py-2 border border-[#3AAFA9] rounded-lg" 
        />
        <span>~</span>
        <input 
          type="time" 
          id="eventEndTime" 
          bind:value={eventEndTime}
          class="w-24 px-3 py-2 border border-[#3AAFA9] rounded-lg" 
        />
      </div>
    </div>

    <!-- 募集締め切り日 -->
    <div class="space-y-2">
      <label for="applicationDeadline">募集締め切り日</label>
      <div class="flex items-center space-x-2">
        <input 
          type="date" 
          id="applicationDeadline" 
          bind:value={applicationDeadline}
          class="px-3 py-2 border border-[#3AAFA9] rounded-lg"
        />
      </div>
    </div>

    <div class="space-y-2">
      <label for="participantLimit">募集人数</label>
      <div class="flex items-center space-x-2">
        <input
          type="number"
          id="participantLimit"
          bind:value={participantLimit}
          min="1"
          class="px-3 py-2 border border-[#3AAFA9] rounded-lg"
          placeholder="募集人数を入力"
        />
      </div>
    </div>

    <!-- 性別選択 -->
    <div class="space-y-2">
      <label id="gender-group">性別</label>
      <div class="flex space-x-4" role="radiogroup" aria-labelledby="gender-group">
        <label class="flex items-center space-x-2">
          <input type="radio" name="gender" bind:group={gender} value="male" class="text-[#3AAFA9]" />
          <span>男性</span>
        </label>
        <label class="flex items-center space-x-2">
          <input type="radio" name="gender" bind:group={gender} value="female" class="text-[#3AAFA9]" />
          <span>女性</span>
        </label>
        <label class="flex items-center space-x-2">
          <input type="radio" name="gender" bind:group={gender} value="any" class="text-[#3AAFA9]" checked />
          <span>指定なし</span>
        </label>
      </div>
    </div>

    <!-- 年齢範囲 -->
    <div class="space-y-2">
      <label for="age-range">年齢範囲</label>
      <div class="flex items-center space-x-2">
        <input
          id="minAge"
          type="number"
          bind:value={minAge}
          class="w-20 px-3 py-2 border border-[#3AAFA9] rounded-lg"
          min="0"
          placeholder="最小"
        />
        <span>歳 〜</span>
        <input
          id="maxAge"
          type="number"
          bind:value={maxAge}
          class="w-20 px-3 py-2 border border-[#3AAFA9] rounded-lg"
          min="0"
          placeholder="最大"
        />
        <span>歳</span>
      </div>
    </div>

    <!-- 資格 -->
    <div class="space-y-2">
      <label>ボランティア参加者に求める資格</label>
      <input
        id="qualification1"
        bind:value={qualification1}
        placeholder="資格1"
        class="w-full px-3 py-2 border border-[#3AAFA9] rounded-lg mb-2"
      />
      <input
        id="qualification2"
        bind:value={qualification2}
        placeholder="資格2"
        class="w-full px-3 py-2 border border-[#3AAFA9] rounded-lg mb-2"
      />
      <input
        id="qualification3"
        bind:value={qualification3}
        placeholder="資格3"
        class="w-full px-3 py-2 border border-[#3AAFA9] rounded-lg"
      />
    </div>

    <!-- ボランティア時間とVP -->
    <div class="space-y-2">
      <label for="volunteerHours">ボランティア活動時間とVP付与数</label>
      <div class="flex items-center space-x-4">
        <div class="flex items-center space-x-2">
          <input
            id="volunteerHours"
            type="number"
            min="1"
            bind:value={volunteerHours}
            class="w-20 px-3 py-2 border border-[#3AAFA9] rounded-lg"
          />
          <span>時間</span>
        </div>
        <div class="flex items-center space-x-2">
          <span>VP付与数:</span>
          <span class="font-medium">{vpPoints} VP</span>
        </div>
      </div>
    </div>

    <!-- 連絡先情報 -->
    <div class="space-y-2">
      <label for="phoneNumber">電話番号</label>
      <div class="flex items-center space-x-2">
        <input
          type="tel"
          id="phoneNumber"
          bind:value={phoneNumber}
          class="w-full px-3 py-2 border border-[#3AAFA9] rounded-lg"
          placeholder="例: 03-1234-5678"
        />
      </div>
    </div>

    <div class="space-y-2">
      <label for="email">メールアドレス</label>
      <div class="flex items-center space-x-2">
        <input
          type="email"
          id="email"
          bind:value={email}
          class="w-full px-3 py-2 border border-[#3AAFA9] rounded-lg"
          placeholder="例: info@avs.com"
        />
      </div>
    </div>

    <!-- ソーシャルメディア -->
    <div class="space-y-2">
      <h3 class="font-medium">ソーシャルメディア</h3>
      <div class="space-y-2">
        <div class="space-y-2">
          <label for="twitter" class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>X</span>
          </label>
          <input 
            type="url" 
            id="twitter"
            bind:value={twitter}
            placeholder="例: https://x.com/username" 
            class="w-full px-3 py-2 border border-[#3AAFA9] rounded-lg" 
          />
        </div>

        <div class="space-y-2">
          <label for="facebook" class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
            <span>Facebook</span>
          </label>
          <input 
            type="url" 
            id="facebook"
            bind:value={facebook}
            placeholder="例: https://www.facebook.com/pagename" 
            class="w-full px-3 py-2 border border-[#3AAFA9] rounded-lg" 
          />
        </div>

        <div class="space-y-2">
          <label for="instagram" class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
            <span>Instagram</span>
          </label>
          <input 
            type="url" 
            id="instagram"
            bind:value={instagram}
            placeholder="例: https://www.instagram.com/username" 
            class="w-full px-3 py-2 border border-[#3AAFA9] rounded-lg" 
          />
        </div>
      </div>
    </div>

    <!-- SDGs選択 -->
    <div class="space-y-4">
      <label id="sdgs-label">SDGs（複数選択可）</label>
      <div role="group" aria-labelledby="sdgs-label" class="grid grid-cols-6 gap-2">
        {#each Array.from({ length: 17 }, (_, i) => i + 1) as num}
          <button
            type="button"
            on:click={() => handleSDGChange(num)}
            class={`w-12 h-12 flex items-center justify-center rounded-lg ${
              selectedSDGs.includes(num) ? 'ring-2 ring-[#3AAFA9] ring-offset-2' : ''
            }`}
            aria-label="SDG {num}"
          >
            <img
              src={`/sdgs/sdg_icon_${num}.png`}
              alt={`SDG ${num}`}
              class={`w-full h-full object-contain ${
                !selectedSDGs.includes(num) ? 'opacity-50' : ''
              }`}
            />
          </button>
        {/each}
      </div>
    </div>

    <!-- 代表SDGs選択 -->
    <div class="space-y-2">
      <label for="representative-sdg">代表SDGs</label>
      <select 
        id="representative-sdg"
        bind:value={representativeSDG}
        class="w-full px-3 py-2 border border-[#3AAFA9] rounded-lg"
        disabled={selectedSDGs.length === 0}
      >
        <option value="">代表となるSDGsを選択してください</option>
        {#each [...selectedSDGs].sort((a, b) => a - b) as sdg}
          <option value={sdg}>{sdg}</option>
        {/each}
      </select>
    </div>

    <!-- イベントタイプ選択 -->
    <div class="space-y-4">
      <label id="event-types-label">イベント</label>
      <div role="group" aria-labelledby="event-types-label" class="flex justify-between gap-2">
        {#each [
          { id: 1, name: '食べる' },
          { id: 2, name: '見る' },
          { id: 3, name: '学ぶ' },
          { id: 4, name: 'スポーツ' },
          { id: 5, name: '遊ぶ' },
          { id: 6, name: '福祉' }
        ] as event}
          <button
            type="button"
            on:click={() => handleEventTypeChange(event.name)}
            class={`p-3 rounded-lg flex flex-col items-center space-y-2 flex-1 ${
              selectedEventTypes.includes(event.name) ? 'ring-2 ring-[#3AAFA9] ring-offset-2' : ''
            }`}
          >
            <img
              src={`/sdgs/event_icon_${event.id}.png`}
              alt={event.name}
              class={`w-12 h-12 object-contain ${
                !selectedEventTypes.includes(event.name) ? 'opacity-50' : ''
              }`}
            />
            <span class="text-sm font-medium {selectedEventTypes.includes(event.name) ? 'text-[#3AAFA9]' : 'text-gray-700'}">
              {event.name}
            </span>
          </button>
        {/each}
      </div>
    </div>

    <!-- 備考 -->
    <div class="space-y-2">
      <label for="remarks">備考</label>
      <textarea
        id="remarks"
        bind:value={remarks}
        class="w-full px-3 py-2 border border-[#3AAFA9] rounded-lg focus:ring-[#2B7A78] focus:border-[#2B7A78]"
      ></textarea>
    </div>

    <!-- 保存ボタン -->
    <div class="flex justify-end space-x-4">
      {#if isEditMode}
        <button 
          type="button" 
          class="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          on:click={() => dispatch('cancel')}
        >
          キャンセル
        </button>
      {/if}
      <button 
        type="submit" 
        class="px-4 py-2 bg-[#2B7A78] text-white rounded-lg hover:bg-[#3AAFA9]"
      >
        {isEditMode ? '更新' : '保存'}
      </button>
    </div>
  </form>
</div>