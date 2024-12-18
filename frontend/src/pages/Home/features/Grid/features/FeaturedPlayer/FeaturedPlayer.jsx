import React, { useEffect, useState } from "react";
import FeaturedPlayerCard from "../../../../../../components/FeaturedPlayerCard";

const FeaturedPlayer = () => {
  const [featuredPlayer, setFeaturedPlayer] = useState(null);

  const apiUrl = import.meta.env.VITE_API_URL;

  const getFeaturedPlayer = async (apiUrl) => {
    try {
      const res = await fetch(`${apiUrl}/api/user/featured-player`, {
        method: "GET",
        credentials: "include",
      });

      if (!res.ok) {
        console.log("Failed to get data");
      }

      const data = await res.json();

      if (data.success) {
        setFeaturedPlayer(data?.players[0]);
      }
    } catch (error) {
      console.log("failed to get Sponsor Data", error.message);
    }
  };

  useEffect(() => {
    getFeaturedPlayer(apiUrl);
  }, []);

  return (
    <div className="py-4">
      <p className="text-[28px]  mb-4 text-gray-50">Featured Player</p>
      {featuredPlayer && <FeaturedPlayerCard player={featuredPlayer} />}
    </div>
  );
};

export default FeaturedPlayer;
