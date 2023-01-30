import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { googleAuthReducer, calendarReducer } from './slice';

const rootReducer = combineReducers({googleAuthReducer, calendarReducer})

export const store = configureStore({
  reducer: rootReducer,
});
