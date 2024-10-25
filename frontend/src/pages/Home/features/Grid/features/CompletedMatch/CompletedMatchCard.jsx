import React from "react";
import match from "../../../../../../utils/completeMatch.json";
import CompletedMatchPlayerStats from "./CompletedMatchPlayerStats";
import CompletedMatchStats from "./CompletedMatchStats";
import LiveMatchCard from "../LiveMatchCard/LiveMatchCard";

const CompletedMatchCard = ({ text }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="bg-[#151515] rounded-lg px-4 pb-6 shadow-lg text-white">
        <div className="relative text-center flex justify-center">
          <p className="font-semibold text-sm text-black bg-yellow-300 rounded-br-lg rounded-bl-lg px-10">
            {text ? text : match?.status}
          </p>
          <p className="text-red-600 absolute right-0">
            {match.live && "• Live"}
          </p>
        </div>
        <LiveMatchCard match={match} />
        <hr className="h-[1px] bg-gray-500 border-0 my-2" />
        <CompletedMatchStats match={match} />
      </div>
      <CompletedMatchPlayerStats />
    </div>
  );
};

export default CompletedMatchCard;
