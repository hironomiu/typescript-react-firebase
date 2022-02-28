# typescript-react-firebase

firebase v9 の認証(メール＆パスワード、GitHub、Twitter、Google),RealTime Databa,Firestore のサンプル

## SetUp

```
npm install
```

## Run

```
npm start
```

## Build

```
npm run build
```

### .env or .env.local

プロジェクトディレクトリ直下に`.env` or `.env.local`を作成し Firebase のクレデンシャルを設定すること(`.env`は`.gitignore`には記述していないため追記すること)また下記の設定値は Firebase の利用するサービスにより不要、追加が必要なものがあるため適時追記、削除すること(下記は REALTIME DATABASE の設定が含まれている)

```
REACT_APP_FIREBASE_API_KEY=''
REACT_APP_FIREBASE_AUTH_DOMAIN=''
REACT_APP_FIREBASE_DATABASE_URL=''
REACT_APP_FIREBASE_PROJECT_ID=''
REACT_APP_FIREBASE_STORAGE_BUCKET=''
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=''
REACT_APP_FIREBASE_APP_ID=''
```

### Mail & Password 認証

Firebase -> Authentication -> Sign-in method -> 新しいプロバイダを追加 -> メール/パスワード を選択

SignUp 実装までは手動で Authentication -> Users -> ユーザを追加 でユーザ登録し認証

### GitHub 認証

GitHub カウントを事前に用意

GitHub -> Settings -> Developer settings -> OAuth Apps -> New OAuth Apps で作成

Firebase -> Authentication -> Sign-in method -> 新しいプロバイダを追加 -> GitHub を選択

### Twitter 認証

Twitter Developer アカウントを事前に用意、Twitter API v2 を利用する場合はアカウント承認後 Elevated の申請も行う

Twitter Developer Portal -> Overview -> Add App で作成

Firebase -> Authentication -> Sign-in method -> 新しいプロバイダを追加 -> Twitter を選択

### Google 認証

Firebase -> Authentication -> Sign-in method -> 新しいプロバイダを追加 -> Google を選択

## Install Memo

```
npx create-react-app . --template typescript
```

```
npm install firebase
npm install --save-dev @types/firebase
```
