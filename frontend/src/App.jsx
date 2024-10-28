import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fixtures from "./pages/Fixtures/Fixtures";

const Home = lazy(() => import("./pages/Home/Home"));
const Search = lazy(() => import("./pages/Search/Search"));

const App = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<Home />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/fixtures" element={<Fixtures />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
