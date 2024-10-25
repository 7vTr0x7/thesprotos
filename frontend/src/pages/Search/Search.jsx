import React from "react";
import SearchNav from "./features/SearchNav";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import data from "../../utils/players.json";
import Player from "./features/player";

const Search = () => {
  return (
    <>
      <SearchNav />
      <div className="bg-black h-[100vh] px-44 py-12">
        <div className="flex justify-between items-center text-gray-50">
          <p className="text-2xl font-semibold text-gray-50">Players</p>
          <HiOutlineArrowLongRight className="text-2xl " />
        </div>
        <div className="mt-5 flex flex-wrap gap-5">
          {data?.players.map((player, index) => (
            <Player player={player} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
