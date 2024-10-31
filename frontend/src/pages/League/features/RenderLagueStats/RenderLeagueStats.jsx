import React, { useEffect, useState } from "react";
import StandingsCard from "./../../../../components/StandingsCard";

import standings from "../../../../utils/standings.json";
import FixturesMatches from "../../../Fixtures/features/FixturesMatches/FixturesMatches";

const RenderLeagueStats = ({ activeTab, league }) => {
  const [stats, setStats] = useState(standings?.leagues[league]);

  useEffect(() => {
    setStats(standings?.leagues[league]);
  }, [league]);

  return (
    <>
      {activeTab === "standings" && (
        <div className="bg-[#222222] pt-2 rounded-lg  mb-5">
          <StandingsCard stats={stats} />
        </div>
      )}
      {activeTab === "fixtures" && <FixturesMatches />}
    </>
  );
};

export default RenderLeagueStats;
