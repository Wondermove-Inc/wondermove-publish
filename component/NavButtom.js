import React, { useState } from "react";
import styles from "../pages/Skuber/styles.module.css";

import { Grid, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";
import { width } from "@mui/system";
import Link from "next/link";

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
  sKuberParent: {
    width: "586px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px",
    gap: "80px",
    fontSize: "16px",
    justifyContent: "space-between",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},

    [theme.breakpoints.down("sm")]: {
      display: "none",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      padding: "0 16px",
    },
  },
  sKuberParentHidden: {
    width: "586px",
    display: "none",
    [theme.breakpoints.down("xl")]: {
      display: "none",
    },
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      width: "62px",
      height: "18px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      padding: "0 16px",
    },
  },
});
const classes = useStyles(theme);
const isHidden = true;

const NavButtom = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [navModalVisible, setNavModalVisible] = useState(false);
  const toggleNavModalVisible = () => setNavModalVisible(!navModalVisible);
  const onNavBTMPress = () => {
    toggleNavModalVisible;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const onContactClick = () =>
    window.open(
      "mailto:wondermove@wondermove.net?subject=Join%20Skuber%20to%20revolutionize%20your%20cloud%20and%20cut%20costs&body=[Your%20infomation]%0A———————————%0A>%20Country%3A%0A>%20Company%20name%3A%0A>%20Your%20Name%3A%0A———————————%0A%0AWhat%20can%20we%20help%20you%3F"
    );
  const onPlugClick = () =>
    (window.location.href = "https://wondermove.net/2232-2/");

  const onVivaClick = () =>
    (window.location.href = "https://wondermove.net/viva-ui/");

  return (
    <>
      <div style={{ cursor: "pointer" }}>
        <Grid container sx={classes.sKuberParentHidden}>
          <div
            style={{ width: "60px", height: "60px", zIndex: 2000 }}
            onClick={onClick}
            navModalVisible={navModalVisible}
            toggleNavModalVisible={toggleNavModalVisible}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          ></div>
        </Grid>
        <Grid container sx={classes.sKuberParent}>
          <div className={styles.sKuber}>
            <Link className={styles.Link1} href="/Skuber">
              Skuber Mgmt
            </Link>
          </div>
          <div className={styles.pLug}>
            <Link href="/P-LUG" className={styles.Link1}>
              P-LUG
            </Link>
          </div>
          <div className={styles.pLug}>
            <Link href="/VIVAUI" className={styles.Link1}>
              VIVA UI
            </Link>
          </div>
          <div className={styles.pLug} onClick={onContactClick}>
            Contact
          </div>
        </Grid>
      </div>
    </>
  );
};

export default NavButtom;
