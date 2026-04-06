import { useEffect, useState } from "react";
import { useParams, Link, useOutletContext } from "react-router-dom";
import ShimmerEffect from "./ShimmerEffect";

export default function Countrydetail() {
  // const countryName = new URLSearchParams(window.location.search).get("name");
  // console.log(countryName);
  const [isdark] = useOutletContext();

  const params = useParams();
  // console.log(params);

  const [countryData, setcountryData] = useState(null);
  const [error, setError] = useState(false);
  const [newborder, setNewborder] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${params.country}`)
      .then((res) => res.json())
      .then(([data]) => {
        console.log(data);
        setcountryData({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population.toLocaleString("en-IN"),
          region: data.region,
          subRegion: data.subregion,
          capital: data.capital[0],
          currencies: Object.values(data.currencies)[0].name,
          language: Object.values(data.languages)[0],
          flag: data.flags.svg,
          tld: data.tld[0],
          borderCountries: data.borders || [],
        });
      })
      .catch((err) => {
        err && setError(true);
      });
  }, [params.country]);

  useEffect(() => {
    if (!countryData) return;
    Promise.all(
      countryData.borderCountries.map((borderCode) =>
        fetch(`https://restcountries.com/v3.1/alpha/${borderCode}`)
          .then((res) => res.json())
          .then(([data]) => data.name.common),
      ),
    ).then((borders) => setNewborder(borders));
  }, [countryData]);

  // console.log(newborder)
  if (error) {
    return <h2>Country not found!</h2>;
  }

  return countryData === null ? (
    <main
      className={`${isdark ? "bg-gray-900 text-white" : "bg-white text-gray-900"}  h-[calc(100vh-72px)]`}
    >
      <div className={` max-w-300 h-[calc(100vh-72px) mx-auto py-8 px-5`}>
        <ShimmerEffect />
      </div>
    </main>
  ) : (
    <main
      className={`${isdark ? "bg-gray-900 text-white" : "bg-white text-gray-900"} h-[calc(100vh-72px)] `}
    >
      <div className={`max-w-300 mx-auto py-8 px-5`}>
        <span
          className="py-1 px-6 shadow cursor-pointer"
          onClick={() => history.back()}
        >
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-15 mt-10">
          <img src={countryData.flag} className="shadow" />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text flex flex-col flex-wrap gap-3 sm:max-h-44 ">
              <p>
                <b>Native Name: </b>
                <span className="native-name">{countryData.nativeName}</span>
              </p>
              <p>
                <b>Population: </b>
                <span className="population">{countryData.population}</span>
              </p>
              <p>
                <b>Region: </b>
                <span className="region">{countryData.region}</span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region">{countryData.subRegion}</span>
              </p>
              {countryData.capital && (
                <p>
                  <b>Capital: </b>
                  <span className="capital">{countryData.capital}</span>
                </p>
              )}
              <p>
                <b>Top Level Domain: </b>
                <span className="top-level-domain">{countryData.tld}</span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currencies">{countryData.currencies}</span>
              </p>
              <p>
                <b>Languages: </b>
                <span className="languages">{countryData.language}</span>
              </p>
            </div>
            {countryData.borderCountries.length !== 0 && (
              <div className="border-countries flex justify-start gap-2 mt-12 flex-wrap">
                <b>Border Countries: </b>&nbsp;
                {newborder.map((border) => (
                  <Link
                    className="py-1 px-4 shadow shadow-gray-400 rounded-sm text-sm"
                    key={border}
                    to={`/${border}`}
                    onClick={() => {
                      setcountryData(null);
                    }}
                  >
                    {border}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
