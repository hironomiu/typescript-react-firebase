# typescript-react-firebase-auth

firebase v9 の認証サンプル

## Run

```
npm start
```

## SetUp

```
npm install
```

### .env or .env.local

プロジェクトディレクトリ直下に`.env` or `.env.local`を作成し Firebase のクレデンシャルを設定すること(`.env`は`.gitignore`には記述していないため追記すること)また下記の設定値は Firebase の利用するサービスにより不要、追加が必要なものがあるため適時追記、削除すること aa

```
REACT_APP_FIREBASE_API_KEY=''
REACT_APP_FIREBASE_AUTH_DOMAIN=''
REACT_APP_FIREBASE_DATABASE_URL=''
REACT_APP_FIREBASE_PROJECT_ID=''
REACT_APP_FIREBASE_STORAGE_BUCKET=''
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=''
REACT_APP_FIREBASE_APP_ID=''
```

### Mail & Password

Firebase -> Authentication -> Sign-in method -> 新しいプロバイダを追加 -> メール/パスワード を選択

SignUp 実装までは手動で Authentication -> Users -> ユーザを追加 でユーザ登録し認証

### GitHub

GitHub カウントを事前に用意

GitHub -> Settings -> Developer settings -> OAuth Apps -> New OAuth Apps で作成

Firebase -> Authentication -> Sign-in method -> 新しいプロバイダを追加 -> GitHub を選択

### Twitter

Twitter Developer アカウントを事前に用意、Twitter API v2 を利用する場合はアカウント承認後 Elevated の申請も行う

Twitter Developer Portal -> Overview -> Add App で作成

Firebase -> Authentication -> Sign-in method -> 新しいプロバイダを追加 -> Twitter を選択

## Install Memo

```
npx create-react-app . --template typescript
```

```
npm install firebase
npm install --save-dev @types/firebase
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).