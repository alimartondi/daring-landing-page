import React from "react";

export default function Hero() {
  return (
    <div className="hero bg-gray-100 h-96">
      <div className="container px-3">
        <div className="hero-content pt-16">
          <h1 className="text-indigo-900 font-bold text-4xl">
            Build project plans, coordinate tasks, and hit deadlines
          </h1>
          <h5 className="text-gray-600 text-base font-semibold mt-8 max-w-prose">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more
          </h5>
          <button className="bg-indigo-900 text-white rounded-lg px-8 py-3 mt-8 font-medium">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
