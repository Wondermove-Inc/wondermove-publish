import React from "react";
import styles from "../pages/1920_desktop/styles.module.css";

const VideoBackground = () => {
  return (
    <div className={styles.videoContainer}>
      <video autoPlay muted loop playsInline className={styles.videoPlay}>
        <source src="/1920_desktop/bpmp4.mp4" type="video/mp4" />
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
