import { googleAuthSlice } from './googleAuthSlice';
import { calendarSlice } from './calendarSlice';
import { todoSlice } from './todoSlice';
import { weeklySlice } from './weeklySlice';

export const { setAuth, removeAuth } = googleAuthSlice.actions;

export const { setCal } = calendarSlice.actions;

export const { setTodo, delTodo, editTodo } = todoSlice.actions;

export const { setWeek } = weeklySlice.actions;