export const selectorError = state => state.authentication.error;

export const selectorIsLoading = state => state.authentication.isLoading;

export const selectorToken = state => state.authentication.token;

export const selectorAuthentication = state =>
  state.authentication.authentication;

export const selectorContacts = state => state.authentication.user;
