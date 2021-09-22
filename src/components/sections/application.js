import React from "react";
import ApplicationImage from "../../images/application.png";

export default function Application() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 mt-24 md:mt-40 items-center">
      <div>
        <img src={ApplicationImage} alt="System PNG" />
      </div>
      <div className="application-content md:pr-24">
        <p className="text-indigo-900 font-semibold text-base">Application</p>
        <h2 className="text-4xl font-bold">Download Moriba Your Phone</h2>
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
