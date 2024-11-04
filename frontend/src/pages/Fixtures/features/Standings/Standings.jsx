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
      <div className="bg-[#222222] my-10 rounded-lg shadow-lg py-7 w-full">
        <p className="text-gray-50 text-xl font-semibold mb-3 px-5 md:px-7">
          Standings
        </p>

        <StandingsCard stats={stats} />
      </div>
    </>
  );
};

export default Standings;
