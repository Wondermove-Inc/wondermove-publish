import type { NextPage } from "next";
import React, { useEffect, useState, useRef } from "react";
import styles from "./styles.module.css";
import Nav from "../../component/Nav";
import SliderBar from "../../component/SliderBar";
import Lottie from "lottie-react";
import lottie1 from "../../asset/1.json";
import lottie2 from "../../asset/2.json";
import lottie3 from "../../asset/3.json";
import lottie4 from "../../asset/4.json";
import Logo from "../../component/Logo";

import SolutionMenu from "../../component/SolutionMenu";
import VideoBackground from "../../component/VideoBackground";
import LottieSliderBar from "../../component/LottieSliderBar";
import SolutionCost from "../../component/SolutionCost";
import AdvantageHover from "../../component/AdvantageHover";
import QA from "../../component/QA";
import GetInTouch from "../../component/GetInTouch";
import Modal from "react-modal";
import SendMessage from "../../component/SendMessage";
import SentSuccessfully from "../../component/SentSuccessfully";
import NavModal from "../../component/NavModal";
// import { Grid } from "@mui/material";
// import theme from "../../component/ThemeProvider";
// import { makeStyles } from "@material-ui/core/styles";

import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";
import { Controller, Scene } from "react-scrollmagic";

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
    height: "80px",
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
      padding: "10px 24px",
    },
  },
  containerSolutionForYourCloud: {
    padding: "240px 240px 120px",
    justifyContent: "center",
    [theme.breakpoints.down("xl")]: {
      padding: "240px 240px 120px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "240px 120px 120px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "240px 60px 120px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "240px 0px 120px",
    },
  },
  solutionForYourCosts: {
    margin: "0",
    fontFamily: "Montserrat",
    fontSize: "56px",
    fontWeight: "700",
    lineHeight: "80px",
    letterSpacing: "0px",
    textAlign: "left",
    whiteSpace: "nowrap",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
      lineHeight: "44px",
      padding: "0  53px 0 24px ",
    },
  },
  containerGloballyValidated: {
    padding: "160px 12.5vw",
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
  containerFrameParent25: {
    justifyContent: "center",
    padding: "160px 60px",
    [theme.breakpoints.down("xl")]: {
      padding: "160px 120px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "160px 120px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "160px 60px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "160px 24px",
    },
  },
  frameParent25: {
    overflow: "hidden",
    display: "flex",
    boxSizing: "border-box",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "80px",
    [theme.breakpoints.down("xl")]: {
      gap: "80px",
    },
    [theme.breakpoints.down("lg")]: {
      gap: "80px",
    },
    [theme.breakpoints.down("md")]: {
      gap: "80px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "60px",
    },
  },
  containerQA: {
    justifyContent: "center",
    padding: "160px 486px",
    [theme.breakpoints.down("xl")]: {
      padding: "160px 486px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "160px 222px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "160px 60px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "80px 24px 120px",
    },
  },
  containerFooter: {
    justifyContent: "center",
    padding: "80px 240px",
    [theme.breakpoints.down("xl")]: {
      padding: "80px 240px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "80px 120px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "80px 60px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: " 60px 24px 80px",
    },
  },

  layer1Icon: {
    position: "relative",
    width: "200px",
    height: "22px",
    overflow: "hidden",
    flexShrink: "0",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },

  layer1Group: {
    overflow: "hidden",
    display: "flex",
    alignItems: "flex-start",
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: "40px",
    },
  },

  howManyVcpus: {
    position: "relative",
    alignSelf: "stretch",
    lineHeight: "32px",
    fontWeight: "500",
    fontSize: "18px",
    [theme.breakpoints.down("xl")]: {
      // fontSize: "0.9375vw",
      fontSize: "18px",
    },
    [theme.breakpoints.down("lg")]: {
      // fontSize: "1.25vw",
      fontSize: "18px",
    },
    [theme.breakpoints.down("md")]: {
      // fontSize: "1.757812vw",
      fontSize: "18px",
    },
    [theme.breakpoints.down("sm")]: {
      // fontSize: "2.333333vw",
      fontSize: "18px",
    },
  },

  solutionForYourFooter: {
    margin: "0",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "32px",
    letterSpacing: "0px",
    textAlign: "left",
    color: "#ccc",
    [theme.breakpoints.down("xl")]: {
      // fontSize: "0.052083vw",
      fontSize: "14px",
    },
    [theme.breakpoints.down("lg")]: {
      // fontSize: "0.972222vw",
      fontSize: "14px",
    },
    [theme.breakpoints.down("md")]: {
      // fontSize: "1.367188vw",
      fontSize: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      // fontSize: "2.333333vw",
      fontSize: "14px",
    },
  },
  runningASuccessfulProofOfParent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    top: "0",
    left: "0",
    borderRadius: "20px",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    border: "1px solid  rgba(255, 255, 255, 0.6)",
    boxSizing: "border-box",
    width: "100%",
    overflow: "hidden",
    padding: "80px 80px",
    [theme.breakpoints.down("xl")]: {
      padding: "80px 80px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "80px 60px",
      gap: "69px",
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      textAlign: "center",
      padding: " 60px 40px",
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

  frameContainerP: {
    [theme.breakpoints.down("xl")]: {
      display: "flex",
      flexDirection: "row",
    },
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      flexDirection: "row",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  frameContainer: {
    alignSelf: "stretch",

    alignItems: "flex-start",
    justifyContent: "center",
    fontSize: "16px",
    [theme.breakpoints.down("xl")]: {
      display: "flex",
      flexDirection: "row",
    },
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      flexDirection: "row",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  frameWrapper5: {
    display: "flex",
    [theme.breakpoints.down("xl")]: {
      display: "flex",
    },
    [theme.breakpoints.down("lg")]: {
      display: "flex",
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  wonderAboutCuttingYourClouParent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    position: "relative",
    alignSelf: "stretch",
    gap: "80px",
    padding: "80px 80px 120px",
    [theme.breakpoints.down("xl")]: {
      padding: "80px 80px 120px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "80px 60px 120px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "80px 40px 120px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "40px 24px 80px",
      gap: "40px",
    },
  },
  wonderAboutText: {
    marginBlockStart: "0",
    marginBlockEnd: "0",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "42px",
    lineHeight: "51px",
    whiteSpace: "pre-line",
    [theme.breakpoints.down("xl")]: {
      fontSize: "42px",
      lineHeight: "51px",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "42px",
      lineHeight: "51px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "42px",
      lineHeight: "51px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
      lineHeight: "40px",
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
    whiteSpace: "pre-line",
    [theme.breakpoints.down("xl")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
      padding: "0 20px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      lineHeight: "24px",
      padding: "0",
    },
  },

  vcpuRunning: {
    fontFamily: "Montserrat",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "35px",
    letterSpacing: "0px",
    textAlign: "left",
    [theme.breakpoints.down("xl")]: {
      textAlign: "left",
      lineHeight: "29.26px",
    },
    [theme.breakpoints.down("lg")]: {
      textAlign: "left",
      lineHeight: "29.26px",
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      textAlign: "center",
      lineHeight: "29.26px",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
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
    width: "175px",
    height: "50px",
    objectFit: "cover",
    backgroundImage: 'url("/1920_desktop/image-646@2x.png")',
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: { marginLeft: "100px" },
    [theme.breakpoints.down("sm")]: {
      width: "106px",
      height: "29px",
      marginLeft: "0",
    },
  },
  icon: {
    position: "relative",
    width: "260px",
    height: "36px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: 'url("/1920_desktop/--2.svg")',
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: { marginRight: "100px" },
    [theme.breakpoints.down("sm")]: {
      width: "126px",
      height: "17px",
      marginRight: "0",
    },
  },
});

const classes = useStyles(theme);

// Lottie array
const lottieDataArray = [
  {
    animationData: lottie1,
    className: styles.lottie1Cintainer,
  },
  {
    animationData: lottie2,
    className: styles.lottie2Cintainer,
  },
  {
    animationData: lottie3,
    className: styles.lottie3Cintainer,
  },
  {
    animationData: lottie4,
    className: styles.lottie4Cintainer,
  },
];

const pages = ["", "", "", ""];

const SKuber1920: NextPage = () => {
  const [sendModalVisible, setSendModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [navModalVisible, setNavModalVisible] = useState(false);

  const [isChecked, setIsChecked] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  // const toggleSendModalVisible = () => setSendModalVisible(!sendModalVisible);
  const toggleSendModalVisible = () => {
    window.open(
      "mailto:wondermove@wondermove.net?subject=Join%20S-kuber%20to%20revolutionize%20your%20cloud%20and%20cut%20costs&body=Region%3A%0ACompany%3A%0AName%3A%0APhone%20Number%3A%0A%0AWhat%20can%20we%20help%20you%3F"
    );
  };
  const toggleNavModalVisible = () => setNavModalVisible(!navModalVisible);
  const toggleSuccessModalVisible = () =>
    setSuccessModalVisible(!successModalVisible);

  const onSendMessagePress = () => {
    toggleSendModalVisible();
    toggleSuccessModalVisible();
  };

  const onNavBTMPress = () => {
    toggleNavModalVisible;
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handlePagerClick = (index: number) => {
    setCurrentPageIndex(index);
    scrollToPage(index);
  };

  const scrollToPage = (index: number) => {
    const textContainer = document.getElementById("textContainer");
    if (!textContainer) return;
    const pageHeight = textContainer.clientHeight;
    textContainer.scrollTop = index * pageHeight;
  };

  useEffect(() => {
    const textContainer = document.getElementById("textContainer");
    if (!textContainer) return;

    const handleScroll = () => {
      const scrollTop = textContainer.scrollTop;
      const containerHeight = textContainer.clientHeight;
      const contentHeight = textContainer.scrollHeight;
      const percentage = (scrollTop / (contentHeight - containerHeight)) * 100;
      // setScrollPercentage(percentage);

      const textCount = 4;
      const lastIndex = pages.length - 1;
      const index = Math.min(
        Math.floor((percentage / 100) * textCount),
        lastIndex
      );
      // setCurrentTextIndex(index);

      const pageHeight = textContainer.clientHeight;
      const currentPage = Math.round(textContainer.scrollTop / pageHeight);
      setCurrentPageIndex(currentPage);
    };

    textContainer.addEventListener("scroll", handleScroll);

    return () => {
      textContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.sKuber1920}>
      <div className={styles.groupParent}>
        <div className={styles.groupContainer}>
          {/* <div className={styles.image549Parent}>
            <img
              className={styles.image549Icon}
              alt=""
              src="/1920_desktop/image-549@2x.png"
            />
            <img
              className={styles.image647Icon}
              alt=""
              src="/1920_desktop/image-647@2x.png"
            />
          </div> */}

          <VideoBackground />
          <div className={styles.gnb}>
            <Grid container sx={classes.containerNav}>
              {/* <div className={styles.gnb}> */}
              <Nav onClick={toggleNavModalVisible} />
              {/* </div> */}
            </Grid>
          </div>
          <div className={styles.gnbParent}>
            <Grid container sx={classes.containerSolutionForYourCloud}>
              <div className={styles.solutionForYourCloudStrateParent}>
                <div className={styles.solutionForYourContainer}>
                  <Grid container sx={classes.solutionForYourCosts}>
                    <div>{`Solution for Your Cloud Strategy and Costs`}</div>
                  </Grid>
                  {/* <Grid container sx={classes.solutionForYourCosts}>
                    <div>Cloud Strategy and Costs</div>
                  </Grid> */}
                </div>
                <div className={styles.frameWrapper}>
                  <Grid container sx={classes.wonderAboutCuttingYourClouParent}>
                    {/* <div className={styles.wonderAboutCuttingYourClouParent}> */}
                    <div className={styles.wonderAboutCuttingContainer}>
                      <Grid container sx={classes.wonderAboutText}>
                        Wonder about <br />
                        cutting your cloud costs?
                      </Grid>
                    </div>

                    {/* <Grid container sx={classes.frameContainerP}> */}
                    <Grid container sx={classes.frameContainer}>
                      <SliderBar />
                    </Grid>
                    {/* </Grid> */}
                    {/* </div> */}
                  </Grid>
                </div>
              </div>
            </Grid>

            <Grid container sx={classes.containerGloballyValidated}>
              <div className={styles.groupDiv}>
                <div className={styles.frameWrapper2}>
                  <div className={styles.globallyValidatedSolutionsParent}>
                    <div className={styles.globallyValidatedSolutions}>
                      Globally validated solutions
                    </div>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.rectangleDiv} />

                      <div>
                        <Grid
                          container
                          sx={classes.runningASuccessfulProofOfParent}
                        >
                          <div className={styles.vcpuRunning}>
                            <Grid container sx={classes.wonderAbout}>
                              <p>
                                Running a successful proof of <br /> concept in
                                4 European counteris with
                              </p>
                            </Grid>
                          </div>
                          <div>
                            <Grid container sx={classes.container}>
                              <Grid container sx={classes.icon}>
                                {/* <div className={styles.icon}></div> */}
                                {/* <img
                                className={styles.icon}
                                alt=""
                                src="/1920_desktop/--2.svg"
                              /> */}
                              </Grid>
                            </Grid>
                          </div>
                          <div>
                            <Grid container sx={classes.container}>
                              <Grid container sx={classes.image646Icon}></Grid>
                              {/* <div className={styles.image646Icon}></div> */}
                              {/* <img
                                className={styles.image646Icon}
                                alt=""
                                src="/1920_desktop/image-646@2x.png"
                              /> */}
                            </Grid>
                          </div>
                        </Grid>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid container sx={classes.containerGloballyValidated}>
              <AdvantageHover />
            </Grid>
          </div>
        </div>
        {/* <img className={styles.bgIcon} alt="" src="/1920_desktop/bg.svg" /> */}
        <div className={styles.scrollableContainer}>
          <LottieSliderBar />
          {/* <LottieSliderBar
            currentPageIndex={currentPageIndex}
            onIndicatorItemPress={handlePagerClick}
          /> */}
          {/* Lottie */}
          {/* <div className={styles.frameParentContainer}>
            <div
              ref={childRef}
              className={styles.rightContent}
              id="textContainer"
            >
              <div
                className={`${styles.lottieContainer} ${styles.lottie1Cintainer}`}
              >
                <Lottie
                  animationData={lottie1}
                  loop={true}
                  autoplay={true}
                  style={{ height: "1080px", width: "100%" }}
                />
              </div>
              <div
                className={`${styles.lottieContainer} ${styles.lottie2Cintainer}`}
              >
                <Lottie
                  animationData={lottie2}
                  loop={true}
                  autoplay={true}
                  style={{ height: "1080px", width: "100%" }}
                />
              </div>
              <div
                className={`${styles.lottieContainer} ${styles.lottie3Cintainer}`}
              >
                <Lottie
                  animationData={lottie3}
                  loop={true}
                  autoplay={true}
                  style={{ height: "1080px", width: "100%" }}
                />
              </div>
              <div
                className={`${styles.lottieContainer} ${styles.lottie4Cintainer}`}
              >
                <Lottie
                  animationData={lottie4}
                  loop={true}
                  autoplay={true}
                  style={{ height: "1080px", width: "100%" }}
                />
              </div>
            </div>
          </div> */}
        </div>
        <div className={styles.groupParent2}>
          <div className={styles.frameParent16}>
            <img
              className={styles.groupChild3}
              alt=""
              src="/1920_desktop/rectangle-23839.png"
            />
            {/* <div className={styles.groupChild4} /> */}
          </div>

          <Grid container sx={classes.containerFrameParent25}>
            <Grid container sx={classes.frameParent25}>
              {/* <div className={styles.frameParent25}> */}
              <div className={styles.pricingParent}>
                <div className={styles.pricing}>Pricing</div>
                <div className={styles.experienceTheNextGenerationContainer}>
                  <p className={styles.wonderAbout}>
                    Experience the Next-Generation
                  </p>
                  <p className={styles.wonderAbout}>Cloud Solution?</p>
                </div>
              </div>
              <div className={styles.groupParent3}>
                {/* <div className={styles.rectangleParent2}> */}
                {/* <div className={styles.groupChild5} />
                <div className={styles.rectangleParent3}>
                  <div className={styles.groupChild6} />
                  <div className={styles.maskGroup}>
                    <div className={styles.maskGroupChild} />
                  </div>
                </div> */}
                <SolutionCost />
                {/* </div> */}

                <Grid container sx={classes.frameWrapper5}>
                  <div className={styles.frameWrapper5}>
                    <SolutionMenu />
                  </div>
                </Grid>
              </div>
              <GetInTouch
                sendModalVisible={sendModalVisible}
                onClick={toggleSendModalVisible}
                successModalVisible={successModalVisible}
                toggleSendModalVisible={toggleSendModalVisible}
                toggleSuccessModalVisible={toggleSuccessModalVisible}
              />
              {/* <div className={styles.getStartedWrapper}>
              <div className={styles.pricing}>Get in touch</div>
            </div> */}
              {/* </div> */}
            </Grid>
          </Grid>
          <Grid container sx={classes.containerQA}>
            <QA />
          </Grid>
          <Grid container sx={classes.containerFooter}>
            <div className={styles.footer}>
              <Grid container sx={classes.layer1Group}>
                <Grid container sx={classes.layer1Icon}>
                  {/* <div className={styles.layer1Icon}> */}
                  <Logo />
                  {/* </div> */}
                </Grid>

                <div className={styles.wondermoveSpinOffOfHyundaiParent}>
                  <Grid container sx={classes.howManyVcpus}>
                    {/* <div className={styles.howManyVcpus}> */}
                    wondermove Spin-off of Hyundai Motor Company
                    {/* </div> */}
                  </Grid>
                  <div className={styles.wondermoveIncContainer}>
                    <Grid
                      container
                      sx={classes.solutionForYourFooter}
                    >{`wondermove Inc. `}</Grid>
                    {/* <p
                      className={styles.solutionForYourFooter}
                    >{`wondermove Inc. `}</p> */}
                    <Grid
                      container
                      sx={classes.solutionForYourFooter}
                    >{` Business Registration Number: 518-81-01644`}</Grid>
                    {/* <p
                      className={styles.solutionForYourFooter}
                    >{` Business Registration Number: 518-81-01644`}</p> */}
                    <Grid
                      container
                      sx={classes.solutionForYourFooter}
                    >{` Address: 2F, 104, Nonhyeon-ro 27-gil, Seocho-gu, Seoul, South Korea `}</Grid>
                    {/* <p
                      className={styles.solutionForYourFooter}
                    >{` Address: 2F, 104, Nonhyeon-ro 27-gil, Seocho-gu, Seoul, South Korea `}</p> */}
                    <Grid container sx={classes.solutionForYourFooter}>
                      South Korea Use Inquiries: hawkeye@wondermove.net
                    </Grid>
                    {/* <p className={styles.solutionForYourFooter}>
                      South Korea Use Inquiries: hawkeye@wondermove.net
                    </p> */}
                  </div>
                </div>
              </Grid>
            </div>
          </Grid>
        </div>
      </div>
      <SendMessage
        isVisible={sendModalVisible}
        toggleVisible={toggleSendModalVisible}
        onSendMessagePress={onSendMessagePress}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        companyName={companyName}
        userName={userName}
        email={email}
        setCompanyName={setCompanyName}
        setUserName={setUserName}
        setEmail={setEmail}
      />
      <SentSuccessfully
        isVisible={successModalVisible}
        toggleSuccessModalVisible={toggleSuccessModalVisible}
      />
      <NavModal
        toggleNavModalVisible={toggleNavModalVisible}
        isVisible={navModalVisible}
        onNavBTMPress={onNavBTMPress}
      />
    </div>
  );
};

export default SKuber1920;
