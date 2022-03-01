import React, { Dispatch, SetStateAction, memo } from 'react'
import { GoogleAuthProvider } from 'firebase/auth'
import { googleAuthProvider } from '../firebase/auth/googleAuthProvider'
import { socialMediaAuth } from '../firebase/auth/socialMediaAuth'

const Google: React.FC<{ setIsLogin: Dispatch<SetStateAction<boolean>> }> =
  memo(({ setIsLogin }) => {
    const handleClick = async (googleAuthProvider: GoogleAuthProvider) => {
      const res = await socialMediaAuth(googleAuthProvider)
      // TODO displayname取得
      console.log(res)
      setIsLogin(true)
    }
    return (
      <div id="google-auth">
        <span>Google Auth</span>
        <button onClick={() => handleClick(googleAuthProvider)}>Google</button>
      </div>
    )
  })

export default Google
