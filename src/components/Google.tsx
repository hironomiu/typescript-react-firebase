import React, { Dispatch, SetStateAction, memo } from 'react'
import { googleAuthProvider } from '../firebase/auth/googleAuthProvider'
import { socialMediaAuth } from '../firebase/auth/socialMediaAuth'

const Google: React.FC<{ setIsLogin: Dispatch<SetStateAction<boolean>> }> = ({
  setIsLogin,
}) => {
  const login = () => {
    socialMediaAuth(googleAuthProvider)
    setIsLogin(true)
  }
  return (
    <div id="google-auth">
      <span>Google Auth</span>
      <button onClick={() => login()}>Google</button>
    </div>
  )
}

export default Google
