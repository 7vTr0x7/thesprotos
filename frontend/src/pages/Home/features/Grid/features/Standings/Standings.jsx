import React, { useEffect, useState } from "react";
import data from "../../../../../../utils/leagues.json";
import CustomDropdown from "../../../../../../components/CustomDropDown";
import StandingsCard from "../../../../../../components/StandingsCard";
import { useSelector } from "react-redux";

const Standings = () => {
  const leagues = data.leagues.map((league) => league.league);

  const [league, setLeague] = useState(leagues[1]);
  const [stats, setStats] = useState([]);
  const standings = useSelector((state) => state.standings.standings);

  useEffect(() => {
    const filtered = standings.filter((stand) => stand.league === league);
    setStats(filtered);
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
          options={leagues}
        />
      </div>
      {stats && stats.length > 0 ? (
        <StandingsCard stats={stats} />
      ) : (
        <p className="text-gray-50 text-sm text-center mb-3 px-5 md:px-7">
          No Standings Found
        </p>
      )}
    </div>
  );
};

export default Standings;
