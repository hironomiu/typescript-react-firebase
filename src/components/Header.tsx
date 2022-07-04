import { Link } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { isLoginState } from '../recoil'
import { signOut } from '../firebase/auth/signOut'

const Header = () => {
  const setIsLogin = useSetRecoilState(isLoginState)

  const firebaeSignOut = async () => {
    await signOut()
    setIsLogin(false)
  }

  return (
    <header className="flex items-center h-12 border-b-[1px] shadow-md justify-between">
      <div className="flex ml-8">
        <div>
          <Link to="/" className="">
            Home
          </Link>
        </div>
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
      </div>
      <div className="mr-8">
        <button className="mx-2" onClick={firebaeSignOut}>
          SignOut
        </button>
      </div>
    </header>
  )
}

export default Header
