import { createSlice } from '@reduxjs/toolkit';
import { currentUser, logout, register } from './auth-operations';
import { login } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isLoading: false,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.error = null;
};

const handleFulfilledLogout = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isLoading = false;
  state.error = null;
};

const handleFulfilledCurrentUser = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    deleteToken: state => {
      state.token = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(login.fulfilled, handleFulfilled)
      .addCase(logout.fulfilled, handleFulfilledLogout)
      .addCase(currentUser.fulfilled, handleFulfilledCurrentUser)
      .addMatcher(action => action.type.endsWith('/pending', handlePending))
      .addMatcher(action => action.type.endsWith('/rejected', handleRejected));
  },
});

export const { deleteToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
