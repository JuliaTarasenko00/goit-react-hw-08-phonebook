import { useDispatch, useSelector } from 'react-redux';

import {
  selectorFilterContact,
  selectorIsLoadingContacts,
} from 'redux/selector';
import { deleteContact } from 'redux/contacts/contactsOperation';

export const ContactList = () => {
  const contactsFilteredByName = useSelector(selectorFilterContact);
  const isLoading = useSelector(selectorIsLoadingContacts);
  const dispatch = useDispatch();

  const deleteContacts = id => dispatch(deleteContact(id));

  return (
    <>
      {contactsFilteredByName.length === 0 && !isLoading && (
        <p style={{ marginTop: '10px', color: 'red' }}>
          Your contacts will be here 😉
        </p>
      )}
      <ul>
        {contactsFilteredByName?.map(({ name, number, id }) => (
          <li key={id}>
            <p>• {name}:</p>
            <p>{number}</p>
            <button type="button" onClick={() => deleteContacts(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
