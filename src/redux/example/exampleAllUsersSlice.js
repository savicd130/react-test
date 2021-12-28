import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: null,
  users: [],
  error: '',
};

export const getAllUsersExample = createAsyncThunk(
  'example/getUsers',
  async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/');
    return res.data;
  }
);

export const exampleAllUsersSlice = createSlice({
  name: 'example',
  initialState,
  extraReducers: {
    [getAllUsersExample.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllUsersExample.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [getAllUsersExample.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default exampleAllUsersSlice.reducer;
