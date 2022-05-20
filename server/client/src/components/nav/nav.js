import { Link, useHistory } from 'react-router-dom';
import './nav-style.css';
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../../actions";

const Nav = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const authenticated = useSelector((state) => state.auth.authenticated);

  const handleSignOutClick = () => {
    dispatch(signout(() => {
      history.push('/login');
    }));
  }

  const authCheck = () => {
    if (authenticated) {
      return (
        <nav className="navbar navbar-expand-sm ">
          <img className="icon-logo"  alt="" />
            <Link className="nav-title" to='/class'>
              <h2>CrossCheck</h2>
            </Link>
            <Link className="logout" to='/login' onClick={handleSignOutClick}>
              Logout
            </Link>
        </nav>
        );
      } else {
        return (
          <nav className="navbar navbar-expand-sm ">
          <img className="icon-logo"  alt="" />
            <Link className="nav-title" to='/class'>
              <h2>CrossCheck</h2>
            </Link>
            <Link className="logout" to='/signup'>
              Sign Up
            </Link>
            <Link className="logout" to='/login'>
              Sign In
            </Link>
          </nav>
        )
      }
}
return (
  <div>
    {authCheck()}
  </div>
)
}

export default Nav;