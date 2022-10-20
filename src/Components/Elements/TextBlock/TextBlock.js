import React from "react";
import "./TextBlock.css";
function TextBlock({ theme, heading, tagline, availability }) {
  return (
    <div className={`textContent ${theme}`}>
      {heading}
      {tagline}
      <p className="availability">{availability}</p>
      <div className="Links">
        <a className="Link" href="">
          Learn more
        </a>
        <a className="Link" href="">
          Order now
        </a>
      </div>
    </div>
  );
}

export default TextBlock;
