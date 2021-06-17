import { Link } from 'react-router-dom';
import './nav-style.css';
//import iconLogo from './icon-logo.png';

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm ">
      <img className="icon-logo"  alt="" />
        <Link className="nav-title" to='/'>
          <h2>Exercise Check in App</h2>
        </Link>
    </nav>
  );
}

export default Nav;