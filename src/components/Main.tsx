import { memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { isLoginState, userState } from '../recoil'
import { Outlet } from 'react-router-dom'
const Main = memo(() => {
  const isLogin = useRecoilValue(isLoginState)
  const user = useRecoilValue(userState)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogin) {
      navigate('/auth')
    }
  }, [navigate, isLogin])

  return (
    <main className="flex flex-col justify-center items-center mt-8">
      <h1>{user.nickname} is Logged in</h1>
      <div className="flex">
        <Outlet />
      </div>
    </main>
  )
})

export default Main
