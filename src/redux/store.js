import { configureStore } from "@reduxjs/toolkit";

import questionReducer from "./questions";
import { questions } from '@/redux/questions';

export default configureStore({
  reducer: {
    questions: questionReducer,
  },
});
