import React, { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import styles from "../pages/mobile/mobile.module.css";
import styled from "@emotion/styled";
import costData from "../asset/costData.json";

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 40px;
`;

const MobilrSliderBar = () => {
  const [vcpuList, setVcpuList] = useState([]);
  const [ramList, setRamList] = useState([]);
  const [slideValue, setSlideValue] = useState(0);
  const [selectedMark, setSelectedMark] = useState(2);
  const [selectedRam, setSelectedRam] = useState({});
  const [filteredData, setFilteredData] = useState([]);

  const handleSlideChange = (value) => {
    setSlideValue(value);
    setSelectedMark(vcpuList[value].vCPU);
    setSelectedRam(ramList[0]);
  };

  const renderMark = (mark) => {};

  useEffect(() => {
    const data = costData;
    const filterVCPU = data.cost.filter(
      (item, index) =>
        costData.cost.findIndex((_item) => _item.vCPU == item.vCPU) == index
    );
    const marksList = filterVCPU.map((item) => item.vCPU);
    setFilteredData(filterVCPU);
    setVcpuList(marksList);

    const filterRAM = data.cost.filter((item) => item.vCPU == selectedMark);
    setRamList(filterRAM);
    setSelectedRam(filterRAM[0]);
  }, [slideValue]);

  return (
    <div className={styles.wonderAboutCuttingYourClouParent}>
      <div className={styles.wonderAboutCuttingContainer}>
        <p className={styles.resourceCosts}>Wonder about cutting</p>
        <p className={styles.resourceCosts}>your cloud costs?</p>
      </div>
      <div className={styles.howManyVcpusParent}>
        <div className={styles.howManyVcpus}>How many vCPUs?</div>
        <div className={styles.iconCpuParent}>
          <img
            className={styles.iconCpu}
            alt=""
            src="/393_mobile/-icon-cpu.svg"
          />
          <div className={styles.vcpu}>{selectedMark}vCPU</div>
        </div>

        <StyledSlider
          className={styles.customSlider}
          thumbClassName={styles.customSlider_thumb}
          trackClassName={styles.customSlider_track}
          markClassName={styles.customSlider_mark}
          step={1}
          marks={vcpuList}
          min={0}
          max={vcpuList.length - 1}
          renderMark={renderMark}
          value={slideValue}
          onChange={handleSlideChange}
        />
      </div>
      <div className={styles.howManyVcpusParent}>
        <div className={styles.howManyVcpus1}>How many RAM?</div>
        <div className={styles.frameContainer}>
          <div className={styles.component196Parent}>
            {ramList.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedRam(item)}
                className={
                  selectedRam.RAM == item.RAM
                    ? styles.component196
                    : styles.component197
                }
              >
                <img
                  className={styles.iconRam2}
                  alt=""
                  src="/1920_desktop/-icon-ram-2.svg"
                />
                <div className={styles.text}>{item.RAM} GB</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.lineDiv} />
      <div className={styles.frameDiv}>
        <div className={styles.frameWrapper1}>
          <div className={styles.frameParent1}>
            <div className={styles.withSKuberParent}>
              <div className={styles.vcpu}>with Skuber</div>
              <div className={styles.kubernetesSmContainer}>
                <span>{` `}</span>
                <span className={styles.span}>(</span>
                <span className={styles.kubernetesSm}>
                  Kubernetes + SM + eBPF)
                </span>
              </div>
            </div>
            <div className={styles.group}>
              <div className={styles.div}>
                $
                {parseInt(
                  selectedRam.maxCostAfterIntroduction / 12
                ).toLocaleString("en-US")}
              </div>
              <div className={styles.perMonth}>per month</div>
            </div>
            <div className={styles.costReduction}>
              ${parseInt(selectedRam.savings / 12).toLocaleString("en-US")} (
              {parseFloat(
                (
                  (selectedRam.savings * 100) /
                  selectedRam.maxOriginalCost
                ).toFixed(1)
              )}
              %) cost reduction
            </div>
          </div>
        </div>
        <div className={styles.virtualMachineParent}>
          <div className={styles.howManyVcpus}>Virtual machine</div>
          <div className={styles.container}>
            <div className={styles.xVcpu}>
              $
              {parseInt(selectedRam.maxOriginalCost / 12).toLocaleString(
                "en-US"
              )}
            </div>
            <div className={styles.perMonth1}>per month</div>
          </div>
        </div>
        <div className={styles.basedOnUsingContainer}>
          <p className={styles.reductionIn}>* Based on using 100 VMs</p>
          <p className={styles.resourceCosts}>
            * This is an approximate figure and may differ from the actual
            amount
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobilrSliderBar;
