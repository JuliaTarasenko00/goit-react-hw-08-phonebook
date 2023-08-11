import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addFulfilledContacts,
  contactsFulfilled,
  deleteFulfilledContacts,
  fetchFulfilledContacts,
  pendingContacts,
  rejectedContacts,
} from 'services/contactsSliceFunction';
import { addContact, deleteContact, fetchContacts } from './contactsOperation';

const tasksInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: tasksInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, fetchFulfilledContacts)
      .addCase(addContact.fulfilled, addFulfilledContacts)
      .addCase(deleteContact.fulfilled, deleteFulfilledContacts)
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled
        ),
        contactsFulfilled
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        pendingContacts
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        rejectedContacts
      );
  },
});
