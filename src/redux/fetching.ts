import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {ParsingProps} from '../lib/TypeData/cardMenu.type';
import {TagProps} from '../lib/TypeData/tagCarousel.types';

interface myState {
  data: ParsingProps[];
  tagList: TagProps[];
  isLoading: boolean;
  error: string | null | undefined;
}

const initialState: myState = {
  data: [],
  tagList: [],
  isLoading: true,
  error: null,
} as myState;

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get('https://dev.to/api/articles');
  return response.data;
});

export const fetchTaglist = createAsyncThunk('tags/fetchTags', async () => {
  const responseTag = await axios.get('https://dev.to/api/tags');
  return responseTag.data;
});

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // state for data
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

    // state for tagList
    builder.addCase(fetchTaglist.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchTaglist.fulfilled, (state, action) => {
      state.isLoading = false;
      state.tagList = action.payload;
      state.error = null;
    });
    builder.addCase(fetchTaglist.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});
