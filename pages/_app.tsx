import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SKuberPage from "./1920_desktop/desktop";
import Nav from "../component/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
