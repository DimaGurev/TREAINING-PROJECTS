import { createSlice } from "@reduxjs/toolkit";

type DataObjecs = { code: number; key: string };

interface Data {
  value: undefined | DataObjecs;
}

const initialState: Data = {
  value: undefined,
};

export const keyDataSlice = createSlice({
  name: "keyData",
  initialState,
  reducers: {
    getKeyData: (state, action) => {
      const value: undefined | DataObjecs = action.payload;

      if (value === undefined) {
        state.value = value;
      }

      if (value?.code && value?.key) {
        state.value = {
          code: value.code,
          key: value.key,
        };
      }
    },
  },
});

export const { getKeyData } = keyDataSlice.actions;
export default keyDataSlice.reducer;
