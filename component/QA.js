import React, { useEffect, useRef, useState } from "react";
//import { FaPlus, FaMinus } from "react-icons/fa";
import styles from "../pages/Skuber/styles.module.css";

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
  paymentOptions: {
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
  solutionForYour: {
    fontSize: "16px",
    lineHeight: "32px",
    fontWeight: "500",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "24px",
    },
  },
  frequentlyAskedQuestionsParent: {
    gap: "80px",
    justifyContent: "center",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      gap: "60px",
    },
  },
});
const classes = useStyles(theme);

const QA = () => {
  const [isContentVisible1, setIsContentVisible1] = useState(false);
  const [isContentVisible2, setIsContentVisible2] = useState(false);
  const [isContentVisible3, setIsContentVisible3] = useState(false);
  const [isContentVisible4, setIsContentVisible4] = useState(false);
  const [isContentVisible5, setIsContentVisible5] = useState(false);
  const [isContentVisible6, setIsContentVisible6] = useState(false);

  const toggleContent1 = () => {
    setIsContentVisible1(!isContentVisible1);
  };
  const toggleContent2 = () => {
    setIsContentVisible2(!isContentVisible2);
  };
  const toggleContent3 = () => {
    setIsContentVisible3(!isContentVisible3);
  };
  const toggleContent4 = () => {
    setIsContentVisible4(!isContentVisible4);
  };
  const toggleContent5 = () => {
    setIsContentVisible5(!isContentVisible5);
  };
  const toggleContent6 = () => {
    setIsContentVisible6(!isContentVisible6);
  };

  return (
    <div className={styles.frequentlyAskedQuestionsParent}>
      <Grid container sx={classes.frequentlyAskedQuestionsParent}>
        <div className={styles.globallyValidatedSolutions}>
          <Grid container sx={classes.globallyValidatedSolutions}>
            Frequently Asked Questions
          </Grid>
        </div>
        <div className={styles.frameParent17}>
          <div
            className={styles.allBusinessFeaturesPlusParent}
            onClick={toggleContent1}
          >
            <div className={styles.paymentOptionsParent}>
              <div className={styles.paymentOptions}>
                <Grid container sx={classes.paymentOptions}>
                  What is Skuber and how can it benefit my organization?
                </Grid>
              </div>
              <img
                className={styles.frameChild20}
                alt=""
                src={
                  isContentVisible1
                    ? "/1920_desktop/minus.svg"
                    : "/1920_desktop/plus.svg"
                }
              />
            </div>

            <Collapse isOpen={isContentVisible1}>
              <div className={styles.preventResourceWasteOnOutWrapper}>
                <div className={styles.solutionForYour}>
                  <Grid container sx={classes.solutionForYour}>
                    <p className={styles.solutionForYour}>
                      {`Skuber is a cloud management service that helps you optimize
                your resource costs and cloud technology utilization. By leveraging eBPF, 
                it protects your systems against unnecessary traffic and DoS attacks, thereby utilization. By leveraging eBPF, 
                it protects your systems against unnecessary traffic and DoS attacks, thereby reducing additional costs. Moreover, it facilitates the
                transition from traditional virtual machines to Kubernetes, zenabling you to decrease your cloud costs by over 40% while
                enhancing efficiency.`}
                    </p>
                  </Grid>
                </div>
              </div>
            </Collapse>
            <div className={styles.lineDiv} />
          </div>

          <div
            className={styles.allBusinessFeaturesPlusParent}
            onClick={toggleContent2}
          >
            <div className={styles.paymentOptionsParent}>
              <div className={styles.paymentOptions}>
                <Grid container sx={classes.paymentOptions}>
                  Does Skuber require specialized knowledge to operate?
                </Grid>
              </div>
              <img
                className={styles.frameChild20}
                alt=""
                src={
                  isContentVisible2
                    ? "/1920_desktop/minus.svg"
                    : "/1920_desktop/plus.svg"
                }
              />
            </div>

            <Collapse isOpen={isContentVisible2}>
              <div className={styles.preventResourceWasteOnOutWrapper}>
                {/* content */}
                <div className={styles.solutionForYour}>
                  <Grid container sx={classes.solutionForYour}>
                    <p className={styles.solutionForYour}>
                      {`No, Skuber is designed to be accessible for all technology levels. 
                      It provides a high-level control UX that can be managed without requiring DevOps expertise, but also offers low-level access for DevOps engineers to monitor and respond to service failures in real-time.`}
                    </p>
                  </Grid>
                </div>
              </div>
            </Collapse>

            <div className={styles.lineDiv} />
          </div>

          <div
            className={styles.allBusinessFeaturesPlusParent}
            onClick={toggleContent3}
          >
            <div className={styles.paymentOptionsParent}>
              <div className={styles.paymentOptions}>
                <Grid container sx={classes.paymentOptions}>
                  How does Skuber ensure cost reduction?
                </Grid>
              </div>
              <img
                className={styles.frameChild20}
                alt=""
                src={
                  isContentVisible3
                    ? "/1920_desktop/minus.svg"
                    : "/1920_desktop/plus.svg"
                }
              />
            </div>

            <Collapse isOpen={isContentVisible3}>
              <div className={styles.preventResourceWasteOnOutWrapper}>
                {/* content */}
                <div className={styles.solutionForYour}>
                  <Grid container sx={classes.solutionForYour}>
                    <p className={styles.solutionForYour}>
                      {`Skuber offers several strategies for cost reduction. It identifies issues and reduces costs with real-time monitoring. Moreover, it provides Kubernetes-based management/monitoring services with innovative technology to cut down cloud costs by leveraging eBPF and Service Mesh. It also saves costs by shifting from peak-based server calculations to a minimum specification method, supporting active parallel scale-up & scale-down, and preventing service failure during emergencies with self-validation services. `}
                    </p>
                  </Grid>
                </div>
              </div>
            </Collapse>

            <div className={styles.lineDiv} />
          </div>
          <div
            className={styles.allBusinessFeaturesPlusParent}
            onClick={toggleContent4}
          >
            <div className={styles.paymentOptionsParent}>
              <div className={styles.paymentOptions}>
                <Grid
                  container
                  sx={classes.globallyValidatedpaymentOptionsSolutions}
                >
                  {`What are the key features of Skuber's service management?`}
                </Grid>
              </div>
              <img
                className={styles.frameChild20}
                alt=""
                src={
                  isContentVisible4
                    ? "/1920_desktop/minus.svg"
                    : "/1920_desktop/plus.svg"
                }
              />
            </div>

            <Collapse isOpen={isContentVisible4}>
              <div className={styles.preventResourceWasteOnOutWrapper}>
                {/* content */}
                <div className={styles.solutionForYour}>
                  <Grid container sx={classes.solutionForYour}>
                    <p className={styles.solutionForYour}>
                      {`Skuber optimizes large-scale service management by enabling you to take control of your services with intelligent monitoring. It provides seamless oversight of the flow between connected services (Microservice aArchitectures) and ensures reliable management of large-scale services.`}
                    </p>
                  </Grid>
                </div>
              </div>
            </Collapse>

            <div className={styles.lineDiv} />
          </div>
          <div
            className={styles.allBusinessFeaturesPlusParent}
            onClick={toggleContent5}
          >
            <div className={styles.paymentOptionsParent}>
              <div className={styles.paymentOptions}>
                <Grid container sx={classes.paymentOptions}>
                  What pricing plans does Skuber offer and what are their
                  features?
                </Grid>
              </div>
              <img
                className={styles.frameChild20}
                alt=""
                src={
                  isContentVisible5
                    ? "/1920_desktop/minus.svg"
                    : "/1920_desktop/plus.svg"
                }
              />
            </div>

            <Collapse isOpen={isContentVisible5}>
              <div className={styles.preventResourceWasteOnOutWrapper}>
                {/* content */}
                <div className={styles.solutionForYour}>
                  <Grid container sx={classes.solutionForYour}>
                    <p
                      className={styles.solutionForYour}
                      style={{ paddingBottom: "20px" }}
                    >
                      {`Skuber offers several pricing tiers, each with its own set of features : `}
                    </p>
                    <br />
                    <p className={styles.solutionForYour}>
                      {`- Free : Includes up to 10 vCPU, one cluster, real-time monitoring, a legacy migration tool, real-time log viewer, service flow management, service mesh management, and config-map/secret management.`}
                    </p>
                    <p className={styles.solutionForYour}>
                      {`- Plus ($1,500/month) : Includes all Free features, plus 11-100 vCPU, unlimited clusters, cost tracing, account management, service log viewer, and unlimited members.`}
                    </p>
                    <p className={styles.solutionForYour}>
                      {`- Pro ($1,500 + $12 x vCPU/month) : Includes all Plus features, plus 101-1,000 vCPU.`}
                    </p>
                    <p className={styles.solutionForYour}>
                      {`- Business ($13,500 + $10 x vCPU/month) : Includes all Pro features, plus 1,001-unlimited vCPU, installation and issue support.`}
                    </p>
                    <p className={styles.solutionForYour}>
                      {`- Enterprise : Includes all Business features, plus unlimited vCPU, unlimited cluster, installation and issue support, custom dashboard, cloud strategy consulting.`}
                    </p>
                  </Grid>
                </div>
              </div>
            </Collapse>

            <div className={styles.lineDiv} />
          </div>
          <div
            className={styles.allBusinessFeaturesPlusParent}
            onClick={toggleContent6}
          >
            <div className={styles.paymentOptionsParent}>
              <div className={styles.paymentOptions}>
                <Grid container sx={classes.paymentOptions}>
                  What measures does Skuber take against DDoS attacks?
                </Grid>
              </div>
              <img
                className={styles.frameChild20}
                alt=""
                src={
                  isContentVisible6
                    ? "/1920_desktop/minus.svg"
                    : "/1920_desktop/plus.svg"
                }
              />
            </div>

            <Collapse isOpen={isContentVisible6}>
              <div className={styles.preventResourceWasteOnOutWrapper}>
                {/* content */}
                <div className={styles.solutionForYour}>
                  <Grid container sx={classes.solutionForYour}>
                    <p className={styles.solutionForYour}>
                      {`Skuber optimizes resource use during DDoS attacks. It prevents resource waste on non-compliant traffic such as DDoS attacks by utilizing eBPF's XDP technology for Linux Kernel control. This means it limits the number of requests you receive from a specific IP address.`}
                    </p>
                  </Grid>
                </div>
              </div>
            </Collapse>

            <div className={styles.lineDiv} />
          </div>
        </div>
      </Grid>
    </div>
  );
};

const Collapse = ({ children, isOpen }) => {
  const ref = useRef(null);
  const [childHeight, setChildHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const childHeightRaw = ref.current.clientHeight;
    const childHeight = `${childHeightRaw / 8}rem`;

    setChildHeight(childHeight);
  }, [isOpen]);

  return (
    <div
      className={styles.collapse}
      style={{
        maxHeight: isOpen ? childHeight : 0,
      }}
    >
      <div ref={ref}>{children}</div>
    </div>
  );
};

export default QA;
