import { FC, useState, memo, useCallback, useEffect } from 'react'
import { signOut } from '../firebase/auth/signOut'
import Twitter from './Twitter'
import GitHub from './GitHub'
import Google from './Google'
import Email from './EmailPassword'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const Main: FC = memo(() => {
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const [isLoading, setIsloading] = useState<boolean>(false)
  const firebaeSignOut = useCallback(async () => {
    await signOut()
    setIsLogin(false)
  }, [])

  useEffect(() => {
    // TODO 外に出す
    setIsloading(true)
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true)
      } else {
        setIsLogin(false)
      }
      setIsloading(false)
    })
  }, [])

  if (isLoading) return <>Loaging...</>

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
