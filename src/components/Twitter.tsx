import { Dispatch, SetStateAction, memo, useCallback } from 'react'
import { TwitterAuthProvider } from 'firebase/auth'
import { twitterAuthProvider } from '../firebase/auth/twitterAuthProvider'
import { socialMediaAuth } from '../firebase/auth/socialMediaAuth'
import { User } from '../types'

const Twitter: React.FC<{
  setIsLogin: Dispatch<SetStateAction<boolean>>
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
}> = memo(({ setIsLogin, user, setUser }) => {
  const handleOnClick = useCallback(
    async (provider: TwitterAuthProvider) => {
      const res = await socialMediaAuth(provider)
      console.log(res)
      if (res.displayName) {
        const email = res.email ? res.email : ''
        // TODO 共通化
        setUser({ ...user, nickname: res.displayName, email: email })
        setIsLogin(true)
      }
    },
    [user, setUser, setIsLogin]
  )

  return (
    <div id="twitter-auth">
      <span>Twitter Auth</span>
      <button onClick={() => handleOnClick(twitterAuthProvider)}>
        Twitter Auth
      </button>
    </div>
  )
})

export default Twitter
