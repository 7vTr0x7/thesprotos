import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const FeaturedPlayerCard = ({ data }) => {
  return (
    <div className=" bg-[#151515] text-gray-50 rounded-lg shadow-lg pt-5 pb-3  w-full ">
      {" "}
      {/* Adjust the width here */}
      <div className="flex justify-center">
        <img
          className="rounded-full h-[110px] w-[110px] sm:h-[100px] sm:w-[100px] md:h-[110px] md:w-[110px]"
          alt={data.player.name}
          src={data.player.imageUrl}
        />
      </div>
      <div className="py-2">
        <p className="text-center text-xl font-semibold">{data.player.name}</p>
        <p className="text-center text-sm mt-1 text-gray-400 font-semibold">
          {data.player.team}
        </p>
      </div>
      <hr className="h-[1px] bg-gray-400 border-0 my-2" />
      <div className="flex justify-between px-6 py-3 text-center">
        <div className="flex-1">
          <p className="text-3xl font-bold">{data.player.stats.goals}</p>
          <p className="text-base font-bold">Goals</p>
        </div>
        <div className="border-l-2 border-gray-400 mx-4"></div>
        <div className="flex-1">
          <p className="text-3xl font-bold">{data.player.stats.assists}</p>
          <p className="text-base font-bold">Assists</p>
        </div>
        <div className="border-l-2 border-gray-400 mx-4"></div>
        <div className="flex-1">
          <p className="text-3xl font-bold">{data.player.stats.rank}</p>
          <p className="text-base font-bold">Striker</p>
        </div>
      </div>
      <hr className="h-[1px] bg-gray-400 border-0 my-2" />
      <div className="flex justify-end mx-4">
        <button className="px-2 py-1 flex items-center gap-1 text-xs">
          <p>View Profile</p>
          <MdKeyboardArrowRight className="text-gray-50 text-xl" />
        </button>
      </div>
    </div>
  );
};

export default FeaturedPlayerCard;
