import React, { useEffect } from "react";
import { useState } from "react";

const Sponsor = ({ text }) => {
  const [sponsor, setSponsor] = useState("");

  const apiUrl = import.meta.env.VITE_API_URL;

  const getSponsorData = async (apiUrl) => {
    try {
      const res = await fetch(`${apiUrl}/api/user/sponsor`, {
        method: "GET",
        credentials: "include",
      });

      if (!res.ok) {
        console.log("Failed to get data");
      }

      const data = await res.json();

      if (data.success) {
        setSponsor(data?.sponsor[0]?.imageUrl);
      }
    } catch (error) {
      console.log("failed to get Sponsor Data", error.message);
    }
  };

  useEffect(() => {
    getSponsorData(apiUrl);
  }, []);

  return (
    sponsor && (
      <div className="text-gray-50 mt-7 mb-3">
        <p className={`text-[28px] mb-4  ${text && "mt-6"}`}>Sponsor</p>
        <div className="my-3 ">
          <img
            alt="Sponsor"
            src={sponsor}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    )
  );
};

export default Sponsor;
