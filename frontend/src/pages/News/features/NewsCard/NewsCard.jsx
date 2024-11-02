import React from "react";
import image from "../../../../images/players.png";

const NewsCard = ({ title, link, index }) => {
  return (
    <div className={`${index % 6 === 0 ? "col-span-8" : "col-span-4"}`}>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
    </div>
  );
};

export default NewsCard;
