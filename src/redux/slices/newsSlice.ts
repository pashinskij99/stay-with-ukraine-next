import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NewsFilterFormatType, NewsFilterProjectType, NewsFilterTagType, NewsFilterTopicType } from '@/components/NewsFilters/NewsFilters.data';

import {
  SetNewsFormatPayload,
  SetNewsProjectPayload,
  SetNewsTagPayload,
  SetNewsTopicPayload,
} from '../types/newsTypes';

export type InitialStateType = {
  tag: NewsFilterTagType | string;
  project: NewsFilterProjectType | string;
  topic: NewsFilterTopicType | string;
  format: NewsFilterFormatType | string;
}

const INITIAL_STATE: InitialStateType = {
  tag: '',
  project: '',
  topic: '',
  format: '',
};

export const newsSlice = createSlice({
  name: 'news',
  initialState: INITIAL_STATE,
  reducers: {
    setNewsTag: (state, action: PayloadAction<SetNewsTagPayload>) => {
      state.tag = action.payload.tag;
    },
    setProject: (state, action: PayloadAction<SetNewsProjectPayload>) => {
      state.project = action.payload.project;
    },
    setTopic: (state, action: PayloadAction<SetNewsTopicPayload>) => {
      state.topic = action.payload.topic;
    },
    setEvent: (state, action: PayloadAction<SetNewsFormatPayload>) => {
      state.format = action.payload.format;
    },
  },
});

export const { setNewsTag, setProject, setTopic } = newsSlice.actions;