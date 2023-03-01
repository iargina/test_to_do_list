import { configureStore } from '@reduxjs/toolkit';
import { toDoReducer } from './todo/todoSlice';
import { modalReducer } from './modal/modal-slice';

export const store = configureStore({
  reducer: {
    toDo: toDoReducer,
    modal: modalReducer,
  },
});
