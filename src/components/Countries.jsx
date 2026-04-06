import { useEffect, useState } from "react";
import Countrycard from "./Countrycard";

export default function Countries({ query }) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const regions = ["asia", "africa", "europe", "america", "oceania"];

        const promises = regions.map(async (region) => {
          const res = await fetch(
            `https://restcountries.com/v3.1/region/${region}`,
          );
          if (!res.ok) {
            throw new Error("Failed to fetch" + region);
          }
          return res.json();
        });

        const data = await Promise.allSettled(promises);

        const allCountries = data
          .filter((country) => country.status === "fulfilled")
          .flatMap((country) => country.value);

        setCountries(allCountries);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterCountries = countries.flat().filter((country) => {
    return (
      country.name.common.toLowerCase().includes(query.toLowerCase()) ||
      country.region.includes(query) ||
      (country.capital &&
        country.capital.some(
          // here country.capital is an array of capitals.
          (cap) => cap.toLowerCase().includes(query.toLowerCase()),
        ))
    );
  });

  const numberofcountriesfound = filterCountries?.length
    ? filterCountries?.length
    : 0;

  if (loading) {
    return <h1 class="w-full text-center">Loading...</h1>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <div className="max-w-300 mx-auto text-center sm:text-left font-semibold mb-7.5 relative z-10">
        Number of countries found : {numberofcountriesfound}
      </div>
      {
        <div className="countries-container max-w-300 mx-auto mt-4 flex flex-wrap justify-center gap-16 md:justify-between relative z-10">
          {filterCountries.map((country) => {
            // console.log(country.flag)
            return (
              <Countrycard
                key={country.flag}
                name={country.name.common}
                flag={country.flags.svg}
                capital={country.capital?.[0]} // added ? in case some countries don't have capital
                population={country.population}
                region={country.region}
              />
            );
          })}
        </div>
      }
    </>
  );
}
