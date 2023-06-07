import type { NextPage } from "next";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Nav from "../../component/Nav";
import SliderBar from "../../component/SliderBar";
import Lottie from "lottie-react";
import lottie1 from "../../asset/1.json";
import lottie2 from "../../asset/2.json";
import lottie3 from "../../asset/3.json";
import lottie4 from "../../asset/4.json";
import Logo from "../../component/Logo";

import SolutionMenu from "../../component/SolutionMenu";
import VideoBackground from "../../component/VideoBackground";
import LottieSliderBar from "../../component/LottieSliderBar";
import SolutionCost from "../../component/SolutionCost";
import AdvantageHover from "../../component/AdvantageHover";
import QA from "../../component/QA";

const SKuber1920: NextPage = () => {
  return (
    <div className={styles.sKuber1920}>
      <div className={styles.groupParent}>
        <div className={styles.groupContainer}>
          {/* <div className={styles.image549Parent}>
            <img
              className={styles.image549Icon}
              alt=""
              src="/1920_desktop/image-549@2x.png"
            />
            <img
              className={styles.image647Icon}
              alt=""
              src="/1920_desktop/image-647@2x.png"
            />
          </div> */}

          <VideoBackground />
          <div className={styles.gnb}>
            <Nav />
          </div>
          <div className={styles.gnbParent}>
            <div className={styles.solutionForYourCloudStrateParent}>
              <b className={styles.solutionForYourContainer}>
                <p className={styles.solutionForYourCosts}>Solution for Your</p>
                <p className={styles.solutionForYourCosts}>
                  Cloud Strategy and Costs
                </p>
              </b>
              <div className={styles.frameWrapper}>
                <div className={styles.wonderAboutCuttingYourClouParent}>
                  <div className={styles.wonderAboutCuttingContainer}>
                    <p className={styles.wonderAbout}>Wonder about</p>
                    <p className={styles.wonderAbout}>
                      cutting your cloud costs?
                    </p>
                  </div>
                  <div className={styles.frameContainer}>
                    <SliderBar />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.groupDiv}>
              <img
                className={styles.groupInner}
                alt=""
                src="/1920_desktop/group-3157.svg"
              />
              <img
                className={styles.groupIcon}
                alt=""
                src="/1920_desktop/group-3158.svg"
              />
              <div className={styles.frameWrapper2}>
                <div className={styles.globallyValidatedSolutionsParent}>
                  <div className={styles.globallyValidatedSolutions}>
                    Globally validated solutions
                  </div>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.runningASuccessfulProofOfParent}>
                      <div className={styles.vcpuRunning}>
                        <p className={styles.wonderAbout}>
                          Running a successful proof of concept in
                        </p>
                        <p
                          className={styles.wonderAbout}
                        >{`4 European counteris with `}</p>
                      </div>
                      <div className={styles.container}>
                        <img
                          className={styles.icon}
                          alt=""
                          src="/1920_desktop/--2.svg"
                        />
                        <img
                          className={styles.image646Icon}
                          alt=""
                          src="/1920_desktop/image-646@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <AdvantageHover />
          </div>
        </div>
        {/* <img className={styles.bgIcon} alt="" src="/1920_desktop/bg.svg" /> */}
        <LottieSliderBar />
        <div className={styles.groupParent2}>
          <div className={styles.frameParent16}>
            <img
              className={styles.groupChild3}
              alt=""
              src="/1920_desktop/rectangle-23839.png"
            />
            {/* <div className={styles.groupChild4} /> */}
          </div>
          <div className={styles.footer}>
            <div className={styles.layer1Group}>
              <div className={styles.layer1Icon}>
                <Logo />
              </div>

              <div className={styles.wondermoveSpinOffOfHyundaiParent}>
                <div className={styles.howManyVcpus}>
                  wondermove Spin-off of Hyundai Motor Company
                </div>
                <div className={styles.wondermoveIncContainer}>
                  <p className={styles.solutionForYour}>{`wondermove Inc. `}</p>
                  <p
                    className={styles.solutionForYour}
                  >{` Business Registration Number: 518-81-01644`}</p>
                  <p
                    className={styles.solutionForYour}
                  >{` Address: 2F, 104, Nonhyeon-ro 27-gil, Seocho-gu, Seoul, South Korea`}</p>
                  <p className={styles.solutionForYour}>
                    South Korea Use Inquiries: hawkeye@wondermove.net
                  </p>
                </div>
              </div>
            </div>
          </div>
          <QA />
          {/* <div className={styles.frequentlyAskedQuestionsParent}>
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
                    className={styles.frameChild19}
                    alt=""
                    src="/1920_desktop/group-3185.svg"
                  />
                </div>
                <div className={styles.preventResourceWasteOnOutWrapper}>
                  <div className={styles.paymentOptions}>
                    <p className={styles.solutionForYour}>
                      S-Kuber is a cloud management service that helps you
                      optimize your resource costs and cloud technology
                    </p>
                    <p className={styles.solutionForYour}>
                      {`utilization. By leveraging eBPF, it protects your systems against unnecessary traffic and DoS attacks, thereby `}
                    </p>
                    <p className={styles.solutionForYour}>
                      reducing additional costs. Moreover, it facilitates the
                      transition from traditional virtual machines to
                      Kubernetes,
                    </p>
                    <p className={styles.solutionForYour}>
                      enabling you to decrease your cloud costs by over 40%
                      while enhancing efficiency.
                    </p>
                  </div>
                </div>
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
                    src="/1920_desktop/group-31851.svg"
                  />
                </div>
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
                    src="/1920_desktop/group-31851.svg"
                  />
                </div>
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
                    src="/1920_desktop/group-31851.svg"
                  />
                </div>
                <div className={styles.lineDiv} />
              </div>
              <div className={styles.frameParent19}>
                <div className={styles.paymentOptionsParent}>
                  <div className={styles.paymentOptions}>
                    What pricing plans does S-Kuber offer and what are their
                    features?
                  </div>
                  <img
                    className={styles.frameChild20}
                    alt=""
                    src="/1920_desktop/group-31851.svg"
                  />
                </div>
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
                    src="/1920_desktop/group-31851.svg"
                  />
                </div>
                <div className={styles.lineDiv} />
              </div>
            </div>
          </div> */}
          <div className={styles.frameParent25}>
            <div className={styles.pricingParent}>
              <div className={styles.pricing}>Pricing</div>
              <div className={styles.experienceTheNextGenerationContainer}>
                <p className={styles.wonderAbout}>
                  Experience the Next-Generation
                </p>
                <p className={styles.wonderAbout}>Cloud Solution?</p>
              </div>
            </div>
            <div className={styles.groupParent3}>
              <div className={styles.rectangleParent2}>
                {/* <div className={styles.groupChild5} />
                <div className={styles.rectangleParent3}>
                  <div className={styles.groupChild6} />
                  <div className={styles.maskGroup}>
                    <div className={styles.maskGroupChild} />
                  </div>
                </div> */}
                <SolutionCost />
              </div>

              <div className={styles.frameWrapper5}>
                {/* <div className={styles.seeAllFeaturesParent}>
                  <div className={styles.pricing}>See all features</div>
                  <img
                    className={styles.iconNavArrowDown}
                    alt=""
                    src="/1920_desktop/-icon-nav-arrow-down.svg"
                  />
                </div> */}

                <SolutionMenu />
              </div>
            </div>
            <div className={styles.getStartedWrapper}>
              <div className={styles.pricing}>Get in touch</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SKuber1920;
