import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const FeaturedPlayer = () => {
  const data = {
    player: {
      name: "Kylian Mbappé",
      team: "Real Madrid CF",
      imageUrl:
        "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/4a24/live/d900ec90-4f27-11ef-9e75-ad2a41d12bcb.jpg.webp",
      stats: {
        goals: 12,
        assists: 11,
        rank: "1st",
        position: "Striker",
      },
    },
  };

  return (
    <div className="py-4">
      <p className="text-[28px]  mb-4 text-gray-50">Featured Player</p>
      <div className="my-3 bg-[#151515] text-gray-50 rounded-lg  shadow-lg pt-7 pb-3">
        <div className="flex justify-center">
          <img
            className="rounded-full h-[130px] w-[130px] sm:h-[120px] sm:w-[120px] md:h-[130px] md:w-[130px]"
            alt={data.player.name}
            src={data.player.imageUrl}
          />
        </div>
        <div className="py-2">
          <p className="text-center text-2xl font-semibold">
            {data.player.name}
          </p>
          <p className="text-center text-lg mt-2 text-gray-400 font-semibold">
            {data.player.team}
          </p>
        </div>
        <hr className="h-[1px] bg-gray-400 border-0 my-2 dark:bg-gray-700" />
        <div className="flex justify-between px-8 py-4">
          <div className="text-center">
            <p className="text-5xl font-bold mb-7">{data.player.stats.goals}</p>
            <p className="text-xl px-1 font-bold ">Goals</p>
          </div>
          <div className="h-auto border-l-2 border-gray-400 col-span-2 mx-7" />
          <div className="text-center">
            <p className="text-5xl font-bold mb-7">
              {data.player.stats.assists}
            </p>
            <p className="text-xl px-1 font-bold ">Assists</p>
          </div>
          <div className="h-auto border-l-2 border-gray-400 col-span-2 mx-7" />
          <div className="text-center">
            <p className="text-5xl font-bold mb-7">{data.player.stats.rank}</p>
            <p className="text-xl  font-bold ">Striker</p>
          </div>
        </div>
        <hr className="h-[1px] bg-gray-400 border-0 my-2 dark:bg-gray-700" />
        <div className="flex justify-end mx-4">
          <button className="px-2 py-1 flex items-center gap-1 text-xs">
            <p>View Profile</p>
            <MdKeyboardArrowRight className="text-gray-50 text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPlayer;
