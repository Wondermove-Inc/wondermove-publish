import React, { useEffect } from "react";
import Swiper from "swiper";

import "swiper/swiper.min.css";
import styles from "../pages/1920_desktop/styles.module.css";
import Lottie from "lottie-react";
import lottie1 from "../asset/1.json";
import lottie2 from "../asset/2.json";
import lottie3 from "../asset/3.json";
import lottie4 from "../asset/4.json";

const VerticalSlider = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 10,
      mousewheel: true,
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className={styles.frameParent7}>
            <div className={styles.frameParent8}>
              <div className={styles.identifyIssuesAndReduceCosParent}>
                <div className={styles.identifyIssuesAndContainer}>
                  <p className={styles.wonderAbout}>Identify issues and</p>
                  <p className={styles.wonderAbout}>reduce costs with</p>
                  <p className={styles.solutionForYour}>real-time monitoring</p>
                </div>
                <div className={styles.offerKubernetesBasedManagemContainer}>
                  <p className={styles.solutionForYour}>
                    Offer Kubernetes-based management/monitoring services with
                    innovative technology not previously included and reduce
                    cloud costs by leveraging eBPF and Service Mesh.
                  </p>
                </div>
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameChild1} />
                <div className={styles.ellipseDiv} />
                <div className={styles.ellipseDiv} />
                <div className={styles.ellipseDiv} />
              </div>
            </div>
            <div className={styles.lottie1Cintainer}>
              <Lottie className={styles.frameChild4} animationData={lottie1} />
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className={styles.frameParent7}>
            <div className={styles.frameParent10}>
              <div className={styles.identifyIssuesAndReduceCosParent}>
                <div className={styles.identifyIssuesAndContainer}>
                  <p className={styles.wonderAbout}>{`Intelligent Server `}</p>
                  <p className={styles.wonderAbout}>{`Forecasting for `}</p>
                  <p className={styles.solutionForYour}>Reduce cloud cost</p>
                </div>
                <div
                  className={styles.offerKubernetesBasedManagemContainer}
                >{`Save costs by shifting from peak-based server calculations to a minimum specification method, supporting active parallel scale-up & scale-down, and preventing service failure during emergencies with self-validation services.`}</div>
              </div>

              <div className={styles.ellipseParent}>
                <div className={styles.ellipseDiv} />
                <div className={styles.frameChild1} />
                <div className={styles.ellipseDiv} />
                <div className={styles.ellipseDiv} />
              </div>
            </div>
            <div className={styles.frameParent11}>
              <div className={styles.lottie2Cintainer}>
                <Lottie animationData={lottie2} />
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className={styles.frameParent7}>
            <div className={styles.frameParent8}>
              <div className={styles.resourceOptimizationDuringDParent}>
                <div className={styles.identifyIssuesAndContainer}>
                  <p className={styles.wonderAbout}>{`Resource `}</p>
                  <p className={styles.wonderAbout}>Optimization</p>
                  <p className={styles.solutionForYour}>during DoS Attacks</p>
                </div>
                <div className={styles.offerKubernetesBasedManagemContainer}>
                  <p className={styles.solutionForYour}>
                    {`Prevent resource waste on out-of-policy traffic, such as
                      DDoS attacks, by utilizing eBPF's XDP technology for Linux
                      Kernel control. (Limit the number of requests you receive
                      from a specific IP address)`}
                  </p>
                </div>
              </div>
              <div className={styles.ellipseParent}>
                <div className={styles.ellipseDiv} />
                <div className={styles.ellipseDiv} />
                <div className={styles.frameChild1} />
                <div className={styles.ellipseDiv} />
              </div>
            </div>
            <div className={styles.lottie3Cintainer}>
              <Lottie animationData={lottie3} />
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className={styles.frameParent7}>
            <div className={styles.frameParent10}>
              <div className={styles.resourceOptimizationDuringDParent}>
                <div className={styles.identifyIssuesAndContainer}>
                  <p className={styles.wonderAbout}>{`Optimized `}</p>
                  <p className={styles.wonderAbout}>large-scale service</p>
                  <p className={styles.solutionForYour}>management</p>
                </div>
                <div className={styles.offerKubernetesBasedManagemContainer}>
                  <p className={styles.solutionForYour}>
                    {`Take control with S-Kuber's intelligent services monitoring.
                    Seamlessly oversee the flow between connected services
                    (MSAs) and ensure reliable management of large-scale
                    services.`}
                  </p>
                </div>
              </div>
              <div className={styles.ellipseParent}>
                <div className={styles.ellipseDiv} />
                <div className={styles.ellipseDiv} />
                <div className={styles.ellipseDiv} />
                <div className={styles.frameChild1} />
              </div>
            </div>
            <div className={styles.lottie4Cintainer}>
              <Lottie animationData={lottie4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalSlider;
