import React, { useEffect, useState } from "react";

const ImageCard = () => {
  const [banner, setBanner] = useState([]);

  const apiUrl = import.meta.env.VITE_API_URL;

  const getBannerData = async (apiUrl) => {
    try {
      const res = await fetch(`${apiUrl}/api/user/banner`, {
        method: "GET",
        credentials: "include",
      });

      if (!res.ok) {
        console.log("Failed to get data");
      }

      const data = await res.json();

      if (data.success) {
        setBanner(data.banner[0].imageUrl);
      }
    } catch (error) {
      console.log("failed to get UpcomingMatch Data", error.message);
    }
  };

  useEffect(() => {
    getBannerData(apiUrl);
  }, []);

  return (
    <div className="rounded-lg shadow-lg overflow-hidden w-full">
      <img
        alt="image"
        src={banner}
        className="w-full md:h-[500px] object-cover"
      />
    </div>
  );
};

export default ImageCard;
