import React from "react";
import SystemImage from "../../images/system.png";

export default function System() {
  return (
    <div
      className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 mt-24 md:mt-40 items-center"
      id="system"
    >
      <div>
        <img src={SystemImage} alt="System PNG" />
      </div>
      <div className="System-content lg:pr-24">
        <p className="text-indigo-900 font-semibold text-base mb-2">System</p>
        <h2 className="text-4xl xl:text-5xl font-extrabold text-gray-800">
          Smart system & friendly interface
        </h2>
        <p className="mt-5 leading-normal">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>
        <button className="bg-indigo-900 text-white rounded-lg px-8 py-3.5 md:py-4 mt-8 font-medium w-3/6 md:w-auto">
          Read More
        </button>
      </div>
    </div>
  );
}
