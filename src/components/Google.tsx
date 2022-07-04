import { memo } from 'react'
import { GoogleAuthProvider } from 'firebase/auth'
import { googleAuthProvider } from '../firebase/auth/googleAuthProvider'
import { socialMediaAuth } from '../firebase/auth/socialMediaAuth'
import { useSetRecoilState } from 'recoil'
import { isLoginState } from '../recoil'

const Google = memo(() => {
  const setIsLogin = useSetRecoilState(isLoginState)
  const handleSocialMediaAuthClick = async <T extends GoogleAuthProvider>(
    provider: T
  ) => {
    const res = await socialMediaAuth(provider)
    if (res) {
      console.log(res)
      setIsLogin(true)
    }
  }

  return (
    <div id="google-auth" className="flex items-center my-2">
      <span>Google Auth</span>
      <button
        onClick={() => handleSocialMediaAuthClick(googleAuthProvider)}
        className="bg-blue-400 w-28 h-8 ml-2 rounded text-white"
      >
        Google
      </button>
    </div>
  )
})

export default Google
