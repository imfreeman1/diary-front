<<<<<<< HEAD
import { googleAuthSlice } from './googleAuthSlice';
import { monthCalendarSlice } from './monthCalendarSlice';
import { weeklySlice } from './weeklySlice';
import { editorContentSlice } from './editorContentSlice';
import { dailySlice } from './dailySlice';
=======
import { googleAuthSlice } from "./googleAuthSlice";
import { calendarSlice } from "./calendarSlice";
import { weeklySlice } from "./weeklySlice";
import { stickerSlice } from "./stickerSlice";
import { editorContentSlice } from "./editorContentSlice";
import { dailySlice } from "./dailySlice";
>>>>>>> main

export const { setAuth, removeAuth } = googleAuthSlice.actions;

export const { setCal, setTodo, delTodo, editTodo } = monthCalendarSlice.actions;

export const { setWeek, setWeekText } = weeklySlice.actions;

export const { setEditorContent } = editorContentSlice.actions;

<<<<<<< HEAD
export const { setDaily, setDate, setEditor, setTitle } = dailySlice.actions;
=======
export const { setDaily, setDate, setEditor, setTitle } = dailySlice.actions;

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
>>>>>>> main
