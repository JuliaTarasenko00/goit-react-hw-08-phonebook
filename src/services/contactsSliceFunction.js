export const contactsFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const pendingContacts = state => {
  state.isLoading = true;
};

export const fetchFulfilledContacts = (state, { payload }) => {
  state.contacts = payload;
};

export const rejectedContacts = (state, { payload }) => {
  state.error = payload;
};

export const addFulfilledContacts = (state, { payload }) => {
  state.contacts.push(payload);
};

export const deleteFulfilledContacts = (state, { payload }) => {
  state.contacts = state.contacts.filter(contact => contact.id !== payload.id);
};
