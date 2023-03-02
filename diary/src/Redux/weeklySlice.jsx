import { createSlice } from '@reduxjs/toolkit';

const calNAME = "weeklyPlanner";

export const weeklySlice = createSlice({
  name: calNAME,
  initialState:{
    weeklyContent:[],
  },
  reducers:{
    setWeek: (state, action) =>{
      state.weeklyContent = action.payload 
    }
  }
}); 

export const weeklyReducer = weeklySlice.reducer;