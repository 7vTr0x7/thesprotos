import React, { useState } from "react";

import results from "../../../../utils/results.json";
import CustomDropdown from "../../../../components/CustomDropDown";
import MatchCard from "../MatchCard/MatchCard";
import { useSelector } from "react-redux";

const Results = () => {
  const results = useSelector((state) => state.results.results);

  const leagues = results.map((result) => result.competition);

  const [league, setLeague] = useState(leagues[0]);

  const months = results
    .filter((match) => match.competition === league)
    .map((match) => match.month);

  const matches = results.filter((result) => result.competition === league);

  return (
    <>
      <div className="md:w-8/12 w-10/12">
        <CustomDropdown
          league={league}
          setLeague={setLeague}
          options={leagues}
        />
      </div>
      <div className="my-4">
        {months.length > 0 ? (
          months.map((month) => (
            <div key={month}>
              <p className="text-gray-50 text-lg sm:text-xl my-2 sm:my-4">
                {month}
              </p>

              {matches &&
                matches?.map((match) => (
                  <MatchCard match={match} key={match._id} />
                ))}
            </div>
          ))
        ) : (
          <p className="text-gray-50 text-sm text-center my-2 sm:my-4">
            No match found
          </p>
        )}
      </div>
    </>
  );
};

export default Results;
