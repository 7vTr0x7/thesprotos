import React, { useEffect, useState } from "react";
import standings from "../../../../../../utils/standings.json";
import CustomDropdown from "../../../../../../components/CustomDropDown";

const Standings = () => {
  const [league, setLeague] = useState(standings?.leagues?.leagues[0]);
  const [stats, setStats] = useState(standings?.leagues[league]);

  useEffect(() => {
    setStats(standings?.leagues[league]);
  }, [league]);

  return (
    <div className="bg-[#222222] my-10 rounded-lg shadow-lg py-7 px-5 md:px-7 max-w-full mx-auto">
      <p className="text-gray-50 text-xl font-semibold">Standings</p>

      <CustomDropdown
        setLeague={setLeague}
        league={league}
        options={standings?.leagues?.leagues || []}
      />

      <div className="grid grid-cols-12 text-gray-400 mt-5 px-3 md:px-5">
        <p className="col-span-5 font-medium">Club</p>
        <div className="col-span-7 flex justify-between items-center space-x-2 text-xs  md:text-base">
          <p>P</p>
          <p>W</p>
          <p>D</p>
          <p>L</p>
          <p>Goals</p>
          <p className="px-6">Last5</p>
          <p>Pts</p>
        </div>
      </div>

      {stats &&
        stats.map((stat, index) => (
          <div
            key={stat.club}
            className={`grid grid-cols-12 py-3 px-3 md:px-5 mt-3 text-gray-50 rounded-lg ${
              index % 2 === 0 && "bg-[#151515]"
            }`}>
            <p className="col-span-5 text-gray-50 flex gap-3 font-medium text-sm md:text-base">
              <p> {stat.position}</p> <p>{stat.club}</p>
            </p>
            <div className="col-span-7 flex justify-between items-center space-x-2 text-xs md:text-sm">
              <p>{stat.P}</p>
              <p>{stat.W}</p>
              <p>{stat.D}</p>
              <p>{stat.L}</p>
              <p>{stat.Goals}</p>
              <div className="flex gap-[2px]  bg-gray-700 ">
                {stat.last5.map((game, idx) => (
                  <span
                    key={idx}
                    className={`h-4 w-4 rounded-sm text-xs flex items-center justify-center  ${
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
              <p>{stat.Pts}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Standings;
