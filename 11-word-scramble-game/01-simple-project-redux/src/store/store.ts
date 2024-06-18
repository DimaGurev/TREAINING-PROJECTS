import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./timerSlice";
import wordsReducer from "./wordsSlice";

export const store = configureStore({
  reducer: {
    timer: timerReducer,
    words: wordsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
