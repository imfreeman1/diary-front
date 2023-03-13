import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { stickerReducer } from './stickerSlice';
import { googleAuthReducer } from './googleAuthSlice';
import { calendarReducer } from './calendarSlice';
import { weeklyReducer } from './weeklySlice';
import { editorContentReducer } from './editorContentSlice';

const rootReducer = combineReducers({googleAuthReducer, calendarReducer, weeklyReducer, editorContentReducer, stickerReducer})

export const store = configureStore({
  reducer: rootReducer,
});
