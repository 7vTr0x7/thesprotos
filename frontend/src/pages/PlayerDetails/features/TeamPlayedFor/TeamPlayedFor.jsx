import React from "react";
import { manUnited } from "../../../../images";

const TeamPlayedFor = ({ player }) => {
  return (
    <div className="col-span-1 relative">
      <p className="text-gray-50">Team Played for</p>
      <div className="absolute top-0 right-7  flex  items-center mt-2  text-gray-500">
        <div className="grid grid-cols-4 gap-6 md:gap-8 text-center">
          <p>P</p>
          <p>W</p>
          <p>D</p>
          <p>L</p>
        </div>
      </div>
      <div className="bg-[#222222] mt-5 rounded-lg text-gray-50 font-semibold">
        {player.teamsPlayedFor.map((team, index) => (
          <div key={team.teamName}>
            <div
              className={`flex items-center justify-between  px-5 ${
                index % 2 === 1 ? "bg-[#151515]" : ""
              } ${
                index === player.teamsPlayedFor.length - 1 ? "rounded-b-lg" : ""
              }`}>
              <div className="flex items-center gap-3 w-1/2">
                <div className={`flex justify-center items-center p-2 `}>
                  <img
                    className="md:h-10 h-8"
                    alt={team.teamName}
                    src={manUnited}
                  />
                </div>
                <div>
                  <p className="font-semibold">{team.teamName}</p>
                  <p className="text-sm text-gray-400">{team.startDate}</p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-6 md:gap-8 w-1/3 text-center text-gray-500">
                <p>{team.stats.played}</p>
                <p>{team.stats.won}</p>
                <p>{team.stats.drawn}</p>
                <p>{team.stats.lost}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPlayedFor;
