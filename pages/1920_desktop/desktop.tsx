import type { NextPage } from "next";
import styles from "./styles.module.css";
import Nav from "../../component/Nav";
import SliderBar from "../../component/SliderBar";
import Lottie from "lottie-react";
import lottie1 from "../../asset/1.json";
import lottie2 from "../../asset/2.json";
import lottie3 from "../../asset/3.json";
import lottie4 from "../../asset/4.json";
import Logo from "../../component/Logo";
import { useState } from "react";

const SKuber1920: NextPage = () => {
  return (
    <div className={styles.sKuber1920}>
      <div className={styles.groupParent}>
        <div className={styles.groupContainer}>
          <div className={styles.image549Parent}>
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
          </div>
          <div className={styles.gnbParent}>
            <div className={styles.gnb}>
              <Nav />
            </div>
            <div className={styles.solutionForYourCloudStrateParent}>
              <b className={styles.solutionForYourContainer}>
                <p className={styles.solutionForYour}>Solution for Your</p>
                <p className={styles.solutionForYour}>
                  Cloud Strategy and Costs
                </p>
              </b>
              <div className={styles.frameWrapper}>
                <div className={styles.wonderAboutCuttingYourClouParent}>
                  <div className={styles.wonderAboutCuttingContainer}>
                    <p className={styles.wonderAbout}>Wonder about</p>
                    <p className={styles.solutionForYour}>
                      cutting your cloud costs?
                    </p>
                  </div>
                  <div className={styles.frameContainer}>
                    <div className={styles.frameParent}>
                      <SliderBar />
                    </div>
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
                      <div className={styles.vcpu}>
                        <p className={styles.wonderAbout}>
                          Running a successful proof of concept in
                        </p>
                        <p
                          className={styles.solutionForYour}
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
            <div className={styles.frameParent2}>
              <div className={styles.frameParent4}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/1920_desktop/frame-3104.svg"
                />
                <div className={styles.wonderAboutCuttingContainer}>
                  <p className={styles.wonderAbout}>
                    Accessible management for
                  </p>
                  <p className={styles.solutionForYour}>
                    all technology levels
                  </p>
                </div>
                <div className={styles.byTransitioningFromContainer}>
                  Utilize a high-level control UX that can be managed without
                  DevOps expertise, while also providing low-level access for
                  DevOps engineers to monitor and respond to service failures in
                  real time.
                </div>
              </div>

              <div className={styles.frameParent4}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/1920_desktop/frame-3103.svg"
                />
                <div className={styles.wonderAboutCuttingContainer}>
                  <p className={styles.wonderAbout}>Reduction in</p>
                  <p className={styles.solutionForYour}>resource costs</p>
                </div>
                <div className={styles.byTransitioningFromContainer}>
                  <p className={styles.solutionForYour}>
                    S-Kuber service can leverage eBPF to protect against
                    unnecessary traffic and DoS attacks to avoid additional
                    costs.
                  </p>
                  <p className={styles.solutionForYour}>&nbsp;</p>
                </div>
              </div>
              <div className={styles.frameParent3}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/1920_desktop/frame-3102.svg"
                />
                <div className={styles.wonderAboutCuttingContainer}>
                  <p className={styles.wonderAbout}>Transition to the latest</p>
                  <p className={styles.solutionForYour}>cloud technology</p>
                </div>
                <div className={styles.byTransitioningFromContainer}>
                  <p className={styles.solutionForYour}>
                    By transitioning from virtual machines to Kubernetes, you
                    can reduce cloud costs by more than 40% while improving
                    efficiency.
                  </p>
                  <p className={styles.solutionForYour}>&nbsp;</p>
                  <p className={styles.solutionForYour}>{` `}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bgParent}>
          <img className={styles.bgIcon} alt="" src="/1920_desktop/bg.svg" />
          <div className={styles.frameParent6}>
            <div className={styles.frameParent7}>
              <div className={styles.frameParent8}>
                <div className={styles.identifyIssuesAndReduceCosParent}>
                  <div className={styles.identifyIssuesAndContainer}>
                    <p className={styles.wonderAbout}>Identify issues and</p>
                    <p className={styles.wonderAbout}>reduce costs with</p>
                    <p className={styles.solutionForYour}>
                      real-time monitoring
                    </p>
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

              <Lottie className={styles.frameChild4} animationData={lottie1} />
            </div>

            <div className={styles.frameParent7}>
              <div className={styles.frameParent10}>
                <div className={styles.identifyIssuesAndReduceCosParent}>
                  <div className={styles.identifyIssuesAndContainer}>
                    <p
                      className={styles.wonderAbout}
                    >{`Intelligent Server `}</p>
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
                {/* <div className={styles.frameWrapper3}> */}
                <Lottie animationData={lottie2} />
                {/* </div> */}
              </div>
            </div>
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
              <Lottie animationData={lottie3} />
            </div>

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
              <Lottie animationData={lottie4} />
            </div>
          </div>
        </div>
        <div className={styles.groupParent2}>
          <div className={styles.frameParent16}>
            <img
              className={styles.groupChild3}
              alt=""
              src="/1920_desktop/frame-3184.svg"
            />
            <div className={styles.groupChild4} />
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
          <div className={styles.frequentlyAskedQuestionsParent}>
            <div className={styles.globallyValidatedSolutions}>
              Frequently Asked Questions
            </div>
            <div className={styles.frameParent17}>
              <div className={styles.allBusinessFeaturesPlusParent}>
                <div className={styles.paymentOptionsParent}>
                  <div className={styles.paymentOptions}>Payment options</div>
                  <img
                    className={styles.frameChild19}
                    alt=""
                    src="/1920_desktop/group-3185.svg"
                  />
                </div>
                <div className={styles.preventResourceWasteOnOutWrapper}>
                  <div className={styles.paymentOptions}>
                    <p className={styles.solutionForYour}>
                      Prevent resource waste on out-of-policy traffic, such as
                      DDoS attacks,
                    </p>
                    <p className={styles.solutionForYour}>
                      {`by utilizing eBPF's XDP technology for Linux Kernel
                      control.`}
                    </p>
                    <p className={styles.solutionForYour}>
                      (Limit the number of requests you receive from a specific
                      IP address)
                    </p>
                  </div>
                </div>
                <div className={styles.lineDiv} />
              </div>
              <div className={styles.frameParent19}>
                <div className={styles.paymentOptionsParent}>
                  <div className={styles.paymentOptions}>Payment options</div>
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
                  <div className={styles.paymentOptions}>Payment options</div>
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
                  <div className={styles.paymentOptions}>Payment options</div>
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
                  <div className={styles.paymentOptions}>Payment options</div>
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
                  <div className={styles.paymentOptions}>Payment options</div>
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
                  <div className={styles.paymentOptions}>Payment options</div>
                  <img
                    className={styles.frameChild20}
                    alt=""
                    src="/1920_desktop/group-31851.svg"
                  />
                </div>
                <div className={styles.lineDiv} />
              </div>
            </div>
          </div>
          <div className={styles.frameParent25}>
            <div className={styles.pricingParent}>
              <div className={styles.pricing}>Pricing</div>
              <div className={styles.experienceTheNextGenerationContainer}>
                <p className={styles.wonderAbout}>
                  Experience the Next-Generation
                </p>
                <p className={styles.solutionForYour}>Cloud Solution?</p>
              </div>
            </div>
            <div className={styles.groupParent3}>
              <div className={styles.rectangleParent2}>
                <div className={styles.groupChild5} />
                <div className={styles.rectangleParent3}>
                  <div className={styles.groupChild6} />
                  <div className={styles.maskGroup}>
                    <div className={styles.maskGroupChild} />
                  </div>
                </div>
                <div className={styles.frameWrapper4}>
                  <div className={styles.frameParent26}>
                    <div className={styles.freeParent}>
                      <div className={styles.pricing}>Free</div>
                      <div className={styles.frameParent27}>
                        <div className={styles.xVcpuParent}>
                          <div className={styles.div2}>$0</div>
                          <div className={styles.noMonthlyFees}>
                            No monthly fees
                          </div>
                        </div>
                        <div
                          className={styles.billedAnnuallyOrContainer}
                        >{` `}</div>
                      </div>
                      <div className={styles.frameChild32} />
                      <div className={styles.whatsIncludedParent}>
                        <div className={styles.whatsIncluded}>
                          What’s included
                        </div>
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
                    <div className={styles.freeParent}>
                      <div className={styles.pricing}>Plus</div>
                      <div className={styles.frameParent27}>
                        <div className={styles.xVcpuParent}>
                          <div className={styles.div2}>$1,500</div>
                          <div className={styles.noMonthlyFees}>per month</div>
                        </div>
                        <div className={styles.billedAnnuallyOrContainer}>
                          <p className={styles.solutionForYour}>
                            Billed annually or $1,990
                          </p>
                          <p className={styles.solutionForYour}>
                            month-to-month
                          </p>
                        </div>
                      </div>
                      <div className={styles.frameChild32} />
                      <div className={styles.whatsIncludedParent}>
                        <div className={styles.whatsIncluded}>
                          All Free features, plus
                        </div>
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
                    <div className={styles.freeParent}>
                      <div className={styles.pricing}>Pro</div>
                      <div className={styles.frameParent29}>
                        <div className={styles.xVcpuParent}>
                          <div className={styles.xVcpu}>
                            $1,500 + $12 x vCPU
                          </div>
                          <div className={styles.perMonth3}>per month</div>
                          <div className={styles.perMonth4}>per month</div>
                        </div>
                        <div className={styles.billedAnnuallyOrContainer1}>
                          <p className={styles.solutionForYour}>
                            Billed annually or $1,990
                          </p>
                          <p className={styles.solutionForYour}>
                            month-to-month
                          </p>
                        </div>
                      </div>
                      <div className={styles.frameChild32} />
                      <div className={styles.whatsIncludedParent}>
                        <div className={styles.whatsIncluded}>
                          All Plus features, plus
                        </div>
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
                    <div className={styles.freeParent}>
                      <div className={styles.pricing}>Business</div>
                      <div className={styles.frameParent30}>
                        <div className={styles.xVcpuParent}>
                          <div className={styles.xVcpu1}>
                            $13,500 + $10 x vCPU
                          </div>
                          <div className={styles.noMonthlyFees}>per month</div>
                        </div>
                        <div className={styles.billedAnnuallyOrContainer2}>
                          <p className={styles.solutionForYour}>
                            Billed annually or $16,990
                          </p>
                          <p className={styles.solutionForYour}>
                            month-to-month
                          </p>
                        </div>
                      </div>
                      <div className={styles.frameChild32} />
                      <div className={styles.whatsIncludedParent}>
                        <div className={styles.whatsIncluded}>
                          All Pro features, plus
                        </div>
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
                          Full platform monitoring with cross-project insights
                          and optional Premium Customer Success.
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
              </div>
              <div className={styles.frameWrapper5}>
                <div className={styles.seeAllFeaturesParent}>
                  <div className={styles.pricing}>See all features</div>
                  <img
                    className={styles.iconNavArrowDown}
                    alt=""
                    src="/1920_desktop/-icon-nav-arrow-down.svg"
                  />
                </div>
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
