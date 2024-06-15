import { createSlice } from "@reduxjs/toolkit";

interface MinutesState {
  value: number | string;
}

const initialState: MinutesState = {
  value: "",
};

export const minutesSlice = createSlice({
  name: "minutes",
  initialState,
  reducers: {
   
    changeMinutes: (state, action) => {
      let value = action.payload;

      if (
        value !== undefined &&
        !Number.isNaN(value) &&
        value <= 999999999999999
      ) {
        console.log(+value);
        if (+value === 0) {
          state.value = "";
        } else {
          state.value = +value;
        }
      }

      if (Number.isNaN(value)) {
        state.value = state.value || "";
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeMinutes } = minutesSlice.actions;

export default minutesSlice.reducer;
