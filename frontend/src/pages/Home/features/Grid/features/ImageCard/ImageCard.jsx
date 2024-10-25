import React from "react";
import rectangle from "../../../../../../images/Rectangle.png";

const ImageCard = () => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden w-full">
      <img alt="image" src={rectangle} className="w-full  object-cover" />
    </div>
  );
};

export default ImageCard;
