import React from "react";
import appleLogo from "../assets/SVG/appleLogo.svg";
import store from "../assets/SVG/store.svg";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <div className="hamburgerMenu">
        <div className="lines top"></div>
        <div className="lines last"></div>
      </div>
      <a href="#nav">
        <img src={appleLogo} alt="Apple Logo" />
      </a>
      <a href="#nav">
        <img src={store} alt="Store" />
      </a>
    </nav>
  );
}

export default Navbar;
