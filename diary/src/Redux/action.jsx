import { googleAuthSlice } from './googleAuthSlice';
import { calendarSlice } from './calendarSlice';
import { todoSlice } from './todoSlice';

export const { setAuth, removeAuth } = googleAuthSlice.actions;

export const { setCal } = calendarSlice.actions;

export const { setTodo, delTodo, editTodo } = todoSlice.actions;
