import React from "react";

const StandingsCard = ({ stats }) => {
  const standings = [...stats].sort((a, b) => a.position - b.position);
  return (
    <>
      <div className="grid grid-cols-12 text-gray-400 mt-5 pr-4 pl-4 md:px-7">
        <p className="col-span-5 font-medium text-xs md:text-sm">Club</p>
        <div className="col-span-7 flex justify-between items-center space-x-1 text-xs md:text-base">
          <p>P</p>
          <p>W</p>
          <p>D</p>
          <p>L</p>
          <p>Goals</p>
          <p className="px-3 md:px-6">Last5</p>
          <p>Pts</p>
        </div>
      </div>

      {standings &&
        standings.map((standing, index) => (
          <div
            key={standing.club}
            className={`grid grid-cols-12 py-4 px-4 md:px-7 mt-3 text-gray-50 ${
              index % 2 === 0 ? "bg-[#151515]" : ""
            }`}>
            <div className="col-span-5 text-gray-50 flex gap-2 md:gap-3 items-center font-medium text-xs md:text-base">
              <p>{standing.position}</p>{" "}
              <img
                alt={standing.club}
                src={standing.imageUrl}
                className="md:h-8 h-6"
              />{" "}
              <p>{standing.club}</p>
            </div>
            <div className="col-span-7 flex justify-between items-center space-x-1 text-xs md:text-sm">
              <p>{standing.played}</p>
              <p>{standing.won}</p>
              <p>{standing.drawn}</p>
              <p>{standing.lost}</p>
              <p>{standing.goals}</p>
              <div className="flex gap-[1px] bg-gray-700">
                {standing.last5.map((game, idx) => (
                  <span
                    key={idx}
                    className={`h-4 w-4 rounded-sm text-xs flex items-center justify-center ${
                      game === "W"
                        ? "bg-[#1bdd3a] text-gray-900"
                        : game === "D"
                        ? "bg-[#c1c1c1] text-gray-900"
                        : "bg-[#dd3e1b] text-gray-900"
                    }`}>
                    {game}
                  </span>
                ))}
              </div>
              <p>{standing.points}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default StandingsCard;
