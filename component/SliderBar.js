import React, { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import styles from "../pages/1920_desktop/styles.module.css";
import styled from "@emotion/styled";
import costData from "../asset/costData.json";

import { ThemeProvider } from "@mui/material/styles";
import { Grid } from "@material-ui/core";

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 40px;
`;

const HowManyVcpus = () => {
  const [vcpuList, setVcpuList] = useState([]);
  const [ramList, setRamList] = useState([]);
  const [slideValue, setSlideValue] = useState(0);
  const [selectedMark, setSelectedMark] = useState(2);
  const [selectedRam, setSelectedRam] = useState({});

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
    setVcpuList(filterVCPU);

    const filterRAM = data.cost.filter((item) => item.vCPU == selectedMark);
    setRamList(filterRAM);
    setSelectedRam(filterRAM[0]);
  }, [slideValue]);

  return (
    <Grid container>
      <div className={styles.frameParent}>
        <Grid item sm={12} md={12} lg={6} xl={6}>
          <div className={styles.frameGroup}>
            <div className={styles.howManyVcpusParent}>
              <div className={styles.howManyVcpus}>How many vCPUs?</div>
              <div className={styles.iconCpuParent}>
                <img
                  className={styles.iconCpu}
                  alt=""
                  src="/1920_desktop/-icon-cpu.svg"
                />
                {selectedMark && (
                  <div className={styles.selectedMark}>{selectedMark} vCPU</div>
                )}
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
              <div className={styles.howManyVcpus}>How much RAM?</div>
              <div className={styles.component191Parent}>
                {ramList.map((item) => (
                  <div
                    onClick={() => setSelectedRam(item)}
                    className={
                      selectedRam.RAM == item.RAM
                        ? styles.component191
                        : styles.component192
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
        </Grid>

        <div className={styles.frameChild} />

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className={styles.frameDiv}>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameParent1}>
                <div className={styles.withSKuberParent}>
                  <div className={styles.vcpuText}>with S-kuber</div>
                  <div className={styles.kubernetesSmContainer}>
                    <span>{` `}</span>
                    <span className={styles.span}>(</span>
                    <span className={styles.kubernetesSm}>
                      Kubernetes + SM + eBPF)
                    </span>
                  </div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.vcpu}>
                    $
                    {parseInt(
                      selectedRam.maxCostAfterIntroduction / 12
                    ).toLocaleString("en-US")}
                  </div>
                  <div className={styles.perMonth}>per month</div>
                </div>
                <div className={styles.costReduction}>
                  ${parseInt(selectedRam.savings / 12).toLocaleString("en-US")}{" "}
                  (
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
              <div className={styles.text}>Virtual machine</div>
              <div className={styles.group}>
                <div className={styles.vcpuVirtual}>
                  $
                  {parseInt(selectedRam.maxOriginalCost / 12).toLocaleString(
                    "en-US"
                  )}
                </div>
                <div className={styles.perMonth1}>per month</div>
              </div>
            </div>
            <div className={styles.basedOnUsingContainer}>
              <p className={styles.solutionForYourBase}>
                * Based on using 100 VMs
              </p>
              <p className={styles.solutionForYourBase}>
                * This is an approximate figure and may differ from the actual
                amount
              </p>
            </div>
          </div>
        </Grid>
      </div>
    </Grid>
  );
};

export default HowManyVcpus;
