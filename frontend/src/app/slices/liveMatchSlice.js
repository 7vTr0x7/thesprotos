import { createSlice } from "@reduxjs/toolkit";

const liveMatchSlice = createSlice({
  name: "liveMatch",
  initialState: {
    liveMatch: {},
  },
  reducers: {
    setLiveMatch: (state, action) => {
      return {
        ...state,
        liveMatch: action.payload,
      };
    },
  },
});

export const { setLiveMatch } = liveMatchSlice.actions;

export default liveMatchSlice.reducer;
