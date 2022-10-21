import React from "react";
import AppleCardInfo from "./Components/AppleCardInfo/AppleCardInfo";
import "./Footer.css";
import Options from "./Components/Options/Options";
function Footer() {
  return (
    <footer className="FooterWrapper">
      <AppleCardInfo></AppleCardInfo>
      <div className="footerDivider"></div>
      <Options></Options>
    </footer>
  );
}

export default Footer;
