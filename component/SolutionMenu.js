import React from "react";
import { useState } from "react";
import styles from "../pages/1920_desktop/seeAll.module.css";

function SiolutionMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.seeAll}>
      <div className={styles.seeAllFeaturesParent}>
        {/* <div className={styles.pricing} onClick={toggleMenu}>
          {isMenuOpen ? "Hide" : "See all features"}
        </div>
        <img
          className={styles.iconNavArrowDown}
          alt=""
          src="/1920_desktop/-icon-nav-arrow-down.svg"
        /> */}
        {/* {isMenuOpen && ( */}
        <div className={styles.seeAllFeatures}>
          <div className={styles.seeAllFeaturesInner}>
            <div className={styles.seeAllframeParent}>
              <div className={styles.seeAllgroupParent}>
                <div
                  className={
                    isMenuOpen ? styles.allFeatures1 : styles.allFeatures
                  }
                >
                  <div
                    className={
                      isMenuOpen ? styles.hideParent : styles.frameWrapper5
                    }
                  >
                    <div className={styles.pricing} onClick={toggleMenu}>
                      {isMenuOpen ? "Hide" : "See all features"}
                    </div>
                    <img
                      className={styles.iconNavArrowDown}
                      alt=""
                      src="/1920_desktop/icon-nav-arrow-down.svg"
                    />
                  </div>
                  {isMenuOpen && (
                    <div className={styles.frameParent6}>
                      <div className={styles.rectangleContainer}>
                        <div className={styles.rectangleDiv} />
                        <div className={styles.freeWrapper}>
                          <div className={styles.free1}>Free</div>
                        </div>
                        <div className={styles.freeWrapper}>
                          <div className={styles.free1}>Plus</div>
                        </div>
                        <div className={styles.freeWrapper}>
                          <div className={styles.free1}>Pro</div>
                        </div>
                        <div className={styles.freeWrapper}>
                          <div className={styles.free1}>Business</div>
                        </div>
                        <div className={styles.freeWrapper}>
                          <div className={styles.free1}>Enterprise</div>
                        </div>
                      </div>
                      <div className={styles.frameParent7}>
                        <div className={styles.vcpuWrapper}>
                          <div className={styles.pricing}>vCPU</div>
                        </div>
                        <div className={styles.wrapper}>
                          <div className={styles.unlimited}>1 - 10</div>
                        </div>
                        <div className={styles.wrapper}>
                          <div className={styles.unlimited}>11 - 100</div>
                        </div>
                        <div className={styles.wrapper}>
                          <div className={styles.unlimited}>101 - 1,000</div>
                        </div>
                        <div className={styles.wrapper}>
                          <div className={styles.unlimited}>Unlimited</div>
                        </div>
                        <div className={styles.wrapper}>
                          <div className={styles.unlimited}>Unlimited</div>
                        </div>
                      </div>
                      <div className={styles.frameParent7}>
                        <div className={styles.vcpuWrapper}>
                          <div className={styles.pricing}>Cluster</div>
                        </div>
                        <div className={styles.wrapper}>
                          <div className={styles.unlimited}>1</div>
                        </div>
                        <div className={styles.wrapper}>
                          <div className={styles.unlimited}>Unlimited</div>
                        </div>
                        <div className={styles.wrapper}>
                          <div className={styles.unlimited}>Unlimited</div>
                        </div>
                        <div className={styles.wrapper}>
                          <div className={styles.unlimited}>Unlimited</div>
                        </div>
                        <div className={styles.wrapper}>
                          <div className={styles.unlimited}>Unlimited</div>
                        </div>
                      </div>
                      <div className={styles.frameParent9}>
                        <div className={styles.realtimeDashboardWrapper}>
                          <div className={styles.pricing}>
                            Realtime Dashboard
                          </div>
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.frameParent9}>
                        <div className={styles.realtimeDashboardWrapper}>
                          <div className={styles.pricing}>
                            Legacy migration tool
                          </div>
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.frameParent9}>
                        <div className={styles.realtimeDashboardWrapper}>
                          <div className={styles.pricing}>Cost Tracing</div>
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.frameParent9}>
                        <div className={styles.realtimeDashboardWrapper}>
                          <div className={styles.pricing}>
                            Reatime log viewer
                          </div>
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.frameParent9}>
                        <div className={styles.realtimeDashboardWrapper}>
                          <div className={styles.pricing}>
                            RBAC account management
                          </div>
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.frameParent9}>
                        <div className={styles.realtimeDashboardWrapper}>
                          <div className={styles.pricing}>
                            Service flow management
                          </div>
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.frameParent9}>
                        <div className={styles.realtimeDashboardWrapper}>
                          <div className={styles.pricing}>Node management</div>
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.frameParent9}>
                        <div className={styles.realtimeDashboardWrapper}>
                          <div className={styles.pricing}>
                            Service mesh management
                          </div>
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.frameParent9}>
                        <div className={styles.realtimeDashboardWrapper}>
                          <div className={styles.pricing}>
                            Workload management
                          </div>
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.frameParent9}>
                        <div className={styles.realtimeDashboardWrapper}>
                          <div className={styles.pricing}>
                            Namespace management
                          </div>
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.frameParent9}>
                        <div className={styles.realtimeDashboardWrapper}>
                          <div className={styles.pricing}>
                            Configmap/secret management
                          </div>
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.frameParent9}>
                        <div className={styles.realtimeDashboardWrapper}>
                          <div className={styles.pricing}>
                            Repository management
                          </div>
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.frameParent9}>
                        <div className={styles.realtimeDashboardWrapper}>
                          <div className={styles.pricing}>
                            Storage management
                          </div>
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.frameParent9}>
                        <div className={styles.realtimeDashboardWrapper}>
                          <div className={styles.pricing}>
                            PV/PVC management
                          </div>
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.frameParent9}>
                        <div className={styles.realtimeDashboardWrapper}>
                          <div className={styles.pricing}>
                            Service log viewer
                          </div>
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.frameParent9}>
                        <div className={styles.realtimeDashboardWrapper}>
                          <div className={styles.pricing}>
                            Templete management
                          </div>
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.frameParent9}>
                        <div className={styles.realtimeDashboardWrapper}>
                          <div className={styles.pricing}>Asset management</div>
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.frameParent9}>
                        <div className={styles.realtimeDashboardWrapper}>
                          <div className={styles.pricing}>
                            Event notification
                          </div>
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.frameParent9}>
                        <div className={styles.realtimeDashboardWrapper}>
                          <div className={styles.pricing}>
                            Unlimited members
                          </div>
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.frameParent9}>
                        <div className={styles.realtimeDashboardWrapper}>
                          <div className={styles.pricing}>Custom Dashboard</div>
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.frameParent9}>
                        <div className={styles.realtimeDashboardWrapper}>
                          <div className={styles.pricing}>
                            Installation support
                          </div>
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.frameParent9}>
                        <div className={styles.realtimeDashboardWrapper}>
                          <div className={styles.pricing}>Issue support</div>
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/1920_desktop/tu re.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.frameParent9}>
                        <div className={styles.realtimeDashboardWrapper}>
                          <div className={styles.pricing}>
                            Cloud Strategy Consulting
                          </div>
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/1920_desktop/ture.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.hideParent}>
                        <div className={styles.pricing}>Hide</div>
                        <img
                          className={styles.iconNavArrowDown}
                          alt=""
                          src="/1920_desktop/icon-nav-arrow-down.svg"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default SiolutionMenu;
