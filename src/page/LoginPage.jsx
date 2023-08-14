import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorAuthentication } from 'redux/selector';
import { userLoginThunk } from 'redux/user/userOperation';
import FormLogin from 'components/FormLogin/FormLogin';

const Login = () => {
  const userAut = useSelector(selectorAuthentication);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    userAut && navigate('/contacts');
  }, [userAut, navigate]);

  const handelSubmit = ev => {
    ev.preventDefault();

    const form = ev.target;
    const email = form.elements.emailUser.value;
    const password = form.elements.passwordUser.value;

    const userLogin = {
      email,
      password,
    };

    dispatch(userLoginThunk(userLogin));
  };

  return <FormLogin submitForm={handelSubmit} />;
};

export default Login;
