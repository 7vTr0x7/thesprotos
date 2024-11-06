import { createSlice } from "@reduxjs/toolkit";

const nextMatchSlice = createSlice({
  name: "nextMatch",
  initialState: {
    nextMatch: {},
  },
  reducers: {
    setNextMatch: (state, action) => {
      return {
        ...state,
        nextMatch: action.payload,
      };
    },
  },
});

export const { setNextMatch } = nextMatchSlice.actions;

export default nextMatchSlice.reducer;
