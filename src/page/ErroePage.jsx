import { Container } from '@mui/material';
import error from '../img/errorimg/error.jpg';

const ErrorPage = () => {
  return (
    <Container>
      <img
        src={error}
        alt="Error Page"
        width="800"
        style={{ paddingTop: 40, margin: 'auto' }}
      />
    </Container>
  );
};

export default ErrorPage;
