import { FC, useState } from 'react'
import { GithubAuthProvider } from 'firebase/auth'
import { socialMediaAuth } from '../firebase/auth/socialMediaAuth'
import { githubProvider } from '../firebase/auth/githubProvider'
import { signOut } from '../firebase/auth/signOut'
import { emailAuth } from '../firebase/auth/emailAuth'

const Main: FC = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState({ email: '', password: '' })
  const handleOnClick = async (provider: GithubAuthProvider) => {
    const res = await socialMediaAuth(provider)
    if (res.displayName) {
      setIsLogin(true)
    }
    console.log(res)
  }

  if (!isLogin) {
    return (
      <>
        <button onClick={() => handleOnClick(githubProvider)}>github</button>
        <div>
          <input
            type="text"
            onChange={(e) =>
              setUser((user) => ({ ...user, email: e.target.value }))
            }
          />
          <input
            type="text"
            onChange={(e) =>
              setUser((user) => ({ ...user, password: e.target.value }))
            }
          />
          <button
            onClick={async () => {
              const res = await emailAuth(user.email, user.password)
              if (res.email) {
                setIsLogin(true)
              } else {
                console.log(res)
              }
            }}
          >
            signin
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      <div>
        <span>Lgoine</span>
      </div>
      <button
        onClick={async () => {
          const res = await signOut()
          setIsLogin(false)
          console.log(res)
        }}
      >
        Logout?
      </button>
    </>
  )
}

export default Main
