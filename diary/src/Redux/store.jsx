import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { googleAuthReducer } from './googleAuthSlice';
import { calendarReducer } from './calendarSlice';
import { todoReducer } from './todoSlice';
import { weeklyReducer } from './weeklySlice';

const rootReducer = combineReducers({googleAuthReducer, calendarReducer, todoReducer, weeklyReducer})

export const store = configureStore({
  reducer: rootReducer,
});
