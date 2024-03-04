import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { quiz } from "../data";
//debugger;
export const questionSlice = createSlice({
  name: "questions",
  //sparar frågorna i state
  initialState: { questions: quiz, activeQuestion: 0 },
  //skapa olika metoder för förändra state
  reducers: {
    addQuestion: (state, action) => {
      const newQuestion = {
        id: nanoid(),
        question: action.payload,
      };
      state.push(newQuestion);
    },
    setActiveQuestion: (state, action) => {
      state.activeQuestion = action.payload;
    },
  },
});

export const { addQuestion, setActiveQuestion } = questionSlice.actions;

export default questionSlice.reducer;
