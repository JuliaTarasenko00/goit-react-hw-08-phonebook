import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selector';
import { Box, Button, TextField } from '@mui/material';
import css from './ContactsForm.module.css';
import { addContact } from 'redux/contacts/contactsOperation';

export const ContactsForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const formSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const filterNameContact = contacts.some(contacts => contacts.name === name);
    if (filterNameContact) {
      return toast.error(`${name} is already in contacts.`);
    }
    const contact = {
      name,
      number,
    };
    dispatch(addContact(contact));

    form.reset();
  };

  return (
    <>
      <form className={css.formContact} onSubmit={formSubmit}>
        <Box
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
        >
          <TextField
            label="Name"
            variant="filled"
            type="text"
            required
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
          <TextField
            label="Phone"
            variant="filled"
            type="tel"
            name="number"
            required
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          />
          <Button className={css.btnContact} variant="outlined" type="submit">
            Add contact
          </Button>
        </Box>
      </form>

      <ToastContainer position="top-center" theme="colored" />
    </>
  );
};
