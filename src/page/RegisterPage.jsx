import FormRegister from 'components/FormRegister/FormRegister';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectorAuthentication } from 'redux/selector';
import { userRegisterThunk } from 'redux/user/userOperation';

const Register = () => {
  const userAut = useSelector(selectorAuthentication);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    userAut && navigate('/contacts');
  }, [userAut, navigate]);

  const handelSubmit = ev => {
    ev.preventDefault();

    const form = ev.target;
    const name = form.elements.loginUser.value;
    const email = form.elements.emailUser.value;
    const password = form.elements.passwordUser.value;

    const userRegister = {
      name,
      email,
      password,
    };

    dispatch(userRegisterThunk(userRegister));
  };

  return <FormRegister submitForm={handelSubmit} />;
};

export default Register;
