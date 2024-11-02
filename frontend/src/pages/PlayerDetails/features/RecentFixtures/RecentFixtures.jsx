import React from "react";

import recentFixtures from "../../../../utils/recentFixtures.json";
import LiveMatchCard from "../../../Home/features/Grid/features/LiveMatchCard/LiveMatchCard";

const RecentFixtures = () => {
  return (
    <>
      <p className="my-4 text-gray-50">Recent Fixtures</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {recentFixtures &&
          recentFixtures.map((match) => (
            <div key={match.id} className="col-span-1">
              <LiveMatchCard match={match} />
            </div>
          ))}
      </div>
    </>
  );
};

export default RecentFixtures;