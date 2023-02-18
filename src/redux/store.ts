import {configureStore} from '@reduxjs/toolkit';
import {apiSlice} from './api';

export const store = configureStore({
  reducer: {
    articles: apiSlice.reducer,
  },
});
