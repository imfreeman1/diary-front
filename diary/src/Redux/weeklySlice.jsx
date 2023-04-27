import { createSlice, current } from '@reduxjs/toolkit';
import { getMonday } from './src/pages/Utils/useGetWeekly';

const calNAME = 'weeklyPlanner';
export const weeklySlice = createSlice({
  name: calNAME,
  initialState: {
    selectedDateInWeek: getMonday(new Date(), 1).toISOString().substring(0, 10),
    weeklyContents: {},
  },
  reducers: {
    setWeekly: (
      { weeklyContents },
      { payload: { locWeek, currentWeeklyPage } },
    ) => {
      if (!weeklyContents[`W-${locWeek}`]) {
        weeklyContents[`W-${locWeek}`] = currentWeeklyPage;
      }
    },
    setlocWeek: ({ weeklyContents }, { payload }) => {
      weeklyContents.currlocWeek = payload;
    },
    setSelectedWeek: (state, { payload }) => {
      state.selectedDateInWeek = payload;
    },
    setTextContent: (
      { weeklyContents },
      { payload: { idx, content, locThisWeek } },
    ) => {
      weeklyContents[`W-${locThisWeek}`][idx].textContent = content;
    },
  },
});

export const weeklyReducer = weeklySlice.reducer;
