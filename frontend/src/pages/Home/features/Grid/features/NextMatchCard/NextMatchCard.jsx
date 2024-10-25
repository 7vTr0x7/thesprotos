import React from "react";

import { MdKeyboardArrowRight } from "react-icons/md";
import NextMatchInfo from "./NextMatchInfo";

const NextMatchCard = ({ match }) => {
  return (
    <div className=" w-full  h-full flex flex-col my-6">
      <div className="text-white flex justify-between items-center mb-6">
        <p className="text-gray-50 text-2xl  ">Next Match</p>
        <div className="text-gray-50  text-xs flex gap-1 items-center ">
          <p>All Matches</p>
          <MdKeyboardArrowRight className="text-gray-50 text-xl " />
        </div>
      </div>
      <div className="bg-[#151515] rounded-lg px-3 shadow-lg">
        <NextMatchInfo match={match} />
        <hr className="h-[1px] bg-gray-400 border-0 my-2 dark:bg-gray-700" />
        {/* <CompletedMatchStats match={match} /> */}
      </div>
      {/* <CompletedMatchPlayerStats /> */}
    </div>
  );
};

export default NextMatchCard;
