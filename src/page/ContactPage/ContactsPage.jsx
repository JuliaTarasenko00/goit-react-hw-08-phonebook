import { Container } from '@mui/material';
import { ContactsForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperation';
import {
  selectorAuthentication,
  selectorIsLoadingContacts,
} from 'redux/selector';
import css from './ContactPage.module.css';
import Loader from 'components/Loader';

const Contacts = () => {
  const isLoading = useSelector(selectorIsLoadingContacts);
  const userAut = useSelector(selectorAuthentication);
  const dispatch = useDispatch();

  useEffect(() => {
    userAut && dispatch(fetchContacts());
  }, [dispatch, userAut]);

  return (
    <Container>
      <h2 className={css.titleContact}>Phonebook</h2>
      <ContactsForm />
      <h2 className={css.titleContact}>Contacts</h2>
      <Filter />
      {isLoading && <Loader />}
      <ContactList />
    </Container>
  );
};

export default Contacts;
