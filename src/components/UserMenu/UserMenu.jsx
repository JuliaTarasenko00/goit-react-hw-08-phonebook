import { Avatar, Badge, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { userLogOutThunk } from 'redux/user/userOperation';
import { Button } from 'antd';
import { selectorUser } from 'redux/selector';
import { NavLink } from 'react-router-dom';
import css from '../Navigation/Navigation.module.css';

const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px transparent`,
    '&::after': {
      position: 'absolute',
      top: -1,
      left: -1,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(1)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(1.4)',
      opacity: 0,
    },
  },
}));

const UserMenu = ({ styleActive }) => {
  const userName = useSelector(selectorUser);
  const dispatch = useDispatch();
  const logOutClick = () => {
    dispatch(userLogOutThunk());
  };
  return (
    <>
      <NavLink
        style={styleActive}
        className={css.navigationLink}
        to="/contacts"
      >
        Contacts
      </NavLink>
      <p className={css.textAccount}> {userName?.email}</p>

      <StyledBadge
        overlap="circular"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
        style={{ width: 40 }}
      >
        <Avatar alt={userName?.name} src="/static/images/avatar.jpg" />
      </StyledBadge>

      <Button type="primary" danger onClick={logOutClick}>
        Log out
      </Button>
    </>
  );
};

export default UserMenu;
