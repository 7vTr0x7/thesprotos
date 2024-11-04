import React from "react";
import OngoingMatchInfo from "./OngoingMatchInfo";
import OngoingMatchStats from "./OngoingMatchStats";

import match from "../../../../utils/ongoingMatch.json";
import liveMatch from "../../../../utils/LiveMatch.json";
import LiveMatchCard from "../../../Home/features/Grid/features/LiveMatchCard/LiveMatchCard";

const OngoingMatchCard = ({ text }) => {
  return (
    <div className="bg-[#151515] rounded-lg md:w-4/12 w-full mb-2 h-full flex  px-2 flex-col shadow-lg ">
      <div className="relative text-center flex justify-center">
        <p className="font-semibold text-sm text-black bg-yellow-300 rounded-br-lg rounded-bl-lg px-10">
          {text ? text : match?.status}
        </p>
      </div>
      <LiveMatchCard match={liveMatch} />
      <hr className="h-[1px] bg-gray-400 border-0 my-2 dark:bg-gray-700" />
      <OngoingMatchStats match={match} />
    </div>
  );
};

export default OngoingMatchCard;
