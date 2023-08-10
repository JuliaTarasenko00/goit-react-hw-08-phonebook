import { useEffect } from 'react';
import { Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { selectorToken } from 'redux/selector';
import { userCurrentThunk } from 'redux/user/userOperation';

const Layout = lazy(() => import('./Layout/Layout'));
const Login = lazy(() => import('../page/LoginPage'));
const Register = lazy(() => import('../page/RegisterPage'));
const Contacts = lazy(() => import('../page/ContactsPage'));

export const App = () => {
  const userToken = useSelector(selectorToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userToken) return;

    dispatch(userCurrentThunk());
  }, [userToken, dispatch]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
