import type { GetStaticProps, NextPage } from "next";
import { useState, useEffect, useRef } from "react";
import styles from "./p_log_desktop.module.css";
import Head from "next/head";
import Lottie from "lottie-react";
import lottie5 from "../../asset/plug/Comp 1.json";
import lottie6 from "../../asset/plug/Comp 2.json";
import lottie7 from "../../asset/plug/Comp 3.json";
import lottie8 from "../../asset/plug/Comp 4.json";
import lottie9 from "../../asset/plug/Comp 5.json";
import Nav from "../../component/Nav";
import Image from "next/image";

import { Grid, Typography, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";

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
  frameParent8: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  frameWrapper: {
    top: "2.135417vw",
    padding: "12.447917vw 46.875vw 150px 18.85167vw",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      padding: "150px 41.666667vw 100px 200px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "17.96875vw 11.376953vw 80px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "184px 24px 60px",
    },
  },

  frameParent9: {
    width: "100%",
    height: "100%",
    gap: "60px",
    flexDirection: "column",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      width: "70%",
      height: "100%",
      gap: "60px",
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "48px",
      width: "100%",
      height: "100%",
      flexDirection: "column",
    },
  },

  image803Parent: {
    gap: "40px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      gap: "32px",
    },
  },
  integratedMobilitySolutionContainer: {
    lineHeight: "80px",
    fontWeight: "600",
    fontSize: "56px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      lineHeight: "60px",
      fontSize: "48px",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      lineHeight: "44px",
      fontSize: "32px",
    },
  },
  weProvideFragmented1: {
    lineHeight: "32px",
    fontWeight: "500",
    fontSize: "18px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      lineHeight: "24px",
      fontWeight: "400",
      fontSize: "14px",
    },
  },
  getInTouchContainer: {
    fontWeight: "500",
    fontSize: "16px",
    padding: "20px 72px",
    width: "247px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      padding: "12px 60px",
      // width: "209px",
    },
  },
  getInTouch: {
    lineHeight: "20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      lineHeight: "24px",
    },
  },

  vectorParent: {
    position: "absolute",
    top: "10.364583vw",
    right: "50px",
    left: "47.916667vw",
    width: "954.64px",
    height: "902.53px",
    [theme.breakpoints.down("xl")]: {
      position: "absolute",
      top: "10.364583vw",
      right: "50px",
      left: "47.916667vw",
      width: "49.721354vw",
      height: "47.007292vw",
    },
    [theme.breakpoints.down("lg")]: {
      // top: "13vw",
      right: "0",
      left: "50vw",
      // top: "180px",
      top: "12.5vw",
      width: "49.721354vw",
      height: "47.007292vw",
    },
    [theme.breakpoints.down("md")]: {
      position: "relative",
      top: "0",
      right: "0",
      left: "29.296875vw",
      width: "69.359375vw",
      height: "60vw",
    },
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      top: "0",
      right: "0",
      left: "29.296875vw",
      width: "100vw",
      height: "149.872774vw",
    },
  },

  image820Icon: {
    position: "relative",
    // width: "49.721354vw",
    // height: "47.007292vw",
    width: "954.64px",
    height: "902.53px",
    display: "flex",
    flexWrap: "wrap",
    right: "0",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      width: "715px",
      height: "676px",
    },
    [theme.breakpoints.down("md")]: {
      width: "70vw",
      height: "65vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "107vw",
      height: "149.872774vw",
      // width: "80vw",
      // height: "98.166667vw",
      right: "20.356234vw",
      display: "flex",
      flexWrap: "inherit",
    },
  },

  // 4
  frameParent: {
    top: "0",
    padding: "240px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "240px",
    borderRadius: "60px",
    backgroundColor: "#fff",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      borderRadius: "40px",
      padding: "200px 0",
    },
    [theme.breakpoints.down("md")]: {
      padding: "120px 0",
      borderRadius: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      // top: "1400px",
      gap: "120px",
      padding: "80px 0",
      borderRadius: "20px",
    },
  },
  frameGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 12.5vw",
    gap: "1.25vw",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      padding: "0 8.333333vw",
      gap: "2.777778vw",
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "80px",
      padding: "0 6.10687vw",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "80px",
      padding: "0 6.10687vw",
    },
  },
  groupParent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px 1.25vw",
    gap: "60px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      padding: "60px 1.666667vw",
    },
    [theme.breakpoints.down("md")]: {},

    [theme.breakpoints.down("sm")]: {
      // padding: "",
      gap: "24px",
      padding: "0",
    },
  },
  quickEstablishmentAndPersonParent: {
    width: "21.666667vw",
    height: "13.802083vw",
    gap: "40px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      width: "21.666667vw",
      height: "100%",
      gap: "40px",
    },
    [theme.breakpoints.down("md")]: {
      width: "88.28125vw",
      height: "100%",
      gap: "40px",
    },

    [theme.breakpoints.down("sm")]: {
      width: "87.7862621vw",
      height: "100%",
      gap: "24px",
    },
  },

  groupIcon: {
    width: "21.666667vw",
    height: "13.802083vw",
    padding: "0",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      width: "55vw",
      height: "35vw",
    },

    [theme.breakpoints.down("sm")]: {
      width: "80.25641vw",
      height: "50.890585vw",
      padding: "0 24px",
    },
  },

  weLaunchedOurContainer: {
    lineHeight: "59px",
    fontWeight: "700",
    fontSize: "48px",
    width: "36.468333vw",
    // width: "690px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      lineHeight: "48px",
      fontWeight: "700",
      fontSize: "32px",
    },
    [theme.breakpoints.down("sm")]: {
      lineHeight: "40px",
      fontWeight: "700",
      fontSize: "28px",
      width: "345px",
    },
  },
  frameParent1: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "80px",
    left: "12.5vw",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      gap: "60px",
      position: "relative",
      left: "80px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      gap: "60px",
      position: "relative",
      left: "24px",
    },
  },

  weLaunchedOurServiceIn10Parent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "40px",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      gap: "24px",
    },
  },

  configureAPortfolioContainerDiv: {
    lineHeight: "32px",
    fontWeight: "500",
    fontSize: "16px",
    width: "39.0625vw",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      lineHeight: "28px",
      fontWeight: "400",
      fontSize: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      lineHeight: "24px",
      fontWeight: "400",
      fontSize: "14px",
      width: "345px",
    },
  },

  configureAPortfolioContainer: {
    lineHeight: "32px",
    fontWeight: "500",
    fontSize: "16px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      lineHeight: "24px",
      fontWeight: "400",
      fontSize: "14px",
      width: "345px",
    },
  },
  frameParent2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "120px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      gap: "60px",
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      gap: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      gap: "40px",
    },
  },

  k: {
    lineHeight: "73px",
    fontWeight: "700",
    fontSize: "36px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      lineHeight: "44px",
      fontWeight: "700",
      fontSize: "36px",
    },
  },
  se: {
    lineHeight: "59px",
    fontWeight: "700",
    fontSize: "48px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      lineHeight: "40px",
      fontWeight: "700",
      fontSize: "28px",
      width: "200px",
      textAlign: "center",
    },
  },
  frameIcon1: {
    width: "44.0625vw",
    height: "44.010417vw",
    position: "relative",
    overflow: "hidden",
    right: "0",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      width: "44.0625vw",
      height: "44.010417vw",
      top: "6.944444vw",
    },
    [theme.breakpoints.down("md")]: {
      width: "80vw",
      height: "80vw",
      right: "28vw",
      top: "0",
    },
    [theme.breakpoints.down("sm")]: {
      width: "102.035623vw",
      height: "102.035623vw",
      right: "40vw",
      top: "108vw",
    },
  },

  weProvideFragmentedContainer: {
    lineHeight: "32px",
    fontWeight: "500",
    fontSize: "18px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      lineHeight: "28px",
      fontWeight: "500",
      fontSize: "16px",
      textAlign: "center",
    },
  },

  frameParent3: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "80px",
    padding: "0 12.5vw",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      padding: "0 8.333333vw",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 7.8125vw",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 6.10687vw",
      gap: "40px",
    },
  },

  plugV: {
    width: "75vw",
    height: "41.666667vw",
    position: "relative",
    overflow: "hidden",
    borderRadius: "40px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      width: "83.333333vw",
      height: "46.25vw",
    },
    [theme.breakpoints.down("md")]: {
      width: "84.375vw",
      height: "47vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "87.78626vw",
      height: "48.854962vw",
      borderRadius: "20px",
      // width: "353px",
      // height: "192px",
    },
  },

  frameParent4: {
    gap: "320px",
    padding: "0 12.5vw",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      gap: "200px",
      padding: "0 8.333333vw",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 7.8125vw",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 6.10687vw",
      gap: "40px",
    },
  },

  frameParent5: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "75vw",
    // gap: "146px",
    [theme.breakpoints.down("xl")]: {
      width: "75vw",
    },
    [theme.breakpoints.down("lg")]: {
      width: "83.333333vw",
    },
    [theme.breakpoints.down("md")]: {
      width: "84.375vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "87.78626vw",
    },
  },

  frameChild2: {
    width: "36.875vw",
    height: "36.875vw",
    [theme.breakpoints.down("xl")]: {
      width: "36.875vw",
      height: "36.875vw",
    },
    [theme.breakpoints.down("lg")]: {
      width: "41.666667vw",
      height: "41.666667vw",
    },
    [theme.breakpoints.down("md")]: {
      width: "84.375vw",
      height: "84.375vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "87.78626vw",
      height: "87.78626vw",
    },
  },

  component224Icon: {
    width: "100px",
    height: "100px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      width: "80px",
      height: "80px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "64px",
      height: "64px",
    },
  },

  buyingACar: {
    fontSize: "48px",
    lineHeight: "59px",
    fontWeight: "700",
    [theme.breakpoints.down("xl")]: {
      fontSize: "40px",
      lineHeight: "50px",
      fontWeight: "700",
    },
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
      lineHeight: "40px",
      fontWeight: "700",
    },
  },
  onlineVehiclePurchase: {
    fontSize: "18px",
    lineHeight: "32px",
    fontWeight: "600",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      fontSize: "16px",
      lineHeight: "32px",
      fontWeight: "600",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      lineHeight: "32px",
      fontWeight: "600",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      lineHeight: "28px",
      fontWeight: "600",
    },
  },
  customersCanQuickly: {
    fontSize: "18px",
    lineHeight: "32px",
    fontWeight: "500",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      fontSize: "16px",
      lineHeight: "28px",
      fontWeight: "500",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      lineHeight: "28px",
      fontWeight: "500",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: "400",
    },
  },

  frameParent41: {
    gap: "160px",
    padding: "0 7.8125vw",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      padding: "0 7.8125vw",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 6.10687vw",
    },
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
  manageEntireVehicleContainer: {
    fontSize: "42px",
    lineHeight: "40px",
    fontWeight: "600",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
      lineHeight: "40px",
      fontWeight: "600",
    },
  },
  manageEntireVehicleContainerText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "60px",
    padding: "350px 0",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      padding: "160px 0",
    },
  },
});

