import React, { useEffect, useState } from "react";
import styles from "../pages/Skuber/styles.module.css";
import { createTheme } from "@mui/material/styles";
import { Grid, Box } from "@mui/material";
import Logo from "../component/Logo";
import Image from "next/image";
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
  containerFooter: {
    justifyContent: "center",
    padding: "80px 240px",
    borderTop: "1px solid  rgba(255, 255, 255, 0.2)",
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

  footerGroup: {
    position: "relative",
    overflow: "hidden",
    display: "flex",
    height: "100%",
    width: "100%",
    left: "0",
    boxSizing: "border-box",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: "40px",
    },
  },

  layer1Group: {
    width: "520px",
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

  layer1Icon: {
    position: "relative",
    // width: "200px",
    marginBottom: "40px",
    height: "22px",
    overflow: "hidden",
    flexShrink: "0",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
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
      fontSize: "14px",
      lineHeight: "24px",
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
      lineHeight: "24px",
    },
  },

  footerIcon: {
    display: "flex",
    flexDirection: "row",
    gap: "40px",
    alignItems: "flex-end",
    [theme.breakpoints.down("sm")]: {
      gap: "26.667px",
    },
  },
});

const Footer = () => {
  const { t } = useTranslation();

  const classes = useStyles(theme);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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
  return (
    <I18nextProvider i18n={i18n}>
      <Grid container sx={classes.containerFooter}>
        <Grid container sx={classes.footerGroup}>
          <Grid container sx={classes.layer1Group}>
            <Grid container sx={classes.layer1Icon}>
              <Logo />
            </Grid>
            <div className={styles.wondermoveSpinOffOfHyundaiParent}>
              <div>
                <Grid container sx={classes.howManyVcpus}>
                  {t("common.footer.wondermove_intro")}
                </Grid>
              </div>
              <div className={styles.wondermoveIncContainer}>
                <Grid container sx={classes.solutionForYourFooter}>
                  {t("common.footer.wondermove_name")}
                </Grid>

                <Grid container sx={classes.solutionForYourFooter}>
                  {t("common.footer.wondermove_number")}
                </Grid>

                <Grid container sx={classes.solutionForYourFooter}>
                  {t("common.footer.wondermove_address")}
                </Grid>

                <Grid container sx={classes.solutionForYourFooter}>
                  {t("common.footer.wondermove_email")}
                </Grid>
              </div>
            </div>
          </Grid>
          <Box sx={classes.footerIcon}>
            {isSmallScreen ? (
              <>
                <Image
                  src="/1920_desktop/Nipa.png"
                  alt=""
                  width="80"
                  height="80"
                ></Image>
                <Image
                  src="/1920_desktop/Saas.png"
                  alt=""
                  width="83"
                  height="80"
                ></Image>
              </>
            ) : (
              <>
                <Image
                  src="/1920_desktop/Nipa.png"
                  alt=""
                  width="120"
                  height="120"
                ></Image>
                <Image
                  src="/1920_desktop/Saas.png"
                  alt=""
                  width="125"
                  height="120"
                ></Image>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </I18nextProvider>
  );
};

export default Footer;
