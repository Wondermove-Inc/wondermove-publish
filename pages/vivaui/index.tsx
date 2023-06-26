import React, { useEffect, useState, useRef } from "react";
import type { NextPage } from "next";
import styles from "./viva.module.css";
import Nav from "../../component/Nav";
import Head from "next/head";

import { Grid, Typography, useMediaQuery } from "@mui/material";
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
});

const VIVAUI: NextPage = () => {
  const classes = useStyles(theme);
  const [navModalVisible, setNavModalVisible] = useState(false);
  return (
    <>
      <Head>
        <title>VIVA UI React Native UI Framework | wondermove</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta property="og:title" content="VIVA UI" />
        {/* <meta
          property="og:description"
          content="VIVA UI React Native UI Framework | wondermove"
        ></meta> */}
        {/* <meta property="og:image" content="/plug/plugOgimage.png"></meta> */}
        {/* <link rel="icon" href="/plug/plug_favicon.ico" type="image/x-icon" /> */}
      </Head>
      <div className={styles.vivaUi}>
        <img className={styles.vivaUiChild} alt="" src="/viva/frame-4362.svg" />
        <div className={styles.gnb}>
          <Grid container sx={classes.containerNav}>
            <Nav />
          </Grid>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.groupItem} />
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupInner} />
            <div className={styles.rectangleDiv} />
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.reactNativeUiFrameworkParent}>
              <div className={styles.reactNativeUiContainer}>
                <p className={styles.reactNative}>React Native</p>
                <p className={styles.reactNative}>UI Framework</p>
              </div>
              <b className={styles.vivaUi16}>VIVA UI 1.6</b>
            </div>
            <div className={styles.aReactNative}>
              A React Native UI framework for creating flawless cross-platform
              mobile applications.
            </div>
          </div>
          <div className={styles.getInTouchWrapper}>
            <b className={styles.getInTouch}>Get in touch</b>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.frameWrapper1}>
                <div className={styles.ioniq5Parent}>
                  <div className={styles.ioniq5}>IONIQ 5</div>
                  <div className={styles.experienceTheIoniq}>
                    Experience the IONIQ 5—a world where anything is possible.
                  </div>
                </div>
              </div>
              <img
                className={styles.screenChangeMe}
                alt=""
                src="/viva/screen-change-me@2x.png"
              />
            </div>
            <div className={styles.groupParent1}>
              <div className={styles.pmParent}>
                <div className={styles.pm}>12:30 PM</div>
                <div className={styles.component47}>
                  <img
                    className={styles.component47Child}
                    alt=""
                    src="/viva/rectangle-324.svg"
                  />
                  <div className={styles.helloNiceTo}>
                    Hello! Nice to meet you :)
                  </div>
                </div>
              </div>
              <div className={styles.component50Wrapper}>
                <div className={styles.component50}>
                  <div className={styles.component50Inner}>
                    <div className={styles.component50Inner}>
                      <div className={styles.component50Inner}>
                        <img
                          className={styles.groupChild5}
                          alt=""
                          src="/viva/rectangle-325.svg"
                        />
                        <div className={styles.helloNiceTo}>
                          Do you want to see IONIQ 5?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.pm1}>12:30 PM</div>
            </div>
            <div className={styles.component233}>
              <div className={styles.component233Child} />
              <div className={styles.jeny}>Jeny</div>
              <div className={styles.hmuk3142832I20}>HMUK3142832 / i20</div>
              <div className={styles.moreLead3}>More lead +3</div>
              <div className={styles.wed0941Am}>10/09/2021 Wed・09:41 AM</div>
              <img
                className={styles.component233Item}
                alt=""
                src="/viva/vector-155.svg"
              />
              <img
                className={styles.vehicleIcon}
                alt=""
                src="/viva/vehicle.svg"
              />
              <img
                className={styles.calendarIcon}
                alt=""
                src="/viva/calendar.svg"
              />
              <img
                className={styles.northEastIcon}
                alt=""
                src="/viva/north-east.svg"
              />
              <div className={styles.component108}>
                <div className={styles.button}>OUTCOME UPDATE</div>
              </div>
              <div className={styles.tagRed}>
                <div className={styles.button}>Configurator Quote</div>
              </div>
            </div>
            <div className={styles.component60}>
              <div className={styles.component60Child} />
              <img
                className={styles.iconCalendarEmpty}
                alt=""
                src="/viva/icon-calendar-empty.svg"
              />
              <img
                className={styles.component60Item}
                alt=""
                src="/viva/vector-90.svg"
              />
              <div className={styles.sales}>Sales</div>
              <div className={styles.component60Inner} />
              <div className={styles.component60Child1} />
              <div className={styles.component60Child2} />
              <div className={styles.component60Child3} />
              <div className={styles.component60Child4} />
              <div className={styles.component60Child5} />
              <div className={styles.component60Child6} />
              <div className={styles.mon}>Mon</div>
              <div className={styles.div}>100</div>
              <div className={styles.div1}>60</div>
              <div className={styles.div2}>80</div>
              <div className={styles.div3}>0</div>
              <div className={styles.div4}>20</div>
              <div className={styles.div5}>40</div>
              <div className={styles.tue}>Tue</div>
              <div className={styles.wed}>Wed</div>
              <div className={styles.thu}>Thu</div>
              <div className={styles.fri}>Fri</div>
              <div className={styles.sat}>Sat</div>
              <div className={styles.sun}>Sun</div>
            </div>
            <div className={styles.instanceParent}>
              <div className={styles.rectangleParent2}>
                <div className={styles.component233Child} />
                <div className={styles.ioniq5Group}>
                  <div className={styles.tag}>IONIQ 5</div>
                  <div className={styles.parent}>
                    <div className={styles.div6}>$44,500</div>
                    <div className={styles.price}>Price</div>
                    <div className={styles.component1081}>
                      <div className={styles.button}>BUY</div>
                    </div>
                  </div>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/viva/vector-6.svg"
                  />
                  <div className={styles.tag}>Tag</div>
                </div>
                <div className={styles.instanceGroup}>
                  <div className={styles.ioniq5Wrapper}>
                    <div className={styles.ioniq52}>IONIQ5</div>
                  </div>
                  <div className={styles.ioniq5Container}>
                    <div className={styles.ioniq52}>Electric</div>
                  </div>
                  <div className={styles.ioniq5Frame}>
                    <div className={styles.ioniq52}>Sliver</div>
                  </div>
                </div>
              </div>
              <div className={styles.ioniq55}>IONIQ5</div>
              <div className={styles.electric}>Electric</div>
              <div className={styles.sliver}>Sliver</div>
            </div>
            <div className={styles.component113}>
              <div className={styles.component113Child} />
              <img
                className={styles.image1Icon}
                alt=""
                src="/viva/image-1@2x.png"
              />
              <img
                className={styles.iconMore}
                alt=""
                src="/viva/icon-more.svg"
              />
              <div className={styles.div7}>1234 5678 9010 1256</div>
              <div className={styles.cardholderName}>Cardholder name</div>
              <div className={styles.emilyClarck}>Emily Clarck</div>
              <div className={styles.div8}>18/10/2026</div>
              <div className={styles.expireDate}>Expire Date</div>
            </div>
            <img
              className={styles.groupChild6}
              alt=""
              src="/viva/group-946.svg"
            />
            <div className={styles.component59}>
              <div className={styles.div9}>156</div>
              <div className={styles.label}>Label</div>
              <div className={styles.rectangleParent3}>
                <div className={styles.instanceItem} />
                <div className={styles.new}>NEW</div>
              </div>
            </div>
            <div className={styles.component234}>
              <div className={styles.component50Inner}>
                <div className={styles.component233Child} />
                <div className={styles.startTime}>Start time</div>
                <div className={styles.div10}>09:30</div>
                <div className={styles.div11}>18:30</div>
                <div className={styles.div12}>~</div>
                <div className={styles.endTime}>End time</div>
                <img
                  className={styles.groupChild8}
                  alt=""
                  src="/viva/vector-154.svg"
                />
                <div className={styles.notificationTime}>Notification time</div>
                <img
                  className={styles.iconEdit}
                  alt=""
                  src="/viva/icon-edit.svg"
                />
              </div>
              <div className={styles.toogleDefaultChecked}>
                <div className={styles.toogleDefaultCheckedChild} />
                <div className={styles.toogleDefaultCheckedItem} />
              </div>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.frameWrapper2}>
                <div className={styles.groupParent2}>
                  <div className={styles.dennisGreenParent}>
                    <div className={styles.dennisGreen}>Dennis Green</div>
                    <div className={styles.today1235Pm}>Today 12:35 pm</div>
                    <img
                      className={styles.avatarRoundIcon}
                      alt=""
                      src="/viva/avatar-round.svg"
                    />
                  </div>
                  <img
                    className={styles.iconMore1}
                    alt=""
                    src="/viva/icon-more1.svg"
                  />
                </div>
              </div>
              <img
                className={styles.frameChild23}
                alt=""
                src="/viva/vector-7.svg"
              />
              <div className={styles.theCarHasGoodQualityParent}>
                <div className={styles.theCarHas}>
                  The car has good quality!
                </div>
                <div className={styles.groupParent3}>
                  <div className={styles.chatParent}>
                    <img
                      className={styles.chatIcon}
                      alt=""
                      src="/viva/chat.svg"
                    />
                    <div className={styles.div13}>1</div>
                  </div>
                  <div className={styles.heartEmptyParent}>
                    <img
                      className={styles.chatIcon}
                      alt=""
                      src="/viva/heart-empty.svg"
                    />
                    <div className={styles.div13}>1</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className={styles.groupChild9}
              alt=""
              src="/viva/group-4374.svg"
            />
          </div>
          <div className={styles.frameChild24} />
          <div className={styles.frameChild25} />
        </div>
        <div className={styles.image785} />
        <div className={styles.groupContainer}>
          <div className={styles.groupDiv}>
            <img
              className={styles.groupIcon}
              alt=""
              src="/viva/group-4358@2x.png"
            />
            <div className={styles.allTheServiceModulesForYoParent}>
              <div className={styles.allTheServiceContainer}>
                <b>{`All the service modules for your business are ready `}</b>
                <i className={styles.i}>!</i>
              </div>
              <div className={styles.bringYourEnvisioned}>
                Bring your envisioned business to life by combining service
                modules.
              </div>
            </div>
          </div>
          <div className={styles.vectorParent}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/viva/rectangle-24106.svg"
            />
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
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="/viva/mask-group.svg"
            />
            <div className={styles.wellStructuredDesignSysteParent}>
              <b className={styles.wellStructuredDesignContainer}>
                <p className={styles.wellStructured}>{`Well-structured `}</p>
                <p className={styles.reactNative}> design system</p>
              </b>
              <div className={styles.designSystemBasedModulesContainer}>
                <p
                  className={styles.reactNative}
                >{`Design system-based modules `}</p>
                <p
                  className={styles.reactNative}
                >{`    make customization easy to match `}</p>
                <p className={styles.reactNative}> your brand style.</p>
              </div>
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupChild1} />
            <div className={styles.buildFasterWithContainer}>
              <p className={styles.reactNative}>Build faster</p>
              <p className={styles.reactNative}>with VIVA UI</p>
            </div>
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild2} />
            <img
              className={styles.maskGroupIcon1}
              alt=""
              src="/viva/mask-group1.svg"
            />
            <div className={styles.eastToImplementParent}>
              <b className={styles.eastToImplement}>East to implement</b>
              <div className={styles.theFrameworkIs}>
                The framework is delivered on a component-by-component basis,
                allowing you to quickly build services by mixing and matching
                the features you want.
              </div>
            </div>
          </div>
          <img
            className={styles.groupChild3}
            alt=""
            src="/viva/group-4364.svg"
          />
          <div className={styles.vectorGroup}>
            <img
              className={styles.groupChild4}
              alt=""
              src="/viva/rectangle-24105.svg"
            />
            <div className={styles.frameWrapper}>
              <div className={styles.multiOsSupportParent}>
                <b className={styles.multiOsSupport}>Multi-OS support</b>
                <div className={styles.oneSourceTo}>
                  One source to support iOS, AOS. Easily deploy services up to
                  date, reducing resources for operations.
                </div>
              </div>
            </div>
            <img
              className={styles.frameIcon}
              alt=""
              src="/viva/frame-4365.svg"
            />
          </div>
        </div>
        <div className={styles.vivaUiInner}>
          <div className={styles.quicklyTurnYourDreamServicParent}>
            <div className={styles.reactNativeUiContainer}>
              <p className={styles.quicklyTurnYour}>
                Quickly turn your dream service
              </p>
              <p className={styles.reactNative}>into a reality with VIVA UI</p>
            </div>
            <div className={styles.getInTouchContainer}>
              <div className={styles.getInTouch1}>Get in touch</div>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.layer1Parent}>
            <img className={styles.layer1Icon} alt="" src="/viva/layer-1.svg" />
            <div className={styles.wondermoveSpinOffOfHyundaiParent}>
              <div className={styles.wondermoveSpinOffOf}>
                wondermove Spin-off of Hyundai Motor Company
              </div>
              <div className={styles.wondermoveIncBusinessContainer}>
                <p className={styles.reactNative}>wondermove Inc.</p>
                <p className={styles.reactNative}>
                  Business Registration Number: 518-81-01644
                </p>
                <p className={styles.reactNative}>
                  Address: 2F, 104, Nonhyeon-ro 27-gil, Seocho-gu, Seoul,
                  Republic of Korea
                </p>
                <p className={styles.reactNative}>
                  Use Inquiries: hawkeye@wondermove.net
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VIVAUI;
