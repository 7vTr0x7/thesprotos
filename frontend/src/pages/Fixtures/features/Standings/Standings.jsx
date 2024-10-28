import React, { useEffect, useState } from "react";
import StandingsCard from "../../../../components/StandingsCard";
import standings from "../../../../utils/standings.json";

const Standings = ({ league }) => {
  const [stats, setStats] = useState(standings?.leagues[league]);

  useEffect(() => {
    setStats(standings?.leagues[league]);
  }, [league]);

  return (
    <>
      <div className=" bg-[#222222] mb-6 md:mb-10 rounded-lg shadow-lg py-4 md:py-7 px-3 md:px-7 max-w-full mx-auto">
        <p className="text-gray-50 text-lg md:text-xl font-semibold text-center md:text-left mb-4">
          Standings
        </p>
        <StandingsCard stats={stats} />
      </div>
    </>
  );
};

export default Standings;
