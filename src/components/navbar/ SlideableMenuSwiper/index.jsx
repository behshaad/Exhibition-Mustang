import React, { useContext } from "react";

// import { MenuContext } from "react-flexible-sliding-menu";

// import "./styles/SideMenu.css";

function SideMenu() {
  const { closeMenu } = useContext(MenuContext);

  return (
    <div className="Menu">
      <nav onClick={closeMenu}>
        <ul className="navlinks-container">
          <hr />
          <li>
            <a className="navlink" href="/components/pages/home">
              Homes
            </a>
          </li>
          <hr />
          <li>
            <a className="navlink" href="/components/pages/Services">
              Services
            </a>
          </li>
          <hr />
          <li>
            <a className="navlink" href="/components/pages/Contact">
              Contact Us
            </a>
          </li>
          <hr />
          <li>
            <a className="navlink" href="/components/pages/Salon">
              Salon Information
            </a>
          </li>
          <hr />
          <li>
            <a className="navlink" href="/components/pages/About">
              About
            </a>
          </li>
          <hr />
          <li>
            <a className="navlink" href="/components/pages/Products">
              Products
            </a>
          </li>
          <hr />
        </ul>
      </nav>
    </div>
  );
}

export default SideMenu;
