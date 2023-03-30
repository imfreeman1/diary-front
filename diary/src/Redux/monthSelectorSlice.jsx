import { MONTH_SELECTOR_NAME } from "./sliceName";
import { createSlice } from "@reduxjs/toolkit";

const dateInMonth = new Date();

//제가 리덕스로 옮기면서 지금 문제가 생겼는데
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
      if (state.selectedMonth > 0) {
        state.selectedMonth -= 1;
      }
      if (state.selectedMonth <= 0) {
        state.selectedMonth += 11;
        state.yearInMonth -= 1;
      }
    },
    setMoveToNextMonth: (state) => {
      if (state.selectedMonth < 11) {
        state.selectedMonth += 1;
      }
      if (state.selectedMonth >= 11) {
        state.selectedMonth -= 11;
        state.yearInMonth += 1;
      }
    },
  },
});

export const monthSelectorReducer = monthSelectorSlice.reducer;
