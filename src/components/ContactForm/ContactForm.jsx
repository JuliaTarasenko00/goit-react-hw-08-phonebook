import { forwardRef, useState } from 'react';
import { IMaskInput } from 'react-imask';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selector';
import { Box, Button, TextField } from '@mui/material';
import css from './ContactsForm.module.css';
import { addContact } from 'redux/contacts/contactsOperation';

const TextMaskCustom = forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+38(000) 000-00-00"
      definitions={{
        '#': /^(0[56789]\d{1})(\d{2})(\d{2})$/,
      }}
      inputRef={ref}
      onAccept={value => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

export const ContactsForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [textmask, setTextmask] = useState(null);

  const handleChange = event => {
    setTextmask(event.target.value);
  };

  const formSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const cleanedNumber = number.replace(/\D/g, '');
    const numberClean = cleanedNumber.split('');
    const deleteNumber = numberClean.splice(0, 2);

    const filterNameContact = contacts.some(contacts => contacts.name === name);
    if (filterNameContact) {
      return toast.error(`${name} is already in contacts.`);
    }
    const contact = {
      name,
      number: numberClean.join(''),
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
            value={textmask}
            onChange={handleChange}
            InputProps={{
              inputComponent: TextMaskCustom,
            }}
            required
            helperText="Please enter a phone number in Ukrainian format"
            pattern="^\+38\(\d{3}\)\d{3}-\d{2}-\d{2}$"
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
