import React from "react";
import ApplicationImage from "../../images/application.png";
import Playstore from "../../images/playstore.svg";
import Appstore from "../../images/appstore.svg";

export default function Application() {
  return (
    <div
      className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 mt-24 md:mt-40 items-center"
      id="application"
    >
      <div>
        <img src={ApplicationImage} alt="System PNG" />
      </div>
      <div className="application-content lg:pr-24 mt-10 lg:mt-0">
        <p className="text-indigo-900 font-semibold text-base mb-2">
          Application
        </p>
        <h2 className="text-4xl xl:text-5xl font-extrabold text-gray-800">
          Download Moriba on your phone
        </h2>
        <p className="mt-5">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <div className="mt-8 flex">
          <button className="text-white bg-indigo-900 rounded-lg flex px-6 py-4 mr-2">
            <img src={Playstore} alt="Playstore Badge" className="mr-1" />
            Play store
          </button>
          <button className="text-white bg-indigo-900 rounded-lg flex px-6 py-4">
            <img src={Appstore} alt="Appstore Badge" className="mr-1" />
            App store
          </button>
        </div>
      </div>
    </div>
  );
}
