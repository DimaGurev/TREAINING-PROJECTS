import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeStatus } from "../types";
import getRandomNumber from "../utils/getRandomNumber";

interface GameState {
  status: TypeStatus;
  availability: boolean;
  randomNumber: number;
  enteredNumber: string;
  errors: number;
}

const initialState: GameState = {
  status: "inProgress",
  availability: true,
  randomNumber: getRandomNumber(0, 10),
  enteredNumber: "",
  errors: 0,
};

export const counterSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setStatus: (state, actions: PayloadAction<TypeStatus>) => {
      state.status = actions.payload;
    },
    setAvailability: (state, actions: PayloadAction<boolean>) => {
      state.availability = actions.payload;
    },
    setEnteredNumber: (state, actions: PayloadAction<string>) => {
      state.enteredNumber = actions.payload;
    },
    addError: (state) => {
      if (state.errors + 1 === 3) {
        state.status = "defeat";
      }
      state.errors = state.errors + 1;
    },
  },
});

export const { setStatus, setAvailability, setEnteredNumber, addError } =
  counterSlice.actions;

export default counterSlice.reducer;
