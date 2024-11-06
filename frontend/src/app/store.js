import { configureStore } from "@reduxjs/toolkit";
import liveMatchReducer from "./slices/liveMatchSlice";
import nextMatchReducer from "./slices/nextMatchSlice";

export const store = configureStore({
  reducer: {
    liveMatch: liveMatchReducer,
    nextMatch: nextMatchReducer,
  },
});
