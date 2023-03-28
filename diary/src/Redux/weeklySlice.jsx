import { createSlice, current } from '@reduxjs/toolkit';

const calNAME = 'weeklyPlanner';

export const weeklySlice = createSlice({
  name: calNAME,
  initialState: {
    weeklyContent: {},
  },
  reducers: {
    setWeekly: ({ weeklyContent }, { payload: { locWeek, currentWeekly } }) => {
      if (!weeklyContent[`W-${locWeek}`]) {
        weeklyContent[`W-${locWeek}`] = currentWeekly;
        console.log(current(weeklyContent));
      }
    },
    setlocWeek: ({ weeklyContent }, { payload }) => {
      weeklyContent.currentlocWeek = payload;
    },
    setTextContent: ({ weeklyContent }, { payload: { idx, content, locThisWeek } }) => {
      console.log('action', idx, content);
      weeklyContent[`W-${locThisWeek}`][idx].textContent = content;
    },
  },
});

export const weeklyReducer = weeklySlice.reducer;
