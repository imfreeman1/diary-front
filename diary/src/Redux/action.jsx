import { calendarSlice, googleAuthSlice } from './slice';

export const { setAuth, removeAuth } = googleAuthSlice.actions;

export const { setCal } = calendarSlice.actions;