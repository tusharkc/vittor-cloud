import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todosList: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      state.todosList.push(action.payload);
    },

    changeTodoStatus: (state, action) => {
      state.todosList[0] = action.payload;
    },
  },
});

export const { addTodo, changeTodoStatus } = todoSlice.actions;

export const selectTodoList = (state) => state.todos.todosList;

export default todoSlice.reducer;
