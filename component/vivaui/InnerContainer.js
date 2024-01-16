import React, { useState, useEffect } from "react";
import styles from "../../pages/VIVAUI/mobile.module.css";
import { Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useTranslation } from "react-i18next";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n/index";

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
    fontSize: "20px",
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
    height: "100%",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      height: "620px",
    },
  },

  rectangleGroup: {
    height: "146.484375vw",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      height: "850px",
    },
  },
  rectangleContainer: {
    position: "relative",
    top: "148.4375vw",
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
      fontSize: "44px",
      lineHeight: "50px",
      fontWeight: "600",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
      lineHeight: "40px",
      width: "76.335878vw",
    },
  },

  oneSourceTo: {
    fontSize: "20px",
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
    gap: "40px",
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
    gap: "40px",
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
    height: "100%",
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
    height: "134.765625vw",
    top: "-20.5vw",
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
    top: "-20.5vw",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      top: "-20.356234vw",
    },
  },

  rectangleParent: {
    width: "88.28125vw",
    height: "158.59375vw",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      width: "87.78626vw",
      height: "157.760814vw",
    },
  },

  maskGroupIcon1: {
    height: "158.59375vw",
    background: "#1975ff",
    borderRadius: "80px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      height: "157.760814vw",

      borderRadius: "40px",
    },
  },

  groupChild1: {
    borderRadius: "80px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      borderRadius: "30px",
    },
  },
});
const classes = useStyles(theme);

const InnerContainer = () => {
  const { t } = useTranslation();
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
    <I18nextProvider i18n={i18n}>
      <div className={styles.groupContainer}>
        <div className={styles.rectangleParent}>
          <Grid container sx={classes.rectangleParent}>
            {/* <Grid container sx={classes.groupChild1}>
            <div className={styles.groupChild1} />
          </Grid> */}

            <Grid container sx={classes.maskGroupIcon1}>
              <img
                className={styles.maskGroupIcon1}
                alt="mobile VIVA Main Image"
                src="/viva/vivaMobile/mask-group1@2x.png"
              />
            </Grid>
            <div className={styles.multiOsSupportParent}>
              <Grid container sx={classes.multiOsSupportParent}>
                <div className={styles.allTheServiceContainer}>
                  <Grid
                    container
                    sx={classes.wellStructuredDesignSystemContainer}
                  >
                    <b>
                      {t("vivaui.service-slogen")}
                      <i className={styles.i}>!</i>
                    </b>
                  </Grid>
                </div>
                <div className={styles.oneSourceTo}>
                  <Grid container sx={classes.oneSourceTo}>
                    {t("vivaui.service-description")}
                  </Grid>
                </div>
              </Grid>
            </div>
          </Grid>
        </div>

        <div className={styles.vectorGroup}>
          <Grid container sx={classes.vectorGroup}>
            <img
              className={styles.groupItem}
              alt="mobile apple and Andro"
              src="/viva/vivaMobile/appleAn.png"
            />
            <div className={styles.multiOsSupportParent}>
              <Grid container sx={classes.multiOsSupportParent}>
                <b className={styles.wellStructuredDesignSystemContainer}>
                  <Grid
                    container
                    sx={classes.wellStructuredDesignSystemContainer1}
                  >
                    {t("vivaui.support-title")}
                  </Grid>
                </b>
                <div className={styles.oneSourceTo}>
                  <Grid container sx={classes.oneSourceTo1}>
                    {t("vivaui.support-description")}
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
              alt="mobile Letter A"
              src="/viva/vivaMobile/An.png"
            />

            <div className={styles.wellStructuredDesignSystemParent}>
              <Grid container sx={classes.multiOsSupportParent}>
                <b className={styles.wellStructuredDesignSystemContainer}>
                  <Grid
                    container
                    sx={classes.wellStructuredDesignSystemContainer1}
                  >
                    <p className={styles.reactNative}>
                      {t("vivaui.design-title-one")}
                    </p>
                    <p className={styles.reactNative}>
                      {t("vivaui.design-title-two")}
                    </p>
                  </Grid>
                </b>
                <div className={styles.designSystemBasedModulesContainer}>
                  <p className={styles.reactNative}>
                    <Grid container sx={classes.oneSourceTo1}>
                      {t("vivaui.design-description-mobile")}
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
              alt="mobile viva image"
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
                  alt="mobile east to implement"
                  src="/viva/vivaMobile/end.png"
                />
              </Grid>
              <div className={styles.eastToImplementParent}>
                <Grid container sx={classes.eastToImplementParent}>
                  <b className={styles.wellStructuredDesignSystemContainer}>
                    <Grid
                      container
                      sx={classes.wellStructuredDesignSystemContainer1}
                    >
                      {t("vivaui.implement-title")}
                    </Grid>
                  </b>
                  <div className={styles.oneSourceTo}>
                    <p className={styles.reactNative}>
                      <Grid container sx={classes.oneSourceTo1}>
                        {t("vivaui.implement-description")}
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
                      <p className={styles.reactNative}>
                        {t("vivaui.build-faster-title")}
                      </p>
                      <p className={styles.reactNative}>
                        {" "}
                        {t("vivaui.with-vivaui")}
                      </p>
                    </Grid>
                  </div>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </I18nextProvider>
  );
};

export default InnerContainer;
