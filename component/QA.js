import React, { useEffect, useRef, useState } from "react";
//import { FaPlus, FaMinus } from "react-icons/fa";
import styles from "../pages/Skuber/styles.module.css";

import { Grid, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n/index";

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
  const { t } = useTranslation();
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
    <I18nextProvider i18n={i18n}>
      <div className={styles.frequentlyAskedQuestionsParent}>
        <Grid container sx={classes.frequentlyAskedQuestionsParent}>
          <div className={styles.globallyValidatedSolutions}>
            <Grid container sx={classes.globallyValidatedSolutions}>
              {t("skuber-page.qa.title")}
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
                    {t("skuber-page.qa.first-qusetion-title")}
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
                        {t("skuber-page.qa.first-qusetion-anwser")}
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
                    {t("skuber-page.qa.second-qusetion-title")}
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
                        {t("skuber-page.qa.second-qusetion-anwser")}
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
                    {t("skuber-page.qa.third-qusetion-title")}
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
                        {t("skuber-page.qa.third-qusetion-anwser")}
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
                    {t("skuber-page.qa.fourth-qusetion-title")}
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
                        {t("skuber-page.qa.fourth-qusetion-anwser")}
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
                    {t("skuber-page.qa.fifth-qusetion-title")}
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
                        {t("skuber-page.qa.fifth-qusetion-anwser-features")}
                      </p>
                      <br />
                      <p className={styles.solutionForYour}>
                        - {t("skuber-page.qa.fifth-qusetion-anwser-free")}
                      </p>
                      <p className={styles.solutionForYour}>
                        - {t("skuber-page.qa.fifth-qusetion-anwser-plus")}
                      </p>
                      <p className={styles.solutionForYour}>
                        - {t("skuber-page.qa.fifth-qusetion-anwser-pro")}
                      </p>
                      <p className={styles.solutionForYour}>
                        - {t("skuber-page.qa.fifth-qusetion-anwser-business")}
                      </p>
                      <p className={styles.solutionForYour}>
                        - {t("skuber-page.qa.fifth-qusetion-anwser-enterprise")}
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
                    {t("skuber-page.qa.sixth-qusetion-title")}
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
                        {t("skuber-page.qa.sixth-qusetion-anwser")}
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
    </I18nextProvider>
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
