import React, { useEffect, useState } from "react";

import UpcomingMatchCard from "./UpcomingMatchCard";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setLiveMatch } from "../../../../app/slices/liveMatchSlice";
import { setNextMatch } from "../../../../app/slices/nextMatchSlice";

const UpcomingMatches = () => {
  const [page, setPage] = useState(1);
  const [matchPage, setMatchPage] = useState(4);
  const [fadeClass, setFadeClass] = useState("");
  const [upcomingMatches, setUpcomingMatches] = useState([]);

  const dispatch = useDispatch();

  const getUpcomingMatchData = async () => {
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
        setUpcomingMatches(data.upcomingMatches);
        const liveMatch = data.upcomingMatches.find(
          (match) => match.status === "Live"
        );

        dispatch(setLiveMatch(liveMatch));
        dispatch(setNextMatch(data.upcomingMatches[0]));
      }
    } catch (error) {
      console.log("failed to get UpcomingMatch Data", error.message);
    }
  };

  useEffect(() => {
    getUpcomingMatchData();
  }, []);

  const nextPageHandler = () => {
    if (upcomingMatches.length > page * matchPage) {
      setFadeClass("fade-in-right");
      setTimeout(() => {
        setPage((prev) => prev + 1);
        setFadeClass("fade-out-left");
      }, 300);
    }
  };

  const prevPageHandler = () => {
    if (page > 1) {
      setFadeClass("fade-in-left");
      setTimeout(() => {
        setPage((prev) => prev - 1);
        setFadeClass("fade-out-right");
      }, 300);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setMatchPage(window.innerWidth < 640 ? 1 : 4);
      setPage(1);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-black pt-12 pb-3 px-4 sm:px-6 lg:px-14">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold text-gray-100">Upcoming Matches</p>
        <div className="text-gray-300 flex gap-3 text-[20px]">
          <FiArrowLeft onClick={prevPageHandler} className="cursor-pointer" />
          <FiArrowRight onClick={nextPageHandler} className="cursor-pointer" />
        </div>
      </div>
      <div
        className={`my-6 mx-0 gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${fadeClass}`}>
        {upcomingMatches &&
          upcomingMatches
            .slice((page - 1) * matchPage, page * matchPage)
            .map((match) => (
              <UpcomingMatchCard key={match._id} match={match} />
            ))}
      </div>
    </div>
  );
};

export default UpcomingMatches;
