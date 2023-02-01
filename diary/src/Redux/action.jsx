import { googleAuthSlice } from './googleAuthSlice';
import { calendarSlice } from './calendarSlice';

export const { setAuth, removeAuth } = googleAuthSlice.actions;

export const { setCal } = calendarSlice.actions;