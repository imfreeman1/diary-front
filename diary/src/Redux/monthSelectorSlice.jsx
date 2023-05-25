/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { MONTH_SELECTOR_NAME } from './sliceName';
import { MONTH_CONST } from 'src/Constants/monthlyConstants';

const dateInMonth = new Date();

export const monthSelectorSlice = createSlice({
  name: MONTH_SELECTOR_NAME,
  initialState: {
    yearInMonth: dateInMonth.getFullYear(),
    selectedMonth: dateInMonth.getMonth(),
  },
  reducers: {
    setMonthRouter: (state, { payload: { willMoveMonth, currYear } }) => {
      state.selectedMonth = willMoveMonth;
      state.yearInMonth = currYear;
    },
    setMoveToLastMonth: (state) => {
      state.selectedMonth --;
      if (state.selectedMonth < 0) {
        state.selectedMonth = 12;
        state.yearInMonth --;
      }
    },
    setMoveToNextMonth: (state) => {
      state.selectedMonth ++;
      if (state.selectedMonth >= 12) {
        state.selectedMonth %=12;
        state.yearInMonth++;
      }
    },
  },
});

export const monthSelectorReducer = monthSelectorSlice.reducer;
