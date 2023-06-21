import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

const handleFulfilledFetchContacts = (state, { payload }) => {
  state.contacts.error = null;
  state.contacts.items = payload;
  state.contacts.isLoading = false;
};

const handleFulfilledAddContact = (state, { payload }) => {
  state.contacts.error = null;
  state.contacts.items.push(payload);
  state.contacts.isLoading = false;
};

const handleFulfilledDeleteContact = (state, { payload: { id } }) => {
  state.contacts.error = null;
  const contactIdx = state.contacts.items.findIndex(el => el.id === id);
  state.contacts.items.splice(contactIdx, 1);
  state.contacts.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledFetchContacts)
      .addCase(addContact.fulfilled, handleFulfilledAddContact)
      .addCase(deleteContact.fulfilled, handleFulfilledDeleteContact)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
