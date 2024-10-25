import React, { useEffect, useState } from "react";
import upcomingMatches from "../../../../utils/upcomingMatches.json";
import UpcomingMatchCard from "./UpcomingMatchCard";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

const UpcomingMatches = () => {
  const [page, setPage] = useState(1);
  const [matchPage, setMatchPage] = useState(4);

  const nextPageHandler = () => {
    if (upcomingMatches.length > page * matchPage) {
      setPage((prev) => prev + 1);
    }
  };

  const prevPageHandler = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
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
      <div className="my-6 mx-0 gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
