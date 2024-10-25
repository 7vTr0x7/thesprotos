import React from "react";

const CompletedMatchStats = ({ match }) => {
  return (
    <>
      <div className="px-4">
        <p className="font-bold text-center text-xs">Goals</p>
        <div className="grid grid-cols-12">
          <div className="col-span-5">
            {match?.teamScore?.goals?.home.map((goal, index) => (
              <div
                key={index}
                className="flex justify-between font-semibold text-xs text-white">
                <p>{goal.player}</p> <p>{goal.count}</p>
              </div>
            ))}
          </div>
          <div className="col-span-2  flex justify-center">
            <div className="h-6 w-[1px] bg-gray-600" />
          </div>
          <div className="col-span-5">
            {match?.teamScore?.goals?.away.map((goal, index) => (
              <div
                key={index}
                className="flex justify-between font-semibold text-xs text-white">
                <p>{goal.count}</p> <p>{goal.player}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4">
        <p className="font-bold text-center text-xs">Assists</p>
        <div className="grid grid-cols-12">
          <div className="col-span-5">
            {match?.teamScore?.goals?.home.map((goal, index) => (
              <div
                key={index}
                className="flex justify-between font-semibold text-xs text-white">
                <p>{goal.assist}</p>
              </div>
            ))}
          </div>
          <div className="col-span-2 flex justify-center">
            <div className="h-6 w-[1px] bg-gray-600" />
          </div>
          <div className="col-span-5">
            {match?.teamScore?.goals?.away.map((goal, index) => (
              <div
                key={index}
                className="flex justify-end font-semibold text-xs text-white">
                <p className="text-end">{goal.assist}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompletedMatchStats;
