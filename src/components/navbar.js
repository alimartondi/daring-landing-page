import React, { useState } from "react";
import Burger from "react-css-burger";
import Logo from "../images/logo.svg";

export default function Navbar() {
  const [state, setState] = useState({
    active: false,
  });
  const genericHamburgerLine = `h-0.5 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-5 z-50 bg-gray-100">
      <div className="container px-2 mx-auto flex flex-wrap items-center justify-between">
        <img src={Logo} className="max-h-6" alt="daring-logo" />
        {/* <div className="nav-items absolute top-0 left-0 p-4 font-medium text-white   bg-pink-500 w-full h-screen z-0">
          <ul className="flex flex-col h-52 justify-between">
            <li>Home</li>
            <li>Advantages</li>
            <li>About Us</li>
            <li>Application</li>
            <li>Contact Us</li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
}
