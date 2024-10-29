import React from "react";
import Stats from "../Stats/Stats";
import TeamLineup from "../TeamLineup/TeamLineup";
import matchData from "../../../../utils/nextMatch.json";

const RenderMatchInfo = ({ activeTab, activeTeam, setActiveTeam, match }) => {
  return (
    <>
      {activeTab === "teamLineup" && (
        <TeamLineup
          activeTeam={activeTeam}
          setActiveTeam={setActiveTeam}
          match={match}
        />
      )}
      {activeTab === "stats" && (
        <Stats match={matchData} status={match.status} />
      )}
    </>
  );
};

export default RenderMatchInfo;
