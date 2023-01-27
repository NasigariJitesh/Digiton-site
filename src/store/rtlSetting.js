import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rtl: false,
};

export const counterSlice = createSlice({
  name: "rtl",
  initialState,
  reducers: {
    rtlToggle: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.rtl = !state.rtl;
    },
  },
});

// Action creators are generated for each case reducer function
export const { rtlToggle } = counterSlice.actions;

export default counterSlice.reducer;
