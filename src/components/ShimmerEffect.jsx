import React from "react";
import { useOutletContext } from "react-router-dom";

export default function ShimmerEffect() {
  const [isdark] = useOutletContext();

  function setTheme() {
    const lightTheme = "bg-gray-200";
    const darkTheme = "bg-gray-400";

    return isdark ? darkTheme : lightTheme;
  }

  return (
    <>
      <span className={`inline-block w-25 h-6 ${setTheme()} mb-6`}></span>
      <div className="country-details gap-10 grid grid-cols-1 sm:grid-cols-2 items-center">
        <div className={`shimmer-image max-w-100 h-60 ${setTheme()}`}></div>
        <div className="max-w-120">
          <div className="grid grid-cols-2 gap-3">
            {new Array(6).fill(null).map((_, i) => (
              <p
                key={i}
                className={`h-6 w-30 shadow rounded-sm ${setTheme()}`}
              ></p>
            ))}
          </div>
          <div className=" flex flex-wrap gap-3 mt-14">
            {new Array(4).fill(null).map((_, i) => (
              <p
                key={i}
                className={`h-6 w-30 shadow rounded-sm ${setTheme()}`}
              ></p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
