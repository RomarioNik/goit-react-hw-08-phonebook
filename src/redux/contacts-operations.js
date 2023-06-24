import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const contacts = createAsyncThunk(
  'contacts/getAllContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', body);
      return data;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContacts',
  async ({ id, user }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, user);
      return data;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);
