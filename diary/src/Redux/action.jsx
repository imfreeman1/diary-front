import { googleAuthSlice } from './googleAuthSlice';
import { calendarSlice } from './calendarSlice';
import { weeklySlice } from './weeklySlice';
import { stickerSlice } from './stickerSlice';
import { editorContentSlice } from './editorContentSlice';

export const { setAuth, removeAuth } = googleAuthSlice.actions;

export const { setCal, setTodo, delTodo, editTodo } = calendarSlice.actions;


export const { setWeek } = weeklySlice.actions;

export const {
  setInit, setSticker, removeSticker, setPosition, setResize, addTableSticker, setSelect, resetSelect
} = stickerSlice.actions;

export const { setEditorContent } = editorContentSlice.actions;
