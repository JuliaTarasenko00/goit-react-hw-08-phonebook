import { createSlice } from '@reduxjs/toolkit';
import {
  userCurrentThunk,
  userLogOutThunk,
  userLoginThunk,
  userRegisterThunk,
} from './userOperation';
import {
  fulfilledUser,
  fulfilledUserCurrent,
  logOutUserCurrent,
  pendingUser,
  rejectedUser,
} from 'services/userSliceFunction';

const initialState = {
  isLoading: false,
  error: null,
  user: null,
  token: null,
  authentication: false,
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(userRegisterThunk.pending, pendingUser)
      .addCase(userRegisterThunk.fulfilled, fulfilledUser)
      .addCase(userRegisterThunk.rejected, rejectedUser)
      .addCase(userLoginThunk.pending, pendingUser)
      .addCase(userLoginThunk.fulfilled, fulfilledUser)
      .addCase(userLoginThunk.rejected, rejectedUser)
      .addCase(userCurrentThunk.pending, pendingUser)
      .addCase(userCurrentThunk.fulfilled, fulfilledUserCurrent)
      .addCase(userCurrentThunk.rejected, rejectedUser)
      .addCase(userLogOutThunk.pending, pendingUser)
      .addCase(userLogOutThunk.fulfilled, logOutUserCurrent)
      .addCase(userLogOutThunk.rejected, rejectedUser),
});
