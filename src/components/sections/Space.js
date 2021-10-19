import React from "react";
import SpaceImage from "../../images/space.png";

export default function Space() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 mt-24 md:mt-36 items-center">
      <div className="order-last lg:order-first lg:pr-24">
        <p className="text-indigo-900 font-semibold text-base">One space</p>
        <h2 className="text-4xl xl:text-5xl font-extrabold text-gray-800">
          Work better in one shared space
        </h2>
        <p className="mt-5">
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years.
        </p>
      </div>
      <div>
        <img src={SpaceImage} alt="One Space PNG" />
      </div>
    </div>
  );
}
