import React from "react";
import styles from "../pages/1920_desktop/styles.module.css";

const NavButtom = () => {
  const handleButtonClick = (buttonName) => {
    if (buttonName !== "S-kuber") {
      alert("coming soon!!!");
    }
  };

  const onContactClick = () =>
    window.open(
      "mailto:wondermove@wondermove.net?subject=Join%20S-kuber%20to%20revolutionize%20your%20cloud%20and%20cut%20costs&body=Region%3A%0ACompany%3A%0AName%3A%0APhone%20Number%3A%0A%0AWhat%20can%20we%20help%20you%3F"
    );

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
      <div className={styles.pLug} onClick={onContactClick}>
        Contact
      </div>
    </div>
  );
};

export default NavButtom;
