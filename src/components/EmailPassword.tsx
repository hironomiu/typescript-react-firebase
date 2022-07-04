import { useState, memo } from 'react'
import { emailPasswordAuth } from '../firebase/auth/emailPasswordAuth'
import { useSetRecoilState } from 'recoil'
import { isLoginState } from '../recoil'
const EmailPassword = memo(() => {
  const setIsLogin = useSetRecoilState(isLoginState)
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
    <div id="email-password-auth" className="flex items-center my-2">
      <span>Email Password Auth</span>
      <input
        type="email"
        onChange={(e) => setUserEmail(e)}
        placeholder="email"
        className=" border-[1px] px-2 py-1 w-60"
      />
      <input
        type="password"
        onChange={(e) => setUserPassword(e)}
        placeholder="password"
        className=" border-[1px] px-2 py-1 w-60"
      />
      <button
        onClick={async () => handleOnClick()}
        className="bg-blue-400 w-28 h-8 ml-2 rounded text-white"
      >
        SignIn
      </button>
    </div>
  )
})

export default EmailPassword
