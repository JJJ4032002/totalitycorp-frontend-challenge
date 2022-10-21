import React from "react";
import "./Gallery.css";
import TextWrapper from "../Elements/TextWrapper/TextWrapper";
import TextBlock from "../Elements/TextBlock/TextBlock";
import { GalleryList } from "../../data";
function Gallery() {
  return (
    <div className="grid">
      {GalleryList.map((element) => {
        return (
          <div key={element.Product} className={`product ${element.Product}`}>
            <TextWrapper Product="Gallery">
              <TextBlock
                theme={element.theme}
                heading={element.heading}
                tagline={<p className="tagline">{element.tagline}</p>}
              ></TextBlock>
            </TextWrapper>
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
