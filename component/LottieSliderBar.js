// import React from "react";
// import { useState, useEffect, useRef } from "react";
// import styles from "../pages/1920_desktop/styles.module.css";
// import Lottie from "lottie-react";
// import lottie1 from "../asset/1.json";
// import lottie2 from "../asset/2.json";
// import lottie3 from "../asset/3.json";
// import lottie4 from "../asset/4.json";

// const LottieSliderBar = ({ onIndicatorItemPress, currentPageIndex }) => {
//   const [scrollPercentage, setScrollPercentage] = useState(0);
//   const [currentLottieIndex, setCurrentLottieIndex] = useState(0);
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);

//   // Lottie array
//   const lottieDataArray = [
//     {
//       animationData: lottie1,
//       className: styles.lottie1Cintainer,
//     },
//     {
//       animationData: lottie2,
//       className: styles.lottie2Cintainer,
//     },
//     {
//       animationData: lottie3,
//       className: styles.lottie3Cintainer,
//     },
//     {
//       animationData: lottie4,
//       className: styles.lottie4Cintainer,
//     },
//   ];

//   // let currentTextIndex = 0;
//   // const hasTextContent = Boolean(pages[currentTextIndex]);

//   // const renderTextContent = () => {
//   //   const currentPage = pages[currentTextIndex];
//   //   return <div className={styles.leftContent}>{currentPage}</div>;
//   // };

//   return (
//     <div className={styles.scrollableContent}>
//       <div className={styles.frameParent7}>
//         {/* text */}

//         {/* {hasTextContent && ( */}
//         {/* <div className={styles.leftContent}>{renderTextContent()}</div> */}
//         <RenderTextContent currentIndex={currentPageIndex} />
//         {/* )} */}
//         {/* Pager */}
// <div className={styles.ellipseParent}>
//   {pages.map((_, index) => {
//     const onIndicatorPress = () =>
//       onIndicatorItemPress && onIndicatorItemPress(index);
//     return (
//       <div
//         key={index}
//         className={`${
//           index === currentPageIndex
//             ? styles.frameChild1
//             : styles.ellipseDiv
//         }`}
//         onClick={() => onIndicatorPress(index)}
//       />
//     );
//   })}
// </div>
//       </div>
//     </div>
//   );
// };

// const pages = [
//   <div className={styles.frameParent8}>
//     <div className={styles.identifyIssuesAndReduceCosParent}>
//       <div className={styles.identifyIssuesAndContainer}>
//         <p className={styles.wonderAbout}>Identify issues and</p>
//         <p className={styles.wonderAbout}>reduce costs with</p>
//         <p className={styles.wonderAbout}>real-time monitoring</p>
//       </div>
//       <div className={styles.offerKubernetesBasedManagemContainer}>
//         <p className={styles.solutionForYour}>
//           Offer Kubernetes-based management/monitoring services with innovative
//           technology not previously included and reduce cloud costs by
//           leveraging eBPF and Service Mesh.
//         </p>
//       </div>
//     </div>
//   </div>,
//   <div className={styles.frameParent10}>
//     <div className={styles.identifyIssuesAndReduceCosParent}>
//       <div className={styles.identifyIssuesAndContainer}>
//         <p className={styles.wonderAbout}>{`Intelligent Server `}</p>
//         <p className={styles.wonderAbout}>{`Forecasting for `}</p>
//         <p className={styles.wonderAbout}>Reduce cloud cost</p>
//       </div>
//       <div
//         className={styles.offerKubernetesBasedManagemContainer}
//       >{`Save costs by shifting from peak-based server calculations to a minimum specification method, supporting active parallel scale-up & scale-down, and preventing service failure during emergencies with self-validation services.`}</div>
//     </div>
//   </div>,
//   <div className={styles.frameParent8}>
//     <div className={styles.resourceOptimizationDuringDParent}>
//       <div className={styles.identifyIssuesAndContainer}>
//         <p className={styles.wonderAbout}>{`Resource `}</p>
//         <p className={styles.wonderAbout}>Optimization</p>
//         <p className={styles.wonderAbout}>during DoS Attacks</p>
//       </div>
//       <div className={styles.offerKubernetesBasedManagemContainer}>
//         <p className={styles.solutionForYour}>
//           {`Prevent resource waste on out-of-policy traffic, such as
//                     DDoS attacks, by utilizing eBPF's XDP technology for Linux
//                     Kernel control. (Limit the number of requests you receive
//                     from a specific IP address)`}
//         </p>
//       </div>
//     </div>
//   </div>,
//   <div className={styles.frameParent10}>
//     <div className={styles.resourceOptimizationDuringDParent}>
//       <div className={styles.identifyIssuesAndContainer}>
//         <p className={styles.wonderAbout}>{`Optimized `}</p>
//         <p className={styles.wonderAbout}>large-scale service</p>
//         <p className={styles.wonderAbout}>management</p>
//       </div>
//       <div className={styles.offerKubernetesBasedManagemContainer}>
//         <p className={styles.solutionForYour}>
//           {`Take control with S-Kuber's intelligent services monitoring.
//                   Seamlessly oversee the flow between connected services
//                   (MSAs) and ensure reliable management of large-scale
//                   services.`}
//         </p>
//       </div>
//     </div>
//   </div>,
// ];

