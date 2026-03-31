import React from "react";

export default function ShimmerEffect() {
  return (
    <>
      <span className="inline-block w-25 h-6 bg-gray-200 mb-6"></span>
      <div className="country-details grid grid-cols-1 sm:grid-cols-2 items-center">
        <div className="shimmer-image w-100 h-60 bg-gray-200"></div>
        <div className="w-120">
          <div className="grid grid-cols-2 gap-3">
            {new Array(6).fill(null).map((_, i) => (
              <p key={i} className="h-6 w-30 shadow rounded-sm bg-gray-200"></p>
            ))}
          </div>
          <div className=" flex flex-wrap gap-3 mt-14">
            {new Array(4).fill(null).map((_, i) => (
              <p key={i} className="h-6 w-30 shadow rounded-sm bg-gray-200"></p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
