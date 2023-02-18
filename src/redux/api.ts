import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {ParsingProps} from '../lib/TypeData/cardMenu.type';

interface ResponseState {
  data: ParsingProps[];
  status: 'idle' | 'loading' | 'failed';
  error: null | undefined | string;
}

const initialState: ResponseState = {
  data: [],
  status: 'idle',
  error: null,
};

export const FetchApi = createAsyncThunk('api/article', async () => {
  const response = await axios.get('https://dev.to/api/articles');
  return response.data;
});

export const apiSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(FetchApi.pending, state => {
        state.status = 'loading';
      })
      .addCase(FetchApi.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      })
      .addCase(FetchApi.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
