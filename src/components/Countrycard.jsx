import { Link, useOutletContext } from "react-router-dom";

export default function Countrycard({
  name,
  flag,
  capital,
  population,
  region,
}) {

  const [isdark] = useOutletContext();

  return (
    <Link to={`${name}`}>
      <div className="country-card inline-block w-62.5 rounded-xl overflow-hidden shadow-md transition-all duration-200 ease-in-out hover:scale-102 hover:shadow-lg  cursor-pointer">
        <div className=" w-62.5 h-37.5 bg-cover">
          <img src={flag} alt="flag" className="w-full h-full object-cover block"/>
        </div>
        <div className={`card-text p-2 ${isdark? "bg-gray-800":"bg-gray-50"}`}>
          <h3 className="card-title text-2xl my-3">{name}</h3>
          <p>
            <b>Population: </b>
            {population.toLocaleString("en-IN")}
          </p>
          <p>
            <b>Region: </b>
            {region}
          </p>
          <p>
            <b>Capital: </b>
            {capital}
          </p>
        </div>
      </div>
    </Link>
  );
}
