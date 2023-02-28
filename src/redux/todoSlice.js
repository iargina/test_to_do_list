import { createSlice } from '@reduxjs/toolkit';

const toDoInitialState = { items: [] };
const toDoSlice = createSlice({
  name: 'toDo',
  initialState: toDoInitialState,
  reducers: {
    addToDo(state, { payload }) {
      state.items = [...state.items, payload];
    },
  },
});
export const { addToDo } = toDoSlice.actions;
export const toDoReducer = toDoSlice.reducer;
