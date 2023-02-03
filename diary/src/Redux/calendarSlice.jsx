import { createSlice } from '@reduxjs/toolkit';

const calNAME = "calendar";

export const calendarSlice = createSlice({
  name: calNAME,
  initialState:{
    calendar:{},
  },
  reducers:{
    setCal: (state, action) =>{
      state.calendar = action.payload 
    }
  }
}); 

export const calendarReducer = calendarSlice.reducer;