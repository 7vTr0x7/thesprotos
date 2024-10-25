import React from "react";
import { sponsor } from "../../../../../../images/index.js";

const Sponsor = ({ text }) => {
  return (
    <div className="text-gray-50 mt-7">
      <p className={`text-[28px] mb-4  ${text && "mt-6"}`}>Sponsor</p>
      <div className="my-3 ">
        <img alt="Sponsor" src={sponsor} className="w-full h-auto shadow-lg" />
      </div>
    </div>
  );
};

export default Sponsor;
