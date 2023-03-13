import { createSlice } from '@reduxjs/toolkit';

const calNAME = "weeklyPlanner";

export const weeklySlice = createSlice({
  name: calNAME,
  initialState:{
    weeklyContent:[],
  },
  reducers:{
    setWeek: (state, action) => {
      state.weeklyContent = action.payload 
    },
    setWeekText: (state, action) => {
      console.log(action)
      state.weeklyContent[action.payload.idx].text= action.payload.content
    },
  }
}); 

export const weeklyReducer = weeklySlice.reducer;