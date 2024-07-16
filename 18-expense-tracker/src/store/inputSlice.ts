import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface InputState {
  text: string;
  amount: number | "";
}

const initialState: InputState = {
  text: "",
  amount: "",
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    handleText: (state, actions) => {
      state.text = actions.payload;
    },
    handleAmount: (state, actions) => {
      state.amount = actions.payload;
    },
    handleClear: (state) => {
      state.text = "";
      state.amount = "";
    },
  },
});

export const { handleText, handleAmount, handleClear } = inputSlice.actions;

export const selectText = (state: RootState) => state.input.text;
export const selectAmount = (state: RootState) => state.input.amount;

export default inputSlice.reducer;
