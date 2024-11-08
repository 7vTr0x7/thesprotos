import React from "react";
import MatchCard from "../MatchCard/MatchCard";
import { useSelector } from "react-redux";

const FixturesMatches = () => {
  const matches = useSelector((state) => state.upcomingMatch.upcomingMatch);

  const months = matches
    .filter((match) => match.status === "Upcoming")
    .map((match) => match.month);

  return (
    <>
      {months &&
        months.map((month, index) => (
          <div key={index}>
            <p className="text-gray-50 text-lg sm:text-xl mb-2 md:mb-4">
              {month}
            </p>
            {matches &&
              matches
                .filter((match) => match.status === "Upcoming")
                .filter((match) => match.month === month)
                .map((match) => <MatchCard match={match} key={match._id} />)}
          </div>
        ))}
    </>
  );
};

export default FixturesMatches;
