import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
    resetFilter: state => {
      state.filter = '';
    },
  },
});

export const { addFilter, resetFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
