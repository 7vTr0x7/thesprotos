import React from "react";
import matches from "../../../../utils/fixtures.json";
import MatchCard from "../MatchCard/MatchCard";

const FixturesMatches = () => {
  return (
    <>
      {matches.map((event) => (
        <div key={event?.id}>
          <p className="text-gray-50 text-lg sm:text-xl my-2 sm:my-4">
            {event?.month}
          </p>
          {event?.matches?.map((match) => (
            <MatchCard match={match} key={match.id} />
          ))}
        </div>
      ))}
    </>
  );
};

export default FixturesMatches;
