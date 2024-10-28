import React from "react";

const FixturesNav = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <ul className="flex gap-3 items-center">
        <li
          className={` px-3 py-1 rounded-md cursor-pointer ${
            activeTab === "fixtures"
              ? "bg-yellow-400"
              : "bg-[#222222] text-gray-500"
          } `}
          onClick={
            activeTab !== "fixtures" && (() => setActiveTab("fixtures"))
          }>
          Fixtures
        </li>
        <li
          className={` px-3 py-1 rounded-md cursor-pointer ${
            activeTab === "results"
              ? "bg-yellow-400"
              : "bg-[#222222] text-gray-500"
          } `}
          onClick={activeTab !== "results" && (() => setActiveTab("results"))}>
          Results
        </li>
        <li
          className={` px-3 py-1 rounded-md cursor-pointer ${
            activeTab === "standings"
              ? "bg-yellow-400"
              : "bg-[#222222] text-gray-500"
          } `}
          onClick={
            activeTab !== "standings" && (() => setActiveTab("standings"))
          }>
          Standings
        </li>
      </ul>
    </>
  );
};

export default FixturesNav;
