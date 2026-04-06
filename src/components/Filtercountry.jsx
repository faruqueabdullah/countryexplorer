export default function Filtercountry({ setQuery, isdark }) {
  const regions = ["Asia", "Africa", "Europe", "America", "Oceania"];

  return (
    <div className="w-full flex items-center justify-center sm:justify-end">
      <select
        className="w-full max-w-70.5 p-4 border-none outline-none shadow-md rounded"
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
