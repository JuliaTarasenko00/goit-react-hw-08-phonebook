import { useEffect } from 'react';
import { Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { selectorToken, selectorUser } from 'redux/selector';
import { userCurrentThunk } from 'redux/user/userOperation';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ErrorPage from 'page/ErroePage';
import Loader from './Loader';

const Home = lazy(() => import('../page/HomePage/Home'));
const Layout = lazy(() => import('./Navigation/Navigation'));
const Login = lazy(() => import('../page/LoginPage'));
const Register = lazy(() => import('../page/RegisterPage'));
const Contacts = lazy(() => import('../page/ContactPage/ContactsPage'));

export const App = () => {
  const userToken = useSelector(selectorToken);
  const user = useSelector(selectorUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userToken || user) return;

    dispatch(userCurrentThunk());
  }, [userToken, dispatch, user]);

  return (
    <Suspense fallback={<Loader />}>
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
