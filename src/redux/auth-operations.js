import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', body);
      if ('token' in data) token.set(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', body);
      if ('token' in data) token.set(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (body, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout', body);
      token.unSet();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    token.set(state.auth.token);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
