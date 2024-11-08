import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { setBlogs } from "./app/slices/blogsSlice";
import { setPlayers } from "./app/slices/playerSlice";
import { setResults } from "./app/slices/resultsSlice";
import { setStandings } from "./app/slices/standingsSlice";
import { setUpcomingMatch } from "./app/slices/upcomingMatchesSlice";
import ContactUs from "./pages/ContactUs/ContactUs";
import Fixtures from "./pages/Fixtures/Fixtures";
import League from "./pages/League/League";
import LeaguePage from "./pages/League/features/LeaguePage/LeaguePage";
import Match from "./pages/Match/Match";
import NewsPage from "./pages/News/NewsPage";
import NewsDetails from "./pages/News/features/NewsDetails.jsx/NewsDetails";
import PlayerDetails from "./pages/PlayerDetails/PlayerDetails";
import Players from "./pages/Players/Players";
import ShimmerUI from "./pages/ShimmerUI/ShimmerUI";
import {
  fetchBlogsData,
  fetchMatchesData,
  fetchPlayersData,
  fetchStandingsData,
} from "./utils/apis";
const Home = lazy(() => import("./pages/Home/Home"));
const Search = lazy(() => import("./pages/Search/Search"));

const App = () => {
  const dispatch = useDispatch();
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const getData = async () => {
      try {
        const matchData = await fetchMatchesData(apiUrl);
        if (matchData.success) {
          dispatch(
            setUpcomingMatch(
              matchData.matches.filter(
                (match) =>
                  match.status === "Upcoming" || match.status === "Live"
              )
            )
          );
          dispatch(
            setResults(
              matchData.matches.filter(
                (match) =>
                  match.status === "Live" || match.status === "Completed"
              )
            )
          );
        }

        const blogData = await fetchBlogsData(apiUrl);
        if (blogData.success) {
          dispatch(setBlogs(blogData.blogs));
        }
        const playersData = await fetchPlayersData(apiUrl);
        if (playersData.success) {
          dispatch(setPlayers(playersData.players));
        }
        const standings = await fetchStandingsData(apiUrl);
        if (standings.success) {
          dispatch(setStandings(standings.standingsData));
        }
      } catch (error) {
        console.error("Data fetching failed", error.message);
      }
    };

    getData();
  }, [dispatch, apiUrl]);

  return (
    <div>
      <Router>
        <Suspense fallback={<ShimmerUI />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/fixtures" element={<Fixtures />} />
            <Route path="/fixtures/:match" element={<Match />} />
            <Route path="/league" element={<League />} />
            <Route path="/league/:league" element={<LeaguePage />} />
            <Route path="/players" element={<Players />} />
            <Route path="/players/:player" element={<PlayerDetails />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:category" element={<NewsDetails />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
