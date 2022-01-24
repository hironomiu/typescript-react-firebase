import React, { Dispatch, SetStateAction, memo } from 'react'
import { TwitterAuthProvider } from 'firebase/auth'
import { twitterAuthProvider } from '../firebase/auth/twitterAuthProvider'
import { socialMediaAuth } from '../firebase/auth/socialMediaAuth'

const Twitter: React.FC<{ setIsLogin: Dispatch<SetStateAction<boolean>> }> =
  memo(({ setIsLogin }) => {
    const handleOnClick = async (provider: TwitterAuthProvider) => {
      const res = await socialMediaAuth(provider)
      console.log(res)
      if (res.displayName) {
        // TODO displayName取得
        setIsLogin(true)
      }
    }
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
