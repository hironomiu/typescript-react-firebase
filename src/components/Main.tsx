import { FC, useState, memo } from 'react'
import { signOut } from '../firebase/auth/signOut'
import Twitter from './Twitter'
import GitHub from './GitHub'
import Email from './EmailPassword'

const Main: FC = memo(() => {
  const [isLogin, setIsLogin] = useState<boolean>(false)

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
        <span>Lgoine</span>
      </div>
      <button
        onClick={async () => {
          const res = await signOut()
          setIsLogin(false)
          console.log(res)
        }}
      >
        Logout?
      </button>
    </>
  )
})

export default Main
