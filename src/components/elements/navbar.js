import React, { useState, useEffect } from "react";
import Logo from "../../images/logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { Fade as Hamburger } from "hamburger-react";

export default function Navbar() {
  // const [state, setState] = useState({
  //   active: false,
  // });
  const [isOpen, setOpen] = useState(false);
  // const genericHamburgerLine = `h-0.5 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  const isOnTop = useScrollHandler();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  // const open = () => setState(!open);

  return (
    <nav
      className={` ${
        isOnTop
          ? "bg-transparent transition duration-300 ease-in-out"
          : "bg-white shadow"
      } fixed w-full `}
    >
      <div className="container mx-auto px-1.5 py-1.5 md:px-16 flex items-center justify-between">
        <div className="nav-items w-full flex justify-between items-center z-50">
          <img
            src={Logo}
            className="flex-none max-h-6 md:max-h-full cursor-pointer px-2"
            alt="moriba-logo"
            onClick={scrollToTop}
          />
          <Hamburger size={28} toggled={isOpen} toggle={setOpen} />
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-0 pt-20 w-full h-screen bg-white flex flex-col font-semibold text-2xl space-y-4 px-4 transition duration-500 ease-in-out text-gray-900`}
        >
          <hr className="w-full bg-gray-500" />
          <Link
            activeClass="active"
            to="feauture"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="active:text-red-900 cursor-pointer hover:text-indigo-900"
          >
            Feauture
          </Link>
          <Link
            activeClass="active"
            to="system"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="active:text-red-900 cursor-pointer hover:text-indigo-900"
          >
            About Us
          </Link>
          <Link
            activeClass="active"
            to="board"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="active:text-red-900 cursor-pointer hover:text-indigo-900"
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
            className="active:text-red-900 cursor-pointer hover:text-indigo-900"
          >
            Application
          </Link>
        </div>
        {/* <div className="yeah">
          <button className="bg-transparent py-2 px-8 rounded-lg text-gray-900 font-medium mr-2">
            Sign Up
          </button>
          <button className="bg-red-500 py-2 px-8 rounded-lg text-white font-normal hover:bg-red-600">
            Sign In
          </button>
        </div> */}
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
