import React from "react";

const Player = ({ player }) => {
  return (
    <p className="bg-[#151515] rounded-xl py-2 px-4 text-gray-50 text-xl">
      {player}
    </p>
  );
};

export default Player;
