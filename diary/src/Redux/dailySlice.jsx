/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { DAILY_CALENDAR_NAME } from './sliceName';
import { DAILY_CONST } from 'src/Constants/dailyConstant';

export const dailySlice = createSlice({
  name: DAILY_CALENDAR_NAME,
  initialState: {
    dailyContents: {
      currentDate :  '0000-00-00',
      default: {
        locdate: '0000-00-00',
        day: '일',
        titleText: '',
        editorContent: '',
      }
    },
  },
  reducers: {
    setDaily: ({ dailyContents }, { payload, payload: { locdate } }) => {
      if (!dailyContents[DAILY_CONST.MARK(locdate)]) {
        dailyContents[DAILY_CONST.MARK(locdate)] = payload;
      }
    },
    setDate: ({ dailyContents }, { payload }) => {
      dailyContents.currentDate = payload;
    },
    setEditor: ({ dailyContents }, { payload: { locdate, editorContent } }) => {
      dailyContents[DAILY_CONST.MARK(locdate)].editorContent = editorContent;
    },
    setTitle: ({ dailyContents }, { payload: { locdate, titleText } }) => {
      if (dailyContents[DAILY_CONST.MARK(locdate)]) {
        dailyContents[DAILY_CONST.MARK(locdate)].titleText = titleText;
      }
    },
    setSave: ({ dailyContents }, { payload: { locdate, titleText, editorContent } }) => {
      if (dailyContents[DAILY_CONST.MARK(locdate)]) {
        dailyContents[DAILY_CONST.MARK(locdate)].titleText = titleText;
        dailyContents[DAILY_CONST.MARK(locdate)].editorContent = editorContent;
      }
    },
  },
});

export const dailyReducer = dailySlice.reducer;
