import { createSlice } from '@reduxjs/toolkit';

const calNAME = "weeklyPlanner";

export const weeklySlice = createSlice({
  name: calNAME,
  initialState:{
    weeklyPlanner:[],
  },
  reducers:{
    setWeek: (state, action) =>{
      state.weeklyPlanner = action.payload 
    }
  }
}); 

export const weeklyReducer = weeklySlice.reducer;