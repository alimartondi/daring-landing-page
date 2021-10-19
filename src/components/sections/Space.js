import React from "react";
import SpaceImage from "../../images/space.png";

export default function Space() {
  return (
    <div
      className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 mt-24 md:mt-36 items-center"
      id="space"
    >
      <div className="order-last lg:order-first lg:pr-24">
        <p className="text-indigo-900 font-semibold text-base mb-2">
          One space
        </p>
        <h2 className="text-4xl xl:text-5xl font-extrabold text-gray-800">
          Work better in one shared space
        </h2>
        <p className="mt-5 lg:max-w-md">
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years.
        </p>
        <button className="bg-indigo-900 text-white rounded-lg px-8 py-3.5 md:py-4 mt-8 font-medium w-3/6 md:w-auto">
          Read More
        </button>
      </div>
      <div>
        <img src={SpaceImage} alt="One Space PNG" />
      </div>
    </div>
  );
}
