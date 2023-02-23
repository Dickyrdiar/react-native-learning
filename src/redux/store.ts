import {configureStore} from '@reduxjs/toolkit';
import {dataSlice} from './fetching';

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});
