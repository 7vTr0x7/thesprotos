import React, { useEffect, useState } from "react";
import StandingsCard from "./../../../../components/StandingsCard";

import standings from "../../../../utils/standings.json";
import FixturesMatches from "../../../Fixtures/features/FixturesMatches/FixturesMatches";
import { useSelector } from "react-redux";

const RenderLeagueStats = ({ activeTab, league }) => {
  const [stats, setStats] = useState([]);
  const standings = useSelector((state) => state.standings.standings);
  console.log(league);
  useEffect(() => {
    const filtered = standings.filter((stand) => stand.league === league);
    setStats(filtered);
  }, [league]);
  return (
    <>
      {activeTab === "standings" && (
        <div className="bg-[#222222] pt-2 rounded-lg  mb-5">
          {stats && stats.length > 0 ? (
            <StandingsCard stats={stats} />
          ) : (
            <p className="text-gray-50 text-sm text-center mb-3 py-4 px-5 md:px-7">
              No Standings Found
            </p>
          )}
        </div>
      )}
      {activeTab === "fixtures" && <FixturesMatches />}
    </>
  );
};

export default RenderLeagueStats;
