import React from "react";

const NewsCard = ({ news, newsPage }) => {
  return (
    <div className={`${newsPage ? "bg-[#222222] rounded-lg " : "p-4"}`}>
      <div>
        <img
          alt={news.category}
          src={news.image_url}
          className={`w-full h-auto  object-cover ${
            newsPage ? "" : "rounded-md"
          }`}
        />
      </div>
      <div className={`${newsPage ? "px-4 pb-4" : ""}`}>
        <div
          className={`flex gap-2 items-center text-gray-50 mt-4 text-xs sm:text-sm`}>
          <p className="bg-yellow-400 text-black rounded-xl px-2 sm:px-4 ">
            {news.category}
          </p>
          <p>{news.date}</p>
        </div>
        <p className="text-xl sm:text-xl font-semibold text-gray-50 mt-3">
          {news.title.length > 50
            ? `${news.title.slice(0, 50)}...`
            : news.title}
        </p>
        <p className="text-sm text-gray-50 mt-2">{news.description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
