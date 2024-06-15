import { configureStore } from "@reduxjs/toolkit";
import statisticsReducer from "./statisticsSlice";

export const store = configureStore({
  reducer: {
    statistics: statisticsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
