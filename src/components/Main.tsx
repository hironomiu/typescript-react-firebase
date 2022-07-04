import { memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { isLoginState, userState } from '../recoil'
import { signOut } from '../firebase/auth/signOut'
import RealTimeDatabase from './RealTimeDatabase'
import Firestore from './Firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const Main = memo(() => {
  const setIsLogin = useSetRecoilState(isLoginState)
  const isLogin = useRecoilValue(isLoginState)
  const setUser = useSetRecoilState(userState)
  const user = useRecoilValue(userState)
  const navigate = useNavigate()

  const firebaeSignOut = async () => {
    await signOut()
    setIsLogin(false)
  }

  useEffect(() => {
    if (!isLogin) {
      navigate('/auth')
    }
  }, [navigate, isLogin])

  useEffect(() => {
    // TODO 外に出す
    const auth = getAuth()
    onAuthStateChanged(auth, (userData) => {
      if (userData) {
        if (userData) {
          const email = userData.email || ''
          const nickname = userData.displayName || 'noname'
          setUser({
            nickname: nickname,
            email: email,
          })
        }
        setIsLogin(true)
      } else {
        setIsLogin(false)
      }
    })
  }, [setIsLogin, setUser])

  return (
    <main className="flex flex-col justify-center items-center">
      <h1>
        {user.nickname} is Logged in
        <button onClick={firebaeSignOut}>Logout?</button>
      </h1>
      <div className="flex">
        <RealTimeDatabase />
        <Firestore />
      </div>
    </main>
  )
})

export default Main
