import classes from './Header.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { authNActions } from './store/auth';

const Header = () => {
  const dispatch = useDispatch();
  const isAuthN = useSelector((state) => state.authN.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authNActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthN && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
