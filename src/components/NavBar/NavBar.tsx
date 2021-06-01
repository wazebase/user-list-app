import { Link } from 'react-router-dom';
import './navbar.scss';

const NavBar = () => {

  return (
    <nav id='navbar'>
      <ul className='pagination'>
        <li className="page-link"><Link to="/">Home</Link></li>
        <li className="page-link">
          <Link to="/users">User List</Link>
        </li>
        <li className="page-link">
          <Link to="/create">Create New User</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;