import { createSlice } from '@reduxjs/toolkit';

const NAME = 'googleAuth';
const calNAME = "calendar";


export const googleAuthSlice = createSlice({
  name: NAME,
  initialState: {
    userInfo: {},
  },
  reducers: {
    setAuth: (state, action) => {
      state.userInfo = action.payload.data;
      action.payload.setUserInfoCookies(action.payload.data);
    },
    removeAuth: (state) => {
      state.userInfo = {};
    },
  },
});

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

export const googleAuthReducer = googleAuthSlice.reducer;
export const calendarReducer = calendarSlice.reducer;