import React from "react";
import { Link } from "react-router-dom";
// import { MenuIcon } from "../../../node_modules/@heroicons/react/outline";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* //?? code for desktop view of navbar  */}
        <div className="hidden md:flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-black font-bold text-xl">
              Logo
            </Link>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Link
              to="/"
              className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
        {/* //??? code for mobile view of */}
        // code for mobile view of navbar
        <div className="md:hidden flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="#" className="text-black font-bold text-xl">
              Logo
            </Link>
          </div>

          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {/* <span className="sr-only">
                {isOpen ? "Close menu" : "Open menu"}
              </span> */}
              {/* {isOpen ? (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )} */}
            </button>
          </div>

          {isOpen ? (
            <div className="md:hidden flex flex-col items-start justify-start h-screen bg-gray-800 w-full absolute top-0 left-0 z-50">
              <Link
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
