import { configureStore } from "@reduxjs/toolkit";
import keyDataReducer from "./keyDataSlice";

export const store = configureStore({
  reducer: {
    keyData: keyDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
