import React from "react";

const FixturesNav = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <ul className="flex flex-wrap gap-3 items-center justify-start">
        <li
          className={`px-3 py-1 rounded-md cursor-pointer ${
            activeTab === "fixtures"
              ? "bg-yellow-400"
              : "bg-[#222222] text-gray-500"
          }`}
          onClick={() => setActiveTab("fixtures")}>
          Fixtures
        </li>
        <li
          className={`px-3 py-1 rounded-md cursor-pointer ${
            activeTab === "results"
              ? "bg-yellow-400"
              : "bg-[#222222] text-gray-500"
          }`}
          onClick={() => setActiveTab("results")}>
          Results
        </li>
        <li
          className={`px-3 py-1 rounded-md cursor-pointer ${
            activeTab === "standings"
              ? "bg-yellow-400"
              : "bg-[#222222] text-gray-500"
          }`}
          onClick={() => setActiveTab("standings")}>
          Standings
        </li>
      </ul>
    </>
  );
};

export default FixturesNav;
