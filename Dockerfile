# ベースイメージ
FROM node:18

# 作業ディレクトリの設定
WORKDIR /app

# 依存関係をインストール
COPY package*.json ./
RUN npm install

# アプリケーションコードをコピー
COPY . .

# ビルド実行
RUN npm run build

# 公開ポート
EXPOSE 8080

# サーバーを起動（サーバーレンダリングのために設定）
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "8080"]
