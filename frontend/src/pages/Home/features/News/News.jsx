import React, { useState, useEffect } from "react";
import data from "../../../../utils/news.json";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import NewsCard from "./features/NewsCard";

const News = () => {
  const [page, setPage] = useState(1);
  const [newsPages, setNewsPages] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setNewsPages(window.innerWidth < 640 ? 1 : 3);
      setPage(1);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextPageHandler = () => {
    if (data?.latest_news?.length > page * newsPages) {
      setPage((prev) => prev + 1);
    }
  };

  const prevPageHandler = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-black pb-6  px-4 sm:px-6 lg:px-14">
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-100">
          Latest News
        </p>
        <div className="text-gray-300 flex gap-3 text-[18px] sm:text-[20px]">
          <FiArrowLeft onClick={prevPageHandler} className="cursor-pointer" />
          <FiArrowRight onClick={nextPageHandler} className="cursor-pointer" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.latest_news &&
          data?.latest_news
            .slice((page - 1) * newsPages, page * newsPages)
            .map((news) => <NewsCard key={news._id} news={news} />)}
      </div>
    </div>
  );
};

export default News;
