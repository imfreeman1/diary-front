/* eslint-disable no-param-reassign */
import { createSlice, current } from '@reduxjs/toolkit';
import { DAILY_CONST } from 'src/Constants/dailyConstant';
import { MONTH_CONST } from 'src/Constants/monthlyConstants';
import { DAILY_CALENDAR_NAME } from './sliceName';

export const dailySlice = createSlice({
  name: DAILY_CALENDAR_NAME,
  initialState: {
    dailyContents: {
      currentDate: '0000-00-00',
      default: {
        locdate: '0000-00-00',
        day: '일',
        titleText: '',
        editorContent: '',
      },
    },
  },
  reducers: {
    initDaily: ({ dailyContents }, { payload: { locdate, titleText, editorContent } }) => {
      dailyContents[DAILY_CONST.MARK(locdate)] = {
        locdate,
        day: MONTH_CONST.DAY_OF_WEEK[new Date(locdate).getDay()],
        titleText,
        editorContent,
        isWriten: false,
      };
    },
    setDaily: ({ dailyContents }, { payload, payload: { locdate } }) => {
      if (!dailyContents[DAILY_CONST.MARK(locdate)]) {
        dailyContents[DAILY_CONST.MARK(locdate)] = payload;
      }
    },
    setDailyIsWriten: ({ dailyContents }, { payload: { isWriten } }) => {
      dailyContents[DAILY_CONST.MARK(dailyContents.currentDate)].isWriten = isWriten;
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
