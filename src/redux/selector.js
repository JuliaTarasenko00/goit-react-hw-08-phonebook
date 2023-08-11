import { createSelector } from '@reduxjs/toolkit';

export const selectorError = state => state.authentication.error;

export const selectorIsLoading = state => state.authentication.isLoading;

export const selectorToken = state => state.authentication.token;

export const selectorAuthentication = state =>
  state.authentication.authentication;

export const selectorUser = state => state.authentication.user;

//=================== selectContacts

export const selectContacts = state => state.contacts.contacts;

export const selectFilterContacts = state => state.filters.filters;

export const selectorIsLoadingContacts = state => state.contacts.isLoading;

export const selectorFilterContact = createSelector(
  [selectContacts, selectFilterContacts],
  (contactName, filterValue) =>
    contactName?.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    )
);
