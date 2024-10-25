import React from "react";

const ScheduledMatchInfo = ({ match }) => {
  return (
    <div className="grid grid-cols-12 gap-4 text-gray-50">
      <div className="col-span-4 flex flex-col items-center">
        <p className="font-semibold text-sm truncate">
          {match.teams.team1.name}
        </p>
        <div className="flex justify-center items-center rounded-full p-4 bg-gray-800 my-2">
          <img
            alt={match.teams.team1.name}
            src={match.teams.team1.logo}
            className="h-16 w-16 object-contain"
          />
        </div>
      </div>

      <div className="col-span-4 flex flex-col items-center text-center">
        <p className="pt-6 font-semibold text-sm whitespace-nowrap">
          {match.match.daysLeft} day{match.match.daysLeft !== 1 && "s"}{" "}
          {match.match.hoursLeft} hr{match.match.hoursLeft !== 1 && "s"} left
        </p>
        <div className="flex justify-center mb-3 font-bold text-4xl">
          <p className="mx-2">v/s</p>
        </div>
        <p className="font-semibold text-sm">{match.match.location}</p>
      </div>

      <div className="col-span-4 flex flex-col items-center">
        <p className="font-semibold text-sm truncate">
          {match.teams.team2.name}
        </p>
        <div className="flex justify-center items-center rounded-full p-4 bg-gray-200 my-2">
          <img
            alt={match.teams.team2.name}
            src={match.teams.team2.logo}
            className="h-16 w-16 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ScheduledMatchInfo;
