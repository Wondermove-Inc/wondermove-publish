import React from "react";
import { useState } from "react";
import styles from "../pages/1920_desktop/styles.module.css";

function SiolutionMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className={styles.seeAllFeaturesParent}>
        <div className={styles.pricing} onClick={toggleMenu}>
          {isMenuOpen ? "Hide" : "See all features"}
        </div>
        <img
          className={styles.iconNavArrowDown}
          alt=""
          src="/1920_desktop/-icon-nav-arrow-down.svg"
        />
        {isMenuOpen && (
          <div className={styles.seeAllFeatures}>
            {/* <div className={styles.seeAllFeaturesInner}>
              <div className={styles.seeAllframeParent}>
                <div className={styles.seeAllpricingParent}>
                  <div className={styles.seeAllpricing}>Pricing</div>
                  <div
                    className={
                      styles.seeAllexperienceTheNextGenerationContainer
                    }
                  >
                    <p className={styles.seeAllexperienceTheNextGeneration}>
                      Experience the Next-Generation
                    </p>
                    <p className={styles.seeAllcloudSolution}>
                      Cloud Solution?
                    </p>
                  </div>
                </div>
                <div className={styles.seeAllframeWrapper}>
                  <div className={styles.seeAllframeGroup}>
                    <div className={styles.seeAllyearlyWrapper}>
                      <div className={styles.seeAllpricing}>Yearly</div>
                    </div>
                    <div className={styles.seeAllyearlyContainer}>
                      <div className={styles.seeAllpricing}>Yearly</div>
                    </div>
                  </div>
                </div>
                <div className={styles.seeAllgroupParent}>
                  <div className={styles.seeAllrectangleParent}>
                    <div className={styles.seeAllgroupChild} />
                    <div className={styles.seeAllrectangleGroup}>
                      <div className={styles.seeAllgroupItem} />
                      <div className={styles.seeAllmaskGroup}>
                        <div className={styles.seeAllmaskGroupChild} />
                      </div>
                    </div>
                    <div className={styles.seeAllframeContainer}>
                      <div className={styles.seeAllframeDiv}>
                        <div className={styles.seeAllfreeParent}>
                          <div className={styles.seeAllpricing}>Free</div>
                          <div className={styles.seeAllframeParent1}>
                            <div className={styles.seeAllparent}>
                              <div className={styles.seeAlldiv}>$0</div>
                              <div className={styles.seeAllnoMonthlyFees}>
                                No monthly fees
                              </div>
                            </div>
                            <div className={styles.seeAlltext}>{` `}</div>
                          </div>
                          <div className={styles.seeAllframeChild} />
                          <div className={styles.seeAllwhatsIncludedParent}>
                            <div className={styles.seeAllwhatsIncluded}>
                              What’s included
                            </div>
                            <div className={styles.seeAllupTo10Container}>
                              <p className={styles.seeAllcloudSolution}>
                                <span className={styles.seeAllspan}>✓</span>
                                <span> Up to 10 vCPU</span>
                              </p>
                              <p className={styles.seeAllcloudSolution}>
                                <span className={styles.seeAllpan}>✓</span>
                                <span> Cluster only 1</span>
                              </p>
                              <p className={styles.seeAllcloudSolution}>
                                <span className={styles.seeAllspan}>✓</span>
                                <span> Realtime Monitoring</span>
                              </p>
                              <p className={styles.seeAllcloudSolution}>
                                <span className={styles.seeAllspan}>✓</span>
                                <span> Legacy Migration tool</span>
                              </p>
                              <p className={styles.seeAllcloudSolution}>
                                <span className={styles.seeAllspan}>✓</span>
                                <span> Reatime Log viewer</span>
                              </p>
                              <p className={styles.seeAllcloudSolution}>
                                <span className={styles.seeAllspan}>✓</span>
                                <span> Service Flow Mgmt</span>
                              </p>
                              <p className={styles.seeAllcloudSolution}>
                                <span className={styles.seeAllspan}>✓</span>
                                <span> Service Mesh Mgmt</span>
                              </p>
                              <p className={styles.seeAllcloudSolution}>
                                <span className={styles.seeAllspan}>✓</span>
                                <span> Config-map/Secret Mgmt</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.seeAllfreeParent}>
                          <div className={styles.seeAllpricing}>Plus</div>
                          <div className={styles.seeAllframeParent1}>
                            <div className={styles.seeAllparent}>
                              <div className={styles.seeAlldiv}>$1,500</div>
                              <div className={styles.seeAllnoMonthlyFees}>
                                per month
                              </div>
                            </div>
                            <div className={styles.seeAlltext}>
                              <p className={styles.seeAllcloudSolution}>
                                Billed annually or $1,990
                              </p>
                              <p className={styles.seeAllcloudSolution}>
                                month-to-month
                              </p>
                            </div>
                          </div>
                          <div className={styles.seeAllframeChild} />
                          <div className={styles.seeAllwhatsIncludedParent}>
                            <div className={styles.seeAllwhatsIncluded}>
                              All Free features, plus
                            </div>
                            <div className={styles.seeAllupTo10Container}>
                              <p className={styles.seeAllcloudSolution}>
                                <span className={styles.span}>✓</span>
                                <span> 11 - 100 vCPU</span>
                              </p>
                              <p className={styles.cloudSolution}>
                                <span className={styles.span}>✓</span>
                                <span> Unlimited Cluster</span>
                              </p>
                              <p className={styles.cloudSolution}>
                                <span className={styles.span}>✓</span>
                                <span> Cost Tracing</span>
                              </p>
                              <p className={styles.cloudSolution}>
                                <span className={styles.span}>✓</span>
                                <span> Account management</span>
                              </p>
                              <p className={styles.cloudSolution}>
                                <span className={styles.span}>✓</span>
                                <span> Service log viewer</span>
                              </p>
                              <p className={styles.cloudSolution}>
                                <span className={styles.span}>✓</span>
                                <span> Unlimited members</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.freeParent}>
                          <div className={styles.pricing}>Pro</div>
                          <div className={styles.frameParent3}>
                            <div className={styles.parent}>
                              <div className={styles.xVcpu}>
                                $1,500 + $12 x vCPU
                              </div>
                              <div className={styles.perMonth1}>per month</div>
                              <div className={styles.perMonth2}>per month</div>
                            </div>
                            <div className={styles.billedAnnuallyOrContainer1}>
                              <p className={styles.cloudSolution}>
                                Billed annually or $1,990
                              </p>
                              <p className={styles.cloudSolution}>
                                month-to-month
                              </p>
                            </div>
                          </div>
                          <div className={styles.frameChild} />
                          <div className={styles.whatsIncludedParent}>
                            <div className={styles.whatsIncluded}>
                              All Plus features, plus
                            </div>
                            <div className={styles.upTo10Container}>
                              <p className={styles.cloudSolution}>
                                <span className={styles.span}>✓</span>
                                <span> 101 - 1,000 vCPU</span>
                              </p>
                              <p className={styles.cloudSolution}>
                                <span className={styles.span}>✓</span>
                                <span> Unlimited Cluster</span>
                              </p>
                              <p className={styles.cloudSolution}>
                                <span className={styles.span}>✓</span>
                                <span> Cost Tracing</span>
                              </p>
                              <p className={styles.cloudSolution}>
                                <span className={styles.span}>✓</span>
                                <span> Account management</span>
                              </p>
                              <p className={styles.cloudSolution}>
                                <span className={styles.span}>✓</span>
                                <span> Service log viewer</span>
                              </p>
                              <p className={styles.cloudSolution}>
                                <span className={styles.span}>✓</span>
                                <span> Unlimited members</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.freeParent}>
                          <div className={styles.pricing}>Business</div>
                          <div className={styles.frameParent4}>
                            <div className={styles.parent}>
                              <div className={styles.xVcpu1}>
                                $13,500 + $10 x vCPU
                              </div>
                              <div className={styles.noMonthlyFees}>
                                per month
                              </div>
                            </div>
                            <div className={styles.billedAnnuallyOrContainer2}>
                              <p className={styles.cloudSolution}>
                                Billed annually or $16,990
                              </p>
                              <p className={styles.cloudSolution}>
                                month-to-month
                              </p>
                            </div>
                          </div>
                          <div className={styles.frameChild} />
                          <div className={styles.whatsIncludedParent}>
                            <div className={styles.whatsIncluded}>
                              All Pro features, plus
                            </div>
                            <div className={styles.upTo10Container}>
                              <p className={styles.cloudSolution}>
                                <span className={styles.span}>✓</span>
                                <span> 1,001 - Unlimited vCPU</span>
                              </p>
                              <p className={styles.cloudSolution}>
                                <span className={styles.span}>✓</span>
                                <span> Unlimited Cluster</span>
                              </p>
                              <p className={styles.cloudSolution}>
                                <span className={styles.span}>✓</span>
                                <span> Installation support</span>
                              </p>
                              <p className={styles.cloudSolution}>
                                <span className={styles.span}>✓</span>
                                <span> Issue support</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.enterpriseParent}>
                          <div className={styles.enterprise}>Enterprise</div>
                          <div className={styles.frameParent5}>
                            <img
                              className={styles.frameIcon}
                              alt=""
                              src="/frame-3203.svg"
                            />
                            <div className={styles.contactSalesFor}>
                              Contact Sales for pricing
                            </div>
                            <div className={styles.fullPlatformMonitoring}>
                              Full platform monitoring with cross-project
                              insights and optional Premium Customer Success.
                            </div>
                          </div>
                          <div className={styles.frameChild} />
                          <div className={styles.allBusinessFeaturesPlusParent}>
                            <div className={styles.whatsIncluded}>
                              All Business features, plus
                            </div>
                            <div className={styles.upTo10Container}>
                              <p className={styles.cloudSolution}>
                                <span className={styles.span}>✓</span>
                                <span> Unlimited vCPU</span>
                              </p>
                              <p className={styles.cloudSolution}>
                                <span className={styles.span}>✓</span>
                                <span> Unlimited Cluster</span>
                              </p>
                              <p className={styles.cloudSolution}>
                                <span className={styles.span}>✓</span>
                                <span> Installation support</span>
                              </p>
                              <p className={styles.cloudSolution}>
                                <span className={styles.span}>✓</span>
                                <span> Issue support</span>
                              </p>
                              <p className={styles.cloudSolution}>
                                <span className={styles.span}>✓</span>
                                <span> Custom Dashboard</span>
                              </p>
                              <p className={styles.cloudSolution}>
                                <span className={styles.span}>✓</span>
                                <span> Cloud Strategy Consulting</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.allFeatures}>
                    <div className={styles.hideParent}>
                      <div className={styles.pricing}>Hide</div>
                      <img
                        className={styles.iconNavArrowDown}
                        alt=""
                        src="/-icon-nav-arrow-down.svg"
                      />
                    </div>
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
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
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
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
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
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
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
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
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
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
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
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
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
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
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
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
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
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
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
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
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
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
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
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
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
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
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
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
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
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
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
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
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
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
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
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
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
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
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
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
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
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
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
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
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
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.frameChild12}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                        <div className={styles.wrapper}>
                          <img
                            className={styles.iconNavArrowDown}
                            alt=""
                            src="/frame-3204.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.hideParent}>
                      <div className={styles.pricing}>Hide</div>
                      <img
                        className={styles.iconNavArrowDown}
                        alt=""
                        src="/-icon-nav-arrow-down.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.getStartedWrapper}>
                  <div className={styles.pricing}>GET STARTED</div>
                </div>
              </div>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default SiolutionMenu;
