import React, { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import styles from "../pages/S-kuber/styles.module.css";
import styled from "@emotion/styled";
import costData from "../asset/costData.json";

import { Grid, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 601,
      md: 1025,
      lg: 1441,
      xl: 1921,
    },
  },
});

const useStyles = (theme) => ({
  containerNav: {
    justifyContent: "center",
    padding: "10px 240px",
    [theme.breakpoints.down("xl")]: {
      padding: "10px 240px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "10px 120px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "10px 60px",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "10px 24px",
    },
  },
  frameParent: {
    alignSelf: "stretch",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    fontSize: "16px",
    gap: "60px",
    [theme.breakpoints.down("xl")]: {
      display: "flex",
      flexDirection: "row",
      gap: "60px",
    },
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      flexDirection: "row",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      gap: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: "40px",
    },
  },
  howManyVcpus1: {
    position: "relative",
    alignSelf: "stretch",
    lineHeight: "32px",
    fontWeight: "500",
    fontSize: "16px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      lineHeight: "24px",
      fontSize: "14px",
    },
  },
  iconCpuParent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
    fontSize: "24px",
    lineHeight: "29px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      lineHeight: "24px",
      gap: "8px",
    },
  },
  frameGroup: {
    display: "flex",
    alignItems: "flex-start",
    flex: "1",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: "60px",
    width: "100%",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      gap: "40px",
    },
  },
  vcpuText: {
    fontFamily: "Montserrat",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "29px",
    letterSpacing: "0px",
    textAlign: "left",
    height: "29px",
    top: "0px",
    borderRadius: "nullpx",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      lineHeight: "24px",
    },
  },
  kubernetesSmContainer: {
    position: "relative",
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: "600",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      lineHeight: "15px",
    },
  },
  frameWrapper1: {
    padding: "40px",
    [theme.breakpoints.down("sm")]: {
      padding: "24px 18px 24px 24px",
    },
  },
  vcpu: {
    fontSize: "42px",
    lineHeight: "51px",
    fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
      lineHeight: "40px",
    },
  },
  perMonth: {
    fontSize: "16px",
    lineHeight: "32px",
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "24px",
    },
  },
  costReduction: {
    fontSize: "20px",
    lineHeight: "24px",
    fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "17px",
    },
  },
  textV: {
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: "500",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "24px",
    },
  },
  vcpuVirtual: {
    fontSize: "32px",
    lineHeight: "39px",
    fontWeight: "600",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
      lineHeight: "36px",
    },
  },
  perMonth1: {
    fontSize: "16px",
    lineHeight: "32px",
    fontWeight: "500",
    textAlign: "right",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      textAlign: "left",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "24px",
      textAlign: "left",
    },
  },
  basedOnUsingContainer: {
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: "500",
    width: "120%",
    textAlign: "right",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      width: "120%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "17px",
      width: "100%",
      textAlign: "left",
    },
  },
  component191: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "104px",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      width: "102px",
    },
    [theme.breakpoints.down("md")]: {
      width: "140px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "104px",
    },
  },
  text: {
    fontSize: "18px",
    lineHeight: "22px",
    fontWeight: "500",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      lineHeight: "22px",
    },
  },
  component191Parent: {
    gap: "14px",
    [theme.breakpoints.down("xl")]: {
      gap: "12px",
    },
    [theme.breakpoints.down("lg")]: {
      gap: "23px",
    },
    [theme.breakpoints.down("md")]: {
      gap: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "16px",
    },
  },
});
const classes = useStyles(theme);

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
  const [filteredData, setFilteredData] = useState([]);

  const isXl = useMediaQuery((theme) => theme.breakpoints.down("xl"));
  const isLg = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const isMd = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  // const getGridItemProps = () => {
  //   if (isLg) {
  //     return { xs: 3 };
  //   }
  // };
  // key={item} {...getGridItemProps()}

  const handleSlideChange = (value) => {
    setSlideValue(value);
    setSelectedMark(filteredData[value].vCPU);
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
    <div className={styles.frameParent}>
      <Grid container sx={classes.frameParent}>
        {/* <div className={styles.frameParent}> */}

        <div className={styles.frameGroup}>
          <Grid container sx={classes.frameGroup}>
            <div className={styles.howManyVcpusParent}>
              <div>
                <Grid container sx={classes.howManyVcpus1}>
                  How many vCPUs?
                </Grid>
              </div>
              <div>
                <Grid container sx={classes.iconCpuParent}>
                  <img
                    className={styles.iconCpu}
                    alt=""
                    src="/1920_desktop/-icon-cpu.svg"
                  />
                  {selectedMark && (
                    <div className={styles.selectedMark}>
                      {selectedMark} vCPU
                    </div>
                  )}
                </Grid>
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
              <div>
                <Grid container sx={classes.howManyVcpus1}>
                  How much RAM?
                </Grid>
              </div>

              <div className={styles.component191Parent}>
                <Grid container sx={classes.component191Parent}>
                  {ramList.map((item, index) => (
                    <Grid item key={index}>
                      <div
                        onClick={() => setSelectedRam(item)}
                        className={
                          selectedRam.RAM == item.RAM
                            ? styles.component191
                            : styles.component192
                        }
                      >
                        <Grid container sx={classes.component191}>
                          <img
                            className={styles.iconRam2}
                            alt=""
                            src="/1920_desktop/-icon-ram-2.svg"
                          />{" "}
                          <div
                            className={styles.text}
                            style={{ cursor: "pointer" }}
                          >
                            <Grid container sx={classes.text}>
                              {item.RAM} GB{" "}
                            </Grid>{" "}
                          </div>
                        </Grid>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          </Grid>
        </div>

        <div className={styles.frameChild} />

        <div className={styles.frameDiv}>
          <div className={styles.frameWrapper1}>
            <Grid container sx={classes.frameWrapper1}>
              <div className={styles.frameParent1}>
                <div className={styles.withSKuberParent}>
                  <div>
                    <Grid container sx={classes.vcpuText}>
                      with S-kuber
                    </Grid>
                  </div>
                  <div>
                    <Grid container sx={classes.kubernetesSmContainer}>
                      <span>{` `}</span>
                      <span className={styles.span}>(</span>
                      <span className={styles.kubernetesSm}>
                        Kubernetes + SM + eBPF)
                      </span>
                    </Grid>
                  </div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.vcpu}>
                    <Grid container sx={classes.vcpu}>
                      $
                      {parseInt(
                        selectedRam.maxCostAfterIntroduction / 12
                      ).toLocaleString("en-US")}
                    </Grid>
                  </div>
                  <div className={styles.perMonth}>
                    <Grid container sx={classes.perMonth}>
                      per month
                    </Grid>
                  </div>
                </div>
                <div className={styles.costReduction}>
                  <Grid container sx={classes.costReduction}>
                    $
                    {parseInt(selectedRam.savings / 12).toLocaleString("en-US")}{" "}
                    (
                    {parseFloat(
                      (
                        (selectedRam.savings * 100) /
                        selectedRam.maxOriginalCost
                      ).toFixed(1)
                    )}
                    %) cost reduction
                  </Grid>
                </div>
              </div>
            </Grid>
          </div>
          <div className={styles.virtualMachineParent}>
            <div className={styles.textV}>
              <Grid container sx={classes.textV}>
                Virtual machine
              </Grid>
            </div>
            <div className={styles.group}>
              <div className={styles.vcpuVirtual}>
                <Grid container sx={classes.vcpuVirtual}>
                  $
                  {parseInt(selectedRam.maxOriginalCost / 12).toLocaleString(
                    "en-US"
                  )}
                </Grid>
              </div>
              <div className={styles.perMonth1}>
                <Grid container sx={classes.perMonth1}>
                  per month
                </Grid>
              </div>
            </div>
          </div>
          <div className={styles.basedOnUsingContainer}>
            <Grid container sx={classes.basedOnUsingContainer}>
              <div>
                * Based on using 100 VMs <br /> * This is an approximate figure
                and may differ from the actual amount
              </div>
            </Grid>
          </div>
        </div>

        {/* </div> */}
      </Grid>
    </div>
  );
};

export default HowManyVcpus;
