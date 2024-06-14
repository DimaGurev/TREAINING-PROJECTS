import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./timerSlice";
import secondsSlice from "./minutesSlice";

export const store = configureStore({
  reducer: {
    timer: timerReducer,
    minutes: secondsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
