import React, { Dispatch, SetStateAction, memo } from 'react'
import { GithubAuthProvider } from 'firebase/auth'
import { socialMediaAuth } from '../firebase/auth/socialMediaAuth'
import { githubAuthProvider } from '../firebase/auth/githubAuthProvider'

const GitHub: React.FC<{ setIsLogin: Dispatch<SetStateAction<boolean>> }> =
  memo(({ setIsLogin }) => {
    const handleOnClick = async (provider: GithubAuthProvider) => {
      const res = await socialMediaAuth(provider)
      if (res.displayName) {
        // TODO displayName取得
        setIsLogin(true)
      }
      console.log(res)
    }
    return (
      <div id="github-auth">
        <span>GitHub Auth</span>
        <button onClick={() => handleOnClick(githubAuthProvider)}>
          GitHub
        </button>
      </div>
    )
  })

export default GitHub
