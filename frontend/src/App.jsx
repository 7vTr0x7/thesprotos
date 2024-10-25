import React from "react";
import Home from "./pages/Home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search/Search";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
