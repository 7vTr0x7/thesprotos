import React from "react";
import LiveMatchCard from "./LiveMatchCard";
import match from "../../../../../../utils/LiveMatch.json";

const LiveMatchInfo = () => {
  return (
    <div className="">
      <p className="text-gray-50 text-2xl  mb-6">Live Match</p>
      <LiveMatchCard match={match} />
    </div>
  );
};

export default LiveMatchInfo;
