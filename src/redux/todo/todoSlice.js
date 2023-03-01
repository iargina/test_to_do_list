import { createSlice } from '@reduxjs/toolkit';

const toDoInitialState = {
  items: [
    {
      id: '1',
      title: 'Take a closer look at Irina',
      description:
        'She is not afraid of challenging tasks and is eager to put her knowledge into practice and learn new things. *Here was supposed to be a joke here, like "I will laugh at the phrase `Natasha fell` as if I have never heard it", but I am not sure if it is still relevant ',
      status: null,
    },
  ],
  todoToRender: null,
};
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
