import React, { useState } from "react";
import styles from "../pages/1920_desktop/styles.module.css";

const PricingMenu = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={isHovered ? "module module-hovered" : "module"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      模块内容
    </div>
  );
};

export default PricingMenu;
