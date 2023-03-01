import { createSlice } from '@reduxjs/toolkit';

const toDoInitialState = { items: [], todoToRender: null };
const toDoSlice = createSlice({
  name: 'toDo',
  initialState: toDoInitialState,
  reducers: {
    addToDo(state, { payload }) {
      state.items = [...state.items, payload];
    },
    addTodoToRender(state, { payload }) {
      state.todoToRender = { ...payload };
    },
    deleteTodoToRender(state, { payload }) {
      state.todoToRender = null;
    },
  },
});
export const { addToDo, addTodoToRender, deleteTodoToRender } =
  toDoSlice.actions;
export const toDoReducer = toDoSlice.reducer;
