import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Twitter from './Twitter'
import GitHub from './GitHub'
import Google from './Google'
import EmailPassword from './EmailPassword'
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
    <main className="flex justify-center items-center mt-8">
      <div>
        <Twitter />
        <GitHub />
        <Google />
        <EmailPassword />
      </div>
    </main>
  )
}

export default Auth
