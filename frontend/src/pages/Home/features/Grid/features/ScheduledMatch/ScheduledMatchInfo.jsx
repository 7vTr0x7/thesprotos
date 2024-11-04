import React from "react";

const ScheduledMatchInfo = ({ match }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-12 gap-2 md:gap-4 text-gray-50 items-center">
      {/* Team 1 */}
      <div className="col-span-1 md:col-span-4 flex flex-col items-center">
        <p className="font-semibold text-xs md:text-sm truncate text-center">
          {match.teams.team1.name}
        </p>
        <div className="flex justify-center items-center rounded-full p-3 md:p-4 bg-gray-800 my-2">
          <img
            alt={match.teams.team1.name}
            src={match.teams.team1.logo}
            className="h-10 w-10 md:h-16 md:w-16 object-contain"
          />
        </div>
      </div>

      {/* Match Details */}
      <div className="col-span-1 md:col-span-4 flex flex-col items-center text-center">
        <p className="font-semibold text-xs md:text-sm whitespace-nowrap">
          {match.match.daysLeft} day{match.match.daysLeft !== 1 && "s"}{" "}
          {match.match.hoursLeft} hr{match.match.hoursLeft !== 1 && "s"} left
        </p>
        <div className="flex justify-center mb-2 md:mb-3 font-bold text-2xl md:text-4xl">
          <p className="mx-1 md:mx-2">v/s</p>
        </div>
        <p className="font-semibold text-xs md:text-sm">
          {match.match.location}
        </p>
      </div>

      {/* Team 2 */}
      <div className="col-span-1 md:col-span-4 flex flex-col items-center">
        <p className="font-semibold text-xs md:text-sm truncate text-center">
          {match.teams.team2.name}
        </p>
        <div className="flex justify-center items-center rounded-full p-3 md:p-4 bg-gray-200 my-2">
          <img
            alt={match.teams.team2.name}
            src={match.teams.team2.logo}
            className="h-10 w-10 md:h-16 md:w-16 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ScheduledMatchInfo;
