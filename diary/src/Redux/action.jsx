import { googleAuthSlice } from './googleAuthSlice';
import { monthCalendarSlice } from './monthCalendarSlice';
import { weeklySlice } from './weeklySlice';
import { dailySlice } from './dailySlice';
import { stickerSlice } from './stickerSlice';
import { monthSelectorSlice } from './monthSelectorSlice';

export const { setAuth, removeAuth } = googleAuthSlice.actions;

export const {
  setCalendar, getTodo, setTodo, delTodo, allDelTodo, editTodo,
} = monthCalendarSlice.actions;

export const {
  setWeekly, setlocWeek, setSelectedWeek, setTextContent, setMoveToWeek, setEditable, setIsWriten,
} = weeklySlice.actions;

export const {
  setDaily, setDate, setEditor, setTitle, setSave,
} = dailySlice.actions;

export const {
  setSticker,
  getStickers,
  removeSticker,
  setPosition,
  setResize,
  addTableSticker,
  setSelect,
  resetSelect,
} = stickerSlice.actions;

export const {
  setMonthRouter,
  setMoveToLastMonth,
  setMoveToNextMonth,
} = monthSelectorSlice.actions;
