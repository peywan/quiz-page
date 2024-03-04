import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { quiz } from "../data";

export const questionSlice = createSlice({
  name: "questions",
  //sparar frågorna i state
  initialState: { questions: quiz },

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
