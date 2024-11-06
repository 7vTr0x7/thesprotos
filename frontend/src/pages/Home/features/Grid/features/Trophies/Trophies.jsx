import React, { useEffect, useState } from "react";
import data from "../../../../../../utils/trophies.json";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import TrophyCard from "./TrophyCard";

const Trophies = () => {
  const [page, setPage] = useState(1);

  const [trophiesPerPage, setTrophiesPerPage] = useState(5);
  const [fadeClass, setFadeClass] = useState("");

  const [trophies, setTrophies] = useState([]);

  const getTrophiesData = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/user/trophies", {
        method: "GET",
        credentials: "include",
      });

      if (!res.ok) {
        console.log("Failed to get data");
      }

      const data = await res.json();

      if (data.success) {
        setTrophies(data?.trophies);
      }
    } catch (error) {
      console.log("failed to get Trophies Data", error.message);
    }
  };

  useEffect(() => {
    getTrophiesData();
  }, []);

  const nextPageHandler = () => {
    if (data?.trophies?.length > page * trophiesPerPage) {
      setFadeClass("fade-in-right");
      setTimeout(() => {
        setPage((prev) => prev + 1);
        setFadeClass("fade-out-left");
      }, 300);
    }
  };

  const prevPageHandler = () => {
    if (page > 1) {
      setFadeClass("fade-in-left");
      setTimeout(() => {
        setPage((prev) => prev - 1);
        setFadeClass("fade-out-right");
      }, 300);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setTrophiesPerPage(window.innerWidth < 640 ? 2 : 5);
      setPage(1);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#151515] mb-10 py-5 px-4 sm:px-6 lg:px-7 rounded-lg">
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
      <div
        className={`my-4 mx-0 gap-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 ${fadeClass}`}>
        {trophies &&
          trophies
            .slice((page - 1) * trophiesPerPage, page * trophiesPerPage)
            .map((trophy) => <TrophyCard key={trophy.name} trophy={trophy} />)}
      </div>
    </div>
  );
};

export default Trophies;
