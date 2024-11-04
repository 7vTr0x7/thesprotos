import React from "react";
import TeamNav from "../TeamNav/TeamNav";
import teamData from "../../../../utils/teamData.json";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import PlayerCard from "../PlayersCard/PlayerCard";

const TeamLineup = ({ activeTeam, setActiveTeam, match }) => {
  const team = teamData.teams.find((team) => team.name === activeTeam);

  return (
    <div className="relative">
      <div className={`px-4  py-3 bg-black`}>
        <TeamNav
          setActiveTeam={setActiveTeam}
          activeTeam={activeTeam}
          match={match}
        />
      </div>
      <div className="absolute right-2 top-16 flex items-center text-gray-500 cursor-pointer">
        <p className="text-sm">
          <Link to="/">View Team</Link>
        </p>

        <MdKeyboardArrowRight />
      </div>
      <div className="mb-4 mt-2">
        <div className="text-gray-500 md:px-28 px-10 flex md:w-5/12 w-full  justify-between">
          <p>Player</p>
          <p>Position</p>
        </div>
        <div className="text-gray-500 mx-4 my-2">
          <PlayerCard players={team.players} />
        </div>
      </div>
    </div>
  );
};

export default TeamLineup;
