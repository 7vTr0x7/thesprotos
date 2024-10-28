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
    <div className="bg-[#222222] my-10 rounded-lg shadow-lg py-7 px-5 md:px-7 max-w-full mx-auto">
      <p className="text-gray-50 text-xl font-semibold">Standings</p>

      <CustomDropdown
        setLeague={setLeague}
        league={league}
        options={standings?.leagues?.leagues || []}
      />
      <StandingsCard stats={stats} />
    </div>
  );
};

export default Standings;
