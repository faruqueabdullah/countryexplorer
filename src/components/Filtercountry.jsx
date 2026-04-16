export default function Filtercountry({ setQuery, isdark }) {
  const regions = ["Asia", "Africa", "Europe", "America", "Oceania"];

  return (
    <div className="w-full md:w-100">
      <select
        className=" p-4 w-full border-none outline-none shadow-md rounded"
        onChange={(e) => setQuery(e.target.value)}
      >
        <option hidden>Filter by Region</option>
        {regions.map((region) => {
          return (
            <option
              value={region}
              key={region}
              className={`${isdark ? "bg-gray-900" : "bg-white"}`}
            >
              {region}
            </option>
          );
        })}
      </select>
    </div>
  );
}
