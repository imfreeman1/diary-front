import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { googleAuthReducer, calendarReducer } from './slice';
import { stickerReducer } from './stickerSlice';

const rootReducer = combineReducers({ googleAuthReducer, calendarReducer, stickerReducer });

export const store = configureStore({
  reducer: rootReducer,
});
