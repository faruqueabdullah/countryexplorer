import Filtercountry from "./Filtercountry";
import Searchcountry from "./Searchcountry";
import Countries from "./Countries";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Home() {
  const [query, setQuery] = useState("");
  const [isdark] = useOutletContext();

  return (
    <main className={`${isdark ? "text-white bg-gray-900" : " bg-white text-gray-900"} min-h-screen p-4`}>
      <div className=" max-w-300 sticky top-0 left-0 bg-inherit z-50 mx-auto pt-4 pb-12 flex flex-col sm:flex-row md:justify-between items-center">
        <Searchcountry setQuery={setQuery} />
        <Filtercountry setQuery={setQuery} isdark={isdark}/>
      </div>
      <Countries query={query} />
    </main>
  );
}
