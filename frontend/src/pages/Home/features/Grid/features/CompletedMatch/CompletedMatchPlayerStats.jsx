import React from "react";

const CompletedMatchPlayerStats = () => {
  return (
    <div className="my-1 grid grid-cols-12 items-center bg-[#151515] rounded-lg px-3 text-[10px] shadow-lg text-white">
      <p className="font-bold col-span-5 whitespace-nowrap">
        Best Defender:<span className="px-1 font-normal">TBD</span>
      </p>
      <div className="col-span-2 flex justify-center">
        <div className="h-10 w-[1px] bg-gray-600" />
      </div>
      <p className="font-bold col-span-5 whitespace-nowrap">
        Best Midfielder: <span className="px-1 font-normal">TBD</span>
      </p>
    </div>
  );
};

export default CompletedMatchPlayerStats;
