import React from "react";
import HeroImage from "../../images/hero.png";

export default function Hero() {
  return (
    <div className="hero h-full justify-center">
      <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-8 items-center">
        <div className="hero-content pt-16 order-last md:order-first">
          <h1 className="text-indigo-900 font-bold text-4xl md:text-6xl">
            Build project plans, Coordinate tasks & Hit deadlines
          </h1>
          <h5 className="text-gray-600 text-lg font-normal mt-6 md:max-w-md">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin.
          </h5>
          <button className="bg-indigo-900 text-white rounded-lg px-8 py-3 mt-10 font-medium w-3/6">
            Get Started
          </button>
        </div>
        <div className="mt-24 px-2 md:pl-10">
          <img src={HeroImage} alt="Hero" />
        </div>
      </div>
    </div>
  );
}
