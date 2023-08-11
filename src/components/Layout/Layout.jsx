import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectorAuthentication, selectorUser } from 'redux/selector';
import { userLogOutThunk } from 'redux/user/userOperation';

const Layout = () => {
  const userAunt = useSelector(selectorAuthentication);
  const userName = useSelector(selectorUser);
  const dispatch = useDispatch();

  const logOutClick = () => {
    dispatch(userLogOutThunk());
  };
  return (
    <main>
      <nav>
        <NavLink to="/">Home</NavLink>
        <br />
        {!userAunt ? (
          <>
            <NavLink to="/login">login</NavLink>
            <br />
            <NavLink to="/register">Register</NavLink>
            <br />
          </>
        ) : (
          <>
            <NavLink to="/contacts">Contacts</NavLink>
            <p>Hello {userName?.name}</p>
            <button type="button" onClick={logOutClick}>
              Log out
            </button>
          </>
        )}
      </nav>
      <Outlet />
    </main>
  );
};

export default Layout;
