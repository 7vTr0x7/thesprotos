import React from "react";
import { useNavigate } from "react-router-dom";
import data from "../../../utils/playersData.json";

const Player = ({ player }) => {
  const navigate = useNavigate();
  function findPlayerByName(name) {
    for (const positionGroup of data) {
      for (const player of positionGroup.players) {
        if (player.name.toLowerCase() === name.toLowerCase()) {
          return player;
        }
      }
    }
    return null;
  }

  const playerData = findPlayerByName(player);

  return (
    <p
      className="bg-[#151515] rounded-xl py-2 px-4 text-gray-50 text-xl cursor-pointer"
      onClick={() =>
        navigate(
          `/players/${encodeURIComponent(`${player.replace(/\s+/g, "-")}`)}`,
          { state: { player: playerData } }
        )
      }>
      {player}
    </p>
  );
};

export default Player;
