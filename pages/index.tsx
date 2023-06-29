import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Desktop from "./1920_desktop/desktop";
import SKuber from "./S-kuber/index";
import PLUG from "./P-LUG/index";
import VIVAUI from "./VIVAUI/index";
import Link from "next/link";

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
// { pathname }: { pathname: any }
const HomePage = () => {
  // const router = useRouter();

  // const renderComponent = () => {
  //   if (pathname === "/S-kuber") {
  //     return <SKuber />;
  //   } else if (pathname === "/P-LUG") {
  //     return <PLUG />;
  //   } else if (pathname === "/VIVAUI") {
  //     return <VIVAUI />;
  //   } else {
  //     return <SKuber />;
  //   }
  // };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <SKuber />
      </div>
      {/* <div>{renderComponent()}</div> */}
    </ThemeProvider>
  );
};

// export async function getServerSideProps(context: any) {
//   const { pathname } = context.req.url;
//   return {
//     props: {
//       pathname: pathname || null,
//     },
//   };
// }

export default HomePage;

{
  // <div><SKuber /></div>
  /* <Link href="/S-kuber">
        <SKuber />
      </Link> */
}
{
  /* <Router>
        <Routes>
          <Route path="/S-kuber" element={<SKuber />} />
          <Route path="/P-LUG" element={<PLUG />} />
          <Route path="/VIVAUI" element={<VIVAUI />} />
          <Route path="/" element={<SKuber />} />
        </Routes>
      </Router> */
}
