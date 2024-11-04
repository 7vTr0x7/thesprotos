import React from "react";
import image from "../../../images/image.png";
import { useNavigate } from "react-router-dom";

const PlayerCard = ({ player }) => {
  const navigate = useNavigate();

  return (
    <div
      className="rounded-lg mb-5 bg-[#151515] md:w-10/12 cursor-pointer"
      onClick={() =>
        navigate(
          `/players/${encodeURIComponent(
            `${player.name.replace(/\s+/g, "-")}`
          )}`,
          { state: { player } }
        )
      }>
      <img alt={player.name} src={image} className="rounded-t-lg w-full" />
      <div className="flex md:flex-row flex-col justify-between items-center px-4 py-2">
        <div>
          <p className="text-gray-50 font-semibold text-xl">{player.name}</p>
          <p className="text-gray-50 m-0 text-xs">{player.country}</p>
        </div>
        <p className="text-gray-50 font-bold text-2xl md:text-5xl">
          {player.number}
        </p>
      </div>
    </div>
  );
};

export default PlayerCard;
