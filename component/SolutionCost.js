import React, { useEffect, useState } from "react";
import styles from "../pages/Skuber/styles.module.css";
import { Grid, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";
import { height } from "@mui/system";
import Image from "next/image";

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
  frameWrapper4: {
    display: "flex",
    fontSize: "42px",
    top: "16px",
    left: "0",
    maxWidth: "1440px",
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
      alignContent: "center",
      justifyContent: "center",
      gap: "32px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignContent: "center",
      justifyContent: "center",
      gap: "60px",
    },
  },
  freeParent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "20px",
    height: "100%",
    padding: "32px 24px",
    [theme.breakpoints.down("xl")]: {
      padding: "32px 24px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "32px 16px",
    },
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
      justifyContent: "center",
      padding: "24px 200px",
    },
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      justifyContent: "center",
      padding: "24px 24px 40px",
    },
  },
  xVcpuParent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: "60px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      justifyContent: "center",
    },
  },
  xVcpuParent1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      justifyContent: "center",
    },
  },
  frameParent31: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "12px",
    color: "#888",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      justifyContent: "center",
    },
  },
  fullPlatformMonitoring: {
    position: "relative",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "20px",
    display: "inline-block",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  frameChild32: {
    alignSelf: "stretch",
    position: "relative",
    borderTop: "1px solid #fff",
    boxSizing: "border-box",
    height: "1px",
    opacity: "0.1",
    width: "100%",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      alignSelf: "center",
    },
    [theme.breakpoints.down("sm")]: {
      alignSelf: "center",
    },
  },

  whatsIncludedParent: {
    position: "relative",
    fontSize: "16px",
    lineHeight: "32px",
    fontWeight: "600",
    display: "flex",
    textAlign: "start",
    justifyContent: "flex-start",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      lineHeight: "24px",
      justifyContent: "flex-start",
    },
  },
  upTo10Container: {
    position: "relative",
    fontSize: "14px",
    lineHeight: "32px",
    fontWeight: "500",
    whiteSpace: "pre-wrap",
    display: "inline-block",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexWrap: "wrap",
    },
    [theme.breakpoints.down("sm")]: {},
  },
  upTo10ContainerText: {
    margin: "0",
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "32px",
    letterSpacing: "0px",
    textAlign: "left",
    color: "#fff",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      fontSize: "13px",
    },
    [theme.breakpoints.down("md")]: {
      flexBasis: "50%",
      boxSizing: "border-box",
      // fontSize: "1.548673vw",
      fontSize: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      flexBasis: "100%",
      boxSizing: "border-box",
    },
  },
  pricingTit: {
    fontSize: "18px",
    lineHeight: "32px",
    fontWeight: "500",
    alignItems: "center",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      lineHeight: "28px",
      alignItems: "center",
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      lineHeight: "28px",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  xVcpu1: {
    fontSize: "32px",
    fontWeight: "600",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      fontSize: "28px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  },
  xVcpu2: {
    fontSize: "21px",
    fontWeight: "600",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  },
  noMonthlyFees: {
    fontSize: "14px",
    lineHeight: "17px",
    fontWeight: "500",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
      lineHeight: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      lineHeight: "15px",
    },
  },
  noMonthlyFeesOne: {
    fontSize: "14px",
    lineHeight: "17px",
    fontWeight: "500",
    paddingBottom: "67px",
    [theme.breakpoints.down("xl")]: {
      paddingBottom: "67px",
    },
    [theme.breakpoints.down("lg")]: {
      paddingBottom: "70px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
      lineHeight: "15px",
      paddingBottom: "0",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      lineHeight: "15px",
      paddingBottom: "0",
    },
  },
  billedAnnuallyOrContainer1: {
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: "500",
    textAlign: "left",
    height: "50px",
    [theme.breakpoints.down("xl")]: {
      height: "50px",
    },
    [theme.breakpoints.down("lg")]: {
      height: "50px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
      lineHeight: "15px",
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      lineHeight: "15px",
      textAlign: "center",
    },
  },
});
const classes = useStyles(theme);

