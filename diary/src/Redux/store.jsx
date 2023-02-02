import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { googleAuthReducer } from './googleAuthSlice';
import { calendarReducer } from './calendarSlice';
import { todoReducer } from './todoSlice';

const rootReducer = combineReducers({googleAuthReducer, calendarReducer, todoReducer})

export const store = configureStore({
  reducer: rootReducer,
});
