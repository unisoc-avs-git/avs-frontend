export const conversations = [
    { id: 1, name: "田中 太郎", lastMessage: "はい、承知しました。", time: "14:30", approved: true },
    { id: 2, name: "匿名ユーザー", lastMessage: "ありがとうございます。", time: "昨日", approved: true },
    { id: 3, name: "佐藤 次郎", lastMessage: "明日の予定を確認しました。", time: "2日前", approved: false },
  ];
  
  export const messages = {
    1: [
      { id: 1, sender: "田中 太郎", content: "こんにちは、ボランティアの件でご連絡しました。", time: "14:25" },
      { id: 2, sender: "あなた", content: "はい、どのようなことでしょうか？", time: "14:27" },
      { id: 3, sender: "田中 太郎", content: "来週の土曜日に開催される清掃活動について、詳細を教えていただけますか？", time: "14:28" },
      { id: 4, sender: "あなた", content: "もちろんです。場所は中央公園で、時間は午前9時から12時までです。必要な道具は全て用意しますので、動きやすい服装でお越しください。", time: "14:30" },
      { id: 5, sender: "田中 太郎", content: "はい、承知しました。", time: "14:30" },
    ],
    2: [
      { id: 1, sender: "匿名ユーザー", content: "初めまして。ボランティア活動に興味があります。", time: "昨日" },
      { id: 2, sender: "あなた", content: "ありがとうございます。どのような活動に興味がありますか？", time: "昨日" },
      { id: 3, sender: "匿名ユーザー", content: "環境保護や地域清掃に関心があります。", time: "昨日" },
      { id: 4, sender: "あなた", content: "素晴らしいです。来月に予定している海岸清掃活動はいかがでしょうか？", time: "昨日" },
      { id: 5, sender: "匿名ユーザー", content: "ありがとうございます。", time: "昨日" },
    ],
    3: [
      { id: 1, sender: "佐藤 次郎", content: "こんにちは。高齢者支援のボランティアについて質問があります。", time: "2日前" },
      { id: 2, sender: "あなた", content: "はい、どのような質問でしょうか？", time: "2日前" },
      { id: 3, sender: "佐藤 次郎", content: "活動の頻度や必要なスキルについて教えていただけますか？", time: "2日前" },
      { id: 4, sender: "あなた", content: "活動は月に2回程度で、特別なスキルは必要ありません。コミュニケーション能力が重要です。", time: "2日前" },
      { id: 5, sender: "佐藤 次郎", content: "明日の予定を確認しました。", time: "2日前" },
    ],
  };