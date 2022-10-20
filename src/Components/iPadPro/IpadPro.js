import React from "react";
import "./IpadPro.css";
import TextBlock from "../Elements/TextBlock/TextBlock";
import Banner from "../Elements/Banner/Banner";
import TextWrapper from "../Elements/TextWrapper/TextWrapper";
import M2 from "../../assets/Images/M2Logo.png";
function IpadPro() {
  return (
    <Banner Product="IpadPro">
      <TextWrapper Product="IpadProText">
        <TextBlock
          theme="dark"
          heading={<h1 className="Heading">iPad Pro</h1>}
          tagline={
            <div className="tagLineBlock">
              <p className="tagline">Supercharged by</p>
              <img src={M2} alt="M2 Logo" />
            </div>
          }
          availability="Available starting 10.26"
        ></TextBlock>
      </TextWrapper>
    </Banner>
  );
}

export default IpadPro;
