import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { isLoginState, userState } from '../recoil'
import { signOut } from '../firebase/auth/signOut'

const Header = () => {
  const setIsLogin = useSetRecoilState(isLoginState)
  const setUser = useSetRecoilState(userState)
  const user = useRecoilValue(userState)
  const isLogin = useRecoilValue(isLoginState)
  const [nav, setNav] = useState(false)
  const firebaeSignOut = async () => {
    handleNav()
    await signOut()
    setIsLogin(false)
    setUser({ nickname: '', email: '' })
  }

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <header className="flex items-center h-24 border-b-[1px] shadow-md justify-between">
      <div className="flex ml-8">
        <Link to="/" className="">
          <h1 className="w-full text-3xl font-bold  my-8">
            Web Server.({user.nickname ? user.nickname : null})
          </h1>
        </Link>
      </div>
      <div className="flex">
        {isLogin ? (
          <nav className="flex mr-4 justify-between">
            <ul className="hidden md:flex">
              <li>
                <Link to="/realtimedatabase" className="mx-2">
                  RealTimeDatabase
                </Link>
              </li>
              <li>
                <Link to="/firestore" className="mx-2">
                  Firestore
                </Link>
              </li>
              <li>
                <button className="mx-2" onClick={firebaeSignOut}>
                  SignOut
                </button>
              </li>
            </ul>
            <div onClick={handleNav} className="block md:hidden mr-4">
              {!nav ? (
                <AiOutlineClose size={20} />
              ) : (
                <AiOutlineMenu size={20} />
              )}
            </div>
            <div
              className={
                !nav
                  ? 'md:hidden fixed left-0 top-0 w-[60%] border-r h-full bg-white ease-in-out duration-500'
                  : 'fixed ease-in-out top-0 duration-700 left-[-100%] h-full'
              }
            >
              <h1 className="w-full text-3xl pl-8 font-bold  my-8">
                Side Menu.
              </h1>
              <ul className="uppercase p-4">
                <li
                  onClick={handleNav}
                  className="p-4 border-b border-gray-600"
                >
                  <Link to="/" className="mx-2">
                    Home
                  </Link>
                </li>
                <li className="p-4 border-b border-gray-600">
                  <Link
                    onClick={handleNav}
                    to="/realtimedatabase"
                    className="mx-2"
                  >
                    RealTimeDatabase
                  </Link>
                </li>
                <li className="p-4 border-b border-gray-600">
                  {' '}
                  <Link onClick={handleNav} to="/firestore" className="mx-2">
                    Firestore
                  </Link>
                </li>
                <li className="p-4">
                  <button className="mx-2" onClick={firebaeSignOut}>
                    SignOut
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  )
}

export default Header
