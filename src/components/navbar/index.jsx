import React from "react";
import { Link } from "react-router-dom";
import {  AiOutlineMenu } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

import { useState } from "react";
import Languagec from "./ln";


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
