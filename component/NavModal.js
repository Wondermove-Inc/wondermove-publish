import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../pages/Skuber/sendSuccessfully.module.css";
import Modal from "react-modal";
import classNames from "classnames";
import Link from "next/link";

const NavModal = ({ toggleNavModalVisible, isVisible, onNavBTMPress }) => {
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();
  const goToHomePage = () => {
    router.push("/");
    toggleNavModalVisible && toggleNavModalVisible();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getStartedClassName = isHovered
    ? styles.getSendWrapperHover
    : styles.getSendWrapper;

  const handleButtonClick = (buttonName) => {
    if (buttonName !== "Skuber") {
      alert("coming soon!!!");
    }
    if (buttonName === "Skuber") {
      window.location.href = "http://s-kuber.wondermove.net";
    }
  };

  const onContactClick = () =>
    window.open(
      "mailto:wondermove@wondermove.net?subject=Join%20Skuber%20to%20revolutionize%20your%20cloud%20and%20cut%20costs&body=[Your%20infomation]%0A———————————%0A>%20Country%3A%0A>%20Company%20name%3A%0A>%20Your%20Name%3A%0A———————————%0A%0AWhat%20can%20we%20help%20you%3F"
    );
  const onPlugClick = () =>
    (window.location.href = "https://wondermove.net/2232-2/");

  const onVivaClick = () =>
    (window.location.href = "https://wondermove.net/viva-ui/");

  const containerClass = classNames(styles.container, {
    [styles.change]: toggleNavModalVisible,
  });

  return (
    <Modal
      isOpen={isVisible}
      ariaHideApp={false}
      onRequestClose={toggleNavModalVisible}
      style={{
        overlay: {
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          zIndex: 999999,
        },
        content: {
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 160,
          border: null,
          inset: null,
          paddingTop: null,
          paddingLeft: null,
          paddingRight: null,
          paddingBottom: null,
          overflow: "auto",

          backgroundColor: "rgba(0, 0, 0, 0.5)",
          WebkitOverflowScrolling: "touch",
        },
      }}
    >
      <div className={styles.getInTouchMobileParent}>
        {/* <div className={containerClass} onClick={toggleNavModalVisible}>
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </div> */}
        <ul className={styles.getInTouchMobile}>
          <li className={styles.navS1}>
            {/* <a onClick={() => handleButtonClick("Skuber")}>
              <span className={styles.navText}>Skuber</span>
            </a> */}
            <Link className={styles.Link1} href="/Skuber">
              Skuber Mgmt
            </Link>
          </li>
          <li className={styles.navS2}>
            {/* <a onClick={onPlugClick}>
              <span className={styles.navText}>P-LUG</span>
            </a> */}
            <Link href="/P-LUG" className={styles.Link1}>
              P-LUG
            </Link>
          </li>
          <li className={styles.navS3}>
            {/* <a onClick={onVivaClick}>
              <span className={styles.navText}>VIVA UI</span>
            </a> */}
            <Link href="/VIVAUI" className={styles.Link1}>
              VIVA UI
            </Link>
          </li>
          <li className={styles.navS4}>
            <a onClick={onContactClick}>
              <span className={styles.navText}>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default NavModal;
