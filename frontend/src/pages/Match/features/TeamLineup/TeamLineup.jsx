import React from "react";
import TeamNav from "../TeamNav/TeamNav";

const TeamLineup = ({ activeTeam, setActiveTeam, match }) => {
  return (
    <div>
      <div className={` px-4  py-3 bg-black`}>
        <TeamNav
          setActiveTeam={setActiveTeam}
          activeTeam={activeTeam}
          match={match}
        />
      </div>
    </div>
  );
};

export default TeamLineup;
