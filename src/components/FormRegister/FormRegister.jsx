import { Box, Button, Container, TextField } from '@mui/material';
import css from '../FormLogin/FormLogin.module.css';
import RandomImg from 'components/RandomImg/RandomImg';

const FormRegister = ({ submitForm, errorInput }) => {
  return (
    <Container>
      <div className={css.container}>
        <RandomImg />

        <form onSubmit={submitForm}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              '& .MuiTextField-root': { width: '35ch' },
            }}
          >
            <TextField
              label={'Login'}
              type="text"
              name="loginUser"
              required
              helperText="Please enter your login"
              autoComplete="username"
              margin="normal"
              error={errorInput}
            />
            <TextField
              label={'Email'}
              type="email"
              name="emailUser"
              required
              helperText="Please enter your email"
              autoComplete="username"
              margin="normal"
              error={errorInput}
            />
            <TextField
              label={'Password'}
              type="password"
              name="passwordUser"
              required
              helperText="Please enter your password"
              autoComplete="username"
              margin="normal"
              error={errorInput}
            />

            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </div>
    </Container>
  );
};

export default FormRegister;
