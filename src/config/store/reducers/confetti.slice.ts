import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ConfettiState {
  isRunning: boolean;
}

const initialState: ConfettiState = {
  isRunning: false,
};

export const confettiSlice = createSlice({
  name: "confetti",
  initialState,
  reducers: {
    setConfetti: (state, action: PayloadAction<ConfettiState>) => {
      state.isRunning = action.payload.isRunning;
    },
  },
});

export const {
  setConfetti,
} = confettiSlice.actions;

export default confettiSlice.reducer;