import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface GameState {
  status: "input" | "timer";
  isCountdownFinished: boolean;
  name: string;
  selectedDate: string;
}

const initialState: GameState = {
  status: "input",
  isCountdownFinished: false,
  name: "",
  selectedDate: "",
};

export const counterSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    toogleStatus: (state) => {
      // state.status = state.status === "input" ? "timer" : "input";

      if (state.name && state.selectedDate) {
        state.status = state.status === "input" ? "timer" : "input";
      } else {
        if (!state.name) alert("'Name' field is empty");
        if (!state.selectedDate) alert("'Date' field is empty");
      }
    },
    setIsCountdownFinished: (state, actions: PayloadAction<boolean>) => {
      state.isCountdownFinished = actions.payload;
    },
    setName: (state, actions: PayloadAction<string>) => {
      state.name = actions.payload;
    },
    setSelectedDate: (state, actions: PayloadAction<string>) => {
      state.selectedDate = actions.payload;
    },
  },
});

export const {
  toogleStatus,
  setIsCountdownFinished,
  setName,
  setSelectedDate,
} = counterSlice.actions;
export default counterSlice.reducer;
