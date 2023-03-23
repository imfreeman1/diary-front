import { createSlice } from "@reduxjs/toolkit";

const calNAME = "editorContent";

export const dailySlice = createSlice({
  name: calNAME,
  initialState: {
    dailyContent: {},
  },
  reducers: {
    setDaily: ({ dailyContent }, { payload, payload: { locdate } }) => {
      if (!dailyContent[`D-${locdate}`]) {
        dailyContent[`D-${locdate}`] = payload;
      }
    },
    setDate: ({ dailyContent }, { payload }) => {
      dailyContent.currentDate = payload;
    },
    setEditor: ({ dailyContent }, { payload: { locdate, html } }) => {
      dailyContent[`D-${locdate}`].editorContent = html;
    },
    setTitle: ({ dailyContent }, { payload: { locdate, titleText } }) => {
      if (dailyContent[`D-${locdate}`]) {
        dailyContent[`D-${locdate}`].titleText = titleText;
      }
    },
  },
});

export const dailyReducer = dailySlice.reducer;