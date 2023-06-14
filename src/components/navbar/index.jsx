import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

import { useState } from "react";
import Languagec from "./ln";
  
import "./nav.css"

import { useTranslation } from "react-i18next";
import Home from "../../page/Home";
import { GiScarecrow } from "react-icons/gi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  return (
    <nav className="bg-gray-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* //?? code for desktop view of navbar  */}
        <div className="hidden md:flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-black font-bold text-xl">
              {/* Logo */}
              <GiScarecrow size={44} />
            </Link>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <BiWorld />
            <Languagec />

            <label class="switch">
              <span class="sun">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g fill="#ffd43b">
                    <circle r="5" cy="12" cx="12"></circle>
                    <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                  </g>
                </svg>
              </span>
              <span class="moon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                </svg>
              </span>
              <input type="checkbox" class="input" />
              <span class="slider"></span>
            </label>
            <Link
              to="/contact"
              className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {t("Contact")}
            </Link>
            <Link
              to="/contact"
              className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {t("happyman")}
            </Link>
            <Link
              to="/about"
              className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {t("About")}
            </Link>
            <Link
              to="/Nested"
              className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {t("Nested")}
            </Link>
            <Link
              to="/"
              className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {t("Home")}
            </Link>
          </div>
        </div>
        {/* //??? code for mobile view of */}

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
              className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">
                {isOpen ? "Close menu" : "Open menu"}
              </span>
              {isOpen ? (
                <FaHamburger
                  className="bg-red-900 block h-6 w-6"
                  aria-hidden="true"
                />
              ) : (
                <AiOutlineMenu className="block h-6 w-6" aria-hidden="true" />
              )}
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
