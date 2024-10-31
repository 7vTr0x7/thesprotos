import React from "react";
import matches from "../../../../utils/fixtures.json";
import MatchCard from "../MatchCard/MatchCard";

const FixturesMatches = () => {
  return (
    <>
      {matches &&
        matches.map((event) => (
          <div key={event?.id}>
            <p className="text-gray-50 text-lg sm:text-xl mb-2 md:mb-4">
              {event?.month}
            </p>
            {event?.matches.map((match) => (
              <MatchCard match={match} key={match.id} />
            ))}
          </div>
        ))}
    </>
  );
};

export default FixturesMatches;
