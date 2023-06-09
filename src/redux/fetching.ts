import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
// import {config} from 'process';
import {ParsingProps} from '../lib/TypeData/cardMenu.type';
import {TagProps} from '../lib/TypeData/tagCarousel.types';
import {Octokit} from '@octokit/core';
import {useAuthProps} from '../lib/TypeData/userAuthProps';
import {fetchSomeData} from './api';
import {PodcastProps} from '../lib/TypeData/podcase.type';
import {access} from 'fs';
import {detailResponse} from '../lib/TypeData/detailResponse.types';

interface myState {
  // page: number;
  data: ParsingProps[];
  tagList: TagProps[];
  token: string | null;
  isLoading: boolean;
  error: string | null | undefined;
  user?: useAuthProps[];
  podcast: PodcastProps[];
  detail: detailResponse[];
}

const initialState: myState = {
  // page: 0,
  data: [],
  tagList: [],
  user: [],
  podcast: [],
  token: null,
  isLoading: true,
  error: null,
  detail: [],
} as myState;

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (page: number) => {
    const response = await axios.get(
      `https://dev.to/api/articles?page=${page}`,
    );
    return response.data;
  },
);

export const fetchDetail = createAsyncThunk(
  'data/detail',
  async (path: string) => {
    const responseDetail = await axios.get(
      `https://dev.to/api/articles/${path}`,
    );

    return responseDetail.data;
  },
);

export const fetchTaglist = createAsyncThunk('tags/fetchTags', async () => {
  const responseTag = await axios.get('https://dev.to/api/tags');
  return responseTag.data;
});

export const fetchPodcast = createAsyncThunk(
  'podcast/fecthPodcase',
  async () => {
    const responsePodcase = await axios.get(
      'https://dev.to/api/podcast_episodes',
    );
    return responsePodcase.data;
  },
);

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

    // state detail
    builder.addCase(fetchDetail.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
      state.error = null;
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

    // state podcasrt
    // builder.addCase(fetchPodcast.rejected, (state, action) => {
    //   state.isLoading = false;
    //   // state.podcast = action.payload;
    //   state.error = null;
    // });
    // builder.addCase(fetchPodcast.pending, state => {
    //   state.isLoading = true;
    //   state.error = null;
    // });
    // builder.addCase(fetchPodcast.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.error.message;
    // });
  },
});
