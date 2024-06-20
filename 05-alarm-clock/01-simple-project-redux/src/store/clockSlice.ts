import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface CounterState {
  currentTime: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  isSetTime: boolean;
  isTimerFinished: boolean;
  selectHours: string;
  selectMinutes: string;
  selectAMPM: string;
}

const initialState: CounterState = {
  currentTime: {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  },
  isSetTime: false,
  isTimerFinished: false,
  selectHours: "",
  selectMinutes: "",
  selectAMPM: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCurrentTime: (state) => {
      state.currentTime = {
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds(),
      };
    },
    toggleIsSetTime: (state) => {
      state.isSetTime = !state.isSetTime;
    },
    setIsTimerFinished: (state, actions) => {
      state.isTimerFinished = actions.payload;
    },
    setSelectHours: (state, actions) => {
      state.selectHours = actions.payload;
    },
    setSelectMinutes: (state, actions) => {
      state.selectMinutes = actions.payload;
    },
    setselectAMPM: (state, actions) => {
      state.selectAMPM = actions.payload;
    },
  },
});

export const {
  setCurrentTime,
  toggleIsSetTime,
  setIsTimerFinished,
  setSelectHours,
  setSelectMinutes,
  setselectAMPM,
} = counterSlice.actions;
export default counterSlice.reducer;
