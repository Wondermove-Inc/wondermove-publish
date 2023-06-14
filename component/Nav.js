import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import NavButtom from "../component/NavButtom";
import Logo from "../component/Logo";
import styles from "../pages/1920_desktop/styles.module.css";

const GnbContainer = styled("div")(({ theme }) => ({
  height: "60px",
  width: "1440px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  top: "0",
  position: "sticky",
}));

const GnbLogo = styled("img")({
  height: "20px",
});

const GnbMenu = styled("ul")({
  listStyle: "none",
  display: "flex",
});

const GnbMenuItem = styled("li")({
  marginLeft: "20px",
});

const ResponsiveNav = styled("div")(({ theme }) => ({
  // 1440px
  GnbContainer: {
    height: "60px",
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  GnbLogo: {
    height: "20px",
  },

  GnbMenu: {
    listStyle: "none",
    display: "flex",
  },

  GnbMenuItem: {
    marginLeft: "15px",
  },
}));

const Nav = () => {
  const theme = useTheme();

  return (
    <GnbContainer>
      <Logo />
      <GnbMenu>
        <GnbMenuItem>
          <NavButtom />
        </GnbMenuItem>
      </GnbMenu>
    </GnbContainer>
  );
};

export default Nav;
