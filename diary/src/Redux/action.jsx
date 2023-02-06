import { googleAuthSlice } from './googleAuthSlice';
import { calendarSlice } from './calendarSlice';
import { todoSlice } from './todoSlice';
import { modalSlice } from './modalSlice';

export const { setAuth, removeAuth } = googleAuthSlice.actions;

export const { setCal } = calendarSlice.actions;

export const { setTodo, delTodo, editTodo } = todoSlice.actions;

export const { openModal, closeModal, outSideClickModal } = modalSlice.actions;