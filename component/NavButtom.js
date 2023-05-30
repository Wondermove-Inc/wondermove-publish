import React from "react";
import styles from "../pages/index.module.css";

const NavButtom = () => {
  const handleButtonClick = (buttonName) => {
    if (buttonName !== "S-kuber") {
      alert("coming soon!!!");
    }
  };

  return (
    <div className={styles.sKuberParent}>
      <div
        className={styles.sKuber}
        onClick={() => handleButtonClick("S-kuber")}
      >
        S-kuber
      </div>
      <div className={styles.pLug} onClick={() => handleButtonClick("P-LUG")}>
        P-LUG
      </div>
      <div className={styles.pLug} onClick={() => handleButtonClick("VIVA UI")}>
        VIVA UI
      </div>
      <div className={styles.pLug} onClick={() => handleButtonClick("Contact")}>
        Contact
      </div>
    </div>
  );
};

export default NavButtom;
