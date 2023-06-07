import React, { useState } from "react";
//import { FaPlus, FaMinus } from "react-icons/fa";
import styles from "../pages/1920_desktop/styles.module.css";

const QA = () => {
  const [isContentVisible1, setIsContentVisible1] = useState(false);
  const [isContentVisible2, setIsContentVisible2] = useState(false);
  const [isContentVisible3, setIsContentVisible3] = useState(false);
  const [isContentVisible4, setIsContentVisible4] = useState(false);
  const [isContentVisible5, setIsContentVisible5] = useState(false);
  const [isContentVisible6, setIsContentVisible6] = useState(false);

  const toggleContent1 = () => {
    setIsContentVisible1(!isContentVisible1);
  };
  const toggleContent2 = () => {
    setIsContentVisible2(!isContentVisible2);
  };
  const toggleContent3 = () => {
    setIsContentVisible3(!isContentVisible3);
  };
  const toggleContent4 = () => {
    setIsContentVisible4(!isContentVisible4);
  };
  const toggleContent5 = () => {
    setIsContentVisible5(!isContentVisible5);
  };
  const toggleContent6 = () => {
    setIsContentVisible6(!isContentVisible6);
  };

  return (
    <div className={styles.frequentlyAskedQuestionsParent}>
      <div className={styles.globallyValidatedSolutions}>
        Frequently Asked Questions
      </div>
      <div className={styles.frameParent17}>
        <div className={styles.allBusinessFeaturesPlusParent}>
          <div className={styles.paymentOptionsParent}>
            <div className={styles.paymentOptions}>
              What is S-Kuber and how can it benefit my organization?
            </div>
            <img
              className={styles.frameChild20}
              alt=""
              src={
                isContentVisible1
                  ? "/1920_desktop/minus.svg"
                  : "/1920_desktop/plus.svg"
              }
              onClick={toggleContent1}
            />
          </div>

          {isContentVisible1 && (
            <div className={styles.preventResourceWasteOnOutWrapper}>
              {/* content */}
              <div className={styles.solutionForYour}>
                <p className={styles.solutionForYour}>
                  {`S-Kuber is a cloud management service that helps you optimize
                your resource costs and cloud technology`}
                </p>
                <p className={styles.solutionForYour}>
                  {`utilization. By leveraging eBPF, it protects your systems against unnecessary traffic and DoS attacks, thereby `}
                </p>
                <p className={styles.solutionForYour}>
                  {`reducing additional costs. Moreover, it facilitates the
                transition from traditional virtual machines to Kubernetes,`}
                </p>
                <p className={styles.solutionForYour}>
                  {`enabling you to decrease your cloud costs by over 40% while
                enhancing efficiency.`}
                </p>
              </div>
            </div>
          )}

          <div className={styles.lineDiv} />
        </div>

        <div className={styles.frameParent19}>
          <div className={styles.paymentOptionsParent}>
            <div className={styles.paymentOptions}>
              Does S-Kuber require specialized knowledge to operate?
            </div>
            <img
              className={styles.frameChild20}
              alt=""
              src={
                isContentVisible2
                  ? "/1920_desktop/minus.svg"
                  : "/1920_desktop/plus.svg"
              }
              onClick={toggleContent2}
            />
          </div>

          {isContentVisible2 && (
            <div className={styles.preventResourceWasteOnOutWrapper}>
              {/* content */}
              <div className={styles.solutionForYour}>
                <p className={styles.solutionForYour}>
                  {`No, S-Kuber is designed to be accessible for all technology levels. It provides a high-level control UX that can be `}
                </p>
                <p className={styles.solutionForYour}>
                  {`managed without requiring DevOps expertise, but also offers low-level access for DevOps engineers to monitor `}
                </p>
                <p className={styles.solutionForYour}>
                  {`and respond to service failures in real-time.`}
                </p>
              </div>
            </div>
          )}

          <div className={styles.lineDiv} />
        </div>

        <div className={styles.frameParent19}>
          <div className={styles.paymentOptionsParent}>
            <div className={styles.paymentOptions}>
              How does S-Kuber ensure cost reduction?
            </div>
            <img
              className={styles.frameChild20}
              alt=""
              src={
                isContentVisible3
                  ? "/1920_desktop/minus.svg"
                  : "/1920_desktop/plus.svg"
              }
              onClick={toggleContent3}
            />
          </div>

          {isContentVisible3 && (
            <div className={styles.preventResourceWasteOnOutWrapper}>
              {/* content */}
              <div className={styles.solutionForYour}>
                <p className={styles.solutionForYour}>
                  {`S-Kuber offers several strategies for cost reduction. It identifies issues and reduces costs with real-time  `}
                </p>
                <p className={styles.solutionForYour}>
                  {`monitoring. Moreover, it provides Kubernetes-based management/monitoring services with innovative  `}
                </p>
                <p className={styles.solutionForYour}>
                  {`technology to cut down cloud costs by leveraging eBPF and Service Mesh. It also saves costs by shifting from `}
                </p>
                <p className={styles.solutionForYour}>
                  {`peak-based server calculations to a minimum specification method, supporting active parallel scale-up & scale- `}
                </p>
                <p className={styles.solutionForYour}>
                  {`down, and preventing service failure during emergencies with self-validation services. `}
                </p>
              </div>
            </div>
          )}

          <div className={styles.lineDiv} />
        </div>
        <div className={styles.frameParent19}>
          <div className={styles.paymentOptionsParent}>
            <div className={styles.paymentOptions}>
              {`What are the key features of S-Kuber's service management?`}
            </div>
            <img
              className={styles.frameChild20}
              alt=""
              src={
                isContentVisible4
                  ? "/1920_desktop/minus.svg"
                  : "/1920_desktop/plus.svg"
              }
              onClick={toggleContent4}
            />
          </div>

          {isContentVisible4 && (
            <div className={styles.preventResourceWasteOnOutWrapper}>
              {/* content */}
              <div className={styles.solutionForYour}>
                <p className={styles.solutionForYour}>
                  {`S-Kuber optimizes large-scale service management by enabling you to take control of your services with `}
                </p>
                <p className={styles.solutionForYour}>
                  {`intelligent monitoring. It provides seamless oversight of the flow between connected services (Microservice `}
                </p>
                <p className={styles.solutionForYour}>
                  {`aArchitectures) and ensures reliable management of large-scale services.`}
                </p>
              </div>
            </div>
          )}

          <div className={styles.lineDiv} />
        </div>
        <div className={styles.frameParent19}>
          <div className={styles.paymentOptionsParent}>
            <div className={styles.paymentOptions}>
              What pricing plans does S-Kuber offer and what are their features?
            </div>
            <img
              className={styles.frameChild20}
              alt=""
              src={
                isContentVisible5
                  ? "/1920_desktop/minus.svg"
                  : "/1920_desktop/plus.svg"
              }
              onClick={toggleContent5}
            />
          </div>

          {isContentVisible5 && (
            <div className={styles.preventResourceWasteOnOutWrapper}>
              {/* content */}
              <div className={styles.solutionForYour}>
                <p className={styles.solutionForYour}>
                  {`S-Kuber offers several pricing tiers, each with its own set of features : `}
                </p>
                <br />
                <p className={styles.solutionForYour}>
                  {`- Free : Includes up to 10 vCPU, one cluster, real-time monitoring, a legacy migration tool, real-time log viewer, `}
                </p>
                <p className={styles.solutionForYour}>
                  {`service flow management, service mesh management, and config-map/secret management.`}
                </p>
                <p className={styles.solutionForYour}>
                  {`- Plus ($1,500/month) : Includes all Free features, plus 11-100 vCPU, unlimited clusters, cost tracing, account`}
                </p>
                <p className={styles.solutionForYour}>
                  {`management, service log viewer, and unlimited members.`}
                </p>
                <p className={styles.solutionForYour}>
                  {`- Pro ($1,500 + $12 x vCPU/month) : Includes all Plus features, plus 101-1,000 vCPU.`}
                </p>
                <p className={styles.solutionForYour}>
                  {`- Business ($13,500 + $10 x vCPU/month) : Includes all Pro features, plus 1,001-unlimited vCPU, installation and issue  `}
                </p>
                <p className={styles.solutionForYour}>{`support.`}</p>
                <p className={styles.solutionForYour}>
                  {`- Enterprise : Includes all Business features, plus unlimited vCPU, unlimited cluster, installation and issue support, `}
                </p>
                <p className={styles.solutionForYour}>
                  {`custom dashboard, cloud strategy consulting. `}
                </p>
              </div>
            </div>
          )}

          <div className={styles.lineDiv} />
        </div>
        <div className={styles.frameParent19}>
          <div className={styles.paymentOptionsParent}>
            <div className={styles.paymentOptions}>
              What measures does S-Kuber take against DDoS attacks?
            </div>
            <img
              className={styles.frameChild20}
              alt=""
              src={
                isContentVisible6
                  ? "/1920_desktop/minus.svg"
                  : "/1920_desktop/plus.svg"
              }
              onClick={toggleContent6}
            />
          </div>

          {isContentVisible6 && (
            <div className={styles.preventResourceWasteOnOutWrapper}>
              {/* content */}
              <div className={styles.solutionForYour}>
                <p className={styles.solutionForYour}>
                  {`No, S-Kuber is designed to be accessible for all technology levels. It provides a high-level control UX that can be `}
                </p>
                <p className={styles.solutionForYour}>
                  {`managed without requiring DevOps expertise, but also offers low-level access for DevOps engineers to monitor `}
                </p>
                <p className={styles.solutionForYour}>
                  {`and respond to service failures in real-time.`}
                </p>
              </div>
            </div>
          )}

          <div className={styles.lineDiv} />
        </div>
      </div>
    </div>
  );
};

export default QA;
