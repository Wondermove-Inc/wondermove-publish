import { useState } from "react";
import styles from "../pages/1920_desktop/styles.module.css";

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
  frameParent2: {
    borderRadius: "20px",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
    gap: "24px",
    fontSize: "0.24px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      boxSizing: "border-box",
      alignItems: "center",
      justifyContent: "center",
    },
  },
});
const classes = useStyles(theme);

function AdvantageHover() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseOver1 = () => {
    setIsHovered1(true);
  };

  const handleMouseOut1 = () => {
    setIsHovered1(false);
  };

  const handleMouseOver2 = () => {
    console.log("on hover");
    setIsHovered2(true);
  };

  const handleMouseOut2 = () => {
    setIsHovered2(false);
  };

  const handleMouseOver3 = () => {
    setIsHovered3(true);
  };

  const handleMouseOut3 = () => {
    setIsHovered3(false);
  };
  return (
    <Grid container sx={classes.frameParent2}>
      {/* <div className={styles.frameParent2}> */}
      <div
        className={isHovered1 ? styles.frameParent3 : styles.frameParent4}
        onMouseEnter={handleMouseOver1}
        onMouseLeave={handleMouseOut1}
      >
        {isHovered1 ? (
          <img src="/1920_desktop/hover-on-1-100.png" alt="Hover Image" />
        ) : (
          <img src="/1920_desktop/hover-off-1-100.png" alt="Default Image" />
        )}
        <div className={styles.wonderAboutCuttingContainer}>
          <p className={styles.wonderAbout}>Reduction in</p>
          <p className={styles.wonderAbout}>resource costs</p>
        </div>
        <div className={styles.byTransitioningFromContainer}>
          <p className={styles.solutionForYour}>
            S-Kuber service can leverage eBPF to protect against unnecessary
            traffic and DoS attacks to avoid additional costs.
          </p>
          <p className={styles.solutionForYour}>&nbsp;</p>
        </div>
      </div>

      <div
        className={isHovered2 ? styles.frameParent3 : styles.frameParent4}
        onMouseOver={handleMouseOver2}
        onMouseOut={handleMouseOut2}
      >
        {isHovered2 ? (
          <img src="/1920_desktop/hover-on-2-100.png" alt="Hover Image" />
        ) : (
          <img src="/1920_desktop/hover-off-2-100.svg" alt="Default Image" />
        )}
        <div className={styles.wonderAboutCuttingContainer}>
          <p className={styles.wonderAbout}>Accessible management for</p>
          <p className={styles.wonderAbout}>all technology levels</p>
        </div>
        <div className={styles.byTransitioningFromContainer}>
          Utilize a high-level control UX that can be managed without DevOps
          expertise, while also providing low-level access for DevOps engineers
          to monitor and respond to service failures in real time.
        </div>
      </div>

      <div
        className={isHovered3 ? styles.frameParent3 : styles.frameParent4}
        onMouseOver={handleMouseOver3}
        onMouseOut={handleMouseOut3}
      >
        {isHovered3 ? (
          <img src="/1920_desktop/hover-on-3-100.png" alt="Hover Image" />
        ) : (
          <img src="/1920_desktop/hover-off-3-100.png" alt="Default Image" />
        )}
        <div className={styles.wonderAboutCuttingContainer}>
          <p className={styles.wonderAbout}>Transition to the latest</p>
          <p className={styles.wonderAbout}>cloud technology</p>
        </div>
        <div className={styles.byTransitioningFromContainer}>
          <p className={styles.solutionForYour}>
            By transitioning from virtual machines to Kubernetes, you can reduce
            cloud costs by more than 40% while improving efficiency.
          </p>
          <p className={styles.solutionForYour}>&nbsp;</p>
          <p className={styles.solutionForYour}>{` `}</p>
        </div>
      </div>
      {/* </div> */}
    </Grid>
  );
}

export default AdvantageHover;
