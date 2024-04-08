import React from "react";
import Link from "next/link";

const FootLogo = () => {
  return (
    // <Link legacyBehavior href="https://wondermove.net/intro/">
    //   <img
    //     src="/1920_desktop/logo.svg"
    //     alt="Logo"
    //     style={{ cursor: "pointer" }}
    //   />
    // </Link>
    <Link legacyBehavior href="/">
      <img
        src="/1920_desktop/hyper-kube-technologies.png"
        alt="Logo"
        style={{ cursor: "pointer" }}
      />
    </Link>
  );
};

export default FootLogo;
