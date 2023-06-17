import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "../pages/1920_desktop/styles.module.css";
import Lottie from "lottie-react";
import lottie1 from "../asset/1.json";
import lottie2 from "../asset/2.json";
import lottie3 from "../asset/3.json";
import lottie4 from "../asset/4.json";
import { Controller, Scene } from "react-scrollmagic";

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
  title: {
    fontSize: "42px",
    lineHeight: "52px",
    fontWeight: "600",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
      lineHeight: "36px",
    },
  },
  content: {
    fontSize: "18px",
    lineHeight: "32px",
    fontWeight: "500",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      lineHeight: "28px",
    },
  },
  pagerText: {
    gap: "40px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      gap: "24px",
    },
  },
  item: {
    padding: "120px 60px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      padding: "80px 24px",
    },
  },
  lottieText: {
    gap: "80px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      gap: "32px",
    },
  },
});
const classes = useStyles(theme);

const LottieSliderBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [currentLottieIndex, setCurrentLottieIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isMdallScreen, setIsMdallScreen] = useState(false);
  const [itemWidth, setItemWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const handlePagerClick = (index) => {
    setCurrentPageIndex(index);
    scrollToPage(index);
  };

  const scrollToPage = (index) => {
    const textContainer = document.getElementById("textContainer");
    const pageHeight = textContainer.clientHeight;
    textContainer.scrollTop = index * pageHeight;
  };

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

  const hasContent = Boolean(lottieDataArray[currentLottieIndex]);

  // ];
  const pages = [
    {
      title: `Identify issues and\nreduce costs with\nreal-time monitoring`,
      content:
        "Offer Kubernetes-based management/monitoring services with innovative technology not previously included and reduce cloud costs by leveraging eBPF and Service Mesh.",
    },
    {
      title: `Intelligent Server\nForecasting for\nReduce cloud cost`,
      content:
        "Save costs by shifting from peak-based server calculations to a minimum specification method, supporting active parallel scale-up & scale-down, and preventing service failure during emergencies with self-validation services.",
    },
    {
      title: `Resource\nOptimization\nduring DoS Attacks`,
      content:
        "Prevent resource waste on out-of-policy traffic, such as DDoS attacks, by utilizing eBPF's XDP technology for Linux Kernel control. (Limit the number of requests you receive from a specific IP address)",
    },
    {
      title: `Optimized\nlarge-scale service\nmanagement`,
      content:
        "Take control with S-Kuber's intelligent services monitoring. Seamlessly oversee the flow between connected services (MSAs) and ensure reliable management of large-scale services.",
    },
  ];
  // let currentTextIndex = 0;

  return (
    <div>
      {isMdallScreen ? (
        <div>
          <div className={styles.container}>
            <div className={styles.item}>
              <Grid container sx={classes.item}>
                <div className={styles.lottieText}>
                  <Grid container sx={classes.lottieText}>
                    <div className={styles.lottieText}>
                      <Grid container sx={classes.lottieText}>
                        <div
                          className={`${styles.lottieContainer} ${lottieDataArray[0].className}`}
                        >
                          <Lottie
                            animationData={lottieDataArray[0].animationData}
                            loop={true}
                            autoplay={true}
                            style={{ height: "1017px", width: "100%" }}
                          />
                        </div>
                        <div className={styles.titleContent}>
                          <div>
                            <Grid container sx={classes.title}>
                              {pages[0].title}
                            </Grid>{" "}
                          </div>
                          <div>
                            <Grid container sx={classes.content}>
                              {pages[0].content}
                            </Grid>
                          </div>
                        </div>
                      </Grid>
                    </div>
                  </Grid>
                </div>
              </Grid>
            </div>
            <div className={styles.item}>
              <div className={styles.lottieText}>
                <div className={styles.lottieText}>
                  <div
                    className={`${styles.lottieContainer} ${lottieDataArray[0].className}`}
                  >
                    <Lottie
                      animationData={lottieDataArray[0].animationData}
                      loop={true}
                      autoplay={true}
                      style={{ height: "1017px", width: "100%" }}
                    />
                  </div>
                  <div className={styles.titleContent}>
                    <div>
                      <Grid container sx={classes.title}>
                        {pages[0].title}
                      </Grid>{" "}
                    </div>
                    <div>
                      <Grid container sx={classes.content}>
                        {pages[0].content}
                      </Grid>
                    </div>
                  </div>
                </div>
                <div className={styles.ellipseParent}></div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.lottieText}>
                <div className={styles.lottieText}>
                  <div
                    className={`${styles.lottieContainer} ${lottieDataArray[0].className}`}
                  >
                    <Lottie
                      animationData={lottieDataArray[0].animationData}
                      loop={true}
                      autoplay={true}
                      style={{ height: "1017px", width: "100%" }}
                    />
                  </div>
                  <div className={styles.titleContent}>
                    <div>
                      <Grid container sx={classes.title}>
                        {pages[0].title}
                      </Grid>{" "}
                    </div>
                    <div>
                      <Grid container sx={classes.content}>
                        {pages[0].content}
                      </Grid>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.lottieText}>
                <div className={styles.lottieText}>
                  <div
                    className={`${styles.lottieContainer} ${lottieDataArray[0].className}`}
                  >
                    <Lottie
                      animationData={lottieDataArray[0].animationData}
                      loop={true}
                      autoplay={true}
                      style={{ height: "1017px", width: "100%" }}
                    />
                  </div>
                  <div className={styles.titleContent}>
                    <div>
                      <Grid container sx={classes.title}>
                        {pages[0].title}
                      </Grid>{" "}
                    </div>
                    <div>
                      <Grid container sx={classes.content}>
                        {pages[0].content}
                      </Grid>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                flexDirection: "row",
                display: "flex",
                alignSelf: "flex-end",
                left: 0,
                right: 0,
                justifyContent: "center",
                marginBottom: 120,
              }}
            >
              {pages.map((_, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      width: index === currentPageIndex ? 58 : 16,
                      height: 16,
                      marginLeft: index === 0 ? 0 : 12,
                      backgroundColor:
                        index === currentPageIndex
                          ? "rgba(204, 204, 204, 1)"
                          : "rgba(68, 68, 68, 1)",
                      borderRadius: 16,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
            {pages.map((item, index) => (
              <div className={styles.pagerContainer} key={index}>
                <div
                  className={`${styles.pagerContainerText} ${
                    index % 2 == 0 ? styles.frameParent8 : styles.frameParent10
                  }`}
                >
                  <Scene
                    pin={index == pages.length - 1 ? false : true}
                    key={index}
                    duration={0}
                  >
                    <div className={styles.pagerText}>
                      <Grid container sx={classes.pagerText}>
                        <div className={styles.wonderAbout}>
                          <Grid container sx={classes.title}>
                            {item.title}
                          </Grid>
                        </div>

                        <div className={styles.solutionForYour}>
                          <Grid container sx={classes.content}>
                            {item.content}
                          </Grid>
                        </div>
                      </Grid>
                    </div>
                  </Scene>
                </div>

                <div
                  className={`${styles.lottieContainer} ${lottieDataArray[index].className}`}
                >
                  <Lottie
                    animationData={lottieDataArray[index].animationData}
                    loop={true}
                    autoplay={true}
                    style={{ height: "1080px", width: "960px" }}
                  />
                </div>
              </div>
            ))}
          </Controller>
        </div>
      )}
    </div>
  );
};

export default LottieSliderBar;
