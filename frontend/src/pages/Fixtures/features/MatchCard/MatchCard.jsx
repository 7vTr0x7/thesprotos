import React from "react";
import league from "../../../../images/league.png";
import manCity from "../../../../images/Club.png";
import manUnited from "../../../../images/Club4.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const MatchCard = ({ match, view }) => {
  return (
    <div className="relative rounded-lg mb-3 md:py-8 py-5 bg-[#151515] px-3">
      <div className="absolute left-5 top-5">
        <img alt="league" src={league} className="h-10 md:h-14" />
      </div>
      {match?.status === "live" && (
        <p className="absolute right-3 top-3 px-3 rounded-xl bg-red-700  text-gray-50 ">
          • live
        </p>
      )}
      <div className="flex justify-center text-gray-50 mb-3">
        <div className="text-center">
          <p className="md:text-[1rem] text-sm">{match?.date}</p>
          <p className="mt-1 md:text-[1rem] text-sm">
            {match?.venue || match?.location}
          </p>
        </div>
      </div>
      <div
        className={`flex flex-row items-center text-gray-50 mt-3 gap-4 ${
          view ? "md:gap-14" : "md:gap-8"
        }`}>
        <div
          className={`flex flex-col-reverse md:flex-row gap-2 flex-1 items-center justify-center ${
            view
              ? "md:flex-col-reverse md:justify-end md:items-end"
              : "md:items-center md:justify-end"
          }`}>
          <p className={`text-xs md:text-2xl font-semibold text-center `}>
            {match?.team1?.name || match?.team1}
          </p>
          <div className="border border-yellow-400 bg-black p-2 sm:p-3 md:p-4 rounded-full flex justify-center items-center">
            <img
              alt={match?.team1?.name}
              src={manCity}
              className="h-10 sm:h-10 md:h-16 max-w-[2.5rem] md:max-w-none"
            />
          </div>
        </div>

        {match?.time ? (
          <p className="text-sm sm:text-xl font-semibold text-center flex-shrink-0">
            {match?.time}
          </p>
        ) : (
          <div className="flex gap-2 text-lg sm:text-xl font-semibold text-center flex-shrink-0">
            <p>{match?.team1_score}</p>
            <p>-</p>
            <p>{match?.team2_score}</p>
          </div>
        )}

        <div
          className={`flex flex-col md:flex-row gap-2 flex-1 items-center justify-center ${
            view
              ? "md:flex-col md:justify-start md:items-start"
              : "md:items-center md:justify-start"
          }`}>
          <div className="border border-yellow-400 bg-black p-2 sm:p-3 md:p-4 rounded-full flex justify-center items-center">
            <img
              alt={match?.team2?.name}
              src={manUnited}
              className="h-10 sm:h-10 md:h-16 max-w-[2.5rem] md:max-w-none"
            />
          </div>
          <p className={`text-xs md:text-2xl font-semibold text-center `}>
            {match?.team2?.name || match?.team2}
          </p>
        </div>
      </div>
      {!view && match?.penalty && (
        <div className="flex justify-center items-center gap-1 mt-2 text-gray-100 cursor-pointer">
          <p className="text-sm md:text-lg">PENS {match?.penalty}</p>
        </div>
      )}
      {!view && (
        <div className="flex justify-center items-center gap-1 mt-3 text-gray-500 cursor-pointer">
          <p className="text-xs sm:text-sm">
            <Link
              state={{ match }}
              to={`/fixtures/${encodeURIComponent(
                `${(match?.team1?.name || match?.team1).replace(
                  /\s+/g,
                  "-"
                )}-vs-${(match?.team2?.name || match?.team2).replace(
                  /\s+/g,
                  "-"
                )}`
              )}`}>
              View Match
            </Link>
          </p>

          <MdKeyboardArrowRight />
        </div>
      )}
    </div>
  );
};

export default MatchCard;
