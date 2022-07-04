import { useState, memo } from 'react'
import { emailPasswordAuth } from '../../firebase/auth/emailPasswordAuth'
import { useSetRecoilState } from 'recoil'
import { isLoginState } from '../../recoil'
import Button from '../parts/Button'

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
    <div id="email-password-auth" className="flex flex-col items-center my-2">
      <input
        type="email"
        onChange={(e) => setUserEmail(e)}
        placeholder="email"
        className=" border-[1px] py-1 px-2 w-60"
      />
      <input
        type="password"
        onChange={(e) => setUserPassword(e)}
        placeholder="password"
        className=" border-[1px] py-1 px-2 my-2 w-60"
      />
      <Button onClick={async () => handleOnClick()}>SignIn</Button>
    </div>
  )
})

export default EmailPassword
