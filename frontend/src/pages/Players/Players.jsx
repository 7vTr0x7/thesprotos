import React from "react";
import Breadcrumbs from "./../../components/Breadcrumbs";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";

import data from "../../utils/playersData.json"; // Your updated data
import PlayerCard from "./PlayerCard/PlayerCard";

const Players = () => {
  return (
    <>
      <Header />
      <>
        <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 text-center text-gray-900 font-semibold h-32 sm:h-48 flex justify-center items-center text-2xl sm:text-4xl">
          Players
        </div>
        <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-3 bg-black">
          <Breadcrumbs />
        </div>
        <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-3 bg-black">
          {data.map((position) => (
            <div key={position.name}>
              <p className="text-xl text-gray-50 font-semibold">{`${position.name}s`}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4  my-4">
                {position.players.map((player) => (
                  <PlayerCard key={player.name} player={player} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
      <Footer />
    </>
  );
};

export default Players;
