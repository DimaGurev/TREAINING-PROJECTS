import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getRandomNumber from "../utils/getRandomNumber";
import { RootState } from "./store";

interface GameSlice {
  userName: string;
  answerOptions: number[];
  randomNumber: number;
  gameIsClosed: boolean;
}

const initialState: GameSlice = {
  userName: "",
  answerOptions: [],
  randomNumber: getRandomNumber(0, 1000),
  gameIsClosed: false,
};

export const counterSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setUserName: (state, actions: PayloadAction<string>) => {
      state.userName = actions.payload;
    },
    addAnswerOptions: (state, actions: PayloadAction<number>) => {
      state.answerOptions = [...state.answerOptions, actions.payload];
    },
    finishGame: (state) => {
      state.gameIsClosed = true;
    },
  },
});

// Селектор для получения длины массива answerOptions
export const selectAnswerOptionsLength = (state: RootState) =>
  state.game.answerOptions.length;

export const { setUserName, addAnswerOptions, finishGame } =
  counterSlice.actions;
export default counterSlice.reducer;
