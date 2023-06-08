import React, { useState } from "react";
import styles from "../pages/1920_desktop/sendMessage.module.css";
import SendSuccessfully from "./SentSuccessfully";

const SendMessage = ({
  onCloseOff,
  toggleSuccessModalVisible,
  successModalVisible,
  toggleSendModalVisible,
}) => {
  return (
    <div className={styles.getInTouchBP}>
      {!successModalVisible && (
        <div className={styles.getInTouch}>
          <div className={styles.frameParent}>
            <div className={styles.getInTouchParent}>
              <div className={styles.getInTouch1}>Get in touch</div>
              <img
                className={styles.frameChild}
                alt=""
                src="/1920_desktop/off.svg
                
            "
                onClick={onCloseOff}
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

              <div
                className={styles.getSendWrapper}
                onClick={toggleSuccessModalVisible}
              >
                <div className={styles.getStarted}>Send message</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {successModalVisible && (
        <SendSuccessfully
          toggleSuccessModalVisible={toggleSuccessModalVisible}
          toggleSendModalVisible={toggleSendModalVisible}
        />
      )}
    </div>
  );
};

export default SendMessage;
