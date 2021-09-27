import React from "react";
import SystemImage from "../../images/system.png";

export default function System() {
  return (
    <div
      className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 mt-24 md:mt-40 items-center"
      id="system"
    >
      <div className="order-last md:order-first">
        <img src={SystemImage} alt="System PNG" />
      </div>
      <div className="System-content lg:pr-24">
        <p className="text-indigo-900 font-semibold text-base">System</p>
        <h2 className="text-4xl xl:text-5xl font-bold">
          Smart System & Friendly Interface
        </h2>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugit
          assumenda quisquam cumque qui officiis. Reiciendis magni sapiente,
          molestias perspiciatis animi, pariatur, expedita velit at ut fugit non
          rerum quos?
        </p>
      </div>
    </div>
  );
}
