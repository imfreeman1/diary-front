import { createSlice } from '@reduxjs/toolkit';


const NAME = 'modal';

export const modalSlice = createSlice({
    name: NAME,
    initialState: {
      visible: false,
    },
    reducers: {
      openModal: (state) => {
        state.visible = true
      },
      closeModal: (state) => {
        state.visible = false
      },
      outSideClickModal: (state, action)=>{
        state.visible = false
        
      },
    },
  });

export const modalReducer = modalSlice.reducer;