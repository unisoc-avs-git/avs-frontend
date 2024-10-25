import { w as writable } from "./index.js";
const defaultEvents = [
  {
    title: "春のボランティアフェスタ",
    description: "春の大型連休に合わせて開催するボランティアイベント",
    image: "/volunteer_images/volunteer_1.jpg",
    location: {
      prefecture: "静岡県",
      city: "沼津市",
      address: "本字千本1919-6",
      venue: "千本浜海岸",
      latitude: "35.097542",
      longitude: "138.845697"
    },
    schedule: {
      startDate: "2024-05-01",
      endDate: "2024-05-03",
      startTime: "10:00",
      endTime: "16:00",
      applicationDeadline: "2024-04-25",
      participantLimit: 50
    },
    requirements: {
      gender: "any",
      ageRange: {
        min: 18,
        max: 65
      },
      qualifications: ["普通自動車免許", "ボランティア保険加入者"]
    },
    activity: {
      volunteerHours: 6,
      vpPoints: 60
    },
    contact: {
      phoneNumber: "055-123-4567",
      email: "info@avs.com",
      socialMedia: {
        twitter: "https://twitter.com/avs",
        facebook: "https://facebook.com/avs",
        instagram: "https://instagram.com/avs"
      }
    },
    categories: {
      sdgs: [13, 15],
      representativeSDG: 13,
      eventTypes: ["スポーツ", "福祉"]
    },
    metadata: {
      status: "配信中",
      organizer: "AVSサポートデスク",
      remarks: "雨天中止",
      createdAt: "2024-03-25T10:00:00Z",
      updatedAt: "2024-03-25T10:00:00Z"
    }
  },
  {
    title: "子ども食堂支援イベント",
    description: "地域の子どもたちへの食事提供支援",
    image: "/volunteer_images/volunteer_2.jpg",
    location: {
      prefecture: "静岡県",
      city: "静岡市",
      address: "葵区追手町1-1",
      venue: "市民活動センター",
      latitude: "34.975562",
      longitude: "138.382454"
    },
    schedule: {
      startDate: "2024-06-15",
      endDate: "2024-06-15",
      startTime: "11:00",
      endTime: "14:00",
      applicationDeadline: "2024-06-10",
      participantLimit: 20
    },
    requirements: {
      gender: "any",
      ageRange: {
        min: 20,
        max: null
      },
      qualifications: ["食品衛生責任者"]
    },
    activity: {
      volunteerHours: 3,
      vpPoints: 30
    },
    contact: {
      phoneNumber: "054-123-4567",
      email: "support@avs.com",
      socialMedia: {
        twitter: "https://twitter.com/avs_support",
        facebook: "https://facebook.com/avs_support",
        instagram: "https://instagram.com/avs_support"
      }
    },
    categories: {
      sdgs: [2, 3, 10],
      representativeSDG: 2,
      eventTypes: ["食べる", "福祉"]
    },
    metadata: {
      status: "未配信",
      organizer: "AVSサポートデスク",
      remarks: "エプロン持参必須",
      createdAt: "2024-03-25T11:00:00Z",
      updatedAt: "2024-03-25T11:00:00Z"
    }
  },
  {
    title: "ビーチクリーンアップ",
    description: "海岸清掃活動を通じた環境保護活動",
    image: "/volunteer_images/volunteer_3.jpg",
    location: {
      prefecture: "静岡県",
      city: "浜松市",
      address: "南区白浜町1-1",
      venue: "白浜海岸",
      latitude: "34.682500",
      longitude: "137.615000"
    },
    schedule: {
      startDate: "2024-07-20",
      endDate: "2024-07-21",
      startTime: "09:00",
      endTime: "12:00",
      applicationDeadline: "2024-07-15",
      participantLimit: 100
    },
    requirements: {
      gender: "any",
      ageRange: {
        min: 15,
        max: null
      },
      qualifications: ["ボランティア保険加入者"]
    },
    activity: {
      volunteerHours: 3,
      vpPoints: 30
    },
    contact: {
      phoneNumber: "053-123-4567",
      email: "beach@avs.com",
      socialMedia: {
        twitter: "https://twitter.com/avs_beach",
        facebook: "https://facebook.com/avs_beach",
        instagram: "https://instagram.com/avs_beach"
      }
    },
    categories: {
      sdgs: [14],
      representativeSDG: 14,
      eventTypes: ["スポーツ", "遊ぶ"]
    },
    metadata: {
      status: "配信予定",
      organizer: "AVSサポートデスク",
      remarks: "軍手・タオル持参必須",
      createdAt: "2024-03-25T12:00:00Z",
      updatedAt: "2024-03-25T12:00:00Z"
    }
  },
  {
    title: "高齢者向けIT講座",
    description: "デジタル機器の基本的な使い方を学ぶ講座",
    image: "/volunteer_images/volunteer_4.jpg",
    location: {
      prefecture: "静岡県",
      city: "富士市",
      address: "本市場町1-1",
      venue: "市民交流センター",
      latitude: "35.161344",
      longitude: "138.676180"
    },
    schedule: {
      startDate: "2024-08-05",
      endDate: "2024-08-05",
      startTime: "13:00",
      endTime: "16:00",
      applicationDeadline: "2024-07-31",
      participantLimit: 15
    },
    requirements: {
      gender: "any",
      ageRange: {
        min: 20,
        max: null
      },
      qualifications: ["基本的なPC操作スキル"]
    },
    activity: {
      volunteerHours: 3,
      vpPoints: 30
    },
    contact: {
      phoneNumber: "0545-123-4567",
      email: "it@avs.com",
      socialMedia: {
        twitter: "https://twitter.com/avs_it",
        facebook: "https://facebook.com/avs_it",
        instagram: "https://instagram.com/avs_it"
      }
    },
    categories: {
      sdgs: [4, 10],
      representativeSDG: 4,
      eventTypes: ["学ぶ"]
    },
    metadata: {
      status: "配信完了",
      organizer: "AVSサポートデスク",
      remarks: "ノートPCは貸出あり",
      createdAt: "2024-03-25T13:00:00Z",
      updatedAt: "2024-03-25T13:00:00Z"
    }
  }
];
const getInitialEvents = () => {
  if (typeof window === "undefined") return defaultEvents;
  const saved = localStorage.getItem("events");
  return saved ? JSON.parse(saved) : defaultEvents;
};
const createEventStore = () => {
  const { subscribe, set, update } = writable(getInitialEvents());
  return {
    subscribe,
    addEvent: (event) => update((events) => {
      const updatedEvents = [...events, event];
      if (typeof window !== "undefined") {
        localStorage.setItem("events", JSON.stringify(updatedEvents));
      }
      return updatedEvents;
    }),
    updateEvent: (eventId, updatedEvent) => update((events) => {
      const updatedEvents = events.map(
        (event) => event.metadata.createdAt === eventId ? { ...updatedEvent } : event
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("events", JSON.stringify(updatedEvents));
      }
      return updatedEvents;
    }),
    reset: () => {
      set(defaultEvents);
      if (typeof window !== "undefined") {
        localStorage.setItem("events", JSON.stringify(defaultEvents));
      }
    }
  };
};
const eventStore = createEventStore();
export {
  eventStore as e
};
