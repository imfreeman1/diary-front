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
      setDate: (state, action) => {
        state.dailyContent.date = action.payload
      },
      setEditor: (state, action) => {
        const locdate = action.payload.locdate
        console.log("Action",action.payload)
        state.dailyContent[`D-${locdate}`].editorContent = action.payload.html
      },
      setTitle: (state, action) => {
        const locdate = action.payload.date
        const titleText = action.payload.titleText
        if(state.dailyContent[`D-${locdate}`]){
          state.dailyContent[`D-${locdate}`].titleText = titleText
        }
      },
    }
})

export const dailyReducer = dailySlice.reducer;