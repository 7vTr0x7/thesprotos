import React, { useEffect, useState } from "react";
import starPerformers from "../../../../../../utils/starPerformers.json";

const StarPerformers = () => {
  // Optional: Add a state for error handling or loading state
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Load star performers or handle errors here if needed
    setPlayers(starPerformers || []);
  }, []);

  return (
    <div className="bg-[#222222] mt-10 rounded-lg shadow-lg py-7 px-5 md:px-7">
      <p className="text-gray-50 text-xl font-semibold">Star Performers</p>

      <div className="grid grid-cols-12 mt-6 text-gray-400 px-3 text-sm md:text-base  ">
        <p className="col-span-3 ">Name</p>
        <p className="col-span-3 ">Achievement</p>
        <p className="col-span-3 ">Tournament</p>
        <div className="flex gap-6 justify-end col-span-3">
          <p className="">G</p>
          <p className="">A</p>
          <p className="">MP</p>
        </div>
      </div>

      {players.map((player, index) => (
        <div
          key={player.name}
          className={`grid grid-cols-12 mt-4 text-gray-50 px-3 text-sm md:text-base py-3 rounded-lg ${
            index % 2 === 0 ? "bg-[#151515]" : "bg-transparent"
          }`}>
          <p className="col-span-3 px-1">{player.name}</p>
          <p className="col-span-3">{player.achievement}</p>
          <p className="col-span-3">{player.tournament}</p>
          <div className="flex gap-6 justify-end col-span-3">
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
