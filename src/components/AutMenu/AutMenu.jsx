import { NavLink } from 'react-router-dom';
import css from '../Navigation/Navigation.module.css';

const AutMenu = ({ styleActive }) => {
  return (
    <>
      <NavLink style={styleActive} className={css.navigationLink} to="/login">
        login
      </NavLink>

      <NavLink
        style={styleActive}
        className={css.navigationLink}
        to="/register"
      >
        Register
      </NavLink>
    </>
  );
};

export default AutMenu;
