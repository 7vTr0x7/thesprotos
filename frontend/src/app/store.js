import { configureStore } from "@reduxjs/toolkit";
import liveMatchReducer from "./slices/liveMatchSlice";
import nextMatchReducer from "./slices/nextMatchSlice";
import upcomingMatchReducer from "./slices/upcomingMatchesSlice";
import playersReducer from "./slices/playerSlice";
import blogsReducer from "./slices/blogsSlice";
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    liveMatch: liveMatchReducer,
    nextMatch: nextMatchReducer,
    upcomingMatch: upcomingMatchReducer,
    players: playersReducer,
    blogs: blogsReducer,
    search: searchReducer,
  },
});
