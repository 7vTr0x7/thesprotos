import React, { useEffect, useState } from "react";
import starPerformers from "../../../../../../utils/starPerformers.json";

const StarPerformers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(starPerformers || []);
  }, []);

  return (
    <div className="bg-[#222222] mt-10 rounded-lg shadow-lg py-7 ">
      <p className="text-gray-50 text-lg md:text-xl font-semibold px-4 md:px-6">
        Star Performers
      </p>

      <div className="grid grid-cols-12 mt-6 text-gray-400   text-xs md:text-sm lg:text-base px-4 md:px-6">
        <p className="col-span-3">Name</p>
        <p className="col-span-3">Achievement</p>
        <p className="col-span-3">Tournament</p>
        <div className="flex gap-4 justify-end col-span-3">
          <p>G</p>
          <p>A</p>
          <p>MP</p>
        </div>
      </div>

      {players.map((player, index) => (
        <div
          key={player.name}
          className={`grid grid-cols-12 mt-4 text-gray-50 text-xs md:text-sm lg:text-base py-3 px-4 md:px-6 ${
            index % 2 === 0 ? "bg-[#151515]" : "bg-transparent"
          }`}>
          <p className="col-span-3 ">{player.name}</p>
          <p className="col-span-3 ">{player.achievement}</p>
          <p className="col-span-3  ">{player.tournament}</p>
          <div className="flex gap-4 justify-end col-span-3">
            <p>{player.goals}</p>
            <p>{player.assists}</p>
            <p>{player.matches_played}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StarPerformers;
