import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Variants, VariantsAnswers } from "../types";
import getRandomVariants from "../utils/getRandomVariants";

interface userDataState {
  playerPoints: number;
  computerPoints: number;
  computerSelection: Variants;
  userSelection: VariantsAnswers;
}

const initialState: userDataState = {
  playerPoints: 0,
  computerPoints: 0,
  computerSelection: getRandomVariants(),
  userSelection: null,
};

export const userDataSlice = createSlice({
  name: "userdata",
  initialState,
  reducers: {
    setRandomVariantsAnswer: (state) => {
      state.computerSelection = getRandomVariants();
    },
    userSelectedAnAnswerOption: (state, actions: PayloadAction<Variants>) => {
      state.userSelection = actions.payload;
    },
    addСomputerPoint: (state) => {
      state.computerPoints = state.computerPoints + 1;
    },
    addPlayerPoint: (state) => {
      state.playerPoints = state.playerPoints + 1;
    },
    clearPlayerSelection: (state) => {
      state.userSelection = null;
    },
  },
});

export const {
  setRandomVariantsAnswer,
  userSelectedAnAnswerOption,
  addСomputerPoint,
  addPlayerPoint,
  clearPlayerSelection,
} = userDataSlice.actions;

export default userDataSlice.reducer;
