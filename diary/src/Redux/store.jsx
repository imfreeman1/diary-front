import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { stickerReducer } from './stickerSlice';
import { googleAuthReducer } from './googleAuthSlice';
import { calendarReducer } from './calendarSlice';
import { todoReducer } from './todoSlice';
import { weeklyReducer } from './weeklySlice';

const rootReducer = combineReducers({googleAuthReducer, calendarReducer, todoReducer, weeklyReducer, stickerReducer})

export const store = configureStore({
  reducer: rootReducer,
});
