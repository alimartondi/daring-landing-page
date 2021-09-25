import React from "react";
import Logo from "../../images/logo.svg";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container py-20 px-4 lg:px-16 mx-auto">
        <hr className="bg-gray-700 w-full mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={Logo} alt="Footer Logo" />
            <p className="mt-8 hidden md:block">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text here we go
            </p>
          </div>
          <div className="footer-link flex w-full">
            <div className="w-3/6">
              <p className="font-medium text-lg mb-5">About</p>
              <ul className="cursor-pointer space-y-3 text-base font-medium">
                <li>Our Story</li>
                <li>Service</li>
                <li>Blog</li>
                <li>Term & Condition</li>
              </ul>
            </div>
            <div className="w-3/6">
              <p className="font-medium mb-5 text-lg">Help</p>
              <ul className="cursor-pointer space-y-3 text-base font-medium">
                <li>FAQ</li>
                <li>Contact Us</li>
                <li>Costumers</li>
                <li>Site Map</li>
                <li>License</li>
              </ul>
            </div>
          </div>
          <div className="hidden md:block">
            <p className="font-medium">Subscribe</p>
            <input
              type="email"
              class="form-input py-4 w-full border-0 shadow-lg rounded-lg mt-8"
              placeholder="Your email"
            ></input>
          </div>
        </div>
        <p className="font-medium mt-10">Follow Us</p>
        <hr className="bg-gray-700 mb-2 w-1/4" />
        <div className="grid grid-cols-2">
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
          <div className="copyright text-right">
            <p className="text-sm font-medium">
              &copy;2021 | Made With &#10084;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
