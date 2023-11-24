import { useEffect, useState } from "react";

import styles from "../pages/Skuber/styles.module.css";

import { Grid } from "@mui/material";
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
  companyContainer: {
    justifyContent: "space-between",
    gap: "500px",
    width: "100%",
    [theme.breakpoints.down("xl")]: {
      gap: "5vw",
    },
    [theme.breakpoints.down("lg")]: {
      gap: "3vw",
    },
    [theme.breakpoints.down("md")]: {
      //   gap: "9.570312vw",
      justifyContent: "center",
      gap: "50px",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "50px",
      justifyContent: "space-around",
      width: "100%",
    },
  },
  containerGloballyValidated: {
    padding: "160px 12.5vw",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xl")]: {
      padding: "160px 12.5vw",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "160px 120px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "120px 60px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "80px 24px",
    },
  },
  globallyValidatedSolutions: {
    lineHeight: "51px",
    fontSize: "42px",
    fontWeight: "600",
    textAlign: "center",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
      lineHeight: "40px",
    },
  },
  wonderAbout1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    justifyContent: "space-between",
    padding: "80px 80px",
    gap: "70px",
    [theme.breakpoints.down("xl")]: {
      padding: "80px 80px",
      gap: "70px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "80px 60px",
      gap: "50px",
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      textAlign: "center",
      padding: " 60px 40px",
      gap: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      textAlign: "center",
      padding: " 24px",
      gap: "32px",
    },
  },
  wonderAbout: {
    marginBlockStart: "0",
    marginBlockEnd: "0",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "29px",
    textAlign: "center",
    [theme.breakpoints.down("xl")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "auto",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      flex: "1",
      textAlign: "center",
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      flex: "1",
      textAlign: "center",
      justifyContent: "center",
    },
  },
  image646Icon: {
    position: "relative",
    // width: "9.114583vw",
    // height: "2.604167vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "175px",
    height: "50px",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      width: "106px",
      // height: "29px",
      marginRight: "0",
    },
  },
  icon: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "260px",
    height: "36px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      width: "106px",
      height: "29px",
      marginLeft: "0",
    },
  },
});
const classes = useStyles(theme);

function GloballyValidated() {
  const [isXlallScreen, setIsXlallScreen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsXlallScreen(window.innerWidth > 1440);
    }

    handleResize(); // Check on initial render

    window.addEventListener("resize", handleResize); // Add event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up on component unmount
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.containerGloballyValidated}>
      <Grid container sx={classes.containerGloballyValidated}>
        <div className={styles.groupDiv}>
          <div className={styles.frameWrapper2}>
            <div className={styles.globallyValidatedSolutionsParent}>
              <div className={styles.globallyValidatedSolutions}>
                <Grid container sx={classes.globallyValidatedSolutions}>
                  Globally validated solutions
                </Grid>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.rectangleDiv} />

                <div className={styles.runningASuccessfulProofOfParent}>
                  <Grid container sx={classes.wonderAbout1}>
                    <div className={styles.vcpuRunning}>
                      <Grid container sx={classes.wonderAbout}>
                        <div>
                          Running a successful proof of concept in 4 European
                          countries with
                        </div>
                      </Grid>
                    </div>
                    <div
                      className={
                        isDesktop
                          ? styles.companyContainerMoreThenLg
                          : styles.companyContainer
                      }
                    >
                      <Grid container sx={classes.companyContainer}>
                        <div className={styles.icon}>
                          <Grid container sx={classes.container}>
                            <Grid container sx={classes.icon}>
                              <img
                                className={styles.iconC}
                                alt=""
                                src="/1920_desktop/--2.svg"
                              />
                            </Grid>
                          </Grid>
                        </div>
                        <div className={styles.image646Icon}>
                          <Grid container sx={classes.container}>
                            <Grid container sx={classes.image646Icon}>
                              <img
                                className={styles.image646IconC}
                                alt=""
                                src="/1920_desktop/auto.png"
                              />
                            </Grid>
                          </Grid>
                        </div>
                      </Grid>
                    </div>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
}

export default GloballyValidated;
