export const pendingUser = state => {
  state.isLoading = true;
  state.authentication = false;
  state.error = null;
};

export const fulfilledUser = (state, { payload }) => {
  state.isLoading = false;
  state.authentication = true;
  state.user = payload.user;
  state.token = payload.token;
  state.error = null;
};

export const rejectedUser = state => {
  state.isLoading = false;
  state.authentication = false;
  state.error = true;
};

export const fulfilledUserCurrent = (state, { payload }) => {
  state.isLoading = false;
  state.authentication = true;
  state.user = payload;
  state.error = null;
};

export const logOutUserCurrent = state => {
  state.isLoading = false;
  state.authentication = false;
  state.user = null;
  state.token = '';
  state.error = null;
};
