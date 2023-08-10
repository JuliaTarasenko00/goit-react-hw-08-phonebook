import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectorContacts, selectorToken } from 'redux/selector';
import { userLogOutThunk } from 'redux/user/userOperation';

const Layout = () => {
  const userName = useSelector(selectorContacts);
  const userToken = useSelector(selectorToken);
  const dispatch = useDispatch();

  const logOutClick = () => {
    dispatch(userLogOutThunk());
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </nav>
      {userToken && (
        <>
          <p>Hello {userName?.name}</p>{' '}
          <button type="button" onClick={logOutClick}>
            Log out
          </button>
        </>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
