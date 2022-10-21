import React from "react";
import { DesktopOptionList } from "../../../../../data";

function Section({ Section }) {
  return (
    <div key={Section.Section} className="Section">
      {Section.OptionLists.map((OptionBlockParam) => {
        return (
          <OptionBlock
            key={OptionBlockParam.Heading}
            OptionBlock={OptionBlockParam}
          ></OptionBlock>
        );
      })}
    </div>
  );
}
function OptionsDesktop() {
  return (
    <>
      {DesktopOptionList.map((SectionParam) => {
        return (
          <Section key={SectionParam.Section} Section={SectionParam}></Section>
        );
      })}
    </>
  );
}

function OptionBlock({ OptionBlock }) {
  return (
    <div key={OptionBlock.Heading} className="DesktopOptionsBlock">
      <p className="OptionsHeading">{OptionBlock.Heading}</p>
      <ul className="OptionListWrapper Desktop">
        {OptionBlock.options.map((element) => {
          return (
            <li key={element} className="DesktopOptionItem">
              {element}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default OptionsDesktop;
