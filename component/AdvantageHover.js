import { useEffect, useState } from "react";
import styles from "../pages/Skuber/styles.module.css";

import { Grid, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n/index";

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
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      gap: "16px",
    },
    [theme.breakpoints.down("md")]: {
      gap: "16px",
    },

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      boxSizing: "border-box",
      alignItems: "center",
      justifyContent: "center",
      gap: "80px",
    },
  },
  wonderAboutCuttingContainer: {
    fontSize: "24px",
    lineHeight: "29px",
    fontWeight: "600",
    height: "70px",
    whiteSpace: "per-line",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      lineHeight: "24px",
      height: "60px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      lineHeight: "24px",
      height: "56px",
    },
  },
  byTransitioningFromContainer: {
    fontSize: "16px",
    lineHeight: "32px",
    fontWeight: "500",
    height: "160px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      height: "224px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "24px",
      height: "0",
    },
  },
  frameParent3: {
    gap: "40px",
    padding: "40px",
    borderRadius: "20px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      padding: "40px 32px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "32px 16px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0",
      borderRadius: "0",
      gap: "24px",
    },
  },
});
const classes = useStyles(theme);

function AdvantageHover() {
  const { t } = useTranslation();
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
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
    <I18nextProvider i18n={i18n}>
      <div className={styles.frameParent2}>
        <Grid container sx={classes.frameParent2}>
          {isSmallScreen ? (
            <div
              className={styles.frameParent4}
              onMouseEnter={handleMouseOver1}
              onMouseLeave={handleMouseOut1}
            >
              <Grid container sx={classes.frameParent3}>
                <div className={styles.advantageImage}>
                  {isHovered1 ? (
                    <img
                      src="/1920_desktop/hover-on-1-100.png"
                      alt="Hover Image"
                    />
                  ) : (
                    <img
                      src="/1920_desktop/hover-off-1-100.png"
                      alt="Default Image"
                    />
                  )}
                </div>
                <div className={styles.wonderAboutCuttingContainer}>
                  <Grid container sx={classes.wonderAboutCuttingContainer}>
                    <div className={styles.wonderAbout}>
                      {t("skuber-page.advantage.reduction-costs.first-title")}{" "}
                      <br />
                      {t("skuber-page.advantage.reduction-costs.second-title")}
                    </div>
                  </Grid>
                </div>
                <div className={styles.byTransitioningFromContainer}>
                  <Grid container sx={classes.byTransitioningFromContainer}>
                    {t("skuber-page.advantage.reduction-costs.description")}
                  </Grid>
                </div>
              </Grid>
            </div>
          ) : (
            <div
              className={isHovered1 ? styles.frameParent3 : styles.frameParent4}
              onMouseEnter={handleMouseOver1}
              onMouseLeave={handleMouseOut1}
            >
              <Grid container sx={classes.frameParent3}>
                <div className={styles.advantageImage}>
                  {isHovered1 ? (
                    <img
                      src="/1920_desktop/hover-on-1-100.png"
                      alt="Hover Image"
                    />
                  ) : (
                    <img
                      src="/1920_desktop/hover-off-1-100.png"
                      alt="Default Image"
                    />
                  )}
                </div>
                <div className={styles.wonderAboutCuttingContainer}>
                  <Grid container sx={classes.wonderAboutCuttingContainer}>
                    <div className={styles.wonderAbout}>
                      {t("skuber-page.advantage.reduction-costs.first-title")}{" "}
                      <br />
                      {t("skuber-page.advantage.reduction-costs.second-title")}
                    </div>
                  </Grid>
                </div>
                <div className={styles.byTransitioningFromContainer}>
                  <Grid container sx={classes.byTransitioningFromContainer}>
                    {t("skuber-page.advantage.reduction-costs.description")}
                  </Grid>
                </div>
              </Grid>
            </div>
          )}

          {isSmallScreen ? (
            <div
              className={styles.frameParent4}
              onMouseOver={handleMouseOver2}
              onMouseOut={handleMouseOut2}
            >
              <Grid container sx={classes.frameParent3}>
                <div className={styles.advantageImage}>
                  {isHovered2 ? (
                    <img
                      src="/1920_desktop/hover-on-2-100.png"
                      alt="Hover Image"
                    />
                  ) : (
                    <img
                      src="/1920_desktop/hover-off-2-100.svg"
                      alt="Default Image"
                    />
                  )}
                </div>
                <div className={styles.wonderAboutCuttingContainer}>
                  <Grid container sx={classes.wonderAboutCuttingContainer}>
                    <div className={styles.wonderAbout}>
                      {t(
                        "skuber-page.advantage.accessible-management.first-title"
                      )}{" "}
                      <br />
                      {t(
                        "skuber-page.advantage.accessible-management.second-title"
                      )}
                    </div>
                  </Grid>
                </div>

                <div className={styles.byTransitioningFromContainer}>
                  <Grid container sx={classes.byTransitioningFromContainer}>
                    {t(
                      "skuber-page.advantage.accessible-management.description"
                    )}
                  </Grid>
                </div>
              </Grid>
            </div>
          ) : (
            <div
              className={isHovered2 ? styles.frameParent3 : styles.frameParent4}
              onMouseOver={handleMouseOver2}
              onMouseOut={handleMouseOut2}
            >
              <Grid container sx={classes.frameParent3}>
                <div className={styles.advantageImage}>
                  {isHovered2 ? (
                    <img
                      src="/1920_desktop/hover-on-2-100.png"
                      alt="Hover Image"
                    />
                  ) : (
                    <img
                      src="/1920_desktop/hover-off-2-100.svg"
                      alt="Default Image"
                    />
                  )}
                </div>
                <div className={styles.wonderAboutCuttingContainer}>
                  <Grid container sx={classes.wonderAboutCuttingContainer}>
                    <div className={styles.wonderAbout}>
                      {t(
                        "skuber-page.advantage.accessible-management.first-title"
                      )}{" "}
                      <br />
                      {t(
                        "skuber-page.advantage.accessible-management.second-title"
                      )}
                    </div>
                  </Grid>
                </div>

                <div className={styles.byTransitioningFromContainer}>
                  <Grid container sx={classes.byTransitioningFromContainer}>
                    {t(
                      "skuber-page.advantage.accessible-management.description"
                    )}
                  </Grid>
                </div>
              </Grid>
            </div>
          )}

          {isSmallScreen ? (
            <div
              className={styles.frameParent4}
              onMouseOver={handleMouseOver3}
              onMouseOut={handleMouseOut3}
            >
              <Grid container sx={classes.frameParent3}>
                <div className={styles.advantageImage}>
                  {isHovered3 ? (
                    <img
                      src="/1920_desktop/hover-on-3-100.png"
                      alt="Hover Image"
                    />
                  ) : (
                    <img
                      src="/1920_desktop/hover-off-3-100.png"
                      alt="Default Image"
                    />
                  )}
                </div>
                <div className={styles.wonderAboutCuttingContainer}>
                  <Grid container sx={classes.wonderAboutCuttingContainer}>
                    <div className={styles.wonderAbout}>
                      {t(
                        "skuber-page.advantage.transition-latest-technology.first-title"
                      )}{" "}
                      <br />
                      {t(
                        "skuber-page.advantage.transition-latest-technology.second-title"
                      )}
                    </div>
                  </Grid>
                </div>
                <div className={styles.byTransitioningFromContainer}>
                  <Grid container sx={classes.byTransitioningFromContainer}>
                    {t(
                      "skuber-page.advantage.transition-latest-technology.description"
                    )}
                  </Grid>
                </div>
              </Grid>
            </div>
          ) : (
            <div
              className={isHovered3 ? styles.frameParent3 : styles.frameParent4}
              onMouseOver={handleMouseOver3}
              onMouseOut={handleMouseOut3}
            >
              <Grid container sx={classes.frameParent3}>
                <div className={styles.advantageImage}>
                  {isHovered3 ? (
                    <img
                      src="/1920_desktop/hover-on-3-100.png"
                      alt="Hover Image"
                    />
                  ) : (
                    <img
                      src="/1920_desktop/hover-off-3-100.png"
                      alt="Default Image"
                    />
                  )}
                </div>
                <div className={styles.wonderAboutCuttingContainer}>
                  <Grid container sx={classes.wonderAboutCuttingContainer}>
                    <div className={styles.wonderAbout}>
                      {t(
                        "skuber-page.advantage.transition-latest-technology.first-title"
                      )}{" "}
                      <br />
                      {t(
                        "skuber-page.advantage.transition-latest-technology.second-title"
                      )}
                    </div>
                  </Grid>
                </div>
                <div className={styles.byTransitioningFromContainer}>
                  <Grid container sx={classes.byTransitioningFromContainer}>
                    {t(
                      "skuber-page.advantage.transition-latest-technology.description"
                    )}
                  </Grid>
                </div>
              </Grid>
            </div>
          )}
        </Grid>{" "}
      </div>
    </I18nextProvider>
  );
}

export default AdvantageHover;
