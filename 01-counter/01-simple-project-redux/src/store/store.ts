import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Типы для хранилища и диспатча
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
