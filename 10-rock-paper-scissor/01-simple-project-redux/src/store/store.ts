import { configureStore } from "@reduxjs/toolkit";
import gameStatusReducer from "./gameStatusSlice";
import userDataReducer from "./userDataSlice";

export const store = configureStore({
  reducer: {
    gameStatus: gameStatusReducer,
    userData: userDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
