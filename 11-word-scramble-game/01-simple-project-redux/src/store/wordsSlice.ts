import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import mock from "../mock";
import { getRandomNumber } from "../utils/random";
import { shuffleWord } from "../utils/shuffle";

type WordState = { word: string; hint: string }[];

interface WordsState {
  words: WordState;
  wordHint: { word: string; hint: string };
  shuffle: string;
}

const randomNumber = mock[getRandomNumber(0, mock.length)];

const getWordHint = (words: WordState) => {
  return words[getRandomNumber(0, words.length)];
};

const initialState: WordsState = {
  words: mock,
  wordHint: randomNumber,
  shuffle: shuffleWord(randomNumber.word),
};

export const counterSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    regeneration: (state) => {
      state.wordHint = getWordHint(state.words);
      console.log(state.wordHint);
      state.shuffle = shuffleWord(state.wordHint.word);
    },
  },
});

export const { regeneration } = counterSlice.actions;

export default counterSlice.reducer;
