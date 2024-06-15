import { createSlice } from "@reduxjs/toolkit";
import countSpaces from "../utils/countSpaces";

interface Statistics {
  value: string;
  chars: number;
  words: number;
  spaces: number;
  letters: number;
}

const initialState: Statistics = {
  value: "",
  chars: 0,
  words: 0,
  spaces: 0,
  letters: 0,
};

export const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    getStatistic: (state, actions) => {
      console.log(actions.payload);

      const value = actions.payload;
      const arr = value.split(" ");
      const arrFilterWord = arr.filter((i: string) =>
        i === "" ? false : true
      );

      state.value = value;
      state.chars = value.length;
      state.words = arrFilterWord.length;
      state.spaces = countSpaces(value);
      state.letters = arrFilterWord.join("").length;
    },
  },
});

export const { getStatistic } = statisticsSlice.actions;
export default statisticsSlice.reducer;
