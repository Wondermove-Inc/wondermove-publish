import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link legacyBehavior href="https://wondermove.net/">
      <img src="/1920_desktop/logo.svg" alt="Logo" />
    </Link>
  );
};

export default Logo;