import React, { useState } from "react";
import { ImageList, SmallScreenImageList } from "../../data";
import "./Carousel.css";
import useWindowSize from "../../hooks/useWindowSize";
import AppleTvPlusLogo from "../../assets/SmallScreenImages/SmallCarousel/Logos/AppleTvPlusLogo.png";
function Carousel() {
  let size = useWindowSize();
  let [currentTarget, setCurrentTarget] = useState(0);
  return (
    <>
      {size.width < 786 ? (
        <>
          <div className="Carousel">
            {SmallScreenImageList.map((element, index) => {
              return (
                <div className="SmallImageContainer" key={element.name}>
                  <img
                    key={element.name}
                    id={element.name}
                    src={element.img}
                    className="SmallImages"
                  ></img>
                  <div className="Info">
                    <div className="InfoHeader">
                      <img
                        className="InfoHeaderImage"
                        src={AppleTvPlusLogo}
                        alt="Apple Tv Plus Logo"
                      />
                    </div>
                    <div className="ShowName">
                      <img
                        className="NameLogoImage"
                        src={element.nameLogo}
                        alt={element.name}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="Buttons">
            {SmallScreenImageList.map((element, index) => {
              if (index === currentTarget) {
                return (
                  <a
                    onClick={() => {
                      setCurrentTarget(index);
                    }}
                    key={element.name}
                    href={`#${element.name}`}
                  >
                    <div className="button colored"></div>
                  </a>
                );
              } else {
                return (
                  <a
                    onClick={() => {
                      setCurrentTarget(index);
                    }}
                    key={element.name}
                    href={`#${element.name}`}
                  >
                    <div className="button"></div>
                  </a>
                );
              }
            })}
          </div>
        </>
      ) : (
        <>
          <div className="Carousel">
            {ImageList.map((element, index) => {
              return (
                <div key={element.name} className="LargeImageContainer">
                  <img
                    key={element.name}
                    id={element.name}
                    src={element.img}
                    className="LargeImage"
                  ></img>
                </div>
              );
            })}
          </div>
          <div className="Buttons">
            {ImageList.map((element, index) => {
              if (index === currentTarget) {
                return (
                  <a
                    onClick={() => {
                      setCurrentTarget(index);
                    }}
                    key={element.name}
                    href={`#${element.name}`}
                  >
                    <div className="button colored"></div>
                  </a>
                );
              } else {
                return (
                  <a
                    onClick={() => {
                      setCurrentTarget(index);
                    }}
                    key={element.name}
                    href={`#${element.name}`}
                  >
                    <div className="button"></div>
                  </a>
                );
              }
            })}
          </div>
        </>
      )}
    </>
  );
}

export default Carousel;
