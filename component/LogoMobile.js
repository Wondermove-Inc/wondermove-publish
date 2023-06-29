import React from "react";
import Link from "next/link";
import styles from "../pages/mobile/mobile.module.css";

const LogoMoblie = ({ ...props }) => {
  return (
    <Link legacyBehavior href="https://wondermove.net/intro/">
      <img
        src="/393_mobile/logo-layer1.png"
        alt="LogoMobile"
        className={props.className}
      />
    </Link>
  );
};

export default LogoMoblie;
