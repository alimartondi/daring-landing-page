import React, { useState, useEffect } from "react";
import Logo from "../../images/logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  const [state, setState] = useState({
    active: false,
  });

  const isOnTop = useScrollHandler();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const open = () => setState(!open);

  return (
    <nav
      className={` ${
        isOnTop
          ? "bg-transparent transition duration-300 ease-in-out"
          : "bg-white shadow"
      } fixed w-full `}
    >
      <div className="container mx-auto px-1.5 py-3 lg:py-4 px-4 lg:px-16 flex lg:flex-row items-center justify-between">
        <div className="brand z-50">
          <img
            src={Logo}
            className="flex-none max-h-6 md:max-h-full cursor-pointer px-2 lg:px-0"
            alt="moriba-logo"
            onClick={scrollToTop}
          />
        </div>
        <button
          className="text-gray-500 w-10 h-10 relative focus:outline-none bg-transparent z-50 lg:hidden"
          onClick={() => setState({ active: !state.active })}
        >
          <span className="sr-only">Open main menu</span>
          <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                state.active ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${
                state.active ? "opacity-0" : ""
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
                state.active ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
        <div
          className={`${
            state.active ? "block" : "hidden"
          } absolute lg:relative flex flex-col lg:flex lg:flex-row lg:justify-between lg:items-center top-0 left-0 pt-16 lg:pt-0 h-screen lg:h-auto w-full lg:w-9/12 xl:w-3/6 bg-white lg:bg-transparent font-semibold lg:font-medium text-xl lg:text-base space-y-4 lg:space-y-0 px-4 lg:px-0 text-gray-900`}
        >
          <hr className="w-full bg-gray-500 lg:hidden" />
          <Link
            activeClass="active"
            to="feature"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="active:text-indigo-900 cursor-pointer hover:text-indigo-900"
            onClick={open}
          >
            Feature
          </Link>
          <Link
            activeClass="active"
            to="system"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="active:text-indigo-900 cursor-pointer hover:text-indigo-900"
            onClick={open}
          >
            About Us
          </Link>
          <Link
            activeClass="active"
            to="board"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            className="active:text-indigo-900 cursor-pointer hover:text-indigo-900"
            onClick={open}
          >
            Contact
          </Link>
          <Link
            activeClass="active"
            to="application"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="active:text-indigo-900 cursor-pointer hover:text-indigo-900"
            onClick={open}
          >
            Application
          </Link>
          <button className="w-full lg:w-auto lg:px-5 bg-red-500 rounded-lg py-2.5 font-medium text-white text-base">
            Sign up
          </button>
        </div>
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
