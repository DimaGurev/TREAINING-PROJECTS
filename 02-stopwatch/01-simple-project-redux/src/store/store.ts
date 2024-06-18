import { configureStore } from "@reduxjs/toolkit";
import stopwatchReducer from "./stopwatchSlice";

export const store = configureStore({
  reducer: {
    stopwatch: stopwatchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
