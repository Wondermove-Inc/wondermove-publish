import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import NavButtom from "../component/NavButtom";
import Logo from "../component/Logo";
import styles from "../pages/Skuber/styles.module.css";
import NavModal from "./NavModal";
import classNames from "classnames";
// import "../pages/skuber/hanburgers.module.css";
// import "hamburgers/dist/hamburgers.css";

<button className="hamburger" type="button">
  <span className="hamburger-box">
    <span className="hamburger-inner"></span>
  </span>
</button>;

const GnbContainer = styled("div")(({ theme }) => ({
  height: "60px",
  width: "100%",
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
    ursor: "pointer",
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
  const [navModalVisible, setNavModalVisible] = useState(false);

  const toggleNavModalVisible = () => setNavModalVisible(!navModalVisible);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 600);
    }

    handleResize(); // Check on initial render

    window.addEventListener("resize", handleResize); // Add event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up on component unmount
    };
  }, []);

  const containerClass = classNames(styles.container10, {
    [styles.change]: toggleNavModalVisible,
  });

  return (
    <GnbContainer>
      <Logo />

      {isSmallScreen ? (
        <div
          className={navModalVisible ? containerClass : styles.container10}
          onClick={toggleNavModalVisible}
        >
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </div>
      ) : (
        <GnbMenu>
          <GnbMenuItem>
            <NavButtom
              onClick={toggleNavModalVisible}
              style={{ cursor: "pointer" }}
            />
          </GnbMenuItem>
        </GnbMenu>
      )}

      <NavModal
        toggleNavModalVisible={toggleNavModalVisible}
        isVisible={navModalVisible}
        onNavBTMPress={toggleNavModalVisible}
      />
    </GnbContainer>
  );
};

export default Nav;
