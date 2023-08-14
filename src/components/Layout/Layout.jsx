import AutMenu from 'components/AutMenu/AutMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectorAuthentication } from 'redux/selector';
import css from '../Navigation/Navigation.module.css';

const Layout = () => {
  const userAunt = useSelector(selectorAuthentication);

  const styleActive = ({ isActive }) => {
    return {
      color: isActive && 'greenyellow',
    };
  };
  return (
    <li className={css.navigationList}>
      <NavLink style={styleActive} className={css.navigationLink} to="/">
        Home
      </NavLink>
      {!userAunt ? (
        <AutMenu styleActive={styleActive} />
      ) : (
        <UserMenu styleActive={styleActive} />
      )}
    </li>
  );
};

export default Layout;
