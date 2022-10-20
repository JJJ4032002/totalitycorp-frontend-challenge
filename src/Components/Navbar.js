import React, { useState } from "react";
import appleLogo from "../assets/SVG/appleLogo.svg";
import store from "../assets/SVG/store.svg";
import "./Navbar.css";
function Navbar() {
  const [hamBurgerMenu, setHamBurgerMenu] = useState("");
  function handleClick() {
    if (hamBurgerMenu === "close" || !(hamBurgerMenu === "open")) {
      setHamBurgerMenu("open");
    } else {
      setHamBurgerMenu("close");
    }
  }
  function handleAnimationEnd() {
    if (hamBurgerMenu === "close") {
      setHamBurgerMenu("");
    }
  }
  return (
    <nav>
      <div
        onClick={handleClick}
        onAnimationEnd={handleAnimationEnd}
        className={`hamburgerMenu ${hamBurgerMenu}`}
      >
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
