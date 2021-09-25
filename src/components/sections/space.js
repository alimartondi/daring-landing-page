import React from "react";
import SpaceImage from "../../images/space.png";

export default function Space() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 mt-24 md:mt-40 items-center">
      <div className="order-last md:order-first md:pr-24">
        <p className="text-indigo-900 font-semibold text-base">One space</p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Work Better in One Shared Space
        </h2>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugit
          assumenda quisquam cumque qui officiis. Reiciendis magni sapiente,
          molestias perspiciatis animi, pariatur, expedita velit at ut fugit non
          rerum quos?
        </p>
      </div>
      <div>
        <img src={SpaceImage} alt="One Space PNG" />
      </div>
    </div>
  );
}
