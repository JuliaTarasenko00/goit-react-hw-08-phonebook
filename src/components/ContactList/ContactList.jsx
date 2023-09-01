import { useDispatch, useSelector } from 'react-redux';

import {
  selectorFilterContact,
  selectorIsLoadingContacts,
} from 'redux/selector';
import { deleteContact } from 'redux/contacts/contactsOperation';
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { Typography } from 'antd';

export const ContactList = () => {
  const contactsFilteredByName = useSelector(selectorFilterContact);
  const isLoading = useSelector(selectorIsLoadingContacts);
  const dispatch = useDispatch();

  const formatPhoneNumber = phoneNumber => {
    const phone = ('' + phoneNumber).replace(/\D/g, '');
    if (!phone) return;
    const mask = phone.match(/^(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (mask) {
      return '+38(' + mask[1] + ')' + mask[2] + '-' + mask[3] + '-' + mask[4];
    }
    return phoneNumber;
  };

  const deleteContacts = id => dispatch(deleteContact(id));

  return (
    <>
      {contactsFilteredByName.length === 0 && !isLoading && (
        <p
          style={{
            marginTop: 10,
            color: 'red',
            textAlign: 'center',

            fontSize: 40,
          }}
        >
          Your contacts will be here 😉
        </p>
      )}
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {contactsFilteredByName?.map(({ name, number, id }) => (
          <ListItem alignItems="flex-start" key={id}>
            <ListItemAvatar>
              <Avatar alt={name} src="/static/images/avatar.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {formatPhoneNumber(number)}
                  </Typography>
                </React.Fragment>
              }
            />
            <IconButton
              aria-label="delete"
              type="button"
              onClick={() => deleteContacts(id)}
            >
              <DeleteIcon style={{ color: 'red' }} />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};
