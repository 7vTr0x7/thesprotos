import React, { useEffect, useState } from "react";
import standings from "../../../../../../utils/standings.json";
import CustomDropdown from "../../../../../../components/CustomDropDown";
import StandingsCard from "../../../../../../components/StandingsCard";

const Standings = () => {
  const [league, setLeague] = useState(standings?.leagues?.leagues[0]);
  const [stats, setStats] = useState(standings?.leagues[league]);

  useEffect(() => {
    setStats(standings?.leagues[league]);
  }, [league]);

  return (
    <div className="bg-[#222222] my-10 rounded-lg shadow-lg py-7 w-full">
      <p className="text-gray-50 text-xl font-semibold mb-3 px-5 md:px-7">
        Standings
      </p>
      <div className="px-5 md:px-7">
        <CustomDropdown
          setLeague={setLeague}
          league={league}
          options={standings?.leagues?.leagues || []}
        />
      </div>
      <StandingsCard stats={stats} />
    </div>
  );
};

export default Standings;
