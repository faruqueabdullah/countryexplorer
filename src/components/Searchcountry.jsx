import { useEffect, useState } from "react";

export default function Searchcountry({ setQuery }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(input);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div className="search-container shadow-md w-full md:w-120 rounded px-6 overflow-hidden flex items-center">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        className=" outline-none p-4 w-full bg-inherit text-inherit placeholder:text-gray-400"
        type="text"
        placeholder="Search by country name or capital..."
        value={input}
        onChange={(e) => setInput(e.target.value.toLowerCase())}
      />
    </div>
  );
}
