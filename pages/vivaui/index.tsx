import React, { useEffect, useState, useRef } from "react";
import type { NextPage } from "next";
import styles from "./viva.module.css";
import Nav from "../../component/Nav";
import Head from "next/head";
import Image from "next/image";

import { Grid, Typography, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";
import { Controller, Scene } from "react-scrollmagic";
import InnerContainer from "../../component/vivaui/InnerContainer";
import { style } from "@mui/system";

const theme: Theme = createTheme({
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

const useStyles = (theme: Theme) => ({
  containerNav: {
    padding: "10px 240px",
    fontSize: "16px",
    maxWidth: "1920px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xl")]: {
      padding: "10px 240px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "10px 120px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "10px 60px",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "12px 24px",
    },
  },

  frameGroup: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "60px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "32px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "32px",
    },
  },

  reactNativeUiFrameworkParent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "32px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "16px",
    },
  },

  reactNativeUiContainer: {
    fontSize: "56px",
    lineHeight: "68px",
    fontWeight: "600",
    textAlign: "start",
    [theme.breakpoints.down("xl")]: {
      fontSize: "44px",
      lineHeight: "58px",
      fontWeight: "600",
      textAlign: "start",
    },
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      fontSize: "44px",
      lineHeight: "58px",
      fontWeight: "600",
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
      lineHeight: "40px",
      fontWeight: "600",
      textAlign: "center",
    },
  },
  reactNativeUiContainer2: {
    fontSize: "42px",
    lineHeight: "51px",
    fontWeight: "600",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "694px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
      lineHeight: "44px",
      fontWeight: "600",
      textAlign: "center",
      width: "67.773438vw",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
      lineHeight: "40px",
      fontWeight: "600",
      textAlign: "center",
      // width: "345px",
      width: "87.78626vw",
    },
  },

  vivaUi16: {
    fontSize: "88px",
    lineHeight: "80px",
    fontWeight: "700",
    textAlign: "start",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      fontSize: "78px",
      lineHeight: "70px",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "44px",
      lineHeight: "44px",
      fontWeight: "700",
      textAlign: "center",
    },
  },

  aReactNative: {
    fontSize: "20px",
    lineHeight: "32px",
    fontWeight: "400",
    width: "700px",
    textAlign: "start",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      width: "34.722222vw",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      lineHeight: "32px",
      fontWeight: "400",
      width: "63.964844vw",
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: "400",
      width: "81.424936vw",
      textAlign: "center",
    },
  },

  getInTouch: {
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: "700",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: "600",
    },
  },

  frameParentDiv: {
    padding: "284px 240px",
    gap: "95px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      padding: "120px 150px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "0",
    },
  },

  frameParent: {
    position: "absolute",
    maxWidth: "1920px",
    gap: "80px",
    padding: "284px 240px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      padding: "240px 120px",
      // width: "100vw",
    },
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      gap: "40px",
      padding: "300px 60px 180px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // width: "100vw",
    },
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      gap: "40px",
      padding: "285px 24px 120px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  frameDiv: {
    position: "relative",
    width: "30vw",
    height: "1000px",
    left: "340px",
    opacity: "1",
    padding: "0",
    top: "0",
    [theme.breakpoints.down("xl")]: {
      position: "relative",
      width: "35.9375vw",
      height: "100%",
      left: "370px",
      opacity: "1",
      padding: "0",
      top: "0",
    },
    [theme.breakpoints.down("lg")]: {
      position: "relative",
      width: "45vw",
      height: "880px",
      opacity: "1",
      padding: "0",
      left: "270px",
      top: "0",
    },
    [theme.breakpoints.down("md")]: {
      position: "relative",
      width: "100vw",
      height: "880px",
      left: "0",
      opacity: "0.3",
      padding: "0 10px",
      top: "0px",
    },
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      width: "100vw",
      height: "730px",
      opacity: "0.3",
      left: "0",
      padding: "0 10px",
      top: "0",
    },
  },

  frameParent1: {
    width: "690px",
    height: "1048px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      width: "383px",
      height: "1000px",
    },
  },

  groupContainer: {
    width: "auto",
    height: "100%",
    padding: "0 240px",
    gap: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      padding: "0 120px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 60px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 24px",
    },
  },

  vivaUiInner: {
    padding: "0 240px 0 206.75px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      padding: "0 120px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 60px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 24px",
    },
  },

  quicklyTurnYourDreamServicParent: {
    padding: "180px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "60px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      padding: "180px 0",
    },
    [theme.breakpoints.down("md")]: {
      padding: "180px 0",
    },
    [theme.breakpoints.down("sm")]: {
      // padding: "0 24px",
    },
  },

  getInTouchContainer: {
    width: "207px",
    height: "62px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    lineHeight: "32px",
    fontWeight: "500",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      width: "209px",
      height: "48px",
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: "600",
    },
  },

  vectorGroupParent: {
    width: "75vw",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      width: "83.333333vw",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },

  groupDiv: {
    width: "75vw",
    height: "708px",
    [theme.breakpoints.down("xl")]: {
      height: "36.875vw",
    },
    [theme.breakpoints.down("lg")]: {
      width: "83.333333vw",
      height: "40.972222vw",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },

  vectorGroup: {
    width: "41.25vw",
    height: "24.583333vw",
    [theme.breakpoints.down("xl")]: {
      width: "41.25vw",
      height: "24.583333vw",
    },
    [theme.breakpoints.down("lg")]: {
      width: "45.138889vw",
      height: "27.777778vw",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },

  vectorParent: {
    width: "41.25vw",
    // height: "24.583333vw",
    [theme.breakpoints.down("xl")]: {
      width: "41.25vw",
      height: "24.583333vw",
    },
    [theme.breakpoints.down("lg")]: {
      width: "45.138889vw",
      height: "27.777778vw",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },

  rectangleParent1: {
    position: "relative",
    width: "48.75vw",
    height: "23.697917vw",
    // top: "-25px",
    [theme.breakpoints.down("xl")]: {
      width: "48.75vw",
      height: "23.697917vw",
    },
    [theme.breakpoints.down("lg")]: {
      width: "55vw",
      height: "23.697917vw",
      // top: "-18px",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },

  groupChild3: {
    width: "25.416667vw",
    // height: "6.927083vw",
    [theme.breakpoints.down("xl")]: {
      width: "25.416667vw",
      height: "6.927083vw",
    },
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },

  groupChild1: {
    // width: "27.408854vw",
    // height: "19.359896vw",
    [theme.breakpoints.down("xl")]: {
      // width: "27.408854vw",
      // height: "19.359896vw",
    },
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },

  rectangleContainer: {
    width: "27.408854vw",
    height: "17vw",
    backgroundColor: "#ff6b00",
    transform: "rotate(8.1deg)",
    borderRadius: "60px",
    position: "relative",
    left: "10px",
    top: "40px",
    maxWidth: "526.25px",
    maxHeight: "327px",
    [theme.breakpoints.down("xl")]: {
      width: "27.408854vw",
      height: "17vw",
    },
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },

  buildFasterWithContainer: {
    position: "relative",
    fontSize: "54px",
    lineHeight: "66px",
    fontWeight: "900",
    top: "91px",
    left: "64px",
    [theme.breakpoints.down("xl")]: {
      fontSize: "2.8125vw",
      top: "4.739583vw",
      left: "3.333333vw",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "2.638889vw",
      lineHeight: "54px",
      fontWeight: "700",
      position: "relative",
      top: "4.513889vw",
      left: "4.444444vw",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },

  maskGroupIcon1: {
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      fontSize: "2.638889vw",
      lineHeight: "54px",
      fontWeight: "700",
      position: "relative",
      top: "65px",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },

  allTheServiceContainer: {
    fontSize: "42px",
    fontWeight: "700",
    width: "606px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      fontSize: "2.5vw",
      fontWeight: "700",
      width: "42.083333vw",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },

  bringYourEnvisioned: {
    fontSize: "18px",
    lineHeight: "32px",
    fontWeight: "500",
    width: "439px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.25vw",
      fontWeight: "500",
      width: "30.486111vw",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },

  multiOsSupport: {
    fontSize: "42px",
    fontWeight: "700",
    width: "418.7px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      fontSize: "2.5vw",
      fontWeight: "700",
      width: "29.076389vw",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },

  oneSourceTo: {
    fontSize: "18px",
    lineHeight: "32px",
    fontWeight: "500",
    width: "493px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.25vw",
      fontWeight: "500",
      width: "34.236111vw",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },

  wellStructuredDesignContainer: {
    fontSize: "42px",
    fontWeight: "700",
    width: "418.7px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      fontSize: "2.5vw",
      fontWeight: "700",
      width: "29.076389vw",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },

  designSystemBasedModulesContainer: {
    fontSize: "18px",
    lineHeight: "32px",
    fontWeight: "500",
    width: "438px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.25vw",
      fontWeight: "500",
      width: "30.416667vw",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },

  eastToImplementParent: {
    position: "absolute",
    gap: "40px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      gap: "1.944444vw",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },

  multiOsSupportParent: {
    position: "absolute",
    gap: "40px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      gap: "1.944444vw",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },

  eastToImplement: {
    fontSize: "42px",
    fontWeight: "700",
    width: "418.7px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      fontSize: "2.5vw",
      fontWeight: "700",
      width: "29.076389vw",
      gap: "1.944444vw",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },

  theFrameworkIs: {
    fontSize: "18px",
    lineHeight: "32px",
    fontWeight: "500",
    width: "438px",
    [theme.breakpoints.down("xl")]: {
      width: "22.8125vw",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.25vw",
      fontWeight: "500",
      width: "27.777778vw",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },

  footer: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },

  layer1Parent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "80px 240px",
    gap: "40px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      padding: "80px 120px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "80px 60px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      padding: "80px 24px",
    },
  },

  wondermoveSpinOffOfHyundaiParent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "24px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
    },
  },
  footerC: {
    position: "relative",
    top: "120px",
    marginBottom: "120px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      top: "0",
      marginBottom: "0",
    },
  },
});

const VIVAUI: NextPage = () => {
  const classes = useStyles(theme);
  const [navModalVisible, setNavModalVisible] = useState(false);
  const [isMdallScreen, setIsMdallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMdallScreen(window.innerWidth <= 1024);
    }

    handleResize(); // Check on initial render

    window.addEventListener("resize", handleResize); // Add event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up on component unmount
    };
  }, []);

  const onGetInTouchClick = () =>
    window.open(
      "mailto:wondermove@wondermove.net?subject=Quickly%20turn%20your%20dream%20service%20into%20a%20reality%20with%20VIVA%20UI&body=[Your%20infomation]%0A———————————%0A>%20Country%3A%0A>%20Company%20name%3A%0A>%20Your%20Name%3A%0A———————————%0A%0AWhat%20can%20we%20help%20you%3F"
    );

  return (
    <>
      <Head>
        <title>VIVA UI React Native UI Framework | wondermove</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta property="og:title" content="VIVA UI" />
        <meta
          property="og:description"
          content="VIVA UI React Native UI Framework"
        ></meta>
        <meta property="og:image" content="/viva/vivaOgimage.png"></meta>
        <link rel="icon" href="/viva/viva_favicon.ico" type="image/x-icon" />
      </Head>
      <div className={styles.vivaUi}>
        <div className={styles.gnb}>
          <Grid container sx={classes.containerNav}>
            <Nav />
          </Grid>
        </div>

        {/* <div className={styles.frameParentDiv}>
          <Grid container sx={classes.frameParentDiv}> */}
        <div className={styles.frameParent}>
          <Grid container sx={classes.frameParent}>
            <div className={styles.frameGroup}>
              <Grid container sx={classes.frameGroup}>
                <div className={styles.reactNativeUiFrameworkParent}>
                  <Grid container sx={classes.reactNativeUiFrameworkParent}>
                    <div className={styles.reactNativeUiContainer}>
                      <Grid container sx={classes.reactNativeUiContainer}>
                        <p className={styles.reactNative}>
                          React Native <br /> UI Framework
                        </p>
                      </Grid>
                    </div>
                    <b className={styles.vivaUi16}>
                      <Grid container sx={classes.vivaUi16}>
                        VIVA UI 1.6
                      </Grid>
                    </b>
                  </Grid>
                </div>
                <div className={styles.aReactNative}>
                  <Grid container sx={classes.aReactNative}>
                    A React Native UI framework for creating flawless
                    cross-platform mobile applications.
                  </Grid>
                </div>
              </Grid>
            </div>
            <div
              className={styles.getInTouchWrapper}
              onClick={onGetInTouchClick}
              style={{ cursor: "pointer" }}
            >
              <b className={styles.getInTouch}>
                <Grid container sx={classes.getInTouch}>
                  Get in touch
                </Grid>
              </b>
            </div>
          </Grid>
        </div>
        {/* </Grid>
        </div> */}
        <div className={styles.frameDiv}>
          <Grid container sx={classes.frameDiv}>
            <Image
              className={styles.groupChild5}
              alt=""
              src="/viva/bigMainImage.png"
              width={800}
              height={100}
            />
            {/* <img
              className={styles.groupChild5}
              alt=""
              src="/viva/bigMainImage.png"
            /> */}
          </Grid>
        </div>

        {isMdallScreen ? (
          <InnerContainer />
        ) : (
          <div className={styles.groupContainer}>
            <Grid container sx={classes.groupContainer}>
              <div className={styles.groupDiv}>
                <Grid container sx={classes.groupDiv}>
                  <Image
                    className={styles.groupIcon}
                    alt=""
                    src="/viva/group-4358@2x.png"
                    width={800}
                    height={100}
                  />
                  {/* <img
                    className={styles.groupIcon}
                    alt=""
                    src="/viva/group-4358@2x.png"
                  /> */}
                  <div className={styles.allTheServiceModulesForYoParent}>
                    <div className={styles.allTheServiceContainer}>
                      <Grid container sx={classes.allTheServiceContainer}>
                        <b>
                          {`All the service modules for your business are ready `}{" "}
                          <i className={styles.i}>!</i>
                        </b>
                      </Grid>
                    </div>
                    <div className={styles.bringYourEnvisioned}>
                      <Grid container sx={classes.bringYourEnvisioned}>
                        Bring your envisioned business to life by combining
                        service modules.
                      </Grid>
                    </div>
                  </div>
                </Grid>
              </div>

              <div className={styles.vectorGroupParent}>
                <Grid container sx={classes.vectorGroupParent}>
                  <div className={styles.vectorGroup}>
                    <Grid container sx={classes.vectorGroup}>
                      <Image
                        className={styles.groupChild4}
                        alt=""
                        src="/viva/appleA.png"
                        width={800}
                        height={900}
                      />
                      {/* <img
                        className={styles.groupChild4}
                        alt=""
                        src="/viva/appleA.png"
                      /> */}
                      <div className={styles.frameWrapper}>
                        <div className={styles.multiOsSupportParent}>
                          <Grid container sx={classes.multiOsSupportParent}>
                            <b className={styles.multiOsSupport}>
                              <Grid container sx={classes.multiOsSupport}>
                                Multi-OS support
                              </Grid>
                            </b>
                            <div className={styles.oneSourceTo}>
                              <Grid container sx={classes.oneSourceTo}>
                                One source to support iOS, AOS. Easily deploy
                                services up to date, reducing resources for
                                operations.
                              </Grid>
                            </div>
                          </Grid>
                        </div>
                      </div>
                    </Grid>
                  </div>
                  <div className={styles.vectorParent}>
                    <Grid container sx={classes.vectorParent}>
                      <Image
                        className={styles.rectangleIcon}
                        alt=""
                        src="/viva/A.png"
                        width={800}
                        height={400}
                      />
                      {/* <img
                        className={styles.rectangleIcon}
                        alt=""
                        src="/viva/A.png"
                      /> */}
                      <div className={styles.maskGroup}>
                        <div className={styles.frameContainer}>
                          <div className={styles.lineParent}>
                            <div className={styles.frameChild} />
                            <div className={styles.frameChild} />
                            <div className={styles.frameChild} />
                            <div className={styles.frameChild} />
                            <div className={styles.frameChild} />
                            <div className={styles.frameChild} />
                            <div className={styles.frameChild} />
                            <div className={styles.frameChild} />
                            <div className={styles.frameChild} />
                            <div className={styles.frameChild} />
                            <div className={styles.frameChild} />
                            <div className={styles.frameChild} />
                            <div className={styles.frameChild} />
                            <div className={styles.frameChild} />
                          </div>
                          <div className={styles.lineGroup}>
                            <div className={styles.frameChild} />
                            <div className={styles.frameChild} />
                            <div className={styles.frameChild} />
                            <div className={styles.frameChild} />
                            <div className={styles.frameChild} />
                            <div className={styles.frameChild} />
                            <div className={styles.frameChild} />
                            <div className={styles.frameChild} />
                            <div className={styles.frameChild} />
                            <div className={styles.frameChild} />
                            <div className={styles.frameChild} />
                            <div className={styles.frameChild} />
                          </div>
                        </div>
                      </div>

                      <div className={styles.wellStructuredDesignSysteParent}>
                        <div className={styles.multiOsSupportParent}>
                          <Grid container sx={classes.multiOsSupportParent}>
                            <b className={styles.wellStructuredDesignContainer}>
                              <Grid
                                container
                                sx={classes.wellStructuredDesignContainer}
                              >
                                <p
                                  className={styles.wellStructured}
                                >{`Well-structured `}</p>
                                <p
                                  className={styles.reactNative}
                                >{`  design system`}</p>
                              </Grid>
                            </b>
                            <div
                              className={
                                styles.designSystemBasedModulesContainer
                              }
                            >
                              <Grid
                                container
                                sx={classes.designSystemBasedModulesContainer}
                              >
                                <p
                                  className={styles.reactNative}
                                >{`Design system-based modules `}</p>
                                <p
                                  className={styles.reactNative}
                                >{`    make customization easy to match`}</p>
                                <p className={styles.reactNative}>
                                  {" "}
                                  {`      your brand style.`}
                                </p>
                              </Grid>
                            </div>
                          </Grid>
                        </div>
                      </div>
                    </Grid>
                  </div>
                </Grid>
              </div>

              <div className={styles.rectangleParentDiv}>
                <div className={styles.rectangleParent1}>
                  <Grid container sx={classes.rectangleParent1}>
                    {/* <Grid container sx={classes.maskGroupIcon1}> */}
                    <Image
                      className={styles.maskGroupIcon1}
                      alt=""
                      src="/viva/mask-group1.svg"
                      width={800}
                      height={100}
                    />
                    {/* <img
                      className={styles.maskGroupIcon1}
                      alt=""
                      src="/viva/mask-group1.svg"
                    /> */}
                    {/* </Grid> */}
                    <div className={styles.eastToImplementParent}>
                      <Grid container sx={classes.eastToImplement}>
                        <b className={styles.eastToImplement}>
                          <Grid container sx={classes.eastToImplement}>
                            East to implement
                          </Grid>
                        </b>
                        <div className={styles.theFrameworkIs}>
                          <Grid container sx={classes.theFrameworkIs}>
                            The framework is delivered on a
                            component-by-component basis, allowing you to
                            quickly build services by mixing and matching the
                            features you want.
                          </Grid>
                        </div>
                      </Grid>
                    </div>
                  </Grid>
                </div>
                <div className={styles.rectangleContainerDiv}>
                  <div className={styles.groupChild3}>
                    <Grid container sx={classes.groupChild3}>
                      <Image
                        className={styles.groupChild31}
                        alt=""
                        src="/viva/group-4364.svg"
                        width={800}
                        height={100}
                      />
                      {/* <img
                        className={styles.groupChild31}
                        alt=""
                        src="/viva/group-4364.svg"
                      /> */}
                    </Grid>
                  </div>
                  <div className={styles.rectangleContainer}>
                    <Grid container sx={classes.rectangleContainer}>
                      <Grid container sx={classes.groupChild1}>
                        <div className={styles.groupChild1} />
                      </Grid>
                      <div className={styles.buildFasterWithContainer}>
                        <Grid container sx={classes.buildFasterWithContainer}>
                          <p className={styles.reactNative}>Build faster</p>
                          <p className={styles.reactNative}>with VIVA UI</p>
                        </Grid>
                      </div>
                    </Grid>
                  </div>
                </div>
              </div>
            </Grid>
          </div>
        )}
        {/*  */}

        {/*  */}
        <Grid container sx={classes.footerC}>
          <div className={styles.vivaUiInner}>
            <Grid container sx={classes.vivaUiInner}>
              <div className={styles.quicklyTurnYourDreamServicParent}>
                <Grid container sx={classes.quicklyTurnYourDreamServicParent}>
                  <div className={styles.reactNativeUiContainer}>
                    <Grid container sx={classes.reactNativeUiContainer2}>
                      <p className={styles.quicklyTurnYour}>
                        Quickly turn your dream service into a reality with VIVA
                        UI
                      </p>
                    </Grid>
                  </div>
                  <div
                    className={styles.getInTouchContainer}
                    onClick={onGetInTouchClick}
                    style={{ cursor: "pointer" }}
                  >
                    <Grid container sx={classes.getInTouchContainer}>
                      <div className={styles.getInTouch1}>Get in touch</div>
                    </Grid>
                  </div>
                </Grid>
              </div>
            </Grid>
          </div>

          <div className={styles.footer}>
            <Grid container sx={classes.footer}>
              <div className={styles.layer1Parent}>
                <Grid container sx={classes.layer1Parent}>
                  <a
                    href="https://wondermove.net/intro/"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    <Image
                      className={styles.layer1Icon}
                      alt=""
                      src="/viva/layer-1.svg"
                      width={800}
                      height={100}
                    />
                  </a>
                  {/* <img
                    className={styles.layer1Icon}
                    alt=""
                    src="/viva/layer-1.svg"
                  /> */}
                  <div className={styles.wondermoveSpinOffOfHyundaiParent}>
                    <Grid
                      container
                      sx={classes.wondermoveSpinOffOfHyundaiParent}
                    >
                      <div className={styles.wondermoveSpinOffOf}>
                        wondermove Spin-off of Hyundai Motor Company
                      </div>
                      <div className={styles.wondermoveIncBusinessContainer}>
                        <p className={styles.reactNative}>wondermove Inc.</p>
                        <p className={styles.reactNative}>
                          Business Registration Number: 518-81-01644
                        </p>
                        <p className={styles.reactNative}>
                          Address: 2F, 104, Nonhyeon-ro 27-gil, Seocho-gu,
                          Seoul, Republic of Korea
                        </p>
                        <p className={styles.reactNative}>
                          Use Inquiries: hawkeye@wondermove.net
                        </p>
                      </div>
                    </Grid>
                  </div>
                </Grid>
              </div>
            </Grid>
          </div>
        </Grid>
      </div>
    </>
  );
};

export default VIVAUI;
