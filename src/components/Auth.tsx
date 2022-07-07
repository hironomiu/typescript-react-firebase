import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Twitter from './auth/Twitter'
import GitHub from './auth/GitHub'
import Google from './auth/Google'
import EmailPassword from './auth/EmailPassword'
import { useRecoilValue } from 'recoil'
import { isLoginState } from '../recoil'
const Auth = () => {
  const navigate = useNavigate()
  const isLogin = useRecoilValue(isLoginState)

  useEffect(() => {
    if (isLogin) {
      navigate('/')
    }
  }, [navigate, isLogin])

  return (
    <main className="flex flex-col justify-center items-center mt-8">
      <EmailPassword />
      <div className="flex flex-col border-[1px] items-center mt-14 w-96 h-32 rounded">
        <h1 className="my-2">Social SignIn & SignUp</h1>
        <div className="flex my-2">
          <Twitter />
          <GitHub />
          <Google />
        </div>
      </div>
    </main>
  )
}

export default Auth
