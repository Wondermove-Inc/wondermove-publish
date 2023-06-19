import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>S-Kuber for your cloud management service | wondermove</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta property="og:title" content="S-kuber" />
        <meta
          property="og:description"
          content="S-kuber for your cloud management service"
        />
        <meta property="og:image" content="/1920_desktop/mateImage.png" />

        <link rel="icon" href="/1920_desktop/favicon.ico" type="image/x-icon" />
      </Head>

      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
