import React from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import NavButtom from "../component/NavButtom";

const GnbContainer = styled("div")(({ theme }) => ({
  height: "60px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
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
  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    // 1024px
  },
  [`@media (min-width: ${theme.breakpoints.values.lg}px)`]: {
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
  },
}));

const Nav = () => {
  const theme = useTheme();

  return (
    <GnbContainer>
      <GnbLogo alt="" src="/1920_desktop/layer-1.svg" />
      <GnbMenu>
        <GnbMenuItem>
          <NavButtom />
        </GnbMenuItem>
      </GnbMenu>
    </GnbContainer>
  );
};

export default Nav;
