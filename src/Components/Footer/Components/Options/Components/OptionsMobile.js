import React from "react";
import { OptionsList } from "../../../../../data";
import Plus from "../../../../../assets/SVG/Plus.svg";
import close from "../../../../../assets/SVG/close.svg";
function OptionsMobile({ handleShowOptions, SelectedOption }) {
  return (
    <>
      {OptionsList.map((element) => {
        return (
          <div key={element.Heading} className="OptionsBlock">
            <div onClick={handleShowOptions} className="OptionsHeader">
              <p>{element.Heading}</p>
              <div className="ShowMoreContainer">
                <img
                  className="ShowMore"
                  src={element.Heading === SelectedOption ? close : Plus}
                  alt="Show more"
                />
              </div>
            </div>
            {element.Heading === SelectedOption ? (
              <ul className="OptionListWrapper">
                {element.options.map((element) => {
                  return (
                    <li className="OptionItem" key={element}>
                      {element}
                    </li>
                  );
                })}
              </ul>
            ) : (
              ""
            )}

            <div className="footerDivider"></div>
          </div>
        );
      })}
    </>
  );
}

export default OptionsMobile;
