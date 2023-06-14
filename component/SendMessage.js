import React, { useState, useEffect } from "react";
import styles from "../pages/1920_desktop/sendMessage.module.css";
import SendSuccessfully from "./SentSuccessfully";
import Modal from "react-modal";

const SendMessage = ({
  isVisible,
  toggleVisible,
  onSendMessagePress,
  isChecked,
  handleCheckboxChange,
  companyName,
  userName,
  email,
  setCompanyName,
  setUserName,
  setEmail,
}) => {
  const [companyNameError, setCompanyNameError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [buttonDisable, setBottonDisable] = useState(false);

  const handleInputChange = (e) => {
    if (e.target.value === "") setCompanyNameError(true);
    else setCompanyNameError(false);
    setCompanyName(e.target.value);
  };

  const handleInputNameChange = (e) => {
    if (e.target.value === "") setUserNameError(true);
    else setUserNameError(false);
    setUserName(e.target.value);
  };

  const handleInputEmailChange = (e) => {
    const regExp = validateEmail(e.target.value);
    setEmailError(!regExp);
    setEmail(e.target.value);
  };

  const onCompanyNameBlur = () => {
    setCompanyNameError(companyName == "" || !companyName ? true : false);
  };

  const onUserNameBlur = () => {
    setUserNameError(userName == "" || !userName ? true : false);
  };

  const onEmailBlur = () => {
    const regExp = validateEmail(email);
    setEmailError(!regExp);
  };

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  useEffect(() => {
    if (
      companyName == "" ||
      userName == "" ||
      email == "" ||
      !isChecked ||
      companyNameError ||
      userNameError ||
      emailError
    ) {
      setBottonDisable(true);
    } else {
      setBottonDisable(false);
    }
  }, [companyName, userName, email, isChecked]);

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

                <input
                  className={styles.pleaseInputCompanyNameWrapper}
                  type="text"
                  value={companyName}
                  onChange={handleInputChange}
                  placeholder="Please input company name"
                  onBlur={onCompanyNameBlur}
                />
                {companyNameError && (
                  <div className={styles.pleaseProvideA}>
                    Please provide a valid company.
                  </div>
                )}
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
                <input
                  className={styles.pleaseInputCompanyNameWrapper}
                  type="text"
                  value={userName}
                  onChange={handleInputNameChange}
                  onBlur={onUserNameBlur}
                  placeholder="Please input your name"
                />
                {userNameError && (
                  <div className={styles.pleaseProvideA}>
                    Please provide a valid name.
                  </div>
                )}
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
              <input
                className={styles.pleaseInputCompanyNameWrapper}
                type="text"
                value={email}
                onChange={handleInputEmailChange}
                onBlur={onEmailBlur}
                placeholder="Please input email"
              />
              {emailError && (
                <div className={styles.pleaseProvideB}>
                  Please provide a valid email.
                </div>
              )}
            </div>
            <div className={styles.companyContainer1}>
              <div className={styles.company3}>Comments</div>
              <textarea
                className={styles.pleaseInputCompanyNameWrapper}
                placeholder=" Please write your request or inquiry in as much detail as
        possible"
                rows={10}
              />
            </div>
          </div>
          <div className={styles.frameContainer}>
            <label className={styles.instanceGroup}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <div className={styles.pleaseInputCompany}>
                By sending this message, you agree to wondermove’s Privacy
                Policy.
              </div>
            </label>

            {buttonDisable ? (
              <div className={styles.getSendWrapper}>
                <div className={styles.getStarted}>Send message</div>
              </div>
            ) : (
              <div
                className={styles.getSendWrapperActive}
                onClick={onSendMessagePress}
              >
                <div className={styles.getStarted}>Send message</div>
              </div>
            )}
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