// const RenderTextContent = ({ currentIndex }) => {
//   const [displayIndex, setDisplayIndex] = useState(0);

//   useEffect(() => {
//     if (displayIndex == currentIndex) return;
//     setDisplayIndex(currentIndex);
//   }, [currentIndex]);

//   return displayIndex == 0 ? (
//     <ContentOne />
//   ) : displayIndex == 1 ? (
//     <ContentTwo />
//   ) : displayIndex == 2 ? (
//     <ContentThree />
//   ) : displayIndex == 3 ? (
//     <ContentFour />
//   ) : null;
// };

// const ContentOne = () => (
//   <div className={styles.frameParent8}>
//     <div className={`${styles.identifyIssuesAndReduceCosParent}`}>
//       <div className={`${styles.identifyIssuesAndContainer}`}>
//         <p className={`${styles.wonderAbout} ${styles.leftContent}`}>
//           {`Identify issues and\nreduce costs with\nreal-time monitoring`}
//         </p>
//         {/* <p className={styles.wonderAbout}>reduce costs with</p>
//     <p className={styles.wonderAbout}>real-time monitoring</p> */}
//       </div>
//       <div className={styles.offerKubernetesBasedManagemContainer}>
//         <p className={`${styles.solutionForYour} ${styles.leftContent}`}>
//           Offer Kubernetes-based management/monitoring services with innovative
//           technology not previously included and reduce cloud costs by
//           leveraging eBPF and Service Mesh.
//         </p>
//       </div>
//     </div>
//   </div>
// );

// const ContentTwo = () => (
//   <div className={styles.frameParent10}>
//     <div className={`${styles.identifyIssuesAndReduceCosParent}`}>
//       <div className={`${styles.identifyIssuesAndContainer}`}>
//         <p
//           className={`${styles.wonderAbout} ${styles.leftContent}`}
//         >{`Intelligent Server\nForecasting for\nReduce cloud cost`}</p>
//         {/* <p className={styles.wonderAbout}>{`Forecasting for `}</p>
//     <p className={styles.wonderAbout}>Reduce cloud cost</p> */}
//       </div>
//       <div
//         className={`${styles.offerKubernetesBasedManagemContainer} ${styles.leftContent}`}
//       >{`Save costs by shifting from peak-based server calculations to a minimum specification method, supporting active parallel scale-up & scale-down, and preventing service failure during emergencies with self-validation services.`}</div>
//     </div>
//   </div>
// );

// const ContentThree = () => (
//   <div className={styles.frameParent8}>
//     <div className={`${styles.resourceOptimizationDuringDParent}`}>
//       <div className={`${styles.identifyIssuesAndContainer}`}>
//         <p
//           className={`${styles.wonderAbout} ${styles.leftContent}`}
//         >{`Resource\nOptimization\nduring DoS Attacks`}</p>
//         {/* <p className={styles.wonderAbout}>Optimization</p>
//     <p className={styles.wonderAbout}>during DoS Attacks</p> */}
//       </div>
//       <div className={styles.offerKubernetesBasedManagemContainer}>
//         <p className={`${styles.solutionForYour} ${styles.leftContent}`}>
//           {`Prevent resource waste on out-of-policy traffic, such as
//               DDoS attacks, by utilizing eBPF's XDP technology for Linux
//               Kernel control. (Limit the number of requests you receive
//               from a specific IP address)`}
//         </p>
//       </div>
//     </div>
//   </div>
// );

