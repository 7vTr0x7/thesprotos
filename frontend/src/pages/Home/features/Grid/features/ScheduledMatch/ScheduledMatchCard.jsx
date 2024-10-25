import React from "react";
import ScheduledMatchInfo from "./ScheduledMatchInfo";
import ScheduledMatchStarts from "./ScheduledMatchStarts";
import matchData from "../../../../../../utils/nextMatch.json";

const ScheduledMatchCard = () => {
  return (
    <>
      <div className="bg-[#151515] rounded-lg w-full p-4 mb-4 flex flex-col shadow-lg ">
        <div className="bg-[#151515] rounded-lg p-4">
          <ScheduledMatchInfo match={matchData} />
          <hr className="h-[1px] bg-gray-50 border-0 mt-3 dark:bg-gray-50" />

          <ScheduledMatchStarts match={matchData} />
        </div>
      </div>
    </>
  );
};

export default ScheduledMatchCard;
