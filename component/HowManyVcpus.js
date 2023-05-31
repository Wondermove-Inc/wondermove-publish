import React from "react";
import ReactSlider from "react-slider";
import styles from "../pages/index.module.css";
import styled from "@emotion/styled";

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 40px;
`;
const HowManyVcpus = () => {
  return (
    <StyledSlider
      className={styles.customSlider}
      thumbClassName={styles.customSlider_thumb}
      trackClassName={styles.customSlider_track}
      markClassName={styles.customSlider_mark}
      marks={12}
      min={0}
      max={100}
    />
  );
};
export default HowManyVcpus;
