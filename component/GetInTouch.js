import React, { useState } from "react";
import SendMessage from "./SendMessage";
import styles from "../pages/S-kuber/styles.module.css";

import { Grid, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 601,
      md: 1025,
      lg: 1441,
      xl: 1921,
    },
  },
});

const useStyles = (theme) => ({
  getInTouch: {
    fontSize: "16px",
    lineHeight: "32px",
    fontWeight: "500",
    padding: "16px 106px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "24px",
      padding: "16px 128.5px",
    },
  },
});
const classes = useStyles(theme);

const GetInTouch = ({
  onClick,
  sendModalVisible,
  toggleSuccessModalVisible,
  successModalVisible,
  toggleSendModalVisible,
}) => {
  // const [showPopup, setShowPopup] = useState(false);

  // const handleButtonClick = () => {
  //   setShowPopup(true);
  // };
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getStartedClassName = isHovered
    ? styles.getStartedWrapperActive
    : styles.getStartedWrapper;

  return (
    <div className={styles.getStarted}>
      <div
        className={getStartedClassName}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.pricing} style={{ cursor: "pointer" }}>
          <Grid container sx={classes.getInTouch}>
            Get in touch
          </Grid>
        </div>
      </div>

      {/* {sendModalVisible && (
        <SendMessage
          onCloseOff={onCloseOff}
          toggleSuccessModalVisible={toggleSuccessModalVisible}
          successModalVisible={successModalVisible}
          toggleSendModalVisible={toggleSendModalVisible}
        />
      )} */}
    </div>
  );
};

export default GetInTouch;