// const ContentFour = () => (
//   <div className={styles.frameParent10}>
//     <div className={`${styles.resourceOptimizationDuringDParent}`}>
//       <div className={`${styles.identifyIssuesAndContainer}`}>
//         <p
//           className={`${styles.wonderAbout} ${styles.leftContent}`}
//         >{`Optimized\nlarge-scale service\nmanagement`}</p>
//         {/* <p className={styles.wonderAbout}>large-scale service</p>
//     <p className={styles.wonderAbout}>management</p> */}
//       </div>
//       <div className={styles.offerKubernetesBasedManagemContainer}>
//         <p className={`${styles.solutionForYour} ${styles.leftContent}`}>
//           {`Take control with S-Kuber's intelligent services monitoring.
//             Seamlessly oversee the flow between connected services
//             (MSAs) and ensure reliable management of large-scale
//             services.`}
//         </p>
//       </div>
//     </div>
//   </div>
// );

// export default LottieSliderBar;

import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "../pages/1920_desktop/styles.module.css";
import Lottie from "lottie-react";
import lottie1 from "../asset/1.json";
import lottie2 from "../asset/2.json";
import lottie3 from "../asset/3.json";
import lottie4 from "../asset/4.json";
import { Controller, Scene } from "react-scrollmagic";

const LottieSliderBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [currentLottieIndex, setCurrentLottieIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const handlePagerClick = (index) => {
    setCurrentPageIndex(index);
    scrollToPage(index);
  };

  const scrollToPage = (index) => {
    const textContainer = document.getElementById("textContainer");
    const pageHeight = textContainer.clientHeight;
    textContainer.scrollTop = index * pageHeight;
  };

  useEffect(() => {
    // const handleScroll = () => {
    //   const textContainer = document.getElementById("textContainer");
    //   const scrollTop = textContainer.scrollTop;
    //   const containerHeight = textContainer.clientHeight;
    //   const contentHeight = textContainer.scrollHeight;
    //   const percentage = (scrollTop / (contentHeight - containerHeight)) * 100;
    //   setScrollPercentage(percentage);
    //   const lottieCount = 4;
    //   const lastIndex = lottieDataArray.length - 1;
    //   const index = Math.min(
    //     Math.floor((percentage / 100) * lottieDataArray.length),
    //     lastIndex
    //   );
    //   setCurrentLottieIndex(index);
    //   const pageHeight = textContainer.clientHeight;
    //   const currentPage = Math.round(textContainer.scrollTop / pageHeight);
    //   setCurrentPageIndex(currentPage);
    // };
    // const textContainer = document.getElementById("textContainer");
    // textContainer.addEventListener("scroll", handleScroll);
    // return () => {
    //   textContainer.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  // Lottie array
  const lottieDataArray = [
    {
      animationData: lottie1,
      className: styles.lottie1Cintainer,
    },
    {
      animationData: lottie2,
      className: styles.lottie2Cintainer,
    },
    {
      animationData: lottie3,
      className: styles.lottie3Cintainer,
    },
    {
      animationData: lottie4,
      className: styles.lottie4Cintainer,
    },
  ];

  const hasContent = Boolean(lottieDataArray[currentLottieIndex]);

  // const pages = [
  //   <div className={styles.frameParent8}>
  //     <div className={styles.identifyIssuesAndReduceCosParent}>
  //       <div className={styles.identifyIssuesAndContainer}>
  //         <p className={styles.wonderAbout}>Identify issues and</p>
  //         <p className={styles.wonderAbout}>reduce costs with</p>
  //         <p className={styles.wonderAbout}>real-time monitoring</p>
  //       </div>
  //       <div className={styles.offerKubernetesBasedManagemContainer}>
  //         <p className={styles.solutionForYour}>
  //           Offer Kubernetes-based management/monitoring services with
  //           innovative technology not previously included and reduce cloud costs
  //           by leveraging eBPF and Service Mesh.
  //         </p>
  //       </div>
  //     </div>
  //   </div>,
  //   <div className={styles.frameParent10}>
  //     <div className={styles.identifyIssuesAndReduceCosParent}>
  //       <div className={styles.identifyIssuesAndContainer}>
  //         <p className={styles.wonderAbout}>{`Intelligent Server `}</p>
  //         <p className={styles.wonderAbout}>{`Forecasting for `}</p>
  //         <p className={styles.wonderAbout}>Reduce cloud cost</p>
  //       </div>
  //       <div
  //         className={styles.offerKubernetesBasedManagemContainer}
  //       >{`Save costs by shifting from peak-based server calculations to a minimum specification method, supporting active parallel scale-up & scale-down, and preventing service failure during emergencies with self-validation services.`}</div>
  //     </div>
  //   </div>,
  //   <div className={styles.frameParent8}>
  //     <div className={styles.resourceOptimizationDuringDParent}>
  //       <div className={styles.identifyIssuesAndContainer}>
  //         <p className={styles.wonderAbout}>{`Resource `}</p>
  //         <p className={styles.wonderAbout}>Optimization</p>
  //         <p className={styles.wonderAbout}>during DoS Attacks</p>
  //       </div>
  //       <div className={styles.offerKubernetesBasedManagemContainer}>
  //         <p className={styles.solutionForYour}>
  //           {`Prevent resource waste on out-of-policy traffic, such as
  //                     DDoS attacks, by utilizing eBPF's XDP technology for Linux
  //                     Kernel control. (Limit the number of requests you receive
  //                     from a specific IP address)`}
  //         </p>
  //       </div>
  //     </div>
  //   </div>,
  //   <div className={styles.frameParent10}>
  //     <div className={styles.resourceOptimizationDuringDParent}>
  //       <div className={styles.identifyIssuesAndContainer}>
  //         <p className={styles.wonderAbout}>{`Optimized `}</p>
  //         <p className={styles.wonderAbout}>large-scale service</p>
  //         <p className={styles.wonderAbout}>management</p>
  //       </div>
  //       <div className={styles.offerKubernetesBasedManagemContainer}>
  //         <p className={styles.solutionForYour}>
  //           {`Take control with S-Kuber's intelligent services monitoring.
  //                   Seamlessly oversee the flow between connected services
  //                   (MSAs) and ensure reliable management of large-scale
  //                   services.`}
  //         </p>
  //       </div>
  //     </div>
  //   </div>,
  // ];
  const pages = [
    {
      title: `Identify issues and\nreduce costs with\nreal-time monitoring`,
      content:
        "Offer Kubernetes-based management/monitoring services with innovative technology not previously included and reduce cloud costs by leveraging eBPF and Service Mesh.",
    },
    {
      title: `Intelligent Server\nForecasting for\nReduce cloud cost`,
      content:
        "Save costs by shifting from peak-based server calculations to a minimum specification method, supporting active parallel scale-up & scale-down, and preventing service failure during emergencies with self-validation services.",
    },
    {
      title: `Resource\nOptimization\nduring DoS Attacks`,
      content:
        "Prevent resource waste on out-of-policy traffic, such as DDoS attacks, by utilizing eBPF's XDP technology for Linux Kernel control. (Limit the number of requests you receive from a specific IP address)",
    },
    {
      title: `Optimized\nlarge-scale service\nmanagement`,
      content:
        "Take control with S-Kuber's intelligent services monitoring. Seamlessly oversee the flow between connected services (MSAs) and ensure reliable management of large-scale services.",
    },
  ];
  // let currentTextIndex = 0;

  return (
    <div>
      <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
        {pages.map((item, index) => (
          <div className={styles.pagerContainer} key={index}>
            <div
              className={`${styles.pagerContainerText} ${
                index % 2 == 0 ? styles.frameParent8 : styles.frameParent10
              }`}
            >
              <Scene
                pin={index == pages.length - 1 ? false : true}
                key={index}
                duration={0}
              >
                <div className={styles.pagerText}>
                  <p className={styles.wonderAbout}>{item.title}</p>
                  <p className={styles.solutionForYour}>{item.content}</p>
                </div>
              </Scene>
            </div>

            <div
              className={`${styles.lottieContainer} ${lottieDataArray[index].className}`}
            >
              <Lottie
                animationData={lottieDataArray[index].animationData}
                loop={true}
                autoplay={true}
                style={{ height: "1080px", width: "960px" }}
              />
            </div>
          </div>
        ))}
      </Controller>
      {/* <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          zIndex: 1001,
          top: "50%",
          left: "50%",
        }}
      >
        {pages.map((_, index) => {
          // const onIndicatorPress = () =>
          //   onIndicatorItemPress && onIndicatorItemPress(index);
          return (
            <div
              key={index}
              className={`${
                index === currentPageIndex
                  ? styles.frameChild1
                  : styles.ellipseDiv
              }`}
              // onClick={() => onIndicatorPress(index)}
            />
          );
        })}
      </div> */}
    </div>
  );
};

export default LottieSliderBar;
