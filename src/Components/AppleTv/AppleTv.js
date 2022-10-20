import React from "react";
import "./AppleTv.css";
import Banner from "../Elements/Banner/Banner";
import TextWrapper from "../Elements/TextWrapper/TextWrapper";
import TextBlock from "../Elements/TextBlock/TextBlock";
import AppleTVLogo from "../../assets/Images/AppleTVLogo.png";
import useWindowSize from "../../hooks/useWindowSize";
function AppleTv() {
  let size = useWindowSize();
  return (
    <Banner Product="AppleTv">
      <TextWrapper Product="AppleTvText">
        {size.width < 768 ? (
          <TextBlock
            theme="light"
            heading={
              <div>
                <img src={AppleTVLogo} alt="Apple TV Logo" />
              </div>
            }
            tagline={
              <div className="taglineBlock column">
                <p className="tagline">The Apple experience.</p>
                <p className="tagline">Cinematic in every sense.</p>
              </div>
            }
            availability="Available starting 11.4"
          ></TextBlock>
        ) : (
          <TextBlock
            theme="light"
            heading={
              <div>
                <img src={AppleTVLogo} alt="Apple TV Logo" />
              </div>
            }
            tagline={
              <p className="tagline">
                The Apple experience. Cinematic in every sense.
              </p>
            }
            availability="Available starting 11.4"
          ></TextBlock>
        )}
      </TextWrapper>
    </Banner>
  );
}

export default AppleTv;
