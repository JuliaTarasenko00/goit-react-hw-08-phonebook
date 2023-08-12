import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectorAuthentication } from 'redux/selector';
import css from './Navigation.module.css';
import UserMenu from 'components/UserMenu/UserMenu';
import AutMenu from 'components/AutMenu/AutMenu';

const styleActive = ({ isActive }) => {
  return {
    color: isActive ? 'greenyellow' : 'white',
  };
};

const Layout = () => {
  const userAunt = useSelector(selectorAuthentication);

  return (
    <>
      <Container>
        <nav>
          <Box>
            <AppBar position="static">
              <Toolbar>
                <ContactPhoneIcon
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                />
                <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>
                  Contacts
                </Typography>

                <Box className={css.navigation}>
                  <NavLink
                    style={styleActive}
                    className={css.navigationLink}
                    to="/"
                  >
                    Home
                  </NavLink>

                  {!userAunt ? (
                    <UserMenu styleActive={styleActive} />
                  ) : (
                    <AutMenu styleActive={styleActive} />
                  )}
                </Box>
              </Toolbar>
            </AppBar>
          </Box>
        </nav>
      </Container>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
