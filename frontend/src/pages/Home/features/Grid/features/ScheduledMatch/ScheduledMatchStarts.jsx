import React from "react";

const ScheduledMatchStarts = ({ match }) => {
  return (
    <div className=" text-gray-50">
      <h3 className="text-center font-semibold text-sm my-3 mb-2">
        Head-to-Head
      </h3>
      <div className="flex justify-between text-xs font-semibold mt-3">
        <p> Wins</p>
        <p>Played</p>
        <p>Wins</p>
      </div>
      <div className="flex justify-between text-center text-xs font-semibold mt-3 px-2">
        <p>{match.headToHead.wins.team1} </p>
        <p>{match.headToHead.played} </p>
        <p>{match.headToHead.wins.team2} </p>
      </div>
      <hr className="h-[1px] bg-gray-50 border-0 mt-1 dark:bg-gray-50" />

      <div className="flex justify-between text-center text-xs font-bold mt-1 px-2">
        <p>{match.headToHead.homeWins.team1} </p>
        <p> Home</p>
        <p>{match.headToHead.homeWins.team2} </p>
      </div>
      <hr className="h-[1px] bg-gray-50 border-0 mt-1 dark:bg-gray-50" />

      <div className="flex justify-between text-xs font-bold mt-1 px-2">
        <p>{match.headToHead.awayWins.team1} </p>
        <p> Away </p>
        <p>{match.headToHead.awayWins.team2} </p>
      </div>
      <div className="mt-4">
        <p className="text-center  font-semibold">Previous Result</p>
        <div className="flex justify-between mt-2 text-sm">
          <p>{match.previousResult.team1.name}</p>
          <div className="flex justify-center gap-2 mr-4">
            <p> {match.previousResult.team1.score}</p>
            <div className="h-6 w-[1px] bg-gray-600" />

            <p>{match.previousResult.team2.score}</p>
          </div>
          <p>{match.previousResult.team2.name} </p>
        </div>
      </div>
    </div>
  );
};

export default ScheduledMatchStarts;
