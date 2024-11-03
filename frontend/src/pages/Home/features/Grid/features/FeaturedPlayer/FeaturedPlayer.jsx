import React from "react";
import FeaturedPlayerCard from "../../../../../../components/FeaturedPlayerCard";
import data from "../../../../../../utils/featuredPlayer.json";

const FeaturedPlayer = () => {
  return (
    <div className="py-4">
      <p className="text-[28px]  mb-4 text-gray-50">Featured Player</p>
      <FeaturedPlayerCard player={data} />
    </div>
  );
};

export default FeaturedPlayer;
