import { createSlice } from '@reduxjs/toolkit';

const calNAME = "editorContent";

export const dailySlice = createSlice({
    name: calNAME,
    initialState:{
      dailyContent:{},
    },
    reducers:{
      setDaily: (state, action) =>{
        const locdate = action.payload.locdate
        if(!state.dailyContent[`D-${locdate}`]){
          state.dailyContent[`D-${locdate}`] = action.payload
        }
      },
      setEditor: (state, action) => {
        const locdate = action.payload.locdate
        console.log("Action",action.payload)
        state.dailyContent[`D-${locdate}`].editorContent = action.payload.html
        // state.date = action.payload.locdate
      },
    }
})

export const dailyReducer = dailySlice.reducer;