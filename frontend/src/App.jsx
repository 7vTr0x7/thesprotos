import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fixtures from "./pages/Fixtures/Fixtures";
import Match from "./pages/Match/Match";
import League from "./pages/League/League";

const Home = lazy(() => import("./pages/Home/Home"));
const Search = lazy(() => import("./pages/Search/Search"));

const App = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<p>Loading..</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/fixtures" element={<Fixtures />} />
            <Route path="/fixtures/:match" element={<Match />} />
            <Route path="/league" element={<League />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
