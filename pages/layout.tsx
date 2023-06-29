import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SKuberPage from "./1920_desktop/desktop";
import Nav from "../component/Nav";

import { ThemeProvider, createTheme } from "@mui/material/styles";
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

function Layout({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Layout;
