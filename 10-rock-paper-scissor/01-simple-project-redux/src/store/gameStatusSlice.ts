import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameStatus } from "../types";

interface CounterState {
  gameOver: boolean;
  gameStatus: GameStatus | null;
}

const initialState: CounterState = {
  gameOver: false,
  gameStatus: null,
};

export const gameStatusSlice = createSlice({
  name: "gamestatus",
  initialState,
  reducers: {
    changeGameOver: (state, actions: PayloadAction<boolean>) => {
      state.gameOver = actions.payload;
    },
    changeGameStatus: (state, actions: PayloadAction<GameStatus>) => {
      state.gameStatus = actions.payload;
    },
  },
});

export const { changeGameOver, changeGameStatus } = gameStatusSlice.actions;

export default gameStatusSlice.reducer;
