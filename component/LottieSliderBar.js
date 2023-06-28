import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "../pages/S-kuber/styles.module.css";
import Lottie from "lottie-react";
import lottie1 from "../asset/1.json";
import lottie2 from "../asset/2.json";
import lottie3 from "../asset/3.json";
import lottie4 from "../asset/4.json";
import { Controller, Scene } from "react-scrollmagic";

import { Grid, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";
import { isAbsolute } from "path";

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
  titleContent: {
    // height: "300px",
    // gap: "40px",
    // whiteSpace: "pre-line",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      // height: "250px",
    },
    [theme.breakpoints.down("sm")]: {
      // height: "300px",
    },
  },
  title: {
    fontSize: "42px",
    lineHeight: "52px",
    fontWeight: "600",
    paddingBottom: "40px",
    whiteSpace: "pre-line",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      whiteSpace: "normal",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
      lineHeight: "36px",
      paddingBottom: "24px",
      whiteSpace: "pre-line",
    },
  },
  content: {
    fontSize: "18px",
    lineHeight: "32px",
    fontWeight: "500",
    height: "100%",
    whiteSpace: "pre-line",
    paddingBottom: "96px",
    height: "100%",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      lineHeight: "28px",
      paddingBottom: "42px",
      // height: "200px",
      // height: "200px",
      height: "100%",
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
  indecater: {
    // position: "relative",
    position: "absolute",
    flexDirection: "row",
    display: "flex",
    alignSelf: "flex-end",
    left: 0,
    right: 0,
    justifyContent: "center",
    bottom: "120px",
    // zIndex:"100",
    paddingBottom: "20px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      paddingBottom: "0px",
    },
    [theme.breakpoints.down("sm")]: {
      bottom: "60px",
      paddingBottom: "20px",
    },
  },
  indecaterWH: {
    width: "58px",
    height: "16px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      width: "58px",
      height: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "36px",
      height: "10px",
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
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const carouselRef = useRef(null);

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

  //캐러셀 onScroll에 따른 indicator 변경. 결과값은 index 0 1 2 3
  const onScroll = (e) => {
    const scrollWidth = e.target.scrollWidth;
    const scrollLeft = e.target.scrollLeft;
    const clientWidth = e.target.clientWidth;
    const scrollPercentage = (scrollLeft / (scrollWidth - clientWidth)) * 100;
    const index = Math.min(
      Math.floor((scrollPercentage / 100) * 4),
      pages.length - 1
    );

    setCurrentPageIndex(index);
  };

  //캐러셀 indicator 클릭시 해당 페이지로 부드럽게 이동
  const onIndicatorClick = (index) => {
    const scrollWidth = carouselRef.current.scrollWidth;
    const scrollLeft = (scrollWidth / 100) * (index * 25);
    setCurrentPageIndex(index);
    carouselRef.current.scrollLeft = scrollLeft;
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
          <div
            className={styles.container}
            onScroll={onScroll}
            ref={carouselRef}
          >
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
                            style={{ height: "99.317vw", width: "100%" }}
                          />
                        </div>
                        <div className={styles.titleContent}>
                          <Grid container sx={classes.titleContent}>
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
                          </Grid>
                        </div>
                      </Grid>
                    </div>
                  </Grid>
                </div>
              </Grid>
            </div>
            <div className={styles.item}>
              <Grid container sx={classes.item}>
                <div className={styles.lottieText}>
                  <Grid container sx={classes.lottieText}>
                    <div className={styles.lottieText}>
                      <Grid container sx={classes.lottieText}>
                        <div
                          className={`${styles.lottieContainer} ${lottieDataArray[1].className}`}
                        >
                          <Lottie
                            animationData={lottieDataArray[1].animationData}
                            loop={true}
                            autoplay={true}
                            style={{ height: "99.317vw", width: "100%" }}
                          />
                        </div>
                        <div className={styles.titleContent}>
                          <Grid container sx={classes.titleContent}>
                            <div>
                              <Grid container sx={classes.title}>
                                {pages[1].title}
                              </Grid>
                            </div>
                            <div>
                              <Grid container sx={classes.content}>
                                {pages[1].content}
                              </Grid>
                            </div>
                          </Grid>
                        </div>
                      </Grid>
                    </div>
                  </Grid>
                </div>
              </Grid>
            </div>
            <div className={styles.item}>
              <Grid container sx={classes.item}>
                <div className={styles.lottieText}>
                  <Grid container sx={classes.lottieText}>
                    <div className={styles.lottieText}>
                      <Grid container sx={classes.lottieText}>
                        <div
                          className={`${styles.lottieContainer} ${lottieDataArray[2].className}`}
                        >
                          <Lottie
                            animationData={lottieDataArray[2].animationData}
                            loop={true}
                            autoplay={true}
                            style={{ height: "99.317vw", width: "100%" }}
                          />
                        </div>
                        <div className={styles.titleContent}>
                          <Grid container sx={classes.titleContent}>
                            <div>
                              <Grid container sx={classes.title}>
                                {pages[2].title}
                              </Grid>{" "}
                            </div>
                            <div>
                              <Grid container sx={classes.content}>
                                {pages[2].content}
                              </Grid>
                            </div>
                          </Grid>
                        </div>
                      </Grid>
                    </div>
                  </Grid>
                </div>
              </Grid>
            </div>
            <div className={styles.item}>
              <Grid container sx={classes.item}>
                <div className={styles.lottieText}>
                  <Grid container sx={classes.lottieText}>
                    <div className={styles.lottieText}>
                      <Grid container sx={classes.lottieText}>
                        <div
                          className={`${styles.lottieContainer} ${lottieDataArray[3].className}`}
                        >
                          <Lottie
                            animationData={lottieDataArray[3].animationData}
                            loop={true}
                            autoplay={true}
                            style={{ height: "99.317vw", width: "100%" }}
                          />
                        </div>
                        <div className={styles.titleContent}>
                          <Grid container sx={classes.titleContent}>
                            <div>
                              <Grid container sx={classes.title}>
                                {pages[3].title}
                              </Grid>{" "}
                            </div>
                            <div>
                              <Grid container sx={classes.content}>
                                {pages[3].content}
                              </Grid>
                            </div>
                          </Grid>
                        </div>
                      </Grid>
                    </div>
                  </Grid>
                </div>
              </Grid>
            </div>
          </div>
          {isSmallScreen ? (
            <div className={styles.indecater}>
              <Grid container sx={classes.indecater}>
                {pages.map((_, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        width: index === currentPageIndex ? 36 : 10,
                        height: 10,
                        marginLeft: index === 0 ? 0 : 12,
                        backgroundColor:
                          index === currentPageIndex
                            ? "rgba(204, 204, 204, 1)"
                            : "rgba(68, 68, 68, 1)",
                        borderRadius: 16,
                      }}
                      onClick={() => onIndicatorClick(index)}
                    />
                  );
                })}
              </Grid>
            </div>
          ) : (
            <div className={styles.indecater}>
              <Grid container sx={classes.indecater}>
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
                      onClick={() => onIndicatorClick(index)}
                    />
                  );
                })}
              </Grid>
            </div>
          )}
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