const PLUG: NextPage = () => {
  const classes = useStyles(theme);
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
      "mailto:wondermove@wondermove.net?subject=Manage%20entire%20to%20vehicle%20lifecycle%20with%20P-LUG&body=Region%3A%0ACompany%3A%0AName%3A%0APhone%20Number%3A%0A%0AWhat%20can%20we%20help%20you%3F"
    );

  return (
    <>
      <Head>
        <title>P-LUG Integrated mobility solution | wondermove</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta property="og:title" content="P-LUG" />
        <meta
          property="og:description"
          content="Integrated Mobility Solution P-LUG"
        ></meta>
        <meta property="og:image" content="/plug/plugOgimage.png"></meta>
        <link rel="icon" href="/plug/plug_favicon.ico" type="image/x-icon" />
      </Head>
      <div className={styles.pLug}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameInner} />
          <Image
            className={styles.desertLandscapeWithPinkSkyIcon}
            width={800}
            height={600}
            alt=""
            src="/plug/desertlandscapewithpinkskypurplebackground-1@2x.png"
          />
          {/* <img
            className={styles.desertLandscapeWithPinkSkyIcon}
            alt=""
            src="/plug/desertlandscapewithpinkskypurplebackground-1@2x.png"
          /> */}
        </div>

        <div className={styles.gnb}>
          <Grid container sx={classes.containerNav}>
            <Nav />
          </Grid>
        </div>

        <div className={styles.frameParent8}>
          <Grid container sx={classes.frameParent8}>
            <div className={styles.frameWrapper}>
              <Grid container sx={classes.frameWrapper}>
                <div className={styles.frameParent9}>
                  <Grid container sx={classes.frameParent9}>
                    <div className={styles.image803Parent}>
                      <Grid container sx={classes.image803Parent}>
                        <Image
                          className={styles.image803Icon}
                          alt=""
                          src="/plug/image-803@2x.png"
                          width={800}
                          height={600}
                        />

                        <Image
                          className={styles.image803Icon}
                          alt=""
                          src="/plug/reddot.png"
                          width={800}
                          height={600}
                        />
                        {/* <img
                          className={styles.image803Icon}
                          alt=""
                          src="/plug/image-803@2x.png"
                        /> */}
                        <div
                          className={styles.integratedMobilitySolutionPParent}
                        >
                          <div
                            className={
                              styles.integratedMobilitySolutionContainer
                            }
                          >
                            <Grid
                              container
                              sx={classes.integratedMobilitySolutionContainer}
                            >
                              <p className={styles.wondermoveInc}>
                                Integrated Mobility <br /> Solution P-LUG
                              </p>
                            </Grid>
                          </div>
                          <div className={styles.weProvideFragmented1}>
                            <Grid container sx={classes.weProvideFragmented1}>
                              We provide fragmented services into a single
                              platform to deliver an integrated, dynamic
                              customer experience.
                            </Grid>
                          </div>
                        </div>
                      </Grid>
                    </div>
                    <div
                      className={styles.getInTouchContainer}
                      onClick={onGetInTouchClick}
                      style={{ cursor: "pointer" }}
                    >
                      <Grid container sx={classes.getInTouchContainer}>
                        <Grid container sx={classes.getInTouch}>
                          <div className={styles.getInTouch}>Get in touch</div>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </div>
              </Grid>
            </div>

            <div className={styles.vectorParent}>
              <Grid container sx={classes.vectorParent}>
                <div className={styles.image820Icon}>
                  <Grid container sx={classes.image820Icon}>
                    <Image
                      className={styles.phoneImage}
                      alt=""
                      src="/plug/phone.png"
                      width={800}
                      height={600}
                    />
                    {/* <img
                      className={styles.phoneImage}
                      alt=""
                      src="/plug/phone.png"
                    /> */}
                  </Grid>
                </div>
              </Grid>
            </div>
          </Grid>
        </div>
        <>
          <div className={styles.frameParent}>
            <Grid container sx={classes.frameParent}>
              <div className={styles.frameGroup}>
                <Grid container sx={classes.frameGroup}>
                  <div className={styles.groupParent}>
                    <Grid container sx={classes.groupParent}>
                      <div className={styles.groupIcon}>
                        <Grid container sx={classes.groupIcon}>
                          <Image
                            className={styles.groupImage}
                            alt=""
                            src="/plug/group-3177.svg"
                            width={800}
                            height={600}
                          />
                          {/* <img
                            className={styles.groupImage}
                            alt=""
                            src="/plug/group-3177.svg"
                          /> */}
                        </Grid>
                      </div>

                      <div className={styles.quickEstablishmentAndPersonParent}>
                        <Grid
                          container
                          sx={classes.quickEstablishmentAndPersonParent}
                        >
                          <div
                            className={styles.quickEstablishmentAndContainer}
                          >
                            <p
                              className={styles.manageEntireVehicle}
                            >{`Quick establishment and `}</p>
                            <p className={styles.wondermoveInc}>
                              personalization
                            </p>
                          </div>
                          <div className={styles.configureAPortfolioContainer}>
                            <Grid
                              container
                              sx={classes.configureAPortfolioContainer}
                            >
                              <div className={styles.wondermoveInc}>
                                Configure a portfolio with the services your
                                company needs, with modularized service units.
                              </div>
                            </Grid>
                          </div>
                        </Grid>
                      </div>
                    </Grid>
                  </div>
                  <div className={styles.groupParent}>
                    <Grid container sx={classes.groupParent}>
                      <div className={styles.groupIcon}>
                        <Grid container sx={classes.groupIcon}>
                          <Image
                            className={styles.groupImage}
                            alt=""
                            src="/plug/crmdmspms.png"
                            width={800}
                            height={600}
                          />
                          {/* <img
                            className={styles.groupImage}
                            alt=""
                            src="/plug/crmdmspms.png"
                          /> */}
                        </Grid>
                      </div>

                      <div className={styles.quickEstablishmentAndPersonParent}>
                        <Grid
                          container
                          sx={classes.quickEstablishmentAndPersonParent}
                        >
                          <div
                            className={styles.quickEstablishmentAndContainer}
                          >
                            <p className={styles.manageEntireVehicle}>
                              Easy integration
                            </p>
                            <p className={styles.wondermoveInc}>
                              with Legacy system
                            </p>
                          </div>
                          <div className={styles.configureAPortfolioContainer}>
                            <Grid
                              container
                              sx={classes.configureAPortfolioContainer}
                            >
                              <div className={styles.wondermoveInc}>
                                Easy to intergrate and manage legacy systems
                                such as CRM, DMS, and PMS.
                              </div>
                            </Grid>
                          </div>
                        </Grid>
                      </div>
                    </Grid>
                  </div>
                  <div className={styles.groupParent}>
                    <Grid container sx={classes.groupParent}>
                      <div className={styles.groupIcon}>
                        <Grid container sx={classes.groupIcon}>
                          <Image
                            className={styles.groupImage}
                            alt=""
                            src="/plug/frame-3177.svg"
                            width={800}
                            height={600}
                          />
                          {/* <img
                            className={styles.groupImage}
                            alt=""
                            src="/plug/frame-3177.svg"
                          /> */}
                        </Grid>
                      </div>
                      <div className={styles.quickEstablishmentAndPersonParent}>
                        <Grid
                          container
                          sx={classes.quickEstablishmentAndPersonParent}
                        >
                          <div
                            className={styles.quickEstablishmentAndContainer}
                          >
                            <p className={styles.manageEntireVehicle}>
                              An integrated solution
                            </p>
                            <p className={styles.wondermoveInc}>
                              for all users
                            </p>
                          </div>
                          <div className={styles.configureAPortfolioContainer}>
                            <Grid
                              container
                              sx={classes.configureAPortfolioContainer}
                            >
                              <div className={styles.wondermoveInc}>
                                P-LUG provides an integrated system for
                                customers, dealers, and OEMs who use and provide
                                services.
                              </div>
                            </Grid>
                          </div>
                        </Grid>
                      </div>
                    </Grid>
                  </div>
                </Grid>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <Grid container sx={classes.frameParent1}>
                    <div className={styles.weLaunchedOurServiceIn10Parent}>
                      <Grid
                        container
                        sx={classes.weLaunchedOurServiceIn10Parent}
                      >
                        <div className={styles.weLaunchedOurContainer}>
                          <Grid container sx={classes.weLaunchedOurContainer}>
                            <div className={styles.manageEntireVehicle}>
                              We launched our service in 10 European countries
                            </div>
                          </Grid>
                        </div>
                        <div className={styles.configureAPortfolioContainer}>
                          <Grid
                            container
                            sx={classes.configureAPortfolioContainerDiv}
                          >
                            <div className={styles.wondermoveInc}>
                              In collaboration with P-LUG and Hyundai Europe, we
                              created a platform called myHyundai. The platform
                              will be launched in 10 European countries by 2023.
                            </div>
                          </Grid>
                        </div>
                      </Grid>
                    </div>{" "}
                    <div className={styles.frameParent2}>
                      <Grid container sx={classes.frameParent2}>
                        <div className={styles.kParent}>
                          <div className={styles.k}>
                            <Grid container sx={classes.k}>
                              860K+
                            </Grid>
                          </div>
                          <div className={styles.users}>Users</div>
                        </div>
                        <div className={styles.kParent}>
                          <div className={styles.k}>
                            <Grid container sx={classes.k}>
                              10
                            </Grid>
                          </div>
                          <div className={styles.users}>Countries</div>
                        </div>
                        <div className={styles.kParent}>
                          <div className={styles.k}>
                            <Grid container sx={classes.k}>
                              1,500+
                            </Grid>
                          </div>
                          <div className={styles.users}>Dealership</div>
                        </div>
                      </Grid>
                    </div>
                  </Grid>
                </div>
                <div className={styles.frameIcon1}>
                  <Grid container sx={classes.frameIcon1}>
                    <Image
                      className={styles.frameImage}
                      alt=""
                      src="/plug/frame.svg"
                      width={800}
                      height={600}
                    />
                    {/* <img
                      className={styles.frameImage}
                      alt=""
                      src="/plug/frame.svg"
                    /> */}
                  </Grid>
                </div>
              </div>
              <div className={styles.frameParent3}>
                <Grid container sx={classes.frameParent3}>
                  <div className={styles.seamlessIntegrationParent}>
                    <div className={styles.se}>
                      <Grid container sx={classes.se}>
                        <div>Seamless Integration</div>
                      </Grid>
                    </div>
                    <div className={styles.weProvideFragmentedContainer}>
                      <Grid container sx={classes.weProvideFragmentedContainer}>
                        {isMdallScreen ? (
                          <div className={styles.wondermoveInc}>
                            We provide fragmented services into a <br />
                            single platform to deliver an intergrated, <br />
                            dynamic customer experience.
                          </div>
                        ) : (
                          <div className={styles.wondermoveInc}>
                            We provide fragmented services into a single
                            platform to deliver <br /> an intergrated, dynamic
                            customer experience.
                          </div>
                        )}
                      </Grid>
                    </div>
                  </div>
                  <div className={styles.plugV}>
                    <Grid container sx={classes.plugV}>
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className={styles.videoPlay}
                      >
                        <source src="/plug/plugV.mp4" type="video/mp4" />
                      </video>
                    </Grid>
                  </div>
                </Grid>
              </div>
              {isMdallScreen ? (
                <div className={styles.frameParent41}>
                  <Grid container sx={classes.frameParent41}>
                    <div className={styles.frameParent6}>
                      <div
                        style={{
                          borderRadius: "40px",
                          overflow: "hidden",
                          background: "#F1F3F9",
                        }}
                      >
                        <div className={styles.frameChild2}>
                          <Grid container sx={classes.frameChild2}>
                            <Lottie
                              animationData={lottie5}
                              loop={true}
                              autoplay={true}
                              className={styles.frameChild2}
                            />
                          </Grid>
                        </div>
                      </div>
                      <div className={styles.component224Parent2}>
                        <div className={styles.component224Icon}>
                          <Grid container sx={classes.component224Icon}>
                            <Image
                              className={styles.component224Icon}
                              alt=""
                              src="/plug/component-224.svg"
                              width={800}
                              height={80}
                            />
                            {/* <img
                              className={styles.component224Icon}
                              alt=""
                              src="/plug/component-224.svg"
                            /> */}
                          </Grid>
                        </div>
                        <div className={styles.buyingACar}>
                          <Grid container sx={classes.buyingACar}>
                            Buying a car
                          </Grid>
                        </div>
                        <div className={styles.onlineVehiclePurchase}>
                          <Grid container sx={classes.onlineVehiclePurchase}>
                            Online vehicle purchase and vehicle configuration
                          </Grid>
                        </div>
                        <div className={styles.customersCanQuickly}>
                          <Grid container sx={classes.customersCanQuickly}>
                            Customers can quickly lookup and purchase a vehicle
                            based on the inventory data of dealerships, and
                            preview quotations by configuring interior, exterior
                            colors and specs. Based on the configuration,
                            customers can receive live consultation on purchases
                            or be connected with online sales channels.
                          </Grid>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent6}>
                      <div
                        style={{
                          borderRadius: "40px",
                          overflow: "hidden",
                        }}
                      >
                        <div className={styles.frameChild2}>
                          <Grid container sx={classes.frameChild2}>
                            <Lottie
                              animationData={lottie6}
                              loop={true}
                              autoplay={true}
                              className={styles.frameChild2}
                            />
                          </Grid>
                        </div>
                      </div>

                      <div className={styles.component224Parent2}>
                        <div className={styles.component224Icon}>
                          <Grid container sx={classes.component224Icon}>
                            <Image
                              className={styles.component224Icon}
                              alt=""
                              src="/plug/component-2241.svg"
                              width={800}
                              height={80}
                            />
                            {/* <img
                              className={styles.component224Icon}
                              alt=""
                              src="/plug/component-2241.svg"
                            /> */}
                          </Grid>
                        </div>

                        <div className={styles.buyingACar}>
                          <Grid container sx={classes.buyingACar}>
                            Roadside assistance
                          </Grid>
                        </div>
                        <div className={styles.onlineVehiclePurchase}>
                          <Grid container sx={classes.onlineVehiclePurchase}>
                            Swift and reliable assistance for safe recovery
                          </Grid>
                        </div>
                        <div className={styles.customersCanQuickly}>
                          <Grid container sx={classes.customersCanQuickly}>
                            {`Customers can request a roadside assistant in the case
                          of an emergency. We provide a swift assistance based
                          on customer's location, and customers can check
                          real-time progress status of the assistance.`}
                          </Grid>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent6}>
                      <div
                        style={{
                          borderRadius: "40px",
                          overflow: "hidden",
                        }}
                      >
                        <div className={styles.frameChild2}>
                          <Grid container sx={classes.frameChild2}>
                            <Lottie
                              animationData={lottie7}
                              loop={true}
                              autoplay={true}
                              className={styles.frameChild2}
                            />
                          </Grid>
                        </div>
                      </div>
                      <div className={styles.component224Parent2}>
                        <div className={styles.component224Icon}>
                          <Grid container sx={classes.component224Icon}>
                            <Image
                              className={styles.component224Icon}
                              alt=""
                              src="/plug/component-2242.svg"
                              width={800}
                              height={80}
                            />
                            {/* <img
                              className={styles.component224Icon}
                              alt=""
                              src="/plug/component-2242.svg"
                            /> */}
                          </Grid>
                        </div>

                        <div className={styles.buyingACar}>
                          <Grid container sx={classes.buyingACar}>
                            Sell used car
                          </Grid>
                        </div>
                        <div className={styles.onlineVehiclePurchase}>
                          <Grid container sx={classes.onlineVehiclePurchase}>
                            Get estimates from dealers by simply taking a photo
                          </Grid>
                        </div>
                        <div className={styles.customersCanQuickly}>
                          <Grid container sx={classes.customersCanQuickly}>
                            To sell a used car, customers can share the specs,
                            option and condition of their vehicle with a dealer.
                            Dealers can provide a quotation based on the
                            information. A deal takes place upon the agreed
                            quotation and schedule.
                          </Grid>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent6}>
                      <div
                        style={{
                          borderRadius: "40px",
                          overflow: "hidden",
                        }}
                      >
                        <div className={styles.frameChild2}>
                          <Grid container sx={classes.frameChild2}>
                            <Lottie
                              animationData={lottie8}
                              loop={true}
                              autoplay={true}
                              className={styles.frameChild2}
                            />
                          </Grid>
                        </div>
                      </div>

                      <div className={styles.component224Parent2}>
                        <div className={styles.component224Icon}>
                          <Grid container sx={classes.component224Icon}>
                            <Image
                              className={styles.component224Icon}
                              alt=""
                              src="/plug/component-225.svg"
                              width={800}
                              height={80}
                            />
                            {/* <img
                              className={styles.component224Icon}
                              alt=""
                              src="/plug/component-225.svg"
                            /> */}
                          </Grid>
                        </div>

                        <div className={styles.buyingACar}>
                          <Grid container sx={classes.buyingACar}>
                            Live consult
                          </Grid>
                        </div>
                        <div className={styles.onlineVehiclePurchase}>
                          <Grid container sx={classes.onlineVehiclePurchase}>
                            Direct communication between customer and dealers
                            through Live Consultation and Chat functions
                          </Grid>
                        </div>
                        <div className={styles.customersCanQuickly}>
                          <Grid container sx={classes.customersCanQuickly}>
                            Customers can request a live or scheduled
                            consultation to a dealer by selecting the type of
                            service they want. Dealers can conduct a
                            consultation with the customer via mobile/PC
                            application. Screen sharing and device switching
                            features for the dealer allow a seamless
                            consultation in a non-face-to-face environment.
                          </Grid>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent6}>
                      <div
                        style={{
                          borderRadius: "40px",
                          overflow: "hidden",
                        }}
                      >
                        <div className={styles.frameChild2}>
                          <Grid container sx={classes.frameChild2}>
                            <Lottie
                              animationData={lottie9}
                              loop={true}
                              autoplay={true}
                              className={styles.frameChild2}
                            />
                          </Grid>
                        </div>
                      </div>
                      <div className={styles.component224Parent2}>
                        <div className={styles.component224Icon}>
                          <Grid container sx={classes.component224Icon}>
                            <Image
                              className={styles.component224Icon}
                              alt=""
                              src="/plug/component-2251.svg"
                              width={800}
                              height={80}
                            />
                            {/* <img
                              className={styles.component224Icon}
                              alt=""
                              src="/plug/component-2251.svg"
                            /> */}
                          </Grid>
                        </div>

                        <div className={styles.buyingACar}>
                          <Grid container sx={classes.buyingACar}>
                            {`Exterior repair & Service booking`}
                          </Grid>
                        </div>
                        <div className={styles.onlineVehiclePurchase}>
                          <Grid container sx={classes.onlineVehiclePurchase}>
                            Receive reminders and schedule vehicle maintenance
                            appointments online
                          </Grid>
                        </div>
                        <div className={styles.customersCanQuickly}>
                          <Grid container sx={classes.customersCanQuickly}>
                            Customers can get assistance with scheduled or
                            occasional maintenance services after purchasing a
                            vehicle. They can make a request by selecting the
                            type of service and desired schedule, then consult
                            with a dealer for a quotation. Reminders for next
                            service appointments are provided based on their
                            service history.
                          </Grid>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </div>
              ) : (
                <div className={styles.frameParent4}>
                  <Grid container sx={classes.frameParent4}>
                    <div className={styles.frameParent5}>
                      <Grid container sx={classes.frameParent5}>
                        <div className={styles.component224Parent}>
                          <div className={styles.component224Icon}>
                            <Grid container sx={classes.component224Icon}>
                              <Image
                                className={styles.component224Icon}
                                alt=""
                                src="/plug/component-224.svg"
                                width={800}
                                height={100}
                              />
                              {/* <img
                                className={styles.component224Icon}
                                alt=""
                                src="/plug/component-224.svg"
                              /> */}
                            </Grid>
                          </div>
                          <div className={styles.buyingACar}>
                            <Grid container sx={classes.buyingACar}>
                              Buying a car
                            </Grid>
                          </div>
                          <div className={styles.onlineVehiclePurchase}>
                            <Grid container sx={classes.onlineVehiclePurchase}>
                              Online vehicle purchase and vehicle configuration
                            </Grid>
                          </div>
                          <div className={styles.customersCanQuickly}>
                            <Grid container sx={classes.customersCanQuickly}>
                              Customers can quickly lookup and purchase a
                              vehicle based on the inventory data of
                              dealerships, and preview quotations by configuring
                              interior, exterior colors and specs. Based on the
                              configuration, customers can receive live
                              consultation on purchases or be connected with
                              online sales channels.
                            </Grid>
                          </div>
                        </div>
                        <div
                          style={{
                            borderRadius: "40px",
                            overflow: "hidden",
                            background: "#F1F3F9",
                          }}
                        >
                          <div className={styles.frameChild2}>
                            <Grid container sx={classes.frameChild2}>
                              <Lottie
                                animationData={lottie5}
                                loop={true}
                                autoplay={true}
                                className={styles.frameChild2}
                              />
                            </Grid>
                          </div>
                        </div>
                      </Grid>
                    </div>
                    <div className={styles.frameParent5}>
                      <Grid container sx={classes.frameParent5}>
                        <div
                          style={{
                            borderRadius: "40px",
                            overflow: "hidden",
                          }}
                        >
                          <div className={styles.frameChild2}>
                            <Grid container sx={classes.frameChild2}>
                              <Lottie
                                animationData={lottie6}
                                loop={true}
                                autoplay={true}
                                className={styles.frameChild2}
                              />
                            </Grid>
                          </div>
                        </div>

                        <div className={styles.component224Parent}>
                          <div className={styles.component224Icon}>
                            <Grid container sx={classes.component224Icon}>
                              <Image
                                className={styles.component224Icon}
                                alt=""
                                src="/plug/component-2241.svg"
                                width={800}
                                height={100}
                              />
                              {/* <img
                                className={styles.component224Icon}
                                alt=""
                                src="/plug/component-2241.svg"
                              /> */}
                            </Grid>
                          </div>

                          <div className={styles.buyingACar}>
                            <Grid container sx={classes.buyingACar}>
                              Roadside assistance
                            </Grid>
                          </div>
                          <div className={styles.onlineVehiclePurchase}>
                            <Grid container sx={classes.onlineVehiclePurchase}>
                              Swift and reliable assistance for safe recovery
                            </Grid>
                          </div>
                          <div className={styles.customersCanQuickly}>
                            <Grid container sx={classes.customersCanQuickly}>
                              {`Customers can request a roadside assistant in the case
                          of an emergency. We provide a swift assistance based
                          on customer's location, and customers can check
                          real-time progress status of the assistance.`}
                            </Grid>
                          </div>
                        </div>
                      </Grid>
                    </div>
                    <div className={styles.frameParent5}>
                      <Grid container sx={classes.frameParent5}>
                        <div className={styles.component224Parent}>
                          <div className={styles.component224Icon}>
                            <Grid container sx={classes.component224Icon}>
                              <Image
                                className={styles.component224Icon}
                                alt=""
                                src="/plug/component-2242.svg"
                                width={800}
                                height={100}
                              />
                              {/* <img
                                className={styles.component224Icon}
                                alt=""
                                src="/plug/component-2242.svg"
                              /> */}
                            </Grid>
                          </div>

                          <div className={styles.buyingACar}>
                            <Grid container sx={classes.buyingACar}>
                              Sell used car
                            </Grid>
                          </div>
                          <div className={styles.onlineVehiclePurchase}>
                            <Grid container sx={classes.onlineVehiclePurchase}>
                              Get estimates from dealers by simply taking a
                              photo
                            </Grid>
                          </div>
                          <div className={styles.customersCanQuickly}>
                            <Grid container sx={classes.customersCanQuickly}>
                              To sell a used car, customers can share the specs,
                              option and condition of their vehicle with a
                              dealer. Dealers can provide a quotation based on
                              the information. A deal takes place upon the
                              agreed quotation and schedule.
                            </Grid>
                          </div>
                        </div>
                        <div
                          style={{
                            borderRadius: "40px",
                            overflow: "hidden",
                          }}
                        >
                          <div className={styles.frameChild2}>
                            <Grid container sx={classes.frameChild2}>
                              <Lottie
                                animationData={lottie7}
                                loop={true}
                                autoplay={true}
                                className={styles.frameChild2}
                              />
                            </Grid>
                          </div>
                        </div>
                      </Grid>
                    </div>
                    <div className={styles.frameParent5}>
                      <Grid container sx={classes.frameParent5}>
                        <div
                          style={{
                            borderRadius: "40px",
                            overflow: "hidden",
                          }}
                        >
                          <div className={styles.frameChild2}>
                            <Grid container sx={classes.frameChild2}>
                              <Lottie
                                animationData={lottie8}
                                loop={true}
                                autoplay={true}
                                className={styles.frameChild2}
                              />
                            </Grid>
                          </div>
                        </div>

                        <div className={styles.component225Parent}>
                          <div className={styles.component224Icon}>
                            <Grid container sx={classes.component224Icon}>
                              <Image
                                className={styles.component224Icon}
                                alt=""
                                src="/plug/component-225.svg"
                                width={800}
                                height={100}
                              />
                              {/* <img
                                className={styles.component224Icon}
                                alt=""
                                src="/plug/component-225.svg"
                              /> */}
                            </Grid>
                          </div>

                          <div className={styles.buyingACar}>
                            <Grid container sx={classes.buyingACar}>
                              Live consult
                            </Grid>
                          </div>
                          <div className={styles.onlineVehiclePurchase}>
                            <Grid container sx={classes.onlineVehiclePurchase}>
                              Direct communication between customer and dealers
                              through Live Consultation and Chat functions
                            </Grid>
                          </div>
                          <div className={styles.customersCanQuickly}>
                            <Grid container sx={classes.customersCanQuickly}>
                              Customers can request a live or scheduled
                              consultation to a dealer by selecting the type of
                              service they want. Dealers can conduct a
                              consultation with the customer via mobile/PC
                              application. Screen sharing and device switching
                              features for the dealer allow a seamless
                              consultation in a non-face-to-face environment.
                            </Grid>
                          </div>
                        </div>
                      </Grid>
                    </div>
                    <div className={styles.frameParent5}>
                      <Grid container sx={classes.frameParent5}>
                        <div className={styles.component224Parent}>
                          <div className={styles.component224Icon}>
                            <Grid container sx={classes.component224Icon}>
                              <Image
                                className={styles.component224Icon}
                                alt=""
                                src="/plug/component-2251.svg"
                                width={800}
                                height={100}
                              />
                              {/* <img
                                className={styles.component224Icon}
                                alt=""
                                src="/plug/component-2251.svg"
                              /> */}
                            </Grid>
                          </div>

                          <div className={styles.buyingACar}>
                            <Grid container sx={classes.buyingACar}>
                              {`Exterior repair & Service booking`}
                            </Grid>
                          </div>
                          <div className={styles.onlineVehiclePurchase}>
                            <Grid container sx={classes.onlineVehiclePurchase}>
                              Receive reminders and schedule vehicle maintenance
                              appointments online
                            </Grid>
                          </div>
                          <div className={styles.customersCanQuickly}>
                            <Grid container sx={classes.customersCanQuickly}>
                              Customers can get assistance with scheduled or
                              occasional maintenance services after purchasing a
                              vehicle. They can make a request by selecting the
                              type of service and desired schedule, then consult
                              with a dealer for a quotation. Reminders for next
                              service appointments are provided based on their
                              service history.
                            </Grid>
                          </div>
                        </div>
                        <div
                          style={{
                            borderRadius: "40px",
                            overflow: "hidden",
                          }}
                        >
                          <div className={styles.frameChild2}>
                            <Grid container sx={classes.frameChild2}>
                              <Lottie
                                animationData={lottie9}
                                loop={true}
                                autoplay={true}
                                className={styles.frameChild2}
                              />
                            </Grid>
                          </div>
                        </div>
                      </Grid>
                    </div>
                  </Grid>
                </div>
              )}
            </Grid>
          </div>
        </>

        <div className={styles.footerContianer}>
          <div className={styles.manageEntireVehicleLifecyclParent}>
            <div className={styles.manageEntireVehicleContainerText}>
              <Grid container sx={classes.manageEntireVehicleContainerText}>
                <div className={styles.manageEntireVehicleContainer}>
                  <Grid container sx={classes.manageEntireVehicleContainer}>
                    <div className={styles.manageEntireVehicle}>
                      Manage entire vehicle lifecycle <br />
                      with P-LUG
                    </div>
                  </Grid>
                </div>
                <div
                  className={styles.getInTouchWrapper}
                  onClick={onGetInTouchClick}
                  style={{ cursor: "pointer" }}
                >
                  <b className={styles.getInTouch}>Get in touch</b>
                </div>
              </Grid>
            </div>
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
                      src="/plug/layer-1.svg"
                      width={800}
                      height={600}
                    />
                  </a>
                  {/* <img
                    className={styles.layer1Icon}
                    alt=""
                    src="/plug/layer-1.svg"
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
                        <p className={styles.wondermoveInc}>wondermove Inc.</p>
                        <p className={styles.wondermoveInc}>
                          Business Registration Number: 518-81-01644
                        </p>
                        <p className={styles.wondermoveInc}>
                          Address: 2F, 104, Nonhyeon-ro 27-gil, Seocho-gu,
                          Seoul, Republic of Korea
                        </p>
                        <p className={styles.wondermoveInc}>
                          Use Inquiries: hawkeye@wondermove.net
                        </p>
                      </div>
                    </Grid>
                  </div>
                </Grid>
              </div>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default PLUG;
