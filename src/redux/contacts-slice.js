import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  contacts,
  deleteContact,
  updateContact,
} from './contacts-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilledContacts = (state, { payload }) => {
  state.error = null;
  state.isLoading = false;
  state.items = payload;
};

const handleFulfilledAddContact = (state, { payload }) => {
  state.error = null;
  state.isLoading = false;
  state.items.push(payload);
};

const handleFulfilledDeleteContact = (state, { payload: { id } }) => {
  state.error = null;
  state.isLoading = false;
  state.items = state.items.filter(el => el.id !== id);
};

const handleFulfilledUpdateContact = (state, { payload }) => {
  state.error = null;
  state.isLoading = false;
  state.items = state.items.map(el =>
    el.id === payload.id ? (el = payload) : el
  );
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(contacts.fulfilled, handleFulfilledContacts)
      .addCase(addContact.fulfilled, handleFulfilledAddContact)
      .addCase(deleteContact.fulfilled, handleFulfilledDeleteContact)
      .addCase(updateContact.fulfilled, handleFulfilledUpdateContact)
      .addMatcher(action => action.type.endsWith('/pending', handlePending))
      .addMatcher(action => action.type.endsWith('/rejected', handleRejected));
  },
});

export const contactsReducer = contactSlice.reducer;
