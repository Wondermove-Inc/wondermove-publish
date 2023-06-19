import { React, useEffect, useState } from "react";
import styles from "../pages/1920_desktop/styles.module.css";

const VideoBackground = () => {
  const [isMoreThenXLDesktop, setIsMoreThenXLDesktop] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMoreThenXLDesktop(window.innerWidth > 1920);
    }

    handleResize(); // Check on initial render

    window.addEventListener("resize", handleResize); // Add event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up on component unmount
    };
  }, []);

  return (
    <div
      className={
        isMoreThenXLDesktop
          ? styles.videoContainerMoreThen1920
          : styles.videoContainer
      }
    >
      <video autoPlay muted loop playsInline className={styles.videoPlay}>
        <source src="/1920_desktop/background2.mp4" type="video/mp4" />
      </video>
      {/* <video autoPlay muted loop playsInline className={styles.videoPlay}>
        <source src="/1920_desktop/bpmp4.mp4" type="video/mp4" />
      </video>
      <video autoPlay muted loop playsInline className={styles.videoPlay}>
        <source src="/1920_desktop/bpmp4.mp4" type="video/mp4" />
      </video> */}
      <div className={styles.overlay}></div>
    </div>
  );
};
// import VideoBackground from "../../component/VideoBackground";
//<VideoBackground />
export default VideoBackground;
