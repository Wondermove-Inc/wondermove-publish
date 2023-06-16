import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../pages/1920_desktop/sendSuccessfully.module.css";
import Modal from "react-modal";

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
    if (buttonName !== "S-kuber") {
      alert("coming soon!!!");
    }
    if (buttonName === "S-kuber") {
      window.location.href = "http://s-kuber.wondermove.net";
    }
  };

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
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 10000,
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
        <div className={styles.frameChildOffParent}>
          <img
            className={styles.frameChildOff}
            alt=""
            src="/1920_desktop/off.svg"
            onClick={toggleNavModalVisible}
          />
        </div>
        <ul className={styles.getInTouchMobile}>
          <li className={styles.navS1}>
            <a onClick={() => handleButtonClick("S-kuber")}>
              <span className={styles.navText}>S-kuber</span>
            </a>
          </li>
          <li className={styles.navS2}>
            <a onClick={() => handleButtonClick("P-LUG")}>
              <span className={styles.navText}>P-LUG</span>
            </a>
          </li>
          <li className={styles.navS3}>
            <a onClick={() => handleButtonClick("VIVA UI")}>
              <span className={styles.navText}>VIVA UI</span>
            </a>
          </li>
          <li className={styles.navS4}>
            <a onClick={() => handleButtonClick("Contact")}>
              <span className={styles.navText}>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default NavModal;
