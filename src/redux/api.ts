import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

interface ApiState {
  data: any;
  error: string | undefined;
  loading: boolean;
}

const initialState: ApiState = {
  data: null,
  error: undefined,
  loading: false,
};

export const fetchApi = createAsyncThunk('api/fetch', async (url: string) => {
  const response = await axios.get(url);
  return response.data;
});

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    reset: state => initialState,
  },

  extraReducers: builder => {
    builder.addCase(fetchApi.pending, state => {
      state.loading = true;
    });

    builder.addCase(fetchApi.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = undefined;
    });
    builder.addCase(fetchApi.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const {reset} = apiSlice.actions;
export default apiSlice.reducer;
