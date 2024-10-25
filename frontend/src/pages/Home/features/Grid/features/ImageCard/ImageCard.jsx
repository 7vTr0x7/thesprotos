import React from "react";
import rectangle from "../../../../../../images/Rectangle.png";

const ImageCard = () => {
  return (
    <div className="rounded-lg shadow-lg">
      <img alt="image" src={rectangle} />
    </div>
  );
};

export default ImageCard;
