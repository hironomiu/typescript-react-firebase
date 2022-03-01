import { Dispatch, SetStateAction, memo, useCallback } from 'react'
import { GithubAuthProvider } from 'firebase/auth'
import { socialMediaAuth } from '../firebase/auth/socialMediaAuth'
import { githubAuthProvider } from '../firebase/auth/githubAuthProvider'
import { User } from '../types'

const GitHub: React.FC<{
  setIsLogin: Dispatch<SetStateAction<boolean>>
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
}> = memo(({ setIsLogin, user, setUser }) => {
  const handleOnClick = useCallback(
    async (provider: GithubAuthProvider) => {
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
    <div id="github-auth">
      <span>GitHub Auth</span>
      <button onClick={() => handleOnClick(githubAuthProvider)}>GitHub</button>
    </div>
  )
})

export default GitHub
