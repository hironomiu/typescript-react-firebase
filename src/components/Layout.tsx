import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useSetRecoilState } from 'recoil'
import { userState, isLoginState } from '../recoil'
import Header from './Header'

const Layout = () => {
  const setUser = useSetRecoilState(userState)
  const setIsLogin = useSetRecoilState(isLoginState)
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
    <div className="flex flex-col">
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
