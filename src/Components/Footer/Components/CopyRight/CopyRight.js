import React from "react";
import "./CopyRight.css";
import { CopyRightList } from "../../../../data";
import useWindowSize from "../../../../hooks/useWindowSize";
function CopyRight() {
  let size = useWindowSize();
  return (
    <>
      {size.width < 768 ? (
        <div className="CopyRightWrapper">
          <p>
            More ways to shop:{" "}
            <span className="HighLighted">Find an Apple Store</span> or{" "}
            <span className="HighLighted">other retailer</span> near you. Or
            call 1-800-MY-APPLE.
          </p>
          <p>United States</p>
          <div className="CopyRightContainer">
            <p>Copyright © 2022 Apple Inc. All rights reserved.</p>
            <div className="CopyRightListContainer">
              {CopyRightList.map((element, index) => {
                if (index === CopyRightList.length - 1) {
                  return (
                    <div key={element} className="CopyRightListBlock">
                      <p>{element}</p>
                    </div>
                  );
                } else {
                  return (
                    <div key={element} className="CopyRightListBlock">
                      <p>{element}</p>
                      <div className="VerticalDivider"></div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="CopyRightWrapper">
          <p>
            More ways to shop:{" "}
            <span className="HighLighted">Find an Apple Store</span> or{" "}
            <span className="HighLighted">other retailer</span> near you. Or
            call 1-800-MY-APPLE.
          </p>
          <div className="divider"></div>
          <div className="CopyRightContainer">
            <p>Copyright © 2022 Apple Inc. All rights reserved.</p>
            <div className="CopyRightListContainer">
              {CopyRightList.map((element, index) => {
                if (index === CopyRightList.length - 1) {
                  return (
                    <div key={element} className="CopyRightListBlock">
                      <p>{element}</p>
                    </div>
                  );
                } else {
                  return (
                    <div key={element} className="CopyRightListBlock">
                      <p>{element}</p>
                      <div className="VerticalDivider"></div>
                    </div>
                  );
                }
              })}
            </div>
            <p>United States</p>
          </div>
        </div>
      )}
    </>
  );
}

export default CopyRight;
