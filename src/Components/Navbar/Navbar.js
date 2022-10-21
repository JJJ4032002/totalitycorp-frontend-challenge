import React, { useState } from "react";
import appleLogo from "../../assets/SVG/appleLogo.svg";
import store from "../../assets/SVG/store.svg";
import "./Navbar.css";
import Content from "./Components/Content";
import useWindowSize from "../../hooks/useWindowSize";
import { LinksList } from "../../data";
function Navbar() {
  let size = useWindowSize();
  console.log(size);
  const [hamBurgerMenu, setHamBurgerMenu] = useState("");
  const [mountSmallScreenNavBar, setMountSmallScreenNavBar] = useState(false);
  function handleClick() {
    if (hamBurgerMenu === "close" || !(hamBurgerMenu === "open")) {
      setHamBurgerMenu("open");
      setMountSmallScreenNavBar(true);
    } else {
      setHamBurgerMenu("close");
    }
  }
  function handleAnimationEnd() {
    if (hamBurgerMenu === "close") {
      setHamBurgerMenu("");
      setMountSmallScreenNavBar(false);
    }
  }
  return (
    <>
      {size.width < 836 ? (
        <>
          <nav className={`${hamBurgerMenu}`}>
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
            <a className={`store ${hamBurgerMenu}`} href="#nav">
              <img src={store} alt="Store" />
            </a>
          </nav>
          {mountSmallScreenNavBar ? (
            <div className="smallScreenSizeNavbar">
              <div className={`navbarBody ${hamBurgerMenu}`}>
                <Content></Content>
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        <nav>
          <div className="desktopLinksBlock">
            <a href="#nav">
              <img src={appleLogo} alt="Apple Logo" />
            </a>
            {LinksList.map((element) => {
              return (
                <a key={element} className="NavLinks" href="#nav">
                  {element}
                </a>
              );
            })}
            <a className={`store`} href="#nav">
              <img src={store} alt="Store" />
            </a>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
