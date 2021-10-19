import React from "react";
import HeroImage from "../../images/hero.png";

export default function Hero() {
  return (
    <div className="hero h-full justify-center pt-24">
      <div className="grid grid-cols-1 gap-0 lg:grid-cols-2 md:gap-8 items-center">
        <div className="hero-content pt-12 md:pt-6 lg:pt-0 items-center">
          <h1 className="text-indigo-900 font-extrabold text-5xl md:text-5xl xl:text-6xl md:max-w-lg">
            The best way <br />
            to organize <br />
            your work.
          </h1>
          <h5 className="text-gray-600 text-lg font-normal mt-8 md:max-w-md">
            To manage any type of work they take on, ranging from highly
            structured to quick project boards, all your work in just one
            platform.
          </h5>
          <button className="bg-indigo-900 text-white rounded-lg px-8 py-3.5 md:py-4 mt-10 font-medium w-3/6 md:w-auto">
            Get Started
          </button>
        </div>
        <div className="lg:px-8 mx-auto md:pl-10 mt-12 lg:mt-0">
          <img src={HeroImage} alt="Hero" />
        </div>
      </div>
    </div>
  );
}
