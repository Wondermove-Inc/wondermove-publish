import React, { useState } from "react";
import SendMessage from "./SendMessage";
import styles from "../pages/1920_desktop/styles.module.css";

const GetInTouch = ({
  onCloseOff,
  sendModalVisible,
  toggleSuccessModalVisible,
  successModalVisible,
  toggleSendModalVisible,
}) => {
  // const [showPopup, setShowPopup] = useState(false);

  // const handleButtonClick = () => {
  //   setShowPopup(true);
  // };

  return (
    <div className={styles.getStarted}>
      {!sendModalVisible && (
        <div className={styles.getStartedWrapper} onClick={onCloseOff}>
          <div className={styles.pricing}>Get in touch</div>
        </div>
      )}
      {sendModalVisible && (
        <SendMessage
          onCloseOff={onCloseOff}
          toggleSuccessModalVisible={toggleSuccessModalVisible}
          successModalVisible={successModalVisible}
          toggleSendModalVisible={toggleSendModalVisible}
        />
      )}
    </div>
  );
};

export default GetInTouch;
