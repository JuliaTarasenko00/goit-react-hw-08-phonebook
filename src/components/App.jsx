import { useEffect } from 'react';
import { Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { selectorToken, selectorUser } from 'redux/selector';
import { userCurrentThunk } from 'redux/user/userOperation';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ErrorPage from 'page/ErroePage';
import Home from 'page/Home';

const Layout = lazy(() => import('./Layout/Layout'));
const Login = lazy(() => import('../page/LoginPage'));
const Register = lazy(() => import('../page/RegisterPage'));
const Contacts = lazy(() => import('../page/ContactsPage'));

export const App = () => {
  const userToken = useSelector(selectorToken);
  const user = useSelector(selectorUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userToken || user) return;

    dispatch(userCurrentThunk());
  }, [userToken, dispatch, user]);

  return (
    <Suspense fallback={<div>Login.....</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectedTo="/login">
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
