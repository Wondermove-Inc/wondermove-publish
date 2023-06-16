import React, { useEffect, useState } from "react";
import styles from "../pages/1920_desktop/styles.module.css";
import { Grid, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";
import { height } from "@mui/system";

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
    gap: "28px",
    height: "100%",
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
    width: "55%",
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

  whatsIncluded: {
    position: "relative",
    lineHeight: "32px",
    fontWeight: "600",
    display: "inline-block",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "start",
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
    [theme.breakpoints.down("lg")]: {},
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
});
const classes = useStyles(theme);

const SolutionCost = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [selectedItem, setSelectedItem] = useState(2);

  const handleClick1 = () => {
    if (!isHovered1) {
      setSelectedItem(0);
    }
  };

  const handleClick2 = () => {
    if (!isHovered2) {
      setSelectedItem(0);
    }
  };

  const handleClick3 = () => {
    if (!isHovered3) {
      setSelectedItem(0);
    }
  };

  const handleClick4 = () => {
    if (!isHovered4) {
      setSelectedItem(0);
    }
  };

  const handleClick5 = () => {
    if (!isHovered5) {
      setSelectedItem(0);
    }
  };

  return (
    // <div className={styles.frameWrapper4}>
    <Grid container sx={classes.frameWrapper4}>
      {/* <div className={styles.frameWrapper4}> */}
      <div
        className={`${
          isHovered1 ? styles.frameParent28 : styles.frameParent26
        } ${selectedItem === 0 ? styles.frameParent28 : styles.frameParent26}`}
        onMouseEnter={() => {
          setIsHovered1(true);
          setSelectedItem(0);
        }}
        onMouseLeave={() => {
          setIsHovered1(false);
        }}
        onClick={() => {
          setSelectedItem(0), handleClick1;
        }}
      >
        <Grid container sx={classes.freeParent}>
          {/* <div className={styles.freeParent}> */}
          <div className={styles.pricing}>Free</div>
          <div className={styles.frameParent29}>
            {/* <div className={styles.xVcpuParent}> */}
            <Grid container sx={classes.xVcpuParent}>
              <div className={styles.xVcpu}>$0</div>
              <div className={styles.noMonthlyFees}>No monthly fees</div>
            </Grid>
            {/* </div> */}
            {/* <div className={styles.billedAnnuallyOrContainer}>{` `}</div> */}
          </div>
          <Grid container sx={classes.frameChild32}>
            {/* <div className={styles.frameChild32} /> */}
          </Grid>
          <div className={styles.whatsIncludedParent}>
            {/* <div className={styles.whatsIncluded}> */}
            <Grid container sx={classes.whatsIncluded}>
              What’s included
            </Grid>
            {/* </div> */}
            <Grid container sx={classes.upTo10Container}>
              {/* <div className={styles.upTo10Container}> */}
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
              {/* </div> */}
            </Grid>
          </div>
          {/* </div> */}
        </Grid>
      </div>
      <div
        className={`${
          isHovered2 ? styles.frameParent28 : styles.frameParent26
        } ${selectedItem === 1 ? styles.frameParent28 : styles.frameParent26}`}
        // onMouseEnter={() => setIsHovered2(true)}
        onMouseEnter={() => {
          setIsHovered2(true);
          setSelectedItem(1);
        }}
        onMouseLeave={() => setIsHovered2(false)}
        // onMouseLeave={() => {
        //   setIsHovered2(false);
        //   setSelectedItem(1);
        // }}
        // onClick={() => setSelectedItem(1)}
        onClick={() => {
          setSelectedItem(1), handleClick2;
        }}
      >
        <Grid container sx={classes.freeParent}>
          {/* <div className={styles.freeParent}> */}
          <div className={styles.pricing}>Plus</div>
          <div className={styles.frameParent29}>
            {/* <div className={styles.xVcpuParent}> */}
            <Grid container sx={classes.xVcpuParent}>
              <div className={styles.xVcpu}>$1,500</div>
              <div className={styles.noMonthlyFees}>per month</div>
            </Grid>
            {/* </div> */}
            <div className={styles.billedAnnuallyOrContainer1}>
              <p className={styles.Billed}>
                Billed annually or $1,990 month-to-month
              </p>
            </div>
          </div>
          <div className={styles.frameChild32} />
          <div className={styles.whatsIncludedParent}>
            <Grid container sx={classes.whatsIncluded}>
              {/* <div className={styles.whatsIncluded}> */}
              All Free features, plus
              {/* </div> */}
            </Grid>
            <Grid container sx={classes.upTo10Container}>
              {/* <div className={styles.upTo10Container}> */}
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
              {/* <p className={styles.upTo10ContainerText}>
              </p> */}
              {/* </div> */}
            </Grid>
          </div>
          {/* </div> */}
        </Grid>
      </div>
      <div
        className={`${
          isHovered3 ? styles.frameParent28 : styles.frameParent26
        } ${selectedItem === 2 ? styles.frameParent28 : styles.frameParent26}`}
        // onMouseEnter={() => setIsHovered3(true)}
        onMouseEnter={() => {
          setIsHovered3(true);
          setSelectedItem(2);
        }}
        onMouseLeave={() => setIsHovered3(false)}
        // onMouseLeave={() => {
        //   setIsHovered3(false);
        //   setSelectedItem(2);
        // }}
        // onClick={() => setSelectedItem(2)}
        onClick={() => {
          setSelectedItem(2), handleClick3;
        }}
      >
        <Grid container sx={classes.freeParent}>
          {/* <div className={styles.freeParent}> */}
          <div className={styles.pricing}>Pro</div>
          <div className={styles.frameParent29}>
            {/* <div className={styles.xVcpuParent}> */}
            <Grid container sx={classes.xVcpuParent}>
              <div className={styles.xVcpu}>$1,500 + $12 x vCPU</div>
              <div className={styles.perMonth4}>per month</div>
            </Grid>
            {/* </div> */}
            <div className={styles.billedAnnuallyOrContainer1}>
              <p className={styles.Billed}>
                Billed annually or $1,990 month-to-month
              </p>
            </div>
          </div>
          <div className={styles.frameChild32} />
          <div className={styles.whatsIncludedParent}>
            <Grid container sx={classes.whatsIncluded}>
              {/* <div className={styles.whatsIncluded}> */}
              All Plus features, plus
              {/* </div> */}
            </Grid>

            <Grid container sx={classes.upTo10ContainerText}>
              {/* <div className={styles.upTo10Container}> */}
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
              {/* </div> */}
            </Grid>
          </div>
        </Grid>
        {/* </div> */}
      </div>
      <div
        className={`${
          isHovered4 ? styles.frameParent28 : styles.frameParent26
        } ${selectedItem === 3 ? styles.frameParent28 : styles.frameParent26}`}
        // onMouseEnter={() => setIsHovered4(true)}
        onMouseEnter={() => {
          setIsHovered4(true);
          setSelectedItem(3);
        }}
        onMouseLeave={() => setIsHovered4(false)}
        // onMouseLeave={() => {
        //   setIsHovered4(false);
        //   setSelectedItem(3);
        // }}
        // onClick={() => setSelectedItem(3)}
        onClick={() => {
          setSelectedItem(3), handleClick4;
        }}
      >
        <Grid container sx={classes.freeParent}>
          {/* <div className={styles.freeParent}> */}
          <div className={styles.pricing}>Business</div>
          <div className={styles.frameParent30}>
            {/* <div className={styles.xVcpuParent}> */}
            <Grid container sx={classes.xVcpuParent}>
              <div className={styles.xVcpu1}>$13,500 + $10 x vCPU</div>
              <div className={styles.noMonthlyFees}>per month</div>
            </Grid>
            {/* </div> */}
            <div className={styles.billedAnnuallyOrContainer1}>
              <p className={styles.Billed}>
                Billed annually or $16,990 month-to-month
              </p>
            </div>
          </div>
          <div className={styles.frameChild32} />
          <div className={styles.whatsIncludedParent}>
            <Grid container sx={classes.whatsIncluded}>
              {/* <div className={styles.whatsIncluded}> */}
              All Pro features, plus
              {/* </div> */}
            </Grid>
            <Grid container sx={classes.upTo10ContainerText}>
              {/* <div className={styles.upTo10Container}> */}
              <Grid container sx={classes.upTo10ContainerText}>
                <span className={styles.span1}>✓</span>
                <span> 1,001 - Unlimited vCPU</span>
              </Grid>
              {/* <p className={styles.upTo10ContainerText}></p> */}
              <Grid container sx={classes.upTo10ContainerText}>
                {" "}
                <span className={styles.span1}>✓</span>
                <span> Unlimited Cluster</span>
              </Grid>
              {/* <p className={styles.upTo10ContainerText}></p> */}
              <Grid container sx={classes.upTo10ContainerText}>
                <span className={styles.span1}>✓</span>
                <span> Installation support</span>
              </Grid>
              {/* <p className={styles.upTo10ContainerText}></p> */}
              <Grid container sx={classes.upTo10ContainerText}>
                <span className={styles.span1}>✓</span>
                <span> Issue support</span>
              </Grid>
              {/* <p className={styles.upTo10ContainerText}></p> */}
              {/* </div> */}
            </Grid>
          </div>
          {/* </div> */}
        </Grid>
      </div>
      <div
        className={`${
          isHovered5 ? styles.frameParent28 : styles.frameParent26
        } ${selectedItem === 4 ? styles.frameParent28 : styles.frameParent26}`}
        // onMouseEnter={() => setIsHovered5(true)}
        onMouseEnter={() => {
          setIsHovered5(true);
          setSelectedItem(4);
        }}
        onMouseLeave={() => setIsHovered5(false)}
        // onMouseLeave={() => {
        //   setIsHovered5(false);
        //   setSelectedItem(4);
        // }}
        // onClick={() => setSelectedItem(4)}
        onClick={() => {
          setSelectedItem(4), handleClick5;
        }}
      >
        <Grid container sx={classes.freeParent}>
          {/* <div className={styles.enterpriseParent}> */}
          <div className={styles.enterprise}>Enterprise</div>
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
              Full platform monitoring with cross-project insights and optional
              Premium Customer Success.
              {/* </div> */}
            </Grid>
            {/* </div> */}
          </Grid>
          <div className={styles.frameChild32} />
          <div className={styles.whatsIncludedParent}>
            <Grid container sx={classes.whatsIncluded}>
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
    // </div>
  );
};

export default SolutionCost;
