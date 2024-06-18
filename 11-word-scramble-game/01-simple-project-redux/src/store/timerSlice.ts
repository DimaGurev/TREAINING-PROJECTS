import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TimerState {
  time: number;
  isRunning: boolean;
  initialTime: number;
}

const initialState: TimerState = {
  time: 30,
  isRunning: true,
  initialTime: 30,
};

export const counterSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    startTimer: (state) => {
      state.isRunning = true;
    },
    stopTimer: (state) => {
      state.isRunning = false;
    },
    resetTimer: (state) => {
      state.time = state.initialTime;
      state.isRunning = true;
    },
    tick: (state) => {
      console.log("tick");

      if (state.isRunning && state.time > 0) {
        state.time -= 1;
      }
    },
  },
});

export const { startTimer, stopTimer, resetTimer, tick } = counterSlice.actions;

export default counterSlice.reducer;
