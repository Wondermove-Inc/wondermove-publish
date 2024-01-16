import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../pages/Skuber/sendSuccessfully.module.css";
import Modal from "react-modal";

const SentSuccessfully = ({ toggleSuccessModalVisible, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const goToHomePage = () => {
    router.push("/");
    toggleSuccessModalVisible && toggleSuccessModalVisible();
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

  return (
    <Modal
      isOpen={isVisible}
      ariaHideApp={false}
      onRequestClose={toggleSuccessModalVisible}
      style={{
        overlay: {
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 100,
        },
        content: {
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 160,
          border: null,
          inset: null,
          paddingTop: 150,
          paddingLeft: null,
          paddingRight: null,
          paddingBottom: 100,
          overflow: "auto",

          backgroundColor: "rgba(0, 0, 0, 0.5)",
          WebkitOverflowScrolling: "touch",
        },
      }}
    >
      <div className={styles.getInTouch}>
        <div className={styles.frameParent}>
          <div className={styles.getInTouchParent1}>
            <div className={styles.getInTouch1}></div>
            <img
              className={styles.frameChild}
              alt="modal off"
              src="/1920_desktop/off.svg"
              onClick={toggleSuccessModalVisible}
            />
          </div>
          <div className={styles.frameGroup1}>
            <img
              className={styles.frameChild1}
              alt="email icon"
              src="/1920_desktop/email.png"
            />
            <div className={styles.Thank}>
              <div className={styles.childThank}>Thank You</div>
              <p
                className={styles.childP}
              >{`Your message has been successfully sent.`}</p>
              <p className={styles.childP}>{`We’ll be in touch.`}</p>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div
              className={getStartedClassName}
              onClick={goToHomePage}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className={styles.getStarted}>Go to home page</div>
            </div>
          </div>
        </div>
        {/* {isPopupOpen && (
        <SendSuccessfully onClick={() => setShowThankPopup(false)} />
      )} */}
      </div>
    </Modal>
  );
};

export default SentSuccessfully;
