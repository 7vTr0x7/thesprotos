import React from "react";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import Header from "../../components/Header";
import PlayerProfile from "./features/PlayerProfile/PlayerProfile";
import { useLocation } from "react-router-dom";
import PlayerInformation from "./features/PlayerInformation/PlayerInformation";
import TeamPlayedFor from "./features/TeamPlayedFor/TeamPlayedFor";
import RecentFixtures from "./features/RecentFixtures/RecentFixtures";

const PlayerDetails = () => {
  const location = useLocation();
  const player = location.state.player;
  return (
    <>
      <Header />
      <div className="md:pb-20 pb-10 bg-black">
        <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 text-center text-gray-900 font-semibold h-32 sm:h-48 flex justify-center items-center text-2xl sm:text-4xl">
          Players
        </div>
        <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-3 bg-black">
          <Breadcrumbs />
        </div>
        <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-3 bg-black">
          <PlayerProfile player={player} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4 sm:px-8 md:px-16 lg:px-32 py-3 bg-black">
          <PlayerInformation player={player} />
          <TeamPlayedFor player={player} />
        </div>
        <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-3 bg-black">
          <RecentFixtures />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PlayerDetails;
