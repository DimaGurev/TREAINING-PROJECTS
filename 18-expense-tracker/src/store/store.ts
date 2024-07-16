import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./transactionsSlice";
import inputReducer from "./inputSlice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error(
      "Не удалось загрузить состояние из локального хранилища:",
      err
    );
    return undefined;
  }
};

const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.error("Не удалось сохранить состояние в локальное хранилище:", err);
  }
};

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    input: inputReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
