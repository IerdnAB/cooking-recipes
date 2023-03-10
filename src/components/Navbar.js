import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'


// styles
import './Navbar.css'
import Searchbar from './Searchbar'


export default function Navbar() {

  const { color } = useTheme()


  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Andrei's Recipe Directory</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Add your recipe</Link>
      </nav>
    </div >
  )
}
