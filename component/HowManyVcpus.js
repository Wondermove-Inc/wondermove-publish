import React from "react";
import styles from "../pages/index.module.css";

const HowManyVcpus = () => {
  const vcpuOptions = ["2", "4", "8", "16", "20", "32", "48", "64", "96"];

  const handleVcpuClick = (vcpuCount) => {
    alert(` ${vcpuCount} vCPU`);
  };

  return (
    <div className={styles.howManyVcpusParent}>
      <div className={styles.howManyVcpus}>How many vCPUs?</div>
      <div className={styles.iconCpuParent}>
        {vcpuOptions.map((vcpu) => (
          <div
            key={vcpu}
            className={styles.vcpuOption}
            onClick={() => handleVcpuClick(`${vcpu} vCPU`)}
          >
            <img className={styles.iconCpu} alt="" src="/-icon-cpu.svg" />
            <div className={styles.vcpu}>{vcpu} vCPU</div>
          </div>
        ))}
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
      </div>
    </div>
  );
};

export default HowManyVcpus;
