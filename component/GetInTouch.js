import React, { useState } from "react";
import SendMessage from "./SendMessage";
import styles from "../pages/1920_desktop/styles.module.css";

const GetInTouch = ({
  onClick,
  sendModalVisible,
  toggleSuccessModalVisible,
  successModalVisible,
  toggleSendModalVisible,
}) => {
  // const [showPopup, setShowPopup] = useState(false);

  // const handleButtonClick = () => {
  //   setShowPopup(true);
  // };
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getStartedClassName = isHovered
    ? styles.getStartedWrapperActive
    : styles.getStartedWrapper;

  return (
    <div className={styles.getStarted}>
      <div
        className={getStartedClassName}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.pricing}>Get in touch</div>
      </div>

      {/* {sendModalVisible && (
        <SendMessage
          onCloseOff={onCloseOff}
          toggleSuccessModalVisible={toggleSuccessModalVisible}
          successModalVisible={successModalVisible}
          toggleSendModalVisible={toggleSendModalVisible}
        />
      )} */}
    </div>
  );
};

export default GetInTouch;
