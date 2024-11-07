import React, { lazy, Suspense, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ContactUs from "./pages/ContactUs/ContactUs";
import Fixtures from "./pages/Fixtures/Fixtures";
import League from "./pages/League/League";
import LeaguePage from "./pages/League/features/LeaguePage/LeaguePage";
import Match from "./pages/Match/Match";
import NewsPage from "./pages/News/NewsPage";
import PlayerDetails from "./pages/PlayerDetails/PlayerDetails";
import Players from "./pages/Players/Players";
import ShimmerUI from "./pages/ShimmerUI/ShimmerUI";
import NewsDetails from "./pages/News/features/NewsDetails.jsx/NewsDetails";
import { setNextMatch } from "./app/slices/nextMatchSlice";
import { setLiveMatch } from "./app/slices/liveMatchSlice";
import { setUpcomingMatch } from "./app/slices/upcomingMatchesSlice";
import { useDispatch } from "react-redux";
const Home = lazy(() => import("./pages/Home/Home"));
const Search = lazy(() => import("./pages/Search/Search"));

const App = () => {
  const dispatch = useDispatch();

  const getMatchesData = async () => {
    try {
      const res = await fetch(
        "http://localhost:4000/api/user/upcoming-matches",
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!res.ok) {
        console.log("Failed to get data");
      }

      const data = await res.json();

      if (data.success) {
        dispatch(setUpcomingMatch(data.upcomingMatches));
        const liveMatch = data.upcomingMatches.find(
          (match) => match.status === "Live"
        );

        dispatch(setLiveMatch(liveMatch));

        const nextMatch = data.upcomingMatches.find(
          (match) => match.status === "Upcoming"
        );

        dispatch(setNextMatch(nextMatch));
      }
    } catch (error) {
      console.log("failed to get UpcomingMatch Data", error.message);
    }
  };

  useEffect(() => {
    getMatchesData();
  }, []);

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
