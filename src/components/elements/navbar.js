import React, { useState, useEffect } from "react";
import Burger from "react-css-burger";
import Logo from "../../images/logo.svg";

export default function Navbar() {
  const [state, setState] = useState({
    active: false,
  });
  const genericHamburgerLine = `h-0.5 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  const isOnTop = useScrollHandler();

  // const scrollToTop = () => {
  //   animateScroll.scrollToTop();
  // };

  const open = () => setState(!open);

  return (
    <nav
      className={` ${
        isOnTop ? "bg-transparent" : "shadow-md bg-white"
      } fixed flex items-center justify-between px-2 py-4 md:py-6 w-full transition duration-150 ease-in-out`}
    >
      <div className="container mx-auto px-2 md:px-16 flex flex-wrap items-center justify-between">
        <img src={Logo} className="max-h-6 md:max-h-full" alt="moriba-logo" />
        {/* <div className="nav-items absolute top-0 left-0 p-4 font-medium text-white   bg-pink-500 w-full h-screen z-0">
          <ul className="flex flex-col h-52 justify-between">
            <li>Home</li>
            <li>Advantages</li>
            <li>About Us</li>
            <li>Application</li>
            <li>Contact Us</li>
          </ul>
        </div> */}
        <button className="h-4 w-4"></button>
        <genericHamburgerLine />
      </div>
    </nav>
  );
}

const useScrollHandler = () => {
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < 6;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};
