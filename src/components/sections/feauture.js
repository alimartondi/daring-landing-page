import React from "react";
import {
  DocumentDuplicateIcon,
  DesktopComputerIcon,
  CalendarIcon,
} from "@heroicons/react/solid";

export default function Feauture() {
  return (
    <div
      className="feauture advantes text-center text-black-200 mt-24 md:mt-40"
      id="feauture"
    >
      <h6 className="text-indigo-900 font-semibold text-base">Feauture</h6>
      <h2 className="font-bold text-4xl md:text-5xl text-gray-900">
        Our Special Feauture
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 mt-12 md:mt-20 justify-center">
        {feautureData.map((content, i) => (
          <div
            className="w-full py-12 px-10 md:pb-10 font-semibold bg-white rounded-lg hover:shadow"
            key={i}
          >
            <div className="flex w-20 h-20 md:w-20 md:h-20 md:-mt-16 rounded-xl text-white mx-auto bg-indigo-900 items-center justify-center">
              <div className="h-10 w-10">{content.icon}</div>
            </div>
            <h4 className="font-bold text-gray-900 text-xl mt-8">
              {content.title}
            </h4>
            <p className="mt-3 text-md font-normal text-gray-800">
              {content.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const feautureData = [
  {
    icon: <DocumentDuplicateIcon />,
    title: "User Friendly",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
  },
  {
    icon: <DesktopComputerIcon />,
    title: "Flexibility",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    icon: <CalendarIcon />,
    title: "Trusted App",
    description:
      "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarr-assing hidden in the middle.",
  },
];
