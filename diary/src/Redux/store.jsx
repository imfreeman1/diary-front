import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { stickerReducer } from './stickerSlice';
import { googleAuthReducer } from './googleAuthSlice';
import { monthCalendarReducer } from './monthCalendarSlice';
import { weeklyReducer } from './weeklySlice';
import { dailyReducer } from './dailySlice';

const rootReducer = combineReducers({googleAuthReducer, monthCalendarReducer, weeklyReducer, dailyReducer, stickerReducer})

export const store = configureStore({
  reducer: rootReducer,
});
