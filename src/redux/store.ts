import {configureStore} from '@reduxjs/toolkit';
import blogReducer from './api';

export const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
});
