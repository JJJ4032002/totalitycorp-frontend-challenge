import React from "react";
import AppleCardInfo from "./Components/AppleCardInfo/AppleCardInfo";
import "./Footer.css";
import Options from "./Components/Options/Options";
import CopyRight from "./Components/CopyRight/CopyRight";
function Footer() {
  return (
    <footer className="FooterWrapper">
      <AppleCardInfo></AppleCardInfo>
      <div className="footerDivider"></div>
      <Options></Options>
      <CopyRight></CopyRight>
    </footer>
  );
}

export default Footer;
