import { Link } from 'react-router-dom';
import './nav-style.css';
//import iconLogo from './icon-logo.png';

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm ">
      <img className="icon-logo"  alt="" />
        <Link className="navbar-nav" to={'/results'}>
          <h3>See Results</h3>
        </Link>
        <Link className="navbar-nav" to={'/'}>
          <h3>Choose a class</h3>
        </Link>
        <Link className="navbar-nav" to={'/post-score'}>
          <h3>Post your score</h3>
        </Link>
    </nav>
  );
}

export default Nav;