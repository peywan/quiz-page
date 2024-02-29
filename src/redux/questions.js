import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
  name: "questions",
  initialState: [],

  reducers: {
    addQuestion: (state, action) => {
      const newQuestion = {
        id: nanoid(),
        question: action.payload,
      };
      state.push(newQuestion);
    },
  },
});

export const { addQuestion } = questionSlice.actions;

export default questionSlice.reducer;
