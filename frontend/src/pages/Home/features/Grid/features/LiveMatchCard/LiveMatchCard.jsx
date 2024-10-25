import React from "react";

const LiveMatchCard = ({ match }) => {
  return (
    <div className="grid grid-cols-12 bg-[#151515] rounded-lg text-gray-100 p-4">
      <div className="col-span-4 flex flex-col items-center">
        <p className="font-semibold text-sm text-center truncate">
          {match?.team1?.name}
        </p>
        <div className="flex items-center justify-center bg-[#222222] p-5 rounded-full w-24 h-24 my-3">
          <img
            alt={match?.team1?.name}
            src={match?.team1?.logo_url}
            className="h-full w-full object-cover rounded-full"
          />
        </div>
      </div>

      <div className="col-span-4 flex flex-col items-center justify-center font-semibold pt-6">
        <p>{match?.FT && "FT"}</p>
        <div className="flex gap-10 pt-3">
          <p className="text-xl ">{match?.score?.team1}</p>
          <p className="text-xl ">-</p>
          <p className="text-xl ">{match?.score?.team2}</p>
        </div>
        <p className="text-center flex justify-center whitespace-nowrap text-sm  font-normal mt-4">
          {match?.stadium}
        </p>
        <p className="text-center font-normal mt-2 bg-red-800 px-4 rounded-xl  flex justify-center whitespace-nowrap text-sm text-black">
          {match?.live && "• Live"}
        </p>
      </div>

      <div className="col-span-4 flex flex-col items-center">
        <p className="font-semibold text-sm text-center truncate">
          {match?.team2?.name}
        </p>
        <div className="flex items-center justify-center bg-[#222222] p-5 rounded-full w-24 h-24 my-3">
          <img
            alt={match?.team2?.name}
            src={match?.team2?.logo_url}
            className="h-full w-full object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LiveMatchCard;
