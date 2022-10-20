import React from "react";
import "./TextWrapper.css";
function TextWrapper({ children, Product }) {
  return <div className={`textWrapper ${Product}`}>{children}</div>;
}

export default TextWrapper;
