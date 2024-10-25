import React from "react";
import Header from "../../components/Header";
import UpcomingMatches from "./features/UpcomingMatches/UpcomingMatches";
import Footer from "../../components/Footer";
import Grid from "./features/Grid/Grid";
import News from "./features/News/News";

const Home = () => {
  return (
    <div className="select-none">
      <Header />
      <UpcomingMatches />
      <Grid />
      <News />
      <Footer />
    </div>
  );
};

export default Home;
