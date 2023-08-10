import { useDispatch } from 'react-redux';
import { userRegisterThunk } from 'redux/user/userOperation';

const Register = () => {
  const dispatch = useDispatch();

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

    form.reset();
  };

  return (
    <>
      <h1>Register Page</h1>
      <form onSubmit={handelSubmit}>
        <label>
          <span>Login:</span>
          <input
            type="text"
            name="loginUser"
            required
            autoComplete="username"
          />
        </label>
        <br />
        <label>
          <span>Email:</span>
          <input type="email" name="emailUser" required />
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

export default Register;
