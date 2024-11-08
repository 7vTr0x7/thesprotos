import { configureStore } from "@reduxjs/toolkit";
import liveMatchReducer from "./slices/liveMatchSlice";
import nextMatchReducer from "./slices/nextMatchSlice";
import upcomingMatchReducer from "./slices/upcomingMatchesSlice";
import playersReducer from "./slices/playerSlice";
import blogsReducer from "./slices/blogsSlice";
import searchReducer from "./slices/searchSlice";
import standingsReducer from "./slices/standingsSlice";
import resultsReducer from "./slices/resultsSlice";

export const store = configureStore({
  reducer: {
    upcomingMatch: upcomingMatchReducer,
    players: playersReducer,
    blogs: blogsReducer,
    search: searchReducer,
    standings: standingsReducer,
    results: resultsReducer,
  },
});
