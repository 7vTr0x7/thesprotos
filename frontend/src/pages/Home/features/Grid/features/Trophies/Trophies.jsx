import React, { useEffect, useState } from "react";
import data from "../../../../../../utils/trophies.json";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import TrophyCard from "./TrophyCard";

const Trophies = () => {
  const [page, setPage] = useState(1);

  const [trophiesPerPage, setTrophiesPerPage] = useState(4);

  const nextPageHandler = () => {
    if (data?.trophies?.length > page * trophiesPerPage) {
      setPage((prev) => prev + 1);
    }
  };

  const prevPageHandler = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setTrophiesPerPage(window.innerWidth < 640 ? 2 : 4);
      setPage(1);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#151515] mb-6 py-5 px-4 sm:px-6 lg:px-7 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg sm:text-xl font-semibold text-gray-100">
          Trophies
        </p>
        <div className="text-gray-300 flex gap-3 text-[20px]">
          <FiArrowLeft
            onClick={prevPageHandler}
            className={`cursor-pointer `}
          />
          <FiArrowRight
            onClick={nextPageHandler}
            className={`cursor-pointer `}
          />
        </div>
      </div>
      <div className="my-4 mx-0 gap-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {data?.trophies &&
          data.trophies
            .slice((page - 1) * trophiesPerPage, page * trophiesPerPage)
            .map((trophy) => <TrophyCard key={trophy.name} trophy={trophy} />)}
      </div>
    </div>
  );
};

export default Trophies;
