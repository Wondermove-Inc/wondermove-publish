import React from "react";
import { useState } from "react";
import styles from "../pages/index.module.css";

const HowManyVcpus = () => {
  const [progress, setProgress] = useState(0);
  const dataPoints = [2, 4, 8, 16, 20, 32, 48, 64, 96];

  const handleDataPointClick = (index) => {
    setProgress(index);
  };

  const calculateTranslateX = (index) => {
    const width = 100 / (dataPoints.length - 1);
    return `calc(${width * index}% - ${index * 4}px)`;
  };

  return (
    <div className={styles.howManyVcpusParent}>
      <div className={styles.howManyVcpus}>How many vCPUs?</div>
      <div className={styles.iconCpuParent}>
        <img className={styles.iconCpu} alt="" src="/-icon-cpu.svg" />
        <div className={styles.vcpu}>{dataPoints[progress]} vCPU</div>{" "}
        {/* 진행률 표시줄 위치에 따라 서로 다른 수의 vCPU 표시 */}
      </div>
      <div className={styles.rectangleParent}>
        <div
          className={styles.groupChild}
          style={{ transform: `translateX(${calculateTranslateX(progress)})` }}
        />{" "}
        {/* 프로그레스 바의 위치에 따라 그래프의 평행이동 거리 설정 */}
        {dataPoints.map((dataPoint, index) => (
          <div
            key={index}
            className={`${styles.groupItem} ${
              progress >= index ? styles.active : ""
            }`}
            onClick={() => handleDataPointClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HowManyVcpus;
