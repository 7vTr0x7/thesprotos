import React from "react";
import { league } from "../../../../images";
import { HiArrowLongRight } from "react-icons/hi2";
import MatchCard from "../../../../components/matchCard";

const UpcomingMatchCard = ({ match }) => {
  return (
    <div className="bg-[#151515] text-gray-300 rounded-lg mb-4 p-4 md:p-6 shadow-lg">
      <div className="flex justify-center py-4">
        <img alt={match?.competition} src={league} className="h-16" />
      </div>
      <div className="text-center text-xs">
        <p>{match?.date}</p>
        <p>{match?.stadium}</p>
      </div>
      <div className="mt-6 grid grid-cols-3">
        <MatchCard match={match} />
      </div>
      {match?.status === "Complete" && (
        <div className="flex gap-2 justify-center items-center text-gray-700 text-center text-xs whitespace-nowrap ">
          <p className="cursor-pointer pl-5">View Match</p>
          <HiArrowLongRight className="text-lg mt-1 cursor-pointer" />
        </div>
      )}
    </div>
  );
};

export default UpcomingMatchCard;
