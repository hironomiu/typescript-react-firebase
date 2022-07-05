import { Link } from 'react-router-dom'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { isLoginState } from '../recoil'
import { signOut } from '../firebase/auth/signOut'

const Header = () => {
  const setIsLogin = useSetRecoilState(isLoginState)
  const isLogin = useRecoilValue(isLoginState)

  const firebaeSignOut = async () => {
    await signOut()
    setIsLogin(false)
  }

  return (
    <header className="flex items-center h-12 border-b-[1px] shadow-md justify-between">
      <div className="flex ml-8">
        <div>
          <Link to="/" className="">
            Web Service
          </Link>
        </div>
        {isLogin ? (
          <nav className="flex ml-4 justify-between">
            <div>
              <Link to="/realtimedatabase" className="mx-2">
                RealTimeDatabase
              </Link>
              <Link to="/firestore" className="mx-2">
                Firestore
              </Link>
            </div>
          </nav>
        ) : null}
      </div>
      {isLogin ? (
        <div className="mr-8">
          <button className="mx-2" onClick={firebaeSignOut}>
            SignOut
          </button>
        </div>
      ) : null}
    </header>
  )
}

export default Header
