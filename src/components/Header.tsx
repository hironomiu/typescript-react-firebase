import { Link } from 'react-router-dom'

const Header = () => {
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
        <Link to="/firestore" className="mx-2">
          SignOut
        </Link>
      </div>
    </header>
  )
}

export default Header
