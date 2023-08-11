import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectorAuthentication } from 'redux/selector';

const PrivateRoute = ({ children, redirectedTo = '/' }) => {
  const privatePage = useSelector(selectorAuthentication);

  return privatePage ? children : <Navigate to={redirectedTo} />;
};

export default PrivateRoute;
