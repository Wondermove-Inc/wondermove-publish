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
    justifyContent: "center",
    padding: "10px 240px",
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
      padding: "",
    },
  },
  containerGloballyValidated: {
    padding: "160px 240px",
    justifyContent: "center",
    [theme.breakpoints.down("xl")]: {
      padding: "160px 240px",
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
    padding: "160px 240px",
    [theme.breakpoints.down("xl")]: {
      padding: "160px 240px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "160px 120px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "",
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
      padding: " 0px 0px 80px",
    },
  },
  runningASuccessfulProofOfParent: {
    justifyContent: "space-between",
    padding: "0 80px",
    [theme.breakpoints.down("xl")]: {
      padding: "0 80px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "80px 60px",
      gap: "69px",
    },
    [theme.breakpoints.down("md")]: {
      padding: " 60px 40px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: " 24px",
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
  const [isChecked, setIsChecked] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const toggleSendModalVisible = () => setSendModalVisible(!sendModalVisible);
  const toggleSuccessModalVisible = () =>
    setSuccessModalVisible(!successModalVisible);

  const onSendMessagePress = () => {
    toggleSendModalVisible();
    toggleSuccessModalVisible();
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log(
      "🚀 ~ file: desktop.tsx:207 ~ handleCheckboxChange ~ !isChecked:",
      !isChecked
    );
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
              <Nav />
            </Grid>
          </div>
          <div className={styles.gnbParent}>
            <Grid container sx={classes.containerSolutionForYourCloud}>
              <div className={styles.solutionForYourCloudStrateParent}>
                <b className={styles.solutionForYourContainer}>
                  <p className={styles.solutionForYourCosts}>
                    Solution for Your
                  </p>
                  <p className={styles.solutionForYourCosts}>
                    Cloud Strategy and Costs
                  </p>
                </b>
                <div className={styles.frameWrapper}>
                  <div className={styles.wonderAboutCuttingYourClouParent}>
                    <div className={styles.wonderAboutCuttingContainer}>
                      <p className={styles.wonderAbout}>Wonder about</p>
                      <p className={styles.wonderAbout}>
                        cutting your cloud costs?
                      </p>
                    </div>
                    {/* <Grid container sx={classes.frameContainerP}> */}
                    <Grid container sx={classes.frameContainer}>
                      <SliderBar />
                    </Grid>
                    {/* </Grid> */}
                  </div>
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

                      <div className={styles.runningASuccessfulProofOfParent}>
                        <Grid
                          container
                          sx={classes.runningASuccessfulProofOfParent}
                        >
                          <div className={styles.vcpuRunning}>
                            <p className={styles.wonderAbout}>
                              Running a successful proof of concept in
                            </p>
                            <p
                              className={styles.wonderAbout}
                            >{`4 European counteris with `}</p>
                          </div>
                          <div className={styles.container}>
                            <img
                              className={styles.icon}
                              alt=""
                              src="/1920_desktop/--2.svg"
                            />
                          </div>
                          <div>
                            <img
                              className={styles.image646Icon}
                              alt=""
                              src="/1920_desktop/image-646@2x.png"
                            />
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
            <div className={styles.frameParent25}>
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
                <div className={styles.rectangleParent2}>
                  {/* <div className={styles.groupChild5} />
                <div className={styles.rectangleParent3}>
                  <div className={styles.groupChild6} />
                  <div className={styles.maskGroup}>
                    <div className={styles.maskGroupChild} />
                  </div>
                </div> */}
                  <SolutionCost />
                </div>

                <div className={styles.frameWrapper5}>
                  <SolutionMenu />
                </div>
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
            </div>
          </Grid>
          <Grid container sx={classes.containerQA}>
            <QA />
          </Grid>
          <Grid container sx={classes.containerFooter}>
            <div className={styles.footer}>
              <div className={styles.layer1Group}>
                <div className={styles.layer1Icon}>
                  <Logo />
                </div>

                <div className={styles.wondermoveSpinOffOfHyundaiParent}>
                  <div className={styles.howManyVcpus}>
                    wondermove Spin-off of Hyundai Motor Company
                  </div>
                  <div className={styles.wondermoveIncContainer}>
                    <p
                      className={styles.solutionForYour}
                    >{`wondermove Inc. `}</p>
                    <p
                      className={styles.solutionForYour}
                    >{` Business Registration Number: 518-81-01644`}</p>
                    <p
                      className={styles.solutionForYour}
                    >{` Address: 2F, 104, Nonhyeon-ro 27-gil, Seocho-gu, Seoul, South Korea`}</p>
                    <p className={styles.solutionForYour}>
                      South Korea Use Inquiries: hawkeye@wondermove.net
                    </p>
                  </div>
                </div>
              </div>
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
    </div>
  );
};

export default SKuber1920;
