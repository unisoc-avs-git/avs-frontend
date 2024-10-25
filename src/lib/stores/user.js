import { writable } from 'svelte/store';

// ローカルストレージからユーザーロールを取得、なければデフォルト値を使用
const getStoredUserRole = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('userRole') || 'enduser';
  }
  return 'enduser';
};

// ストアの作成
const userRole = writable(getStoredUserRole());

// ストアの値が変更されたときにローカルストレージに保存
userRole.subscribe(value => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('userRole', value);
  }
});

export { userRole };