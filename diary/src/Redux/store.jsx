import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { googleAuthReducer } from './googleAuthSlice';
import { calendarReducer } from './calendarSlice';
import { todoReducer } from './todoSlice';
import { modalReducer } from './modalSlice';

const rootReducer = combineReducers({googleAuthReducer, calendarReducer, todoReducer, modalReducer})

export const store = configureStore({
  reducer: rootReducer,
});
