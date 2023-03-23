import { createSlice } from "@reduxjs/toolkit";

const calNAME = "weeklyPlanner";

export const weeklySlice = createSlice({
  name: calNAME,
  initialState: {
    weeklyContent: [],
  },
  reducers: {
    setWeek: (state, action) => {
      state.weeklyContent = action.payload;
    },
    setWeekText: (state, action) => {
      // console.log(action.payload, current(state.weeklyContent[action.payload.idx]))
      state.weeklyContent[action.payload.idx].textContent =
        action.payload.content;
    },
  },
});

export const weeklyReducer = weeklySlice.reducer;
