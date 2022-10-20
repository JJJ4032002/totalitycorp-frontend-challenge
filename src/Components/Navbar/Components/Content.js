import React from "react";
import "./Content.css";
import search from "../../../assets/SVG/Search.svg";
import LinksList from "../../../data";
function Content() {
  return (
    <div className="wrapper">
      <div className="searchInput">
        <img src={search} alt="Search icon" />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search apple.com"
        />
      </div>
      <div className="divider"></div>
      <div className="options">
        {LinksList.map((element, index) => {
          if (index === LinksList.length - 1) {
            return (
              <div key={element} className="Block">
                <p>{element}</p>
              </div>
            );
          } else {
            return (
              <div key={element} className="Block">
                <p>{element}</p>
                <div className="divider"></div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Content;
