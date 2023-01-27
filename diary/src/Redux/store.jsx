import { configureStore } from '@reduxjs/toolkit';
import { googleAuthReducer } from './slice';

export const store = configureStore({
  reducer: googleAuthReducer,
});
