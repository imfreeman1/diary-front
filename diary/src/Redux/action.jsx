import { googleAuthSlice } from './googleAuthSlice';
import { calendarSlice } from './calendarSlice';
import { todoSlice } from './todoSlice';
import { weeklySlice } from './weeklySlice';
import { stickerSlice } from './stickerSlice';


export const { setAuth, removeAuth } = googleAuthSlice.actions;

export const { setCal } = calendarSlice.actions;

export const { setTodo, delTodo, editTodo } = todoSlice.actions;

export const { setWeek } = weeklySlice.actions;

export const {
  setInit, setSticker, removeSticker, setPosition, setResize, addTableSticker, setSelect, resetSelect
} = stickerSlice.actions;

