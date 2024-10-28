import React, { useState } from "react";

import results from "../../../../utils/results.json";
import CustomDropdown from "../../../../components/CustomDropDown";
import MatchCard from "../MatchCard/MatchCard";

const Results = () => {
  const [league, setLeague] = useState(results?.leagues[0]?.name);

  const selectedLeague = results?.leagues.find((leag) => leag.name === league);

  const months = selectedLeague.months;

  const options = results?.leagues.map((league) => league.name);

  return (
    <>
      <div className="md:w-8/12 w-10/12">
        <CustomDropdown
          league={league}
          setLeague={setLeague}
          options={options}
        />
      </div>
      <div className="my-4">
        {months &&
          months.map((month) => (
            <div key={month.id}>
              <p className="text-gray-50 text-lg sm:text-xl my-2 sm:my-4">
                {month?.month}
              </p>

              {month?.matches?.map((match) => (
                <MatchCard match={match} key={match.id} />
              ))}
            </div>
          ))}
      </div>
    </>
  );
};

export default Results;
