import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Desktop from "./1920_desktop/desktop";
import SKuber from "./S-kuber/index";
import PLUG from "./P-LUG/index";
import VIVAUI from "./VIVAUI/index";
import App from "./_app";
import Link from "next/link";

import type { ReactElement } from "react";
import Layout from "./layout";

import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/") router.replace("/S-kuber");
  }, [router]);
  return <></>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;

// { pathname }: { pathname: any } // const router = useRouter();

// const router = useRouter();
// const { pathname } = router;
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

// const HomePage = () => {
//   const router = useRouter();
// };

// // export async function getServerSideProps(context: any) {
// //   const { pathname } = context.req.url;
// //   return {
// //     props: {
// //       pathname: pathname || null,
// //     },
// //   };
// // }

// export default HomePage;

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
