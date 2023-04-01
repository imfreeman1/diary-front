import { createSlice, current } from '@reduxjs/toolkit';

const calNAME = 'weeklyPlanner';

export const weeklySlice = createSlice({
  name: calNAME,
  initialState: {
    weeklyContents: {},
  },
  reducers: {
    setWeekly: ({ weeklyContents }, { payload: { locWeek, currentWeekly } }) => {
      if (!weeklyContents[`W-${locWeek}`]) {
        weeklyContents[`W-${locWeek}`] = currentWeekly;
      }
    },
    setlocWeek: ({ weeklyContents }, { payload }) => {
      weeklyContents.currentWeek = payload;
    },
    setTextContent: ({ weeklyContents }, { payload: { idx, content, locThisWeek } }) => {
      console.log('action', idx, content);
      weeklyContents[`W-${locThisWeek}`][idx].textContent = content;
    },
  },
});

export const weeklyReducer = weeklySlice.reducer;
