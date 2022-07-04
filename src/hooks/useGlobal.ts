import { useCallback } from 'react'
import { GithubAuthProvider, TwitterAuthProvider } from 'firebase/auth'
import { useSetRecoilState } from 'recoil'
import { isLoginState, userState } from '../recoil'
import { socialMediaAuth } from '../firebase/auth/socialMediaAuth'
// TODO: とりあえず作った
export const useGlobal = () => {
  const setIsLogin = useSetRecoilState(isLoginState)
  const setUser = useSetRecoilState(userState)
  const handleSocialMediaAuthClick = useCallback(
    async <T extends GithubAuthProvider, TwitterAuthProvider>(provider: T) => {
      const res = await socialMediaAuth(provider)
      console.log(res)
      if (res) {
        const email = res.email ? res.email : ''
        const nickname = res.displayName || 'noname'
        setUser({
          nickname: nickname,
          email: email,
        })
        setIsLogin(true)
      }
    },
    [setIsLogin, setUser]
  )
  return { handleSocialMediaAuthClick }
}
