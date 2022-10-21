import React from "react";
import { DesktopOptionList } from "../../../../../data";
function OptionsDesktop() {
  return (
    <>
      {DesktopOptionList.map((Section) => {
        return (
          <div key={Section.Section} className="Section">
            {Section.OptionLists.map((OptionBlock) => {
              return (
                <div key={OptionBlock.Heading} className="DesktopOptionsBlock">
                  <p>{OptionBlock.Heading}</p>
                  <ul className="OptionListWrapper Desktop">
                    {OptionBlock.options.map((element) => {
                      return (
                        <li key={element} className="">
                          {element}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default OptionsDesktop;
