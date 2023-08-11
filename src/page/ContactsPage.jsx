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

const Contacts = () => {
  const isLoading = useSelector(selectorIsLoadingContacts);
  const userAut = useSelector(selectorAuthentication);
  const dispatch = useDispatch();

  useEffect(() => {
    userAut && dispatch(fetchContacts());
  }, [dispatch, userAut]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && (
        <p>Login......</p>
        // <ThreeDots
        //   height="80"
        //   width="80"
        //   radius="9"
        //   color="blue"
        //   ariaLabel="three-dots-loading"
        //   wrapperStyle={{ justifyContent: 'center' }}
        //   wrapperClassName=""
        //   visible={true}
        // />
      )}
      <ContactList />
    </div>
  );
};

export default Contacts;
