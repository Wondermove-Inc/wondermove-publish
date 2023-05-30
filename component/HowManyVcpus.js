// import React from "react";
// import ReactSlider from "react-slider";
// import styles from "../pages/index.module.css";
// import styled from "@emotion/styled";

// const StyledSlider = styled(ReactSlider)`
//   width: 100%;
//   height: 25px;
// `;
// const HowManyVcpus = () => {
//   return (
//     <StyledSlider
//       className={styles.customSlider}
//       thumbClassName={styles.customSlider_thumb}
//       trackClassName={styles.customSlider_track}
//       markClassName={styles.customSlider_mark}
//       marks={[2, 4, 8, 16, 20, 32, 48, 64, 96]}
//       min={2}
//       max={96}
//     />
//   );
// };
// export default HowManyVcpus;

import React from "react";
import { useState } from "react";
import styles from "../pages/index.module.css";

const HowManyVcpus = () => {
  const [progress, setProgress] = useState(0); // 初始进度为0
  const dataPoints = [2, 4, 8, 16, 20, 32, 48, 64, 96];

  const handleDataPointClick = (index) => {
    setProgress(index); // 更新进度条位置为点击的数据点的索引
  };

  const calculateTranslateX = (index) => {
    const width = 100 / (dataPoints.length - 1); // 计算每个数据点的宽度百分比
    return `calc(${width * index}% - ${index * 4}px)`; // 根据索引计算平移距离并返回
  };

  return (
    <div className={styles.howManyVcpusParent}>
      <div className={styles.howManyVcpus}>How many vCPUs?</div>
      <div className={styles.iconCpuParent}>
        <img className={styles.iconCpu} alt="" src="/-icon-cpu.svg" />
        <div className={styles.vcpu}>{dataPoints[progress]} vCPU</div>{" "}
        {/* 根据进度条位置显示不同的 vCPU 数量 */}
      </div>
      <div className={styles.rectangleParent}>
        <div
          className={styles.groupChild}
          style={{ transform: `translateX(${calculateTranslateX(progress)})` }}
        />{" "}
        {/* 根据进度条位置设置图形的平移距离 */}
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
