import { createSlice, isAnyOf } from '@reduxjs/toolkit';
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
  error: false,
  user: null,
  token: '',
  authentication: false,
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(userRegisterThunk.fulfilled, fulfilledUser)
      .addCase(userLoginThunk.fulfilled, fulfilledUser)
      .addCase(userCurrentThunk.fulfilled, fulfilledUserCurrent)
      .addCase(userLogOutThunk.fulfilled, logOutUserCurrent)
      .addMatcher(
        isAnyOf(
          userRegisterThunk.pending,
          userLoginThunk.pending,
          userCurrentThunk.pending,
          userLogOutThunk.pending
        ),
        pendingUser
      )
      .addMatcher(
        isAnyOf(
          userRegisterThunk.rejected,
          userLoginThunk.rejected,
          userCurrentThunk.rejected,
          userLogOutThunk.rejected
        ),
        rejectedUser
      ),
});
