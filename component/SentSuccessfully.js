import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../pages/1920_desktop/sendSuccessfully.module.css";

const SentSuccessfully = ({
  toggleSuccessModalVisible,
  toggleSendModalVisible,
}) => {
  const router = useRouter();
  const goToHomePage = () => {
    router.push("/");
    toggleSendModalVisible && toggleSendModalVisible();
    toggleSuccessModalVisible && toggleSuccessModalVisible();
  };

  const onClosePress = () => {
    toggleSendModalVisible && toggleSendModalVisible();
    toggleSuccessModalVisible && toggleSuccessModalVisible();
  };

  return (
    <div className={styles.getInTouch}>
      <div className={styles.frameParent}>
        <div className={styles.getInTouchParent1}>
          <div className={styles.getInTouch1}></div>
          <img
            className={styles.frameChild}
            alt=""
            src="/1920_desktop/off.svg"
            onClick={onClosePress}
          />
        </div>
        <div className={styles.frameGroup1}>
          <img
            className={styles.frameChild1}
            alt=""
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
          <div className={styles.getSendWrapper} onClick={goToHomePage}>
            <div className={styles.getStarted}>Go to home page</div>
          </div>
        </div>
      </div>
      {/* {isPopupOpen && (
        <SendSuccessfully onClick={() => setShowThankPopup(false)} />
      )} */}
    </div>
  );
};

export default SentSuccessfully;
