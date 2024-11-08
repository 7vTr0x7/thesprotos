import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./slices/blogsSlice";
import playersReducer from "./slices/playerSlice";
import resultsReducer from "./slices/resultsSlice";
import searchReducer from "./slices/searchSlice";
import standingsReducer from "./slices/standingsSlice";
import upcomingMatchReducer from "./slices/upcomingMatchesSlice";

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
