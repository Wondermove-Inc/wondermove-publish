import React, { useState, useEffect } from "react";
import styles from "../../pages/vivaui/mobile.module.css";
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

  buildFasterWithContainer: {
    position: "relative",
    left: "29.296875vw",
    fontSize: "3.515625vw",
    fontWeight: "900",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      fontSize: "3.515625vw",
      fontWeight: "900",
    },
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      left: "7.63358vw",
      fontSize: "36px",
      fontWeight: "900",
    },
  },
  maskGroupIcon2: {
    height: "900px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      height: "620px",
    },
  },

  rectangleGroup: {
    height: "1200px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      height: "850px",
    },
  },
  rectangleContainer: {
    position: "relative",
    top: "920px",
    left: "4.882812vw",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      top: "641px",
      //   left: "15.72vw",
    },
  },

  wellStructuredDesignSystemContainer: {
    fontSize: "56px",
    lineHeight: "68px",
    fontWeight: "600",
    textAlign: "start",
    width: "58.59375vw",
    [theme.breakpoints.down("xl")]: {
      fontSize: "44px",
      lineHeight: "58px",
    },
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      lineHeight: "40px",
      fontWeight: "600",
    },
    [theme.breakpoints.down("sm")]: {
      width: "76.335878vw",
    },
  },

  oneSourceTo: {
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: "500",
    width: "58.59375vw",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: "400",
      width: "76.335878vw",
    },
  },

  wellStructuredDesignSystemContainer1: {
    fontSize: "56px",
    lineHeight: "68px",
    fontWeight: "600",
    textAlign: "start",
    width: "58.59375vw",
    [theme.breakpoints.down("xl")]: {
      fontSize: "44px",
      lineHeight: "58px",
    },
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      fontSize: "44px",
      lineHeight: "58px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
      lineHeight: "40px",
      fontWeight: "600",
      width: "76.335878vw",
    },
  },

  oneSourceTo1: {
    fontSize: "18px",
    lineHeight: "32px",
    fontWeight: "500",
    width: "58.59375vw",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: "400",
      width: "76.335878vw",
    },
  },
  multiOsSupportParent: {
    gap: "32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      gap: "24px",
    },
  },

  eastToImplementParent: {
    position: "relative",
    bottom: "300px",
    left: "28px",
    gap: "32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      gap: "24px",
      bottom: "240px",
    },
  },

  vectorGroup: {
    width: "88.28125vw",
    height: "97.65625vw",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      width: "87.78626vw",
      height: "134.096692vw",
    },
  },

  vectorParent: {
    position: "relative",
    width: "88.28125vw",
    height: "97.65625vw",
    top: "-14.648438vw",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      width: "87.78626vw",
      height: "134.096692vw",
      top: "-20.356234vw",
    },
  },
  vectorParentChild: {
    position: "relative",
    top: "-14.648438vw",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      top: "-20.356234vw",
    },
  },
});
const classes = useStyles(theme);

const InnerContainer = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 600);
    }

    handleResize(); // Check on initial render

    window.addEventListener("resize", handleResize); // Add event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up on component unmount
    };
  }, []);
  return (
    <div className={styles.groupContainer}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild1} />
        {isSmallScreen ? (
          <img
            className={styles.maskGroupIcon1}
            alt=""
            src="/viva/vivaMobile/mask-group1@2x.png"
          />
        ) : (
          <img
            className={styles.maskGroupIcon1}
            alt=""
            src="/viva/group-4358@2x.png"
          />
        )}

        <div className={styles.multiOsSupportParent}>
          <Grid container sx={classes.multiOsSupportParent}>
            <div className={styles.allTheServiceContainer}>
              <Grid container sx={classes.wellStructuredDesignSystemContainer}>
                <b>
                  {`All the service modules for your business are ready `}{" "}
                  <i className={styles.i}>!</i>
                </b>
              </Grid>
            </div>
            <div className={styles.oneSourceTo}>
              <Grid container sx={classes.oneSourceTo}>
                Bring your envisioned business to life by combining service
                modules.
              </Grid>
            </div>
          </Grid>
        </div>
      </div>

      <div className={styles.vectorGroup}>
        <Grid container sx={classes.vectorGroup}>
          <img
            className={styles.groupItem}
            alt=""
            src="/viva/vivaMobile/appleA.png"
          />
          <div className={styles.multiOsSupportParent}>
            <Grid container sx={classes.multiOsSupportParent}>
              <b className={styles.wellStructuredDesignSystemContainer}>
                <Grid
                  container
                  sx={classes.wellStructuredDesignSystemContainer1}
                >
                  Multi-OS support
                </Grid>
              </b>
              <div className={styles.oneSourceTo}>
                <Grid container sx={classes.oneSourceTo1}>
                  One source to support iOS, AOS. Easily deploy services up to
                  date, reducing resources for operations.
                </Grid>
              </div>
            </Grid>
          </div>
        </Grid>
      </div>
      <div className={styles.vectorParent}>
        <Grid container sx={classes.vectorParent}>
          <img
            className={styles.groupChild}
            alt=""
            src="/viva/vivaMobile/A.png"
          />

          <div className={styles.wellStructuredDesignSystemParent}>
            <Grid container sx={classes.multiOsSupportParent}>
              <b className={styles.wellStructuredDesignSystemContainer}>
                <Grid
                  container
                  sx={classes.wellStructuredDesignSystemContainer1}
                >
                  <p className={styles.reactNative}>{`Well-structured `}</p>
                  <p className={styles.reactNative}>design system</p>
                </Grid>
              </b>
              <div className={styles.designSystemBasedModulesContainer}>
                <p className={styles.reactNative}>
                  <Grid container sx={classes.oneSourceTo1}>
                    Design system-based modules make customization easy to match
                    your brand style.
                  </Grid>
                </p>
              </div>
            </Grid>
          </div>
        </Grid>
      </div>
      <div>
        <Grid container sx={classes.vectorParentChild}>
          <img
            className={styles.groupIcon}
            alt=""
            src="/viva/vivaMobile/group-4364.svg"
          />
        </Grid>
      </div>

      <div className={styles.rectangleGroup}>
        <Grid container sx={classes.vectorParentChild}>
          <Grid container sx={classes.rectangleGroup}>
            {/* <div className={styles.groupChild2} /> */}

            <Grid container sx={classes.maskGroupIcon2}>
              <img
                className={styles.maskGroupIcon2}
                alt=""
                src="/viva/vivaMobile/east.png"
              />
            </Grid>
            <div className={styles.eastToImplementParent}>
              <Grid container sx={classes.eastToImplementParent}>
                <b className={styles.wellStructuredDesignSystemContainer}>
                  <Grid
                    container
                    sx={classes.wellStructuredDesignSystemContainer1}
                  >
                    East to implement
                  </Grid>
                </b>
                <div className={styles.oneSourceTo}>
                  <p className={styles.reactNative}>
                    <Grid container sx={classes.oneSourceTo1}>
                      The framework is delivered on a component-by-component
                      basis, allowing you to quickly build services by mixing
                      and matching the features you want.
                    </Grid>
                  </p>
                </div>
              </Grid>
            </div>
            <div className={styles.rectangleContainer}>
              <Grid container sx={classes.rectangleContainer}>
                <div className={styles.groupChild3} />
                <div className={styles.buildFasterWithContainer}>
                  <Grid container sx={classes.buildFasterWithContainer}>
                    <p className={styles.reactNative}>Build faster</p>
                    <p className={styles.reactNative}>with VIVA UI</p>
                  </Grid>
                </div>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default InnerContainer;
