import { createSlice } from '@reduxjs/toolkit';

const tasksInitialState = {
  filters: '',
};

export const contactsFilter = createSlice({
  name: 'filters',
  initialState: tasksInitialState,
  reducers: {
    filterContacts: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { filterContacts } = contactsFilter.actions;
