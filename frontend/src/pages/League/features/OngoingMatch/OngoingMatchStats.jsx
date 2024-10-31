import React from "react";

const OngoingMatchStats = ({ match }) => {
  return (
    <>
      <div className="bg-[#222222] flex text-sm justify-between px-10 font-semibold rounded-tr-lg rounded-tl-lg py-1">
        <p>Goals</p>
        <p>Assists</p>
      </div>
      <div className="mb-2">
        {match?.score.goals.map((goal, index) => (
          <div
            key={index}
            className="bg-[#222222] grid grid-cols-12 text-xs items-center px-2 my-1 font-semibold py-1">
            <div className="flex justify-between col-span-5">
              <p>{goal.goal}</p>
              <p>{goal.count}</p>
            </div>
            <div className="flex justify-center">
              <div className="h-6 w-[1px] bg-gray-600 ml-5" />
            </div>

            <p className="col-span-5 text-center">{goal.assist}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default OngoingMatchStats;
