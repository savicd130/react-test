import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: null,
  user: {},
  error: '',
};

export const getUserExample = createAsyncThunk('example/getUser', async id => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return res.data;
});

export const exampleUserSlice = createSlice({
  name: 'example',
  initialState,
  extraReducers: {
    [getUserExample.pending]: (state, action) => {
      state.loading = true;
    },
    [getUserExample.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [getUserExample.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default exampleUserSlice.reducer;
