import React from "react";
import { CiSearch } from "react-icons/ci";
import logo from "../../../images/logo.png";
import { useNavigate } from "react-router-dom";

const SearchNav = () => {
  const navigate = useNavigate();

  return (
    <header
      id="top"
      className="bg-[#151515]  text-[#bcbcbc] shadow-md py-3 px-4 md:pr-10">
      <div className="flex justify-between items-center">
        <div>
          <img
            src={logo}
            alt="logo"
            className="md:h-16 h-14 px-6 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        <div className="bg-[#222222] flex justify-center px-4 py-2 rounded-lg  gap-2 items-center w-6/12 cursor-pointer">
          <CiSearch className="text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search league, clubs, news"
            className="bg-transparent focus:outline-none text-base w-full placeholder-gray-400"
          />
        </div>
      </div>
    </header>
  );
};

export default SearchNav;
