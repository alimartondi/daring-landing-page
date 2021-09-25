import React from "react";
import ApplicationImage from "../../images/application.png";

export default function Application() {
  return (
    <div
      className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 mt-24 md:mt-40 items-center"
      id="application"
    >
      <div>
        <img src={ApplicationImage} alt="System PNG" />
      </div>
      <div className="application-content md:pr-24">
        <p className="text-indigo-900 font-semibold text-base">Application</p>
        <h2 className="text-4xl font-bold">Download Moriba Your Phone</h2>
        <p className="mt-5">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
    </div>
  );
}
