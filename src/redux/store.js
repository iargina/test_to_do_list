import { configureStore } from '@reduxjs/toolkit';
import { toDoReducer } from './todo/todoSlice';

export const store = configureStore({
  reducer: {
    toDo: toDoReducer,
  },
});
