import { googleAuthSlice } from './googleAuthSlice';
import { monthCalendarSlice } from './monthCalendarSlice';
import { weeklySlice } from './weeklySlice';
import { dailySlice } from './dailySlice';
import { stickerSlice } from './stickerSlice';

export const { setAuth, removeAuth } = googleAuthSlice.actions;

export const {
  setCal, setTodo, delTodo, editTodo,
} = monthCalendarSlice.actions;

export const { setWeekly, setlocWeek, setTextContent } = weeklySlice.actions;

export const {
  setDaily, setDate, setEditor, setTitle,
} = dailySlice.actions;

export const {
  setInit,
  setSticker,
  removeSticker,
  setPosition,
  setResize,
  addTableSticker,
  setSelect,
  resetSelect,
} = stickerSlice.actions;
