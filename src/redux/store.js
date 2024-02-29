import { configureStore } from "@reduxjs/toolkit";

import questionReducer from "./questions";

export default configureStore({
  reducer: {
    question: questionReducer,
  },
});
