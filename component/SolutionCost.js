import React, { useState } from "react";
import styles from "../pages/1920_desktop/styles.module.css";

const SolutionCost = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);

  return (
    <div className={styles.frameWrapper4}>
      <div
        className={isHovered1 ? styles.frameParent28 : styles.frameParent26}
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
      >
        <div className={styles.freeParent}>
          <div className={styles.pricing}>Free</div>
          <div className={styles.frameParent27}>
            <div className={styles.xVcpuParent}>
              <div className={styles.div2}>$0</div>
              <div className={styles.noMonthlyFees}>No monthly fees</div>
            </div>
            <div className={styles.billedAnnuallyOrContainer}>{` `}</div>
          </div>
          <div className={styles.frameChild32} />
          <div className={styles.whatsIncludedParent}>
            <div className={styles.whatsIncluded}>What’s included</div>
            <div className={styles.upTo10Container}>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> Up to 10 vCPU</span>
              </p>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> Cluster only 1</span>
              </p>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> Realtime Monitoring</span>
              </p>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> Legacy Migration tool</span>
              </p>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> Reatime Log viewer</span>
              </p>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> Service Flow Mgmt</span>
              </p>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> Service Mesh Mgmt</span>
              </p>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> Config-map/Secret Mgmt</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={isHovered2 ? styles.frameParent28 : styles.frameParent26}
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        <div className={styles.freeParent}>
          <div className={styles.pricing}>Plus</div>
          <div className={styles.frameParent27}>
            <div className={styles.xVcpuParent}>
              <div className={styles.div2}>$1,500</div>
              <div className={styles.noMonthlyFees}>per month</div>
            </div>
            <div className={styles.billedAnnuallyOrContainer}>
              <p className={styles.Billed}>Billed annually or $1,990</p>
              <p className={styles.Billed}>month-to-month</p>
            </div>
          </div>
          <div className={styles.frameChild32} />
          <div className={styles.whatsIncludedParent}>
            <div className={styles.whatsIncluded}>All Free features, plus</div>
            <div className={styles.upTo10Container}>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> 11 - 100 vCPU</span>
              </p>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> Unlimited Cluster</span>
              </p>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> Cost Tracing</span>
              </p>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> Account management</span>
              </p>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> Service log viewer</span>
              </p>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> Unlimited members</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={isHovered3 ? styles.frameParent28 : styles.frameParent26}
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
      >
        <div className={styles.freeParent}>
          <div className={styles.pricing}>Pro</div>
          <div className={styles.frameParent29}>
            <div className={styles.xVcpuParent}>
              <div className={styles.xVcpu}>$1,500 + $12 x vCPU</div>
              <div className={styles.perMonth3}>per month</div>
              <div className={styles.perMonth4}>per month</div>
            </div>
            <div className={styles.billedAnnuallyOrContainer1}>
              <p className={styles.Billed}>Billed annually or $1,990</p>
              <p className={styles.Billed}>month-to-month</p>
            </div>
          </div>
          <div className={styles.frameChild32} />
          <div className={styles.whatsIncludedParent}>
            <div className={styles.whatsIncluded}>All Plus features, plus</div>
            <div className={styles.upTo10Container}>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> 101 - 1,000 vCPU</span>
              </p>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> Unlimited Cluster</span>
              </p>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> Cost Tracing</span>
              </p>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> Account management</span>
              </p>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> Service log viewer</span>
              </p>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> Unlimited members</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={isHovered4 ? styles.frameParent28 : styles.frameParent26}
        onMouseEnter={() => setIsHovered4(true)}
        onMouseLeave={() => setIsHovered4(false)}
      >
        <div className={styles.freeParent}>
          <div className={styles.pricing}>Business</div>
          <div className={styles.frameParent30}>
            <div className={styles.xVcpuParent}>
              <div className={styles.xVcpu1}>$13,500 + $10 x vCPU</div>
              <div className={styles.noMonthlyFees}>per month</div>
            </div>
            <div className={styles.billedAnnuallyOrContainer2}>
              <p className={styles.Billed}>Billed annually or $16,990</p>
              <p className={styles.Billed}>month-to-month</p>
            </div>
          </div>
          <div className={styles.frameChild32} />
          <div className={styles.whatsIncludedParent}>
            <div className={styles.whatsIncluded}>All Pro features, plus</div>
            <div className={styles.upTo10Container}>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> 1,001 - Unlimited vCPU</span>
              </p>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> Unlimited Cluster</span>
              </p>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> Installation support</span>
              </p>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> Issue support</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={isHovered5 ? styles.frameParent28 : styles.frameParent26}
        onMouseEnter={() => setIsHovered5(true)}
        onMouseLeave={() => setIsHovered5(false)}
      >
        <div className={styles.enterpriseParent}>
          <div className={styles.enterprise}>Enterprise</div>
          <div className={styles.frameParent31}>
            <img
              className={styles.frameChild36}
              alt=""
              src="/1920_desktop/frame-3203.svg"
            />
            <div className={styles.contactSalesFor}>
              Contact Sales for pricing
            </div>
            <div className={styles.fullPlatformMonitoring}>
              Full platform monitoring with cross-project insights and optional
              Premium Customer Success.
            </div>
          </div>
          <div className={styles.frameChild32} />
          <div className={styles.allBusinessFeaturesPlusParent}>
            <div className={styles.whatsIncluded}>
              All Business features, plus
            </div>
            <div className={styles.upTo10Container}>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> Unlimited vCPU</span>
              </p>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> Unlimited Cluster</span>
              </p>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> Installation support</span>
              </p>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> Issue support</span>
              </p>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> Custom Dashboard</span>
              </p>
              <p className={styles.solutionForYour}>
                <span className={styles.span1}>✓</span>
                <span> Cloud Strategy Consulting</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionCost;
