import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: "",
  },
  reducers: {
    inputTodo: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {inputTodo} = todoSlice.actions;
export default todoSlice.reducer;
