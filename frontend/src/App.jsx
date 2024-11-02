import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fixtures from "./pages/Fixtures/Fixtures";
import Match from "./pages/Match/Match";
import League from "./pages/League/League";
import LeaguePage from "./pages/League/features/LeaguePage/LeaguePage";
import ShimmerUI from "./pages/ShimmerUI/ShimmerUI";
import Players from "./pages/Players/Players";
import PlayerDetails from "./pages/PlayerDetails/PlayerDetails";
import ContactUs from "./pages/ContactUs/ContactUs";
import News from "./pages/News/News";

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
            <Route path="/news" element={<News />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