const SolutionCost = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  // const [selectedItem, setSelectedItem] = useState(2);
  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.innerWidth > 1024;
      if (isLargeScreen) {
        setSelectedItem(2);
      } else {
        setSelectedItem(null);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onClickItem = (index) => setSelectedItem(index);

  return (
    <div>
      <Grid container sx={classes.frameWrapper4}>
        {/* <div className={styles.frameWrapper4}> */}

        <div
          className={`${
            selectedItem === 0 || isHovered1
              ? styles.frameParent28
              : styles.frameParent26
          }`}
          onMouseEnter={() => {
            setIsHovered1(true);
            setSelectedItem(null);
          }}
          onMouseLeave={() => setIsHovered1(false)}
          onClick={() => onClickItem(0)}
        >
          <Grid container sx={classes.freeParent}>
            {/* <div className={styles.freeParent}> */}
            <div className={styles.pricingTit}>
              <Grid container sx={classes.pricingTit}>
                Free
              </Grid>
            </div>
            <div className={styles.frameParent30}>
              {/* <div className={styles.xVcpuParent}> */}
              <Grid container sx={classes.xVcpuParent1}>
                <div className={styles.xVcpu1}>
                  <Grid container sx={classes.xVcpu2}>
                    $0
                  </Grid>
                </div>
                <div className={styles.noMonthlyFees}>
                  <Grid container sx={classes.noMonthlyFeesOne}>
                    <Grid container sx={classes.noMonthlyFees}>
                      No monthly fees
                    </Grid>
                  </Grid>
                </div>
              </Grid>

              {/* </div> */}
              {/* <div className={styles.billedAnnuallyOrContainer}>{` `}</div> */}
            </div>
            <Grid container sx={classes.frameChild32}>
              {/* <div className={styles.frameChild32} /> */}
            </Grid>
            <div className={styles.whatsIncludedParent}>
              <div className={styles.whatsIncluded}>
                <Grid container sx={classes.whatsIncludedParent}>
                  What’s included
                </Grid>
              </div>
              <div>
                <Grid container sx={classes.upTo10Container}>
                  <Grid container sx={classes.upTo10ContainerText}>
                    <span className={styles.span1}>✓</span>
                    <span> Up to 10 vCPU</span>
                  </Grid>
                  <p className={styles.upTo10ContainerText}></p>
                  <Grid container sx={classes.upTo10ContainerText}>
                    {" "}
                    <span className={styles.span1}>✓</span>
                    <span> Cluster only 1</span>
                  </Grid>
                  <p className={styles.upTo10ContainerText}></p>
                  <Grid container sx={classes.upTo10ContainerText}>
                    {" "}
                    <span className={styles.span1}>✓</span>
                    <span> Realtime Monitoring</span>
                  </Grid>
                  <p className={styles.upTo10ContainerText}></p>
                  <Grid container sx={classes.upTo10ContainerText}>
                    {" "}
                    <span className={styles.span1}>✓</span>
                    <span> Legacy Migration tool</span>
                  </Grid>
                  <p className={styles.upTo10ContainerText}></p>
                  <Grid container sx={classes.upTo10ContainerText}>
                    {" "}
                    <span className={styles.span1}>✓</span>
                    <span> Reatime Log viewer</span>
                  </Grid>
                  <p className={styles.upTo10ContainerText}></p>
                  <Grid container sx={classes.upTo10ContainerText}>
                    <span className={styles.span1}>✓</span>
                    <span> Service Flow Mgmt</span>
                  </Grid>
                  <p className={styles.upTo10ContainerText}></p>
                  <Grid container sx={classes.upTo10ContainerText}>
                    {" "}
                    <span className={styles.span1}>✓</span>
                    <span> Service Mesh Mgmt</span>
                  </Grid>
                  <p className={styles.upTo10ContainerText}></p>
                  <Grid container sx={classes.upTo10ContainerText}>
                    <span className={styles.span1}>✓</span>
                    <span> Config-map/Secret Mgmt</span>
                  </Grid>
                  <p className={styles.upTo10ContainerText}></p>
                </Grid>
              </div>
            </div>
            {/* </div> */}
          </Grid>
        </div>
        <div
          className={`${
            selectedItem == 1 || isHovered2
              ? styles.frameParent28
              : styles.frameParent26
          }`}
          // onMouseEnter={() => setIsHovered2(true)}
          onMouseEnter={() => {
            setIsHovered2(true);
            setSelectedItem(null);
          }}
          // onMouseLeave={() => setIsHovered2(false)}
          onMouseLeave={() => setIsHovered2(false)}
          onClick={() => onClickItem(1)}
        >
          <Grid container sx={classes.freeParent}>
            {/* <div className={styles.freeParent}> */}

            <div className={styles.pricingTit}>
              <Grid container sx={classes.pricingTit}>
                Plus
              </Grid>
              {/* <Image
                className={styles.image803Icon}
                alt=""
                src="/1920_desktop/free-trial.png"
                width={80}
                height={30}
              /> */}
            </div>
            <div className={styles.frameParent30}>
              <Grid container sx={classes.xVcpuParent1}>
                <div
                  className={styles.xVcpu1}
                  // style={{ textDecoration: "line-through" }}
                >
                  <Grid container sx={classes.xVcpu2}>
                    $300 x vCPU
                  </Grid>
                </div>
                <div className={styles.noMonthlyFees}>
                  <Grid container sx={classes.noMonthlyFeesOne}>
                    <Grid container sx={classes.noMonthlyFees}>
                      per month
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <div className={styles.billedAnnuallyOrContainer1}>
                {/* <Grid container sx={classes.billedAnnuallyOrContainer1}>
                  Billed annually or $1,990 month-to-month
                </Grid> */}
              </div>
            </div>
            <div className={styles.frameChild32} />
            <div className={styles.whatsIncludedParent}>
              <div className={styles.whatsIncluded}>
                <Grid container sx={classes.whatsIncludedParent}>
                  All Free features, plus
                </Grid>
              </div>
              <div>
                <Grid container sx={classes.upTo10Container}>
                  <Grid container sx={classes.upTo10ContainerText}>
                    <span className={styles.span1}>✓</span>
                    <span> 11 - 100 vCPU</span>
                  </Grid>
                  {/* <p className={styles.upTo10ContainerText}>
              </p> */}
                  <Grid container sx={classes.upTo10ContainerText}>
                    <span className={styles.span1}>✓</span>
                    <span> Unlimited Cluster</span>
                  </Grid>
                  {/* <p className={styles.upTo10ContainerText}>
                
              </p> */}

                  <Grid container sx={classes.upTo10ContainerText}>
                    <span className={styles.span1}>✓</span>
                    <span> Cost Tracing</span>
                  </Grid>
                  {/* <p className={styles.upTo10ContainerText}>
                
              </p> */}

                  <Grid container sx={classes.upTo10ContainerText}>
                    <span className={styles.span1}>✓</span>
                    <span> Account management</span>
                  </Grid>
                  {/* <p className={styles.upTo10ContainerText}>
                
              </p> */}

                  <Grid container sx={classes.upTo10ContainerText}>
                    <span className={styles.span1}>✓</span>
                    <span> Service log viewer</span>
                  </Grid>
                  {/* <p className={styles.upTo10ContainerText}>
                
              </p> */}

                  <Grid container sx={classes.upTo10ContainerText}>
                    <span className={styles.span1}>✓</span>
                    <span> Unlimited members</span>
                  </Grid>

                  <Grid container sx={classes.upTo10ContainerText}>
                    <span className={styles.span1}>✓</span>
                    <span> Free trial for 1 month</span>
                  </Grid>
                  {/* <p className={styles.upTo10ContainerText}>
              </p> */}
                </Grid>
              </div>
            </div>
            {/* </div> */}
          </Grid>
        </div>
        <div
          className={`${
            selectedItem === 2 || isHovered3
              ? styles.frameParent28
              : styles.frameParent26
          }`}
          // onMouseEnter={() => setIsHovered3(true)}
          onMouseEnter={() => {
            setIsHovered3(true);
            setSelectedItem(null);
          }}
          onMouseLeave={() => setIsHovered3(false)}
          onClick={() => onClickItem(2)}
        >
          <Grid container sx={classes.freeParent}>
            {/* <div className={styles.freeParent}> */}

            <div className={styles.pricingTit}>
              <Grid container sx={classes.pricingTit}>
                Pro
              </Grid>
            </div>
            <div className={styles.frameParent30}>
              {/* <Grid container sx={classes.xVcpuParent}>
                <div className={styles.xVcpu1}>
                  <Grid container sx={classes.xVcpu2}>
                    $40 x vCPU
                  </Grid>
                </div>
                <div className={styles.noMonthlyFees}>
                  <Grid container sx={classes.noMonthlyFeesOne}>
                    <Grid container sx={classes.noMonthlyFees}>
                      per month
                    </Grid>
                  </Grid>
                </div>
              </Grid> */}

              <Grid container sx={classes.xVcpuParent1}>
                <div className={styles.xVcpu1}>
                  <Grid container sx={classes.xVcpu2}>
                    $240 x vCPU
                  </Grid>
                </div>
                <div className={styles.noMonthlyFees}>
                  <Grid container sx={classes.noMonthlyFeesOne}>
                    <Grid container sx={classes.noMonthlyFees}>
                      per month
                    </Grid>
                  </Grid>
                </div>
              </Grid>

              <div className={styles.billedAnnuallyOrContainer1}>
                {/* <Grid container sx={classes.billedAnnuallyOrContainer1}>
                  Billed annually or $1,990 month-to-month
                </Grid> */}
              </div>
            </div>
            <div className={styles.frameChild32} />
            <div className={styles.whatsIncludedParent}>
              <div className={styles.whatsIncluded}>
                <Grid container sx={classes.whatsIncludedParent}>
                  All Plus features, plus
                </Grid>
              </div>
              <div>
                <Grid container sx={classes.upTo10ContainerText}>
                  <Grid container sx={classes.upTo10ContainerText}>
                    {" "}
                    <span className={styles.span1}>✓</span>
                    <span> 101 - 1,000 vCPU</span>
                  </Grid>
                  {/* <p className={styles.upTo10ContainerText}></p> */}
                  <Grid container sx={classes.upTo10ContainerText}>
                    <span className={styles.span1}>✓</span>
                    <span> Unlimited Cluster</span>
                  </Grid>
                  {/* <p className={styles.upTo10ContainerText}></p> */}
                  <Grid container sx={classes.upTo10ContainerText}>
                    <span className={styles.span1}>✓</span>
                    <span> Cost Tracing</span>
                  </Grid>
                  {/* <p className={styles.upTo10ContainerText}></p> */}
                  <Grid container sx={classes.upTo10ContainerText}>
                    <span className={styles.span1}>✓</span>
                    <span> Account management</span>
                  </Grid>
                  {/* <p className={styles.upTo10ContainerText}></p> */}
                  <Grid container sx={classes.upTo10ContainerText}>
                    {" "}
                    <span className={styles.span1}>✓</span>
                    <span> Service log viewer</span>
                  </Grid>
                  {/* <p className={styles.upTo10ContainerText}></p> */}
                  <Grid container sx={classes.upTo10ContainerText}>
                    <span className={styles.span1}>✓</span>
                    <span> Unlimited members</span>
                  </Grid>
                  {/* <p className={styles.upTo10ContainerText}></p> */}
                </Grid>
              </div>
            </div>
          </Grid>
          {/* </div> */}
        </div>

        <div
          className={`${
            selectedItem === 4 || isHovered5
              ? styles.frameParent28
              : styles.frameParent26
          }`}
          // onMouseEnter={() => setIsHovered5(true)}
          onMouseEnter={() => {
            setIsHovered5(true);
            setSelectedItem(null);
          }}
          onMouseLeave={() => setIsHovered5(false)}
          onClick={() => onClickItem(4)}
        >
          <Grid container sx={classes.freeParent}>
            {/* <div className={styles.enterpriseParent}> */}

            <div className={styles.enterprise}>
              <Grid container sx={classes.pricingTit}>
                Enterprise
              </Grid>
            </div>
            <Grid container sx={classes.frameParent31}>
              {/* <div className={styles.frameParent31}> */}
              <img
                className={styles.frameChild36}
                alt=""
                src="/1920_desktop/frame-3203.svg"
              />
              <div className={styles.contactSalesFor}>
                Contact Sales for pricing
              </div>
              <Grid container sx={classes.fullPlatformMonitoring}>
                {/* <div className={styles.fullPlatformMonitoring}> */}
                Full platform monitoring with cross-project insights and
                optional Premium Customer Success.
                {/* </div> */}
              </Grid>
              {/* </div> */}
            </Grid>
            <div className={styles.frameChild32} />
            <div className={styles.whatsIncludedParent}>
              <Grid container sx={classes.whatsIncludedParent}>
                All Business features, plus
              </Grid>
              <Grid container sx={classes.upTo10ContainerText}>
                {/* <div className={styles.upTo10Container}> */}
                <Grid container sx={classes.upTo10ContainerText}>
                  <span className={styles.span1}>✓</span>
                  <span> Unlimited vCPU</span>
                </Grid>
                {/* <p className={styles.upTo10ContainerText}></p> */}
                <Grid container sx={classes.upTo10ContainerText}>
                  <span className={styles.span1}>✓</span>
                  <span> Unlimited Cluster</span>
                </Grid>
                {/* <p className={styles.upTo10ContainerText}></p> */}
                <Grid container sx={classes.upTo10ContainerText}>
                  {" "}
                  <span className={styles.span1}>✓</span>
                  <span> Installation support</span>
                </Grid>
                {/* <p className={styles.upTo10ContainerText}></p> */}
                <Grid container sx={classes.upTo10ContainerText}>
                  <span className={styles.span1}>✓</span>
                  <span> Issue support</span>
                </Grid>
                {/* <p className={styles.upTo10ContainerText}></p> */}
                <Grid container sx={classes.upTo10ContainerText}>
                  <span className={styles.span1}>✓</span>
                  <span> Custom Dashboard</span>
                </Grid>
                {/* <p className={styles.upTo10ContainerText}></p> */}
                <Grid container sx={classes.upTo10ContainerText}>
                  <span className={styles.span1}>✓</span>
                  <span> Cloud Strategy Consulting</span>
                </Grid>
                {/* <p className={styles.upTo10ContainerText}></p> */}
                {/* </div> */}
              </Grid>
            </div>
            {/* </div> */}
          </Grid>
        </div>
        {/* </div> */}
      </Grid>
    </div>
  );
};

export default SolutionCost;
