import React, { useEffect, useState } from "react";
import Breadcrumbs from "./../../components/Breadcrumbs";
import Footer from "./../../components/Footer";
import Header from "./../../components/Header";

import { useDispatch } from "react-redux";
import { setPlayers } from "../../app/slices/playerSlice";
import PlayerCard from "./PlayerCard/PlayerCard";

const positions = ["Goalkeeper", "Defender", "Midfielder", "Forward"];

const Players = () => {
  const [players, setPlayersData] = useState(null);

  const getPlayers = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/user/players", {
        method: "GET",
        credentials: "include",
      });

      if (!res.ok) {
        console.log("Failed to get data");
      }

      const data = await res.json();

      if (data.success) {
        setPlayersData(data?.players);
      }
    } catch (error) {
      console.log("failed to get players Data", error.message);
    }
  };

  useEffect(() => {
    getPlayers();
  }, []);

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
          {positions.map((position) => (
            <div key={position}>
              <p className="text-xl text-gray-50 font-semibold">{`${position}s`}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4  my-4">
                {players &&
                  players.length > 0 &&
                  players
                    .filter((player) => player.position === position)
                    .map((player) => (
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
