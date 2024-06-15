import { createSlice } from "@reduxjs/toolkit";

interface TimerState {
  value: "input" | "control";
}

const initialState: TimerState = {
  value: "input",
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      if (action.payload) {
        state.value === "input"
          ? (state.value = "control")
          : (state.value = "input");
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeStatus } = timerSlice.actions;

export default timerSlice.reducer;
