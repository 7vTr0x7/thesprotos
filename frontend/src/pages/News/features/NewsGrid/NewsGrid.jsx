import { useEffect, useState } from "react";
import data from "../../../../utils/news.json";
import NewsCard from "../../../Home/features/News/features/NewsCard";
import NewsBanner from "../NewsBanner/NewsBanner";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function NewsGrid() {
  const { latest_news } = data;
  const [page, setPage] = useState(1);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 640);
  const itemsPerPage = isMobileView ? 1 : latest_news.length;

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.matchMedia("(max-width: 640px)").matches);
      setPage(1); // Reset to the first page on resize
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextPageHandler = () => {
    if (latest_news.length > page * itemsPerPage) {
      setPage((prev) => prev + 1);
    }
  };

  const prevPageHandler = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-black w-full select-none">
      <div className="w-full">
        <h1 className="text-white text-xl sm:text-2xl mb-6">Latest News</h1>
        {isMobileView && (
          <div className="flex justify-end text-gray-300 gap-3 my-3 text-[18px] sm:text-[20px]">
            <FiArrowLeft onClick={prevPageHandler} className="cursor-pointer" />
            <FiArrowRight
              onClick={nextPageHandler}
              className="cursor-pointer"
            />
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
          {latest_news
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((news, index) => (
              <div
                key={news._id}
                className={`flex flex-row cursor-pointer  lg:h-[430px] ${
                  index % 6 === 0
                    ? "col-span-12  lg:col-span-8 md:col-span-8"
                    : "col-span-12  lg:col-span-4 md:col-span-4"
                }`}
                onClick={() =>
                  navigate(`/news/${news.category}`, { state: { news } })
                }>
                {index % 6 === 0 ? (
                  <NewsBanner news={news} />
                ) : (
                  <NewsCard news={news} newsPage={true} />
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default NewsGrid;
