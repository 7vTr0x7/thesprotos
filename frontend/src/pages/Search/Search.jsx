import React from "react";
import SearchNav from "./features/SearchNav";
import { HiOutlineArrowRight } from "react-icons/hi2";
import data from "../../utils/players.json";
import news from "../../utils/news.json";
import Player from "./features/Player";
import NewsCard from "./features/NewsCard";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  return (
    <>
      <SearchNav />
      <div className="bg-black min-h-screen px-6 sm:px-12 md:px-20 lg:px-28 xl:px-44 py-12">
        <div className="flex justify-between items-center text-gray-50">
          <p className="text-2xl font-semibold">Players</p>
          <HiOutlineArrowRight
            className="text-2xl cursor-pointer"
            onClick={() => navigate(`/players`)}
          />
        </div>

        <div className="mt-7 flex flex-wrap gap-5">
          {data?.players.map((player, index) => (
            <Player player={player} key={index} />
          ))}
        </div>

        <div className="flex justify-between items-center text-gray-50 mt-10">
          <p className="text-2xl font-semibold">News</p>
          <HiOutlineArrowRight
            className="text-2xl cursor-pointer"
            onClick={() => navigate(`/news`)}
          />
        </div>

        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {news?.latest_news.slice(0, 3).map((news, index) => (
            <NewsCard news={news} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
