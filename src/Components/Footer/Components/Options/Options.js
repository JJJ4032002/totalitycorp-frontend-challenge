import React, { useState } from "react";
import "./Options.css";
import OptionsMobile from "./Components/OptionsMobile";
import useWindowSize from "../../../../hooks/useWindowSize";
import OptionsDesktop from "./Components/OptionsDesktop";
function Options() {
  let size = useWindowSize();
  let [SelectedOption, setSelctedOption] = useState("");
  function handleShowOptions(e) {
    if (e.currentTarget.textContent === SelectedOption) {
      setSelctedOption("");
    } else {
      setSelctedOption(e.currentTarget.textContent);
    }
  }
  return (
    <div className="OptionsWrapper">
      {size.width < 768 ? (
        <OptionsMobile
          handleShowOptions={handleShowOptions}
          SelectedOption={SelectedOption}
        ></OptionsMobile>
      ) : (
        <OptionsDesktop></OptionsDesktop>
      )}
    </div>
  );
}

export default Options;
