import React from "react";
import Logo from "../../images/logo.svg";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="container lg:py-20 pb-10 pt-20 px-4 lg:px-16 mx-auto">
        <hr className="bg-gray-700 w-full mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <img src={Logo} alt="Footer Logo" />
            <p className="mt-8 hidden md:block lg:max-w-sm">
              A company focused on developing solutions of genuine value to
              other companies.
            </p>
          </div>
          <div className="footer-link col-span-2 flex w-full">
            <div className="w-3/6">
              <p className="font-medium text-lg mb-5">About</p>
              <ul className="space-y-3 text-base font-medium md:font-normal">
                {aboutContents.map((content, i) => (
                  <li key={i}>
                    <a
                      href="/"
                      className="hover:text-indigo-900 cursor-pointer"
                    >
                      {content.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-3/6">
              <p className="font-medium mb-5 text-lg">Help</p>
              <ul className="space-y-3 text-base font-medium md:font-normal">
                {helpContents.map((content, i) => (
                  <li key={i}>
                    <a
                      href="/"
                      className="hover:text-indigo-900 cursor-pointer"
                    >
                      {content.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hidden md:block">
            <p className="font-medium mb-5">Get in touch</p>
            <div className="social">
              <ul className="flex w-24 justify-between text-gray-900">
                <li className="cursor-pointer hover:text-indigo-900 text-3xl">
                  <FaFacebookSquare />
                </li>
                <li className="cursor-pointer hover:text-indigo-900 text-3xl">
                  <FaLinkedin />
                </li>
                <li className="cursor-pointer hover:text-indigo-900 text-3xl">
                  <FaInstagram />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="bg-gray-700 mb-2 w-1/4 mt-8" />
        <div className="copyright">
          <p className="text-sm font-medium">&copy;2021 | Made With &#10084;</p>
        </div>
      </div>
    </div>
  );
}

const aboutContents = [
  {
    title: "Our Story",
  },
  {
    title: "Service",
  },
  {
    title: "Blog",
  },
  {
    title: "Term & Conditions",
  },
];

const helpContents = [
  {
    title: "FAQ",
  },
  {
    title: "Contact Us",
  },
  {
    title: "Costumer",
  },
  {
    title: "Map",
  },
  {
    title: "License",
  },
];
