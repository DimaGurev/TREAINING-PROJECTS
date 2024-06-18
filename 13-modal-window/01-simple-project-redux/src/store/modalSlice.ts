import { createSlice } from "@reduxjs/toolkit";

interface Slice {
  isOpen: boolean;
}

const initialState: Slice = {
  isOpen: false,
};

export const counterSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalOpen: (state) => {
      state.isOpen = true;
    },
    modalClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { modalClose, modalOpen } = counterSlice.actions;

export default counterSlice.reducer;
