// import React, { useState } from 'react';
// import Sidebar from 'react-sidebar';

// const MySidebar = () => {
// const [sidebarOpen, setSidebarOpen] = useState(false);

// const onSetSidebarOpen = (open) => {
//   setSidebarOpen(open);
// };

//   return (
// <Sidebar
//   sidebar={<b>Sidebar content</b>}
//   open={sidebarOpen}
//   onSetOpen={onSetSidebarOpen}
//   styles={{ sidebar: { background: 'white' } }}
// >
//   <button onClick={() => onSetSidebarOpen(true)}>Open sidebar</button>
// </Sidebar>
//   );
// };

// export default MySidebar;

// ??????????????????????????????
import React from "react";
import { useState } from "react";
import Sidebar from "react-sidebar";

import { Link } from "react-router-dom";
import { HiArrowNarrowDown, HiArrowNarrowLeft } from "react-icons/hi";
const NavBar = () => {
  const [ishOpen, setIshOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
  };
  return (
    <div className="container  mx-auto ltr-grid">
      <nav className="flex gap-3 justify-end flex-wrap p-3 ">
        <div className="block lg:hidden">
          <button
            onClick={() => setIshOpen(!ishOpen)}
            type="button"
            className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            {!ishOpen ? <HiArrowNarrowDown /> : <HiArrowNarrowLeft />}
          </button>
        </div>
        {/* linka paine */}
        <div
          className="flex-grow lg:flex lg:items-center lg:w-auto md:hidden sm:hidden 
                    items-center justify-between hidden w-full  md:w-auto md:order-1
"
        >
          <div className="flex justify-end text-sm lg:flex-grow">
            <Link
              to="/news"
              className="ab block mt-4 lg:inline-block lg:mt-0 text-gray-800  mr-4"
            >
              اخبار{" "}
            </Link>
            <Link
              to="/Service"
              className="ab block mt-4 lg:inline-block lg:mt-0 text-gray-800  mr-4"
            >
              خدمات{" "}
            </Link>
            <Link
              to="/NewsAndBlogs"
              className="ab block mt-4 lg:inline-block lg:mt-0 text-gray-800  mr-4"
            >
              بلاگ{" "}
            </Link>

            <Link
              to="/About"
              className="ab block mt-4 lg:inline-block lg:mt-0 text-gray-800  mr-4"
            >
              درباره ما
            </Link>
            <Link
              to="/Contactus"
              className="ab block mt-4 lg:inline-block lg:mt-0 text-gray-800 "
            >
              ارتباط با ما
            </Link>
          </div>
        </div>
        {/* paini logo mikhore */}
        <div
          // className="flex items-center flex-shrink-0  mr-6"
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        >
          <span className="font-semibold text-xl tracking-tight">Avesta </span>
        </div>
        {/*  */}
      </nav>
      {ishOpen && (
        <div className="md:hidden bg-red-600" id="mobile-menu">
          <Sidebar
            sidebar={<b>Sidebar content</b>}
            open={sidebarOpen}
            onSetOpen={onSetSidebarOpen}
            styles={{ sidebar: { background: "white" } }}
          >
            <button onClick={() => onSetSidebarOpen(true)}>Open sidebar</button>
          </Sidebar>
        </div>
      )}
    </div>
  );
};

export default NavBar;
