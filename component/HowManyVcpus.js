import React from "react";
import ReactSlider from "react-slider";

const HowManyVcpus = () => {
  return (
    <ReactSlider
      className="customSlider"
      thumbClassName="customSlider-thumb"
      trackClassName="customSlider-track"
      markClassName="customSlider-mark"
      marks={20}
      min={2}
      max={96}
    />
  );
};
export default HowManyVcpus;
