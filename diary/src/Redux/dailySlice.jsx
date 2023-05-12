/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const calNAME = 'editorContent';

export const dailySlice = createSlice({
  name: calNAME,
  initialState: {
    dailyContents: {},
  },
  reducers: {
    setDaily: ({ dailyContents }, { payload, payload: { locdate } }) => {
      if (!dailyContents[`D-${locdate}`]) {
        dailyContents[`D-${locdate}`] = payload;
      }
    },
    setDate: ({ dailyContents }, { payload }) => {
      dailyContents.currentDate = payload;
    },
    setEditor: ({ dailyContents }, { payload: { locdate, editorContent } }) => {
      dailyContents[`D-${locdate}`].editorContent = editorContent;
    },
    setTitle: ({ dailyContents }, { payload: { locdate, titleText } }) => {
      if (dailyContents[`D-${locdate}`]) {
        dailyContents[`D-${locdate}`].titleText = titleText;
      }
    },
    setSave: ({ dailyContents }, { payload: { locdate, titleText, editorContent } }) => {
      if (dailyContents[`D-${locdate}`]) {
        dailyContents[`D-${locdate}`].titleText = titleText;
        dailyContents[`D-${locdate}`].editorContent = editorContent;
      }
    },
  },
});

export const dailyReducer = dailySlice.reducer;
