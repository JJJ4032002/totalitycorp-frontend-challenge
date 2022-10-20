import React from "react";
import "./Ipad.css";
import Banner from "../Elements/Banner/Banner";
import TextBlock from "../Elements/TextBlock/TextBlock";
import TextWrapper from "../Elements/TextWrapper/TextWrapper";

function Ipad() {
  return (
    <Banner Product="Ipad">
      <TextWrapper Product="IpadText">
        <TextBlock
          theme="light"
          heading={<h1 className="Heading">iPad</h1>}
          tagline={<p className="tagline">Lovable.Drawable.Magical</p>}
          availability="Available starting 10.26"
        ></TextBlock>
      </TextWrapper>
    </Banner>
  );
}

export default Ipad;
