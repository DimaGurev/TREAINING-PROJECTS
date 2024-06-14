import { createSlice } from "@reduxjs/toolkit";
import { changeStatus } from "./timerSlice";

interface MinutesState {
  value: number | undefined;
}

const initialState: MinutesState = {
  value: undefined,
};

export const minutesSlice = createSlice({
  name: "minutes",
  initialState,
  reducers: {
    changeMinutes: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeMinutes } = minutesSlice.actions;

export default minutesSlice.reducer;
