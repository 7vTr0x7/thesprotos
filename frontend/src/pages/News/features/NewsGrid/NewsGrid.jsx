import { useEffect, useState } from "react";
import data from "../../../../utils/news.json";
import NewsCard from "../../../Home/features/News/features/NewsCard";
import NewsBanner from "../NewsBanner/NewsBanner";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function NewsGrid() {
  const { latest_news } = data;
  const [page, setPage] = useState(1);
  const [isMobileView, setIsMobileView] = useState(false);
  const [newsPages, setNewsPages] = useState(latest_news.length);

  useEffect(() => {
    const handleResize = () => {
      setNewsPages(window.innerWidth < 640 ? 1 : latest_news.length);
      setPage(1);
      setIsMobileView(true);
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
    <div className="bg-black w-full">
      <div className="w-full">
        <h1 className="text-white text-xl sm:text-2xl mb-6">Latest News</h1>
        {isMobileView && (
          <div className="text-gray-300 flex gap-3 text-[18px] sm:text-[20px]">
            <FiArrowLeft onClick={prevPageHandler} className="cursor-pointer" />
            <FiArrowRight
              onClick={nextPageHandler}
              className="cursor-pointer"
            />
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
          {latest_news &&
            latest_news
              .slice((page - 1) * newsPages, page * newsPages)
              .map((news, index) => (
                <div
                  key={index}
                  className={`${
                    index % 6 === 0
                      ? "col-span-12 lg:col-span-8 "
                      : "col-span-12 md:col-span-12 lg:col-span-4"
                  } mb-4 `}>
                  {index % 6 === 0 ? (
                    <NewsBanner news={news} />
                  ) : (
                    <div>
                      <NewsCard news={news} newsPage={true} />
                    </div>
                  )}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default NewsGrid;
