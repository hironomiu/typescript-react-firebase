import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="flex items-center h-12 border-b-[1px] shadow-md">
      <div>Header</div>
      <nav className="ml-4">
        <Link to="/" className="mx-2">
          Home
        </Link>
        <Link to="/realtimedatabase" className="mx-2">
          RealTimeDatabase
        </Link>
        <Link to="/firestore" className="mx-2">
          Firestore
        </Link>
      </nav>
    </header>
  )
}

export default Header
