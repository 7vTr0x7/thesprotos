import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const NewsCard = ({ news }) => {
  return (
    <div className="col-span-1 p-4 rounded-lg">
      <div>
        <img
          alt={news.category}
          src={news.image_url}
          className="w-full h-auto rounded-md"
        />
      </div>
      <p className="text-lg text-gray-50 mt-3 font-semibold line-clamp-2">
        {news.title}
      </p>
      <HiOutlineArrowLongRight className="text-3xl text-gray-50 mt-2 hover:text-yellow-400 transition-colors duration-200 cursor-pointer" />
    </div>
  );
};

export default NewsCard;
