import React, { lazy, Suspense } from "react";
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
const Home = lazy(() => import("./pages/Home/Home"));
const Search = lazy(() => import("./pages/Search/Search"));

const App = () => {
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
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
