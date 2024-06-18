// Импорт библиотек и сторонних зависимостей
import { createSlice } from "@reduxjs/toolkit";

// Импорт типов и интерфейсов
import { AppDispatch, RootState } from "../store/store";

export interface StopwatchState {
  seconds: number;
  isRunning: boolean;
  intervalId: number | null;
  isButtonStartDisabled: boolean;
  isButtonPauseDisabled: boolean;
}

const initialState: StopwatchState = {
  seconds: 0,
  isRunning: false,
  intervalId: null,
  isButtonStartDisabled: false,
  isButtonPauseDisabled: false,
};

export const stopwatchSlice = createSlice({
  name: "stopwatch",
  initialState,
  reducers: {
    increment: (state) => {
      state.seconds += 1;
    },
    start: (state, action) => {
      state.isRunning = true;
      state.intervalId = action.payload;
      state.isButtonStartDisabled = true;
      state.isButtonPauseDisabled = false;
    },
    stop: (state) => {
      state.isRunning = false;
      state.isButtonStartDisabled = false;
      state.isButtonPauseDisabled = true;
      if (state.intervalId !== null) {
        clearInterval(state.intervalId);
        state.intervalId = null;
      }
    },
    reset: (state) => {
      state.seconds = 0;
      state.isButtonStartDisabled = false;
      state.isButtonPauseDisabled = false;
    },
  },
});

export const { increment, start, stop, reset } = stopwatchSlice.actions;

export const startTimer =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    const { intervalId } = getState().stopwatch;
    if (intervalId === null) {
      const intervalId = setInterval(() => {
        dispatch(increment());
      }, 1000);

      dispatch(start(intervalId));
    }
  };

export const stopTimer =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    const { intervalId } = getState().stopwatch;
    if (intervalId !== null) {
      clearInterval(intervalId);
      dispatch(stop());
    }
  };

export const resetTimer =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    const { intervalId } = getState().stopwatch;
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
    dispatch(stop());
    dispatch(reset());
  };

// Селектор для получения значения секунд из состояния
export const selectSeconds = (state: RootState) => state.stopwatch.seconds;
export const selectIsRunning = (state: RootState) => state.stopwatch.isRunning;
export const selectIsIsButtonStartDisabled = (state: RootState) =>
  state.stopwatch.isButtonStartDisabled;
export const selectIsIsButtonPauseDisabled = (state: RootState) =>
  state.stopwatch.isButtonPauseDisabled;

export default stopwatchSlice.reducer;
