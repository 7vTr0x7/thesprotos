import { configureStore } from "@reduxjs/toolkit";
import liveMatchReducer from "./slices/liveMatchSlice";

export const store = configureStore({
  reducer: {
    liveMatch: liveMatchReducer,
  },
});
