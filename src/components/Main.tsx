import { FC, useState, memo } from 'react'
import { signOut } from '../firebase/auth/signOut'
import Twitter from './Twitter'
import GitHub from './GitHub'
import Email from './EmailPassword'

const Main: FC = memo(() => {
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const firebaeSignOut = async () => {
    await signOut()
    setIsLogin(false)
  }

  if (!isLogin) {
    return (
      <>
        <Twitter setIsLogin={setIsLogin} />
        <GitHub setIsLogin={setIsLogin} />
        <Email setIsLogin={setIsLogin} />
      </>
    )
  }

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
