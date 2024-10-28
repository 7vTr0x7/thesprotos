import React from "react";
import Stats from "../Stats/Stats";
import TeamLineup from "../TeamLineup/TeamLineup";

const RenderMatchInfo = ({ activeTab }) => {
  return (
    <>
      {activeTab === "teamLine" && <TeamLineup />}
      {activeTab === "stats" && <Stats />}
    </>
  );
};

export default RenderMatchInfo;
