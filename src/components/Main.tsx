import { FC, useState, memo, useCallback } from 'react'
import { signOut } from '../firebase/auth/signOut'
import Twitter from './Twitter'
import GitHub from './GitHub'
import Google from './Google'
import Email from './EmailPassword'

const Main: FC = memo(() => {
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const firebaeSignOut = useCallback(async () => {
    await signOut()
    setIsLogin(false)
  }, [])

  if (!isLogin) {
    return (
      <>
        <Twitter setIsLogin={setIsLogin} />
        <GitHub setIsLogin={setIsLogin} />
        <Google setIsLogin={setIsLogin} />
        <Email setIsLogin={setIsLogin} />
      </>
    )
  }

  // TODO リロード時のログイン状態のチェック

  return (
    <>
      <div>
        <span>Logged in</span>
      </div>
      <button onClick={() => firebaeSignOut()}>Logout?</button>
    </>
  )
})

export default Main
