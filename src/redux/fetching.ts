import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import React from 'react';
import {ParsingProps} from '../lib/TypeData/cardMenu.type';

interface myState {
  data: ParsingProps[];
  isLoading: boolean;
  error: string | null | undefined;
}

const initialState: myState = {
  data: [],
  isLoading: true,
  error: null,
} as myState;

export const fetchData = createAsyncThunk('fetch/data', async () => {
  const response = await axios.get('https://dev.to/api/articles');
  return response.data;
});

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});