import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import UpcomingMatches from "./features/UpcomingMatches/UpcomingMatches";
import Footer from "../../components/Footer";
import Grid from "./features/Grid/Grid";
import News from "./features/News/News";
import { setNextMatch } from "../../app/slices/nextMatchSlice";
import { setLiveMatch } from "../../app/slices/liveMatchSlice";
import { useDispatch } from "react-redux";
import { setUpcomingMatch } from "../../app/slices/upcomingMatchesSlice";

const Home = () => {
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
