import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectorAuthentication } from 'redux/selector';
import { userLoginThunk } from 'redux/user/userOperation';

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

    form.reset();
  };

  return (
    <>
      <h1>Register Page</h1>
      <form onSubmit={handelSubmit}>
        <label>
          <span>Email:</span>

          <input
            type="email"
            name="emailUser"
            required
            autoComplete="username"
          />
        </label>
        <br />
        <label>
          <span>Password:</span>
          <input
            type="password"
            name="passwordUser"
            required
            autoComplete="current-password"
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
