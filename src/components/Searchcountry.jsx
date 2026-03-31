export default function Searchcountry({ setQuery }) {
  return (
    <div className="search-container shadow-md max-w-87.5 w-full rounded px-6 overflow-hidden flex items-center">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        className=" outline-none p-4 w-full bg-inherit text-inherit placeholder:text-gray-400"
        type="text"
        placeholder="Search by country name or capital..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
    </div>
  );
}
