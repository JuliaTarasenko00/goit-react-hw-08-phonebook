import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authenticationSlice } from './user/userSlice';
import { contactsSlice } from './contacts/contactsSlice';
import { contactsFilter } from './contacts/filterSlise';

const persistConfig = {
  key: 'authentication',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    authentication: persistReducer(persistConfig, authenticationSlice.reducer),
    contacts: contactsSlice.reducer,
    filters: contactsFilter.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
