import React from "react";
import {
  UserGroupIcon,
  ClipboardCheckIcon,
  ViewGridAddIcon,
} from "@heroicons/react/solid";

export default function Feauture() {
  return (
    <div
      className="feauture advantes text-center text-black-200 mt-24 md:mt-40"
      id="feauture"
    >
      <h6 className="text-indigo-900 font-semibold text-base">Feauture</h6>
      <h2 className="font-bold text-4xl xl:text-5xl text-gray-900">
        Our Special Feauture
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 mt-12 md:mt-20 justify-center">
        {feautureData.map((content, i) => (
          <div
            className="w-full py-12 px-10 md:pb-10 font-semibold bg-white rounded-lg hover:shadow-md"
            key={i}
          >
            <div className="flex w-20 h-20 md:w-20 md:h-20 md:-mt-16 rounded-xl text-white mx-auto bg-indigo-900 items-center justify-center">
              <div className="h-10 w-10">{content.icon}</div>
            </div>
            <h4 className="font-bold text-gray-900 text-xl mt-8">
              {content.title}
            </h4>
            <p className="mt-3 lg:mt-8 text-md font-normal text-gray-800">
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
    icon: <UserGroupIcon />,
    title: "Collaborative",
    description:
      "Give your teams an intelligent way to openly discuss work and keep conversations organized and accessible.",
  },
  {
    icon: <ClipboardCheckIcon />,
    title: "Flexibility",
    description:
      "Coordinate better on core projects with highly visual and intuitive tools to keep your team on track.",
  },
  {
    icon: <ViewGridAddIcon />,
    title: "Customizable",
    description:
      "Control every aspect of Kissflow to make it work for you and your team.",
  },
];
