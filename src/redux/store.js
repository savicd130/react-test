import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import exampleAllUsersSlice from './example/exampleAllUsersSlice';
import exampleUserSlice from './example/exampleUserSlice';

const store = configureStore({
  reducer: {
    allUsers: exampleAllUsersSlice,
    user: exampleUserSlice,
  },
  middleware: [thunk],
});

export default store;
