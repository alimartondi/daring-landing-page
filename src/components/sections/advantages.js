import React from "react";
import {
  DocumentDuplicateIcon,
  DesktopComputerIcon,
  CalendarIcon,
} from "@heroicons/react/solid";

export default function Advantages() {
  return (
    <div className="advantes text-center text-black-200 mt-16">
      <h2 className="font-bold text-3xl text-gray-900"> Advantages</h2>
      <div className="md:flex mt-5 justify-center">
        {advantagesData.map((content, i) => (
          <div className="w-full py-8 px-4 font-semibold" key={i}>
            <div className="flex w-16 h-16 rounded-xl text-white mx-auto bg-indigo-900 items-center justify-center">
              <div className="h-8 w-8">{content.icon}</div>
            </div>
            <h4 className="font-bold text-gray-900 text-xl mt-5">
              {content.title}
            </h4>
            <p className="mt-3 font-base text-lg text-gray-600">
              {content.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const advantagesData = [
  {
    icon: <DocumentDuplicateIcon />,
    title: "First Number",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
  },
  {
    icon: <DesktopComputerIcon />,
    title: "Second Number",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
  },
  {
    icon: <CalendarIcon />,
    title: "Third Number",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
  },
];
