import React, { useState } from "react";
import styles from "../pages/1920_desktop/sendMessage.module.css";
import SendSuccessfully from "./SentSuccessfully";
import Modal from "react-modal";

const SendMessage = ({ isVisible, toggleVisible, onSendMessagePress }) => {
  return (
    <Modal
      isOpen={isVisible}
      ariaHideApp={false}
      onRequestClose={toggleVisible}
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
          top: 80,
          overflow: "auto",
          border: null,
          inset: null,
          paddingTop: 150,
          paddingLeft: null,
          paddingRight: null,
          paddingBottom: 100,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          WebkitOverflowScrolling: "touch",
        },
      }}
    >
      <div className={styles.getInTouch}>
        <div className={styles.frameParent}>
          <div className={styles.getInTouchParent}>
            <div className={styles.getInTouch1}>Get in touch</div>
            <img
              className={styles.frameChild}
              alt=""
              src="/1920_desktop/off.svg"
              onClick={toggleVisible}
            />
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.instanceParent}>
              <div className={styles.companyParent}>
                <div className={styles.company}>
                  <span>{`Company `}</span>
                  <span className={styles.span}>*</span>
                </div>
                <div className={styles.pleaseInputCompanyNameWrapper}>
                  <div className={styles.pleaseInputCompany}>
                    Please input company name
                  </div>
                </div>
              </div>
              <div className={styles.companyParent}>
                <div className={styles.company1}>
                  <span>
                    <span className={styles.name}>Name</span>
                    <span className={styles.span}>{` `}</span>
                  </span>
                  <span className={styles.span}>
                    <span>*</span>
                  </span>
                </div>
                <div className={styles.pleaseInputCompanyNameWrapper}>
                  <div className={styles.pleaseInputCompany}>
                    Please input your name
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.companyContainer}>
              <div className={styles.company2}>
                <span>
                  <span className={styles.name}>Email</span>
                  <span className={styles.span}>{` `}</span>
                </span>
                <span className={styles.span}>
                  <span>*</span>
                </span>
              </div>
              <div className={styles.pleaseInputCompanyNameWrapper}>
                <div className={styles.pleaseInputCompany}>
                  Please input email
                </div>
              </div>
            </div>
            <div className={styles.companyContainer1}>
              <div className={styles.company3}>Comments</div>
              <div className={styles.pleaseInputCompanyNameWrapper}>
                <div className={styles.pleaseInputCompany}>
                  <p className={styles.pleaseWriteYour}>
                    Please write your request or inquiry in as much detail as
                    possible
                  </p>
                  <p className={styles.pleaseWriteYour}>&nbsp;</p>
                  <p className={styles.pleaseWriteYour}>&nbsp;</p>
                  <p className={styles.pleaseWriteYour}>&nbsp;</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.instanceGroup}>
              <div className={styles.rectangleWrapper}>
                <div className={styles.instanceChild} />
              </div>
              <div className={styles.pleaseInputCompany}>
                By sending this message, you agree to wondermove’s Privacy
                Policy.
              </div>
            </div>

            <div className={styles.getSendWrapper} onClick={onSendMessagePress}>
              <div className={styles.getStarted}>Send message</div>
            </div>
          </div>
        </div>
      </div>

      {/* {successModalVisible && (
        <SendSuccessfully
          toggleSuccessModalVisible={toggleSuccessModalVisible}
          toggleSendModalVisible={toggleSendModalVisible}
        />
      )} */}
    </Modal>
  );
};

export default SendMessage;
