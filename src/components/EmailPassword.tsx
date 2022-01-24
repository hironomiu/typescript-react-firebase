import React, { Dispatch, SetStateAction, useState, memo } from 'react'
import { emailPasswordAuth } from '../firebase/auth/emailPasswordAuth'

const Email: React.FC<{ setIsLogin: Dispatch<SetStateAction<boolean>> }> = memo(
  ({ setIsLogin }) => {
    const [user, setUser] = useState({ email: '', password: '' })
    const setUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser((user) => ({ ...user, email: e.target.value }))
    }
    const setUserPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser((user) => ({ ...user, password: e.target.value }))
    }
    const handleOnClick = async () => {
      const res = await emailPasswordAuth(user.email, user.password)
      if (res.email) {
        setIsLogin(true)
      } else {
        console.log(res)
      }
    }

    return (
      <div id="email-password-auth">
        <span>Email Password Auth</span>
        <input
          type="email"
          onChange={(e) => setUserEmail(e)}
          placeholder="email"
        />
        <input
          type="password"
          onChange={(e) => setUserPassword(e)}
          placeholder="password"
        />
        <button onClick={async () => handleOnClick()}>SignIn</button>
      </div>
    )
  }
)

export default Email
