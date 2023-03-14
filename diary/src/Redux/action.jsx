import { googleAuthSlice } from './googleAuthSlice';
import { monthCalendarSlice } from './monthCalendarSlice';
import { weeklySlice } from './weeklySlice';
import { editorContentSlice } from './editorContentSlice';
import { dailySlice } from './dailySlice';

export const { setAuth, removeAuth } = googleAuthSlice.actions;

export const { setCal, setTodo, delTodo, editTodo } = monthCalendarSlice.actions;

export const { setWeek, setWeekText } = weeklySlice.actions;

export const { setEditorContent } = editorContentSlice.actions;

export const { setDaily, setDate, setEditor, setTitle } = dailySlice.actions;