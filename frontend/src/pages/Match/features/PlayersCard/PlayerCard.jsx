import React from "react";

const PlayerCard = ({ players }) => {
  return (
    <div className="bg-[#222222] py-4 text-gray-50">
      {players &&
        players.map((player, index) => (
          <div
            key={player.number}
            className={`w-full py-4 px-10 ${
              index % 2 === 1 ? "bg-[#151515]" : "bg-[#222222]"
            }`}>
            <div className="flex items-center justify-between md:w-6/12 w-9/12">
              <div className="flex items-center gap-7">
                <p className=" font-normal">{player.number}</p>
                <p className=" font-normal">{player.name}</p>
              </div>
              <p className=" font-normal">{player.position}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PlayerCard;
