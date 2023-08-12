import { Container } from '@mui/material';
import css from './Home.module.css';
import phone from '../../img/phone.png';

const Home = () => {
  return (
    <Container>
      <h1 className={css.title}>Welcome to our website! </h1>
      <div className={css.containerHome}>
        <img src={phone} alt="phone" loading="lazy" className={css.img} />

        <p className={css.text}>
          We are glad to present to you our new web service - the Contact site.
          This site was created to give you maximum convenience in managing your
          contacts. Now you will be able to efficiently add, easily sort and, if
          necessary, delete your contacts, without spending excessive time and
          effort. Do not waste time on monotonous movement through the list - we
          will do it for you. And that's not all! To have access to the full
          range of features of our site, we advise you to register. Registration
          will allow you to keep your contacts safe, receive updates and new
          features that we are constantly introducing. You will have full
          control over your data and will be able to use the site 100%.
        </p>
      </div>
    </Container>
  );
};

export default Home;
