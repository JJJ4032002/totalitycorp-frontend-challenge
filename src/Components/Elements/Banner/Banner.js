import React from "react";
import "./Banner.css";
function Banner({ Product, children }) {
  return <div className={`bannerWrapper ${Product}`}>{children}</div>;
}

export default Banner;
