import { configureStore } from "@reduxjs/toolkit";
import stopwatchReducer from "./stopwatchSlice"; // Импортируем редьюсер, а не весь слайс

export const store = configureStore({
  reducer: {
    stopwatch: stopwatchReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
