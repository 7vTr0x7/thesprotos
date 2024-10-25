import React, { useState } from "react";
import logo from "../images/logo.png";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#151515] text-[#bcbcbc] shadow-md py-3 px-4 md:pr-10">
      <div className="flex justify-between items-center">
        <div>
          <img src={logo} alt="logo" className="md:h-16 h-14 px-6 " />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-16">
          <ul className="flex gap-8 font-semibold text-gray-400 text-lg cursor-pointer">
            <li className="text-gray-50">Home</li>
            <li>Fixtures</li>
            <li>Players</li>
            <li>League</li>
            <li>News</li>
            <li className="whitespace-nowrap">Contact Us</li>
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-4 px-4">
          <div className="bg-[#222222] px-4 py-2 rounded-lg flex gap-2 items-center">
            <CiSearch className="text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search league, clubs, news"
              className="bg-transparent focus:outline-none pr-4 placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } mt-4 md:hidden w-full flex flex-col px-8 items-start gap-4`}>
        <ul className="flex flex-col gap-4 cursor-pointer font-semibold text-gray-400 text-sm w-full">
          <li className="text-gray-50">Home</li>
          <li>Fixtures</li>
          <li>Players</li>
          <li>League</li>
          <li>News</li>
          <li className="whitespace-nowrap">Contact Us</li>
        </ul>

        <div className="bg-[#222222] px-4 py-2 rounded-lg flex gap-2 items-center w-full">
          <CiSearch className="text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search league, clubs, news"
            className="bg-transparent focus:outline-none text-base w-full placeholder-gray-400"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
